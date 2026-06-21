const https = require('https');
const fs    = require('fs');
const path  = require('path');

// Kengeri bounding box: south=12.8900, west=77.4800, north=12.9200, east=77.5300
const query = `[out:json][timeout:30];
(
  way["highway"~"primary|secondary|tertiary|residential|unclassified|service"]["name"]
     (12.8900,77.4800,12.9200,77.5300);
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
    'User-Agent':     'FloodNavApp/1.0 (educational)'
  }
};

console.log('Fetching Kengeri road data from OpenStreetMap...');

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', c => { data += c; });
  res.on('end', () => {
    if (res.statusCode !== 200) {
      console.error('HTTP Error:', res.statusCode);
      process.exit(1);
    }
    const out = path.join(__dirname, '..', 'osm_kengeri.json');
    fs.writeFileSync(out, data, 'utf8');
    const parsed = JSON.parse(data);
    const ways  = parsed.elements.filter(e => e.type === 'way');
    const nodes = parsed.elements.filter(e => e.type === 'node');
    console.log('Done! Ways:', ways.length, '| Nodes:', nodes.length);
    console.log('\nSample roads:');
    ways.slice(0, 15).forEach(w => console.log(' -', w.tags.name, '[' + w.tags.highway + ']'));
  });
});

req.on('error', e => { console.error('Error:', e.message); process.exit(1); });
req.write(query);
req.end();
