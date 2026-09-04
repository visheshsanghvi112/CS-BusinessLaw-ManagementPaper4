import re
import json

with open("scraped_data/set1_text.txt", "r", encoding="utf-8") as f:
    text = f.read()

# Split by question numbers
# Clean out page headers and footers
clean_lines = []
for line in text.split("\n"):
    s = line.strip()
    if re.match(r'^--- PAGE \d+ ---$', s):
        continue
    if s.startswith("SET-1") or s.startswith("Sample Question Paper") or s.startswith("Restructured CSEET"):
        continue
    if s.startswith("Time allowed:") or s.startswith("All questions are compulsory") or s.startswith("Choose the most"):
        continue
    if s == "PART A - BUSINESS LAWS (60 MARKS)" or s == "PART B - BUSINESS MANAGEMENT (40 MARKS)":
        clean_lines.append(f"[[{s}]]")
        continue
    clean_lines.append(line)

cleaned = "\n".join(clean_lines)

# Match question blocks: (\d+)\.\s*(.*?)
q_blocks = re.split(r'\n(?=\d+\.\s+)', "\n" + cleaned)

set1_qs = []
for block in q_blocks:
    block = block.strip()
    m = re.match(r'^(\d+)\.\s*(.*)', block, re.DOTALL)
    if not m:
        continue
    q_num = int(m.group(1))
    content = m.group(2).strip()
    
    # split options: a), b), c), d) or (a), (b), (c), (d)
    opt_parts = re.split(r'(?:\n|\A)\s*(?:[a-d]\)|\([a-d]\))\s*', "\n" + content)
    # The first part is stem
    if len(opt_parts) >= 5:
        stem = opt_parts[0].strip()
        stem = re.sub(r'\[\[.*?\]\]', '', stem).strip()
        stem = re.sub(r'\s+', ' ', stem)
        opts = [re.sub(r'\s+', ' ', o.strip()) for o in opt_parts[1:5]]
        set1_qs.append((q_num, stem, opts))

print(f"Total parsed in Set 1: {len(set1_qs)}")
q_nums = [q[0] for q in set1_qs]
missing = [i for i in range(1, 101) if i not in q_nums]
print(f"Missing in Set 1: {missing}")
if set1_qs:
    print(f"Q1: {set1_qs[0][1]}")
    for idx, o in enumerate(set1_qs[0][2]):
        print(f"  {chr(97+idx)}) {o}")
    print(f"Q100: {set1_qs[-1][1]}")
    for idx, o in enumerate(set1_qs[-1][2]):
        print(f"  {chr(97+idx)}) {o}")
