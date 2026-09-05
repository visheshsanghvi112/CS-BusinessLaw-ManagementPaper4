import json

with open("scraped_data/all_300_icsi_questions.json", "r", encoding="utf-8") as f:
    questions = json.load(f)

print(f"Generating questionBank.ts with {len(questions)} questions...")

ts_lines = [
    "import { Question, TestPreset, LessonMetadata } from '@/types';",
    "",
    "/**",
    " * ICSI CSEET Paper 4: Business Laws and Management",
    " * Official Restructured Master Question Bank & Syllabus Intelligence",
    " * Sources:",
    " *   1. ICSI Actual Examination Paper (June 2026 Restructured Scheme) — Questions 1 to 100",
    " *   2. ICSI Directorate of Academics & Research (DAR) Sample Paper Set 1 — Questions 101 to 200",
    " *   3. ICSI Directorate of Academics & Research (DAR) Sample Paper Set 2 — Questions 201 to 300",
    " * Total Questions: 300 Official Verified MCQs mapped across all 9 Syllabus Lessons",
    " * Marking Scheme: +1 for Correct, 0 for Incorrect (Zero Negative Marking)",
    " * Qualifying Criteria: Minimum 40% (40 Marks) in Paper 4, 50% Aggregate across all 4 papers",
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
    
    source_paper = q.get("sourcePaper", "June 2026")
    
    ts_lines.append("  {")
    ts_lines.append(f"    id: {q['id']},")
    ts_lines.append(f"    sectionId: '{q['sectionId']}',")
    ts_lines.append(f"    sectionName: '{q['sectionName']}',")
    ts_lines.append(f"    lessonNumber: {q['lessonNumber']},")
    ts_lines.append(f"    lessonName: '{q['lessonName']}',")
    ts_lines.append(f"    question: {q_str},")
    ts_lines.append(f"    options: [\n{options_block}\n    ],")
    ts_lines.append(f"    correctAnswer: '{q['correctAnswer']}',")
    ts_lines.append(f"    acceptedAnswers: {json.dumps(q.get('acceptedAnswers', [q['correctAnswer']]))},")
    ts_lines.append(f"    officialKey: {json.dumps(q.get('officialKey', q['correctAnswer'].upper()))},")
    ts_lines.append(f"    explanation: {exp_str},")
    ts_lines.append(f"    marks: {q.get('marks', 1)},")
    ts_lines.append(f"    sourcePaper: '{source_paper}'")
    ts_lines.append("  },")

ts_lines.append("];")
ts_lines.append("")

# OFFICIAL_JUNE_PAPER_IDS (IDs 1 to 100)
ts_lines.append("export const OFFICIAL_JUNE_PAPER_IDS: number[] = Array.from({ length: 100 }, (_, i) => i + 1);")
ts_lines.append("")

# TEST_PRESETS (Preserving existing 4 core presets exactly)
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

# LESSON_METADATA
lessons_metadata = [
    {
        "lessonNumber": 1,
        "lessonName": "Introduction to Law & Legal System",
        "sectionId": "part-a",
        "sectionName": "Part A: Business Laws",
        "weightageMarks": "8-10 Marks",
        "keyTopics": ["Sources of Law", "Article 141 Binding Precedents", "Principles of Natural Justice", "Legal Maxims", "BNSS 2023 & BSA 2023", "DPDP Act 2023", "Mediation Act 2023"],
        "description": "Foundations of Indian legal apparatus, doctrine of stare decisis, natural justice principles, modern 2023 criminal codes, and personal data protection."
    },
    {
        "lessonNumber": 2,
        "lessonName": "Elements of Company Law",
        "sectionId": "part-a",
        "sectionName": "Part A: Business Laws",
        "weightageMarks": "15-18 Marks",
        "keyTopics": ["Companies Act 2013", "Corporate Personality (Salomon)", "Lifting Corporate Veil", "Small Company Thresholds", "Board Meetings & 120-day Gap", "Director Types & Resident Director", "e-Form MGT-14"],
        "description": "Core corporate jurisprudence under Companies Act 2013: separate legal entity, limited liability, company classifications, managerial personnel, and statutory governance."
    },
    {
        "lessonNumber": 3,
        "lessonName": "Elements of Law of Contracts",
        "sectionId": "part-a",
        "sectionName": "Part A: Business Laws",
        "weightageMarks": "10-12 Marks",
        "keyTopics": ["Offer & Acceptance (Sec 2)", "Consideration (Quid Pro Quo)", "Capacity & Minor's Agreement (Mohori Bibee)", "Free Consent", "Contingent Contracts", "Indemnity & Guarantee", "Bailment & Pledge", "Agency"],
        "description": "Contractual essentials under Indian Contract Act 1872: formation, consensus ad idem, consideration, void ab initio agreements, breach, and special contracts."
    },
    {
        "lessonNumber": 4,
        "lessonName": "Elements of Law of Partnership & LLP",
        "sectionId": "part-a",
        "sectionName": "Part A: Business Laws",
        "weightageMarks": "8-10 Marks",
        "keyTopics": ["Partnership Act 1932 (Sec 4)", "Mutual Agency Principle", "Minor Admitted to Benefits (Sec 30)", "Partner Indemnity for Fraud (Sec 10)", "LLP Act 2008", "Body Corporate & Perpetual Succession", "Designated Partners"],
        "description": "Partnership structures, non-liability of minors, absolute duty to indemnify fraud, and hybrid LLP body corporate framework under LLP Act 2008."
    },
    {
        "lessonNumber": 5,
        "lessonName": "Other Commercial Laws (Sale of Goods & NI Act)",
        "sectionId": "part-a",
        "sectionName": "Part A: Business Laws",
        "weightageMarks": "12-15 Marks",
        "keyTopics": ["Sale of Goods Act 1930", "Condition vs Warranty (Sec 12)", "Caveat Emptor & Exceptions (Grant case)", "Nemo Dat Quod Non Habet", "Unpaid Seller Rights", "Negotiable Instruments Act 1881", "Promissory Notes & Bills", "Cheque Truncation", "Dishonour (Sec 138)"],
        "description": "Commercial transactions law: transfer of property in goods, warranties, unpaid seller rights, negotiable instruments classification, and cheque bounce liabilities."
    },
    {
        "lessonNumber": 6,
        "lessonName": "Introduction to Management & Managerial Roles",
        "sectionId": "part-b",
        "sectionName": "Part B: Business Management",
        "weightageMarks": "4-6 Marks",
        "keyTopics": ["Concept & Scope of Management", "Kautilya's Arthashastra", "Mintzberg's Managerial Roles", "Autocratic vs Consultative vs Democratic Styles", "Paternalistic Management"],
        "description": "Nature of management as art, science and profession, Indian ancient governance wisdom from Arthashastra, and managerial leadership styles."
    },
    {
        "lessonNumber": 7,
        "lessonName": "Principles & Schools of Management",
        "sectionId": "part-b",
        "sectionName": "Part B: Business Management",
        "weightageMarks": "6-8 Marks",
        "keyTopics": ["Scientific Management (F.W. Taylor)", "Time & Motion Study", "Administrative Theory (Henri Fayol 14 Principles)", "Unity of Command & Direction", "Scalar Chain & Gang Plank", "Bureaucratic Theory (Max Weber)", "Hawthorne Studies (Elton Mayo)"],
        "description": "Classical and neoclassical management schools: Taylor's scientific principles, Fayol's 14 administrative tenets, Weberian bureaucracy, and Mayo's human relations."
    },
    {
        "lessonNumber": 8,
        "lessonName": "Core Functions of Management (POSDC)",
        "sectionId": "part-b",
        "sectionName": "Part B: Business Management",
        "weightageMarks": "15-20 Marks",
        "keyTopics": ["Planning (Foundational Function)", "Standing vs Single-Use Plans", "MBO (Peter Drucker)", "Organizing & Delegation Process", "Staffing & Human Resources", "Directing & Motivation (Maslow, Herzberg)", "Controlling & Feedback Loop", "Leadership Styles (Transformational, Servant)"],
        "description": "End-to-end POSDC functions: strategic planning, organizational hierarchies, delegation barriers, recruitment & staffing, motivational models, and leadership theories."
    },
    {
        "lessonNumber": 9,
        "lessonName": "Management Knowledge for CS & Governance",
        "sectionId": "part-b",
        "sectionName": "Part B: Business Management",
        "weightageMarks": "8-10 Marks",
        "keyTopics": ["Company Secretary as KMP (Sec 203)", "CS as Primary Governance Professional", "Secretarial Standards (SS-1 & SS-2)", "Secretarial Audit (Sec 204 Thresholds)", "Board Meeting Video Conferencing", "Annual Compliance Report (60 Days)", "Securities Compliance Services"],
        "description": "Strategic governance role of the Company Secretary: Secretarial Standards compliance, secretarial audit applicability, board advisory, and stock exchange disclosures."
    }
]

ts_lines.append("export const LESSON_METADATA: LessonMetadata[] = " + json.dumps(lessons_metadata, indent=2) + ";")
ts_lines.append("")

# Helper functions
ts_lines.append("export function getQuestionsForLesson(lessonNumber: number): Question[] {")
ts_lines.append("  return QUESTION_BANK.filter(q => q.lessonNumber === lessonNumber);")
ts_lines.append("}")
ts_lines.append("")
ts_lines.append("export function getQuestionsForLessons(lessonNumbers: number[]): Question[] {")
ts_lines.append("  const set = new Set(lessonNumbers);")
ts_lines.append("  return QUESTION_BANK.filter(q => set.has(q.lessonNumber));")
ts_lines.append("}")
ts_lines.append("")

output_file = "src/lib/questionBank.ts"
with open(output_file, "w", encoding="utf-8") as f:
    f.write("\n".join(ts_lines))

print(f"Generated {output_file} successfully! Total lines: {len(ts_lines)}")
