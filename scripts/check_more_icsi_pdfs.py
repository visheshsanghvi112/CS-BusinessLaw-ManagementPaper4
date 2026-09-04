from scrapling.fetchers import Fetcher

fetcher = Fetcher()

candidates = [
    "https://www.icsi.edu/media/webmodules/Set1.pdf",
    "https://www.icsi.edu/media/webmodules/Set2.pdf",
    "https://www.icsi.edu/media/webmodules/Set3.pdf",
    "https://www.icsi.edu/media/webmodules/Set4.pdf",
    "https://www.icsi.edu/media/webmodules/CSEET_BLM_Mock1.pdf",
    "https://www.icsi.edu/media/webmodules/CSEET_Sample_Paper_BLM.pdf",
    "https://www.icsi.edu/media/webmodules/CSEET_GUIDELINE_ANSWERS_JUNE_2026.pdf",
    "https://www.icsi.edu/media/webmodules/CSEET_GUIDELINE_ANSWERS_DEC_2025.pdf",
]

for url in candidates:
    try:
        res = fetcher.get(url, timeout=10)
        print(f"{url} -> status {res.status}, length: {len(res.body) if hasattr(res, 'body') else 'N/A'}")
    except Exception as e:
        print(f"{url} -> error: {e}")
