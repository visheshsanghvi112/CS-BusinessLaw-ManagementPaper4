import re

with open("scraped_data/guideline_answers_blm_text.txt", "r", encoding="utf-8") as f:
    text = f.read()

part_ans = text.split("ANSWER KEY")[1].split("***")[0]

# Parse answer key
# Lines look like:
# 1 A 31 D 61 A
# 57 Either C or D
# 65 A or B or C
# 96 Either B or D

sol_map = {}
# Clean lines
lines = [l.strip() for l in part_ans.split("\n") if l.strip() and not l.startswith("---") and not l.startswith("CSEET") and not l.startswith("9")]

# Let's extract entries. A regular pattern:
# We can find all occurrences of (Q_num) followed by (Sol)
matches = re.findall(r'(\d+)\s+([A-D](?:\s+or\s+[A-D])*(?:Either\s+[A-D]\s+or\s+[A-D])*)', part_ans)
for q_num, ans in matches:
    sol_map[int(q_num)] = ans.strip()

print(f"Parsed {len(sol_map)} answers out of 100.")
for i in range(1, 101):
    if i not in sol_map:
        print(f"Missing answer for Q{i}")

for i in range(1, 101):
    print(f"Q{i}: {sol_map.get(i, 'MISSING')}", end=", " if i % 10 != 0 else "\n")
