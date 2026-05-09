import https from 'https';
import fs from 'fs';

https.get('https://bemmineiroalimentos.com.br/nossos-produtos/', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    fs.writeFileSync('produtos_page.html', data);
    console.log('done');
  });
});
