import json

# Load existing June 2026 enriched questions
with open("scraped_data/june_2026_enriched_questions.json", "r", encoding="utf-8") as f:
    june_qs = json.load(f)

# Load Set 1 and Set 2 raw questions
with open("scraped_data/set1_raw.json", "r", encoding="utf-8") as f:
    set1_raw = json.load(f)

with open("scraped_data/set2_raw.json", "r", encoding="utf-8") as f:
    set2_raw = json.load(f)

print(f"Loaded {len(june_qs)} June 2026 questions, {len(set1_raw)} Set 1 questions, {len(set2_raw)} Set 2 questions.")

LESSON_NAMES = {
    1: "Introduction to Law & Legal System",
    2: "Elements of Company Law (Companies Act, 2013)",
    3: "Elements of Law of Contracts (Indian Contract Act, 1872)",
    4: "Elements of Law Relating to Partnership & LLP",
    5: "Elements of Other Commercial Laws (Sale of Goods & NI Act)",
    6: "Introduction to Management & Managerial Roles",
    7: "Principles of Management & Classical/Modern Schools",
    8: "Core Functions of Management (POSDC & Leadership)",
    9: "Management Knowledge for Company Secretaries & Governance"
}
