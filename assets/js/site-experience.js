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
  let chatLoading=false;
  launch?.addEventListener('click',()=>{
    if(chatLoading)return;
    chatLoading=true;launch.textContent='Opening research chat…';launch.setAttribute('aria-busy','true');
    // Preserve the site's existing Chatbase integration and settings; load only on demand.
    if(!window.chatbase||window.chatbase('getState')!=='initialized'){
      window.chatbase=function(){if(!window.chatbase.q)window.chatbase.q=[];window.chatbase.q.push(arguments);};
      window.chatbase=new Proxy(window.chatbase,{get:(target,prop)=>prop==='q'?target.q:function(){return target(prop,Array.prototype.slice.call(arguments));}});
    }
    const script=document.createElement('script');script.src='https://www.chatbase.co/embed.min.js';script.id='dxCY_mFoNPQu83GSntHvw';script.domain='www.chatbase.co';
    const ready=new MutationObserver(()=>{
      const bubble=document.getElementById('chatbase-bubble-button');
      if(bubble){ready.disconnect();clearTimeout(timeout);launch.hidden=true;launch.removeAttribute('aria-busy');bubble.click();}
    });
    const failed=()=>{ready.disconnect();chatLoading=false;script.remove();launch.removeAttribute('aria-busy');launch.textContent='Chat unavailable · try again';};
    const timeout=setTimeout(failed,20000);script.onerror=()=>{clearTimeout(timeout);failed();};
    ready.observe(document.body,{childList:true,subtree:true});document.body.append(script);
  });
})();
