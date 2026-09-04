import json

# Define detailed metadata for all 100 questions of the June 2026 ICSI Examination Paper
# with complete syllabus alignment and authoritative statutory/theoretical explanations.

with open("scraped_data/june_2026_raw_questions.json", "r", encoding="utf-8") as f:
    raw_qs = json.load(f)

# Lesson details lookup
LESSONS = {
    1: "Introduction to Law & Legal System",
    2: "Elements of Company Law (Companies Act, 2013)",
    3: "Elements of Law of Contracts (Indian Contract Act, 1872)",
    4: "Elements of Law Relating to Partnership & LLP",
    5: "Elements of Other Commercial Laws (Sale of Goods & NI Act)",
    6: "Introduction to Management & Managerial Roles",
    7: "Principles of Management & Classical/Modern Schools",
    8: "Core Functions of Management (POSDC & Leadership)",
    9: "Management Knowledge for Company Secretaries & Governance"
}

# Detailed mapping and authoritative rationales for all 100 questions:
METADATA = {
    1: {
        "lesson": 1,
        "explanation": "Judicial Precedents (doctrine of stare decisis) refer to past judicial decisions of superior courts (Supreme Court and High Courts) that lay down binding legal rules or principles to be followed in similar subsequent cases under Article 141 of the Constitution."
    },
    2: {
        "lesson": 1,
        "explanation": "Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023 replaced the Code of Criminal Procedure (CrPC), 1973. It consolidates and amends the law relating to criminal procedure in India, including investigation, arrest, trial, and bail."
    },
    3: {
        "lesson": 1,
        "explanation": "The Mediation Act, 2023 was enacted to promote, facilitate, and regulate voluntary and structured mediation for the amicable resolution of civil and commercial disputes before approaching courts or tribunals."
    },
    4: {
        "lesson": 1,
        "explanation": "In standard Indian law report citations, 'SCC' stands for 'Supreme Court Cases', a premier law journal published by Eastern Book Company (EBC) reporting judgments of the Supreme Court of India."
    },
    5: {
        "lesson": 1,
        "explanation": "The Digital Personal Data Protection (DPDP) Act, 2023 was enacted to provide for the processing of digital personal data in a manner that recognises both the right of individuals to protect their personal data and the need to process such data for lawful purposes."
    },
    6: {
        "lesson": 1,
        "explanation": "The Bharatiya Sakshya Adhiniyam (BSA), 2023 repealed and replaced the 151-year-old Indian Evidence Act, 1872, introducing modern provisions for electronic and digital evidence."
    },
    7: {
        "lesson": 1,
        "explanation": "'Audi alteram partem' is a fundamental maxim of the Principles of Natural Justice, which translates to 'Hear the other side' or 'No person should be condemned unheard'."
    },
    8: {
        "lesson": 2,
        "explanation": "In Gramophone & Typewriter Co. v. Stanley (1906), the English Court established that the property of a company is not the property of its shareholders; a company is an independent legal person distinct from its members."
    },
    9: {
        "lesson": 2,
        "explanation": "Section 2(20) of the Companies Act, 2013 explicitly defines a 'company' as 'a company incorporated under this Act or under any previous company law'."
    },
    10: {
        "lesson": 2,
        "explanation": "In The Workmen Employed in Associated Rubber Industries Ltd. v. Associated Rubber Industries Ltd. (1986), the Supreme Court pierced the corporate veil because the company created a wholly owned subsidiary solely to siphon off profits and reduce the statutory bonus payable to workmen under labour welfare legislation."
    },
    11: {
        "lesson": 2,
        "explanation": "Under Section 2(85) of the Companies Act, 2013 (read with relevant Central Government notification), a company is a small company if paid-up capital does not exceed Rs. 4 crore and turnover does not exceed Rs. 40 crore. Hence, a company with turnover of Rs. 50 lakhs comfortably falls within the small company threshold."
    },
    12: {
        "lesson": 2,
        "explanation": "In Smith v. Anderson (1880), the court expounded on the broad meaning of a company as an association of individuals formed for common purpose, business, or profit."
    },
    13: {
        "lesson": 2,
        "explanation": "Under Section 117 and Section 179 of the Companies Act, 2013, resolutions and agreements of specified agendas passed in board meetings and general meetings must be filed with the Registrar of Companies (ROC) in e-form MGT-14 within 30 days."
    },
    14: {
        "lesson": 2,
        "explanation": "Section 149(1) of the Companies Act, 2013 provides that a company can have a maximum of 15 directors. A company may appoint more than 15 directors only after passing a special resolution in a general meeting."
    },
    15: {
        "lesson": 2,
        "explanation": "Under Section 101(1) of the Companies Act, 2013, a general meeting may be called after giving a shorter notice (less than 21 clear days) if consent is given in writing or by electronic mode by not less than 95% of the members entitled to vote at such meeting."
    },
    16: {
        "lesson": 2,
        "explanation": "Section 2(45) of the Companies Act, 2013 defines a 'Government company' as any company in which not less than 51% of the paid-up share capital is held by the Central Government, or by any State Government(s), or partly by Central and State Governments, and includes a subsidiary of a Government company."
    },
    17: {
        "lesson": 2,
        "explanation": "Under Section 22(2) of the Companies Act, 2013 (as amended), if a company does not possess a common seal, authorization and execution of deeds/documents shall be made by two directors or by a director and the Company Secretary, wherever the company has appointed a Company Secretary."
    },
    18: {
        "lesson": 2,
        "explanation": "Section 149(4) of the Companies Act, 2013 mandates that every listed public company shall have at least one-third (1/3) of the total number of directors as independent directors."
    },
    19: {
        "lesson": 2,
        "explanation": "Under Section 149(1)(a) of the Companies Act, 2013, every private company (even if categorized as a small company) must have a minimum of two (2) directors (an OPC requires minimum one, while a public company requires three)."
    },
    20: {
        "lesson": 2,
        "explanation": "Pursuant to the Companies (Amendment) Act, 2015, the statutory minimum paid-up capital requirements (previously Rs. 1 lakh for private and Rs. 5 lakhs for public companies) were deleted, and the definition now specifies 'such paid-up capital as may be prescribed by the Central Government' (with no minimum threshold currently prescribed)."
    },
    21: {
        "lesson": 2,
        "explanation": "Under Section 174(4) of the Companies Act, 2013, if a board meeting cannot be held for want of quorum, then unless the articles otherwise provide, the meeting shall stand adjourned to the same day in the next week at the same time and place, or if that day is a national holiday, till the next succeeding day."
    },
    22: {
        "lesson": 2,
        "explanation": "Section 173(1) of the Companies Act, 2013 specifies that every company shall hold a minimum of four board meetings every year such that not more than 120 days shall intervene between two consecutive meetings of the Board."
    },
    23: {
        "lesson": 2,
        "explanation": "Under Section 173(5) of the Companies Act, 2013, a dormant company, One Person Company (OPC), and small company are deemed to have complied if at least one meeting of the Board of Directors is held in each half of a calendar year and the gap between the two meetings is not less than 90 days."
    },
    24: {
        "lesson": 2,
        "explanation": "Section 149(3) of the Companies Act, 2013 mandates that every company shall have at least one director who stays in India for a total period of not less than 182 days during the financial year."
    },
    25: {
        "lesson": 2,
        "explanation": "Section 149(6) of the Companies Act, 2013 sets disqualifications for independent directors: a promoter, relative of a promoter/director, or an employee/KMP of the company or its holding/subsidiary cannot be appointed as an independent director."
    },
    26: {
        "lesson": 3,
        "explanation": "Section 124 of the Indian Contract Act, 1872 defines a 'Contract of Indemnity' as a contract by which one party promises to save the other from loss caused to him by the conduct of the promisor himself, or by the conduct of any other person."
    },
    27: {
        "lesson": 3,
        "explanation": "Section 172 of the Indian Contract Act, 1872 defines 'Pledge' as the bailment of goods as security for payment of a debt or performance of a promise. The depositor of the security is called the pawnor/pledgor and the bailee is called pawnee/pledgee."
    },
    28: {
        "lesson": 3,
        "explanation": "Section 7 of the Indian Contract Act, 1872 mandates that in order to convert a proposal into a promise, the acceptance must be absolute and unqualified, and expressed in some usual and reasonable manner."
    },
    29: {
        "lesson": 3,
        "explanation": "Section 182 of the Indian Contract Act, 1872 defines an 'Agent' as a person employed to do any act for another, or to represent another in dealings with third persons."
    },
    30: {
        "lesson": 3,
        "explanation": "In the landmark Privy Council judgment of Mohori Bibee v. Dharmodas Ghose (1903), it was settled that an agreement entered into by a minor is completely void ab initio (void from the very beginning) under Section 11 of the Indian Contract Act."
    },
    31: {
        "lesson": 3,
        "explanation": "Section 148 of the Indian Contract Act, 1872 defines Bailment as delivery of goods by one person to another for some purpose upon a contract that they shall be returned or disposed of. Delivery of possession is essential; an outright sale or transfer of absolute ownership without return is NOT bailment."
    },
    32: {
        "lesson": 3,
        "explanation": "As established in Balfour v. Balfour (1919), social and domestic invitations (like a dinner invitation) lack the intention to create legal relations, which is an essential prerequisite for a valid, enforceable contract under Section 10 of the Contract Act."
    },
    33: {
        "lesson": 3,
        "explanation": "Section 11 of the Indian Contract Act, 1872 establishes that a minor, a person of unsound mind, and a person disqualified from contracting by any law (such as an alien enemy or an undischarged insolvent) are not competent to contract."
    },
    34: {
        "lesson": 3,
        "explanation": "Under Section 62 of the Indian Contract Act, 1872, 'Rescission' means the cancellation of the contract by mutual agreement between the parties at any time before it is discharged, releasing both parties from performance obligations."
    },
    35: {
        "lesson": 5,
        "explanation": "Section 12(3) of the Sale of Goods Act, 1930 defines a warranty as a stipulation collateral to the main purpose of the contract, the breach of which gives rise to a claim for damages, but not to a right to reject the goods and treat the contract as repudiated."
    },
    36: {
        "lesson": 4,
        "explanation": "Section 32 of the Limited Liability Partnership (LLP) Act, 2008 provides that a partner's contribution may consist of tangible, movable or immovable property, intangible property, cash, promissory notes, or other agreements to contribute cash or property."
    },
    37: {
        "lesson": 4,
        "explanation": "Under Section 3 of the LLP Act, 2008, an LLP is a body corporate and a separate legal entity with perpetual succession; the partners have limited liability and are not personally liable for the debts of the LLP, unlike a traditional partnership."
    },
    38: {
        "lesson": 4,
        "explanation": "Under Section 4 of the Indian Partnership Act, 1932, the essential elements of a partnership are: an agreement, two or more persons, carrying on a business, sharing of profits, and mutual agency. Equal capital contribution or equal profit sharing is NOT an essential requirement."
    },
    39: {
        "lesson": 4,
        "explanation": "Under Rule 24 of the LLP Rules, 2009, every Limited Liability Partnership shall ensure that decisions taken by it are recorded in the minutes of the meetings within 30 days of taking such decisions."
    },
    40: {
        "lesson": 4,
        "explanation": "Under the First Schedule to the LLP Act, 2008 (in the absence of an agreement), ordinary matters relating to the LLP are decided by a resolution passed by a majority of partners, but no change in the nature of business may be made without the consent of all partners."
    },
    41: {
        "lesson": 4,
        "explanation": "A 'Nominal Partner' is one who lends his name to the partnership firm without having any real interest in the business, neither contributing capital nor participating in the management or profits, yet remains liable to third parties for all firm debts."
    },
    42: {
        "lesson": 4,
        "explanation": "Under the Indian Partnership Act, 1932, Section 2(b) defines 'business' as including every trade, occupation, and profession."
    },
    43: {
        "lesson": 4,
        "explanation": "Section 10 of the Indian Partnership Act, 1932 enacts an absolute statutory duty: 'Every partner shall indemnify the firm for any loss caused to it by his fraud in the conduct of the business of the firm.' This duty cannot be excluded by contract."
    },
    44: {
        "lesson": 4,
        "explanation": "Section 5 of the Indian Partnership Act, 1932 explicitly provides that the relation of partnership arises from contract and not from status (such as Hindu Undivided Family / joint family members)."
    },
    45: {
        "lesson": 4,
        "explanation": "Section 13(d) of the Indian Partnership Act, 1932 states that a partner making, for the purpose of the business, any payment or advance beyond the amount of capital he has agreed to subscribe, is entitled to interest thereon at the rate of six per cent (6%) per annum."
    },
    46: {
        "lesson": 5,
        "explanation": "Section 12(2) of the Sale of Goods Act, 1930 defines a 'condition' as a stipulation essential to the main purpose of the contract, the breach of which gives rise to a right to treat the contract as repudiated."
    },
    47: {
        "lesson": 5,
        "explanation": "Section 27 of the Sale of Goods Act, 1930 is based on the Latin maxim 'Nemo dat quod non habet', which means 'No one can transfer a better title than he himself possesses'."
    },
    48: {
        "lesson": 5,
        "explanation": "Section 4 of the Negotiable Instruments Act, 1881 defines a Promissory Note as an instrument in writing containing an unconditional undertaking signed by the maker to pay a certain sum of money only to, or to the order of, a certain person, or to the bearer."
    },
    49: {
        "lesson": 5,
        "explanation": "Section 16(1) of the Negotiable Instruments Act, 1881 states that if the endorser signs his name and adds a direction to pay the amount mentioned in the instrument to, or to the order of, a specified person, the endorsement is said to be 'in full' (or a Special Endorsement)."
    },
    50: {
        "lesson": 5,
        "explanation": "Under Section 16 of the Sale of Goods Act, 1930, the rule of 'Caveat Emptor' (let the buyer beware) applies, meaning the seller is under no general duty to disclose latent non-fraudulent defects; the buyer must examine the goods and satisfy himself."
    },
    51: {
        "lesson": 3,
        "explanation": "Section 140 of the Indian Contract Act, 1872 lays down the Doctrine of Subrogation: when a guaranteed debt has become due or default has taken place, and the surety pays off all that he is liable for, he is invested with all the rights which the creditor had against the principal debtor."
    },
    52: {
        "lesson": 5,
        "explanation": "Pursuant to Reserve Bank of India (RBI) directives under the Negotiable Instruments Act, the period of validity for presenting a cheque or draft for payment is three (3) months from the date of the instrument."
    },
    53: {
        "lesson": 5,
        "explanation": "Section 91 of the Negotiable Instruments Act, 1881 provides that a bill of exchange is dishonoured by non-acceptance when the drawee makes default in acceptance upon being duly required to accept the bill, or where presentment is excused and the bill remains unaccepted."
    },
    54: {
        "lesson": 5,
        "explanation": "Section 50 of the Sale of Goods Act, 1930 grants an unpaid seller the right of stoppage in transit when the buyer becomes insolvent and the goods are in transit, allowing the seller to resume possession until payment."
    },
    55: {
        "lesson": 5,
        "explanation": "Section 11 of the Negotiable Instruments Act, 1881 defines an 'inland instrument' as a promissory note, bill of exchange or cheque drawn or made in India and made payable in, or drawn upon any person resident in India."
    },
    56: {
        "lesson": 4,
        "explanation": "Section 30 of the Indian Partnership Act, 1932 states that a minor admitted to the benefits of partnership has a right to share property and profits and inspect accounts, but his share alone is liable for firm acts; the minor is not personally liable."
    },
    57: {
        "lesson": 5,
        "explanation": "Under Sections 14 to 17 of the Sale of Goods Act, 1930, implied warranties include quiet possession and freedom from encumbrances, while title, description, and sample are implied conditions. The ICSI official answer key accepted both C and D for this question."
    },
    58: {
        "lesson": 5,
        "explanation": "Section 21 of the Negotiable Instruments Act, 1881 explains that in a promissory note or bill of exchange, the expressions 'after sight' mean in a promissory note, after presentment for sight, and in a bill of exchange, after acceptance, or noting for non-acceptance, or protest for non-acceptance."
    },
    59: {
        "lesson": 5,
        "explanation": "Section 15 of the Negotiable Instruments Act, 1881 defines 'Endorsement': when the maker or holder of a negotiable instrument signs the same, otherwise than as such maker, for the purpose of negotiation, on the back or face thereof, he is said to endorse the same."
    },
    60: {
        "lesson": 5,
        "explanation": "Section 13(1) of the Negotiable Instruments Act, 1881 defines a negotiable instrument as 'a promissory note, bill of exchange or cheque payable either to order or to bearer'."
    },
    61: {
        "lesson": 6,
        "explanation": "Kautilya's (Chanakya's) Arthashastra is an ancient Indian treatise on statecraft, economic policy, state administration, and military strategy, widely recognized in Indian management history."
    },
    62: {
        "lesson": 7,
        "explanation": "Frederick Winslow Taylor (F.W. Taylor) pioneered Scientific Management, aiming to improve economic efficiency and labor productivity through time and motion studies, standardization, and scientific job analysis."
    },
    63: {
        "lesson": 6,
        "explanation": "Persuasive management is a style where managers use persuasion, reasoning, and explanation to convince employees to accept decisions, retaining final decision-making power while fostering open communication."
    },
    64: {
        "lesson": 6,
        "explanation": "Management is a universal, multi-dimensional, continuous process involving both art and science, and is present across all organizational levels and types."
    },
    65: {
        "lesson": 8,
        "explanation": "Autocratic (authoritarian) management is characterized by centralized authority, unilateral top-down decision-making, and minimal consultation with subordinates. ICSI accepted A, B, or C due to overlapping descriptive phrasing."
    },
    66: {
        "lesson": 8,
        "explanation": "Democratic (participative) management is most effective in environments where employee input, creativity, specialized knowledge, and collaboration are essential to achieving high-quality outcomes."
    },
    67: {
        "lesson": 8,
        "explanation": "Transformational leadership is most impactful in dynamic, rapidly changing environments that require vision, innovation, radical organizational reform, and employee inspiration."
    },
    68: {
        "lesson": 8,
        "explanation": "Servant leadership (conceptualized by Robert K. Greenleaf) is a paradox because traditional leadership associates leading with power and command, whereas servant leadership asserts that the leader's primary duty is to serve followers first."
    },
    69: {
        "lesson": 8,
        "explanation": "In servant leadership, active, empathetic listening is the core discipline through which leaders understand the needs, aspirations, and challenges of team members before taking action."
    },
    70: {
        "lesson": 8,
        "explanation": "The first step in the organizing process is the identification and division of total work into manageable activities according to predetermined plans."
    },
    71: {
        "lesson": 8,
        "explanation": "Performance appraisal is the systematic evaluation of the performance of employees and understanding the abilities of a person for further growth and development."
    },
    72: {
        "lesson": 8,
        "explanation": "Laissez-faire (free-rein) leadership grants complete autonomy and freedom to subordinates to establish their own goals, make decisions, and resolve problems with minimal managerial interference."
    },
    73: {
        "lesson": 8,
        "explanation": "Planning is the primary and fundamental function of management that precedes all other functions (Organizing, Staffing, Directing, Controlling); it determines the baseline objectives."
    },
    74: {
        "lesson": 8,
        "explanation": "Authority and responsibility establish the formal hierarchical relationship between superiors and subordinates in an organization."
    },
    75: {
        "lesson": 8,
        "explanation": "Delegation of authority consists of three essential elements: assigning responsibility (duties), granting requisite authority, and creating accountability for results."
    },
    76: {
        "lesson": 8,
        "explanation": "Synergy refers to the concept where the combined output or effect of a group working together is greater than the sum of their individual separate efforts (2 + 2 = 5 effect)."
    },
    77: {
        "lesson": 8,
        "explanation": "In human resource management, the final step in the selection process is the job offer followed by the contract of employment."
    },
    78: {
        "lesson": 8,
        "explanation": "Recruitment is defined as the process of searching for prospective employees and stimulating or encouraging them to apply for jobs in the organization (a positive process, whereas selection is negative)."
    },
    79: {
        "lesson": 8,
        "explanation": "Pervasiveness of planning means that planning is not an exclusive function of top management; it is required and performed at all levels and departments of an organization."
    },
    80: {
        "lesson": 8,
        "explanation": "Management reporting is designed to communicate operational and financial performance to decision-makers in clear, concise tabular, graphical, and narrative formats."
    },
    81: {
        "lesson": 7,
        "explanation": "Frederick Winslow Taylor (F.W. Taylor) is universally acclaimed as the 'Father of Scientific Management' (Henri Fayol is the father of Administrative/Modern Management)."
    },
    82: {
        "lesson": 7,
        "explanation": "Henri Fayol's principle of 'Unity of Command' stipulates that an employee should receive orders and be accountable to only one direct superior, preventing confusion and conflicting instructions."
    },
    83: {
        "lesson": 8,
        "explanation": "The Situational Leadership Theory (Hersey and Blanchard) asserts that effective leaders must adapt their leadership style according to the maturity, readiness, and competence of followers."
    },
    84: {
        "lesson": 8,
        "explanation": "Budgetary control is a key quantitative control technique where actual performance is systematically compared against predefined budgetary benchmarks to identify variances and take corrective action."
    },
    85: {
        "lesson": 9,
        "explanation": "Under Section 204 of the Companies Act, 2013 read with Rule 9 of the Companies (Appointment and Remuneration of Managerial Personnel) Rules, 2014, secretarial audit is mandatory for every unlisted public company having a turnover of Rs. 250 crore or more (or paid-up share capital of Rs. 50 crore or more)."
    },
    86: {
        "lesson": 9,
        "explanation": "Advising corporate clients on statutory compliance regarding environmental laws, labor laws, and industrial regulations forms an integral part of Corporate Law Advisory and Compliance Services rendered by a Practicing Company Secretary (PCS)."
    },
    87: {
        "lesson": 8,
        "explanation": "MOST Analysis is a strategic planning framework that stands for: Mission, Objectives, Strategy, and Tactics."
    },
    88: {
        "lesson": 7,
        "explanation": "According to Henri Fayol, the core purpose of the principle of 'Division of Work' is to produce more and better work with the same effort by fostering specialization in technical and managerial work."
    },
    89: {
        "lesson": 7,
        "explanation": "The principle 'Specialization increases efficiency' directly refers to the Division of Work, wherein dividing tasks into specialized components leads to higher speed and precision."
    },
    90: {
        "lesson": 7,
        "explanation": "Fayol's principle of 'Subordination of Individual Interest to General Interest' dictates that the collective goals and interests of the organization must supersede the personal or sectarian interests of any individual employee."
    },
    91: {
        "lesson": 9,
        "explanation": "Convening and arranging Board and General Meetings, issuing statutory notices, and preparing and recording accurate minutes (pursuant to SS-1 and SS-2) falls directly under Corporate Secretarial Services of a Company Secretary."
    },
    92: {
        "lesson": 9,
        "explanation": "Audit and certification in relation to Reconciliation of Share Capital under SEBI (Depositories and Participants) Regulations is categorized under Securities Compliance and Certification Services performed by a PCS."
    },
    93: {
        "lesson": 9,
        "explanation": "Under Regulation 24A of SEBI (LODR) Regulations, 2015, every listed company must submit an Annual Secretarial Compliance Report issued by a PCS to the recognized stock exchanges within 60 days from the end of each financial year."
    },
    94: {
        "lesson": 8,
        "explanation": "A recognized demerit/challenge of transformational management is that it requires an exceptionally high level of personal charisma, emotional intelligence, and continuous energy from the leader, which can lead to executive burnout or over-dependence."
    },
    95: {
        "lesson": 8,
        "explanation": "Management by Objectives (MBO), introduced by Peter Drucker in 1954, is recognized as a modern, collaborative goal-setting and performance appraisal approach to management."
    },
    96: {
        "lesson": 9,
        "explanation": "A Company Secretary in employment acts as a Key Managerial Personnel (KMP) under Section 203 of the Companies Act, 2013, actively contributing to organizational coordination and optimum resource utilization. ICSI accepted B (Organizing) or D (All of the above)."
    },
    97: {
        "lesson": 9,
        "explanation": "Facilitating and conducting Board meetings through electronic mode (video conferencing or other audio-visual means) under Section 173(2) and Rule 3 of Companies (Meetings of Board and its Powers) Rules falls under Information Technology and Corporate Governance services."
    },
    98: {
        "lesson": 9,
        "explanation": "Advising corporate entities on procedural compliance regarding environmental, pollution control, and allied commercial laws is categorized under Corporate Laws Advisory Services rendered by a CS."
    },
    99: {
        "lesson": 9,
        "explanation": "Under Section 2(51) and Section 203 of the Companies Act, 2013, the Company Secretary is statutorily designated as a Key Managerial Personnel (KMP) alongside the MD/CEO, Whole-time Director, and CFO."
    },
    100: {
        "lesson": 9,
        "explanation": "The Company Secretary plays an indispensable role as a primary Governance Professional, advising the Board of Directors on corporate governance, ethics, sustainability, and compliance with Secretarial Standards."
    }
}

enriched_questions = []
for q in raw_qs:
    q_id = q["id"]
    meta = METADATA.get(q_id, {})
    lesson_num = meta.get("lesson", 1 if q_id <= 7 else (2 if q_id <= 25 else 8))
    lesson_name = LESSONS.get(lesson_num, "General")
    
    enriched_questions.append({
        "id": q_id,
        "sectionId": q["sectionId"],
        "sectionName": q["sectionName"],
        "lessonNumber": lesson_num,
        "lessonName": lesson_name,
        "question": q["question"],
        "options": q["options"],
        "correctAnswer": q["correctAnswer"],
        "explanation": meta.get("explanation", "Statutory requirement under the relevant Act / ICSI study material."),
        "marks": 1,
        "officialKey": q["officialKey"]
    })

with open("scraped_data/june_2026_enriched_questions.json", "w", encoding="utf-8") as f:
    json.dump(enriched_questions, f, indent=2, ensure_ascii=False)

print(f"Successfully generated enriched dataset for all {len(enriched_questions)} questions!")
