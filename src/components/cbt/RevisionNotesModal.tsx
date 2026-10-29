'use client';

import React, { useState } from 'react';
import { BookMarked, X, Search, Check, Sparkles, Layers } from 'lucide-react';

interface RevisionNotesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const REVISION_TOPICS = [
  {
    id: 'discrete-maths',
    title: 'Discrete Mathematics',
    formulas: [
      { name: 'Handshaking Lemma', formula: '∑ deg(v) = 2 · |E|', notes: 'Sum of degrees of all vertices equals twice the number of edges. The number of odd-degree vertices is always even.' },
      { name: "Euler's Planar Graph Formula", formula: '|V| - |E| + |F| = 2', notes: 'For any connected planar graph. If every face is bounded by at least 3 edges: |E| ≤ 3|V| - 6.' },
      { name: 'Trees & Bipartite Graphs', formula: 'Chromatic Number χ(G) = 2', notes: 'Every tree is bipartite. A graph is bipartite if and only if it contains no odd-length cycle.' },
      { name: 'Combinatorics: Pigeonhole Principle', formula: '⌈n / k⌉', notes: 'If n items are placed in k containers, at least one container has at least ⌈n / k⌉ items.' }
    ]
  },
  {
    id: 'linear-algebra',
    title: 'Linear Algebra',
    formulas: [
      { name: 'Eigenvalue Properties', formula: '∑ λᵢ = Trace(A)  and  ∏ λᵢ = det(A)', notes: 'Eigenvalues of upper/lower triangular or diagonal matrices are the diagonal elements themselves.' },
      { name: 'Cayley-Hamilton Theorem', formula: 'p(A) = 0', notes: 'Every square matrix satisfies its own characteristic equation det(A - λI) = 0.' },
      { name: 'Rank-Nullity Theorem', formula: 'Rank(A) + Nullity(A) = n (columns)', notes: 'System Ax = b has a unique solution if Rank(A) = Rank([A|b]) = n.' },
      { name: 'LU Decomposition', formula: 'A = L · U', notes: 'Factorization into unit lower triangular matrix L and upper triangular matrix U without row swaps if all leading principal minors are non-zero.' }
    ]
  },
  {
    id: 'coa',
    title: 'Computer Organization & Architecture',
    formulas: [
      { name: 'Pipeline Speedup', formula: 'Speedup = (k · n) / (k + n - 1 + Stalls)', notes: 'For large n: Ideal Speedup = k (number of stages). Actual CPI = 1 + Stalls per instruction.' },
      { name: 'Effective Memory Access Time (EMAT)', formula: 'EMAT = h · t_cache + (1 - h) · (t_cache + t_main)', notes: 'With TLB: EMAT = h_tlb · (t_tlb + t_mem) + (1 - h_tlb) · (t_tlb + 2 · t_mem).' },
      { name: 'Cache Tag & Index Bits', formula: 'Sets = Cache Size / (Associativity · Block Size)', notes: 'Index bits = log₂(Sets), Offset bits = log₂(Block Size), Tag bits = Physical Address Bits - Index - Offset.' },
      { name: 'IEEE 754 Single Precision', formula: '(-1)^s · (1.M) · 2^(E - 127)', notes: '1 sign bit, 8 exponent bits (bias 127, range 1 to 254), 23 fraction/mantissa bits.' }
    ]
  },
  {
    id: 'algorithms',
    title: 'Algorithms & Complexity',
    formulas: [
      { name: 'Master Theorem', formula: 'T(n) = a·T(n/b) + Θ(n^k · log^p n)', notes: 'Compare log_b(a) with k. If log_b(a) > k, T(n) = Θ(n^(log_b a)). If equal and p ≥ 0, T(n) = Θ(n^k · log^(p+1) n).' },
      { name: 'Shortest Path Complexities', formula: 'Dijkstra: O((V + E) log V) | Bellman-Ford: O(V · E)', notes: 'Dijkstra requires non-negative edge weights. Bellman-Ford detects negative weight cycles in V iterations.' },
      { name: 'All-Pairs Shortest Path (Floyd-Warshall)', formula: 'Time: O(V³) | Space: O(V²)', notes: 'Uses dynamic programming d(i, j, k) = min(d(i, j, k-1), d(i, k, k-1) + d(k, j, k-1)).' },
      { name: 'Minimum Spanning Tree (MST)', formula: 'Kruskal: O(E log E) | Prim: O(E + V log V)', notes: 'Cycle property: heaviest edge in cycle is not in MST. Cut property: lightest edge across a cut is always in MST.' }
    ]
  },
  {
    id: 'toc',
    title: 'Theory of Computation',
    formulas: [
      { name: 'Chomsky Hierarchy', formula: 'Regular ⊂ CFL ⊂ CSL ⊂ Recursive ⊂ RE', notes: 'DFA = NFA in expressive power. DPDA is strictly less powerful than NPDA.' },
      { name: 'Closure Properties Matrix', formula: 'Regular: Closed under Union, Intersection, Complement, Star', notes: 'CFL: Closed under Union, Concatenation, Star. NOT closed under Intersection or Complement.' },
      { name: 'Pumping Lemma (Regular)', formula: 'w = xyz such that |xy| ≤ p, |y| ≥ 1, ∀i ≥ 0: xyⁱz ∈ L', notes: 'Used to prove a language is NOT regular. Finding one contradictory i suffices.' },
      { name: 'Decidability Table', formula: 'Halting Problem is RE but Undecidable', notes: 'Emptiness, Finiteness, Equivalence are decidable for Regular languages, but undecidable for CFLs (except Emptiness & Finiteness).' }
    ]
  },
  {
    id: 'compiler-design',
    title: 'Compiler Design',
    formulas: [
      { name: 'LL(1) Condition', formula: 'First(α) ∩ First(β) = ∅  and  Follow(A) ∩ First(β) = ∅ (if α ⇒* ε)', notes: 'An LL(1) grammar cannot have left recursion or common prefixes (must left-factor).' },
      { name: 'Parser Power Hierarchy', formula: 'LR(0) < SLR(1) < LALR(1) < LR(1)', notes: 'LALR(1) has identical number of states as SLR(1) and LR(0), but merges states with common cores.' },
      { name: 'Live Variable Analysis (Data Flow)', formula: 'In[B] = Use[B] ∪ (Out[B] - Def[B])', notes: 'Backward data flow analysis used for dead code elimination and register allocation.' }
    ]
  },
  {
    id: 'os',
    title: 'Operating Systems',
    formulas: [
      { name: 'Multi-Level Paging Table Size', formula: 'PT Size = Number of Entries · PTE Size', notes: 'Number of pages = Virtual Address Space / Page Size. If PTE size is 4 bytes and Page size is 4 KB, each page fits 1024 entries.' },
      { name: "Banker's Algorithm Safety Condition", formula: 'Need[i] = Max[i] - Allocation[i] ≤ Work', notes: 'A state is safe if there exists at least one safe execution sequence that completes all processes.' },
      { name: 'Disk Scheduling Algorithms', formula: 'Seek Time ∝ Head Movement', notes: 'FCFS, SSTF (causes starvation), SCAN (elevator), C-SCAN (uniform wait time, circular return without service).' }
    ]
  },
  {
    id: 'dbms',
    title: 'Databases (DBMS)',
    formulas: [
      { name: 'Relational Normal Forms', formula: 'BCNF: X is a Superkey for all X → Y', notes: '3NF allows X → Y if X is a superkey OR Y is a prime attribute. BCNF strictly forbids transitive dependencies.' },
      { name: 'Lossless Join Condition', formula: '(R₁ ∩ R₂) → R₁  or  (R₁ ∩ R₂) → R₂', notes: 'Common attributes must form a superkey of at least one of the decomposed relations.' },
      { name: 'B+ Tree Order & Fanout', formula: 'Node Size = (p · Pointer Size) + ((p - 1) · Key Size)', notes: 'Order p indicates max p children and p-1 keys. Every non-root node must be at least ⌈p / 2⌉ full.' }
    ]
  },
  {
    id: 'computer-networks',
    title: 'Computer Networks',
    formulas: [
      { name: 'Optimal Sliding Window Size', formula: 'W = 1 + 2 · a  where  a = T_prop / T_trans', notes: 'Efficiency η = W / (1 + 2a). To achieve 100% link utilization, window size must equal 1 + 2a.' },
      { name: 'IPv4 CIDR Subnetting', formula: 'Subnet Mask /N ⇒ Host bits = 32 - N', notes: 'Total addresses = 2^(32 - N), Usable host IP addresses = 2^(32 - N) - 2 (subtract network and broadcast).' },
      { name: 'TCP Congestion Control', formula: 'Slow Start (exponential) ⇒ Congestion Avoidance (linear)', notes: 'On Triple Duplicate ACK: Fast Retransmit, ssthresh = cwnd / 2, cwnd = ssthresh + 3. On Timeout: ssthresh = cwnd / 2, cwnd = 1 MSS.' }
    ]
  }
];

export const RevisionNotesModal: React.FC<RevisionNotesModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<string>('discrete-maths');
  const [searchQuery, setSearchQuery] = useState<string>('');

  if (!isOpen) return null;

  const currentTopic = REVISION_TOPICS.find(t => t.id === activeTab) || REVISION_TOPICS[0];

  const filteredFormulas = currentTopic.formulas.filter(f =>
    f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.formula.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.notes.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 select-none">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 rounded-3xl shadow-2xl border border-slate-700/80 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-5 sm:px-6 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base">
            <BookMarked className="w-5 h-5 text-emerald-400" />
            <span>GATE High-Yield Formula &amp; Concept Sheet</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative hidden sm:block">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search formulas..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="pl-9 pr-3 py-1.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500 w-48"
              />
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Topic Tabs */}
        <div className="bg-slate-950/70 border-b border-slate-800 px-4 py-2 flex items-center gap-1.5 overflow-x-auto text-xs shrink-0">
          {REVISION_TOPICS.map(topic => (
            <button
              key={topic.id}
              onClick={() => setActiveTab(topic.id)}
              className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition cursor-pointer ${
                activeTab === topic.id
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {topic.title}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-extrabold text-base text-white tracking-tight">
              {currentTopic.title} — Key Formulas &amp; Theorems
            </h3>
            <span className="text-xs text-slate-400 font-mono">
              {filteredFormulas.length} key rules
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredFormulas.map((f, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 transition flex flex-col justify-between space-y-2.5"
              >
                <div>
                  <h4 className="font-bold text-sm text-emerald-300">
                    {f.name}
                  </h4>
                  <div className="my-2 p-2.5 rounded-xl bg-slate-900 border border-slate-800/80 font-mono text-xs sm:text-sm text-white font-semibold">
                    {f.formula}
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {f.notes}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

