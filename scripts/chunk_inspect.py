import json

with open("scraped_data/set1_raw.json", "r", encoding="utf-8") as f:
    s1 = json.load(f)

# Let's inspect questions in chunks of 20
def print_chunk(start, end):
    for q in s1[start-1:end]:
        print(f"Q{q['id']}: {q['stem']}")
        for idx, opt in enumerate(q['options']):
            print(f"   ({chr(97+idx)}) {opt}")
        print()

print("--- Set 1 Chunk 1: Q1 - Q15 ---")
print_chunk(1, 15)
