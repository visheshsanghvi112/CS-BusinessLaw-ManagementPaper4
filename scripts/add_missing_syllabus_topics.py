import re

with open('src/lib/gateStudyNotes.ts', 'r') as f:
    content = f.read()

# 1. Topic for Algorithms: algo-sorting-divide-conquer
algo_topic = """,
      {
        id: 'algo-sorting-divide-conquer',
        topicTitle: 'Searching, Sorting & Divide-and-Conquer Analysis',
        syllabusRef: 'Section 5: Searching, sorting, hashing. Algorithm design techniques: divide-and-conquer.',
        estimatedReadTime: '10 mins',
        summary: 'Rigorous comparative analysis of comparison-based sorting algorithms (Merge, Quick, Heap, Insertion), decision tree lower bounds (Omega(n log n)), linear-time sorting (Counting, Radix), and binary search variations.',
        keyFormulasAndTheorems: [
          {
            title: 'Comparison Sorting Lower Bound',
            formula: 'Height of Decision Tree >= ceil(log2(n!)) = Omega(n log n)',
            explanation: 'Any comparison-based sorting algorithm requires at least Omega(n log n) comparisons in the worst case.'
          },
          {
            title: 'Quick Sort Recurrences',
            formula: 'Best: T(n) = 2T(n/2) + Theta(n) = Theta(n log n); Worst: T(n) = T(n-1) + Theta(n) = Theta(n^2)',
            explanation: 'Worst case occurs when pivot is consistently the minimum or maximum element (e.g. sorted array with first element as pivot).'
          },
          {
            title: 'Counting Sort Complexity',
            formula: 'Time: Theta(n + k), Auxiliary Space: Theta(n + k)',
            explanation: 'Stable linear-time sort when elements are in range [0, k-1]. Highly effective when k = O(n).'
          },
          {
            title: 'Stability & In-Place Matrix',
            explanation: 'Merge Sort: Stable, Not in-place (O(n) auxiliary space). Heap Sort: In-place, Not stable. Quick Sort: In-place (O(log n) stack space), Not stable.'
          }
        ],
        deepDiveContent: 'Sorting is a foundational GATE algorithm area. Master the trade-offs: Merge Sort guarantees O(n log n) worst-case time with stability, making it ideal for linked lists, but requires O(n) auxiliary memory for arrays. Heap Sort guarantees O(n log n) worst-case time in-place using a binary heap, but has higher constant factors and poor cache locality. Quick Sort has Theta(n^2) worst-case time, but average-case Theta(n log n) with excellent cache locality. In Binary Search, finding an element in a sorted array takes Theta(log n) time. Finding the number of inversions in an array can be done in O(n log n) time using an augmented Merge Sort.',
        examinerTraps: [
          'Confusing average-case with worst-case: Randomized Quick Sort has expected O(n log n) time, but its worst-case remains Theta(n^2).',
          'Applying the Omega(n log n) lower bound to non-comparison sorts: Counting Sort and Radix Sort bypass this lower bound because they do not compare elements directly.',
          'Assuming Heapify on an array of size n takes O(n log n) time: Bottom-up build-heap actually takes O(n) time, whereas inserting elements one by one takes O(n log n).'
        ],
        sampleGateProblem: {
          question: 'An array of n distinct elements is sorted in ascending order. Suppose two elements at distinct indices are swapped. What is the minimum time complexity to restore the sorted order?',
          type: 'MCQ',
          options: [
            'a) O(1)',
            'b) O(log n)',
            'c) O(n)',
            'd) O(n log n)'
          ],
          correctAnswer: 'c',
          explanation: 'Traverse the array once to find the two misplaced elements where A[i] > A[i+1]. Then swap them back and verify in a single linear pass taking O(n) time total.'
        }
      }"""

# 2. Topic for OS: os-cpu-scheduling-files
os_topic = """,
      {
        id: 'os-cpu-scheduling-files',
        topicTitle: 'CPU & I/O Scheduling, Process Control & File Systems',
        syllabusRef: 'Section 8: System calls, processes, threads, CPU and I/O scheduling, file systems.',
        estimatedReadTime: '11 mins',
        summary: 'Preemptive and non-preemptive CPU scheduling algorithms (FCFS, SJF, SRTF, Round Robin, Priority), process lifecycle, user vs kernel threads, disk scheduling (SSTF, SCAN, C-LOOK), and Unix Inode file storage architecture.',
        keyFormulasAndTheorems: [
          {
            title: 'Turnaround & Waiting Time',
            formula: 'TAT = Completion Time - Arrival Time; WT = TAT - Burst Time',
            explanation: 'Waiting time is the total time spent waiting in the ready queue. Response time is time until first CPU allocation.'
          },
          {
            title: 'Round Robin Quantum Boundary Limits',
            formula: 'q -> infinity => FCFS; q -> 0 => Processor Sharing',
            explanation: 'A very small quantum incurs excessive context switch overhead. Rule of thumb: 80% of CPU bursts should be shorter than time quantum q.'
          },
          {
            title: 'Unix Inode Maximum File Size',
            formula: 'Max Size = (Direct + Single_Indir + Double_Indir + Triple_Indir) * BlockSize',
            explanation: 'With 12 direct blocks, BlockSize B, and pointer size P: Number of pointers per block N = B/P. Single indirect references N blocks, double references N^2 blocks, triple references N^3 blocks.'
          },
          {
            title: 'Disk Head Scheduling',
            explanation: 'SSTF minimizes seek time locally but suffers from starvation. SCAN (Elevator) services requests in one direction then reverses. C-SCAN services in one direction only then returns to beginning without servicing. LOOK and C-LOOK only go as far as the last request in that direction.'
          }
        ],
        deepDiveContent: 'CPU scheduling is among the highest-frequency numerical topics in GATE. For Shortest Remaining Time First (SRTF), construct an accurate Gantt chart tracking every process arrival. If two processes have equal remaining burst time, break ties using FCFS (earlier arrival). For Unix Inodes, calculate exact byte capacities by determining how many block addresses fit into one indirect disk block. In disk scheduling, calculate total head movement in cylinders carefully by checking whether the head visits the physical disk boundary (0 or Max-1 in SCAN/C-SCAN) or reverses at the outermost request (LOOK/C-LOOK).',
        examinerTraps: [
          'Confusing LOOK with SCAN: SCAN always visits cylinder 0 (or Max-1) even if no request exists there; LOOK only travels to the furthest request.',
          'Forgetting that Waiting Time = TAT - Burst Time: Do not count arrival delay as waiting time twice.',
          'Missing the tie-breaker rule in SRTF: When remaining burst times are identical, the process with the earlier arrival time is scheduled first.'
        ],
        sampleGateProblem: {
          question: 'Consider a Unix-style Inode with 10 direct block addresses, 1 single indirect, and 1 double indirect. Block size is 2 KB and disk block address pointer is 4 bytes. What is the maximum file size that can be represented (in KB)?',
          type: 'NAT',
          correctAnswer: '525332',
          explanation: 'Pointers per indirect block N = 2048 / 4 = 512. Direct blocks = 10 * 2 KB = 20 KB. Single indirect blocks = 512 * 2 KB = 1024 KB. Double indirect blocks = 512 * 512 * 2 KB = 524288 KB. Total maximum file size = 20 + 1024 + 524288 = 525332 KB.'
        }
      }"""

# 3. Topic for Computer Networks: cn-routing-application-layer
cn_topic = """,
      {
        id: 'cn-routing-application-layer',
        topicTitle: 'Routing Protocols (Distance Vector & Link State) & Application Layer (DNS, HTTP)',
        syllabusRef: 'Section 10: Distance vector and link state routing, socket API, DNS and HTTP.',
        estimatedReadTime: '10 mins',
        summary: 'Principles of packet routing: Distance Vector Routing (Bellman-Ford, Count-to-Infinity, Split Horizon, Poison Reverse), Link State Routing (Dijkstra, OSPF, LSAs), and Application Layer Protocols (DNS resolution latency, persistent vs non-persistent HTTP, and Socket API).',
        keyFormulasAndTheorems: [
          {
            title: 'Bellman-Ford Distance Vector Equation',
            formula: 'D_x(y) = min_v { c(x, v) + D_v(y) }',
            explanation: 'Each node x estimates least-cost path to destination y by exchanging vectors with immediate neighbours v.'
          },
          {
            title: 'Link State Dijkstra Complexity',
            formula: 'O((|V| + |E|) log |V|) with min-heap priority queue',
            explanation: 'Every node floods Link State Packets (LSP) to all nodes via reliable flooding, building a global topology database.'
          },
          {
            title: 'Count-to-Infinity & Split Horizon',
            explanation: 'Distance vector routing loops occur because good news travels fast but bad news (link failure) travels slowly. Split Horizon rule: If node A routes to C via B, A does not advertise route C to B. Poison Reverse advertises distance infinity back to B.'
          },
          {
            title: 'HTTP RTT Latency Calculation',
            formula: 'Non-persistent: 2 * RTT per object; Persistent with pipelining: 1 RTT for TCP handshake + 1 RTT for base HTML + 1 RTT for all referenced objects',
            explanation: 'Non-persistent HTTP requires a new 3-way TCP handshake (1 RTT) plus HTTP GET/Response (1 RTT) for each object.'
          }
        ],
        deepDiveContent: 'Routing protocols are either intra-AS (interior gateway: RIP based on Distance Vector, OSPF based on Link State) or inter-AS (exterior gateway: BGP based on Path Vector). In Distance Vector, routing tables exchange periodic updates with immediate neighbours only. In Link State, each router floods local link state to all routers in the AS. In Application Layer, DNS translates domain names to IP addresses using UDP port 53. Iterative queries return referrals from root to TLD to authoritative nameservers, incurring multiple RTTs. HTTP/1.1 introduced persistent TCP connections using Keep-Alive headers. Sockets provide the transport interface between application and TCP/UDP (socket(), bind(), listen(), accept(), connect(), send(), recv()).',
        examinerTraps: [
          'Believing Split Horizon completely eliminates all routing loops: It only prevents 2-node loops; loops involving 3 or more nodes can still occur without poison reverse or hold-down timers.',
          'Missing the base HTML file RTT in HTTP problems: Before downloading images or stylesheets, the client MUST first download the base HTML file (2 RTTs for non-persistent, 2 RTTs for initial persistent connection).',
          'Confusing Iterative and Recursive DNS queries: In iterative queries, the local DNS server directly queries root, TLD, and authoritative servers in sequence.'
        ],
        sampleGateProblem: {
          question: 'A web browser requests a web page containing 1 base HTML document and 4 embedded images from a server. How many RTTs are required to download all items using non-persistent HTTP without parallel connections?',
          type: 'NAT',
          correctAnswer: '10',
          explanation: 'There are 5 total objects (1 HTML + 4 images). Non-persistent HTTP requires 2 RTTs per object (1 RTT for TCP 3-way handshake + 1 RTT for HTTP GET and response). Total RTTs = 5 * 2 = 10 RTTs.'
        }
      }"""

# Insert target 1 (Algorithms)
target_algo = "The common subsequence of maximum length is \"GTAB\", which has length 4.'\n        }\n      }"
if target_algo in content:
    content = content.replace(target_algo, target_algo + algo_topic, 1)
    print("Inserted algo-sorting-divide-conquer successfully!")
else:
    print("Could not find target_algo!")

# Insert target 2 (OS)
target_os = "Virtual address = 32 bits => VAS = 2^32 bytes. Page size = 4 KB = 2^12 bytes. Number of pages = 2^32 / 2^12 = 2^20 pages. Size of page table = 2^20 * 4 bytes = 4 MB.'\n        }\n      }"
if target_os in content:
    content = content.replace(target_os, target_os + os_topic, 1)
    print("Inserted os-cpu-scheduling-files successfully!")
else:
    print("Could not find target_os!")

# Insert target 3 (CN)
target_cn = "T_prop = Distance / Speed = 1000 m / (2 * 10^8 m/s) = 5 * 10^(-6) seconds (5 microseconds). Minimum frame size = 2 * T_prop * Bandwidth = 2 * (5 * 10^(-6)) * (100 * 10^6 bps) = 1000 bits. In bytes: 1000 / 8 = 125 bytes.'\n        }\n      }"
if target_cn in content:
    content = content.replace(target_cn, target_cn + cn_topic, 1)
    print("Inserted cn-routing-application-layer successfully!")
else:
    print("Could not find target_cn!")

with open('src/lib/gateStudyNotes.ts', 'w') as f:
    f.write(content)

print("Updated src/lib/gateStudyNotes.ts successfully.")
