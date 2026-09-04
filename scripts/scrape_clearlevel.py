from scrapling.fetchers import Fetcher
import json

fetcher = Fetcher()

urls = [
    "https://clearlevel.in/course/cseet-business-laws-and-management/",
    "https://clearlevel.in/test-series/cseet/",
    "https://clearlevel.in/cseet-mock-test/"
]

for url in urls:
    try:
        print(f"Fetching {url}...")
        res = fetcher.get(url, timeout=15)
        print(f"Status: {res.status}")
        text = res.get_all_text()
        print(f"Text snippet: {text[:300].strip()}")
    except Exception as e:
        print(f"Failed {url}: {e}")
