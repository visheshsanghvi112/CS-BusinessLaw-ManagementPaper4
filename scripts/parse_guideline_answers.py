import re
import json

with open("scraped_data/guideline_answers_blm_text.txt", "r", encoding="utf-8") as f:
    text = f.read()

# Split text between question start (PAGE 78) and answer key (PAGE 97)
part_q = text.split("--- PAGE 78 ---")[1].split("ANSWER KEY")[0]

# Extract Answer Key from PAGE 97 & 98
part_ans = text.split("ANSWER KEY")[1]

# Parse Answer Key
# Patterns like: "1 A 31 D 61 A" or "1 A" or "57 Either C or D" or "65 A or B or C" or "96 Either B or D"
answer_map = {}
lines = part_ans.split("\n")
for line in lines:
    line = line.strip()
    if not line or "PART" in line or "Sol." in line or "BUSINESS" in line or "---" in line or "***" in line or "CSEET" in line:
        continue
    # match items like (\d+)\s+([A-D]|Either [A-D] or [A-D]|[A-D] or [A-D] or [A-D])
    tokens = re.findall(r'(\d+)\s+([A-D](?:\s+or\s+[A-D])*(?:Either\s+[A-D]\s+or\s+[A-D])*)', line)
    # also handle tokens more flexibly
    # Let's inspect raw lines
print("Raw answer key lines:")
for l in lines[:35]:
    if l.strip() and not l.startswith("---") and not l.startswith("CSEET") and not l.startswith("9"):
        print("  ", l.strip())
