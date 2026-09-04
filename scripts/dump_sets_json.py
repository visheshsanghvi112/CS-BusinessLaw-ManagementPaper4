import json
from parse_sets_clean import parse_set_clean

set1_raw = parse_set_clean("scraped_data/set1_text.txt")
set2_raw = parse_set_clean("scraped_data/set2_text.txt")

with open("scraped_data/set1_raw.json", "w", encoding="utf-8") as f:
    json.dump(set1_raw, f, indent=2, ensure_ascii=False)

with open("scraped_data/set2_raw.json", "w", encoding="utf-8") as f:
    json.dump(set2_raw, f, indent=2, ensure_ascii=False)

print("Saved set1_raw.json and set2_raw.json successfully!")
