/**
 * Fetches real road data for Koramangala from OpenStreetMap Overpass API
 * and saves it as osm_raw.json
 */
const https = require('https');
const fs    = require('fs');
const path  = require('path');

// Bounding box: south, west, north, east — tight around Koramangala
const query = `
[out:json][timeout:30];
(
  way["highway"~"primary|secondary|tertiary|residential|unclassified|service"]
     ["name"]
     (12.9250,77.6080,12.9450,77.6420);
);
out body;
>;
out skel qt;
`.trim();

const postData = query;

const options = {
  hostname: 'overpass-api.de',
  path:     '/api/interpreter',
  method:   'POST',
  headers:  {
    'Content-Type':   'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(postData),
    'User-Agent':     'FloodNavApp/1.0 (educational project)'
  }
};

console.log('Fetching Koramangala road data from OpenStreetMap...');

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', chunk => { data += chunk; });
  res.on('end', () => {
    if (res.statusCode !== 200) {
      console.error('HTTP Error:', res.statusCode, data.slice(0, 300));
      process.exit(1);
    }
    const outPath = path.join(__dirname, '..', 'osm_raw.json');
    fs.writeFileSync(outPath, data, 'utf8');
    const parsed = JSON.parse(data);
    console.log(`✅ Saved ${parsed.elements.length} elements to osm_raw.json`);

    // Quick summary
    const ways  = parsed.elements.filter(e => e.type === 'way');
    const nodes = parsed.elements.filter(e => e.type === 'node');
    console.log(`   Ways (roads): ${ways.length}`);
    console.log(`   Nodes:        ${nodes.length}`);

    // Print first 10 road names
    console.log('\nSample roads found:');
    ways.slice(0, 15).forEach(w => {
      console.log(`  - ${w.tags?.name || '(unnamed)'} [${w.tags?.highway}]`);
    });
  });
});

req.on('error', (e) => {
  console.error('Request error:', e.message);
  process.exit(1);
});

req.write(postData);
req.end();
