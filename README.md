# ⚡ GATE 2027 (CS & IT) — CBT Mock Examination & Learning Engine

> **A comprehensive Computer-Based Test (CBT) simulator and learning platform for GATE 2027: Computer Science & Information Technology**, organized by **IIT Madras**. Features an authentic question bank of 500+ official PYQs spanning 2007–2026, with highest weightage given to recent papers (**2024, 2025, and 2026**). Includes official GATE question types (**MCQ, MSQ, NAT**), an embedded **Virtual Scientific Calculator**, subject-wise drills across all 10 syllabus sections, high-yield formula sheets, and in-depth performance analytics.

---

## 🎯 Exam Overview & Weightage Structure

Organized strictly according to the official **IIT Madras GATE 2027 CS Syllabus**:

| Section | Subject Title | Questions & Topics | Marks Weightage |
|---|---|---|:---:|
| **GA** | **General Aptitude** | Verbal Ability, Numerical Ability, Spatial & Analytical Reasoning | **15 Marks** (Q1–Q10) |
| **Section 1** | **Engineering Mathematics** | Discrete Maths (Logic, Graphs, Relations, Groups), Linear Algebra, Calculus, Probability & Statistics | **13 Marks** |
| **Section 2** | **Digital Logic** | Boolean algebra, K-maps, Combinational & Sequential circuits, Floating point | **5 Marks** |
| **Section 3** | **Computer Organization & Architecture** | Instruction sets, Cache mapping & EMAT, Pipelining hazards, ALU & Control Unit | **9 Marks** |
| **Section 4** | **Programming & Data Structures** | C Programming, Pointers, Recursion, Stacks, Queues, Trees, Heaps, Graphs | **10 Marks** |
| **Section 5** | **Algorithms** | Asymptotic analysis, Sorting & Searching, Greedy, DP, Divide & Conquer, Graph algorithms | **11 Marks** |
| **Section 6** | **Theory of Computation** | Regular expressions, DFA/NFA, Grammars & Pushdown automata, Turing machines | **8 Marks** |
| **Section 7** | **Compiler Design** | Lexical analysis, LL(1) / LR parsers, SDT, Intermediate code, Data flow analysis | **5 Marks** |
| **Section 8** | **Operating Systems** | Processes, Threads, Semaphores, Deadlocks, CPU scheduling, Virtual memory & Paging | **9 Marks** |
| **Section 9** | **Databases (DBMS)** | ER model, Relational algebra, SQL, Normalization (3NF, BCNF), Indexing (B+ trees), Transactions | **8 Marks** |
| **Section 10** | **Computer Networks** | Layering, Sliding window protocols, IPv4 CIDR, Routing, TCP congestion control, Sockets | **7 Marks** |
| **Total** | **All 10 Sections + GA** | **Full Official IIT Pattern (180 Minutes)** | **100 Marks (65 Q)** |

---

## 🚀 Key Features

### 🌟 High-Weightage Recent Years (2024, 2025, 2026)
- **GATE 2026 Shift 1 & 2** (IIT Guwahati) — Full 65-question papers with contemporary MSQ & NAT distributions.
- **GATE 2025 Shift 1 & 2** (IIT Roorkee) — High-weightage sets featuring deep systems and algorithmic problems.
- **GATE 2024 Set 1 & 2** (IISc Bengaluru) — Benchmark sets with verified official answer keys and derivations.

### 📐 Official GATE Question Types
- **MCQ (Multiple Choice Questions)**: Single option correct (+1.0 / -0.33 or +2.0 / -0.66).
- **MSQ (Multiple Select Questions)**: One or more options correct (+1.0 or +2.0). Zero negative marking. No partial credit.
- **NAT (Numerical Answer Type)**: Real or integer numerical value entry via virtual keypad. Zero negative marking.

### 📖 Comprehensive Syllabus Study & Concept Hub (`/study`)
- **Full Syllabus Coverage**: In-depth theoretical modules for all 10 technical subjects + General Aptitude aligned with the official IIT Madras syllabus.
- **Structured Knowledge Architecture**: Each topic features:
  - **Core Synopsis**: High-density conceptual summary with estimated reading times.
  - **Key Formulas & Theorems**: Exact mathematical expressions, properties, and derivations.
  - **Deep-Dive Mechanics**: Comprehensive algorithms, state machine designs, hardware diagrams, and edge cases.
  - **Examiner Pitfalls & Traps**: Common misconceptions and trick questions frequently targeted by GATE paper setters.
  - **Sample GATE Benchmark Problems**: Authentic practice questions with step-by-step verified explanations.
- **Interactive Workbench**: Searchable syllabus sidebar, module collapsible hierarchy, persistent topic completion tracking (`localStorage`), and progress analytics.
- **Instant Remediation**: Direct links from question solutions in `/results` straight into the exact topic in `/study` for targeted remediation.

### 🧮 Built-in Official Virtual Scientific Calculator
- Replicates the official GATE virtual calculator interface.
- Supports trigonometry (deg/rad), natural log ($\ln$), base-10 log ($\log_{10}$), powers, roots, factorials ($n!$), memory operations ($MC, MR, MS, M+$), and floating-point arithmetic.

### 📚 Subject & Topic Practice Hub
- Filter questions by any of the 10 core syllabus subjects or General Aptitude.
- Filter by question type (**MSQ-only**, **NAT-only**, or **MCQ-only**).
- Dual Modes:
  - **Exam Mode**: Timed, real examination conditions.
  - **Study Mode**: Instant answer reveals, verified derivations, and formulas.

### 📝 High-Yield Revision & Formula Sheet
- Interactive modal and dashboard reference covering core theorems:
  - **Handshaking Lemma & Planar Graphs** ($V - E + F = 2$)
  - **Eigenvalue Properties & LU Decomposition**
  - **Pipelining Speedup & Effective Memory Access Time**
  - **Master Theorem Cases for Recurrence Relations**
  - **Chomsky Hierarchy Closure Properties Matrix**
  - **Two-Phase Locking & Relational Normal Forms**
  - **Sliding Window Optimal Window Size & CIDR Subnetting**

---

## 🛠️ Technology Stack

- **Framework**: Next.js 16 (Turbopack, App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Storage**: Browser `localStorage` (100% Client-Side & Offline Ready)
