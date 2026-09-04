import pypdf

def dump_sample(path, out_file):
    reader = pypdf.PdfReader(path)
    with open(out_file, "w", encoding="utf-8") as f:
        for idx, page in enumerate(reader.pages):
            f.write(f"\n--- PAGE {idx+1} ---\n")
            f.write(page.extract_text() or "")
    print(f"Dumped {path} ({len(reader.pages)} pages) to {out_file}")

dump_sample("scraped_data/Set1.pdf", "scraped_data/set1_text.txt")
dump_sample("scraped_data/Set2.pdf", "scraped_data/set2_text.txt")
