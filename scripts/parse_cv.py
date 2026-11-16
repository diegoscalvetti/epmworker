import re, sys, json
src = open(sys.argv[1], encoding='utf-8').read().split('\n')
start = next(i for i,l in enumerate(src) if l.strip()=='Scientific Publications')
end = next(i for i,l in enumerate(src) if l.strip()=='Academic Supervision')
lines = src[start:end]
head = re.compile(r'^(?P<authors>.+?)\s*\((?P<year>\d{4})\)\s+(?P<code>(JNL|CNF|THS|OTP)\S+)\s*$')
pubs=[]; i=0
while i < len(lines):
    m = head.match(lines[i].strip())
    if m:
        block=[]; j=i+1
        while j < len(lines) and not head.match(lines[j].strip()) and not re.fullmatch(r'\d{4}', lines[j].strip()):
            if lines[j].strip(): block.append(lines[j].strip())
            j+=1
        title, venue, kind = (block+['','',''])[:3]
        code = m['code'].replace('‑','-')
        t = {'JNL':'journal','CNF':'conference','THS':'thesis','OTP':'other'}[code[:3]]
        doi = re.search(r'(?:doi\.org/|^|\s)(10\.\d{4,}/\S+)', venue)
        url = re.search(r'https?://\S+', venue)
        u = None
        if doi: u = 'https://doi.org/' + doi.group(1).rstrip('.,;')
        elif url and '…' not in url.group(0): u = url.group(0).rstrip('.,;')
        clean_venue = re.sub(r'\s*(https?://)?doi\.org/\S+','',venue)
        clean_venue = re.sub(r'\s*-?\s*https?://\S+','',clean_venue)
        clean_venue = re.sub(r'\s*\b10\.\d{4,}/\S+','',clean_venue).strip(' .-;')
        idx = {'journal':None}
        indexing = kind.split('·',1)[1].strip() if '·' in kind else ''
        pubs.append(dict(id=code.lower(), type=t, year=int(m['year']), authors=m['authors'].strip().rstrip(','), title=title.strip(), venue=clean_venue, url=u, indexing=indexing))
        i=j
    else: i+=1
json.dump(pubs, sys.stdout, ensure_ascii=False, indent=1)
