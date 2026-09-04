from scrapling.fetchers import Fetcher

fetcher = Fetcher()

urls = [
    "https://csaspirant.com/cseet-mcqs/",
    "https://csaspirant.com/category/cseet/",
    "https://csaspirant.com/"
]

for url in urls:
    try:
        print(f"Testing {url}...")
        res = fetcher.get(url, timeout=15)
        print(f"Status: {res.status}")
        links = [a.attrib.get("href") for a in res.css("a") if a.attrib.get("href")]
        print(f"Found {len(links)} links")
        for l in links:
            if any(k in str(l).lower() for k in ["contract", "company", "paper", "law", "cseet"]):
                print(f"  -> {l}")
    except Exception as e:
        print(f"Error {url}: {e}")
