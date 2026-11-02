#!/usr/bin/env python3
"""Wait for Pages/CDN publication, then check the deployed research entry points."""
import json, sys, time, urllib.request
base='https://ardiebarrysailis.com'
expected=sys.argv[1]
def read(path):
    req=urllib.request.Request(base+path,headers={'User-Agent':'ArdieSiteDeploymentCheck/1.0','Cache-Control':'no-cache'})
    with urllib.request.urlopen(req,timeout=25) as r:
        if r.status!=200:raise RuntimeError(f'{path}: HTTP {r.status}')
        return r.read()
for attempt in range(24):
    try:
        if json.loads(read('/deployment.json?revision='+expected)).get('commit')==expected:break
    except (OSError,ValueError):pass
    time.sleep(10)
else:sys.exit('Pages has not served the expected commit within four minutes; inspect the Pages deployment.')
for path,marker in [('/',b'data-viewer'),('/publications/',b'pub-discovery'),('/assets/html/upr-realistic-3d.html',b'ResearchViewer.attach'),('/assets/html/nrf2-realistic-3d.html',b'ResearchViewer.attach'),('/research/yap-taz-signal-resolution/',b'citation_doi'),('/research/cyp1a1-metabolic-feedback/',b'citation_doi'),('/research/transcriptional-condensates-kinetic-filters/',b'citation_doi')]:
    if marker not in read(path+'?revision='+expected):sys.exit('Missing expected content: '+path)
print('Live deployment verified: '+expected)
