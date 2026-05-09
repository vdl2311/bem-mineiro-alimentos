import fs from 'fs';

const html = fs.readFileSync('produtos_page.html', 'utf8');
const regex = /alt="([^"]+)"/g;
let match;
const products = new Set();
while ((match = regex.exec(html)) !== null) {
  products.add(match[1]);
}
console.log(Array.from(products));
