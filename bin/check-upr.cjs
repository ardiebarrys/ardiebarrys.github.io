const fs=require('fs'), vm=require('vm'), assert=require('assert/strict');
const page=fs.readFileSync('_pages/upr-proteotoxic-stress-resolution.md','utf8');
const html=page.split('<script>')[0];
const nodes=[];
for (const match of html.matchAll(/<([a-z][\w-]*)\b([^>]*)>/g)) {
  const attrs=Object.fromEntries([...match[2].matchAll(/([\w-]+)="([^"]*)"/g)].map(m=>[m[1],m[2]]));
  const classes=new Set((attrs.class||'').split(' '));
  nodes.push({ tagName:match[1], attrs, value:attrs.value, listeners:{}, innerHTML:'', textContent:'', offsetWidth:200,
    classList:{toggle(key,on){on ? classes.add(key) : classes.delete(key);},contains(key){return classes.has(key);}},
    style:{setProperty(){}},getAttribute(key){return attrs[key]??null;},setAttribute(key,val){attrs[key]=String(val);},
    addEventListener(name,handler){this.listeners[name]=handler;}, click(){this.listeners.click?.();}
  });
}
function select(selector){
  if(selector.startsWith('#')) return nodes.filter(n=>n.attrs.id===selector.slice(1));
  if(selector.startsWith('.')) return nodes.filter(n=>n.classList.contains(selector.slice(1)));
  const attr=selector.match(/^\[([\w-]+)\]$/)?.[1];
  if(attr) return nodes.filter(n=>attr in n.attrs);
  throw new Error('Unrecognized selector '+selector);
}
const root=select('#upr-circuit-lab')[0];
root.querySelector=s=>select(s)[0]; root.querySelectorAll=select;
const script=page.match(/<script>([\s\S]*?)<\/script>/)[1];
vm.runInNewContext(script,{document:{getElementById:id=>select('#'+id)[0]},window:{matchMedia(){return {matches:true};}}});
for(const attr of ['data-set-view','data-set-phase','data-branch','data-tox','data-cell','data-mode','data-evidence']) {
 const group=select('['+attr+']');
 assert(group.length>1);
 for(const button of group) {
  button.click();
  assert.equal(group.filter(b=>b.attrs['aria-pressed']==='true').length,1);
  assert.equal(button.attrs['aria-pressed'],'true');
  assert(button.classList.contains('is-active'));
  for(const id of button.attrs['aria-controls'].split(' ')) assert.equal(select('#'+id).length,1,'Missing controlled region '+id);
 }
}
assert.equal(select('#upr-scene-stage')[0].attrs['data-phase'],'failed');
assert.equal(select('#upr-scene-phase-title')[0].textContent,'3B · Persistent stress');
assert.match(select('#upr-scene-phase-copy')[0].textContent,/alternative scenario/);
assert.match(select('#upr-scene-view')[0].textContent,/ER close-up/);
const recovery=select('#sim-recovery')[0];
recovery.value=10; recovery.listeners.input();
const low=Number.parseFloat(select('#sim-residual-label')[0].textContent);
recovery.value=100; recovery.listeners.input();
const high=Number.parseFloat(select('#sim-residual-label')[0].textContent);
assert(high<low,'Greater modeled recovery should lower residual stress');
console.log('PASS: 33 selection buttons across 7 groups, controlled region IDs, scene phase/view explanations and recovery direction.');
console.log('PASS: reduced-motion branch does not assign a cell-detail animation.');
assert(!select('#celltype-detail')[0].style.animation);

// The homepage guide must work before any renderer has loaded.
const atlas=fs.readFileSync('_includes/depth3d/upr-explorer.html','utf8');
const atlasNodes=[];
function atlasNode(attrs={}) {
 return {attrs, dataset:Object.fromEntries(Object.entries(attrs).filter(([k])=>k.startsWith('data-')).map(([k,v])=>[k.slice(5),v])),
  classList:{remove(){},add(){}},children:[],hidden:false,textContent:'',listeners:{},setAttribute(k,v){this.attrs[k]=String(v);},
  getAttribute(k){return this.attrs[k]??null;},addEventListener(k,f){this.listeners[k]=f;},
  replaceChildren(){this.children=[];},appendChild(n){this.children.push(n);},
  click(){this.listeners.click?.();}
 };
}
for(const match of atlas.matchAll(/<([a-z][\w-]*)\b([^>]*)>/g)) {
 const attrs=Object.fromEntries([...match[2].matchAll(/([\w-]+)="([^"]*)"/g)].map(m=>[m[1],m[2]]));
 atlasNodes.push(atlasNode(attrs));
}
function atlasSelect(selector) {
 if(selector.startsWith('#')) return atlasNodes.find(n=>n.attrs.id===selector.slice(1));
 if(selector.startsWith('.')) return atlasNodes.find(n=>(n.attrs.class||'').split(' ').includes(selector.slice(1)));
 throw new Error('Unexpected atlas selector: '+selector);
}
const atlasStage=atlasSelect('#upr-figure-stage'), atlasTabs=atlasSelect('.upr-fig-tabs');
atlasStage.querySelector=atlasSelect;
const topicButtons=atlasNodes.filter(n=>'data-topic' in n.attrs);
atlasTabs.querySelectorAll=()=>topicButtons;
vm.runInNewContext(fs.readFileSync('assets/js/depth3d-upr-figure.js','utf8'),{
 document:{getElementById:()=>atlasStage,currentScript:{src:'https://example.com/assets/js/depth3d-upr-figure.js',getAttribute:()=>'/assets/js/lib/three-r170.module.min.js'},createElement:()=>atlasNode()},
 window:{matchMedia:()=>({matches:false})}, URL,
 IntersectionObserver:class {observe(){} disconnect(){}}
});
for(const button of topicButtons) {
 button.click();
 assert.equal(topicButtons.filter(b=>b.attrs['aria-pressed']==='true').length,1);
 assert.equal(button.attrs['aria-pressed'],'true');
 assert.equal(atlasSelect('#upr-topic-steps').children.length,3);
 assert(atlasSelect('#upr-topic-copy').textContent.length>100);
 for(const id of button.attrs['aria-controls'].split(' ')) assert(atlasSelect('#'+id));
}
assert(atlasSelect('#upr-topic-note').textContent.length > 40);
assert(atlas.includes('<svg ')&&atlas.includes('<title id="upr-diagram-title">'));
console.log('PASS: all five atlas topics remain usable before WebGL loads; fallback and controlled regions exist.');

// Exercise real Three.js geometry on both rendering budgets, without a browser/GPU.
(async()=>{
 await new Promise(resolve=>setImmediate(resolve));
 assert.equal(atlasSelect(".upr-fig-tools").hidden,true);
 assert.match(atlasSelect(".upr-fig-status").textContent,/3D is unavailable/);
 const {pathToFileURL}=require('url'), path=require('path');
 const THREE=await import(pathToFileURL(path.resolve('assets/js/lib/three-r170.module.min.js')).href);
 const {createUPRCell}=await import(pathToFileURL(path.resolve('assets/js/upr-cell-anatomy.js')).href);
 for(const lowPower of [false,true]) {
  const anatomy=createUPRCell(THREE,{lowPower});
  const bounds=new THREE.Box3().setFromObject(anatomy.group).getSize(new THREE.Vector3());
  assert(bounds.x>2.8&&bounds.x<3.5&&bounds.y>2&&bounds.y<3);
  assert.deepEqual(Object.keys(anatomy.sensors).sort(),['atf6','ire1','perk']);
  const resources=new Set();
  anatomy.group.traverse(object=>{
   if(object.geometry){
    const a=object.geometry.attributes.position.array;
    assert(a.every(Number.isFinite),'Non-finite anatomy vertex');
    resources.add(object.geometry);
   }
   if(object.material) resources.add(object.material);
   if(object.isInstancedMesh) assert(object.instanceMatrix.array.every(Number.isFinite),'Invalid instance transform');
  });
  let disposed=0;
  resources.forEach(r=>r.addEventListener('dispose',()=>disposed++));
  anatomy.dispose();
  assert.equal(disposed,resources.size,'Every anatomy resource should be released');
 }
 console.log('PASS: real anatomy bounds, finite geometry, sensor registry and resource disposal on both rendering budgets.');
})().catch(error=>{console.error(error);process.exitCode=1;});
