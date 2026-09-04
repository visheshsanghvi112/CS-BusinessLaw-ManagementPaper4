import re
import json

with open("scraped_data/guideline_answers_blm_text.txt", "r", encoding="utf-8") as f:
    text = f.read()

# Isolate questions text between PAGE 78 and ANSWER KEY
q_text = text.split("BUSINESS LAWS AND MANAGEMENT – SET A")[1].split("ANSWER KEY")[0]

# Remove header lines like "CSEET - BLM - JUNE 2026", "--- PAGE \d+ ---", page numbers alone
clean_lines = []
for line in q_text.split("\n"):
    stripped = line.strip()
    if re.match(r'^--- PAGE \d+ ---$', stripped):
        continue
    if re.match(r'^CSEET - BLM - JUNE 2026$', stripped):
        continue
    if re.match(r'^\d+$', stripped) and int(stripped) < 100 and int(stripped) > 70:
        # page numbers
        continue
    if stripped == "PART A" or stripped == "PART B":
        clean_lines.append(f"[[{stripped}]]")
        continue
    clean_lines.append(line)

cleaned = "\n".join(clean_lines)

# Regex to find questions like "1. ", "2. ", ... "100. "
# We can find all positions of `\n(\d+)\.\s+`
q_splits = re.split(r'\n(?=\d+\.\s+)', "\n" + cleaned)
print(f"Total splits found: {len(q_splits)}")

parsed_questions = []
for idx, chunk in enumerate(q_splits):
    chunk = chunk.strip()
    m = re.match(r'^(\d+)\.\s*(.*)', chunk, re.DOTALL)
    if not m:
        continue
    q_num = int(m.group(1))
    content = m.group(2).strip()
    parsed_questions.append((q_num, content))

print(f"Parsed {len(parsed_questions)} questions.")
if parsed_questions:
    print(f"First: Q{parsed_questions[0][0]}: {parsed_questions[0][1][:100]}")
    print(f"Last: Q{parsed_questions[-1][0]}: {parsed_questions[-1][1][:100]}")
    missing = [i for i in range(1, 101) if i not in [q[0] for q in parsed_questions]]
    print(f"Missing question numbers: {missing}")
