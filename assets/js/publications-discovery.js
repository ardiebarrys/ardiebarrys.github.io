(() => {
 'use strict';
 const form=document.getElementById('pub-discovery');if(!form)return;
 const search=document.getElementById('pub-search'),topic=document.getElementById('pub-topic'),year=document.getElementById('pub-year'),result=document.getElementById('pub-results');
 const papers=[...document.querySelectorAll('.pub')].map(el=>({el,text:el.textContent.toLocaleLowerCase(),year:el.dataset.year,topic:el.dataset.topic}));
 form.hidden=result.hidden=false;form.addEventListener('submit',e=>e.preventDefault());
 const params=new URLSearchParams(location.search);search.value=params.get('q')||'';topic.value=params.get('topic')||'';year.value=params.get('year')||'';
 function filter(){const words=search.value.trim().toLocaleLowerCase().split(/\s+/);let count=0;
 papers.forEach(p=>{const show=words.every(w=>p.text.includes(w))&&(!topic.value||p.topic===topic.value)&&(!year.value||p.year===year.value);p.el.hidden=!show;if(show)count++;});
 document.querySelectorAll('.pub-year').forEach(s=>s.hidden=![...s.querySelectorAll('.pub')].some(p=>!p.hidden));
 result.textContent=count?`${count} of ${papers.length} papers`:'No papers match. Try another keyword or clear the filters.';
 const url=new URL(location.href);[['q',search.value.trim()],['topic',topic.value],['year',year.value]].forEach(([k,v])=>v?url.searchParams.set(k,v):url.searchParams.delete(k));history.replaceState(null,'',url);
 }
 form.addEventListener('input',filter);form.addEventListener('change',filter);form.addEventListener('reset',()=>setTimeout(filter,0));filter();
 const escape=s=>String(s).replace(/[\\{}%&#_$]/g,c=>'\\'+c);
 document.querySelectorAll('.pub-bib').forEach(button=>button.addEventListener('click',()=>{
 const d=button.closest('.pub').querySelector('.pub-cite').dataset;
 // Braced full names avoid guessing compound family names.
 const fields={title:'{'+escape(d.title)+'}',author:d.authors.split(';').map(a=>'{'+escape(a)+'}').join(' and '),journal:escape(d.journal),year:d.year,volume:d.volume,number:d.issue,pages:d.pages||d.article,doi:d.doi,url:'https://doi.org/'+d.doi};
 const key='Sailis'+d.year+'_'+d.doi.split('/').pop().replace(/[^a-z0-9]/gi,'');
 const bib='@article{'+key+',\n'+Object.entries(fields).filter(([,v])=>v).map(([k,v])=>'  '+k+' = {'+v+'}').join(',\n')+'\n}\n';
 const url=URL.createObjectURL(new Blob([bib],{type:'application/x-bibtex;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download=key+'.bib';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
 }));
})();
