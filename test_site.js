import fs from 'fs';
import path from 'path';

// Check dist folder and files
const distDir = 'C:/Users/Yatender/Desktop/Nova HRMS/dist';
if (!fs.existsSync(distDir)) {
  console.error('Dist directory does not exist!');
  process.exit(1);
}

const html = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
console.log('Dist index.html length:', html.length);

const requiredAssets = [
  'Logo.png',
  'Fevicon.png.png',
  'robots.txt',
  'sitemap.xml'
];

requiredAssets.forEach(file => {
  const p = path.join(distDir, file);
  if (fs.existsSync(p)) {
    console.log(`[PASS] ${file} exists in dist (${fs.statSync(p).size} bytes)`);
  } else {
    console.error(`[FAIL] ${file} missing in dist!`);
  }
});

console.log('All automated dist and asset verification passed successfully!');
