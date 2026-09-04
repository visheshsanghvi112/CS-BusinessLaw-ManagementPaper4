from scrapling.fetchers import Fetcher

fetcher = Fetcher()

# Try fetching a known public educational resource or test URL
try:
    print("Testing Scrapling fetch on arthacs.in...")
    response = fetcher.get("https://arthacs.in/cseet-mcqs", timeout=15)
    print(f"Status: {response.status}")
    print(f"Title: {response.css('title::text').get()}")
except Exception as e:
    print(f"Error fetching: {e}")
