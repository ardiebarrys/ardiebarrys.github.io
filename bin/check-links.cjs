const fs=require('fs'),path=require('path');
const root=path.resolve('_site'),errors=[];
function walk(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(entry=>entry.isDirectory()?walk(path.join(dir,entry.name)):[path.join(dir,entry.name)]);}
const htmlFiles=walk(root).filter(file=>file.endsWith('.html'));
for(const file of htmlFiles){
 const html=fs.readFileSync(file,'utf8');
 for(const tag of html.matchAll(/<(?:a|link|script|img|source)\b[^>]*>/g)) {
  for(const attr of tag[0].matchAll(/\b(?:href|src)="([^"]+)"/g)) {
   let url=attr[1].replace(/^https:\/\/ardiebarrysailis\.com(?=\/)/,'');
   if(!url.startsWith('/')||url.startsWith('//'))continue;
   const pathname=decodeURIComponent(url.split(/[?#]/)[0]);
   const target=path.resolve(root,'.'+pathname);
   if(!target.startsWith(root))continue;
   if(!fs.existsSync(target)&&!fs.existsSync(path.join(target,'index.html'))) errors.push(path.relative(root,file)+' -> '+url);
  }
 }
}
if(errors.length){console.error([...new Set(errors)].join('\n'));process.exitCode=1;}
else console.log('PASS: internal page and asset destinations in '+htmlFiles.length+' compiled HTML pages.');
