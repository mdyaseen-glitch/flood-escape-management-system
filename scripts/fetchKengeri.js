const https = require('https');
const fs    = require('fs');
const path  = require('path');

// 4 smaller boxes with retry logic
const boxes = [
  '12.8800,77.4600,12.9050,77.5200',  // Kengeri core + Satellite Town
  '12.9050,77.4600,12.9300,77.5200',  // Uttarahalli + Subramanyapura
  '12.9050,77.5200,12.9400,77.5800',  // RR Nagar + part Mysore Rd
  '12.9300,77.4600,12.9700,77.5500',  // Nayandahalli + Vijayanagar
];

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function fetchBox(bbox) {
  return new Promise((resolve, reject) => {
    const query = `[out:json][timeout:30];(way["highway"](${bbox}););out body;>;out skel qt;`;
    const opts  = {
      hostname: 'overpass-api.de', path: '/api/interpreter', method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Content-Length': Buffer.byteLength(query), 'User-Agent': 'FloodNavApp/1.0' }
    };
    let data = '';
    const req = https.request(opts, res => {
      res.on('data', c => { data += c; });
      res.on('end', () => {
        if (res.statusCode !== 200) { reject(new Error('HTTP ' + res.statusCode)); return; }
        try { resolve(JSON.parse(data)); } catch(e) { reject(e); }
      });
    });
    req.on('error', reject);
    req.write(query);
    req.end();
  });
}

async function fetchAll() {
  const allElements = [];
  const seen = new Set();

  for (let i = 0; i < boxes.length; i++) {
    console.log(`Fetching box ${i+1}/${boxes.length}: ${boxes[i]}`);
    let result = null;
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        result = await fetchBox(boxes[i]);
        break;
      } catch(e) {
        console.log(`  Attempt ${attempt} failed: ${e.message}. Waiting...`);
        await sleep(5000 * attempt);
      }
    }
    if (!result) { console.error(`Box ${i+1} failed after 3 attempts, skipping`); continue; }

    let added = 0;
    result.elements.forEach(el => {
      if (!seen.has(el.id)) { seen.add(el.id); allElements.push(el); added++; }
    });
    console.log(`  Added ${added} new elements (total: ${allElements.length})`);

    if (i < boxes.length - 1) {
      console.log('  Waiting 3s before next request...');
      await sleep(3000);
    }
  }

  const outPath = path.join(__dirname, '..', 'osm_kengeri.json');
  fs.writeFileSync(outPath, JSON.stringify({ version: 0.6, elements: allElements }));

  const ways  = allElements.filter(e => e.type === 'way');
  const nodes = allElements.filter(e => e.type === 'node');
  console.log('\n✅ Done! File saved to osm_kengeri.json');
  console.log(`   Ways: ${ways.length} | Nodes: ${nodes.length}`);
  console.log(`   Named roads: ${ways.filter(w=>w.tags?.name).length}`);
  console.log(`   File size: ${Math.round(fs.statSync(outPath).size/1024)}KB`);
}

fetchAll().catch(e => { console.error(e); process.exit(1); });
