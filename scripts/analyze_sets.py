import re

def analyze_set(filepath):
    print(f"\nAnalyzing {filepath}...")
    with open(filepath, "r", encoding="utf-8") as f:
        text = f.read()
    
    # split by question numbers
    # Lines often start with "1. ", "2. ", etc.
    q_matches = re.findall(r'(?:^|\n)(\d+)\.\s+(.*?)(?=(?:\n\d+\.\s+)|\Z)', text, re.DOTALL)
    print(f"Found {len(q_matches)} question blocks.")
    q_nums = [int(m[0]) for m in q_matches]
    print(f"First 5 Q numbers: {q_nums[:5]}, Last 5: {q_nums[-5:]}")
    missing = [i for i in range(1, 101) if i not in q_nums]
    print(f"Missing in 1-100: {missing}")

analyze_set("scraped_data/set1_text.txt")
analyze_set("scraped_data/set2_text.txt")
