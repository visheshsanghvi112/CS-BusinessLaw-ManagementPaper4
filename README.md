# 📚 ICSI CSEET Paper 4 — CBT Mock Test Engine

> **A full-fledged Computer-Based Test (CBT) simulation platform for ICSI CSEET Paper 4: Business Laws & Management**, built with Next.js 15, TypeScript, and Tailwind CSS. Features a 300-question authentic question bank sourced from official ICSI examination papers, chapter-wise practice drills, instant study mode, and a comprehensive scorecard analytics engine — all running entirely offline in the browser with zero backend.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)
[![Build: Passing](https://img.shields.io/badge/build-passing-brightgreen)]()
[![Tests: 18/18](https://img.shields.io/badge/tests-18%2F18%20passing-brightgreen)]()

---

## ✨ Features

### 🎯 Full Mock & Sectional Exam Modes
| Preset | Questions | Duration | Coverage |
|---|---|---|---|
| **Full Mock Exam** | 100 Q | 120 mins | Official June 2026 Paper (60 Laws + 40 Management) |
| **Diagnostic Sprint** | 25 Q | 30 mins | Mixed (15 Laws + 10 Management) |
| **Part A: Laws Specialist** | 60 Q | 72 mins | Business Laws only |
| **Part B: Management Specialist** | 40 Q | 48 mins | Business Management only |

### 📖 Chapter-Wise & Unit-Wise Practice Hub
Practice specific syllabus lessons from the official ICSI curriculum:

| Lesson | Title | Part | Marks Weightage |
|---|---|---|---|
| Lesson 1 | Introduction to Law & Indian Legal System | Part A: Laws | 8–10 M |
| Lesson 2 | Elements of Company Law (Companies Act, 2013) | Part A: Laws | 15–18 M |
| Lesson 3 | Elements of Law of Contracts (Contract Act, 1872) | Part A: Laws | 10–12 M |
| Lesson 4 | Law of Partnership (1932) & LLP Act (2008) | Part A: Laws | 8–10 M |
| Lesson 5 | Other Commercial Laws (Sale of Goods & NI Act) | Part A: Laws | 12–15 M |
| Lesson 6 | Introduction to Management & Managerial Roles | Part B: Mgmt | 4–6 M |
| Lesson 7 | Principles & Schools of Management (Taylor/Fayol) | Part B: Mgmt | 6–8 M |
| Lesson 8 | Core Functions of Management (POSDC & Leadership) | Part B: Mgmt | 15–20 M |
| Lesson 9 | Management Knowledge for CS & Corporate Governance | Part B: Mgmt | 8–10 M |

### 🛠️ Custom Topic Test Generator
- Multi-select any combination of Lessons 1–9
- Choose question count: 10, 20, 30, or All Available
- Mode toggle: **Timed Exam** vs **Instant Study**

### 🧠 Instant Study Mode
- Real-time answer reveal after each selection
- Official ICSI statutory rationale displayed inline
- No need to wait until end of test to understand answers

### ⏱️ Authentic CBT Experience
- **ICSI 5-colour question palette**: Not Visited · Not Answered · Answered · Marked for Review · Answered & Marked
- True countdown timer with **Pause & Save** (freezes timer state to `localStorage`)
- Auto-pause on tab switch / `beforeunload`
- Keyboard shortcuts: `1–4` select options, `M` mark for review, `C` clear, `←/→` navigate
- Zoom controls (`+`/`-`)
- Question Paper overview modal

### 📊 Comprehensive Scorecard & Analytics
- ICSI qualifying criteria: **40% cutoff** in Paper 4, 50% aggregate
- Multi-accepted-answer support (ICSI official key ambiguities handled)
- Sectional breakdown (Part A Laws vs Part B Management)
- Lesson-wise performance drill-down
- Per-question review with correct answer, your answer, and explanation
- Retake any test from the results page

### 💾 Persistence & Session Management
- All state stored in `localStorage` — no server required
- Resume interrupted sessions at any time
- Session overwrite guards (prompted before replacing an active session)
- Past results history with full replay

---

## 🗂️ Question Bank

**300 Official Verified MCQs** from three authentic ICSI sources:

| Source | Questions | Description |
|---|---|---|
| **June 2026 Official Exam** | Q 1 – 100 | Actual ICSI CSEET Paper 4 exam paper |
| **ICSI DAR Sample Set 1** | Q 101 – 200 | Official practice paper from ICSI Academics |
| **ICSI DAR Sample Set 2** | Q 201 – 300 | Official practice paper from ICSI Academics |

- Marking Scheme: **+1 correct, 0 incorrect** (zero negative marking)
- All questions categorized by Lesson, Part, and statutory source
- Explanations grounded in ICSI statutory provisions

---

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS |
| **State** | React `useState` + `useRef` + `localStorage` |
| **Icons** | Lucide React |
| **Data Ingestion** | Python 3 scripts (`scripts/`) |
| **Tests** | Custom logic suite via `tsx` (18 assertions) |

---

## 📁 Project Structure

```
testCS/
├── src/
│   ├── app/
│   │   ├── page.tsx                   # Dashboard (Full Mocks + Chapter Practice tabs)
│   │   ├── test/page.tsx              # CBT test engine workspace
│   │   └── results/page.tsx           # Scorecard & question review
│   ├── components/cbt/
│   │   ├── ChapterPracticeHub.tsx     # Chapter-wise & custom topic practice hub
│   │   ├── QuestionArea.tsx           # Main question renderer + study mode
│   │   ├── QuestionPalette.tsx        # ICSI 5-colour navigation palette
│   │   ├── QuestionPaperModal.tsx     # Full paper overview modal
│   │   ├── TopHeader.tsx              # Timer, progress, mode badge
│   │   ├── SubmitConfirmationModal.tsx
│   │   ├── PauseExitModal.tsx
│   │   └── ExamInstructionsModal.tsx
│   ├── lib/
│   │   ├── questionBank.ts            # 300-question master bank + lesson metadata
│   │   └── storage.ts                 # Session engine + preset factory
│   └── types/index.ts                 # TestSession, Question, LessonMetadata types
├── scripts/
│   ├── test_engine_logic.ts           # 18-assertion logic verification suite
│   ├── build_300_bank.py              # Question bank ingestion pipeline
│   └── ...                            # PDF parsing & scraping utilities
└── scraped_data/
    └── all_300_icsi_questions.json    # Compiled 300-question JSON dataset
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm / yarn / pnpm

### Install & Run

```bash
# Clone the repository
git clone https://github.com/visheshsanghvi112/CS-BusinessLaw-ManagementPaper4.git
cd CS-BusinessLaw-ManagementPaper4

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Run Logic Tests

```bash
npx tsx scripts/test_engine_logic.ts
```

Expected output:
```
==============================================
ALL 18 CBT RIGOROUS LOGIC TESTS PASSED WITHOUT ANY ERROR!
==============================================
```

### Production Build

```bash
npm run build
npm start
```

---

## 🔬 Test Coverage

The engine logic is verified by an automated suite covering 18 assertions:

| # | Test Case |
|---|---|
| 1 | Candidate name persistence |
| 2 | All 4 preset question counts & durations |
| 3 | Active session persistence (index, responses, statuses) |
| 4 | Multi-accepted-answer evaluation (ICSI ambiguous keys) |
| 5 | 40% cutoff: QUALIFIED detection |
| 6 | 40% cutoff: NOT QUALIFIED detection |
| 7 | Result retrieval by ID |
| 8 | Sectional isolation & metrics |
| 9 | Marked-for-Review evaluation rules |
| 10 | Auto-normalization of pending selected options |
| 11 | Pause logic (timer freeze + timestamp) |
| 12 | Resume logic (unfreeze + clear pausedAt) |
| 13 | Chapter-wise preset isolation (Lesson 2: Company Law) |
| 14 | Custom multi-topic test with Study Mode |
| 15 | Core mock presets are 100% frozen & unaffected |
| 16 | Retake preserves chapter/custom config & mode |
| 17 | Clear response reversion logic |
| 18 | Last-question commit without status lag |

---

## 📋 ICSI CSEET Paper 4 Syllabus

**ICSI CSEET (Company Secretary Executive Entrance Test)** — Paper 4: Business Laws & Management

- **Total Marks**: 100
- **Duration**: 2 Hours (120 Minutes)
- **Type**: MCQ only, computer-based
- **Negative Marking**: None
- **Qualifying Criteria**: Minimum 40 marks in Paper 4; 50% aggregate across all 4 papers

### Part A: Business Laws (60 Marks)
- Lesson 1: Introduction to Law & Indian Legal System
- Lesson 2: Elements of Company Law (Companies Act, 2013)
- Lesson 3: Elements of Law of Contracts (Indian Contract Act, 1872)
- Lesson 4: Law Relating to Partnership (1932) & LLP Act (2008)
- Lesson 5: Other Commercial Laws (Sale of Goods Act & Negotiable Instruments Act)

### Part B: Business Management (40 Marks)
- Lesson 6: Introduction to Management & Managerial Roles
- Lesson 7: Principles & Schools of Management
- Lesson 8: Core Functions of Management (POSDC, Leadership, Motivation)
- Lesson 9: Management Knowledge for Company Secretaries & Corporate Governance

---

## 🔖 Keywords

`ICSI` `CSEET` `Company Secretary` `CS Foundation` `Paper 4` `Business Laws` `Business Management` `CBT` `Mock Test` `MCQ` `Companies Act 2013` `Indian Contract Act 1872` `Partnership Act 1932` `LLP Act 2008` `Sale of Goods Act` `Negotiable Instruments Act` `Corporate Governance` `POSDC` `Management Functions` `Next.js` `TypeScript` `React` `Exam Preparation` `Chapter-Wise Practice` `Study Mode` `ICSI Question Bank` `ICSI DAR` `June 2026 Exam Paper`

---

## 📄 License

MIT — free to use for personal study and exam preparation.

---

<p align="center">Built for ICSI CSEET Paper 4 exam preparation 🎓</p>
