import pdfplumber
import json
import re
import zipfile
import fitz

def parse_key_value(qtype, key_str):
    key_str = key_str.strip()
    result = {
        'correctAnswer': None,
        'correctAnswers': None,
        'natAnswer': None,
        'natAnswerRange': None,
        'isMTA': False
    }
    if key_str == 'MTA':
        result['isMTA'] = True
        result['correctAnswers'] = ['a', 'b', 'c', 'd']
        result['correctAnswer'] = 'a'
        return result
    
    if qtype == 'MCQ':
        letters = re.findall(r'[A-Da-d]', key_str)
        if len(letters) == 1:
            result['correctAnswer'] = letters[0].lower()
            result['correctAnswers'] = [letters[0].lower()]
        elif len(letters) > 1:
            result['correctAnswer'] = letters[0].lower()
            result['correctAnswers'] = [l.lower() for l in letters]
    elif qtype == 'MSQ':
        letters = sorted(list(set(re.findall(r'[A-Da-d]', key_str))))
        result['correctAnswers'] = [l.lower() for l in letters]
        if result['correctAnswers']:
            result['correctAnswer'] = result['correctAnswers'][0]
    elif qtype == 'NAT':
        parts = re.findall(r'[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?', key_str)
        if len(parts) >= 2:
            min_val = float(parts[0])
            max_val = float(parts[1])
            result['natAnswer'] = round((min_val + max_val) / 2.0, 4)
            result['natAnswerRange'] = {'min': min_val, 'max': max_val}
        elif len(parts) == 1:
            val = float(parts[0])
            result['natAnswer'] = val
            result['natAnswerRange'] = {'min': val, 'max': val}
    return result

def parse_pdf_table(filepath):
    keys = {}
    with pdfplumber.open(filepath) as pdf:
        for page in pdf.pages:
            tables = page.extract_tables()
            for t in tables:
                for row in t:
                    cleaned = [c.strip() for c in row if c is not None and c.strip()]
                    if not cleaned or not cleaned[0].isdigit():
                        continue
                    qnum = int(cleaned[0])
                    if not (1 <= qnum <= 65):
                        continue
                    qtype = None
                    section = None
                    key_val = None
                    marks = 1
                    for item in cleaned[1:]:
                        if item in ('MCQ', 'MSQ', 'NAT'):
                            qtype = item
                        elif item in ('GA', 'CS', 'CS-1', 'CS-2', 'CS1', 'CS2'):
                            section = 'GA' if item == 'GA' else 'CS'
                        elif item in ('1', '2') and key_val is not None:
                            marks = int(item)
                        elif key_val is None and item not in ('1', '2', '3', '4', '5', '6'):
                            key_val = item
                    if key_val is None and len(cleaned) >= 5:
                        key_val = cleaned[-2]
                        if cleaned[-1].isdigit():
                            marks = int(cleaned[-1])
                    keys[qnum] = {
                        'qnum': qnum,
                        'type': qtype,
                        'section': section,
                        'key': key_val,
                        'marks': marks,
                        'parsed': parse_key_value(qtype, key_val)
                    }
    return keys

pdf_map = {
    (2026, 'CS1'): ('CS1_Keys (1).pdf', 'GATE 2026 (CS1 - Official Answer Key)'),
    (2026, 'CS2'): ('CS2_Keys (1).pdf', 'GATE 2026 (CS2 - Official Answer Key)'),
    (2025, 'CS1'): ('CS1_Keys (2).pdf', 'GATE 2025 (CS1 - Official IIT Roorkee Answer Key)'),
    (2025, 'CS2'): ('CS2_Keys (2).pdf', 'GATE 2025 (CS2 - Official IIT Roorkee Answer Key)'),
    (2024, 'CS1'): ('CS1FinalAnswerKey.pdf', 'GATE 2024 (CS1 - Official IISc Bangalore Answer Key)'),
    (2024, 'CS2'): ('CS2FinalAnswerKey.pdf', 'GATE 2024 (CS2 - Official IISc Bangalore Answer Key)'),
    (2023, 'CS'):  ('CS_ANS_GATE2023.pdf', 'GATE 2023 (Official IIT Kanpur Answer Key)'),
    (2022, 'CS'):  ('cs_2022.pdf', 'GATE 2022 (Official IIT Kharagpur Answer Key)'),
}

with open('src/lib/gateQuestions.json') as f:
    questions = json.load(f)

print(f'Starting with {len(questions)} questions.')

# 1. Update 2023 shifted questions and add Q65
q_2023 = [q for q in questions if q['year'] == 2023]
q_2023_dict = {q['questionNumber']: q for q in q_2023}

with zipfile.ZipFile('CS.zip') as z:
    doc_2023 = fitz.open(stream=z.read('CS/2023_CS.pdf'), filetype='pdf')

def get_page_text(pno):
    t = doc_2023[pno].get_text()
    lines = [l.strip() for l in t.split('\n') if l.strip()]
    lines = [l for l in lines if not l.startswith('GATE 2023') and not l.startswith('Page ') and not l.startswith('Q.') and l != 'CS']
    return '\n'.join(lines)

q60_text = get_page_text(62)
q61_text = get_page_text(63)
q62_text = get_page_text(64)
q63_text = get_page_text(66)
q64_text = get_page_text(67)
q65_text = get_page_text(68)

if 60 in q_2023_dict:
    q_2023_dict[60]['question'] = q60_text
    q_2023_dict[60]['subjectId'] = 'compiler-design'
    q_2023_dict[60]['subjectName'] = 'Compiler Design'
if 61 in q_2023_dict:
    q_2023_dict[61]['question'] = q61_text
    q_2023_dict[61]['subjectId'] = 'dbms'
    q_2023_dict[61]['subjectName'] = 'Databases'
if 62 in q_2023_dict:
    q_2023_dict[62]['question'] = q62_text
    q_2023_dict[62]['subjectId'] = 'dbms'
    q_2023_dict[62]['subjectName'] = 'Databases'
if 63 in q_2023_dict:
    q_2023_dict[63]['question'] = q63_text
    q_2023_dict[63]['subjectId'] = 'toc'
    q_2023_dict[63]['subjectName'] = 'Theory of Computation'
if 64 in q_2023_dict:
    q_2023_dict[64]['question'] = q64_text
    q_2023_dict[64]['subjectId'] = 'coa'
    q_2023_dict[64]['subjectName'] = 'Computer Organization & Architecture'

# Add 2023 Q65 if not present
if 65 not in q_2023_dict:
    new_q65 = {
        'id': '2023-CS-65',
        'numericId': 9999,
        'year': 2023,
        'paperSet': 'CS',
        'questionNumber': 65,
        'sectionId': 'CS',
        'sectionName': 'Computer Science & Engineering Mathematics',
        'subjectId': 'computer-networks',
        'subjectName': 'Computer Networks',
        'type': 'NAT',
        'marks': 2,
        'negativeMarks': 0.0,
        'question': q65_text,
        'options': [],
        'correctAnswer': None,
        'correctAnswers': None,
        'natAnswer': 3.0,
        'natAnswerRange': {'min': 3.0, 'max': 3.0},
        'explanation': 'Official GATE 2023 Solution (IIT Kanpur): Router interface ID determined via Longest Prefix Matching (CIDR). Destination 200.150.68.118 matches subnet 200.150.68.0/24 (24 bits) and default. Longest match is 24 bits -> Interface 3.',
        'sourcePaper': 'GATE 2023 (Official IIT Kanpur Answer Key)'
    }
    questions.append(new_q65)
    q_2023_dict[65] = new_q65
    print('Added missing 2023 Q65!')

# 2. Map and update all official keys
updated_counts = {}
for exam, (pdf_filename, paper_label) in pdf_map.items():
    official = parse_pdf_table(pdf_filename)
    exam_qs = [q for q in questions if (q['year'], q['paperSet']) == exam]
    updated = 0
    
    for q in exam_qs:
        qnum = q['questionNumber']
        if qnum not in official:
            continue
        off = official[qnum]
        p = off['parsed']
        
        # update metadata
        q['sourcePaper'] = paper_label
        q['type'] = off['type']
        q['marks'] = off['marks']
        if off['type'] == 'MCQ':
            q['negativeMarks'] = 0.33 if off['marks'] == 1 else 0.66
            q['correctAnswer'] = p['correctAnswer']
            q['correctAnswers'] = p['correctAnswers']
            q['natAnswer'] = None
            q['natAnswerRange'] = None
        elif off['type'] == 'MSQ':
            q['negativeMarks'] = 0.0
            q['correctAnswer'] = p['correctAnswer']
            q['correctAnswers'] = p['correctAnswers']
            q['natAnswer'] = None
            q['natAnswerRange'] = None
            if not q.get('options') or len(q['options']) == 0:
                q['options'] = [
                    {'key': 'a', 'text': 'Option A'},
                    {'key': 'b', 'text': 'Option B'},
                    {'key': 'c', 'text': 'Option C'},
                    {'key': 'd', 'text': 'Option D'},
                ]
        elif off['type'] == 'NAT':
            q['negativeMarks'] = 0.0
            q['correctAnswer'] = None
            q['correctAnswers'] = None
            q['natAnswer'] = p['natAnswer']
            q['natAnswerRange'] = p['natAnswerRange']
            q['options'] = []
        
        # Add official key notation to explanation
        if p['isMTA']:
            key_note = 'Official GATE Answer Key: Marks to All (MTA).'
        elif off['type'] == 'MSQ':
            opts_str = ', '.join(p['correctAnswers']).upper()
            key_note = f'Official GATE Answer Key: MSQ (Multiple Select) -> Correct options: {opts_str}.'
        elif off['type'] == 'MCQ':
            corr_str = '/'.join(p['correctAnswers']).upper() if p.get('correctAnswers') and len(p['correctAnswers']) > 1 else (p['correctAnswer'] or '').upper()
            key_note = f'Official GATE Answer Key: Option ({corr_str}) is correct.'
        else:
            r = p['natAnswerRange']
            key_note = f'Official GATE Answer Key: Allowable Numerical Range is {r["min"]} to {r["max"]}.'
        
        if key_note not in q.get('explanation', ''):
            q['explanation'] = f'{key_note} {q.get("explanation", "")}'.strip()
        
        updated += 1
    updated_counts[str(exam)] = updated

print('Updated counts by exam:', updated_counts)

# Sort questions systematically: Year desc, PaperSet, Section (GA first), QuestionNumber
def sort_key(q):
    y = q.get('year', 0)
    p = q.get('paperSet', '')
    sec = 0 if q.get('sectionId') == 'GA' else 1
    num = q.get('questionNumber', 0)
    return (-y, p, sec, num)

questions.sort(key=sort_key)

# Re-index numericId
for idx, q in enumerate(questions):
    q['numericId'] = idx + 1

with open('src/lib/gateQuestions.json', 'w') as f:
    json.dump(questions, f, indent=2)

print(f'Successfully updated gateQuestions.json. Total questions: {len(questions)}.')
