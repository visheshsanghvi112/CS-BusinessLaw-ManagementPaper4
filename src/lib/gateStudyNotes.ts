export interface TopicNote {
  id: string;
  topicTitle: string;
  syllabusRef: string;
  estimatedReadTime: string;
  summary: string;
  keyFormulasAndTheorems: {
    title: string;
    formula?: string;
    explanation: string;
  }[];
  deepDiveContent: string;
  examinerTraps: string[];
  sampleGateProblem: {
    question: string;
    type: 'MCQ' | 'MSQ' | 'NAT';
    options?: string[];
    correctAnswer: string;
    explanation: string;
  };
}

export interface SubjectStudyModule {
  subjectId: string;
  subjectName: string;
  sectionId: 'GA' | 'CS';
  syllabusSection: string;
  weightage: string;
  description: string;
  topics: TopicNote[];
}

export const GATE_STUDY_MODULES: SubjectStudyModule[] = [
  {
    subjectId: 'discrete-maths',
    subjectName: 'Discrete Mathematics',
    sectionId: 'CS',
    syllabusSection: 'Section 1: Engineering Mathematics',
    weightage: '6–8 Marks',
    description: 'Foundations of mathematical logic, relations, lattices, algebraic structures, graph theory, and generating functions.',
    topics: [
      {
        id: 'dm-logic',
        topicTitle: 'Propositional & First-Order Logic',
        syllabusRef: 'Section 1: Propositional and first order logic',
        estimatedReadTime: '8 mins',
        summary: 'Propositional logic deals with truth-functional statements, connectives (∧, ∨, ¬, →, ↔), tautologies, and satisfiability. First-order logic introduces universal (∀) and existential (∃) quantifiers over a domain of discourse.',
        keyFormulasAndTheorems: [
          {
            title: 'Material Implication Equivalence',
            formula: 'p → q ≡ ¬p ∨ q',
            explanation: 'Crucial for negating implications: ¬(p → q) ≡ p ∧ ¬q.'
          },
          {
            title: 'Contrapositive Law',
            formula: 'p → q ≡ ¬q → ¬p',
            explanation: 'An implication is logically equivalent only to its contrapositive, not its converse (q → p) or inverse (¬p → ¬q).'
          },
          {
            title: 'Quantifier Negation (De Morgan for Quantifiers)',
            formula: '¬(∀x P(x)) ≡ ∃x ¬P(x)   and   ¬(∃x P(x)) ≡ ∀x ¬P(x)',
            explanation: 'Swapping universal and existential quantifiers when pushing negation inward across predicates.'
          },
          {
            title: 'Quantifier Commutativity Rule',
            formula: '∀x ∀y P(x, y) ≡ ∀y ∀x P(x, y)  but  ∃x ∀y P(x, y) → ∀y ∃x P(x, y) is NOT reversible!',
            explanation: 'You can swap identical quantifiers. However, ∃x ∀y implies ∀y ∃x, but the converse is generally false.'
          }
        ],
        deepDiveContent: `### Truth Functional Analysis & Normal Forms
1. **Tautology**: A compound statement that evaluates to True under every possible truth assignment.
2. **Contradiction (Unsatisfiable)**: Evaluates to False under every truth assignment.
3. **Contingency (Satisfiable)**: True under at least one assignment and False under at least one.
4. **Conjunctive Normal Form (CNF)**: A conjunction of disjunctions (e.g., (A ∨ B) ∧ (¬A ∨ C)).
5. **Disjunctive Normal Form (DNF)**: A disjunction of conjunctions (e.g., (A ∧ B) ∨ (¬A ∧ C)).

### First-Order Logic Translation Rules
- *"All cats are animals"*: $\\forall x (Cat(x) \\to Animal(x))$ — **Always use $\\to$ with $\\forall$**.
- *"Some cats are black"*: $\\exists x (Cat(x) \\land Black(x))$ — **Always use $\\land$ with $\\exists$**.
- Common error: $\\exists x (Cat(x) \\to Black(x))$ is True as long as there exists any non-cat entity in the universe!`,
        examinerTraps: [
          'Translating "All A are B" with ∧ instead of →: ∀x (A(x) ∧ B(x)) means everything in the entire universe is both A and B!',
          'Translating "Some A are B" with → instead of ∧: ∃x (A(x) → B(x)) is trivially true if anything in universe is ¬A(x).',
          'Assuming p → q is False when p is False: A conditional is vacuously True whenever its antecedent is False.'
        ],
        sampleGateProblem: {
          question: 'Which one of the following first-order logic formulas correctly expresses the statement: "Every student who takes Algorithms passes the examination"? (Domain: students, S(x): x is a student, T(x): x takes Algorithms, P(x): x passes the examination)',
          type: 'MCQ',
          options: [
            '(A) ∀x (S(x) ∧ T(x) ∧ P(x))',
            '(B) ∀x ((S(x) ∧ T(x)) → P(x))',
            '(C) ∃x ((S(x) ∧ T(x)) → P(x))',
            '(D) ∀x (S(x) → (T(x) ∧ P(x)))'
          ],
          correctAnswer: 'B',
          explanation: 'For any individual x, IF x is a student AND x takes Algorithms, THEN x passes: ∀x ((S(x) ∧ T(x)) → P(x)).'
        }
      },
      {
        id: 'dm-graphs',
        topicTitle: 'Graph Theory: Connectivity, Matching & Colouring',
        syllabusRef: 'Section 1: Graphs: connectivity, matching, colouring',
        estimatedReadTime: '10 mins',
        summary: 'Graphs model pairwise relationships. Core concepts include vertex degrees, Euler & Hamiltonian paths, planar graphs, vertex colorings, and matching theory.',
        keyFormulasAndTheorems: [
          {
            title: 'Handshaking Lemma',
            formula: '∑_{v ∈ V} deg(v) = 2 · |E|',
            explanation: 'The sum of vertex degrees equals twice the number of edges. Consequently, the number of vertices with odd degree is always even.'
          },
          {
            title: "Euler's Formula for Planar Graphs",
            formula: '|V| - |E| + |F| = 2',
            explanation: 'For any connected planar graph with |V| vertices, |E| edges, and |F| faces (regions including the unbounded external face).'
          },
          {
            title: 'Planar Graph Edge Bound',
            formula: '|E| ≤ 3|V| - 6  (for |V| ≥ 3)',
            explanation: 'If the graph has no triangles (every face bounded by ≥ 4 edges, e.g. bipartite), the bound tightens to |E| ≤ 2|V| - 4.'
          },
          {
            title: 'Chromatic Number of Special Graphs',
            formula: 'χ(Tree) = 2, χ(Bipartite) = 2, χ(K_n) = n, χ(C_n) = 2 (if n even), 3 (if n odd)',
            explanation: 'A graph is 2-colorable (bipartite) if and only if it contains no odd-length cycle.'
          }
        ],
        deepDiveContent: `### Euler vs Hamiltonian Graphs
- **Eulerian Circuit**: Visits every **edge** exactly once and returns to starting vertex.
  - Condition (Undirected): Graph is connected and **every vertex has an even degree**.
  - Eulerian Trail: Connected and exactly 2 vertices have odd degree.
- **Hamiltonian Cycle**: Visits every **vertex** exactly once and returns to starting vertex. (NP-Complete problem).
  - Dirac's Theorem: If $|V| \\ge 3$ and $deg(v) \\ge |V| / 2$ for all $v$, then graph is Hamiltonian.

### Bipartite Matching (Hall's Marriage Theorem)
A bipartite graph $G = (X \\cup Y, E)$ has a matching that covers $X$ if and only if for every subset $S \\subseteq X$, $|N(S)| \\ge |S|$ (where $N(S)$ is the neighborhood of $S$).`,
        examinerTraps: [
          'Forgetting that disconnected graphs can also use Euler formula: |V| - |E| + |F| = 1 + k (where k is number of connected components).',
          'Assuming Kuratowski theorem only applies to K5 and K3,3: A graph is non-planar iff it contains a subgraph homeomorphic to K5 or K3,3.',
          'Confusing edge connectivity with vertex connectivity: λ(G) ≥ κ(G).'
        ],
        sampleGateProblem: {
          question: 'Let G be a simple connected planar graph with 10 vertices and 15 edges. How many faces (regions) are present in any planar embedding of G?',
          type: 'NAT',
          correctAnswer: '7',
          explanation: 'Using Euler formula: |V| - |E| + |F| = 2 ⇒ 10 - 15 + |F| = 2 ⇒ |F| - 5 = 2 ⇒ |F| = 7.'
        }
      },
      {
        id: 'dm-combinatorics',
        topicTitle: 'Combinatorics & Recurrence Relations',
        syllabusRef: 'Section 1: Combinatorics: counting, recurrence relations, generating functions',
        estimatedReadTime: '9 mins',
        summary: 'Techniques for counting arrangements, selections, solving linear homogeneous and non-homogeneous recurrence relations, and applying generating functions.',
        keyFormulasAndTheorems: [
          {
            title: 'Inclusion-Exclusion Principle',
            formula: '|A ∪ B ∪ C| = |A| + |B| + |C| - (|A ∩ B| + |A ∩ C| + |B ∩ C|) + |A ∩ B ∩ C|',
            explanation: 'Generalizes union size for n intersecting finite sets.'
          },
          {
            title: 'Derangements Formula',
            formula: '!n = n! ∑_{k=0}^n (-1)^k / k! ≈ n! / e',
            explanation: 'Number of permutations of n elements where no element appears in its original position.'
          },
          {
            title: 'Linear Homogeneous Recurrence',
            formula: 'a_n = c_1 r_1^n + c_2 r_2^n',
            explanation: 'If characteristic equation has distinct roots r_1, r_2. If root r has multiplicity m, term is (A_0 + A_1 n + ... + A_{m-1} n^{m-1}) r^n.'
          }
        ],
        deepDiveContent: `### Stars and Bars (Balls in Bins)
- Distributing $n$ identical items into $k$ distinct bins:
  - Non-negative integer solutions ($x_i \\ge 0$): $\\binom{n + k - 1}{k - 1}$.
  - Strictly positive integer solutions ($x_i \\ge 1$): $\\binom{n - 1}{k - 1}$.

### Generating Functions
- Sequence $\\langle a_0, a_1, a_2, ... \\rangle \\to G(x) = \\sum_{n=0}^{\\infty} a_n x^n$.
- Geometric series: $1 + x + x^2 + ... = \\frac{1}{1-x}$.
- Derivation: $\\frac{1}{(1-x)^2} = \\sum_{n=0}^{\\infty} (n+1) x^n$.`,
        examinerTraps: [
          'Confusing distinct items with identical items: Distributing distinct items into distinct bins is k^n, whereas identical items is stars-and-bars.',
          'Missing initial conditions when solving recurrence relations.',
          'Derangement approximation: For n >= 4, round n! / e to the nearest integer.'
        ],
        sampleGateProblem: {
          question: 'The number of integer solutions to the equation x1 + x2 + x3 + x4 = 20 where x1, x2, x3, x4 >= 1 is:',
          type: 'NAT',
          correctAnswer: '969',
          explanation: 'Using stars and bars with positive constraints: C(n-1, k-1) = C(20-1, 4-1) = C(19, 3) = (19 * 18 * 17) / (3 * 2 * 1) = 969.'
        }
      },
      {
        id: 'dm-algebraic-structures',
        topicTitle: 'Sets, Relations, Lattices & Group Theory',
        syllabusRef: 'Section 1: Sets, relations, functions, partial orders and lattices. Monoids, Groups',
        estimatedReadTime: '9 mins',
        summary: 'Algebraic structures investigate operations on sets satisfying axioms (closure, associativity, identity, inverses). Posets and lattices model partial ordering, upper/lower bounds, and Boolean logic lattices.',
        keyFormulasAndTheorems: [
          {
            title: 'Equivalence Relations & Partitions',
            formula: 'Reflexive + Symmetric + Transitive => Equivalence Relation',
            explanation: 'Number of equivalence relations on a set of size n equals the Bell Number B(n).'
          },
          {
            title: "Lagrange's Subgroup Theorem",
            formula: '|H| divides |G| for any finite subgroup H of G',
            explanation: 'The order of any element in a finite group divides the order of the group: a^|G| = e.'
          },
          {
            title: 'Lattice Join & Meet Conditions',
            formula: 'LUB(a, b) = a ∨ b (Join),  GLB(a, b) = a ∧ b (Meet)',
            explanation: 'A poset is a lattice if and only if every pair of elements has a unique LUB and unique GLB.'
          }
        ],
        deepDiveContent: `### Hierarchy of Algebraic Structures
1. **Semi-group**: Closed + Associative.
2. **Monoid**: Semi-group + Identity element (e).
3. **Group**: Monoid + Inverses for all elements (a · a^{-1} = e).
4. **Abelian Group**: Group + Commutative property (a · b = b · a).

### Counting Relations on Set with n Elements
- **Total Relations**: 2^{n^2}
- **Reflexive Relations**: 2^{n^2 - n}
- **Symmetric Relations**: 2^{n(n+1)/2}
- **Reflexive & Symmetric**: 2^{n(n-1)/2}`,
        examinerTraps: [
          'Confusing Antisymmetric (if aRb and bRa => a = b) with Asymmetric (if aRb => not bRa).',
          'Assuming a group can have an element with order that does not divide |G| (strictly forbidden by Lagrange Theorem).',
          'Assuming every poset is a lattice: A poset where two elements have multiple minimal upper bounds is NOT a lattice.'
        ],
        sampleGateProblem: {
          question: 'Let G be a finite group of order 35. What is the maximum possible order of a proper non-trivial subgroup of G?',
          type: 'NAT',
          correctAnswer: '7',
          explanation: 'By Lagrange Theorem, the order of any subgroup H must divide |G| = 35. The positive divisors of 35 are 1, 5, 7, and 35. For a proper non-trivial subgroup, |H| can be 5 or 7. The maximum possible order is 7.'
        }
      }
    ]
  },
  {
    subjectId: 'linear-algebra',
    subjectName: 'Linear Algebra',
    sectionId: 'CS',
    syllabusSection: 'Section 1: Engineering Mathematics',
    weightage: '3–4 Marks',
    description: 'Vector spaces, matrices, system of linear equations, eigenvalues and eigenvectors, LU decomposition.',
    topics: [
      {
        id: 'la-matrices-eigen',
        topicTitle: 'Matrices, Determinants & Eigenvalues',
        syllabusRef: 'Section 1: Matrices, determinants, system of linear equations, eigenvalues and eigenvectors',
        estimatedReadTime: '8 mins',
        summary: 'Determinants, rank of a matrix, characteristic polynomials, algebraic vs geometric multiplicity, and spectral properties of symmetric and orthogonal matrices.',
        keyFormulasAndTheorems: [
          {
            title: 'Eigenvalue Sum & Product Rule',
            formula: '∑ λᵢ = Trace(A) = ∑ a_{ii}   and   ∏ λᵢ = det(A)',
            explanation: 'The sum of eigenvalues equals the matrix trace (sum of diagonal elements), and their product equals the determinant.'
          },
          {
            title: 'Eigenvalues of Matrix Powers',
            formula: 'If A has eigenvalue λ, then A^k has eigenvalue λ^k and (A + cI) has (λ + c)',
            explanation: 'A^{-1} has eigenvalue 1/λ (for non-singular A).'
          },
          {
            title: 'Symmetric Matrix Properties',
            formula: 'A = A^T ⇒ All eigenvalues are REAL, eigenvectors of distinct eigenvalues are ORTHOGONAL',
            explanation: 'Spectral Theorem guarantees real symmetric matrices are orthogonally diagonalizable.'
          }
        ],
        deepDiveContent: `### System of Linear Equations Ax = b
Let $[A|b]$ be the augmented matrix:
1. **Consistent (Solutions Exist)**: $\\text{Rank}(A) = \\text{Rank}([A|b])$.
   - **Unique Solution**: $\\text{Rank}(A) = \\text{Rank}([A|b]) = n$ (number of variables).
   - **Infinitely Many Solutions**: $\\text{Rank}(A) = \\text{Rank}([A|b]) < n$. Number of free variables = $n - r$.
2. **Inconsistent (No Solution)**: $\\text{Rank}(A) < \\text{Rank}([A|b])$.

### Homogeneous System Ax = 0
- Always consistent (trivial solution $x = 0$ always exists).
- Has non-trivial (infinite) solutions if and only if $\\text{Rank}(A) < n$ (i.e., $\\det(A) = 0$ for square matrices).`,
        examinerTraps: [
          'Confusing row operations with determinant scale: Multiplying a row by k scales det(A) by k. For an n x n matrix, det(k A) = k^n * det(A)!',
          'Assuming geometric multiplicity exceeds algebraic multiplicity: Geometric Multiplicity (dim of eigenspace) <= Algebraic Multiplicity always.'
        ],
        sampleGateProblem: {
          question: 'The eigenvalues of a 3 × 3 matrix A are 1, -2, and 3. What is the determinant of matrix (A^2 - 2A)?',
          type: 'NAT',
          correctAnswer: '-24',
          explanation: 'For each eigenvalue λ of A, eigenvalue of (A^2 - 2A) is μ = λ^2 - 2λ. For λ=1: 1 - 2 = -1. For λ=-2: 4 - (-4) = 8. For λ=3: 9 - 6 = 3. det(A^2 - 2A) = (-1) * 8 * 3 = -24.'
        }
      },
      {
        id: 'la-lu-decomp',
        topicTitle: 'LU Decomposition',
        syllabusRef: 'Section 1: LU decomposition',
        estimatedReadTime: '7 mins',
        summary: 'Decomposing a non-singular square matrix into a unit lower triangular matrix L and an upper triangular matrix U without pivoting.',
        keyFormulasAndTheorems: [
          {
            title: 'LU Factorization',
            formula: 'A = L · U',
            explanation: 'L has 1s on the diagonal (Doolittle method). Solving Ax = b becomes Ly = b (forward substitution) then Ux = y (backward substitution).'
          },
          {
            title: 'Determinant from LU',
            formula: 'det(A) = det(L) · det(U) = 1 · ∏ u_{ii} = ∏ u_{ii}',
            explanation: 'Because det(L) = 1, det(A) is simply the product of the diagonal elements of U.'
          }
        ],
        deepDiveContent: `### Conditions for Existence of LU Decomposition
- Matrix $A$ has an LU decomposition (without row permutations) if and only if **all leading principal submatrices of $A$ have non-zero determinants**.
- Computation cost: Eliminating row entries takes $O(n^3)$ operations once; each subsequent system solution takes only $O(n^2)$ time!`,
        examinerTraps: [
          'Assuming LU always exists without pivoting: If any pivot element becomes zero during Gaussian elimination, pivoting (PA = LU) is mandatory.',
          'Confusing Doolittle (L has unit diagonal) with Crout (U has unit diagonal).'
        ],
        sampleGateProblem: {
          question: 'In the LU decomposition of matrix A = [[2, 4], [3, 8]] using Doolittle method where L = [[1, 0], [l21, 1]] and U = [[u11, u12], [0, u22]], the value of u22 is:',
          type: 'NAT',
          correctAnswer: '2',
          explanation: 'L*U = [[u11, u12], [l21*u11, l21*u12 + u22]]. Equating with A: u11=2, u12=4. l21*u11=3 => l21=1.5. l21*u12 + u22 = 8 => 1.5*4 + u22 = 8 => 6 + u22 = 8 => u22 = 2.'
        }
      }
    ]
  },
  {
    subjectId: 'calculus',
    subjectName: 'Calculus',
    sectionId: 'CS',
    syllabusSection: 'Section 1: Engineering Mathematics',
    weightage: '2–3 Marks',
    description: 'Functions of a single variable, limit, continuity, differentiability, mean value theorems, indeterminate forms, evaluation of definite and improper integrals, maxima and minima.',
    topics: [
      {
        id: 'calc-limits',
        topicTitle: 'Limits, Continuity & Differentiability',
        syllabusRef: 'Section 1: Limit, continuity and differentiability',
        estimatedReadTime: '8 mins',
        summary: 'Limits describe behavior of a function near a point. Continuous functions have no jumps, breaks, or holes. Differentiability requires continuity and equality of left-hand and right-hand derivatives.',
        keyFormulasAndTheorems: [
          {
            title: "L'Hopital's Rule",
            formula: "lim_{x -> a} f(x)/g(x) = lim_{x -> a} f'(x)/g'(x)",
            explanation: 'Applies ONLY when the expression evaluates to indeterminate forms 0/0 or ±∞/±∞.'
          },
          {
            title: 'Standard Exponential Limit',
            formula: 'lim_{x -> 0} (1 + x)^(1/x) = e  and  lim_{x -> ∞} (1 + a/x)^x = e^a',
            explanation: 'Critical for solving 1^∞ indeterminate forms: lim f(x)^g(x) = e^[lim g(x)(f(x) - 1)].'
          },
          {
            title: 'Differentiability Implication',
            formula: 'Differentiable at c => Continuous at c',
            explanation: 'Continuity is a necessary but NOT sufficient condition for differentiability (e.g., f(x) = |x| at x = 0 is continuous but not differentiable).'
          }
        ],
        deepDiveContent: `### Indeterminate Forms & Techniques
1. **0/0 and ∞/∞**: Apply L'Hopital's rule by differentiating numerator and denominator independently.
2. **0 × ∞**: Rewrite as 0 / (1/∞) or ∞ / (1/0) to convert into 0/0 or ∞/∞.
3. **∞ - ∞**: Take common denominator or rationalize.
4. **1^∞, 0^0, ∞^0**: Take natural log: y = f(x)^g(x) => ln y = g(x) ln f(x), find limit of ln y, then compute e^L.

### Continuity Criteria at x = c
A function f(x) is continuous at x = c if and only if:
lim_{x -> c-} f(x) = lim_{x -> c+} f(x) = f(c)`,
        examinerTraps: [
          "Applying L'Hopital's rule when the form is NOT 0/0 or ∞/∞ (leads to completely wrong results).",
          "Assuming differentiability requires higher derivatives: only first derivative continuity matters at the point.",
          "Overlooking absolute values: f(x) = x|x| is differentiable at 0 with f'(0) = 0, whereas f(x) = |x| has sharp corner and is NOT differentiable."
        ],
        sampleGateProblem: {
          question: 'The value of lim_{x -> 0} (x - sin x) / x^3 is:',
          type: 'NAT',
          correctAnswer: '0.166',
          explanation: 'Form is 0/0. Apply L\'Hopital: lim (1 - cos x)/(3x^2) [0/0]. Apply again: lim (sin x)/(6x) = (1/6) * 1 = 1/6 ≈ 0.166 to 0.167.'
        }
      },
      {
        id: 'calc-maxima',
        topicTitle: 'Maxima, Minima & Mean Value Theorems',
        syllabusRef: 'Section 1: Mean value theorems, local maxima and minima',
        estimatedReadTime: '8 mins',
        summary: "Mean value theorems connect the average rate of change with instantaneous derivatives. Maxima and minima are identified via critical points (f'(x) = 0 or undefined) and tested using second derivative tests.",
        keyFormulasAndTheorems: [
          {
            title: "Rolle's Theorem",
            formula: "If f continuous on [a,b], differentiable on (a,b), and f(a) = f(b) => ∃ c ∈ (a,b) such that f'(c) = 0",
            explanation: 'Guarantees at least one horizontal tangent between two points with equal function values.'
          },
          {
            title: "Lagrange's Mean Value Theorem (LMVT)",
            formula: "f'(c) = [f(b) - f(a)] / (b - a) for some c ∈ (a, b)",
            explanation: 'Guarantees a tangent parallel to the secant line connecting endpoints (a, f(a)) and (b, f(b)).'
          },
          {
            title: 'Second Derivative Test',
            formula: "f'(c) = 0: f''(c) < 0 => Local Maxima; f''(c) > 0 => Local Minima; f''(c) = 0 => Inconclusive",
            explanation: 'Negative second derivative denotes concavity downwards (peak); positive denotes concavity upwards (valley).'
          }
        ],
        deepDiveContent: `### Global Extrema on Closed Intervals [a, b]
1. Find all critical points c_i ∈ (a, b) where f'(c_i) = 0 or f'(c_i) does not exist.
2. Evaluate function values at all critical points f(c_i) AND at both boundary endpoints f(a) and f(b).
3. **Absolute Maximum** = max {f(a), f(b), f(c_1), f(c_2), ...}.
4. **Absolute Minimum** = min {f(a), f(b), f(c_1), f(c_2), ...}.`,
        examinerTraps: [
          'Forgetting boundary endpoints [a, b] when evaluating global/absolute maxima or minima.',
          "Assuming f''(c) = 0 always implies an inflection point (counter-example: f(x) = x^4 has a minimum at 0, not an inflection point)."
        ],
        sampleGateProblem: {
          question: 'The minimum value of the function f(x) = x^3 - 3x + 3 in the interval [-2, 2] is:',
          type: 'NAT',
          correctAnswer: '1',
          explanation: 'f\'(x) = 3x^2 - 3 = 0 => x = ±1. Critical points in [-2, 2] are x = 1 and x = -1. Evaluate at endpoints and critical points: f(-2) = -8 + 6 + 3 = 1; f(-1) = -1 + 3 + 3 = 5; f(1) = 1 - 3 + 3 = 1; f(2) = 8 - 6 + 3 = 5. The minimum value is 1.'
        }
      }
    ]
  },
  {
    subjectId: 'probability',
    subjectName: 'Probability and Statistics',
    sectionId: 'CS',
    syllabusSection: 'Section 1: Engineering Mathematics',
    weightage: '3–4 Marks',
    description: 'Random variables, uniform, normal, exponential, Poisson and binomial distributions, mean, median, mode and standard deviation, conditional probability and Bayes theorem.',
    topics: [
      {
        id: 'prob-bayes',
        topicTitle: "Conditional Probability & Bayes' Theorem",
        syllabusRef: 'Section 1: Conditional probability and Bayes theorem',
        estimatedReadTime: '9 mins',
        summary: "Bayes' theorem updates prior beliefs given observed evidence using conditional probabilities and the law of total probability.",
        keyFormulasAndTheorems: [
          {
            title: 'Conditional Probability Definition',
            formula: 'P(A | B) = P(A ∩ B) / P(B),  where P(B) > 0',
            explanation: 'The probability of event A given that event B has occurred.'
          },
          {
            title: "Bayes' Theorem Formula",
            formula: 'P(A_i | B) = [P(B | A_i) * P(A_i)] / [Σ P(B | A_j) * P(A_j)]',
            explanation: 'Calculates posterior probability by combining prior probability with likelihood.'
          },
          {
            title: 'Independence Criterion',
            formula: 'P(A ∩ B) = P(A) * P(B)  <=>  P(A | B) = P(A)',
            explanation: 'Occurrence of B gives zero information regarding occurrence of A.'
          }
        ],
        deepDiveContent: `### Mutually Exclusive vs Independent Events
- **Mutually Exclusive**: A ∩ B = ∅ => P(A ∩ B) = 0. (Cannot happen together).
- **Independent**: P(A ∩ B) = P(A) * P(B).
- **Crucial Rule**: Two events with non-zero probabilities **CANNOT** be both mutually exclusive and independent!

### Law of Total Probability
If A_1, A_2, ..., A_n form a partition of sample space S:
P(B) = Σ P(B | A_i) * P(A_i)`,
        examinerTraps: [
          'Confusing P(A|B) with P(B|A) (Inverse Fallacy).',
          'Assuming mutually exclusive events are independent (if mutually exclusive and P(A)>0, P(B)>0, they are strongly dependent!).',
          'Overlooking the base rate in false-positive diagnostic test questions.'
        ],
        sampleGateProblem: {
          question: 'In a factory, Machine A produces 60% of items (with 2% defective) and Machine B produces 40% (with 4% defective). An item chosen at random is found to be defective. What is the probability (in percentage, rounded to 1 decimal) that it was produced by Machine B?',
          type: 'NAT',
          correctAnswer: '57.1',
          explanation: 'P(A)=0.6, P(B)=0.4. P(D|A)=0.02, P(D|B)=0.04. Total P(D) = 0.6*0.02 + 0.4*0.04 = 0.012 + 0.016 = 0.028. P(B|D) = (0.4 * 0.04) / 0.028 = 0.016 / 0.028 = 16/28 = 4/7 ≈ 0.5714 (57.1%).'
        }
      },
      {
        id: 'prob-distributions',
        topicTitle: 'Distributions: Binomial, Poisson, Exponential & Normal',
        syllabusRef: 'Section 1: Uniform, normal, exponential, Poisson and binomial distributions',
        estimatedReadTime: '9 mins',
        summary: 'Probability mass and density functions governing discrete trials (Binomial, Poisson) and continuous measurements (Uniform, Exponential, Normal).',
        keyFormulasAndTheorems: [
          {
            title: 'Binomial Distribution B(n, p)',
            formula: 'P(X = k) = C(n, k) * p^k * (1 - p)^(n - k),  Mean = n*p,  Var = n*p*(1 - p)',
            explanation: 'Models number of successes in n independent Bernoulli trials with constant probability p.'
          },
          {
            title: 'Poisson Distribution Poisson(λ)',
            formula: 'P(X = k) = (e^(-λ) * λ^k) / k!,  Mean = λ,  Var = λ',
            explanation: 'Models rare events in a continuous interval; mean equals variance!'
          },
          {
            title: 'Exponential Distribution Exp(λ)',
            formula: 'f(x) = λ * e^(-λx) for x ≥ 0,  Mean = 1/λ,  Var = 1/λ^2',
            explanation: 'Only continuous distribution with memoryless property: P(X > s + t | X > s) = P(X > t).'
          },
          {
            title: 'Normal Distribution N(μ, σ²)',
            formula: '68% within μ ± 1σ,  95.4% within μ ± 2σ,  99.7% within μ ± 3σ',
            explanation: 'Symmetric bell curve; Mean = Median = Mode = μ.'
          }
        ],
        deepDiveContent: `### Continuous Uniform Distribution U(a, b)
- PDF: f(x) = 1 / (b - a) for a ≤ x ≤ b.
- Mean: E[X] = (a + b) / 2.
- Variance: Var(X) = (b - a)^2 / 12.

### Poisson Approximation to Binomial
When n -> ∞ and p -> 0 such that λ = np remains constant, B(n, p) ≈ Poisson(λ).`,
        examinerTraps: [
          'Using variance of Exponential as 1/λ instead of 1/λ^2.',
          'Assuming Binomial variance can exceed mean: Var = np(1-p) is ALWAYS strictly less than Mean = np.',
          'For Poisson distribution, forgetting that Mean = Variance = λ.'
        ],
        sampleGateProblem: {
          question: 'If a random variable X follows a Poisson distribution such that P(X = 1) = P(X = 2), what is the mean of the distribution?',
          type: 'NAT',
          correctAnswer: '2',
          explanation: 'P(X = 1) = e^(-λ) * λ^1 / 1! = λ e^(-λ). P(X = 2) = e^(-λ) * λ^2 / 2! = (λ^2 / 2) e^(-λ). Since P(X = 1) = P(X = 2) and λ > 0: λ = λ^2 / 2 => 1 = λ / 2 => λ = 2.'
        }
      }
    ]
  },

  {
    subjectId: 'digital-logic',
    subjectName: 'Digital Logic',
    sectionId: 'CS',
    syllabusSection: 'Section 2: Digital Logic',
    weightage: '4–6 Marks',
    description: 'Boolean algebra, minimization, combinational circuits, sequential circuits, number representations and computer arithmetic.',
    topics: [
      {
        id: 'dl-boolean-kmaps',
        topicTitle: 'Boolean Algebra & K-Map Minimization',
        syllabusRef: 'Section 2: Boolean algebra and minimization – algebraic technique, Karnaugh map, tabular method',
        estimatedReadTime: '8 mins',
        summary: 'Minimizing SOP and POS logic expressions using Boolean axioms, Karnaugh Maps with don’t care conditions, and prime implicant identification.',
        keyFormulasAndTheorems: [
          {
            title: 'De Morgan’s Laws',
            formula: '(A · B)\' = A\' + B\'   and   (A + B)\' = A\' · B\'',
            explanation: 'Complementation converts AND to OR, and OR to AND.'
          },
          {
            title: 'Consensus Theorem',
            formula: 'AB + A\'C + BC = AB + A\'C',
            explanation: 'BC is redundant because if A=1, AB covers it; if A=0, A\'C covers it.'
          },
          {
            title: 'Prime Implicant (PI) & Essential Prime Implicant (EPI)',
            formula: 'EPI: Contains at least one minterm not covered by any other PI',
            explanation: 'All EPIs must be included in every minimal SOP expression.'
          }
        ],
        deepDiveContent: `### K-Map Rules (2, 3, 4 Variables)
- Gray code ordering: 00, 01, 11, 10 (only 1 bit changes between adjacent cells).
- Group sizes must be powers of 2 ($1, 2, 4, 8, 16$).
- Corners wrap around: cell $(0,0)$ is adjacent to $(0,3), (3,0), (3,3)$.
- Don't-cares ($d$ or $X$): Can be treated as 1 if it helps form a larger group, or ignored (treated as 0) otherwise.`,
        examinerTraps: [
          'Selecting redundant prime implicants when all minterms are already covered by Essential Prime Implicants.',
          'Missing diagonal / 4-corner wraps in 4-variable K-maps: minterms (0, 2, 8, 10) form a single group of 4!'
        ],
        sampleGateProblem: {
          question: 'The minimum sum-of-products expression for the Boolean function f(A,B,C) = ∑m(0, 1, 2, 4, 6) is:',
          type: 'MCQ',
          options: [
            '(A) A\'B\' + C\'',
            '(B) A\'C\' + B\'',
            '(C) A\'B\' + B\'C\'',
            '(D) A\' + B\'C\''
          ],
          correctAnswer: 'A',
          explanation: 'Grouping (0,1): A\'B\'. Grouping (0,2,4,6): C\'. The minimal SOP is A\'B\' + C\'.'
        }
      },
      {
        id: 'dl-floating-point',
        topicTitle: 'Number Representation & Floating Point (IEEE 754)',
        syllabusRef: 'Section 2: Number representation and arithmetic (fixed and floating point)',
        estimatedReadTime: '9 mins',
        summary: 'Signed magnitude, 1’s complement, 2’s complement arithmetic, overflow detection, and IEEE 754 single and double precision floating-point standards.',
        keyFormulasAndTheorems: [
          {
            title: '2’s Complement Integer Range (n bits)',
            formula: '[-2^{n-1},  +2^{n-1} - 1]',
            explanation: 'For 8 bits: -128 to +127. Zero has a unique representation (all 0s).'
          },
          {
            title: 'Arithmetic Overflow Condition',
            formula: 'Overflow = C_{in} ⊕ C_{out} on sign bit',
            explanation: 'Occurs only when adding two positive numbers yields negative, or two negative numbers yields positive.'
          },
          {
            title: 'IEEE 754 Single Precision Standard (32-bit)',
            formula: '(-1)^S · (1.M) · 2^{E - 127}',
            explanation: '1 sign bit (S), 8 exponent bits (E with bias 127), 23 mantissa/fraction bits (M with implicit leading 1).'
          }
        ],
        deepDiveContent: `### IEEE 754 Special Values
- **Normalized Numbers**: $1 \\le E \\le 254$. Value $= (-1)^S \\cdot (1.M) \\cdot 2^{E - 127}$.
- **Zero**: $E = 0, M = 0$. Can be $+0$ or $-0$.
- **Denormalized (Subnormal) Numbers**: $E = 0, M \\ne 0$. Value $= (-1)^S \\cdot (0.M) \\cdot 2^{-126}$.
- **Infinity ($\\pm \\infty$)**: $E = 255, M = 0$.
- **Not a Number (NaN)**: $E = 255, M \\ne 0$.`,
        examinerTraps: [
          'Forgetting that denormalized numbers use exponent -126 (NOT -127) and have NO implicit leading 1.',
          'Confusing range of 1’s complement (-(2^{n-1}-1) to +(2^{n-1}-1)) with 2’s complement.'
        ],
        sampleGateProblem: {
          question: 'In IEEE 754 single-precision floating point, what is the decimal equivalent of the hex representation 0x40A00000?',
          type: 'NAT',
          correctAnswer: '5',
          explanation: 'Binary: 0 10000001 01000000000000000000000. Sign = 0 (positive). Exponent = 129 => E - 127 = 2. Mantissa = 1.01 in binary = 1.25 decimal. Value = 1.25 * 2^2 = 5.0.'
        }
      },
      {
        id: 'dl-sequential',
        topicTitle: 'Sequential Circuits: Flip-Flops, Counters & Timing',
        syllabusRef: 'Section 2: Sequential circuits: flip-flops, counters, registers, finite state machines',
        estimatedReadTime: '9 mins',
        summary: 'Synchronous sequential circuits maintain state across clock cycles using flip-flops. Timing analysis guarantees data stability before (setup time) and after (hold time) the active clock edge.',
        keyFormulasAndTheorems: [
          {
            title: 'Characteristic Equations of Flip-Flops',
            formula: "D-FF: Q+ = D | T-FF: Q+ = T ⊕ Q | JK-FF: Q+ = J*Q' + K'*Q",
            explanation: 'Next state equations derived from truth tables; essential for counter design.'
          },
          {
            title: 'Clock Period & Max Frequency Bound',
            formula: 'T_clk ≥ t_cq + t_comb + t_setup  =>  f_max = 1 / T_clk',
            explanation: 'Clock period must exceed sum of clock-to-Q delay, combinational logic delay, and destination setup time.'
          },
          {
            title: 'Hold Time Condition',
            formula: 't_cq + t_comb ≥ t_hold',
            explanation: 'Independent of clock period! Violations cannot be fixed by slowing down the clock; buffer insertion required.'
          }
        ],
        deepDiveContent: `### Flip-Flop Excitation Requirements (Present Q -> Next Q+)
| Q -> Q+ | S R | J K | D | T |
|:---:|:---:|:---:|:---:|:---:|
| 0 -> 0 | 0 X | 0 X | 0 | 0 |
| 0 -> 1 | 1 0 | 1 X | 1 | 1 |
| 1 -> 0 | 0 1 | X 1 | 0 | 1 |
| 1 -> 1 | X 0 | X 0 | 1 | 0 |

### Mod-N Counter Design
- A counter with $k$ flip-flops has $2^k$ possible states.
- To design a Mod-$N$ counter, we need $k = \lceil \log_2 N \rceil$ flip-flops.
- Ring counter with $n$ flip-flops has $n$ states; Johnson (twisted ring) counter with $n$ flip-flops has $2n$ states!`,
        examinerTraps: [
          'Confusing setup time violations (fixable by reducing clock frequency) with hold time violations (unaffected by clock frequency).',
          'Counting states in Johnson counter: n flip-flops yield 2n states, NOT 2^n.',
          'Ignoring propagation delay in ripple counters: total ripple delay = n * t_pd.'
        ],
        sampleGateProblem: {
          question: 'A 4-bit Johnson counter is initialized to all 0s. How many distinct states does it cycle through before returning to 0000?',
          type: 'NAT',
          correctAnswer: '8',
          explanation: 'An n-bit Johnson (twisted ring) counter produces 2*n distinct states. For n = 4, the number of states is 2 * 4 = 8.'
        }
      }
    ]
  },
  {
    subjectId: 'coa',
    subjectName: 'Computer Organization & Architecture',
    sectionId: 'CS',
    syllabusSection: 'Section 3: Computer Organization and Architecture',
    weightage: '8–10 Marks',
    description: 'Instruction sets, addressing modes, ALU, control unit, memory hierarchy, cache mapping, pipelining, and hazards.',
    topics: [
      {
        id: 'coa-cache',
        topicTitle: 'Memory Hierarchy & Cache Memory Mapping',
        syllabusRef: 'Section 3: Memory interfacing and hierarchy: performance, cache memory mapping',
        estimatedReadTime: '11 mins',
        summary: 'Direct-mapped, fully associative, and set-associative cache mappings. Address breakdown (Tag, Index, Offset), cache write policies, and Effective Memory Access Time (EMAT).',
        keyFormulasAndTheorems: [
          {
            title: 'Cache Address Bit Partitioning',
            formula: 'Offset = log₂(Block Size)  |  Index = log₂(Number of Sets)  |  Tag = Total Addr Bits - Index - Offset',
            explanation: 'For direct mapped, Number of Sets = Total Cache Size / Block Size.'
          },
          {
            title: 'Effective Memory Access Time (EMAT)',
            formula: 'EMAT = t_{cache} + (1 - h) · t_{main}  (Simultaneous / Hierarchical variations)',
            explanation: 'If main memory is accessed only on a cache miss: EMAT = h · t_c + (1 - h) · (t_c + t_m).'
          },
          {
            title: 'Multi-Level Cache EMAT',
            formula: 'EMAT = t_{L1} + (1 - h_1) · [t_{L2} + (1 - h_2) · t_{main}]',
            explanation: 'h1 is local hit rate of L1; h2 is local hit rate of L2.'
          }
        ],
        deepDiveContent: `### Cache Write Policies
1. **Write-Through**: Every write is written simultaneously to cache and main memory.
   - Requires a **Write Buffer** to avoid CPU stalls.
2. **Write-Back (Copy-Back)**: Writes update only the cache block. Main memory is updated only when the block is evicted.
   - Requires a **Dirty Bit** per cache block.

### Write Miss Policies
- **Write-Allocate (Fetch on Write)**: Fetch block into cache, then write. Typically paired with Write-Back.
- **No-Write-Allocate**: Write directly to main memory without loading into cache. Typically paired with Write-Through.`,
        examinerTraps: [
          'Confusing local hit rate with global hit rate in multi-level caches.',
          'Tag directory overhead calculation: Tag directory size = Number of lines * (Tag bits + Valid bit + Dirty bit + LRU bits).'
        ],
        sampleGateProblem: {
          question: 'A 4-way set-associative cache has a total size of 64 KB with 32-byte block size. For a 32-bit physical address, the number of tag bits is:',
          type: 'NAT',
          correctAnswer: '18',
          explanation: 'Block size = 32 B => Offset = log2(32) = 5 bits. Number of cache lines = 64 KB / 32 B = 2048 lines. Since 4-way associative, Number of Sets = 2048 / 4 = 512 sets => Index = log2(512) = 9 bits. Tag bits = 32 - 9 - 5 = 18 bits.'
        }
      },
      {
        id: 'coa-pipeline',
        topicTitle: 'Instruction Pipelining & Hazard Resolution',
        syllabusRef: 'Section 3: Instruction pipelining, pipeline hazards',
        estimatedReadTime: '10 mins',
        summary: 'Pipelining execution models, speedup, structural/data/control hazards, operand forwarding, branch penalties, and delayed branching.',
        keyFormulasAndTheorems: [
          {
            title: 'Ideal Pipeline Speedup',
            formula: 'Speedup = (k · n) / (k + n - 1) ≈ k  (for large n)',
            explanation: 'k is pipeline stages, n is number of instructions. Cycle time equals the delay of the slowest stage plus register overhead.'
          },
          {
            title: 'Actual CPI with Stalls',
            formula: 'CPI_{actual} = CPI_{ideal} + Stalls_{per instruction} = 1 + Stalls',
            explanation: 'Speedup = (k / CPI_{actual}) * (t_{non-pipe} / t_{pipe}).'
          },
          {
            title: 'Data Hazards: RAW, WAR, WAW',
            formula: 'RAW (True dependency) causes pipeline stalls unless resolved by Operand Forwarding',
            explanation: 'WAR and WAW occur only in out-of-order execution pipelines.'
          }
        ],
        deepDiveContent: `### Pipeline Hazard Categories
1. **Structural Hazard**: Hardware resource conflict (e.g., single memory port for both instruction fetch and data read/write). Resolved by separate instruction and data caches (Harvard Architecture).
2. **Data Hazard (RAW)**: An instruction requires the result of a prior instruction that has not yet completed write-back.
   - Solution: **Operand Forwarding** (bypassing ALU output directly to next ALU input stage) or software bubble insertion.
3. **Control Hazard (Branch Penalty)**: Target instruction address is unknown until branch condition is evaluated in Decode/Execute stage.
   - Solution: Branch prediction (static/dynamic), delayed branching.`,
        examinerTraps: [
          'Assuming operand forwarding eliminates ALL stalls: A Load-Use hazard (Load followed immediately by an ALU op that uses that loaded value) STILL requires 1 stall cycle even with forwarding!',
          'Forgetting register delay when calculating pipeline clock cycle time: Clock period = max(stage delays) + register delay.'
        ],
        sampleGateProblem: {
          question: 'A 5-stage pipeline has stage delays 150 ps, 120 ps, 160 ps, 140 ps, and 110 ps with register delay 10 ps. What is the clock cycle time in ps?',
          type: 'NAT',
          correctAnswer: '170',
          explanation: 'Clock cycle time = max(stage delays) + register delay = max(150, 120, 160, 140, 110) + 10 = 160 + 10 = 170 ps.'
        }
      },
      {
        id: 'coa-control-io-dma',
        topicTitle: 'Addressing Modes, Control Unit & I/O DMA',
        syllabusRef: 'Section 3: Instruction set and addressing modes. Design of control unit – hardwired and microprogrammed. I/O interface (interrupt and DMA)',
        estimatedReadTime: '9 mins',
        summary: 'Control units sequence hardware operations using hardwired state machines or microprogrammed control memories. Direct Memory Access (DMA) offloads high-speed block data transfers from the CPU.',
        keyFormulasAndTheorems: [
          {
            title: 'PC-Relative Addressing Formula',
            formula: 'Effective Address (EA) = (PC + 1 or PC + 2) + Offset (Displacement)',
            explanation: 'Displacement is added to the updated PC pointing to the NEXT sequential instruction, NOT the current instruction!'
          },
          {
            title: 'DMA Cycle Stealing Overhead',
            formula: 'CPU Bus Time Lost = (Device Transfer Rate / Memory Bus Bandwidth) * 100%',
            explanation: 'In cycle stealing mode, the DMA controller takes control of the memory bus for 1 memory cycle per word transferred.'
          },
          {
            title: 'Microprogrammed Control Word Size',
            formula: 'Control Word Bits = Unencoded Signals + ⌈log2(Mux Inputs)⌉ + ⌈log2(Control Memory Words)⌉',
            explanation: 'Horizontal microprogramming uses unencoded wide words; vertical microprogramming encodes mutually exclusive signals with decoders.'
          }
        ],
        deepDiveContent: `### Hardwired vs Microprogrammed Control Unit
- **Hardwired**: Fast, fixed combinational logic (FSMs, decoders), difficult to modify, RISC architectures.
- **Microprogrammed**: Flexible, slower, micro-instructions stored in Control Store (ROM), CISC architectures.

### I/O Data Transfer Modes
1. **Programmed I/O**: CPU polls device status in busy-wait loop; highest CPU overhead.
2. **Interrupt-Driven I/O**: Device triggers interrupt pin when ready; context-switch overhead per byte/word.
3. **DMA (Direct Memory Access)**: Dedicated controller transfers entire blocks directly to/from RAM; CPU only interrupted on block completion.`,
        examinerTraps: [
          'Calculating PC-relative branch target from the current instruction address instead of the updated PC (pointing to the next instruction).',
          'In DMA cycle stealing questions, forgetting that the device speed determines how frequently bus cycles are stolen.'
        ],
        sampleGateProblem: {
          question: 'A hard disk transfers data at 8 MB/s. The system bus has a transfer rate of 40 MB/s. If DMA cycle-stealing mode is used, what percentage of bus time is consumed by the DMA transfer?',
          type: 'NAT',
          correctAnswer: '20',
          explanation: 'Percentage of bus time consumed = (Device Rate / Bus Rate) * 100% = (8 MB/s / 40 MB/s) * 100% = 0.20 * 100% = 20%.'
        }
      }
    ]
  },
  {
    subjectId: 'algorithms',
    subjectName: 'Algorithms',
    sectionId: 'CS',
    syllabusSection: 'Section 5: Algorithms',
    weightage: '10–12 Marks',
    description: 'Asymptotic complexity, sorting, searching, hashing, greedy, dynamic programming, divide-and-conquer, graph traversals, and shortest paths.',
    topics: [
      {
        id: 'algo-asymptotic-master',
        topicTitle: 'Asymptotic Analysis & Master Theorem',
        syllabusRef: 'Section 5: Asymptotic worst case time and space complexity',
        estimatedReadTime: '9 mins',
        summary: 'Big-O, Omega, Theta, Little-o, Little-omega notations, recurrence relations, Master Theorem and its extended cases, and substitution method.',
        keyFormulasAndTheorems: [
          {
            title: 'Standard Master Theorem',
            formula: 'T(n) = a T(n/b) + Θ(n^k · log^p n)',
            explanation: 'Compare log_b(a) with k:\n• If log_b(a) > k: T(n) = Θ(n^{log_b a})\n• If log_b(a) == k and p > -1: T(n) = Θ(n^k · log^{p+1} n)\n• If log_b(a) == k and p == -1: T(n) = Θ(n^k · log log n)\n• If log_b(a) < k: T(n) = Θ(n^k · log^p n)'
          },
          {
            title: 'Master Theorem Failure Cases',
            formula: 'T(n) = 2 T(n/2) + n / log n  cannot be solved by Master Theorem!',
            explanation: 'The difference between n^{log_b a} and f(n) is not polynomial (logarithmic gap). Requires substitution or recursion tree.'
          }
        ],
        deepDiveContent: `### Asymptotic Hierarchy (Fastest to Slowest)
$$O(1) < O(\\log \\log n) < O(\\log n) < O(\\sqrt{n}) < O(n) < O(n \\log n) < O(n^2) < O(n^3) < O(2^n) < O(n!) < O(n^n)$$

### Master Theorem Applications
- Binary Search: $T(n) = T(n/2) + O(1) \\implies \\Theta(\\log n)$
- MergeSort: $T(n) = 2T(n/2) + O(n) \\implies \\Theta(n \\log n)$
- Karatsuba Multiplication: $T(n) = 3T(n/2) + O(n) \\implies \\Theta(n^{\\log_2 3}) \\approx \\Theta(n^{1.585})$
- Strassen's Matrix Multiplication: $T(n) = 7T(n/2) + O(n^2) \\implies \\Theta(n^{\\log_2 7}) \\approx \\Theta(n^{2.807})$`,
        examinerTraps: [
          'Applying Master Theorem when a is not constant or b <= 1 (e.g. T(n) = 2^n T(n/2)).',
          'Confusing worst-case time complexity of QuickSort (O(n^2)) with its average-case (O(n log n)).'
        ],
        sampleGateProblem: {
          question: 'The recurrence relation T(n) = 2T(n/2) + n log n has asymptotic solution:',
          type: 'MCQ',
          options: [
            '(A) Θ(n log n)',
            '(B) Θ(n log² n)',
            '(C) Θ(n²)',
            '(D) Θ(n)'
          ],
          correctAnswer: 'B',
          explanation: 'Here a=2, b=2, k=1, p=1. log_b(a) = log2(2) = 1 = k. Since log_b(a) == k and p = 1 > -1, by Case 2 extension: T(n) = Θ(n^k log^{p+1} n) = Θ(n log² n).'
        }
      },
      {
        id: 'algo-graph-shortest',
        topicTitle: 'Graph Algorithms: MST & Shortest Paths',
        syllabusRef: 'Section 5: Graph traversals, minimum spanning trees, shortest paths',
        estimatedReadTime: '11 mins',
        summary: 'Kruskal and Prim algorithms for MST, Dijkstra for single-source shortest path, Bellman-Ford for negative edge weights, and Floyd-Warshall for all-pairs.',
        keyFormulasAndTheorems: [
          {
            title: 'Dijkstra’s Algorithm Complexity',
            formula: 'With Min-Heap: O((V + E) log V)   |   With Fibonacci Heap: O(E + V log V)',
            explanation: 'Greedy approach. FAILS if graph contains any negative weight edge.'
          },
          {
            title: 'Bellman-Ford Algorithm Complexity',
            formula: 'Time: O(V · E)   |   Space: O(V)',
            explanation: 'Dynamic programming. Relaxes all edges V-1 times. Detects negative-weight cycles if any distance decreases in the V-th iteration.'
          },
          {
            title: 'Kruskal vs Prim for MST',
            formula: 'Kruskal: O(E log E) using Disjoint Set Union (DSU)   |   Prim: O(E log V) using Min-Heap',
            explanation: 'Kruskal is preferred for sparse graphs (E ≈ V); Prim is preferred for dense graphs (E ≈ V²).'
          }
        ],
        deepDiveContent: `### Cut and Cycle Properties of MST
1. **Cut Property**: For any cut of the graph, the minimum weight edge crossing the cut must be in every MST (assuming distinct edge weights).
2. **Cycle Property**: For any simple cycle in the graph, the maximum weight edge in the cycle CANNOT be in any MST (assuming distinct edge weights).

### All-Pairs Shortest Path (Floyd-Warshall)
- Recurrence: $D^{(k)}[i][j] = \\min(D^{(k-1)}[i][j], D^{(k-1)}[i][k] + D^{(k-1)}[k][j])$.
- Time Complexity: $O(V^3)$, Space Complexity: $O(V^2)$. Can detect negative cycles on diagonal entries ($D[i][i] < 0$).`,
        examinerTraps: [
          'Running Dijkstra on a graph with negative edges: Even if there are no negative cycles, Dijkstra can output wrong answers because visited vertices are never re-evaluated!',
          'Assuming adding a constant c to all edge weights preserves the shortest path: It preserves MST, but NOT shortest paths because paths with more edges are penalized more!'
        ],
        sampleGateProblem: {
          question: 'If all edge weights in a connected undirected graph are increased by a positive constant c > 0, which of the following is guaranteed to remain unchanged?',
          type: 'MCQ',
          options: [
            '(A) Shortest path between any pair of vertices',
            '(B) The Minimum Spanning Tree of the graph',
            '(C) The total weight of the Minimum Spanning Tree',
            '(D) The longest path in the graph'
          ],
          correctAnswer: 'B',
          explanation: 'Every spanning tree has exactly V - 1 edges. Adding c to each edge increases the total weight of EVERY spanning tree by exactly (V - 1) * c. Thus, the relative ordering of tree weights is preserved and the MST remains identical.'
        }
      },
      {
        id: 'algo-dp-greedy',
        topicTitle: 'Dynamic Programming & Greedy Strategies',
        syllabusRef: 'Section 5: Dynamic programming, greedy algorithms',
        estimatedReadTime: '9 mins',
        summary: 'Dynamic programming solves problems with overlapping subproblems and optimal substructure via memoization or tabulation. Greedy algorithms make locally optimal choices at each stage.',
        keyFormulasAndTheorems: [
          {
            title: '0/1 Knapsack Recurrence',
            formula: 'DP[i, w] = max(DP[i-1, w], DP[i-1, w - wt[i]] + val[i])',
            explanation: 'Time complexity is O(n*W), which is pseudo-polynomial (exponential in input bits).'
          },
          {
            title: 'Matrix Chain Multiplication',
            formula: 'm[i, j] = min_{i ≤ k < j} { m[i, k] + m[k+1, j] + p_{i-1}*p_k*p_j }',
            explanation: 'Determines optimal parenthesization of n matrices in O(n^3) time.'
          },
          {
            title: 'Longest Common Subsequence (LCS)',
            formula: 'LCS[i, j] = 1 + LCS[i-1, j-1] if X[i]==Y[j] else max(LCS[i-1, j], LCS[i, j-1])',
            explanation: 'Computes longest shared sequence in O(m*n) time and O(min(m, n)) space.'
          }
        ],
        deepDiveContent: `### Greedy vs Dynamic Programming
- **0/1 Knapsack**: Cannot be solved greedily because items cannot be broken into fractions; must use DP.
- **Fractional Knapsack**: Solved greedily by sorting items by density $\frac{val}{wt}$ in $O(n \log n)$ time.
- **Huffman Coding**: Uses greedy min-heap to construct prefix codes; optimal tree has total bits $\sum f_i \cdot d_i$.
- **Activity Selection**: Always select the compatible activity with the earliest finishing time ($f_i$).`,
        examinerTraps: [
          'Thinking 0/1 Knapsack is polynomial time: O(n*W) is pseudo-polynomial because W is represented in log2(W) bits.',
          'Assuming greedy choice always works for coin change: For canonical coin systems (1, 2, 5, 10) greedy works, but for arbitrary coins (e.g., 1, 3, 4 with target 6), greedy gives 4+1+1 (3 coins) while optimal DP is 3+3 (2 coins).'
        ],
        sampleGateProblem: {
          question: 'What is the length of the Longest Common Subsequence between the strings "AGGTAB" and "GXTXAYB"?',
          type: 'NAT',
          correctAnswer: '4',
          explanation: 'The common subsequence of maximum length is "GTAB", which has length 4.'
        }
      }
    ]
  },
  {
    subjectId: 'toc',
    subjectName: 'Theory of Computation',
    sectionId: 'CS',
    syllabusSection: 'Section 6: Theory of Computation',
    weightage: '8–10 Marks',
    description: 'Regular expressions, finite automata, context-free grammars, push-down automata, pumping lemma, Turing machines, and undecidability.',
    topics: [
      {
        id: 'toc-regular-dfa',
        topicTitle: 'Finite Automata & Regular Languages',
        syllabusRef: 'Section 6: Regular expressions and finite automata. Regular and context-free languages, pumping lemma',
        estimatedReadTime: '10 mins',
        summary: 'DFA, NFA, ε-NFA equivalence, state minimization via Myhill-Nerode, Arden’s Theorem, Pumping Lemma for regular languages, and closure properties.',
        keyFormulasAndTheorems: [
          {
            title: 'Equivalence of Automata',
            formula: 'DFA ≡ NFA ≡ ε-NFA ≡ Regular Expression',
            explanation: 'Every NFA with n states can be converted to an equivalent DFA with at most 2^n states (subset construction).'
          },
          {
            title: 'Regular Language Closure Properties',
            formula: 'Closed under: Union, Intersection, Complement, Concatenation, Kleene Star, Reversal, Homomorphism',
            explanation: 'Regular languages are closed under virtually all standard operations.'
          },
          {
            title: 'Pumping Lemma for Regular Languages',
            formula: '∀w ∈ L (|w| ≥ p) ⇒ w = xyz s.t. |xy| ≤ p, |y| ≥ 1, ∀i ≥ 0: xyⁱz ∈ L',
            explanation: 'Used strictly to PROVE that a language is NOT regular by finding a contradictory i.'
          }
        ],
        deepDiveContent: `### Decidability for Regular Languages
All standard decision questions for Regular languages are **DECIDABLE**:
1. **Emptiness**: Is $L = \\emptyset$? (Check reachability of final states from start state via BFS/DFS).
2. **Finiteness**: Is $L$ finite? (Check if any cycle exists on a path to a final state).
3. **Membership**: Is string $w \\in L$? (Simulate DFA on $w$ in $O(|w|)$ time).
4. **Equivalence**: Is $L_1 = L_2$? (Check if $(L_1 \\cap \\overline{L_2}) \\cup (\\overline{L_1} \\cap L_2) = \\emptyset$).`,
        examinerTraps: [
          'Using Pumping Lemma to prove a language IS regular: Pumping lemma is a necessary condition, NOT a sufficient condition.',
          'Assuming infinite languages cannot be regular: a* is infinite and regular! Regular languages cannot count unboundedly, but can model finite states and modulo arithmetic.'
        ],
        sampleGateProblem: {
          question: 'Consider the language L = {a^n b^m | n, m ≥ 0 and n ≠ m}. Is L regular, context-free, or context-sensitive?',
          type: 'MCQ',
          options: [
            '(A) Regular',
            '(B) Context-Free but not regular',
            '(C) Context-Sensitive but not context-free',
            '(D) Not context-sensitive'
          ],
          correctAnswer: 'B',
          explanation: 'L requires comparing the count of a\'s and b\'s to ensure they are unequal, which requires a stack (Pushdown Automaton). Hence L is Context-Free but not regular.'
        }
      },
      {
        id: 'toc-decidability-turing',
        topicTitle: 'Turing Machines & Undecidability',
        syllabusRef: 'Section 6: Turing machines and undecidability',
        estimatedReadTime: '10 mins',
        summary: 'Chomsky hierarchy, recursive vs recursively enumerable (RE) languages, Halting Problem, reduction techniques, and Rice’s Theorem.',
        keyFormulasAndTheorems: [
          {
            title: 'Chomsky Hierarchy Inclusions',
            formula: 'Regular ⊂ Context-Free (CFL) ⊂ Context-Sensitive (CSL) ⊂ Recursive (Decidable) ⊂ Recursively Enumerable (RE)',
            explanation: 'All inclusions are strict.'
          },
          {
            title: 'Complement of RE Languages',
            formula: 'If L is RE and ¬L is RE ⇒ L is Recursive (Decidable)',
            explanation: 'If L is RE and undecidable, then its complement ¬L CANNOT be RE!'
          },
          {
            title: 'Rice’s Theorem',
            formula: 'Any non-trivial semantic property of the language of a Turing Machine is UNDECIDABLE',
            explanation: 'Properties like "Does TM accept empty language?", "Does TM accept regular language?" are undecidable.'
          }
        ],
        deepDiveContent: `### Decidability Summary Matrix

| Problem | Regular | DCFL | CFL | CSL | Recursive | RE |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| **Membership ($w \\in L$)** | D | D | D | D | D | U |
| **Emptiness ($L = \\emptyset$)** | D | D | D | U | U | U |
| **Finiteness ($|L| < \\infty$)** | D | D | D | U | U | U |
| **Equivalence ($L_1 = L_2$)** | D | D | U | U | U | U |
| **Ambiguity of Grammar** | — | — | U | — | — | — |
*(D = Decidable, U = Undecidable)*`,
        examinerTraps: [
          'Applying Rice\'s theorem to syntactic properties: "Does TM have 5 states?" is a syntactic property and is trivial/decidable, NOT semantic!',
          'Confusing CFL with DCFL: DCFLs are closed under complement, whereas general CFLs are NOT closed under complement!'
        ],
        sampleGateProblem: {
          question: 'Which of the following problems is DECIDABLE?',
          type: 'MCQ',
          options: [
            '(A) Emptiness of a Context-Free Language',
            '(B) Equivalence of two Context-Free Languages',
            '(C) Halting problem of a Turing Machine',
            '(D) Universality (L = Σ*) of a Context-Free Language'
          ],
          correctAnswer: 'A',
          explanation: 'Emptiness and Finiteness are decidable for Context-Free Languages (by checking if the start symbol can derive any terminal string). Equivalence and Universality are undecidable for CFLs.'
        }
      },
      {
        id: 'toc-cfg-pda',
        topicTitle: 'Context-Free Grammars & Pushdown Automata',
        syllabusRef: 'Section 6: Context-free grammars and push-down automata',
        estimatedReadTime: '9 mins',
        summary: 'Context-Free Grammars (Type 2 in Chomsky hierarchy) generate Context-Free Languages recognized by Pushdown Automata with a single LIFO stack.',
        keyFormulasAndTheorems: [
          {
            title: 'Chomsky Normal Form (CNF)',
            formula: 'A -> BC  or  A -> a  (where A, B, C ∈ V and a ∈ Σ)',
            explanation: 'Every derivation of a string of length n in CNF takes exactly 2n - 1 production steps.'
          },
          {
            title: 'Deterministic vs Non-Deterministic PDA',
            formula: 'DCFL ⊂ CFL (Strict Subset!)',
            explanation: 'NPDA is strictly more powerful than DPDA (e.g., L = {w w^R} is CFL but NOT DCFL).'
          },
          {
            title: 'Closure Properties of CFL & DCFL',
            formula: 'CFL: Closed under Union, Concatenation, Kleene Star; NOT closed under Intersection, Complement',
            explanation: 'DCFL is closed under Complement, but NOT Union or Intersection!'
          }
        ],
        deepDiveContent: `### Decidability Table for CFLs
- **Membership ($w \in L$)**: Decidable (via CYK algorithm in $O(n^3)$).
- **Emptiness ($L = \emptyset$)**: Decidable.
- **Finiteness ($|L| < \infty$)**: Decidable.
- **Equivalence ($L_1 = L_2$)**: **Undecidable!**
- **Ambiguity of CFG**: **Undecidable!**
- **Universality ($L = \Sigma^*$)**: **Undecidable!**`,
        examinerTraps: [
          'Assuming CFLs are closed under intersection or complementation (they are NOT!).',
          'Assuming DPDA and NPDA have equivalent language power (NPDA can recognize non-deterministic palindromes w w^R, which DPDA cannot).'
        ],
        sampleGateProblem: {
          question: 'Consider the languages L1 = {a^n b^n c^m | n, m ≥ 0} and L2 = {a^n b^m c^m | n, m ≥ 0}. The language L1 ∩ L2 is:',
          type: 'MCQ',
          options: [
            '(A) Context-Free but not regular',
            '(B) Context-Sensitive but not Context-Free',
            '(C) Regular',
            '(D) Undecidable'
          ],
          correctAnswer: 'B',
          explanation: 'L1 and L2 are both CFLs. Their intersection is L1 ∩ L2 = {a^n b^n c^n | n ≥ 0}, which requires comparing counts across two pairs simultaneously. A single stack cannot hold both counts, so it is Context-Sensitive (CSL), NOT Context-Free.'
        }
      }
    ]
  },
  {
    subjectId: 'os',
    subjectName: 'Operating System',
    sectionId: 'CS',
    syllabusSection: 'Section 8: Operating System',
    weightage: '8–10 Marks',
    description: 'Processes, threads, synchronization, deadlocks, CPU scheduling, virtual memory, paging, and file systems.',
    topics: [
      {
        id: 'os-concurrency-deadlocks',
        topicTitle: 'Concurrency, Synchronization & Deadlocks',
        syllabusRef: 'Section 8: Concurrency and synchronization. Deadlock',
        estimatedReadTime: '11 mins',
        summary: 'Critical section problem, Peterson’s algorithm, Semaphores (Counting and Binary), Mutexes, Classical synchronization problems (Dining Philosophers, Producer-Consumer), Banker’s algorithm, and Resource Allocation Graphs.',
        keyFormulasAndTheorems: [
          {
            title: 'Critical Section Requirements',
            formula: '1. Mutual Exclusion  2. Progress  3. Bounded Waiting',
            explanation: 'Mutual Exclusion and Progress are mandatory. Bounded Waiting prevents starvation.'
          },
          {
            title: 'Four Coffman Conditions for Deadlock',
            formula: 'Mutual Exclusion + Hold & Wait + No Preemption + Circular Wait',
            explanation: 'Deadlock can occur if and only if all four conditions hold simultaneously.'
          },
          {
            title: 'Banker’s Safety Condition',
            formula: 'Need[i] = Max[i] - Allocation[i] ≤ Available',
            explanation: 'If a process can be allocated its maximum need, it completes and returns its allocated resources to Available.'
          }
        ],
        deepDiveContent: `### Counting Semaphore Operations
- \\textbf{wait(S) (or P)}: Decrements semaphore value. If $S < 0$, process is blocked and placed in waiting queue.
- \\textbf{signal(S) (or V)}: Increments semaphore value. If $S \\le 0$, unblocks a waiting process.
- **Initial value $S = k$**: Allows at most $k$ concurrent processes inside the resource.

### Deadlock Handling Strategies
1. **Deadlock Prevention**: Invalidate at least one Coffman condition (e.g. impose total ordering on resources to eliminate Circular Wait).
2. **Deadlock Avoidance**: Banker's algorithm dynamically tracks safe states.
3. **Deadlock Detection & Recovery**: Periodically run cycle detection on Resource Allocation Graph; abort processes or preempt resources.`,
        examinerTraps: [
          'Confusing Deadlock Prevention with Deadlock Avoidance: Prevention restricts resource requests statically; Avoidance checks safety dynamically with prior maximum knowledge.',
          'Assuming a cycle in a Resource Allocation Graph always means deadlock: If multiple instances exist per resource type, a cycle is a necessary but NOT sufficient condition!'
        ],
        sampleGateProblem: {
          question: 'A system has 3 processes and 4 instances of a single resource type. Each process requires at most 2 instances of the resource. Can a deadlock occur?',
          type: 'MCQ',
          options: [
            '(A) Yes, always',
            '(B) Yes, under specific scheduling',
            '(C) No, deadlock is impossible',
            '(D) Insufficient data'
          ],
          correctAnswer: 'C',
          explanation: 'Condition for deadlock freedom with n processes each needing max m instances: Total Resources >= n*(m - 1) + 1. Here: 3*(2 - 1) + 1 = 3*1 + 1 = 4. Since the system has 4 resources, deadlock is strictly impossible.'
        }
      },
      {
        id: 'os-virtual-memory',
        topicTitle: 'Virtual Memory, Paging & Page Replacement',
        syllabusRef: 'Section 8: Memory management and virtual memory',
        estimatedReadTime: '12 mins',
        summary: 'Paging hardware, Translation Lookaside Buffer (TLB), multi-level paging, page faults, Belady’s anomaly, and page replacement algorithms (FIFO, LRU, Optimal).',
        keyFormulasAndTheorems: [
          {
            title: 'Page Table Size Formula',
            formula: 'Page Table Size = Number of Pages · Page Table Entry (PTE) Size',
            explanation: 'Number of Pages = Virtual Address Space / Page Size.'
          },
          {
            title: 'Effective Memory Access Time with TLB',
            formula: 'EMAT = h · (t_{tlb} + t_m) + (1 - h) · (t_{tlb} + (k + 1) · t_m)',
            explanation: 'h is TLB hit ratio, k is number of paging levels (k=1 for single level, k=2 for two-level).'
          },
          {
            title: 'Belady’s Anomaly',
            formula: 'FIFO can cause MORE page faults when allocated MORE page frames',
            explanation: 'Stack-based algorithms (LRU, Optimal) never suffer from Belady\'s Anomaly.'
          }
        ],
        deepDiveContent: `### Inverted Page Table vs Hierarchical Page Table
- **Hierarchical (Multi-level) Page Table**: Indexed by virtual page number. Total size scales with Virtual Address Space.
- **Inverted Page Table**: Has exactly one entry per physical frame in RAM. Indexed by frame number; stores $(PID, PageNumber)$. Eliminates huge table overhead, but requires hashing or associative search.`,
        examinerTraps: [
          'Forgetting that memory is accessed on a TLB miss: With single-level paging, a TLB hit takes 1 memory access, but a TLB miss takes 2 memory accesses (1 for page table, 1 for data)!',
          'Belady\'s anomaly occurs only in FIFO, never in LRU or Optimal.'
        ],
        sampleGateProblem: {
          question: 'In a 32-bit virtual memory system with 4 KB page size, if each Page Table Entry takes 4 bytes, what is the size of the single-level page table in MB?',
          type: 'NAT',
          correctAnswer: '4',
          explanation: 'Virtual address = 32 bits => VAS = 2^32 bytes. Page size = 4 KB = 2^12 bytes. Number of pages = 2^32 / 2^12 = 2^20 pages. Size of page table = 2^20 * 4 bytes = 4 MB.'
        }
      }
    ]
  },
  {
    subjectId: 'dbms',
    subjectName: 'Databases (DBMS)',
    sectionId: 'CS',
    syllabusSection: 'Section 9: Databases',
    weightage: '7–9 Marks',
    description: 'ER model, relational algebra, tuple calculus, SQL, integrity constraints, normal forms, indexing (B/B+ trees), transactions, and concurrency control.',
    topics: [
      {
        id: 'dbms-normalization',
        topicTitle: 'Relational Normal Forms & Functional Dependencies',
        syllabusRef: 'Section 9: Integrity constraints, normal forms',
        estimatedReadTime: '10 mins',
        summary: 'Attribute closures, candidate keys, 1NF, 2NF, 3NF, BCNF, lossless join decomposition, and dependency preservation testing.',
        keyFormulasAndTheorems: [
          {
            title: 'Candidate Key Definition',
            formula: 'K is a Superkey and NO proper subset of K is a Superkey',
            explanation: 'An attribute that is part of ANY candidate key is called a Prime Attribute.'
          },
          {
            title: 'Normal Form Rules Summary',
            formula: '• 2NF: No partial dependency (Prime → Non-prime)\n• 3NF: For X → Y, X is Superkey OR Y is Prime\n• BCNF: For X → Y, X must be a Superkey',
            explanation: 'BCNF is strictly stronger than 3NF. Every BCNF schema is in 3NF, but not vice-versa.'
          },
          {
            title: 'Lossless Decomposition Test',
            formula: '(R₁ ∩ R₂) → R₁   or   (R₁ ∩ R₂) → R₂',
            explanation: 'The common attributes must form a superkey of at least one relation.'
          }
        ],
        deepDiveContent: `### Normalization Trade-Offs
- **3NF**: Always guarantees **Lossless Join** AND **Dependency Preservation**.
- **BCNF**: Always guarantees **Lossless Join**, but **MAY NOT preserve all functional dependencies**!

### Testing Dependency Preservation
A decomposition of $R$ into $R_1, R_2$ preserves $F$ if $(F_1 \\cup F_2)^+ = F^+$. If any dependency cannot be verified within a single decomposed table, a costly join is required.`,
        examinerTraps: [
          'Claiming that BCNF always preserves functional dependencies: It does not! R(A,B,C) with AB->C, C->B decomposed into (A,C) and (B,C) loses AB->C.',
          'Partial dependency only applies when the LHS is a PROPER subset of a candidate key and RHS is a non-prime attribute.'
        ],
        sampleGateProblem: {
          question: 'Given relation R(A, B, C, D) with FDs: {A → B, B → C, C → D, D → A}. The highest normal form of R is:',
          type: 'MCQ',
          options: [
            '(A) 1NF',
            '(B) 2NF',
            '(C) 3NF',
            '(D) BCNF'
          ],
          correctAnswer: 'D',
          explanation: 'Candidate keys are A, B, C, and D (each determines all other attributes). Every attribute is prime, and for every FD, the LHS is a superkey. Therefore, the relation is in BCNF.'
        }
      },
      {
        id: 'dbms-transactions-bplus',
        topicTitle: 'Transactions, Serializability & B+ Trees',
        syllabusRef: 'Section 9: File organization, indexing (e.g., B and B+ trees). Transactions and concurrency control',
        estimatedReadTime: '11 mins',
        summary: 'ACID properties, conflict vs view serializability, Two-Phase Locking (2PL), recoverability, cascade-less schedules, and B+ tree node structures.',
        keyFormulasAndTheorems: [
          {
            title: 'Conflict Serializability Rule',
            formula: 'Precedence (Serialization) Graph contains NO directed cycle',
            explanation: 'Nodes are transactions; edges Ti -> Tj exist if Ti executes an operation that conflicts with a subsequent operation in Tj.'
          },
          {
            title: 'Two-Phase Locking (2PL)',
            formula: 'Growing Phase (acquire locks) ⇒ Shrinking Phase (release locks)',
            explanation: 'Guarantees Conflict Serializability. Strict 2PL holds exclusive locks until commit/abort to eliminate Cascading Aborts.'
          },
          {
            title: 'B+ Tree Order p Node Constraints',
            formula: 'Max keys: p - 1  |  Min keys (non-root): ⌈p / 2⌉ - 1  |  Min pointers (non-root): ⌈p / 2⌉',
            explanation: 'All data records reside in leaf nodes; leaves are linked via a doubly-linked list for fast range queries.'
          }
        ],
        deepDiveContent: `### Schedule Hierarchies
$$\\text{Serial} \\subset \\text{Conflict Serializable} \\subset \\text{View Serializable}$$
$$\\text{Strict} \\subset \\text{Cascadeless} \\subset \\text{Recoverable}$$
- **Recoverable**: If $T_j$ reads data written by $T_i$, then $T_i$ must commit **before** $T_j$ commits.
- **Cascadeless (Avoids Cascading Aborts)**: If $T_j$ reads data written by $T_i$, then $T_i$ must commit **before** $T_j$ reads the data.`,
        examinerTraps: [
          'Thinking 2PL prevents deadlocks: 2PL guarantees serializability, but CAN cause deadlocks (e.g. mutual hold and wait).',
          'Blind writes (write without preceding read): View serializable schedules with blind writes might not be conflict serializable!'
        ],
        sampleGateProblem: {
          question: 'Which of the following concurrency control protocols guarantees conflict serializability and deadlock freedom simultaneously?',
          type: 'MCQ',
          options: [
            '(A) Basic 2PL',
            '(B) Strict 2PL',
            '(C) Conservative (Pre-declaring) 2PL',
            '(D) Rigorous 2PL'
          ],
          correctAnswer: 'C',
          explanation: 'Conservative 2PL requires a transaction to acquire all its locks before starting execution (all-or-nothing). This eliminates the Hold & Wait condition, making deadlocks impossible while maintaining serializability.'
        }
      },
      {
        id: 'dbms-relational-algebra-sql',
        topicTitle: 'Relational Algebra, Tuple Calculus & SQL',
        syllabusRef: 'Section 9: Relational model: relational algebra, tuple calculus, SQL',
        estimatedReadTime: '9 mins',
        summary: 'Relational algebra is a procedural query language defining fundamental algebraic operations on relations. SQL translates declarative queries using 3-valued boolean logic with NULL semantics.',
        keyFormulasAndTheorems: [
          {
            title: "Codd's Equivalence Theorem",
            formula: 'Relational Algebra ≡ Safe Tuple Relational Calculus (TRC) ≡ Safe Domain Relational Calculus (DRC)',
            explanation: 'A query language is relationally complete if it is at least as expressive as first-order relational algebra.'
          },
          {
            title: 'Relational Division (R ÷ S)',
            formula: 'Finds tuples in R that are associated with ALL tuples in S',
            explanation: 'Essential for queries answering "all", "every" (e.g., students enrolled in all courses).'
          },
          {
            title: 'SQL 3-Valued Logic with NULL',
            formula: 'TRUE ∧ UNKNOWN = UNKNOWN | FALSE ∧ UNKNOWN = FALSE | NOT UNKNOWN = UNKNOWN',
            explanation: 'WHERE clauses only filter in rows where the predicate evaluates strictly to TRUE (UNKNOWN is treated as false).'
          }
        ],
        deepDiveContent: `### Fundamental Relational Algebra Operations
1. **Select (σ)**: Filters rows based on condition: σ_{Age > 20}(Students).
2. **Project (π)**: Filters columns, eliminates duplicates: π_{Name, Roll}(Students).
3. **Cartesian Product (×)**: Combines all tuples from two relations.
4. **Union (∪)**, **Difference (-)**: Require union-compatible schemas.
5. **Rename (ρ)**: Renames relations or attributes.

### SQL NULL Aggregations
- COUNT(*): Counts all rows, including NULLs.
- COUNT(column): Counts ONLY non-NULL values.
- SUM(column), AVG(column): Ignore NULL entries completely.`,
        examinerTraps: [
          'Using "=" with NULL in SQL: "col = NULL" is always UNKNOWN (falsy in WHERE). Must use "col IS NULL"!',
          'Assuming WHERE col != 5 returns rows where col is NULL: NULL != 5 evaluates to UNKNOWN, so row is excluded.'
        ],
        sampleGateProblem: {
          question: 'Consider a relation R(A, B) with 10 tuples, where attribute A has 4 NULL values and 6 distinct non-null values. What is the value returned by SELECT COUNT(A) FROM R?',
          type: 'NAT',
          correctAnswer: '6',
          explanation: 'COUNT(column) ignores all NULL values and counts only non-null occurrences. With 4 NULL values out of 10, COUNT(A) = 10 - 4 = 6.'
        }
      }
    ]
  },
  {
    subjectId: 'computer-networks',
    subjectName: 'Computer Networks',
    sectionId: 'CS',
    syllabusSection: 'Section 10: Computer Networks',
    weightage: '7–9 Marks',
    description: 'Layering principles, error detection, MAC protocols, routing, IPv4 CIDR, NAT, TCP flow and congestion control, sockets, DNS, and HTTP.',
    topics: [
      {
        id: 'cn-transport-tcp',
        topicTitle: 'TCP Flow & Congestion Control',
        syllabusRef: 'Section 10: TCP- flow control and congestion control, socket API',
        estimatedReadTime: '12 mins',
        summary: 'TCP 3-way handshake, sliding window flow control, sequence numbers, congestion window (cwnd), Slow Start, Congestion Avoidance, Fast Retransmit, and Fast Recovery.',
        keyFormulasAndTheorems: [
          {
            title: 'Effective Window Size in TCP',
            formula: 'Window = min(Receiver Advertised Window rwnd, Congestion Window cwnd)',
            explanation: 'Protects the receiving host buffer (Flow Control) and network routers (Congestion Control).'
          },
          {
            title: 'Slow Start Phase',
            formula: 'cwnd increases exponentially: cwnd = cwnd + 1 MSS per received ACK (doubles every RTT)',
            explanation: 'Continues until cwnd reaches the slow-start threshold (ssthresh).'
          },
          {
            title: 'Congestion Avoidance Phase',
            formula: 'cwnd increases linearly: cwnd = cwnd + (1 / cwnd) per ACK (adds 1 MSS per RTT)',
            explanation: 'Additive Increase Multiplicative Decrease (AIMD).'
          },
          {
            title: 'Loss Recovery Reactions',
            formula: '• Timeout: ssthresh = cwnd / 2, cwnd = 1 MSS (Enter Slow Start)\n• 3 Duplicate ACKs: ssthresh = cwnd / 2, cwnd = ssthresh + 3 (Fast Recovery)',
            explanation: 'Triple duplicate ACK indicates light congestion; timeout indicates severe packet loss.'
          }
        ],
        deepDiveContent: `### TCP Connection Management
1. **Connection Establishment (3-Way Handshake)**:
   - Client $\\to$ Server: $\\text{SYN}=1, \\text{seq}=x$
   - Server $\\to$ Client: $\\text{SYN}=1, \\text{ACK}=1, \\text{seq}=y, \\text{ack}=x+1$
   - Client $\\to$ Server: $\\text{ACK}=1, \\text{seq}=x+1, \\text{ack}=y+1$
2. **Connection Teardown (4-Way Handshake)**:
   - Sender sends FIN; receiver ACKs. Receiver then sends its own FIN; sender ACKs and enters **TIME_WAIT** (2 MSL) state to ensure lingering packets die out.`,
        examinerTraps: [
          'Confusing cwnd reset after timeout vs 3 Duplicate ACKs: Timeout drops cwnd back to 1 MSS; 3 Dup ACKs halves cwnd in modern TCP Reno/Tahoe.',
          'Sequence numbers in TCP count BYTES, not packets!'
        ],
        sampleGateProblem: {
          question: 'A TCP connection has ssthresh = 32 KB and current cwnd = 16 KB. If the sender receives a burst of ACKs for 1 RTT during Congestion Avoidance, the new cwnd will be:',
          type: 'NAT',
          correctAnswer: '17',
          explanation: 'Since cwnd (16 KB) is in Congestion Avoidance, it increases linearly by 1 MSS per RTT. Therefore, new cwnd = 16 + 1 = 17 KB.'
        }
      },
      {
        id: 'cn-ipv4-subnetting',
        topicTitle: 'IPv4 Addressing, CIDR & Fragmentation',
        syllabusRef: 'Section 10: IPv4 - Fragmentation, CIDR Notation, Network Address Translation',
        estimatedReadTime: '10 mins',
        summary: 'Classless Inter-Domain Routing (CIDR), variable length subnet masking (VLSM), IP header structure, fragmentation offset calculations, and NAT tables.',
        keyFormulasAndTheorems: [
          {
            title: 'CIDR Subnet Addresses Formula',
            formula: 'Total IPs = 2^{32 - N}   |   Usable Hosts = 2^{32 - N} - 2',
            explanation: 'N is the prefix length (e.g. /26). Subtract 2 for Network Address (all 0s in host) and Broadcast Address (all 1s in host).'
          },
          {
            title: 'IP Fragmentation Offset Calculation',
            formula: 'Offset = Bytes Transmitted / 8',
            explanation: 'Fragment Offset field is measured in 8-byte units. Data payload in each fragment (except the last) must be a multiple of 8 bytes.'
          },
          {
            title: 'Identification, Flags & Offset',
            formula: 'DF (Don’t Fragment) = 1 prevents fragmentation; MF (More Fragments) = 1 for all fragments except the last',
            explanation: 'Identification is identical across all fragments of a single datagram.'
          }
        ],
        deepDiveContent: `### Longest Prefix Match in Routing
When a router receives an IP packet, it matches the destination IP address with all routing table entries. If multiple prefixes match, the router forwards to the entry with the **longest prefix** (largest $N$ in $/N$).

### Network Address Translation (NAT)
- Translates private IP addresses (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) into a public routable IP.
- Uses NAPT (Network Address Port Translation): maintains table mapping $(Private IP, Private Port) \\leftrightarrow (Public IP, Public Port)$.`,
        examinerTraps: [
          'Forgetting the 20-byte IP header when calculating payload size: If MTU is 1500 bytes, maximum IP payload per fragment is 1480 bytes!',
          'Calculating fragment offset with header bytes included: Offset counts only DATA bytes, never header bytes!'
        ],
        sampleGateProblem: {
          question: 'An IPv4 packet with 4400 bytes total length (including a 20-byte IP header) passes through a link with MTU of 1500 bytes. What is the fragment offset of the second fragment?',
          type: 'NAT',
          correctAnswer: '185',
          explanation: 'Maximum payload per fragment = 1500 - 20 = 1480 bytes (which is divisible by 8: 1480 / 8 = 185). The first fragment carries 1480 bytes of data (offset 0). The second fragment starts at byte 1480. Fragment offset = 1480 / 8 = 185.'
        }
      },
      {
        id: 'cn-datalink-ethernet',
        topicTitle: 'Data Link Layer, Flow Control & CSMA/CD',
        syllabusRef: 'Section 10: Data link layer: error detection, Medium Access Control, Ethernet',
        estimatedReadTime: '9 mins',
        summary: 'The data link layer frames bit streams, detects errors via CRC polynomials, manages flow control using sliding windows, and arbitrates shared channel access with Ethernet CSMA/CD.',
        keyFormulasAndTheorems: [
          {
            title: 'Stop-and-Wait Flow Control Efficiency',
            formula: 'η = T_trans / (T_trans + 2 * T_prop) = 1 / (1 + 2a),  where a = T_prop / T_trans',
            explanation: 'Propagation delay T_prop = Distance / Propagation_Speed; Transmission delay T_trans = Frame_Size / Bandwidth.'
          },
          {
            title: 'Window Sizes for GBN and Selective Repeat',
            formula: 'Go-Back-N: W_s = 2^k - 1, W_r = 1 | Selective Repeat: W_s = W_r = 2^(k - 1)',
            explanation: 'Prevents overlap between sequence number spaces for k-bit sequence numbers.'
          },
          {
            title: 'Ethernet CSMA/CD Minimum Frame Size',
            formula: 'L_min ≥ 2 * T_prop * Bandwidth',
            explanation: 'Transmission duration must be at least 2 * T_prop (round-trip propagation time) to guarantee collision detection.'
          }
        ],
        deepDiveContent: `### CRC (Cyclic Redundancy Check) Division
1. Generator polynomial G(x) of degree r (has r+1 bits).
2. Append r zeros to the data bit string.
3. Perform modulo-2 binary division (using XOR operations without carry).
4. The r-bit remainder is appended to the original data frame as CRC checksum.

### Binary Exponential Backoff Algorithm
- After i-th collision (1 ≤ i ≤ 10), choose random slot K ∈ [0, 2^i - 1].
- Wait K * 2T_{prop} slot time before retransmitting.
- After 10 collisions, backoff interval is frozen at [0, 1023]. After 16 collisions, abort with error.`,
        examinerTraps: [
          'Forgetting factor of 2 in minimum frame length calculation: L = 2 * Tp * B (factor of 2 is essential for round-trip collision detection).',
          'In CRC questions, generator polynomial degree r produces exactly r bits of remainder (NOT r+1).'
        ],
        sampleGateProblem: {
          question: 'A 100 Mbps CSMA/CD network has a cable length of 1 km and propagation speed of 2 * 10^8 m/s. What is the minimum frame size required for collision detection in bytes?',
          type: 'NAT',
          correctAnswer: '125',
          explanation: 'T_prop = Distance / Speed = 1000 m / (2 * 10^8 m/s) = 5 * 10^(-6) seconds (5 microseconds). Minimum frame size = 2 * T_prop * Bandwidth = 2 * (5 * 10^(-6)) * (100 * 10^6 bps) = 1000 bits. In bytes: 1000 / 8 = 125 bytes.'
        }
      }
    ]
  },
  {
    subjectId: 'compiler-design',
    subjectName: 'Compiler Design',
    sectionId: 'CS',
    syllabusSection: 'Section 7: Compiler Design',
    weightage: '4–6 Marks',
    description: 'Lexical analysis, parsing (LL and LR), syntax-directed translation, runtime environments, intermediate code generation, and data flow analysis.',
    topics: [
      {
        id: 'cd-parsing',
        topicTitle: 'LL(1) & LR Parsing Techniques',
        syllabusRef: 'Section 7: Lexical analysis, parsing, syntax-directed translation',
        estimatedReadTime: '11 mins',
        summary: 'Top-down vs bottom-up parsers, First and Follow sets, LL(1) parsing table construction, LR(0), SLR(1), LALR(1), LR(1) items, and conflict resolution.',
        keyFormulasAndTheorems: [
          {
            title: 'LL(1) Grammar Conditions',
            formula: 'For A → α | β:\n1. First(α) ∩ First(β) = ∅\n2. If ε ∈ First(α), then First(β) ∩ Follow(A) = ∅',
            explanation: 'An LL(1) grammar can have NO left recursion and NO common prefix (must left-factor).'
          },
          {
            title: 'Parser Expressive Power Hierarchy',
            formula: 'LL(1) < SLR(1) < LALR(1) < LR(1)',
            explanation: 'LR(1) is the most powerful deterministic bottom-up parser. LALR(1) has identical number of states as SLR(1).'
          },
          {
            title: 'Parser Conflicts',
            formula: 'Shift-Reduce (S-R) vs Reduce-Reduce (R-R)',
            explanation: 'Merging states in LALR can NEVER produce new S-R conflicts, but CAN introduce new R-R conflicts!'
          }
        ],
        deepDiveContent: `### First and Follow Set Rules
- **First(X)**:
  - If $X$ is a terminal, $\\text{First}(X) = \\{X\\}$.
  - If $X \\to \\epsilon$, then $\\epsilon \\in \\text{First}(X)$.
  - If $X \\to Y_1 Y_2 ... Y_k$, add $\\text{First}(Y_1) - \\{\\epsilon\\}$ to $\\text{First}(X)$. If $Y_1 \\Rightarrow^* \\epsilon$, continue with $Y_2$.
- **Follow(A)**:
  - Add $\\$$ to $\\text{Follow}(S)$ (start symbol).
  - If $A \\to \\alpha B \\beta$, add $\\text{First}(\\beta) - \\{\\epsilon\\}$ to $\\text{Follow}(B)$.
  - If $A \\to \\alpha B$ or $\\beta \\Rightarrow^* \\epsilon$, add $\\text{Follow}(A)$ to $\\text{Follow}(B)$.`,
        examinerTraps: [
          'Including ε in Follow sets: Follow sets can NEVER contain ε!',
          'Assuming LALR(1) has more states than SLR(1): LALR(1) has the EXACT same number of states as SLR(1) because it merges LR(1) states with identical cores.'
        ],
        sampleGateProblem: {
          question: 'Which of the following conflicts can be introduced when converting an LR(1) parser into an LALR(1) parser by merging states with identical cores?',
          type: 'MCQ',
          options: [
            '(A) Shift-Reduce conflicts only',
            '(B) Reduce-Reduce conflicts only',
            '(C) Both Shift-Reduce and Reduce-Reduce conflicts',
            '(D) Neither Shift-Reduce nor Reduce-Reduce conflicts'
          ],
          correctAnswer: 'B',
          explanation: 'Merging states with identical cores in LALR cannot introduce shift-reduce conflicts because shift actions depend only on the core, but it CAN introduce reduce-reduce conflicts due to merged lookaheads.'
        }
      },
      {
        id: 'cd-data-flow',
        topicTitle: 'Data Flow Analysis & Code Optimization',
        syllabusRef: 'Section 7: Local optimisation, Data flow analyses: constant propagation, liveness analysis, common sub expression elimination',
        estimatedReadTime: '9 mins',
        summary: 'Control Flow Graphs (CFG), Basic blocks, DAG representation, Constant propagation, Liveness analysis equations, and Common Subexpression Elimination.',
        keyFormulasAndTheorems: [
          {
            title: 'Liveness Analysis Equation (Backward)',
            formula: 'In[B] = Use[B] ∪ (Out[B] - Def[B])',
            explanation: 'A variable is live at a program point if its current value may be used along some execution path before being redefined.'
          },
          {
            title: 'Available Expressions Equation (Forward)',
            formula: 'Out[B] = Gen[B] ∪ (In[B] - Kill[B])',
            explanation: 'Used for Common Subexpression Elimination.'
          }
        ],
        deepDiveContent: `### Identifying Basic Blocks in Three-Address Code
A **Leader** is defined by:
1. First statement of the three-address code.
2. Target of any conditional or unconditional jump.
3. Statement immediately following any conditional or unconditional jump.
A **Basic Block** consists of a leader and all subsequent instructions up to (but not including) the next leader.`,
        examinerTraps: [
          'Liveness analysis is a BACKWARD data flow analysis with UNION meet operator (may-analysis), whereas available expressions is a FORWARD analysis with INTERSECTION meet operator (must-analysis).'
        ],
        sampleGateProblem: {
          question: 'Liveness analysis is used in compiler optimization primarily for:',
          type: 'MCQ',
          options: [
            '(A) Register allocation and dead code elimination',
            '(B) Common subexpression elimination',
            '(C) Loop unrolling',
            '(D) Constant folding'
          ],
          correctAnswer: 'A',
          explanation: 'Liveness analysis determines which variables need to be kept in CPU registers and detects assignments to variables that are never read again (dead code).'
        }
      }
    ]
  },
  {
    subjectId: 'programming-ds',
    subjectName: 'Programming & Data Structures',
    sectionId: 'CS',
    syllabusSection: 'Section 4: Programming and Data Structures',
    weightage: '10–12 Marks',
    description: 'Programming in C, recursion, stacks, queues, linked lists, trees, binary search trees, heaps, and graph representations.',
    topics: [
      {
        id: 'pds-c-pointers',
        topicTitle: 'C Programming: Pointers & Recursion',
        syllabusRef: 'Section 4: Programming in C. Recursion',
        estimatedReadTime: '10 mins',
        summary: 'Pointer arithmetic, pointers to pointers, function pointers, array-pointer equivalence, static vs dynamic scope, and recursion stack frame tracing.',
        keyFormulasAndTheorems: [
          {
            title: 'Pointer Arithmetic Rule',
            formula: 'ptr + i = (uintptr_t)ptr + i · sizeof(*ptr)',
            explanation: 'Incrementing a pointer steps forward by the size of the underlying data type.'
          },
          {
            title: 'Array Indexing Equivalence',
            formula: 'arr[i] ≡ *(arr + i) ≡ *(i + arr) ≡ i[arr]',
            explanation: 'All four syntactic forms produce identical machine code in C.'
          },
          {
            title: 'Storage Classes & Lifetime',
            formula: 'static int x; retains its value across function calls and initializes to 0',
            explanation: 'Local static variables are allocated in the Data/BSS segment, NOT on the stack.'
          }
        ],
        deepDiveContent: `### Operator Precedence in C
1. ` + '`() [] -> .`' + ` (Left-to-Right)
2. ` + '`! ~ ++ -- + - * (type) sizeof`' + ` (Right-to-Left unary)
3. ` + '`* / %`' + ` (Left-to-Right multiplicative)
4. ` + '`+ -`' + ` (Left-to-Right additive)
5. ` + '`<< >>`' + ` (Bitwise shifts)
6. ` + '`< <= > >=`' + ` (Relational)
7. ` + '`== !=`' + ` (Equality)
8. ` + '`&`' + ` (Bitwise AND)
9. ` + '`^`' + ` (Bitwise XOR)
10. ` + '`|`' + ` (Bitwise OR)
11. ` + '`&&`' + ` (Logical AND - short circuits!)
12. ` + '`||`' + ` (Logical OR - short circuits!)

### Recursion Stack Frame
Each recursive invocation pushes a new **Activation Record** containing return address, parameters, and local variables onto the call stack.`,
        examinerTraps: [
          'Precedence between * and ++: *p++ increments the pointer p, returning *p before increment. (*p)++ increments the dereferenced integer value!',
          'Short-circuit evaluation: In (A && B), if A is false, B is NOT evaluated; in (A || B), if A is true, B is NOT evaluated!'
        ],
        sampleGateProblem: {
          question: 'What is the output of the following C program?\n#include <stdio.h>\nint foo(int n) {\n  static int d = 1;\n  printf("%d ", n);\n  printf("%d ", d);\n  d++;\n  if (n > 1) foo(n - 1);\n  printf("%d ", d);\n  return 0;\n}\nint main() { foo(3); return 0; }',
          type: 'MCQ',
          options: [
            '(A) 3 1 2 2 1 3 4 4 4',
            '(B) 3 1 2 2 1 3 3 2 1',
            '(C) 3 1 2 2 1 3 4 3 2',
            '(D) 3 1 2 1 1 1 4 4 4'
          ],
          correctAnswer: 'A',
          explanation: 'Tracing: d is static, so d increments across all calls: d becomes 2, then 3, then 4 during recursive unwind. When unwinding, d is 4 for all trailing printfs. Output: 3 1 2 2 1 3 4 4 4.'
        }
      },
      {
        id: 'pds-trees-heaps',
        topicTitle: 'Trees, Binary Search Trees & Heaps',
        syllabusRef: 'Section 4: Arrays, stacks, queues, linked lists, trees, binary search trees, binary heaps, graphs',
        estimatedReadTime: '11 mins',
        summary: 'Tree traversals, tree construction, BST search/insert/delete, AVL balance factors, Max/Min heaps, Heapify operation, and priority queues.',
        keyFormulasAndTheorems: [
          {
            title: 'Tree Traversals',
            formula: 'Preorder: Root-L-R   |   Inorder: L-Root-R   |   Postorder: L-R-Root',
            explanation: 'Inorder traversal of any Binary Search Tree produces values in strictly sorted order.'
          },
          {
            title: 'Tree Reconstruction Rule',
            formula: 'Inorder + (Preorder OR Postorder) uniquely reconstructs a Binary Tree',
            explanation: 'Preorder + Postorder does NOT guarantee unique reconstruction (unless tree is strictly full/proper).'
          },
          {
            title: 'Binary Heap Properties',
            formula: 'Array indexed from 1: Left = 2i, Right = 2i + 1, Parent = ⌊i/2⌋',
            explanation: 'Build-Heap (Heapify all internal nodes) runs in O(n) linear time, NOT O(n log n)!'
          }
        ],
        deepDiveContent: `### Number of Binary Trees with n Nodes
- **Unlabeled Nodes**: Catalan Number $C_n = \\frac{1}{n+1} \\binom{2n}{n}$.
- **Labeled Nodes**: $C_n \\times n! = \\frac{1}{n+1} \\binom{2n}{n} \\times n!$.

### BST Node Deletion
1. **Node with 0 children (Leaf)**: Remove directly.
2. **Node with 1 child**: Replace node with its child.
3. **Node with 2 children**: Replace node with either its **Inorder Predecessor** (max in left subtree) or **Inorder Successor** (min in right subtree), then delete that predecessor/successor.`,
        examinerTraps: [
          'Assuming Build-Heap takes O(n log n): Inserting n elements individually takes O(n log n), but bottom-up Heapify takes strictly O(n)!',
          'Height of complete binary tree with n nodes is ⌊log2(n)⌋.'
        ],
        sampleGateProblem: {
          question: 'The number of distinct binary search trees that can be constructed with 4 distinct keys is:',
          type: 'NAT',
          correctAnswer: '14',
          explanation: 'The number of distinct BSTs with n keys is given by the n-th Catalan number: C4 = (1/5) * C(8, 4) = (1/5) * (8*7*6*5)/(4*3*2*1) = 70 / 5 = 14.'
        }
      },
      {
        id: 'ds-linear-hashing',
        topicTitle: 'Stacks, Queues, Linked Lists & Hashing',
        syllabusRef: 'Section 4: Programming in C. Recursion. Arrays, stacks, queues, linked lists, hash tables',
        estimatedReadTime: '9 mins',
        summary: 'Linear data structures and hash tables provide foundational storage, parsing, and associative lookup mechanisms with trade-offs between contiguous and pointer-based memory.',
        keyFormulasAndTheorems: [
          {
            title: 'Circular Queue Full Condition',
            formula: '(rear + 1) % Capacity == front',
            explanation: 'Leaves one slot empty to distinguish between completely full and completely empty queue.'
          },
          {
            title: 'Open Addressing: Double Hashing',
            formula: 'h(k, i) = (h1(k) + i * h2(k)) % m,  for i = 0, 1, ..., m-1',
            explanation: 'h2(k) must be relatively prime to hash table size m to probe all slots without secondary clustering.'
          },
          {
            title: 'Load Factor in Hashing',
            formula: 'α = n / m  (n items, m slots)',
            explanation: 'Average search cost in separate chaining: O(1 + α).'
          }
        ],
        deepDiveContent: `### Infix to Postfix Conversion Rules
- Operands go directly to output.
- Left parenthesis '(' has highest priority outside stack, but lowest priority once on stack!
- Higher precedence operators pop lower precedence operators before pushing.
- Right parenthesis ')' pops until matching '(' is reached.

### Singly Linked List Cycle Detection (Floyd Cycle Finding)
- Slow pointer advances 1 step; Fast pointer advances 2 steps.
- If cycle exists, they will meet inside the loop in $O(N)$ time and $O(1)$ auxiliary space.`,
        examinerTraps: [
          'Primary clustering in linear probing: long contiguous occupied runs degrade probe time to O(n).',
          'Order of operations in singly linked list deletion: freeing a pointer before updating next link loses entire remaining list.'
        ],
        sampleGateProblem: {
          question: 'What is the postfix form of the infix expression: A + B * C - D / E?',
          type: 'MCQ',
          options: [
            '(A) A B C * + D E / -',
            '(B) A B + C * D - E /',
            '(C) A B C + * D E / -',
            '(D) + A * B C - / D E'
          ],
          correctAnswer: 'A',
          explanation: '* and / have highest precedence, evaluated left to right: B * C becomes BC*, D / E becomes DE/. Next + and -: A + (BC*) becomes ABC*+, then - (DE/) becomes ABC*+DE/-.'
        }
      }
    ]
  },
  {
    subjectId: 'general-aptitude',
    subjectName: 'General Aptitude',
    sectionId: 'GA',
    syllabusSection: 'General Aptitude (GA)',
    weightage: '15 Marks',
    description: 'Mandatory 15-mark section covering Verbal Ability, Quantitative Reasoning, Analytical Reasoning, and Spatial Aptitude.',
    topics: [
      {
        id: 'ga-quantitative',
        topicTitle: 'Quantitative & Numerical Ability',
        syllabusRef: 'GA: Numerical computation, numerical estimation, numerical reasoning and data interpretation',
        estimatedReadTime: '9 mins',
        summary: 'Percentages, ratios, time & work, speed/distance/time, permutations & combinations, probability, and chart interpretation.',
        keyFormulasAndTheorems: [
          {
            title: 'Time & Work',
            formula: 'If A takes x days and B takes y days, combined time = (x · y) / (x + y) days',
            explanation: 'Efficiency is inversely proportional to time taken.'
          },
          {
            title: 'Average Speed',
            formula: 'Average Speed = Total Distance / Total Time',
            explanation: 'For equal distance halves with speeds u and v: Avg Speed = (2uv) / (u + v) (Harmonic Mean).'
          }
        ],
        deepDiveContent: `### Permutations vs Combinations
- **Permutations ($P(n, r) = \\frac{n!}{(n-r)!}$)**: Order matters (e.g., arrangements, words, digit codes).
- **Combinations ($C(n, r) = \\frac{n!}{r!(n-r)!}$)**: Order does NOT matter (e.g., committees, team selections, handshakes).`,
        examinerTraps: [
          'Averaging speeds arithmetically: If you drive 60 km/h out and 40 km/h back, average speed is 2*60*40/(60+40) = 48 km/h, NOT 50 km/h!'
        ],
        sampleGateProblem: {
          question: 'A train traveling at 72 km/h crosses a 200 m long platform in 25 seconds. What is the length of the train in meters?',
          type: 'NAT',
          correctAnswer: '300',
          explanation: 'Speed = 72 * (5/18) = 20 m/s. Total distance = Speed * Time = 20 * 25 = 500 m. Train length = Total distance - Platform length = 500 - 200 = 300 m.'
        }
      },
      {
        id: 'ga-verbal-analytical',
        topicTitle: 'Verbal Ability & Analytical Reasoning',
        syllabusRef: 'GA: English grammar, sentence completion, verbal analogies, critical reasoning',
        estimatedReadTime: '8 mins',
        summary: 'Verbal ability tests grammatical syntax, vocabulary precision, and paragraph comprehension. Analytical reasoning evaluates logical deduction, syllogisms, and spatial relations.',
        keyFormulasAndTheorems: [
          {
            title: 'Subject-Verb Agreement Principle',
            formula: 'Singular subject => Singular verb; Plural subject => Plural verb',
            explanation: 'Words intervening between subject and verb (e.g., "together with", "as well as") do not change the subject number.'
          },
          {
            title: 'Conditional Sentence Structure (Type 3)',
            formula: 'If + Past Perfect (had done) ... would have + Past Participle (would have won)',
            explanation: 'Standard grammatical construction for counterfactual past scenarios.'
          }
        ],
        deepDiveContent: `### Syllogism Validity Rules
1. From two negative premises, **no valid conclusion** follows.
2. From two particular premises (Some), **no valid conclusion** follows.
3. If one premise is negative, the conclusion **must be negative**.
4. The middle term must be distributed at least once.`,
        examinerTraps: [
          'Confusing "Either...or" with "Neither...nor": verb agrees with the closer subject.',
          'Assuming truth of conclusion in reality: In syllogisms, evaluate purely on formal logical premises regardless of real-world facts.'
        ],
        sampleGateProblem: {
          question: 'Choose the grammatically correct sentence:',
          type: 'MCQ',
          options: [
            '(A) Neither the teacher nor the students was present in the auditorium.',
            '(B) Neither the teacher nor the students were present in the auditorium.',
            '(C) Neither the teacher nor the students are present yesterday in the auditorium.',
            '(D) Neither the teacher nor the students has been present in the auditorium.'
          ],
          correctAnswer: 'B',
          explanation: 'In "Neither...nor" constructions, the verb agrees in number with the nearer subject. Here "the students" is plural, so plural verb "were" is correct.'
        }
      }
    ]
  }
];

export function getStudyModule(subjectId: string): SubjectStudyModule | undefined {
  return GATE_STUDY_MODULES.find(m => m.subjectId === subjectId);
}

export function getAllStudyTopics(): { topic: TopicNote; module: SubjectStudyModule }[] {
  const result: { topic: TopicNote; module: SubjectStudyModule }[] = [];
  GATE_STUDY_MODULES.forEach(module => {
    module.topics.forEach(topic => {
      result.push({ topic, module });
    });
  });
  return result;
}

