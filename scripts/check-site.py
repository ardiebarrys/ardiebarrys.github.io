#!/usr/bin/env python3
"""Validate rendered internal links, fragments, assets and research metadata offline."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import json, re, sys
root=Path(sys.argv[1] if len(sys.argv)>1 else '_site').resolve()
class Page(HTMLParser):
    def __init__(self,text):
        super().__init__();self.refs=[];self.ids=set();self.metas={};self.feed(text)
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if a.get('id'):self.ids.add(a['id'])
        if a.get('name') and tag=='a':self.ids.add(a['name'])
        if tag=='meta':self.metas[a.get('name',a.get('property',''))]=a.get('content','')
        for key in ('href','src','poster'):
            if a.get(key):self.refs.append(a[key])
        if a.get('srcset') and not a['srcset'].startswith('data:'):
            self.refs.extend(x.strip().split()[0] for x in a['srcset'].split(',') if x.strip())
pages={p:Page(p.read_text(errors='replace')) for p in root.rglob('*.html')}
errors=[];checked=0
for path,page in pages.items():
    for ref in page.refs:
        u=urlsplit(ref)
        if u.scheme and u.scheme not in ('http','https'):continue
        if u.netloc and u.netloc not in ('ardiebarrysailis.com','www.ardiebarrysailis.com'):continue
        if not u.path and not u.fragment:continue
        target=(root/unquote(u.path).lstrip('/') if u.path.startswith('/') else path.parent/unquote(u.path)) if u.path else path
        target=target.resolve()
        if not target.is_relative_to(root):errors.append(f'{path.relative_to(root)}: outside site {ref}');continue
        if target.is_dir():target=target/'index.html'
        if not target.exists():errors.append(f'{path.relative_to(root)}: missing {ref}');continue
        checked+=1
        fragment=unquote(u.fragment)
        if fragment and target in pages and not fragment.startswith(('view=','q=')) and fragment not in pages[target].ids:
            # Dynamic interactive anchors are rendered by the corresponding JS.
            if not fragment.startswith(('c3d-','y3d-')):errors.append(f'{path.relative_to(root)}: missing fragment {ref}')
    if path.parent.parent.name=='research' and path.parent.name in ('upr-proteotoxic-stress-resolution','nrf2-keap1-redoxostat','yap-taz-signal-resolution','cyp1a1-metabolic-feedback','transcriptional-condensates-kinetic-filters'):
        for key in ('citation_title','citation_author','citation_doi','og:image','twitter:card'):
            if not page.metas.get(key):errors.append(f'{path.relative_to(root)}: missing {key}')
        image=urlsplit(page.metas.get('og:image','')).path
        if not image or not (root/image.lstrip('/')).is_file():errors.append(f'{path.relative_to(root)}: missing social preview')
# CSS fonts and images are part of the same deployment contract.
for css in (root/'assets/css').glob('*.css'):
    for ref in re.findall(r'url\(\s*[\"\']?([^\)\"\']+)',css.read_text()):
        u=urlsplit(ref.strip())
        if u.scheme or u.netloc or not u.path:continue
        target=root/u.path.lstrip('/') if u.path.startswith('/') else css.parent/u.path
        if not target.exists():errors.append(f'{css.relative_to(root)}: missing {ref}')
if errors:
    print('Site validation failed:\n'+'\n'.join(sorted(set(errors))));sys.exit(1)
print(f'Validated {len(pages)} HTML pages and {checked} internal references; research metadata and CSS assets passed.')
