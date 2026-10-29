import zipfile
import fitz  # PyMuPDF
import re
import json
import os

SUBJECT_KEYWORDS = {
    'discrete-maths': [
        'graph', 'vertex', 'edge', 'planar', 'coloring', 'chromatic', 'eulerian', 'hamiltonian',
        'propositional', 'predicate', 'first order logic', 'tautology', 'quantifier', 'lattice',
        'partial order', 'poset', 'relation', 'equivalence', 'group', 'monoid', 'combinatorics',
        'recurrence relation', 'generating function', 'bijection', 'counting'
    ],
    'linear-algebra': [
        'matrix', 'matrices', 'eigenvalue', 'eigenvector', 'determinant', 'rank', 'linear equations',
        'lu decomposition', 'nullity', 'basis', 'vector space', 'characteristic equation'
    ],
    'calculus': [
        'limit', 'continuous', 'differentiable', 'maxima', 'minima', 'mean value theorem',
        'taylor series', 'integration', 'integral', 'derivative', 'dx', 'dy'
    ],
    'probability': [
        'probability', 'random variable', 'uniform distribution', 'normal distribution',
        'poisson', 'binomial', 'exponential distribution', 'expectation', 'variance',
        'standard deviation', 'bayes theorem', 'conditional probability', 'dice', 'coin'
    ],
    'digital-logic': [
        'boolean', 'k-map', 'karnaugh', 'multiplexer', 'mux', 'decoder', 'encoder', 'flip-flop',
        'counter', 'sequential circuit', 'combinational circuit', '2\'s complement', 'floating point',
        'adder', 'carry lookahead', 'logic gate', 'sop', 'pos'
    ],
    'coa': [
        'pipeline', 'hazard', 'branch prediction', 'cache', 'direct mapped', 'set associative',
        'associativity', 'hit ratio', 'miss penalty', 'addressing mode', 'instruction set',
        'alu', 'microprogrammed', 'control unit', 'dma', 'interrupt', 'memory hierarchy',
        'effective memory access', 'clock cycle', 'cpi'
    ],
    'programming-ds': [
        'recursion', 'pointer', 'binary tree', 'binary search tree', 'bst', 'heap', 'max heap',
        'min heap', 'linked list', 'stack', 'queue', 'preorder', 'inorder', 'postorder',
        'array', 'c program', 'void main', 'int main', 'printf', 'malloc', 'struct'
    ],
    'algorithms': [
        'time complexity', 'space complexity', 'asymptotic', 'big-o', 'theta', 'omega',
        'sorting', 'quicksort', 'mergesort', 'heapsort', 'binary search', 'hashing', 'hash table',
        'dynamic programming', 'greedy', 'divide and conquer', 'dijkstra', 'bellman-ford',
        'minimum spanning tree', 'mst', 'kruskal', 'prim', 'bfs', 'dfs', 'shortest path'
    ],
    'toc': [
        'regular expression', 'dfa', 'nfa', 'finite automata', 'context-free', 'cfg', 'pda',
        'push-down automata', 'pumping lemma', 'turing machine', 'undecidable', 'decidable',
        'halting problem', 'chomsky', 'grammar'
    ],
    'compiler-design': [
        'lexical analysis', 'lexer', 'parser', 'll(1)', 'lr(0)', 'slr', 'lalr', 'lr(1)',
        'syntax directed', 'sdt', 'intermediate code', 'three address code', 'quadruple',
        'constant propagation', 'liveness analysis', 'common subexpression', 'data flow',
        'activation record', 'runtime environment'
    ],
    'os': [
        'process', 'thread', 'fork()', 'semaphore', 'mutex', 'deadlock', 'banker',
        'scheduling', 'round robin', 'fcfs', 'sjf', 'virtual memory', 'paging', 'page fault',
        'page replacement', 'tlb', 'fifo', 'lru', 'critical section', 'file system', 'inode'
    ],
    'dbms': [
        'relational algebra', 'tuple calculus', 'sql', 'select *', 'functional dependency',
        'normal form', 'bcnf', '3nf', '2nf', 'lossless', 'dependency preserving',
        'b tree', 'b+ tree', 'indexing', 'transaction', 'serializability', 'conflict serializable',
        'concurrency control', '2pl', 'acid', 'recoverable'
    ],
    'computer-networks': [
        'packet', 'switching', 'ethernet', 'csma/cd', 'mac', 'sliding window', 'go-back-n',
        'selective repeat', 'distance vector', 'link state', 'ospf', 'rip', 'bgp',
        'ipv4', 'ipv6', 'cidr', 'subnet', 'fragmentation', 'nat', 'tcp', 'udp',
        'flow control', 'congestion control', 'slow start', 'socket', 'dns', 'http', 'round trip time'
    ]
}

def classify_subject(q_num, text):
    if q_num <= 10:
        return 'general-aptitude', 'General Aptitude'
    
    t = text.lower()
    scores = {}
    for subj, kws in SUBJECT_KEYWORDS.items():
        score = sum(1 for kw in kws if kw in t)
        scores[subj] = score
    
    best_subj = max(scores, key=scores.get)
    if scores[best_subj] == 0:
        best_subj = 'programming-ds'
    
    # Map to section
    sec_titles = {
        'general-aptitude': 'General Aptitude',
        'discrete-maths': 'Discrete Mathematics',
        'linear-algebra': 'Linear Algebra',
        'calculus': 'Calculus',
        'probability': 'Probability & Statistics',
        'digital-logic': 'Digital Logic',
        'coa': 'Computer Organization & Architecture',
        'programming-ds': 'Programming & Data Structures',
        'algorithms': 'Algorithms',
        'toc': 'Theory of Computation',
        'compiler-design': 'Compiler Design',
        'os': 'Operating Systems',
        'dbms': 'Databases',
        'computer-networks': 'Computer Networks'
    }
    return best_subj, sec_titles[best_subj]

def extract_paper(zip_ref, pdf_path, year, paper_set):
    doc = fitz.open(stream=zip_ref.read(pdf_path), filetype='pdf')
    pages_text = []
    for page in doc:
        txt = page.get_text()
        lines = txt.split('\n')
        clean = []
        for l in lines:
            if any(term in l for term in ['Organizing Institute', 'Organising Institute', 'Page ']):
                if 'Page ' in l and ' of ' in l:
                    continue
                if 'Organizing Institute' in l or 'Organising Institute' in l:
                    continue
            clean.append(l)
        pages_text.append('\n'.join(clean))
    
    full_text = '\n'.join(pages_text)
    
    # Split by Q markers
    pattern = r'(?:\n|^)(Q\.\s*\d+)'
    splits = re.split(pattern, full_text)
    
    questions = []
    for i in range(1, len(splits), 2):
        q_marker = splits[i].strip()
        body = splits[i+1].strip()
        
        # Check header
        if any(h in body[:60] for h in ['Carry ONE mark', 'Carry TWO mark', 'carry one mark', 'carry two marks']):
            continue
            
        m = re.search(r'\d+', q_marker)
        if not m:
            continue
        q_num = int(m.group(0))
        
        # Determine marks
        if q_num <= 5:
            marks = 1
        elif q_num <= 10:
            marks = 2
        elif q_num <= 35:
            marks = 1
        else:
            marks = 2
            
        # Parse options
        opt_pattern = r'(?:\n|^)\s*\(([A-D])\)\s*'
        opt_splits = re.split(opt_pattern, body)
        q_text = opt_splits[0].strip()
        
        # Clean extra headers from question text
        q_text = re.sub(r'^(?:General Aptitude|Computer Science.*?|GA|CS\d?)\s*', '', q_text, flags=re.IGNORECASE)
        
        options = []
        if len(opt_splits) > 1:
            for j in range(1, len(opt_splits), 2):
                key = opt_splits[j].strip()
                val = opt_splits[j+1].strip()
                # Clean footer relics from option
                clean_lines = [l.strip() for l in val.split('\n') if l.strip() and not any(r in l for r in ['IIT', 'IISc', 'CS1', 'CS2', 'Shift', 'Page '])]
                options.append({'key': key, 'text': ' '.join(clean_lines)})
        
        if len(options) == 4:
            q_type = 'MCQ'
        elif len(options) > 0:
            q_type = 'MCQ'
        else:
            q_type = 'NAT'
            
        subj_id, subj_title = classify_subject(q_num, q_text + ' ' + ' '.join(o['text'] for o in options))
        sec_id = 'GA' if q_num <= 10 else ('EM' if subj_id in ['discrete-maths', 'linear-algebra', 'calculus', 'probability'] else 'CS')
        
        # Calculate negative marking
        neg_marks = 0.33 if (marks == 1 and q_type == 'MCQ') else (0.66 if (marks == 2 and q_type == 'MCQ') else 0.0)
        
        questions.append({
            'id': f'{year}-{paper_set}-Q{q_num}',
            'year': year,
            'paperSet': paper_set,
            'questionNumber': q_num,
            'sectionId': sec_id,
            'subjectId': subj_id,
            'subjectTitle': subj_title,
            'type': q_type,
            'marks': marks,
            'negativeMarks': round(neg_marks, 2),
            'question': q_text,
            'options': options if options else None
        })
        
    return questions

def main():
    with zipfile.ZipFile('CS.zip') as z:
        manifest = {}
        for fname in sorted(z.namelist()):
            if fname.endswith('.pdf'):
                # Extract year and set
                base = os.path.basename(fname).replace('.pdf', '')
                parts = base.split('_')
                year = int(parts[0])
                paper_set = parts[1] if len(parts) > 1 else 'CS'
                
                print(f'Extracting {year} {paper_set} ({fname})...')
                qs = extract_paper(z, fname, year, paper_set)
                manifest[f'{year}_{paper_set}'] = qs
                print(f'  -> Extracted {len(qs)} questions.')
                
        # Save JSON
        os.makedirs('extracted_gate', exist_ok=True)
        with open('extracted_gate/all_gate_raw.json', 'w') as f:
            json.dump(manifest, f, indent=2)
            
        print('Saved extracted_gate/all_gate_raw.json!')

if __name__ == '__main__':
    main()
