const https = require('https');
const fs    = require('fs');
const path  = require('path');

// Wider Kengeri bounding box to capture ALL roads
// south=12.8700, west=77.4600, north=12.9300, east=77.5500
const query = `[out:json][timeout:60];
(
  way["highway"~"primary|secondary|tertiary|residential|unclassified|service|living_street|road|trunk"]
     (12.8700,77.4600,12.9300,77.5500);
);
out body;
>;
out skel qt;`;

const options = {
  hostname: 'overpass-api.de',
  path:     '/api/interpreter',
  method:   'POST',
  headers: {
    'Content-Type':   'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(query),
    'User-Agent':     'FloodNavApp/1.0 (educational project)'
  }
};

console.log('Fetching ALL Kengeri roads from OpenStreetMap...');
console.log('Bounding box: 12.87-12.93 N, 77.46-77.55 E');

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', c => { data += c; });
  res.on('end', () => {
    if (res.statusCode !== 200) {
      console.error('HTTP Error:', res.statusCode, data.slice(0, 200));
      process.exit(1);
    }
    const out = path.join(__dirname, '..', 'osm_kengeri.json');
    fs.writeFileSync(out, data, 'utf8');
    const parsed = JSON.parse(data);
    const ways   = parsed.elements.filter(e => e.type === 'way');
    const nodes  = parsed.elements.filter(e => e.type === 'node');
    console.log('\n✅ Done!');
    console.log('   Ways (roads):', ways.length);
    console.log('   Nodes:       ', nodes.length);
    console.log('\nRoad type breakdown:');
    const types = {};
    ways.forEach(w => { types[w.tags.highway] = (types[w.tags.highway]||0)+1; });
    Object.entries(types).sort((a,b)=>b[1]-a[1]).forEach(([t,c])=>console.log('  ',t+':',c));
    console.log('\nSample road names:');
    [...new Set(ways.filter(w=>w.tags.name).map(w=>w.tags.name))].slice(0,20)
      .forEach(n=>console.log('  -',n));
  });
});

req.on('error', e => { console.error('Request error:', e.message); process.exit(1); });
req.write(query);
req.end();
