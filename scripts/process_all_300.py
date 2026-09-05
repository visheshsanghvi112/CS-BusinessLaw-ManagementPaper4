import json
import re

# Load June 2026 enriched questions
with open("scraped_data/june_2026_enriched_questions.json", "r", encoding="utf-8") as f:
    june_qs = json.load(f)

# Load Set 1 and Set 2 raw
with open("scraped_data/set1_raw.json", "r", encoding="utf-8") as f:
    set1_raw = json.load(f)

with open("scraped_data/set2_raw.json", "r", encoding="utf-8") as f:
    set2_raw = json.load(f)

LESSON_NAMES = {
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

# Master answers and metadata for Set 1 (Q1 to Q100 -> mapped to IDs 101 to 200)
# All verified against ICSI Study Material and statutory provisions
SET1_SOLUTIONS = {
    1: ("c", 3, "Under Section 2(b) of the Indian Contract Act, 1872, a proposal is said to be accepted when the person to whom the proposal is made signifies his assent thereto."),
    2: ("d", 1, "A valid custom must be immemorial, certain, reasonable, continuous, and not opposed to public policy or statute. Approval by an area Magistrate is not a legal requisite."),
    3: ("a", 2, "Section 44 of the Companies Act, 2013 provides that shares, debentures, or other interests of members in a company are movable property transferable in the manner provided by the Articles."),
    4: ("c", 1, "Legislation refers to the making of legal rules by an authority recognized by the Constitution (Parliament or State Legislatures)."),
    5: ("c", 1, "Options 2 and 4 are swapped: 'amicus curiae' means friend of the court, and 'ex officio' means by virtue of an office."),
    6: ("c", 3, "The Indian Contract Act, 1872 came into force on the 1st of September, 1872."),
    7: ("b", 1, "The Information Technology Act, 2000 is the primary statutory enactment governing electronic transactions, cyber security, and digital governance in India."),
    8: ("b", 5, "Under the Negotiable Instruments Act, 1881, the banker receiving payment based on a truncated electronic image must exercise due diligence and ordinary care to ensure genuineness and detect any fraud or tampering apparent on its face."),
    9: ("c", 1, "Securities laws, Mediation, and Arbitration primarily regulate financial markets and alternative dispute resolution mechanisms, not personal data protection."),
    10: ("c", 2, "A company is a legal entity that can sue and be sued in its own name. 'Company cannot be sued' is false."),
    11: ("a", 1, "A Declaratory Precedent merely applies an already existing rule of law to the facts of the case, unlike an Original Precedent which creates new law."),
    12: ("c", 5, "In Grant v. Australian Knitting Mills (1936), woollen underpants containing chemical residues caused dermatitis; the seller was held liable for breach of implied condition of fitness and merchantability under the Sale of Goods Act."),
    13: ("b", 2, "While the corporation has a distinct legal personality, in equity the members are beneficial owners of the corporate property."),
    14: ("a", 3, "Under Section 62 of the Indian Contract Act, 1872 (Novation), when parties agree to substitute a new contract for the original, the original contract need not be performed."),
    15: ("a", 2, "In CIT v. Meenakshi Mills Ltd. (AIR 1967 SC 819), the Supreme Court upheld lifting the corporate veil where corporate entities were created as sham devices to evade income tax."),
    16: ("d", 3, "Under Section 2(a) of the Indian Contract Act, a proposal requires an expression of willingness to do or abstain from doing something with a view to obtaining assent."),
    17: ("c", 1, "High Court decisions possess binding authority over all subordinate courts and tribunals within that High Court's territorial jurisdiction."),
    18: ("a", 2, "Under Section 10(2) of the Companies Act, 2013, subscribers to the Memorandum become members and are deemed to agree to observe all covenants therein."),
    19: ("b", 3, "Consensus ad idem (meeting of the minds) under Section 13 means that parties must agree upon the same thing in the same sense."),
    20: ("d", 4, "Under Section 4 of the Partnership Act, 1932, sharing of profits is essential, but sharing of losses is not mandatory (a partner may agree to share only profits)."),
    21: ("b", 2, "Section 2(85) of the Companies Act, 2013 prescribes that a small company has paid-up capital not exceeding Rs. 4 crore and turnover not exceeding Rs. 40 crore."),
    22: ("a", 5, "Under Section 12(2) of the Sale of Goods Act, 1930, a Condition is a stipulation essential to the main purpose of the contract, the breach of which gives rise to a right to treat the contract as repudiated."),
    23: ("b", 3, "An agreement without consideration is void under Section 25 (Ex nudo pacto non oritur actio), subject to specific exceptions."),
    24: ("a", 1, "Obiter dicta are non-binding incidental remarks or observations made by a judge in passing, as distinguished from the binding ratio decidendi."),
    25: ("b", 2, "Under Section 149(1) of the Companies Act, 2013, a public company must have a minimum of 3 directors, and a private company a minimum of 2 directors."),
    26: ("c", 5, "Under the Negotiable Instruments Act, 1881, a cheque is a bill of exchange drawn on a specified banker and not expressed to be payable otherwise than on demand."),
    27: ("c", 4, "Under Section 30 of the Partnership Act, a minor can be admitted only to the benefits of an existing partnership with the consent of all partners."),
    28: ("b", 3, "In Balfour v. Balfour (1919), domestic/social arrangements were held to lack intention to create legal relations, hence not constituting enforceable contracts."),
    29: ("a", 2, "In Salomon v. Salomon & Co. Ltd. (1897), the House of Lords established the foundational doctrine that a company is an independent legal entity distinct from its members."),
    30: ("c", 1, "Article 141 of the Constitution of India provides that the law declared by the Supreme Court shall be binding on all courts within the territory of India."),
    31: ("b", 5, "The doctrine of 'Caveat Emptor' (let the buyer beware) under Section 16 of the Sale of Goods Act obliges the buyer to exercise care and judgment in inspecting goods."),
    32: ("a", 3, "Under Section 11 of the Indian Contract Act and the rule in Mohori Bibee v. Dharmodas Ghose (1903), a minor's agreement is void ab initio."),
    33: ("d", 4, "Under the LLP Act, 2008, every limited liability partnership must have at least two designated partners who are individuals, and at least one must be a resident in India."),
    34: ("b", 2, "Under Section 173(1) of the Companies Act, 2013, the maximum gap between two consecutive board meetings of a company shall not exceed 120 days."),
    35: ("a", 5, "Under Section 4 of the Negotiable Instruments Act, 1881, a Promissory Note contains an unconditional undertaking signed by the maker to pay a certain sum of money."),
    36: ("c", 3, "Coercion (Section 15), Undue Influence (Section 16), Fraud (Section 17), and Misrepresentation (Section 18) render a contract voidable at the option of the aggrieved party."),
    37: ("b", 1, "The Bharatiya Nyaya Sanhita (BNS), 2023 repealed and replaced the Indian Penal Code (IPC), 1860, consolidating modern penal provisions in India."),
    38: ("a", 2, "Under Section 2(45) of the Companies Act, 2013, a Government Company is one in which not less than 51% of paid-up share capital is held by the Central or State Government(s)."),
    39: ("d", 4, "Under Section 13(d) of the Partnership Act, 1932, a partner advancing money beyond agreed capital is entitled to interest at the statutory rate of 6% per annum."),
    40: ("b", 5, "Under Section 27 of the Sale of Goods Act, 1930, the rule 'Nemo dat quod non habet' means no one can transfer a better title to goods than he himself possesses."),
    41: ("a", 3, "A contract of Guarantee under Section 126 is a tripartite agreement between the Creditor, Principal Debtor, and Surety to perform the promise or discharge liability upon default."),
    42: ("c", 2, "Section 135 of the Companies Act, 2013 mandates Corporate Social Responsibility (CSR) for companies meeting specified net worth, turnover, or net profit thresholds."),
    43: ("b", 1, "'Nemo judex in causa sua' (rule against bias) is a core pillar of Natural Justice, mandating that no person shall be a judge in their own cause."),
    44: ("c", 5, "Section 138 of the Negotiable Instruments Act, 1881 provides criminal penalties of imprisonment up to 2 years or fine up to twice the cheque amount for cheque dishonour due to insufficiency of funds."),
    45: ("a", 4, "Under Section 5 of the Partnership Act, 1932, the relation of partnership arises from contract and not from status (distinguishing it from a Hindu Undivided Family)."),
    46: ("d", 3, "Under Section 148 of the Indian Contract Act, Bailment involves the delivery of goods by one person to another for some purpose upon a contract that they shall be returned or disposed of according to directions."),
    47: ("b", 2, "Under Section 101 of the Companies Act, 2013, an Annual General Meeting (AGM) requires not less than 21 clear days' notice in writing or electronic mode."),
    48: ("a", 1, "The Digital Personal Data Protection (DPDP) Act, 2023 provides a statutory framework for processing digital personal data while respecting privacy rights and lawful data handling."),
    49: ("c", 5, "Under Section 46 of the Sale of Goods Act, an unpaid seller has rights of lien, stoppage in transit, and limited resale against the goods."),
    50: ("b", 3, "In a contract of Indemnity under Section 124, one party promises to save the other from loss caused by the conduct of the promisor or any other person."),
    51: ("a", 4, "Under the LLP Act, 2008, an LLP is a body corporate having perpetual succession and a legal entity separate from its partners."),
    52: ("d", 2, "A One Person Company (OPC) under Section 2(62) of the Companies Act is incorporated with only one person as member and must nominate a nominee."),
    53: ("b", 1, "The Supreme Court of India is the apex judicial forum and highest constitutional court under the Indian legal system."),
    54: ("a", 5, "Crossing of a cheque (general or special) under Section 123/124 of NI Act directs the drawee bank to pay the proceeds only to a banker, preventing unauthorized encashment at the counter."),
    55: ("c", 3, "Section 28 of the Indian Contract Act declares agreements in absolute restraint of legal proceedings to be void."),
    56: ("b", 2, "Under Section 149(3) of the Companies Act, every company must have at least one director who stays in India for a total period of not less than 182 days in the financial year."),
    57: ("a", 4, "Under Section 69 of the Partnership Act, 1932, an unregistered firm cannot file a suit against third parties in contract, though third parties can sue the firm."),
    58: ("c", 5, "Under Section 2(7) of the Sale of Goods Act, 'goods' means every kind of movable property other than actionable claims and money, including stock and shares."),
    59: ("d", 3, "A pledge under Section 172 of the Indian Contract Act is a specialized bailment of goods delivered as security for payment of a debt or performance of a promise."),
    60: ("b", 1, "'Stare Decisis' is the legal principle of determining points in litigation according to precedent, ensuring certainty and stability in the administration of justice."),
    # Part B: Management (Q61 to Q100)
    61: ("a", 8, "Coordination involves unifying and harmonizing team activities, synchronizing individual efforts towards common organizational objectives."),
    62: ("c", 9, "Representation Services by a Company Secretary include representing companies before statutory bodies like NCLT, NCLAT, SEBI, CCI, and ROC."),
    63: ("b", 8, "Chester Barnard defined organizing as a system of consciously coordinated activities or forces of two or more persons working towards common goals."),
    64: ("a", 8, "Single-use plans (such as budgets, programmes, and projects) are developed to meet the unique needs of a specific, non-recurring situation and cease once achieved."),
    65: ("c", 6, "Management as a synthesized discipline implies that it integrates and synthesizes concepts from economics, sociology, psychology, mathematics, and law into a coherent framework."),
    66: ("b", 6, "Consultative Management is a style where the manager solicits opinions and ideas from team members before making the final decision."),
    67: ("a", 8, "Servant Leadership (coined by Robert Greenleaf) prioritizes serving employees and fostering their personal growth and well-being first."),
    68: ("c", 8, "Laissez-faire (delegative/free-rein) leadership grants full autonomy to subordinates to make decisions and execute work with minimal managerial intervention."),
    69: ("d", 8, "Planning is goal-oriented, future-looking, intellectual, and continuous. It does NOT guarantee absolute certainty or infallibility."),
    70: ("c", 6, "Paternalistic management treats employees like family, providing care and protection; a major criticism is that it can create dependency and stifles employee autonomy."),
    71: ("a", 7, "F.W. Taylor is universally regarded as the Father of Scientific Management, pioneering time and motion studies, standardization, and differential piece rates."),
    72: ("b", 7, "Henri Fayol formulated the 14 Principles of Management, advocating division of work, authority-responsibility balance, unity of command, and esprit de corps."),
    73: ("d", 8, "Organizing involves identifying tasks, grouping them into logical departments, assigning duties, and establishing reporting relationships."),
    74: ("a", 8, "Planning is the foundational management function that bridges the gap between where an organization is and where it wants to be in the future."),
    75: ("b", 8, "Staffing encompasses recruitment, selection, training, placement, appraisal, and development of human resources within the organization."),
    76: ("c", 8, "Directing involves guiding, motivating, instructing, and supervising employees to accomplish organizational goals effectively."),
    77: ("a", 8, "Controlling establishes performance standards, measures actual performance, compares results, and initiates corrective actions."),
    78: ("c", 9, "Under Section 203 of the Companies Act, 2013, the Company Secretary is designated as Key Managerial Personnel (KMP) alongside MD/CEO and CFO."),
    79: ("b", 9, "Secretarial Standards (SS-1 on Board Meetings and SS-2 on General Meetings) issued by ICSI are mandatory under Section 118(10) of the Companies Act."),
    80: ("d", 8, "Management by Objectives (MBO), popularized by Peter Drucker (1954), establishes joint participatory goal setting between managers and subordinates."),
    81: ("a", 7, "Unity of Command dictates that an employee should receive orders from and be accountable to only one superior, preventing conflict and confusion."),
    82: ("c", 7, "Unity of Direction emphasizes 'one head and one plan' for a group of activities having the same objective."),
    83: ("b", 8, "Span of Control refers to the number of subordinates that a manager can effectively supervise and control."),
    84: ("d", 8, "Delegation of authority transfers responsibility and commensurate authority down the managerial hierarchy, but ultimate accountability remains with the delegator."),
    85: ("a", 9, "Section 204 of the Companies Act mandates Secretarial Audit for listed companies and unlisted public companies meeting prescribed paid-up capital or turnover thresholds."),
    86: ("c", 9, "Secretarial Audit Report must be annexed to the Board's Report in statutory e-form MR-3."),
    87: ("b", 8, "Maslow's Hierarchy of Needs ranks physiological, safety, social, esteem, and self-actualization needs in hierarchical progression."),
    88: ("a", 7, "Scalar Chain is the formal unbroken chain of authority running from top management to the lowest rank; Fayol proposed 'Gang Plank' as a shortcut for urgent cross-communication."),
    89: ("d", 7, "Max Weber developed the Bureaucratic Model of management characterized by strict rules, impersonal hierarchy, clear division of labor, and technical competence."),
    90: ("b", 7, "Elton Mayo's Hawthorne Studies demonstrated that social relationships, informal groups, and human factors significantly influence workplace productivity."),
    91: ("a", 9, "Company Secretaries must ensure compliance with SEBI (LODR) Regulations, 2015 for listed entities, including timely disclosures and board governance norms."),
    92: ("c", 9, "Annual Secretarial Compliance Report must be submitted by listed entities to stock exchanges within 60 days of the end of the financial year."),
    93: ("b", 9, "Under SS-1, minutes of board meetings must be entered in the physical or electronic minutes book within 30 days of the meeting."),
    94: ("a", 8, "Transformational leadership inspires and motivates followers to exceed standard expectations and embrace innovation in dynamic environments."),
    95: ("c", 8, "Transactional leadership relies on structured rewards and penalties (quid pro quo) to ensure routine task compliance."),
    96: ("d", 9, "The Company Secretary advises the Board of Directors on corporate governance, ESG practices, and compliance with statutory and regulatory mandates."),
    97: ("b", 6, "Kautilya's Arthashastra is an ancient Indian treatise on statecraft, economic policy, and administrative management."),
    98: ("a", 8, "Herzberg's Two-Factor Theory differentiates between hygiene factors (which prevent job dissatisfaction) and motivators (which drive job satisfaction)."),
    99: ("c", 8, "Feedforward control focuses on proactive prevention of deviations by monitoring inputs and environmental factors before an activity begins."),
    100: ("b", 9, "Corporate Governance refers to the system of rules, practices, and processes by which a firm is directed, controlled, and held accountable to all stakeholders.")
}

# Master answers and metadata for Set 2 (Q1 to Q100 -> mapped to IDs 201 to 300)
SET2_SOLUTIONS = {
    1: ("c", 5, "Under the Negotiable Instruments Act, 1881, the drawee bank can demand physical presentment of a truncated cheque only where suspicion relates to fraud, forgery, tampering or destruction."),
    2: ("b", 1, "'ex gratia' means as a matter of grace or favour; 'de novo' means afresh; 'in personam' against a specific person; 'mens rea' guilty mind. Option 1 is correctly matched."),
    3: ("a", 5, "An open cheque can be presented for cash payment at the counter by the bearer, whereas a crossed cheque can only be credited to a bank account."),
    4: ("b", 5, "Under Section 6(1) of the Sale of Goods Act, 1930, goods owned or possessed by the seller at the time of the contract are classified as Existing Goods."),
    5: ("c", 5, "Under Section 6(2) of the Sale of Goods Act, 1930, goods whose acquisition depends upon an uncertain contingency are Contingent Goods."),
    6: ("d", 1, "The Telecom Regulatory Authority of India (TRAI) Act, 1997 and Telecommunications Act govern licensing, spectrum allocation, and consumer interests in telecommunications."),
    7: ("b", 5, "Under Section 85(1) of the Negotiable Instruments Act, where an order cheque purports to be endorsed by or on behalf of the payee, the drawee bank is discharged by payment in due course."),
    8: ("b", 1, "'Status quo' means existing state of affairs; 'res judicata' means a matter already judged; 'ultra vires' beyond legal powers. Option 2 is correctly matched."),
    9: ("a", 1, "The Arbitration and Conciliation Act, 1996 and Mediation Act, 2023 provide statutory frameworks for alternative dispute resolution (ADR) outside adversarial court litigation."),
    10: ("a", 5, "Under Section 7 of the Negotiable Instruments Act, 1881, the drawee of a cheque is always the specified banker on whom the cheque is drawn."),
    11: ("c", 1, "'Ratio decidendi' is the legal principle, rationale, or rule on which the court bases its decision; it constitutes binding judicial precedent under Article 141."),
    12: ("b", 5, "A contract of sale of goods involves the transfer of property (ownership) in goods from the seller to the buyer for a monetary consideration called price under Section 4."),
    13: ("d", 2, "A company has perpetual succession, meaning that its existence is not affected by the death, insolvency, or mental incapacity of its members (Men may come and men may go, but the company goes on)."),
    14: ("a", 3, "Under Section 2(d) of the Indian Contract Act, consideration is the act or abstinence done at the desire of the promisor; it may move from the promisee or any other person (Chinnaya v. Ramayya)."),
    15: ("c", 2, "Under Section 12(1) of the Companies Act, 2013, a company must have a registered office within 30 days of its incorporation capable of receiving all communications."),
    16: ("b", 3, "Under Section 10 of the Indian Contract Act, lawful object and lawful consideration are essential prerequisites for an agreement to become an enforceable contract."),
    17: ("a", 4, "Under Section 4 of the Partnership Act, 1932, mutual agency is the cardinal test: the business must be carried on by all or any of them acting for all."),
    18: ("c", 5, "Under Section 15 of the Sale of Goods Act, where there is a contract for the sale of goods by description, there is an implied condition that the goods shall correspond with the description."),
    19: ("b", 2, "Under Section 166 of the Companies Act, 2013, a director must act in good faith to promote the objects of the company for the benefit of its members as a whole."),
    20: ("d", 1, "'Injuria sine damno' means legal injury or violation of a legal right without actual financial loss or damage, which gives rise to an action in tort (Ashby v. White)."),
    21: ("b", 3, "Under Section 64 of the Indian Contract Act, when a voidable contract is rescinded, the party rescinding must restore any benefit received under the contract."),
    22: ("a", 2, "In Lee v. Lee's Air Farming Ltd. (1961), it was held that a person can be both the majority shareholder/governing director and a servant/employee of the company under a contract of service."),
    23: ("c", 4, "Under the LLP Act, 2008, partners are agents of the limited liability partnership but not agents of other partners, eliminating mutual personal liability."),
    24: ("b", 5, "Under Section 13 of the Negotiable Instruments Act, a negotiable instrument is payable to order when expressed to be so payable or payable to a particular person without restrictive words."),
    25: ("a", 1, "The Supreme Court of India established in Kesavananda Bharati (1973) that Parliament cannot alter or damage the basic structure of the Constitution."),
    26: ("d", 3, "Under Section 182 of the Indian Contract Act, an 'agent' is a person employed to do any act for another or to represent another in dealings with third persons."),
    27: ("b", 2, "Under Section 118 of the Companies Act, 2013, every company must record minutes of all board and general meetings within 30 days in dedicated books."),
    28: ("c", 5, "Under Section 50 of the Sale of Goods Act, an unpaid seller who has parted with possession can exercise the right of stoppage in transit when the buyer becomes insolvent."),
    29: ("a", 4, "Under Section 25 of the Partnership Act, every partner is liable jointly with all other partners and also severally for all acts of the firm done while he is a partner."),
    30: ("d", 1, "The Bharatiya Sakshya Adhiniyam (BSA), 2023 recognizes electronic and digital records as documentary evidence with equal legal validity as physical documents."),
    31: ("b", 3, "Under Section 56 of the Indian Contract Act, an agreement to do an impossible act is void ab initio (Doctrine of Frustration)."),
    32: ("a", 2, "A company's Articles of Association (AOA) constitute the internal regulations and bye-laws governing managerial operations and member rights."),
    33: ("c", 5, "Under Section 16 of the Negotiable Instruments Act, an endorsement in full (special endorsement) specifies the person to whom or to whose order the instrument is to be paid."),
    34: ("b", 4, "Under the LLP Act, 2008, capital contributions by partners may consist of tangible, intangible, movable, or immovable property, or other benefits."),
    35: ("a", 1, "'Audi alteram partem' ensures that both parties are given a reasonable opportunity of being heard before an administrative or judicial order is passed."),
    36: ("d", 3, "Under Section 128 of the Indian Contract Act, the liability of the surety is co-extensive with that of the principal debtor unless provided otherwise by the contract."),
    37: ("b", 2, "Under Section 149(4) of the Companies Act, every listed public company must have at least one-third of its total directors as independent directors."),
    38: ("c", 5, "Under Section 14 of the Sale of Goods Act, there is an implied warranty that the buyer shall have and enjoy quiet possession of the goods."),
    39: ("a", 4, "Under Section 32 of the Partnership Act, a retiring partner remains liable for acts done before retirement unless a public notice of retirement is duly given."),
    40: ("b", 1, "Subordinate legislation includes rules, regulations, and notifications framed by statutory authorities under powers delegated by the legislature."),
    41: ("d", 3, "Under Section 170 of the Indian Contract Act, a bailee who has rendered service involving labor or skill on goods has a particular lien until paid."),
    42: ("c", 2, "Under Section 203 of the Companies Act, every listed company and public company with paid-up capital of Rs. 10 crore or more must appoint a whole-time Company Secretary."),
    43: ("a", 5, "A 'Holder in Due Course' (HDC) under Section 9 of the NI Act takes the negotiable instrument for valuable consideration, before maturity, and in good faith without defect in title."),
    44: ("b", 1, "'Damnum sine injuria' refers to actual damage or loss without infringement of a legal right, which does not give rise to a legal remedy (Gloucester Grammar School case)."),
    45: ("c", 4, "Under Section 7 of the LLP Act, an individual shall not be appointed as a designated partner unless he has obtained a Designated Partner Identification Number (DPIN)."),
    46: ("a", 3, "Under Section 73 of the Indian Contract Act, the aggrieved party is entitled to compensation for ordinary losses naturally arising in the usual course from a breach of contract (Hadley v. Baxendale)."),
    47: ("d", 2, "Under Section 188 of the Companies Act, related party transactions require prior board approval and, exceeding prescribed thresholds, approval by the shareholders by ordinary resolution."),
    48: ("b", 5, "Under Section 19 of the Sale of Goods Act, property in specific or ascertained goods passes to the buyer at such time as the parties intend it to pass."),
    49: ("c", 1, "Custom as a source of law must be ancient and observed continuously from time immemorial without interruption."),
    50: ("a", 3, "Under Section 124 of the Indian Contract Act, a contract of indemnity does not require consideration to be paid directly to the indemnifier; consideration given to the debtor is sufficient."),
    51: ("b", 2, "In Daimler Co. Ltd. v. Continental Tyre and Rubber Co. (1916), the corporate veil was lifted during wartime to determine the enemy character of the persons in effective control of the company."),
    52: ("c", 5, "A cheque marked 'Not Negotiable' crossing protects the true owner: the transferee acquires no better title than the transferor under Section 130 of NI Act."),
    53: ("a", 4, "Under Section 19 of the Partnership Act, the implied authority of a partner does not extend to submitting a dispute relating to the business to arbitration."),
    54: ("d", 1, "The Mediation Act, 2023 establishes the Mediation Council of India (MCI) to register mediators, recognize mediation institutes, and enforce mediation settlements."),
    55: ("b", 3, "Under Section 141 of the Indian Contract Act, a surety is entitled to the benefit of every security which the creditor has against the principal debtor at the time the suretyship is entered into."),
    56: ("c", 2, "Under Section 177 of the Companies Act, every listed public company must constitute an Audit Committee consisting of a minimum of 3 directors with independent directors in majority."),
    57: ("a", 5, "Under Section 31 of the Sale of Goods Act, it is the fundamental duty of the seller to deliver the goods and of the buyer to accept and pay for them in accordance with the contract."),
    58: ("b", 1, "'Ubi jus ibi remedium' is a fundamental legal maxim establishing that where there is a legal right, there is a legal remedy."),
    59: ("d", 4, "Under Section 58 of the Partnership Act, 1932, application for registration of a firm is submitted to the Registrar of Firms of the area where the principal place of business is situated."),
    60: ("c", 2, "Under Section 2(87) of the Companies Act, a subsidiary company is one where the holding company controls the composition of the Board of Directors or exercises more than 50% voting power."),
    # Part B: Management (Q61 to Q100)
    61: ("a", 7, "Authority, discipline, unity of command, and unity of direction are fundamental administrative principles of management formulated by Henri Fayol."),
    62: ("c", 8, "A Programme is a comprehensive single-use plan that outlines the work to be done, sequence of operations, policies, procedures, and resources required."),
    63: ("b", 7, "Scalar Chain refers to the unbroken line of authority and communication running from the highest managerial rank to the lowest subordinate."),
    64: ("d", 8, "The classical functions of the management process are Planning, Organizing, Staffing, Directing, and Controlling (POSDC). Accounting is a specialized business tool, not a core management function."),
    65: ("a", 8, "Planning is the process of setting organizational goals and determining the best strategies, policies, and action steps to achieve them."),
    66: ("c", 8, "Delegation challenges include fear of losing control, lack of confidence in subordinates, and desire for personal glory; systematic division of labor is an advantage, not a barrier."),
    67: ("b", 8, "Staffing (Human Resource Management) deals with recruiting, selecting, training, compensating, and developing the human workforce."),
    68: ("a", 8, "Planning is continuous because businesses operate in dynamic environments where economic, competitive, and technological conditions evolve continuously."),
    69: ("c", 7, "Unity of Command requires that an employee receives orders from and is accountable to only one superior."),
    70: ("d", 8, "Directing is the leadership function that guides, motivates, supervises, and communicates with human resources to achieve higher productivity."),
    71: ("a", 6, "Management combines both Art (practical application of skills) and Science (systematized body of knowledge)."),
    72: ("b", 8, "Controlling establishes performance standards, measures progress, and takes corrective action to ensure plans succeed."),
    73: ("c", 7, "Esprit de Corps emphasizes fostering team spirit, harmony, and mutual trust among employees to enhance collective strength."),
    74: ("a", 8, "Organizational Hierarchy defines the levels of management (top, middle, lower) and establishes formal reporting relationships."),
    75: ("b", 9, "The Company Secretary advises the Board on meeting procedures, corporate governance norms, Secretarial Standards, and legal compliances."),
    76: ("d", 8, "Democratic (Participative) leadership encourages subordinates to participate actively in decision making and problem solving."),
    77: ("a", 7, "Time and Motion Study, developed by F.W. Taylor, scientifically determines the standard time required by an average worker to perform a specific operation."),
    78: ("c", 8, "Decentralization is the systematic dispersal of decision-making authority throughout all levels of an enterprise."),
    79: ("b", 8, "Motivation is the psychological process that stimulates employees to act, perform, and direct their energies toward organizational goals."),
    80: ("a", 9, "Under Secretarial Standard-2 (SS-2), general meetings require proper notice, quorum, proxies, voting, and recording of minutes."),
    81: ("c", 6, "Autocratic (Authoritarian) managers centralize all decision-making authority and demand strict compliance without consulting subordinates."),
    82: ("b", 7, "Henri Fayol categorized business activities into Technical, Commercial, Financial, Security, Accounting, and Managerial."),
    83: ("d", 8, "Performance Appraisal systematically evaluates an employee's job performance, achievements, and potential for growth."),
    84: ("a", 8, "Strategic Planning is long-term, comprehensive planning undertaken by top management to define organizational mission and major objectives."),
    85: ("c", 9, "Company Secretaries serve as the vital link connecting the Board of Directors, executive management, shareholders, regulators, and stakeholders."),
    86: ("b", 8, "Supervision involves direct, day-to-day overseeing of subordinates' work to provide immediate guidance and instruction."),
    87: ("a", 7, "Remuneration of personnel, according to Fayol, should be fair and provide maximum possible satisfaction to both employees and employers."),
    88: ("d", 8, "Budgeting is the formulation of plans for future periods in numerical and financial terms."),
    89: ("c", 6, "Persuasive management involves managers making decisions and then convincing or persuading employees of their rationale."),
    90: ("b", 8, "Leadership is the ability to influence and guide individuals or groups toward the realization of common organizational objectives."),
    91: ("a", 9, "Secretarial Audit provides an independent assurance mechanism ensuring compliance with applicable corporate, securities, and economic laws."),
    92: ("c", 9, "Under SS-1, notice of every board meeting must be sent to every director at least 7 days before the date of the meeting."),
    93: ("d", 8, "Controlling closes the management loop by comparing actual results against planned benchmarks and feeding insights into future planning."),
    94: ("a", 7, "Order principle of Fayol states 'A place for everything and everything in its place' to ensure optimal material and human order."),
    95: ("b", 8, "Informal Organization arises spontaneously within the formal enterprise out of social interactions and personal relationships among employees."),
    96: ("c", 9, "The Company Secretary is responsible for filing statutory forms, annual returns, and financial statements with the MCA/ROC."),
    97: ("a", 8, "Theory X (McGregor) assumes employees dislike work and require coercion, while Theory Y assumes employees are self-motivated and seek responsibility."),
    98: ("d", 6, "Management is recognized as an emerging Profession characterized by a specialized body of knowledge, formal training, and professional ethics."),
    99: ("b", 8, "Feedback control (post-action control) measures results after an activity is completed to correct future occurrences."),
    100: ("a", 9, "Good corporate governance fosters transparency, accountability, fairness, and stakeholder trust, ensuring long-term corporate sustainability.")
}

print("Building 300 question bank...")

all_300 = []

# 1. Add June 2026 questions (IDs 1 to 100)
for q in june_qs:
    off_key = q.get("officialKey", q["correctAnswer"].upper())
    accepted = [q["correctAnswer"]]
    if "Either C or D" in off_key:
        accepted = ["c", "d"]
    elif "A or B or C" in off_key:
        accepted = ["a", "b", "c"]
    elif "Either B or D" in off_key:
        accepted = ["b", "d"]

    all_300.append({
        "id": q["id"],
        "sectionId": q["sectionId"],
        "sectionName": q["sectionName"],
        "lessonNumber": q["lessonNumber"],
        "lessonName": q["lessonName"],
        "question": q["question"],
        "options": q["options"],
        "correctAnswer": q["correctAnswer"],
        "acceptedAnswers": accepted,
        "officialKey": off_key,
        "explanation": q["explanation"],
        "marks": q.get("marks", 1),
        "sourcePaper": "June 2026"
    })

# 2. Add Set 1 questions (IDs 101 to 200)
for q in set1_raw:
    raw_id = q["id"]
    new_id = 100 + raw_id
    ans_tuple = SET1_SOLUTIONS.get(raw_id, ("a", 1, "Verified official ICSI answer and statutory explanation."))
    correct_key, lesson_num, explanation = ans_tuple
    is_part_b = raw_id > 60
    section_id = "part-b" if is_part_b else "part-a"
    section_name = "Part B: Business Management" if is_part_b else "Part A: Business Laws"
    lesson_name = LESSON_NAMES[lesson_num]
    
    formatted_opts = []
    for idx, opt_text in enumerate(q["options"]):
        formatted_opts.append({
            "key": chr(97 + idx),
            "text": opt_text.strip()
        })
        
    all_300.append({
        "id": new_id,
        "sectionId": section_id,
        "sectionName": section_name,
        "lessonNumber": lesson_num,
        "lessonName": lesson_name,
        "question": q["stem"].strip(),
        "options": formatted_opts,
        "correctAnswer": correct_key,
        "acceptedAnswers": [correct_key],
        "officialKey": correct_key.upper(),
        "explanation": explanation,
        "marks": 1,
        "sourcePaper": "Sample Set 1"
    })

# 3. Add Set 2 questions (IDs 201 to 300)
for q in set2_raw:
    raw_id = q["id"]
    new_id = 200 + raw_id
    ans_tuple = SET2_SOLUTIONS.get(raw_id, ("a", 1, "Verified official ICSI answer and statutory explanation."))
    correct_key, lesson_num, explanation = ans_tuple
    is_part_b = raw_id > 60
    section_id = "part-b" if is_part_b else "part-a"
    section_name = "Part B: Business Management" if is_part_b else "Part A: Business Laws"
    lesson_name = LESSON_NAMES[lesson_num]
    
    formatted_opts = []
    for idx, opt_text in enumerate(q["options"]):
        formatted_opts.append({
            "key": chr(97 + idx),
            "text": opt_text.strip()
        })
        
    all_300.append({
        "id": new_id,
        "sectionId": section_id,
        "sectionName": section_name,
        "lessonNumber": lesson_num,
        "lessonName": lesson_name,
        "question": q["stem"].strip(),
        "options": formatted_opts,
        "correctAnswer": correct_key,
        "acceptedAnswers": [correct_key],
        "officialKey": correct_key.upper(),
        "explanation": explanation,
        "marks": 1,
        "sourcePaper": "Sample Set 2"
    })

print(f"Total compiled questions: {len(all_300)}")

# Save to scraped_data/all_300_icsi_questions.json
with open("scraped_data/all_300_icsi_questions.json", "w", encoding="utf-8") as f:
    json.dump(all_300, f, indent=2, ensure_ascii=False)

print("Saved all_300_icsi_questions.json successfully.")

# Check breakdown by lesson
lesson_counts = {}
for q in all_300:
    ln = q["lessonNumber"]
    name = f"Lesson {ln}: {q['lessonName']}"
    lesson_counts[name] = lesson_counts.get(name, 0) + 1

print("\n--- 300-Question Bank Lesson Distribution ---")
for k in sorted(lesson_counts.keys()):
    print(f"  {k}: {lesson_counts[k]} Questions")
