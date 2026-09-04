from scrapling.fetchers import Fetcher

fetcher = Fetcher()

test_urls = [
    "https://www.icsi.edu/student/cseet/",
    "https://www.icsi.edu/student/cseet-reference-reading-material/",
    "https://www.icsi.edu/reference-reading-material-cseet/"
]

for url in test_urls:
    try:
        res = fetcher.get(url, timeout=15)
        print(f"{url} -> status {res.status}")
        links = [a.attrib.get("href") for a in res.css("a") if a.attrib.get("href")]
        print(f"   Found {len(links)} links")
        for l in links:
            if any(k in str(l).lower() for k in ["blm", "business_laws", "sample", "question", "mock", "paper_4", "paper-4"]):
                print(f"   -> {l}")
    except Exception as e:
        print(f"{url} -> error {e}")
