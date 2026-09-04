import re
from parse_blm_questions import parsed_questions

def parse_options(content):
    # Match (A), (B), (C), (D) or (a), (b), (c), (d)
    # Find positions of (A), (B), (C), (D)
    pattern = r'(?:\((?:[A-D]|[a-d])\)|(?<=\n)(?:[A-D]|[a-d])\))\s*'
    parts = re.split(r'\((?:[A-Da-d])\)', content)
    if len(parts) >= 5:
        q_stem = parts[0].strip()
        opt_a = parts[1].strip()
        opt_b = parts[2].strip()
        opt_c = parts[3].strip()
        # In parts[4], sometimes trailing text or part headers might be present
        opt_d = parts[4].strip()
        # Clean up any [[PART B]] markers or stars
        opt_d = re.sub(r'\[\[PART [AB]\]\]', '', opt_d).strip()
        opt_d = re.sub(r'\*\*\*.*', '', opt_d).strip()
        return q_stem, [opt_a, opt_b, opt_c, opt_d]
    else:
        return content, []

option_failures = []
for q_num, content in parsed_questions:
    stem, opts = parse_options(content)
    if len(opts) != 4:
        option_failures.append((q_num, len(opts), content[:120]))

print(f"Total option parsing failures: {len(option_failures)}")
if option_failures:
    for f in option_failures:
        print(f"Q{f[0]}: found {f[1]} options. Preview: {f[2]}")
else:
    print("ALL 100 QUESTIONS HAVE EXACTLY 4 OPTIONS!")
