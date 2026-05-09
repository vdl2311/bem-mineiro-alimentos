import fs from 'fs';
const code = fs.readFileSync('src/pages/Home.tsx', 'utf8');
let stack = [];
let htmlRe = /<\/?(div|section|span|a|p|h[1-6]|ul|li|blockquote)(?:\s+[^>]*?)?>/g;
let m;
let lines = code.split('\n');
function getLine(idx) {
  let sub = code.substring(0, idx);
  return sub.split('\n').length;
}

while ((m = htmlRe.exec(code)) !== null) {
  let tag = m[0];
  let isClosing = tag.startsWith('</');
  let isSelfClosing = tag.endsWith('/>');
  if (isSelfClosing) continue;
  let type = tag.match(/<\/?([a-zA-Z0-9]+)/)[1];
  
  if (!isClosing) {
    stack.push({type, line: getLine(m.index)});
  } else {
    if (stack.length === 0) {
      console.log('Unmatched closing tag', tag, 'at line', getLine(m.index));
    } else {
      let last = stack.pop();
      if (last.type !== type) {
        console.log('Mismatched tag expected', last.type, 'but got', type, 'at line', getLine(m.index), 'last was opened at', last.line);
        break;
      }
    }
  }
}
