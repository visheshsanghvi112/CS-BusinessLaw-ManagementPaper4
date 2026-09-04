from scrapling.fetchers import Fetcher
import os

fetcher = Fetcher()

dar_urls = [
    ("Set3.pdf", "https://www.icsi.edu/media/webmodules/DAR/Business_Laws_and_Management_Paper_4_Sample_Question_Paper_Set%203.pdf"),
    ("Set4.pdf", "https://www.icsi.edu/media/webmodules/DAR/Business_Laws_and_Management_Paper_4_Sample_Question_Paper_Set%204.pdf"),
    ("Set1_DAR.pdf", "https://www.icsi.edu/media/webmodules/DAR/Business_Laws_and_Management_Paper_4_Sample_Question_Paper.pdf"),
    ("Set2_DAR.pdf", "https://www.icsi.edu/media/webmodules/DAR/Business_Laws_and_Management_Paper_4_Sample_Question_Paper_Set%202.pdf"),
    ("Guideline_Answers_June.pdf", "https://www.icsi.edu/media/webmodules/STUDENT_SERVICE/CSEET_GUIDELINE_ANSWERS_JUNE_2026.pdf"),
    ("BLM_Study_Material.pdf", "https://www.icsi.edu/media/webmodules/CSEET_Business_Laws_and_Management.pdf")
]

for filename, url in dar_urls:
    try:
        print(f"Checking {url}...")
        res = fetcher.get(url, timeout=20)
        print(f"Status: {res.status}, body length: {len(res.body) if hasattr(res, 'body') else 0}")
        if res.status == 200 and len(res.body) > 5000:
            target = os.path.join("scraped_data", filename)
            with open(target, "wb") as f:
                f.write(res.body)
            print(f"  -> Saved to {target} ({len(res.body)} bytes)")
    except Exception as e:
        print(f"Error {url}: {e}")
