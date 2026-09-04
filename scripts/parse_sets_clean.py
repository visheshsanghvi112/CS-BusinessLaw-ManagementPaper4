import re

def parse_set_clean(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        text = f.read()

    # Clean out page headers
    clean_lines = []
    for line in text.split("\n"):
        s = line.strip()
        if re.match(r'^--- PAGE \d+ ---$', s):
            continue
        if s.startswith("SET-") or s.startswith("Set-") or s.startswith("Sample Question Paper") or s.startswith("Restructured CSEET"):
            continue
        if s.startswith("Time allowed:") or s.startswith("All questions are compulsory") or s.startswith("Choose the most") or s.startswith("PART"):
            continue
        clean_lines.append(line)

    full_text = "\n" + "\n".join(clean_lines)

    # Find question positions sequentially 1, 2, ... 100
    questions = []
    current_num = 1
    
    # We will locate each "\n1. ", "\n2. ", ... "\n100. "
    # To avoid matching statements like "1. Authority is..." inside Q75,
    # we can search for `\n{num}\.\s+` from the last found index.
    last_idx = 0
    indices = []
    for num in range(1, 101):
        pattern = re.compile(rf'\n{num}\.\s+')
        match = pattern.search(full_text, last_idx)
        if match:
            indices.append((num, match.start(), match.end()))
            last_idx = match.end()
        else:
            print(f"Could not find Q{num} starting from index {last_idx}")

    print(f"{filepath}: Found all {len(indices)} question markers sequentially!")
    
    parsed = []
    for i in range(len(indices)):
        q_num, start, content_start = indices[i]
        end = indices[i+1][1] if i+1 < len(indices) else len(full_text)
        block = full_text[content_start:end].strip()
        
        # split options
        # Options are: \na) or \n(a) or \n1) etc.
        opt_matches = list(re.finditer(r'\n\s*(?:[a-d]\)|\([a-d]\))\s*', "\n" + block))
        if len(opt_matches) >= 4:
            stem = block[:opt_matches[0].start()].strip()
            opts = []
            for j in range(4):
                o_start = opt_matches[j].end()
                o_end = opt_matches[j+1].start() if j+1 < len(opt_matches) else len("\n" + block)
                o_text = ("\n" + block)[o_start:o_end].strip()
                opts.append(re.sub(r'\s+', ' ', o_text))
            
            stem = re.sub(r'\s+', ' ', stem)
            parsed.append({"id": q_num, "stem": stem, "options": opts})
        else:
            print(f"Option split issue at Q{q_num}: found {len(opt_matches)} options")

    print(f"{filepath}: Successfully parsed {len(parsed)} questions with options.")
    return parsed

set1 = parse_set_clean("scraped_data/set1_text.txt")
set2 = parse_set_clean("scraped_data/set2_text.txt")
