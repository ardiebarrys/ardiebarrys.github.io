const fs=require('fs'), vm=require('vm'), assert=require('node:assert/strict');
const script=fs.readFileSync('assets/js/site-design.js','utf8');
new vm.Script(script);
function element(extra={}) {
 const listeners={}, attrs={}, classes=new Set();
 return Object.assign({hidden:false,value:'',textContent:'',dataset:{},listeners,attrs,
  classList:{add:x=>classes.add(x),remove:x=>classes.delete(x),contains:x=>classes.has(x)},
  addEventListener:(type,fn)=>{listeners[type]=fn;},setAttribute:(key,value)=>{attrs[key]=String(value);},
  removeAttribute:key=>{delete attrs[key];},getAttribute:key=>attrs[key],focus(){this.focused=true;},getClientRects:()=>[{}]
 },extra);
}
const ids=Object.fromEntries(['publication-filters','publication-search','publication-track','publication-year','publication-results','publication-empty'].map(id=>[id,element()]));
const records=[
 element({textContent:'Mitochondria and aerosol exposure',dataset:{project:'thesis',year:'2026'}}),
 element({textContent:'Cellular signaling and protein stress',dataset:{project:'framework',year:'2026'}}),
 element({textContent:'Environmental exposure commentary',dataset:{project:'other',year:'2025'}})
];
const years=[element({querySelectorAll:()=>records.slice(0,2)}),element({querySelectorAll:()=>records.slice(2)})];
const root=element({querySelectorAll:selector=>selector==='.pub'?records:years});
const reset=element(), summary=element(), close=element(), finalLink=element(), panel=element({querySelectorAll:()=>[close,finalLink]});
const menu=element({querySelector:s=>s==='summary'?summary:s==='[data-menu-close]'?close:panel,open:false});
const formStatus=element(), send=element({textContent:'Send message'});
const form=element({action:'https://formspree.io/f/mjgdnjlb',querySelector:()=>send,reportValidity:()=>true,reset(){this.wasReset=true;}});
let requestMode='success',requests=0;
const document={
 activeElement:null,getElementById:id=>id==='site-menu'?menu:id==='contact-form-status'?formStatus:ids[id],
 querySelector:selector=>selector==='.pubs'?root:selector==='.contact-form'?form:null,
 querySelectorAll:selector=>selector==='[data-clear-publications]'?[reset]:[]
};
const context={document,window:{matchMedia:()=>({matches:true}),fetch:true},setTimeout:fn=>{fn();return 1;},clearTimeout(){},
 navigator:{clipboard:{writeText:async()=>{}}},FormData:class{},
 fetch:async()=>{requests++;if(requestMode==='network')throw Error('Network unavailable');return {ok:requestMode==='success'};}
};
vm.runInNewContext(script,context);
function change(id,value,type='change'){ids[id].value=value;ids[id].listeners[type]();}
assert.equal(ids['publication-results'].textContent,'3 of 3 publications');
change('publication-search','exposure','input');assert.deepEqual(records.map(r=>r.hidden),[false,true,false]);
change('publication-track','thesis');assert.deepEqual(records.map(r=>r.hidden),[false,true,true]);assert.equal(years[1].hidden,true);
change('publication-year','2025');assert.equal(ids['publication-empty'].hidden,false);assert(records.every(r=>r.hidden));
reset.listeners.click();assert(records.every(r=>!r.hidden));assert.equal(ids['publication-search'].focused,true);assert.equal(ids['publication-empty'].hidden,true);
menu.open=true;menu.listeners.toggle();assert(close.focused);assert.equal(summary.attrs['aria-expanded'],'true');
document.activeElement=finalLink;let prevented=false;menu.listeners.keydown({key:'Tab',shiftKey:false,preventDefault(){prevented=true;}});assert(prevented&&close.focused);
menu.listeners.keydown({key:'Escape',preventDefault(){}});assert.equal(menu.open,false);assert(summary.focused);
(async()=>{
 const event={preventDefault(){}};
 await form.listeners.submit(event);assert.equal(requests,1);assert(form.wasReset);assert.match(formStatus.textContent,/Message sent/);assert.equal(send.disabled,false);
 requestMode='network';form.wasReset=false;await form.listeners.submit(event);assert(!form.wasReset);assert.match(formStatus.textContent,/could not be sent/);assert.equal(send.disabled,false);
 let submitted=false;form.reportValidity=()=>false;const before=requests;await form.listeners.submit(event);assert.equal(requests,before);
 console.log('PASS: publication search, combined filters, year groups, empty state, reset, modal focus, Escape and form success/failure/validation. No network requests made.');
})().catch(error=>{console.error(error);process.exitCode=1;});
const pagePaths=new Set(fs.readdirSync('_pages').filter(f=>f.endsWith('.md')).map(f=>fs.readFileSync('_pages/'+f,'utf8').match(/^permalink:\s*(.+)$/m)?.[1].trim()));
const header=fs.readFileSync('_includes/header.liquid','utf8');
for(const match of header.matchAll(/href="\{\{ '([^']+)' \| relative_url \}\}"/g)) assert(pagePaths.has(match[1]),'Missing navigation destination '+match[1]);
assert.equal(fs.readFileSync('assets/fonts/manrope-latin-variable.woff2').subarray(0,4).toString(),'wOF2');
assert(fs.existsSync('assets/fonts/Manrope-OFL.txt'));
assert(!header.includes('navbar-menu-toggle'),'Old checkbox navigation should be replaced');
assert(!fs.readFileSync('_includes/footer.liquid','utf8').includes('site-stars'),'Decorative star background should be replaced');
console.log('PASS: navigation destinations, real font asset and license, updated page shell.');
