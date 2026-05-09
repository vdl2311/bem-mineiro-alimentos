import fs from 'fs';
import { products } from './src/data/products.ts';

const html = fs.readFileSync('produtos_page.html', 'utf8');
const regex = /alt="([^"]+)"/g;
let match;
const productsHtml = new Set();
while ((match = regex.exec(html)) !== null) {
  productsHtml.add(match[1].trim());
}

const productsTs = new Set(products.map(p => p.name.trim()));

const missingInTs = [...productsHtml].filter(x => !productsTs.has(x));
const missingInHtml = [...productsTs].filter(x => !productsHtml.has(x));

console.log('Missing in TS:', missingInTs);
console.log('Missing in HTML:', missingInHtml);
