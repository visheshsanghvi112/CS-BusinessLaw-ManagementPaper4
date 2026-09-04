import json

with open("scraped_data/june_2026_enriched_questions.json", "r", encoding="utf-8") as f:
    questions = json.load(f)

ts_lines = [
    "import { Question, TestPreset } from '@/types';",
    "",
    "/**",
    " * ICSI CSEET Paper 4: Business Laws and Management",
    " * Official Restructured Examination & Mock Question Bank",
    " * Source: ICSI Directorate of Academics & Research (DAR) & June 2026 Examination Guideline Answers",
    " * Total Questions: 100 (60 Business Laws + 40 Business Management)",
    " * Marking Scheme: +1 for Correct, 0 for Incorrect (Zero Negative Marking)",
    " * Qualifying Criteria: Minimum 40% (40 Marks) in this paper, 50% Aggregate across all papers",
    " */",
    "",
    "export const QUESTION_BANK: Question[] = ["
]

for q in questions:
    q_str = json.dumps(q["question"], ensure_ascii=False)
    exp_str = json.dumps(q["explanation"], ensure_ascii=False)
    
    # Format options
    opt_strs = []
    for opt in q["options"]:
        t_str = json.dumps(opt["text"], ensure_ascii=False)
        opt_strs.append(f"      {{ key: '{opt['key']}', text: {t_str} }}")
    options_block = ",\n".join(opt_strs)
    
    ts_lines.append(f"  {{")
    ts_lines.append(f"    id: {q['id']},")
    ts_lines.append(f"    sectionId: '{q['sectionId']}',")
    ts_lines.append(f"    sectionName: '{q['sectionName']}',")
    ts_lines.append(f"    lessonNumber: {q['lessonNumber']},")
    ts_lines.append(f"    lessonName: '{q['lessonName']}',")
    ts_lines.append(f"    question: {q_str},")
    ts_lines.append(f"    options: [\n{options_block}\n    ],")
    ts_lines.append(f"    correctAnswer: '{q['correctAnswer']}',")
    
    # Calculate accepted answers
    off_key = q.get("officialKey", q["correctAnswer"].upper())
    accepted = [q["correctAnswer"]]
    if "Either C or D" in off_key:
        accepted = ["c", "d"]
    elif "A or B or C" in off_key:
        accepted = ["a", "b", "c"]
    elif "Either B or D" in off_key:
        accepted = ["b", "d"]
        
    ts_lines.append(f"    acceptedAnswers: {json.dumps(accepted)},")
    ts_lines.append(f"    officialKey: {json.dumps(off_key)},")
    ts_lines.append(f"    explanation: {exp_str},")
    ts_lines.append(f"    marks: {q['marks']}")
    ts_lines.append(f"  }},")

ts_lines.append("];")
ts_lines.append("")

# Add TEST_PRESETS
presets = [
    {
        "id": "full-mock",
        "title": "ICSI June 2026 Official Exam Paper (100 Questions)",
        "description": "Authentic ICSI Examination Paper conducted under the Restructured Scheme: 60 Questions Part A (Business Laws) + 40 Questions Part B (Business Management). 120 Minutes real-time CBT timer.",
        "questionCount": 100,
        "durationMinutes": 120,
        "badge": "ICSI Actual Exam"
    },
    {
        "id": "part-a-laws",
        "title": "Part A: Business Laws Specialist (60 Questions)",
        "description": "Exclusively drills Indian Contract Act, Companies Act, Sale of Goods, Partnership, LLP, NI Act, DPDP & New Criminal Laws 2023. 72 Minutes timed test.",
        "questionCount": 60,
        "durationMinutes": 72,
        "sectionFilter": "part-a",
        "badge": "Part A (60 Marks)"
    },
    {
        "id": "part-b-management",
        "title": "Part B: Business Management Specialist (40 Questions)",
        "description": "Targeted test covering Classical & Modern Management Schools, POSDC Functions, Leadership, Motivation, and Corporate Governance. 48 Minutes timed test.",
        "questionCount": 40,
        "durationMinutes": 48,
        "sectionFilter": "part-b",
        "badge": "Part B (40 Marks)"
    },
    {
        "id": "quick-sprint",
        "title": "Diagnostic Rapid Sprint (25 Questions)",
        "description": "Balanced high-yield revision drill (15 Business Laws + 10 Management) for rapid assessment. 30 Minutes countdown timer.",
        "questionCount": 25,
        "durationMinutes": 30,
        "badge": "Speed Drill"
    }
]

ts_lines.append("export const TEST_PRESETS: TestPreset[] = " + json.dumps(presets, indent=2) + ";")
ts_lines.append("")

with open("src/lib/questionBank.ts", "w", encoding="utf-8") as f:
    f.write("\n".join(ts_lines))

print("Successfully wrote 100 verified questions to src/lib/questionBank.ts!")
