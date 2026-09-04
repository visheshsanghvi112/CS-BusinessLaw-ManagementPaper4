from scrapling.fetchers import Fetcher

fetcher = Fetcher()

try:
    print("Fetching https://www.icsi.edu/cseet/ with Scrapling...")
    page = fetcher.get("https://www.icsi.edu/cseet/", timeout=20)
    print(f"Status: {page.status}")
    links = [a.attrib.get("href") for a in page.css("a") if a.attrib.get("href")]
    print(f"Total links: {len(links)}")
    
    cseet_links = []
    for link in links:
        link_str = str(link).strip()
        if any(k in link_str.lower() for k in ["mock", "sample", "question", "blm", "business", "guideline", "paper", "reference", "test"]):
            cseet_links.append(link_str)
            
    print(f"Relevant links count: {len(cseet_links)}")
    for l in sorted(set(cseet_links)):
        print(" -", l)
except Exception as e:
    print("Error:", e)
