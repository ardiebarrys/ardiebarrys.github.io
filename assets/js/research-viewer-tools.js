/* Shared exports and view state; scene engines remain responsible for biology. */
(() => {
 'use strict';
 if(window.ResearchViewer)return;
 const api=window.ResearchViewer={pageVisible:true};
 window.addEventListener('message',e=>{if(e.origin===location.origin&&e.source===parent&&e.data?.type==='research-visibility')api.pageVisible=!!e.data.visible;});
 api.attach=function(a){
  const tools=document.createElement('div');tools.className='rv-tools';tools.setAttribute('role','group');tools.setAttribute('aria-label','Figure controls');a.root.append(tools);
  const status=document.createElement('span');status.className='rv-status';status.setAttribute('role','status');
  function say(s){status.textContent=s;}
  function button(label,fn){const b=document.createElement('button');b.type='button';b.textContent=label;b.addEventListener('click',()=>fn(b));tools.append(b);return b;}
  if(a.previous)button('Previous',()=>a.previous());
  if(a.play){const p=button('Play',b=>{const active=a.play();b.textContent=active?'Pause':'Play';b.setAttribute('aria-pressed',String(active));});a.onPlayChange=active=>{p.textContent=active?'Pause':'Play';p.setAttribute('aria-pressed',String(active));};}
  if(a.next)button('Next',()=>a.next());
  if(a.replay)button('Replay',()=>a.replay());
  if(a.labels)button('Labels',b=>b.setAttribute('aria-pressed',String(a.labels()))).setAttribute('aria-pressed','true');
  if(a.quality)button('Auto detail',b=>{b.textContent=a.quality();});
  if(a.fullscreen)button('Fullscreen',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await a.root.requestFullscreen();}catch{say('Fullscreen is unavailable in this browser.');}});
  button('Share stage',async()=>{
   let url=new URL(location.href);try{if(parent!==window&&parent.location.origin===location.origin)url=new URL(parent.location.href);}catch{}
   url.hash='view='+encodeURIComponent(JSON.stringify({v:1,kind:a.kind,...a.getState()}));
   try{await navigator.clipboard.writeText(url.href);say('Stage link copied');}catch{tools.querySelector('input')?.remove();const field=document.createElement('input');field.readOnly=true;field.value=url.href;field.setAttribute('aria-label','Stage link to copy');tools.append(field);field.focus();field.select();say('Copy the selected link');}
  });
  button('Save figure',()=>{
   try{
    a.render();const source=a.canvas,scale=Math.min(1,1600/source.width),width=Math.round(source.width*scale),height=Math.round(source.height*scale);
    const output=document.createElement('canvas');output.width=Math.max(800,width);output.height=height+150;const ctx=output.getContext('2d');ctx.fillStyle='#091716';ctx.fillRect(0,0,output.width,output.height);ctx.drawImage(source,0,0,width,height);
    const rect=source.getBoundingClientRect(),sx=width/rect.width,sy=height/rect.height;
    (a.labelElements?.()||[]).forEach(el=>{if(el.hidden||getComputedStyle(el).display==='none')return;const r=el.getBoundingClientRect();if(r.bottom<rect.top||r.top>rect.bottom)return;const x=Math.max(4,(r.left-rect.left)*sx),y=Math.max(4,(r.top-rect.top)*sy);ctx.font='14px Arial';const text=el.textContent.trim(),tw=Math.min(width-8,ctx.measureText(text).width+16);ctx.fillStyle='#081b17ee';ctx.fillRect(Math.min(x,width-tw-4),y,tw,25);ctx.fillStyle='#d9eee6';ctx.fillText(text,Math.min(x,width-tw-4)+8,y+18);});
    ctx.fillStyle='#a1e8c7';ctx.font='bold 22px Arial';ctx.fillText(a.title,24,height+36);ctx.fillStyle='#e2eee8';ctx.font='18px Arial';
    let line='',y=height+68;for(const word of a.caption().split(/\s+/)){if(ctx.measureText(line+word).width>output.width-48){ctx.fillText(line,24,y);line='';y+=24;}line+=word+' ';}ctx.fillText(line,24,y);
    ctx.fillStyle='#9ab6aa';ctx.font='14px Arial';ctx.fillText('Ardie Barry Sailis · ardiebarrysailis.com',24,output.height-17);
    output.toBlob(blob=>{if(!blob){say('Could not save this frame.');return;}const url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;link.download=a.kind+'-mechanism.png';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);say('Figure download started');},'image/png');
   }catch{say('Figure export is unavailable in this browser.');}
  });
  tools.append(status);
  function restore(){try{let hash=location.hash;try{if(parent!==window&&parent.location.hash.startsWith('#view='))hash=parent.location.hash;}catch{}if(!hash.startsWith('#view='))return;const state=JSON.parse(decodeURIComponent(hash.slice(6)));if(state.v===1&&state.kind===a.kind){a.setState(state);say('Shared stage restored');}}catch{say('Stage link unavailable; showing the opening stage.');}}
  restore();window.addEventListener('hashchange',restore);
  return a;
 };
})();
