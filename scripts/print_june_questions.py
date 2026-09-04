import json

with open("scraped_data/june_2026_raw_questions.json", "r", encoding="utf-8") as f:
    questions = json.load(f)

for q in questions:
    print(f"Q{q['id']} [Ans: {q['officialKey']}]: {q['question']}")
    for opt in q['options']:
        print(f"   ({opt['key'].upper()}) {opt['text']}")
    print()
