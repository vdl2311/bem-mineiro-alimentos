import fs from 'fs';

const html = fs.readFileSync('produtos_page.html', 'utf8');
const startIndex = html.indexOf('Modo De Preparo');
const endIndex = html.indexOf('2019 Bem Mineiro Alimentos', startIndex);
if (startIndex !== -1 && endIndex !== -1) {
  const sectionHtml = html.substring(startIndex, endIndex);
  console.log(sectionHtml.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
} else {
  console.log('not found');
}
