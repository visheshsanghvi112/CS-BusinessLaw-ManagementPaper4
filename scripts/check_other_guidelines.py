from scrapling.fetchers import Fetcher

fetcher = Fetcher()

test_names = [
    "CSEET_GUIDELINE_ANSWERS_DEC_2025.pdf",
    "CSEET_GUIDELINE_ANSWERS_JAN_2026.pdf",
    "CSEET_GUIDELINE_ANSWERS_MAY_2026.pdf",
    "CSEET_GUIDELINE_ANSWERS_NOV_2025.pdf",
    "CSEET_GUIDELINE_ANSWERS_JULY_2025.pdf",
    "CSEET_GUIDELINE_ANSWERS_JUNE_2025.pdf",
]

for name in test_names:
    url = f"https://www.icsi.edu/media/webmodules/STUDENT_SERVICE/{name}"
    try:
        res = fetcher.get(url, timeout=10)
        print(f"{name}: {res.status}")
    except Exception as e:
        print(f"{name}: {e}")
