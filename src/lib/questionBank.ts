import { Question, SubjectMetadata, TestPreset, GateSubjectId } from '@/types';
import rawQuestions from './gateQuestions.json';

export const QUESTION_BANK: Question[] = rawQuestions as unknown as Question[];

export const SUBJECT_METADATA: SubjectMetadata[] = [
  {
    subjectId: 'general-aptitude',
    subjectName: 'General Aptitude',
    sectionId: 'GA',
    syllabusSection: 'General Aptitude (GA)',
    weightageMarks: '15 Marks',
    keyTopics: ['Verbal Ability & Grammar', 'Numerical Ability & Estimation', 'Data Interpretation', 'Analytical & Spatial Reasoning'],
    description: 'Mandatory 15-mark section in all GATE papers testing English comprehension, vocabulary, critical reasoning, and quantitative problem solving.'
  },
  {
    subjectId: 'discrete-maths',
    subjectName: 'Discrete Mathematics',
    sectionId: 'CS',
    syllabusSection: 'Section 1: Engineering Mathematics',
    weightageMarks: '6–8 Marks',
    keyTopics: ['Propositional & First-Order Logic', 'Sets, Relations & Functions', 'Partial Orders & Lattices', 'Monoids & Groups', 'Graphs (Connectivity, Matching, Colouring)', 'Combinatorics & Recurrence Relations'],
    description: 'Mathematical foundation of computation including boolean logic, relations, algebraic structures, graph theory, and generating functions.'
  },
  {
    subjectId: 'linear-algebra',
    subjectName: 'Linear Algebra',
    sectionId: 'CS',
    syllabusSection: 'Section 1: Engineering Mathematics',
    weightageMarks: '3–4 Marks',
    keyTopics: ['Matrices & Determinants', 'Systems of Linear Equations', 'Eigenvalues & Eigenvectors', 'LU Decomposition', 'Rank & Nullity'],
    description: 'Matrix algebra, linear transformations, determinants, vector spaces, and decomposition techniques.'
  },
  {
    subjectId: 'calculus',
    subjectName: 'Calculus',
    sectionId: 'CS',
    syllabusSection: 'Section 1: Engineering Mathematics',
    weightageMarks: '2–3 Marks',
    keyTopics: ['Limits, Continuity & Differentiability', 'Maxima & Minima', 'Mean Value Theorem', 'Definite & Indefinite Integration'],
    description: 'Differential and integral calculus, optimization, and limit theorems essential for algorithms and continuous systems.'
  },
  {
    subjectId: 'probability',
    subjectName: 'Probability and Statistics',
    sectionId: 'CS',
    syllabusSection: 'Section 1: Engineering Mathematics',
    weightageMarks: '3–4 Marks',
    keyTopics: ['Random Variables & Expectation', 'Uniform, Normal, Exponential Distributions', 'Poisson & Binomial Distributions', 'Mean, Median, Mode & Std Dev', 'Conditional Probability & Bayes Theorem'],
    description: 'Probability models, discrete/continuous distributions, statistical measures, and Bayesian inference.'
  },
  {
    subjectId: 'digital-logic',
    subjectName: 'Digital Logic',
    sectionId: 'CS',
    syllabusSection: 'Section 2: Digital Logic',
    weightageMarks: '4–6 Marks',
    keyTopics: ['Boolean Algebra & Minimization (K-Maps)', 'Combinational Circuits (Multiplexers, Decoders, Adders)', 'Sequential Circuits (Flip-Flops, Counters, Registers)', 'Number Representation (Fixed & Floating Point, 2\'s Complement)'],
    description: 'Binary logic design, Karnaugh maps, synchronous sequential machines, and floating-point arithmetic standards.'
  },
  {
    subjectId: 'coa',
    subjectName: 'Computer Organization & Architecture',
    sectionId: 'CS',
    syllabusSection: 'Section 3: Computer Organization and Architecture',
    weightageMarks: '8–10 Marks',
    keyTopics: ['Instruction Set & Addressing Modes', 'ALU & Control Unit (Hardwired & Microprogrammed)', 'Memory Interfacing & Hierarchy (Cache Mapping, Hit Time)', 'I/O Interface (Interrupts & DMA)', 'Instruction Pipelining & Hazards'],
    description: 'Hardware execution model, cache architectures, instruction-level parallelism, pipeline speedups, and memory subsystems.'
  },
  {
    subjectId: 'programming-ds',
    subjectName: 'Programming & Data Structures',
    sectionId: 'CS',
    syllabusSection: 'Section 4: Programming and Data Structures',
    weightageMarks: '10–12 Marks',
    keyTopics: ['Programming in C (Pointers, Scope, Parameter Passing)', 'Recursion & Stack Frames', 'Arrays, Stacks, Queues & Linked Lists', 'Trees, Binary Search Trees & Binary Heaps', 'Graph Representations'],
    description: 'Core procedural programming in C, recursion analysis, linear and non-linear dynamic memory data structures.'
  },
  {
    subjectId: 'algorithms',
    subjectName: 'Algorithms',
    sectionId: 'CS',
    syllabusSection: 'Section 5: Algorithms',
    weightageMarks: '10–12 Marks',
    keyTopics: ['Asymptotic Complexity (Big-O, Omega, Theta)', 'Searching, Sorting & Hashing', 'Algorithm Design: Greedy, DP & Divide-and-Conquer', 'Graph Traversals (BFS, DFS)', 'Minimum Spanning Trees & Shortest Paths (Dijkstra, Bellman-Ford)'],
    description: 'Algorithm design paradigms, recurrence solving, graph optimization, and asymptotic performance guarantees.'
  },
  {
    subjectId: 'toc',
    subjectName: 'Theory of Computation',
    sectionId: 'CS',
    syllabusSection: 'Section 6: Theory of Computation',
    weightageMarks: '8–10 Marks',
    keyTopics: ['Regular Expressions & Finite Automata (DFA, NFA)', 'Context-Free Grammars & Push-Down Automata', 'Regular & Context-Free Languages, Pumping Lemma', 'Turing Machines & Undecidability (Halting Problem)'],
    description: 'Formal language theory, automata hierarchies, Chomsky classification, pumping lemmas, and computational decidability.'
  },
  {
    subjectId: 'compiler-design',
    subjectName: 'Compiler Design',
    sectionId: 'CS',
    syllabusSection: 'Section 7: Compiler Design',
    weightageMarks: '4–6 Marks',
    keyTopics: ['Lexical Analysis', 'Parsing (LL(1), LR(0), SLR, LALR, LR(1))', 'Syntax-Directed Translation (SDT)', 'Runtime Environments & Activation Records', 'Intermediate Code Generation', 'Local Optimization & Data Flow Analysis'],
    description: 'Translating high-level source code into intermediate machine forms, parser construction, and code optimization.'
  },
  {
    subjectId: 'os',
    subjectName: 'Operating System',
    sectionId: 'CS',
    syllabusSection: 'Section 8: Operating System',
    weightageMarks: '8–10 Marks',
    keyTopics: ['System Calls, Processes & Threads', 'IPC, Concurrency & Synchronization (Semaphores, Mutex)', 'Deadlocks (Detection, Prevention, Banker\'s Algorithm)', 'CPU & I/O Scheduling Algorithms', 'Memory Management, Paging & Virtual Memory', 'File Systems & Inodes'],
    description: 'Kernel architectures, multi-threading, concurrency control, page replacement policies, and file system organization.'
  },
  {
    subjectId: 'dbms',
    subjectName: 'Databases',
    sectionId: 'CS',
    syllabusSection: 'Section 9: Databases',
    weightageMarks: '7–9 Marks',
    keyTopics: ['ER-Model & Relational Algebra', 'Tuple Calculus & SQL', 'Integrity Constraints & Normal Forms (1NF, 2NF, 3NF, BCNF)', 'File Organization & Indexing (B & B+ Trees)', 'Transactions & Concurrency Control (ACID, 2PL, Serializability)'],
    description: 'Relational database theory, query optimization, functional dependencies, indexing structures, and transaction processing.'
  },
  {
    subjectId: 'computer-networks',
    subjectName: 'Computer Networks',
    sectionId: 'CS',
    syllabusSection: 'Section 10: Computer Networks',
    weightageMarks: '7–9 Marks',
    keyTopics: ['Principles of Layering & Switching Metrics', 'Data Link Layer: Error Detection, MAC, Ethernet, CSMA/CD', 'Routing: Distance Vector & Link State', 'IPv4: Fragmentation, CIDR Notation, NAT', 'TCP: Flow & Congestion Control, Sockets', 'DNS & HTTP Protocols'],
    description: 'Network protocol stack, sliding window protocols, subnet routing, transport congestion control, and application-layer protocols.'
  }
];

export const TEST_PRESETS: TestPreset[] = [
  {
    id: 'gate-2026-cs1',
    title: 'GATE 2026 (Shift 1) Official Mock',
    year: 2026,
    paperSet: 'CS1',
    description: 'Complete 65-question official paper organized by IIT Guwahati. Modern mix of MSQ, NAT, and MCQ with standard GATE marking.',
    questionCount: 65,
    durationMinutes: 180,
    badge: 'Latest 2026 Paper',
    featured: true,
    organizingInstitute: 'IIT Guwahati'
  },
  {
    id: 'gate-2026-cs2',
    title: 'GATE 2026 (Shift 2) Official Mock',
    year: 2026,
    paperSet: 'CS2',
    description: 'Second shift 65-question paper from GATE 2026. High incidence of MSQs and precision NAT calculation questions.',
    questionCount: 65,
    durationMinutes: 180,
    badge: 'Latest 2026 Paper',
    featured: true,
    organizingInstitute: 'IIT Guwahati'
  },
  {
    id: 'gate-2025-cs1',
    title: 'GATE 2025 (Shift 1) Official Mock',
    year: 2025,
    paperSet: 'CS1',
    description: 'Official 65-question paper conducted by IIT Roorkee. In-depth algorithmic, architecture, and discrete mathematics problems.',
    questionCount: 65,
    durationMinutes: 180,
    badge: 'High Weightage 2025',
    featured: true,
    organizingInstitute: 'IIT Roorkee'
  },
  {
    id: 'gate-2025-cs2',
    title: 'GATE 2025 (Shift 2) Official Mock',
    year: 2025,
    paperSet: 'CS2',
    description: 'Shift 2 official paper by IIT Roorkee. Features deep questions on operating systems, compilers, and databases.',
    questionCount: 65,
    durationMinutes: 180,
    badge: 'High Weightage 2025',
    featured: true,
    organizingInstitute: 'IIT Roorkee'
  },
  {
    id: 'gate-2024-cs1',
    title: 'GATE 2024 (Set 1) Official Mock',
    year: 2024,
    paperSet: 'CS1',
    description: 'Benchmark IISc Bengaluru paper with verified answer keys, detailed mathematical derivations, and MSQ/NAT solutions.',
    questionCount: 65,
    durationMinutes: 180,
    badge: 'IISc Bengaluru Benchmark',
    featured: true,
    organizingInstitute: 'IISc Bengaluru'
  },
  {
    id: 'gate-2024-cs2',
    title: 'GATE 2024 (Set 2) Official Mock',
    year: 2024,
    paperSet: 'CS2',
    description: 'Second set by IISc Bengaluru with complete verified keys, extensive MSQ coverage, and networking/systems problems.',
    questionCount: 65,
    durationMinutes: 180,
    badge: 'IISc Bengaluru Benchmark',
    featured: true,
    organizingInstitute: 'IISc Bengaluru'
  },
  {
    id: 'quick-sprint-30',
    title: 'Diagnostic Rapid Sprint (30Q)',
    description: 'Fast-paced diagnostic test with 30 high-yield questions sampled across Algorithms, DS, OS, and Networks.',
    questionCount: 30,
    durationMinutes: 45,
    badge: 'Rapid Drill',
    featured: false
  },
  {
    id: 'general-aptitude-sprint',
    title: 'General Aptitude Mastery Drill',
    description: 'Dedicated 20-question drill focused solely on General Aptitude (Verbal, Quantitative, Spatial Reasoning).',
    questionCount: 20,
    durationMinutes: 30,
    sectionFilter: 'GA',
    badge: '15 Marks Booster',
    featured: false
  }
];

export function getQuestionsBySubject(subjectId: GateSubjectId): Question[] {
  return QUESTION_BANK.filter(q => q.subjectId === subjectId);
}

export function getQuestionsByYear(year: number): Question[] {
  return QUESTION_BANK.filter(q => q.year === year);
}

export function getQuestionsByType(type: 'MCQ' | 'MSQ' | 'NAT'): Question[] {
  return QUESTION_BANK.filter(q => q.type === type);
}
