const fs = require('fs');
const path = require('path');

const dataDir = path.join(process.cwd(), 'public', 'data');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.json'));

for (const file of files) {
  const filePath = path.join(dataDir, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  let changed = false;
  for (const item of data) {
    if (item.image && !item.image.startsWith('/') && !item.image.startsWith('http')) {
      item.image = '/images/' + item.image.replace(/\.jpg$/, '.webp').replace(/\.png$/, '.png');
      changed = true;
    } else if (item.image && item.image.endsWith('.jpg')) {
      item.image = item.image.replace(/\.jpg$/, '.webp');
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`Updated ${file}`);
  }
}
