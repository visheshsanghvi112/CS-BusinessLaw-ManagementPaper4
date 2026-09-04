import pypdf

def inspect(path):
    print(f"=== Inspecting {path} ===")
    reader = pypdf.PdfReader(path)
    print(f"Total pages: {len(reader.pages)}")
    for idx, page in enumerate(reader.pages):
        text = page.extract_text() or ""
        if "BUSINESS LAWS" in text.upper() or "PAPER 4" in text.upper() or "MANAGEMENT" in text.upper():
            first_line = text.strip().split("\n")[0] if text.strip() else ""
            print(f"Page {idx+1}: {first_line[:80]} (Length: {len(text)})")

inspect("scraped_data/Guideline_Answers.pdf")
inspect("scraped_data/Set1.pdf")
inspect("scraped_data/Set2.pdf")
