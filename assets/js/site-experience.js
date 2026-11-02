(() => {
  'use strict';
  document.querySelectorAll('[data-viewer]').forEach(host => {
    const button = host.querySelector('.study-launch');
    function openViewer() {
      if(host.querySelector('iframe')) return;
      const frame=document.createElement('iframe');
      frame.title=host.dataset.title || 'Interactive 3D mechanism';
      frame.allow='fullscreen'; frame.allowFullscreen=true;
      frame.src=host.dataset.viewer+(location.hash.startsWith('#view=')?location.hash:'');
      host.classList.add('is-loaded'); host.append(frame);
      frame.addEventListener('load',()=>{frame.focus();});
    }
    button?.addEventListener('click',openViewer);
    if(location.hash.startsWith('#view=')) openViewer();
  });
  // Parent visibility matters: an iframe document can be visible while below the fold.
  const observer=new IntersectionObserver(entries=>entries.forEach(e=>{
    e.target.contentWindow?.postMessage({type:'research-visibility',visible:e.isIntersecting},location.origin);
  }),{threshold:0});
  function watch(frame){observer.observe(frame);frame.addEventListener('load',()=>{const r=frame.getBoundingClientRect();frame.contentWindow?.postMessage({type:'research-visibility',visible:r.bottom>0&&r.top<innerHeight},location.origin);});}
  document.querySelectorAll('iframe[src*="realistic-3d"]').forEach(watch);
  new MutationObserver(records=>records.forEach(r=>r.addedNodes.forEach(n=>{if(n.nodeName==='IFRAME'&&n.src.includes('realistic-3d'))watch(n);}))).observe(document.body,{childList:true,subtree:true});
  const launch=document.getElementById('chat-launch');
  launch?.addEventListener('click',()=>{
    let panel=document.getElementById('research-chat');
    if(!panel){
      panel=document.createElement('section');panel.id='research-chat';panel.setAttribute('aria-label','Research assistant');
      Object.assign(panel.style,{position:'fixed',left:'1rem',bottom:'5rem',width:'min(410px, calc(100vw - 2rem))',height:'min(620px, calc(100dvh - 9rem))',zIndex:99999,background:'#0c1729',border:'1px solid #52777d',borderRadius:'14px',overflow:'hidden'});
      const frame=document.createElement('iframe');frame.src='https://www.chatbase.co/chatbot-iframe/dxCY_mFoNPQu83GSntHvw';frame.title='Ask about Ardie’s research';frame.style.cssText='border:0;width:100%;height:100%';panel.append(frame);document.body.append(panel);
    }else panel.hidden=!panel.hidden;
    launch.setAttribute('aria-expanded',String(!panel.hidden));launch.textContent=panel.hidden?'Ask about my research':'Close research chat';
  });
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){const p=document.getElementById('research-chat');if(p&&!p.hidden){p.hidden=true;launch.setAttribute('aria-expanded','false');launch.textContent='Ask about my research';launch.focus();}}});
})();
