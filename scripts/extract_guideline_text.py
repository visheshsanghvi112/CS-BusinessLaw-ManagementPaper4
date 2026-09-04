import pypdf

reader = pypdf.PdfReader("scraped_data/Guideline_Answers.pdf")
print(f"Total pages: {len(reader.pages)}")

with open("scraped_data/guideline_answers_blm_text.txt", "w", encoding="utf-8") as f:
    for idx in range(76, len(reader.pages)):
        text = reader.pages[idx].extract_text() or ""
        f.write(f"\n--- PAGE {idx+1} ---\n")
        f.write(text)

print("Saved pages 77-99 to scraped_data/guideline_answers_blm_text.txt")
