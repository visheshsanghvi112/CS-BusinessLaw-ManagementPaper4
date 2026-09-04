import re
import json

with open("scraped_data/guideline_answers_blm_text.txt", "r", encoding="utf-8") as f:
    text = f.read()

# 1. Parse Answer Key
part_ans = text.split("ANSWER KEY")[1].split("***")[0]

official_answers = {}
# Custom extraction for tricky ones:
# 57 Either C or D
# 65 A or B or C
# 96 Either B or D
raw_matches = re.findall(r'(\d+)\s+([A-D](?:\s+or\s+[A-D])*(?:Either\s+[A-D]\s+or\s+[A-D])*)', part_ans)
for q_num, ans in raw_matches:
    official_answers[int(q_num)] = ans.strip()

# Handle special cases if regex missed them
if "57 Either C or D" in part_ans:
    official_answers[57] = "Either C or D"
if "65 A or B or C" in part_ans:
    official_answers[65] = "A or B or C"
if "96 Either B or D" in part_ans:
    official_answers[96] = "Either B or D"

# 2. Parse Questions
q_text = text.split("BUSINESS LAWS AND MANAGEMENT – SET A")[1].split("ANSWER KEY")[0]
clean_lines = []
for line in q_text.split("\n"):
    stripped = line.strip()
    if re.match(r'^--- PAGE \d+ ---$', stripped):
        continue
    if re.match(r'^CSEET - BLM - JUNE 2026$', stripped):
        continue
    if re.match(r'^\d+$', stripped) and int(stripped) < 100 and int(stripped) > 70:
        continue
    if stripped == "PART A" or stripped == "PART B":
        clean_lines.append(f"[[{stripped}]]")
        continue
    clean_lines.append(line)

cleaned = "\n".join(clean_lines)
q_splits = re.split(r'\n(?=\d+\.\s+)', "\n" + cleaned)

questions = []
for chunk in q_splits:
    chunk = chunk.strip()
    m = re.match(r'^(\d+)\.\s*(.*)', chunk, re.DOTALL)
    if not m:
        continue
    q_num = int(m.group(1))
    content = m.group(2).strip()
    
    parts = re.split(r'\((?:[A-Da-d])\)', content)
    if len(parts) >= 5:
        stem = parts[0].strip()
        opt_a = parts[1].strip()
        opt_b = parts[2].strip()
        opt_c = parts[3].strip()
        opt_d = parts[4].strip()
        opt_d = re.sub(r'\[\[PART [AB]\]\]', '', opt_d).strip()
        opt_d = re.sub(r'\*\*\*.*', '', opt_d).strip()
        
        # Clean newlines inside stem and options
        stem = re.sub(r'\s+', ' ', stem)
        opt_a = re.sub(r'\s+', ' ', opt_a)
        opt_b = re.sub(r'\s+', ' ', opt_b)
        opt_c = re.sub(r'\s+', ' ', opt_c)
        opt_d = re.sub(r'\s+', ' ', opt_d)
        
        raw_ans = official_answers.get(q_num, "A")
        primary_ans = "c" if "C" in raw_ans else ("b" if "B" in raw_ans else ("a" if "A" in raw_ans else "d"))
        if raw_ans.startswith("A"):
            primary_ans = "a"
        elif raw_ans.startswith("B"):
            primary_ans = "b"
        elif raw_ans.startswith("C"):
            primary_ans = "c"
        elif raw_ans.startswith("D"):
            primary_ans = "d"
        elif "Either C or D" in raw_ans:
            primary_ans = "c"
        elif "Either B or D" in raw_ans:
            primary_ans = "b"
            
        questions.append({
            "id": q_num,
            "sectionId": "part-a" if q_num <= 60 else "part-b",
            "sectionName": "Part A: Business Laws" if q_num <= 60 else "Part B: Business Management",
            "question": stem,
            "options": [
                {"key": "a", "text": opt_a},
                {"key": "b", "text": opt_b},
                {"key": "c", "text": opt_c},
                {"key": "d", "text": opt_d}
            ],
            "correctAnswer": primary_ans,
            "officialKey": raw_ans,
            "marks": 1
        })

print(f"Total extracted: {len(questions)}")
with open("scraped_data/june_2026_raw_questions.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)
print("Saved to scraped_data/june_2026_raw_questions.json")
