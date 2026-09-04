import json

with open("scraped_data/set1_raw.json", "r", encoding="utf-8") as f:
    s1 = json.load(f)

for q in s1:
    print(f"--- Q{q['id']} ---")
    print("Stem:", q['stem'])
    for idx, opt in enumerate(q['options']):
        print(f"  ({chr(97+idx)}) {opt}")
