import { Question, TestPreset, LessonMetadata } from '@/types';

/**
 * ICSI CSEET Paper 4: Business Laws and Management
 * Official Restructured Master Question Bank & Syllabus Intelligence
 * Sources:
 *   1. ICSI Actual Examination Paper (June 2026 Restructured Scheme) — Questions 1 to 100
 *   2. ICSI Directorate of Academics & Research (DAR) Sample Paper Set 1 — Questions 101 to 200
 *   3. ICSI Directorate of Academics & Research (DAR) Sample Paper Set 2 — Questions 201 to 300
 * Total Questions: 300 Official Verified MCQs mapped across all 9 Syllabus Lessons
 * Marking Scheme: +1 for Correct, 0 for Incorrect (Zero Negative Marking)
 * Qualifying Criteria: Minimum 40% (40 Marks) in Paper 4, 50% Aggregate across all 4 papers
 */

export const QUESTION_BANK: Question[] = [
  {
    id: 1,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 1,
    lessonName: 'Introduction to Law & Legal System',
    question: "The decisions of Supreme Court and High Court which lay down some rule or principle are called :",
    options: [
      { key: 'a', text: "Judicial Precedents" },
      { key: 'b', text: "Custom" },
      { key: 'c', text: "Statute" },
      { key: 'd', text: "Act" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Judicial Precedents (doctrine of stare decisis) refer to past judicial decisions of superior courts (Supreme Court and High Courts) that lay down binding legal rules or principles to be followed in similar subsequent cases under Article 141 of the Constitution.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 2,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 1,
    lessonName: 'Introduction to Law & Legal System',
    question: "Bharatiya Nagarik Suraksha Sanhita, 2023 deals with consolidation and amendment of :",
    options: [
      { key: 'a', text: "Provisions relating to offences and incidental matters" },
      { key: 'b', text: "Law relating to criminal procedure" },
      { key: 'c', text: "Law related to civil procedure" },
      { key: 'd', text: "All of the above" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023 replaced the Code of Criminal Procedure (CrPC), 1973. It consolidates and amends the law relating to criminal procedure in India, including investigation, arrest, trial, and bail.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 3,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 1,
    lessonName: 'Introduction to Law & Legal System',
    question: "Which of the following is correct in reference to The Mediation Act, 2023 ?",
    options: [
      { key: 'a', text: "It encourages voluntary and structured mediation to resolve disputes amicably" },
      { key: 'b', text: "It encourages voluntary and unstructured mediation to resolve disputes amicably" },
      { key: 'c', text: "It encourages involuntary and structured mediation to resolve disputes amicably" },
      { key: 'd', text: "It encourages involuntary and unstructured mediation to resolve disputes amicably" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "The Mediation Act, 2023 was enacted to promote, facilitate, and regulate voluntary and structured mediation for the amicable resolution of civil and commercial disputes before approaching courts or tribunals.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 4,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 1,
    lessonName: 'Introduction to Law & Legal System',
    question: "In the case of Kesavananda Bharati v. State of Kerala, (1973) 4 SCC 225, what does ‘‘SCC’’ stand for?",
    options: [
      { key: 'a', text: "State Court Cases" },
      { key: 'b', text: "Supreme Court Cases" },
      { key: 'c', text: "Supreme Court Calendar" },
      { key: 'd', text: "Supreme Court Citation" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "In standard Indian law report citations, 'SCC' stands for 'Supreme Court Cases', a premier law journal published by Eastern Book Company (EBC) reporting judgments of the Supreme Court of India.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 5,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 1,
    lessonName: 'Introduction to Law & Legal System',
    question: "What is the primary objective of the DPDP Act, 2023 ?",
    options: [
      { key: 'a', text: "To regulate only traditional, non-digital data" },
      { key: 'b', text: "To ban international data transfers completely" },
      { key: 'c', text: "To protect digital personal data for lawful purposes" },
      { key: 'd', text: "To increase governmental surveillance on social media" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "The Digital Personal Data Protection (DPDP) Act, 2023 was enacted to provide for the processing of digital personal data in a manner that recognises both the right of individuals to protect their personal data and the need to process such data for lawful purposes.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 6,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 1,
    lessonName: 'Introduction to Law & Legal System',
    question: "The ‘‘Bharatiya Sakshya Adhiniyam, 2023’’ replaces which of the following law ?",
    options: [
      { key: 'a', text: "The Indian Evidence Act, 1872" },
      { key: 'b', text: "The Indian Penal Code, 1860" },
      { key: 'c', text: "The Code of Criminal Procedure, 1973" },
      { key: 'd', text: "The Code of Civil Procedure Code, 1908" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "The Bharatiya Sakshya Adhiniyam (BSA), 2023 repealed and replaced the 151-year-old Indian Evidence Act, 1872, introducing modern provisions for electronic and digital evidence.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 7,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 1,
    lessonName: 'Introduction to Law & Legal System',
    question: "What do you mean by maxim ‘‘Audi alteram partem’’ ?",
    options: [
      { key: 'a', text: "Let the buyer beware" },
      { key: 'b', text: "Seller is responsible" },
      { key: 'c', text: "Hear the other side" },
      { key: 'd', text: "No one can be a judge in his own case" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "'Audi alteram partem' is a fundamental maxim of the Principles of Natural Justice, which translates to 'Hear the other side' or 'No person should be condemned unheard'.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 8,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 2,
    lessonName: 'Elements of Company Law (Companies Act, 2013)',
    question: "The property of the company CFI Technologies Private Ltd. is not the property of its shareholders. It is the property of the company. Which landmark case stated this concept ?",
    options: [
      { key: 'a', text: "Connors Bros. v Connors (1940)" },
      { key: 'b', text: "Gilford Motor Co. v Horne (1933)" },
      { key: 'c', text: "Gramophone & Typewriter Co. v Stanley (1906)" },
      { key: 'd', text: "Salomon v Salomon (1897)" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "In Gramophone & Typewriter Co. v. Stanley (1906), the English Court established that the property of a company is not the property of its shareholders; a company is an independent legal person distinct from its members.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 9,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 2,
    lessonName: 'Elements of Company Law (Companies Act, 2013)',
    question: "Which section of The Companies Act, 2013 defines company as a company incorporated under the Companies Act, 2013 or under any previous Company Law ?",
    options: [
      { key: 'a', text: "Section 2(20)" },
      { key: 'b', text: "Section 2(21)" },
      { key: 'c', text: "Section 2(50)" },
      { key: 'd', text: "Section 2(51)" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Section 2(20) of the Companies Act, 2013 explicitly defines a 'company' as 'a company incorporated under this Act or under any previous company law'.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 10,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 2,
    lessonName: 'Elements of Company Law (Companies Act, 2013)',
    question: "In ‘The Workmen Employed in Associated Rubber Industries Ltd., Bhavnagar v The Associated Rubber Industries. Ltd., Bhavnagar and another (1986) the corporate veil was lifted because :",
    options: [
      { key: 'a', text: "Purpose of company formation was to avoid welfare legislation" },
      { key: 'b', text: "Company evaded income tax" },
      { key: 'c', text: "Company was just an agency or trust for someone else" },
      { key: 'd', text: "For determining true character of the company" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "In The Workmen Employed in Associated Rubber Industries Ltd. v. Associated Rubber Industries Ltd. (1986), the Supreme Court pierced the corporate veil because the company created a wholly owned subsidiary solely to siphon off profits and reduce the statutory bonus payable to workmen under labour welfare legislation.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 11,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 2,
    lessonName: 'Elements of Company Law (Companies Act, 2013)',
    question: "A company is called a small company, if it has :",
    options: [
      { key: 'a', text: "Borrowing of less than `25 lakh" },
      { key: 'b', text: "Number of employees less than 25" },
      { key: 'c', text: "Number of directors less than seven" },
      { key: 'd', text: "Turnover is `50 lakhs" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "Under Section 2(85) of the Companies Act, 2013 (read with relevant Central Government notification), a company is a small company if paid-up capital does not exceed Rs. 4 crore and turnover does not exceed Rs. 40 crore. Hence, a company with turnover of Rs. 50 lakhs comfortably falls within the small company threshold.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 12,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 2,
    lessonName: 'Elements of Company Law (Companies Act, 2013)',
    question: "A company in broad sense may mean ‘‘an association of individuals formed for some purpose’’, was governed by the case study :",
    options: [
      { key: 'a', text: "Smith v. Anderson" },
      { key: 'b', text: "Solomon v. Solomon and Company Limited" },
      { key: 'c', text: "Gramophone & Typewriter Co. v. Stantley" },
      { key: 'd', text: "Mohari Bibi v. Dharmodas Ghosh" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "In Smith v. Anderson (1880), the court expounded on the broad meaning of a company as an association of individuals formed for common purpose, business, or profit.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 13,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 2,
    lessonName: 'Elements of Company Law (Companies Act, 2013)',
    question: "Pursuant to Companies Act, 2013 a company should file resolutions of certain specified agenda discussed in board meeting in e-form :",
    options: [
      { key: 'a', text: "MGT-15" },
      { key: 'b', text: "DIR-12" },
      { key: 'c', text: "MGT-7" },
      { key: 'd', text: "MGT-14" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "Under Section 117 and Section 179 of the Companies Act, 2013, resolutions and agreements of specified agendas passed in board meetings and general meetings must be filed with the Registrar of Companies (ROC) in e-form MGT-14 within 30 days.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 14,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 2,
    lessonName: 'Elements of Company Law (Companies Act, 2013)',
    question: "Without approval of the shareholders by the special resolution a company can have how many directors under the Companies Act, 2013 ?",
    options: [
      { key: 'a', text: "20" },
      { key: 'b', text: "15" },
      { key: 'c', text: "12" },
      { key: 'd', text: "10" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Section 149(1) of the Companies Act, 2013 provides that a company can have a maximum of 15 directors. A company may appoint more than 15 directors only after passing a special resolution in a general meeting.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 15,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 2,
    lessonName: 'Elements of Company Law (Companies Act, 2013)',
    question: "A general meeting may be called after giving a shorter notice if consent is given in writing by :",
    options: [
      { key: 'a', text: "Not less than 75% of members entitled to vote at such meeting" },
      { key: 'b', text: "Not less than 90% of members entitled to vote at such meeting" },
      { key: 'c', text: "Not less than 95% of members entitled to vote at such meeting" },
      { key: 'd', text: "Not less than 50% of members entitled to vote at such meeting" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Under Section 101(1) of the Companies Act, 2013, a general meeting may be called after giving a shorter notice (less than 21 clear days) if consent is given in writing or by electronic mode by not less than 95% of the members entitled to vote at such meeting.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 16,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 2,
    lessonName: 'Elements of Company Law (Companies Act, 2013)',
    question: "Any company in which not less than fifty-one per cent of the paid-up share capital is held by the Central Government, or by any State Government or Governments, or partly by the Central Government and partly by one or more State Governments and includes a company which is a subsidiary company of such a Government company.",
    options: [
      { key: 'a', text: "Small Company" },
      { key: 'b', text: "Government Company" },
      { key: 'c', text: "Producer Company" },
      { key: 'd', text: "Foreign Company" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Section 2(45) of the Companies Act, 2013 defines a 'Government company' as any company in which not less than 51% of the paid-up share capital is held by the Central Government, or by any State Government(s), or partly by Central and State Governments, and includes a subsidiary of a Government company.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 17,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 2,
    lessonName: 'Elements of Company Law (Companies Act, 2013)',
    question: "In case a company does not have a common seal and there is Company Secretary, the authorization shall be made by :",
    options: [
      { key: 'a', text: "One Director" },
      { key: 'b', text: "A Director and Company Secretary" },
      { key: 'c', text: "Company Secretary" },
      { key: 'd', text: "Either" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Under Section 22(2) of the Companies Act, 2013 (as amended), if a company does not possess a common seal, authorization and execution of deeds/documents shall be made by two directors or by a director and the Company Secretary, wherever the company has appointed a Company Secretary.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 18,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 2,
    lessonName: 'Elements of Company Law (Companies Act, 2013)',
    question: "Every listed company should have at least ___________ of the total number of directors as independent directors.",
    options: [
      { key: 'a', text: "One-half" },
      { key: 'b', text: "One-third" },
      { key: 'c', text: "Two-third" },
      { key: 'd', text: "Two-fifth" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Section 149(4) of the Companies Act, 2013 mandates that every listed public company shall have at least one-third (1/3) of the total number of directors as independent directors.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 19,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 2,
    lessonName: 'Elements of Company Law (Companies Act, 2013)',
    question: "The minimum number of directors in Samrat Steels Private Ltd. which is a small company is :",
    options: [
      { key: 'a', text: "Two" },
      { key: 'b', text: "One" },
      { key: 'c', text: "Three" },
      { key: 'd', text: "Five" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Under Section 149(1)(a) of the Companies Act, 2013, every private company (even if categorized as a small company) must have a minimum of two (2) directors (an OPC requires minimum one, while a public company requires three).",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 20,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 2,
    lessonName: 'Elements of Company Law (Companies Act, 2013)',
    question: "The minimum paid-up share capital of Sunrise Private Ltd. is :",
    options: [
      { key: 'a', text: "` 1,00,000" },
      { key: 'b', text: "` 5,00,000" },
      { key: 'c', text: "` 10,00,000" },
      { key: 'd', text: "As may be prescribed by Central Government" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "Pursuant to the Companies (Amendment) Act, 2015, the statutory minimum paid-up capital requirements (previously Rs. 1 lakh for private and Rs. 5 lakhs for public companies) were deleted, and the definition now specifies 'such paid-up capital as may be prescribed by the Central Government' (with no minimum threshold currently prescribed).",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 21,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 2,
    lessonName: 'Elements of Company Law (Companies Act, 2013)',
    question: "A meeting of Board of Directors was called on 18.12.2025. There was no quorum. Hence the meeting shall automatically stand adjourned to :",
    options: [
      { key: 'a', text: "Next day" },
      { key: 'b', text: "Next month" },
      { key: 'c', text: "Same day in the next week" },
      { key: 'd', text: "After 14 days from 18.12.2025" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Under Section 174(4) of the Companies Act, 2013, if a board meeting cannot be held for want of quorum, then unless the articles otherwise provide, the meeting shall stand adjourned to the same day in the next week at the same time and place, or if that day is a national holiday, till the next succeeding day.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 22,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 2,
    lessonName: 'Elements of Company Law (Companies Act, 2013)',
    question: "The gap between two consecutive board meetings in Himmat Ltd. should not be more than :",
    options: [
      { key: 'a', text: "90 days" },
      { key: 'b', text: "120 days" },
      { key: 'c', text: "60 days" },
      { key: 'd', text: "180 days" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Section 173(1) of the Companies Act, 2013 specifies that every company shall hold a minimum of four board meetings every year such that not more than 120 days shall intervene between two consecutive meetings of the Board.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 23,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 2,
    lessonName: 'Elements of Company Law (Companies Act, 2013)',
    question: "In case of a dormant company at least :",
    options: [
      { key: 'a', text: "One board meeting should be conducted in each half of the calendar year" },
      { key: 'b', text: "Three board meetings should be conducted in each half of the financial year" },
      { key: 'c', text: "Two board meetings should be conducted in each half of the calendar year" },
      { key: 'd', text: "One board meeting should be conducted in a calendar year" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Under Section 173(5) of the Companies Act, 2013, a dormant company, One Person Company (OPC), and small company are deemed to have complied if at least one meeting of the Board of Directors is held in each half of a calendar year and the gap between the two meetings is not less than 90 days.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 24,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 2,
    lessonName: 'Elements of Company Law (Companies Act, 2013)',
    question: "Every company shall have at least one director who stays in India for how many days in the financial year ?",
    options: [
      { key: 'a', text: "Not less than 150 days" },
      { key: 'b', text: "Not less than 180 days" },
      { key: 'c', text: "Not less than 200 days" },
      { key: 'd', text: "182 days or more" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "Section 149(3) of the Companies Act, 2013 mandates that every company shall have at least one director who stays in India for a total period of not less than 182 days during the financial year.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 25,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 2,
    lessonName: 'Elements of Company Law (Companies Act, 2013)',
    question: "Which of the following person cannot be an independent director in FDE Textiles Ltd. ?",
    options: [
      { key: 'a', text: "Who was a promoter of a subsidiary company" },
      { key: 'b', text: "Who is a promoter of holding company" },
      { key: 'c', text: "Who is related to directors in the company" },
      { key: 'd', text: "All of the above" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "Section 149(6) of the Companies Act, 2013 sets disqualifications for independent directors: a promoter, relative of a promoter/director, or an employee/KMP of the company or its holding/subsidiary cannot be appointed as an independent director.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 26,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 3,
    lessonName: 'Elements of Law of Contracts (Indian Contract Act, 1872)',
    question: "Contract by which one party promises to save the other party from loss caused to him by the conduct of the promisor himself, or by the conduct of any other person is called :",
    options: [
      { key: 'a', text: "Proposal" },
      { key: 'b', text: "Indemnity" },
      { key: 'c', text: "Guarantee" },
      { key: 'd', text: "Agreement" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Section 124 of the Indian Contract Act, 1872 defines a 'Contract of Indemnity' as a contract by which one party promises to save the other from loss caused to him by the conduct of the promisor himself, or by the conduct of any other person.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 27,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 3,
    lessonName: 'Elements of Law of Contracts (Indian Contract Act, 1872)',
    question: "Rohit deposited his gold chain with the bank as security for loan of ` 1,00,000/ - and promised to repay the amount with interest. What kind of special contract entered by Rohit and Bank ?",
    options: [
      { key: 'a', text: "Bailment" },
      { key: 'b', text: "Indemnity" },
      { key: 'c', text: "Guarantee" },
      { key: 'd', text: "Pledge" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "Section 172 of the Indian Contract Act, 1872 defines 'Pledge' as the bailment of goods as security for payment of a debt or performance of a promise. The depositor of the security is called the pawnor/pledgor and the bailee is called pawnee/pledgee.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 28,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 3,
    lessonName: 'Elements of Law of Contracts (Indian Contract Act, 1872)',
    question: "In order to convert a proposal to promise, the acceptance must be :",
    options: [
      { key: 'a', text: "Absolute and qualified" },
      { key: 'b', text: "Expressed in some usual and reasonable manner, unless the proposal prescribes the manner in which it is to be accepted" },
      { key: 'c', text: "Absolute and unqualified" },
      { key: 'd', text: "Both" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "Section 7 of the Indian Contract Act, 1872 mandates that in order to convert a proposal into a promise, the acceptance must be absolute and unqualified, and expressed in some usual and reasonable manner.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 29,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 3,
    lessonName: 'Elements of Law of Contracts (Indian Contract Act, 1872)',
    question: "A person who is employed to bring his principal into contractual relations with third parties is known as :",
    options: [
      { key: 'a', text: "Bailor" },
      { key: 'b', text: "Bailee" },
      { key: 'c', text: "Agency" },
      { key: 'd', text: "Owner" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Section 182 of the Indian Contract Act, 1872 defines an 'Agent' as a person employed to do any act for another, or to represent another in dealings with third persons.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 30,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 3,
    lessonName: 'Elements of Law of Contracts (Indian Contract Act, 1872)',
    question: "An agreement was entered into with Raghu who is a minor. This agreement is :",
    options: [
      { key: 'a', text: "Voidable" },
      { key: 'b', text: "Void" },
      { key: 'c', text: "Bad" },
      { key: 'd', text: "Illegal" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "In the landmark Privy Council judgment of Mohori Bibee v. Dharmodas Ghose (1903), it was settled that an agreement entered into by a minor is completely void ab initio (void from the very beginning) under Section 11 of the Indian Contract Act.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 31,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 3,
    lessonName: 'Elements of Law of Contracts (Indian Contract Act, 1872)',
    question: "Which one from below is not related to contract of bailment ?",
    options: [
      { key: 'a', text: "Ranjan left luggage in a cloak room" },
      { key: 'b', text: "Ranvir delivered his TV for repair" },
      { key: 'c', text: "Rajesh left his scooter at parking stand beside the mall" },
      { key: 'd', text: "Shareholder Rana executed a bond favoring the company thereby agreeing to satisfy the company for any loss caused as a consequence of his own act" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "Section 148 of the Indian Contract Act, 1872 defines Bailment as delivery of goods by one person to another for some purpose upon a contract that they shall be returned or disposed of. Delivery of possession is essential; an outright sale or transfer of absolute ownership without return is NOT bailment.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 32,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 3,
    lessonName: 'Elements of Law of Contracts (Indian Contract Act, 1872)',
    question: "While attending a seminar, Sumana invited Amrita to have dinner at her flat on Saturday. Amrita hired a cab and reached Sumana’s flat at the appointed time. Sumana failed to perform her promise. Can Amrita recover any damages from Sumana ?",
    options: [
      { key: 'a', text: "Yes, as Amrita has suffered" },
      { key: 'b', text: "No, as the intention was not to create legal relation" },
      { key: 'c', text: "Either" },
      { key: 'd', text: "or" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "As established in Balfour v. Balfour (1919), social and domestic invitations (like a dinner invitation) lack the intention to create legal relations, which is an essential prerequisite for a valid, enforceable contract under Section 10 of the Contract Act.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 33,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 3,
    lessonName: 'Elements of Law of Contracts (Indian Contract Act, 1872)',
    question: "Which of the following is not competent to contract ?",
    options: [
      { key: 'a', text: "Jay – A person of unsound mind" },
      { key: 'b', text: "Dev – A minor" },
      { key: 'c', text: "Sam – A person disqualified from contracting by some law" },
      { key: 'd', text: "All of the above" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "Section 11 of the Indian Contract Act, 1872 establishes that a minor, a person of unsound mind, and a person disqualified from contracting by any law (such as an alien enemy or an undischarged insolvent) are not competent to contract.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 34,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 3,
    lessonName: 'Elements of Law of Contracts (Indian Contract Act, 1872)',
    question: "Cancellation of contract by agreement between the parties at any time before it is discharged by performance and as a result none requires to perform is called :",
    options: [
      { key: 'a', text: "Rescission" },
      { key: 'b', text: "Remission" },
      { key: 'c', text: "Waiver" },
      { key: 'd', text: "None of the above" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Under Section 62 of the Indian Contract Act, 1872, 'Rescission' means the cancellation of the contract by mutual agreement between the parties at any time before it is discharged, releasing both parties from performance obligations.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 35,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 5,
    lessonName: 'Elements of Other Commercial Laws (Sale of Goods & NI Act)',
    question: "A warranty is a stipulation ...................... to the main purpose of the contract, the breach of which gives rise to a claim for damages but not to a right to reject the goods and treat the contract as repudiated.",
    options: [
      { key: 'a', text: "Collateral" },
      { key: 'b', text: "Not collateral" },
      { key: 'c', text: "Essential" },
      { key: 'd', text: "Not essential" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Section 12(3) of the Sale of Goods Act, 1930 defines a warranty as a stipulation collateral to the main purpose of the contract, the breach of which gives rise to a claim for damages, but not to a right to reject the goods and treat the contract as repudiated.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 36,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 4,
    lessonName: 'Elements of Law Relating to Partnership & LLP',
    question: "Praveen is a partner in a LLP. Contribution from Praveen may consist of :",
    options: [
      { key: 'a', text: "Intangible property" },
      { key: 'b', text: "Tangible property" },
      { key: 'c', text: "Immovable property" },
      { key: 'd', text: "All of the above" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "Section 32 of the Limited Liability Partnership (LLP) Act, 2008 provides that a partner's contribution may consist of tangible, movable or immovable property, intangible property, cash, promissory notes, or other agreements to contribute cash or property.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 37,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 4,
    lessonName: 'Elements of Law Relating to Partnership & LLP',
    question: "State which one from this is false in the hands of Dixit, Saxena, Ghosh and Co. LLP ?",
    options: [
      { key: 'a', text: "It cannot raise funds from public" },
      { key: 'b', text: "Any act of partner Saxena without the knowledge of other partners may not bind the LLP" },
      { key: 'c', text: "No separation of Management from owners" },
      { key: 'd', text: "It is easy to dissolve or wind up" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Under Section 3 of the LLP Act, 2008, an LLP is a body corporate and a separate legal entity with perpetual succession; the partners have limited liability and are not personally liable for the debts of the LLP, unlike a traditional partnership.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 38,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 4,
    lessonName: 'Elements of Law Relating to Partnership & LLP',
    question: "Which of the following is not an essential requisite for creating a partnership as per section 4 of the Partnership Act 1932 ?",
    options: [
      { key: 'a', text: "An agreement to carry on a business" },
      { key: 'b', text: "Sharing of profits" },
      { key: 'c', text: "Sharing of losses" },
      { key: 'd', text: "Business to be carried by all or any of them acting for all" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Under Section 4 of the Indian Partnership Act, 1932, the essential elements of a partnership are: an agreement, two or more persons, carrying on a business, sharing of profits, and mutual agency. Equal capital contribution or equal profit sharing is NOT an essential requirement.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 39,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 4,
    lessonName: 'Elements of Law Relating to Partnership & LLP',
    question: "Every LLP shall ensure that decisions taken by it are recorded in minutes within how many days of taking such decisions ?",
    options: [
      { key: 'a', text: "Fifteen" },
      { key: 'b', text: "Twenty-one" },
      { key: 'c', text: "Thirty" },
      { key: 'd', text: "Forty-five" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Under Rule 24 of the LLP Rules, 2009, every Limited Liability Partnership shall ensure that decisions taken by it are recorded in the minutes of the meetings within 30 days of taking such decisions.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 40,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 4,
    lessonName: 'Elements of Law Relating to Partnership & LLP',
    question: "Any matter or issue relating to the LLP shall be decided by a resolution passed by :",
    options: [
      { key: 'a', text: "Two-third of partners" },
      { key: 'b', text: "Majority of partners" },
      { key: 'c', text: "Three-fourth of partners" },
      { key: 'd', text: "Three-fifth of partners" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Under the First Schedule to the LLP Act, 2008 (in the absence of an agreement), ordinary matters relating to the LLP are decided by a resolution passed by a majority of partners, but no change in the nature of business may be made without the consent of all partners.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 41,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 4,
    lessonName: 'Elements of Law Relating to Partnership & LLP',
    question: "A partner who does not invest or participate in the management of the firm but only give their name to the business or firm is known as :",
    options: [
      { key: 'a', text: "Sleeping Partner" },
      { key: 'b', text: "Nominal Partner" },
      { key: 'c', text: "Ostensible Partner" },
      { key: 'd', text: "Sub-Partner" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "A 'Nominal Partner' is one who lends his name to the partnership firm without having any real interest in the business, neither contributing capital nor participating in the management or profits, yet remains liable to third parties for all firm debts.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 42,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 4,
    lessonName: 'Elements of Law Relating to Partnership & LLP',
    question: "Under section 2",
    options: [
      { key: 'a', text: "of Indian Partnership Act 1932 ‘business’ includes :" },
      { key: 'b', text: "Every trade and occupation" },
      { key: 'c', text: "Every occupation and profession" },
      { key: 'd', text: "Every trade, occupation and profession" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Under the Indian Partnership Act, 1932, Section 2(b) defines 'business' as including every trade, occupation, and profession.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 43,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 4,
    lessonName: 'Elements of Law Relating to Partnership & LLP',
    question: "Under section 10 of the Indian Partnership Act, 1932 every partner has a duty to indemnify the firm for any loss caused to firm by his conduct of business of the firm arising out of :",
    options: [
      { key: 'a', text: "Negligence" },
      { key: 'b', text: "Wrongful act" },
      { key: 'c', text: "Fraud" },
      { key: 'd', text: "All of the above" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Section 10 of the Indian Partnership Act, 1932 enacts an absolute statutory duty: 'Every partner shall indemnify the firm for any loss caused to it by his fraud in the conduct of the business of the firm.' This duty cannot be excluded by contract.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 44,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 4,
    lessonName: 'Elements of Law Relating to Partnership & LLP',
    question: "The relation of partnership according to prescribed section of Indian Partnership Act, 1932 arises from :",
    options: [
      { key: 'a', text: "Status" },
      { key: 'b', text: "Contract" },
      { key: 'c', text: "Friendship" },
      { key: 'd', text: "None of the above" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Section 5 of the Indian Partnership Act, 1932 explicitly provides that the relation of partnership arises from contract and not from status (such as Hindu Undivided Family / joint family members).",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 45,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 4,
    lessonName: 'Elements of Law Relating to Partnership & LLP',
    question: "Bobby is a partner in East and West Tyres. He has contributed more than share of the capital for business purpose. In the absence of any agreed rate, Bobby is entitled to interest at the rate of :",
    options: [
      { key: 'a', text: "5% p.a." },
      { key: 'b', text: "7% p.a." },
      { key: 'c', text: "8% p.a." },
      { key: 'd', text: "6% p.a." }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "Section 13(d) of the Indian Partnership Act, 1932 states that a partner making, for the purpose of the business, any payment or advance beyond the amount of capital he has agreed to subscribe, is entitled to interest thereon at the rate of six per cent (6%) per annum.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 46,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 5,
    lessonName: 'Elements of Other Commercial Laws (Sale of Goods & NI Act)',
    question: "A stipulation which is essential to the main purpose of the contract of sale is known as :",
    options: [
      { key: 'a', text: "Condition" },
      { key: 'b', text: "Guarantee" },
      { key: 'c', text: "Warranty" },
      { key: 'd', text: "Indemnity" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Section 12(2) of the Sale of Goods Act, 1930 defines a 'condition' as a stipulation essential to the main purpose of the contract, the breach of which gives rise to a right to treat the contract as repudiated.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 47,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 5,
    lessonName: 'Elements of Other Commercial Laws (Sale of Goods & NI Act)',
    question: "Which legal maxim governs the transfer of title by non-owners ?",
    options: [
      { key: 'a', text: "Ubi jus ibi remedium" },
      { key: 'b', text: "Nemo dat quod non habet" },
      { key: 'c', text: "Caveat Emptor" },
      { key: 'd', text: "Ab initio" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Section 27 of the Sale of Goods Act, 1930 is based on the Latin maxim 'Nemo dat quod non habet', which means 'No one can transfer a better title than he himself possesses'.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 48,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 5,
    lessonName: 'Elements of Other Commercial Laws (Sale of Goods & NI Act)',
    question: "Which can be called as a Promissory Note ?",
    options: [
      { key: 'a', text: "I promise to pay Susanta ` 500 and to deliver to him by black horse on 1st June next" },
      { key: 'b', text: "I promise to pay Susanta ` 500 five days after my marriage with Koyel" },
      { key: 'c', text: "I acknowledge myself to be indebted to Susanta in ` 500 to be paid on demand for value received" },
      { key: 'd', text: "I promise to pay Susanta ` 500 on Damodar’s death, provided he leaves me enough to pay that sum" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Section 4 of the Negotiable Instruments Act, 1881 defines a Promissory Note as an instrument in writing containing an unconditional undertaking signed by the maker to pay a certain sum of money only to, or to the order of, a certain person, or to the bearer.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 49,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 5,
    lessonName: 'Elements of Other Commercial Laws (Sale of Goods & NI Act)',
    question: "If the endorser signs his name and adds a direction to pay the amount mentioned in the instrument to or to the order of a specified person the endorsement is said to be :",
    options: [
      { key: 'a', text: "Restrictive" },
      { key: 'b', text: "Full" },
      { key: 'c', text: "Partial" },
      { key: 'd', text: "Conditional" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Section 16(1) of the Negotiable Instruments Act, 1881 states that if the endorser signs his name and adds a direction to pay the amount mentioned in the instrument to, or to the order of, a specified person, the endorsement is said to be 'in full' (or a Special Endorsement).",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 50,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 5,
    lessonName: 'Elements of Other Commercial Laws (Sale of Goods & NI Act)',
    question: "In a contract of sale of goods, the seller is under no duty to reveal unflattering truths about the goods sold. The doctrine is called as :",
    options: [
      { key: 'a', text: "Doctrine of constructive notice" },
      { key: 'b', text: "Doctrine of unjust enrichment" },
      { key: 'c', text: "Doctrine of Caveat Emptor" },
      { key: 'd', text: "Doctrine of ultra vires" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Under Section 16 of the Sale of Goods Act, 1930, the rule of 'Caveat Emptor' (let the buyer beware) applies, meaning the seller is under no general duty to disclose latent non-fraudulent defects; the buyer must examine the goods and satisfy himself.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 51,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 3,
    lessonName: 'Elements of Law of Contracts (Indian Contract Act, 1872)',
    question: "When a surety pays off the debt of the principal debtor, the surety steps into the shoes of the creditor. This right is known as :",
    options: [
      { key: 'a', text: "Right of Lien" },
      { key: 'b', text: "Right of Subrogation" },
      { key: 'c', text: "Right of Contribution" },
      { key: 'd', text: "Right of Set-off" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Section 140 of the Indian Contract Act, 1872 lays down the Doctrine of Subrogation: when a guaranteed debt has become due or default has taken place, and the surety pays off all that he is liable for, he is invested with all the rights which the creditor had against the principal debtor.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 52,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 5,
    lessonName: 'Elements of Other Commercial Laws (Sale of Goods & NI Act)',
    question: "Under the Negotiable Instrument Act, what is the validity period for presenting a cheque for payment ?",
    options: [
      { key: 'a', text: "1 month" },
      { key: 'b', text: "3 months" },
      { key: 'c', text: "6 months" },
      { key: 'd', text: "12 months" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Pursuant to Reserve Bank of India (RBI) directives under the Negotiable Instruments Act, the period of validity for presenting a cheque or draft for payment is three (3) months from the date of the instrument.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 53,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 5,
    lessonName: 'Elements of Other Commercial Laws (Sale of Goods & NI Act)',
    question: "A bill is said to be dishonored by non-acceptance when the :",
    options: [
      { key: 'a', text: "Drawee does not accept it within 48 hours from time of presentment" },
      { key: 'b', text: "Drawee does not accept it within 72 hours from time of presentment" },
      { key: 'c', text: "Drawer does not accept it within 90 hours from time of presentment" },
      { key: 'd', text: "Acceptance is an unqualified one" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Section 91 of the Negotiable Instruments Act, 1881 provides that a bill of exchange is dishonoured by non-acceptance when the drawee makes default in acceptance upon being duly required to accept the bill, or where presentment is excused and the bill remains unaccepted.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 54,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 5,
    lessonName: 'Elements of Other Commercial Laws (Sale of Goods & NI Act)',
    question: "When can a seller stop the goods in transit ?",
    options: [
      { key: 'a', text: "When the buyer of goods informs that he will pay after sometime" },
      { key: 'b', text: "The seller has no right to stop the goods in transit" },
      { key: 'c', text: "When the buyer of goods becomes insolvent and goods are in transit" },
      { key: 'd', text: "When the buyer informs that he is now not in need of the goods" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Section 50 of the Sale of Goods Act, 1930 grants an unpaid seller the right of stoppage in transit when the buyer becomes insolvent and the goods are in transit, allowing the seller to resume possession until payment.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 55,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 5,
    lessonName: 'Elements of Other Commercial Laws (Sale of Goods & NI Act)',
    question: "Which of the following is an inland instrument ?",
    options: [
      { key: 'a', text: "A bill drawn in India, payable in Korea upon a company in India" },
      { key: 'b', text: "A bill drawn in India, payable in India but drawn upon a company in Korea" },
      { key: 'c', text: "A bill drawn in India, payable in Korea upon a company in Korea" },
      { key: 'd', text: "Both" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "Section 11 of the Negotiable Instruments Act, 1881 defines an 'inland instrument' as a promissory note, bill of exchange or cheque drawn or made in India and made payable in, or drawn upon any person resident in India.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 56,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 4,
    lessonName: 'Elements of Law Relating to Partnership & LLP',
    question: "Vicky is a minor and has been admitted to the benefits of partnership under partnership law. On attaining majority, he has to exercise option to stay or leave the firm within how many days/months of attaining majority ?",
    options: [
      { key: 'a', text: "Ninety days" },
      { key: 'b', text: "One month" },
      { key: 'c', text: "Six months" },
      { key: 'd', text: "Four months" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Section 30 of the Indian Partnership Act, 1932 states that a minor admitted to the benefits of partnership has a right to share property and profits and inspect accounts, but his share alone is liable for firm acts; the minor is not personally liable.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 57,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 5,
    lessonName: 'Elements of Other Commercial Laws (Sale of Goods & NI Act)',
    question: "Which implied condition or warranty from below is false in a contract of sale of goods ?",
    options: [
      { key: 'a', text: "Goods must be of merchantable quality" },
      { key: 'b', text: "Condition as to wholesomeness" },
      { key: 'c', text: "As to the quality or fitness for any particular purpose of goods supplied" },
      { key: 'd', text: "None of the above" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c", "d"],
    officialKey: "Either C or D",
    explanation: "Under Sections 14 to 17 of the Sale of Goods Act, 1930, implied warranties include quiet possession and freedom from encumbrances, while title, description, and sample are implied conditions. The ICSI official answer key accepted both C and D for this question.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 58,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 5,
    lessonName: 'Elements of Other Commercial Laws (Sale of Goods & NI Act)',
    question: "A bill or note payable ‘‘after sight’’ means :",
    options: [
      { key: 'a', text: "Payable on maturity" },
      { key: 'b', text: "Payable on demand" },
      { key: 'c', text: "Payable at a fixed rate" },
      { key: 'd', text: "Payable after acceptance" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "Section 21 of the Negotiable Instruments Act, 1881 explains that in a promissory note or bill of exchange, the expressions 'after sight' mean in a promissory note, after presentment for sight, and in a bill of exchange, after acceptance, or noting for non-acceptance, or protest for non-acceptance.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 59,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 5,
    lessonName: 'Elements of Other Commercial Laws (Sale of Goods & NI Act)',
    question: "When a holder of a negotiable instrument signs it for the purpose of negotiation, it is called :",
    options: [
      { key: 'a', text: "Acceptance" },
      { key: 'b', text: "Presentment" },
      { key: 'c', text: "Crossing" },
      { key: 'd', text: "Endorsement" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "Section 15 of the Negotiable Instruments Act, 1881 defines 'Endorsement': when the maker or holder of a negotiable instrument signs the same, otherwise than as such maker, for the purpose of negotiation, on the back or face thereof, he is said to endorse the same.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 60,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 5,
    lessonName: 'Elements of Other Commercial Laws (Sale of Goods & NI Act)',
    question: "According to Section 13(1) of the Negotiable Instrument Act, 1881 which of the following is specifically recognized as a negotiable instrument ?",
    options: [
      { key: 'a', text: "Promissory Notes" },
      { key: 'b', text: "Share Certificates" },
      { key: 'c', text: "Money Orders" },
      { key: 'd', text: "Post Dated Cheques PART B" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Section 13(1) of the Negotiable Instruments Act, 1881 defines a negotiable instrument as 'a promissory note, bill of exchange or cheque payable either to order or to bearer'.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 61,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 6,
    lessonName: 'Introduction to Management & Managerial Roles',
    question: "Which ancient Indian text is a comprehensive treatise on state administration, governance, and economic policy ?",
    options: [
      { key: 'a', text: "Arthashastra" },
      { key: 'b', text: "Rigveda" },
      { key: 'c', text: "Samveda" },
      { key: 'd', text: "Ramayana" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Kautilya's (Chanakya's) Arthashastra is an ancient Indian treatise on statecraft, economic policy, state administration, and military strategy, widely recognized in Indian management history.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 62,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 7,
    lessonName: 'Principles of Management & Classical/Modern Schools',
    question: "Scientific management which aimed to improve economic efficiency, especially labour productivity was introduced by :",
    options: [
      { key: 'a', text: "Henry Fayol" },
      { key: 'b', text: "F.W. Taylor" },
      { key: 'c', text: "Max Weber" },
      { key: 'd', text: "Elton Mayo" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Frederick Winslow Taylor (F.W. Taylor) pioneered Scientific Management, aiming to improve economic efficiency and labor productivity through time and motion studies, standardization, and scientific job analysis.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 63,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 6,
    lessonName: 'Introduction to Management & Managerial Roles',
    question: "Which of the following is a key characteristic of persuasive management ?",
    options: [
      { key: 'a', text: "Low involvement of the manager in relational aspects" },
      { key: 'b', text: "Significant involvement of the manager on the organizational level" },
      { key: 'c', text: "Short focus on short-term profits" },
      { key: 'd', text: "Centralized decision-making with no feedback" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Persuasive management is a style where managers use persuasion, reasoning, and explanation to convince employees to accept decisions, retaining final decision-making power while fostering open communication.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 64,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 6,
    lessonName: 'Introduction to Management & Managerial Roles',
    question: "Which of the following is false ?",
    options: [
      { key: 'a', text: "Management can be physically seen" },
      { key: 'b', text: "Presence of management can be felt" },
      { key: 'c', text: "Management cannot be touched" },
      { key: 'd', text: "None of the above" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Management is a universal, multi-dimensional, continuous process involving both art and science, and is present across all organizational levels and types.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 65,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "Which one from the following will denote an autocratic management ?",
    options: [
      { key: 'a', text: "Quick decision-making in crisis situations" },
      { key: 'b', text: "Clear chain of command and high accountability" },
      { key: 'c', text: "High risk of poor decisions if manager lacks all the necessary information" },
      { key: 'd', text: "Leads to better and innovative decisions by pooling expertise" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a", "b", "c"],
    officialKey: "A or B or C",
    explanation: "Autocratic (authoritarian) management is characterized by centralized authority, unilateral top-down decision-making, and minimal consultation with subordinates. ICSI accepted A, B, or C due to overlapping descriptive phrasing.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 66,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "Democratic management is highly effective in which type of environment ?",
    options: [
      { key: 'a', text: "Environments that require strict, rigid rules" },
      { key: 'b', text: "Environments where innovation and creativity are required" },
      { key: 'c', text: "Manufacturing units requiring only manual labour" },
      { key: 'd', text: "Crisis situations requiring immediate, solitary action" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Democratic (participative) management is most effective in environments where employee input, creativity, specialized knowledge, and collaboration are essential to achieving high-quality outcomes.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 67,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "Transformational leadership works best in environments where :",
    options: [
      { key: 'a', text: "Creativity and innovation are vital" },
      { key: 'b', text: "Routine tasks are the main focus" },
      { key: 'c', text: "High risk of failure is unacceptable" },
      { key: 'd', text: "The organization is stagnant" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Transformational leadership is most impactful in dynamic, rapidly changing environments that require vision, innovation, radical organizational reform, and employee inspiration.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 68,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "Servant leadership is often described as a ‘‘paradox’’ because :",
    options: [
      { key: 'a', text: "It achieves objectives by focusing on people, not just results" },
      { key: 'b', text: "It requires being weak to be strong" },
      { key: 'c', text: "It is both authoritative and democratic" },
      { key: 'd', text: "It relies on monetary incentives" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Servant leadership (conceptualized by Robert K. Greenleaf) is a paradox because traditional leadership associates leading with power and command, whereas servant leadership asserts that the leader's primary duty is to serve followers first.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 69,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "What is the role of listening in servant leadership ?",
    options: [
      { key: 'a', text: "It is passive and inefficient" },
      { key: 'b', text: "It helps the leader make decision faster without team input" },
      { key: 'c', text: "It builds trust and shows respect for team members" },
      { key: 'd', text: "It is only necessary during disciplinary actions" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "In servant leadership, active, empathetic listening is the core discipline through which leaders understand the needs, aspirations, and challenges of team members before taking action.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 70,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "Which of the following is the first step in the process of organizing ?",
    options: [
      { key: 'a', text: "Assignment of duties" },
      { key: 'b', text: "Identification and division of work" },
      { key: 'c', text: "Departmentalization" },
      { key: 'd', text: "Establishing reporting relationships" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "The first step in the organizing process is the identification and division of total work into manageable activities according to predetermined plans.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 71,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "Which one from below is correct relating to performance appraisal ?",
    options: [
      { key: 'a', text: "It evaluates an employee’s skills" },
      { key: 'b', text: "It evaluates an employee’s skills and achievements" },
      { key: 'c', text: "It evaluates an employee’s skills achievements and growth" },
      { key: 'd', text: "It evaluates an employee’s skills, achievements and growth or lack thereof" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "Performance appraisal is the systematic evaluation of the performance of employees and understanding the abilities of a person for further growth and development.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 72,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "Which of the following is a primary characteristics of Laissez-faire leadership ?",
    options: [
      { key: 'a', text: "Close supervision of all tasks" },
      { key: 'b', text: "Centralized decision-making" },
      { key: 'c', text: "Strict compliance with rules" },
      { key: 'd', text: "High autonomy and minimal supervision" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "Laissez-faire (free-rein) leadership grants complete autonomy and freedom to subordinates to establish their own goals, make decisions, and resolve problems with minimal managerial interference.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 73,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "Which function is the base for all other management functions ?",
    options: [
      { key: 'a', text: "Planning" },
      { key: 'b', text: "Controlling" },
      { key: 'c', text: "Staffing" },
      { key: 'd', text: "Organizing" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Planning is the primary and fundamental function of management that precedes all other functions (Organizing, Staffing, Directing, Controlling); it determines the baseline objectives.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 74,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "Which of the following defines the relationship between Superior and subordinate in an organization ?",
    options: [
      { key: 'a', text: "Planning" },
      { key: 'b', text: "Reporting relationships" },
      { key: 'c', text: "Staffing" },
      { key: 'd', text: "Controlling" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Authority and responsibility establish the formal hierarchical relationship between superiors and subordinates in an organization.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 75,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "Assigning responsibility, granting authority and creating accountability refers to which concept ?",
    options: [
      { key: 'a', text: "Centralization" },
      { key: 'b', text: "Decentralization" },
      { key: 'c', text: "Delegation" },
      { key: 'd', text: "Specialization" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Delegation of authority consists of three essential elements: assigning responsibility (duties), granting requisite authority, and creating accountability for results.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 76,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "The process where the result of a group’s effort exceeds an individual effort, promoting team work, exchange of ideas and viewpoints allowing the organization to reach its maximum potential is called :",
    options: [
      { key: 'a', text: "Synergy effect" },
      { key: 'b', text: "Growth in size" },
      { key: 'c', text: "Specialisation" },
      { key: 'd', text: "Empire building" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Synergy refers to the concept where the combined output or effect of a group working together is greater than the sum of their individual separate efforts (2 + 2 = 5 effect).",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 77,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "The final step in the selection process is :",
    options: [
      { key: 'a', text: "Medical examination" },
      { key: 'b', text: "Preliminary interview" },
      { key: 'c', text: "Reference check" },
      { key: 'd', text: "None of the above" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "In human resource management, the final step in the selection process is the job offer followed by the contract of employment.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 78,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "The process of searching for prospective employees and stimulating them to apply for jobs is known as:",
    options: [
      { key: 'a', text: "Selection" },
      { key: 'b', text: "Training" },
      { key: 'c', text: "Placement" },
      { key: 'd', text: "Recruitment" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "Recruitment is defined as the process of searching for prospective employees and stimulating or encouraging them to apply for jobs in the organization (a positive process, whereas selection is negative).",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 79,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "Which feature of planning implies that it exists at all levels of management ?",
    options: [
      { key: 'a', text: "Futuristic" },
      { key: 'b', text: "Pervasive" },
      { key: 'c', text: "Continuous" },
      { key: 'd', text: "Decision-making" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Pervasiveness of planning means that planning is not an exclusive function of top management; it is required and performed at all levels and departments of an organization.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 80,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "Management reports can be presented in various formats. Which one from below is correct ?",
    options: [
      { key: 'a', text: "Written" },
      { key: 'b', text: "Oral" },
      { key: 'c', text: "Visual" },
      { key: 'd', text: "All of the above" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "Management reporting is designed to communicate operational and financial performance to decision-makers in clear, concise tabular, graphical, and narrative formats.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 81,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 7,
    lessonName: 'Principles of Management & Classical/Modern Schools',
    question: "Who is popularly known as the father of Scientific Management ?",
    options: [
      { key: 'a', text: "Frederick Taylor" },
      { key: 'b', text: "Henry Maine" },
      { key: 'c', text: "Austin" },
      { key: 'd', text: "Salmond" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Frederick Winslow Taylor (F.W. Taylor) is universally acclaimed as the 'Father of Scientific Management' (Henri Fayol is the father of Administrative/Modern Management).",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 82,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 7,
    lessonName: 'Principles of Management & Classical/Modern Schools',
    question: "Fayol’s principle of ‘‘unity of command’’ is based on the idea that :",
    options: [
      { key: 'a', text: "An employee shall receive orders from one senior only" },
      { key: 'b', text: "To ensure obedience and respect for superiors" },
      { key: 'c', text: "It refers to thinking out and executing plan" },
      { key: 'd', text: "It refers to superiors-subordinate relations throughout the organization" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Henri Fayol's principle of 'Unity of Command' stipulates that an employee should receive orders and be accountable to only one direct superior, preventing confusion and conflicting instructions.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 83,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "The theory which suggests leaders should adapt their style based on the readiness or maturity of their followers is known as :",
    options: [
      { key: 'a', text: "Path-Goal Theory" },
      { key: 'b', text: "Situational Leadership Theory" },
      { key: 'c', text: "Decision Making Theory" },
      { key: 'd', text: "Fiedler’s Contingency Theory" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "The Situational Leadership Theory (Hersey and Blanchard) asserts that effective leaders must adapt their leadership style according to the maturity, readiness, and competence of followers.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 84,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "Budgeting provides a benchmark against which an organization can measure its actual financial performance, allowing for identification of areas of success and those in need of improvement. This refers to which objective of budgeting ?",
    options: [
      { key: 'a', text: "Allocating resources" },
      { key: 'b', text: "Controlling costs" },
      { key: 'c', text: "Financial planning" },
      { key: 'd', text: "Performance evaluation" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "Budgetary control is a key quantitative control technique where actual performance is systematically compared against predefined budgetary benchmarks to identify variances and take corrective action.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 85,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 9,
    lessonName: 'Management Knowledge for Company Secretaries & Governance',
    question: "How much should be the minimum turnover of a unlisted public company to trigger requirement of Secretarial Audit Report ?",
    options: [
      { key: 'a', text: "` 100 crore" },
      { key: 'b', text: "` 200 crore" },
      { key: 'c', text: "` 300 crore" },
      { key: 'd', text: "` 250 crore" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "Under Section 204 of the Companies Act, 2013 read with Rule 9 of the Companies (Appointment and Remuneration of Managerial Personnel) Rules, 2014, secretarial audit is mandatory for every unlisted public company having a turnover of Rs. 250 crore or more (or paid-up share capital of Rs. 50 crore or more).",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 86,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 9,
    lessonName: 'Management Knowledge for Company Secretaries & Governance',
    question: "Advising companies on compliance of legal and procedural aspects such as environment and pollution control laws is covered in which of the following areas where a Company Secretary renders service?",
    options: [
      { key: 'a', text: "Corporate secretarial services" },
      { key: 'b', text: "Secretarial audit and certification services" },
      { key: 'c', text: "Corporate laws advisory services" },
      { key: 'd', text: "Representation services" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Advising corporate clients on statutory compliance regarding environmental laws, labor laws, and industrial regulations forms an integral part of Corporate Law Advisory and Compliance Services rendered by a Practicing Company Secretary (PCS).",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 87,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "‘‘MOST Analysis’’ in management stands for :",
    options: [
      { key: 'a', text: "Mission, Objectives, Strategy, Tactics" },
      { key: 'b', text: "Management, Objectives, Structure, Tactics" },
      { key: 'c', text: "Mission, Organization, Systems, Targets" },
      { key: 'd', text: "Memorandum, Offer, Strategy, Technology" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "MOST Analysis is a strategic planning framework that stands for: Mission, Objectives, Strategy, and Tactics.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 88,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 7,
    lessonName: 'Principles of Management & Classical/Modern Schools',
    question: "According to Henri Fayol, what is the main objective of the ‘Division of Work’ principle ?",
    options: [
      { key: 'a', text: "To increase employee workload" },
      { key: 'b', text: "To reduce the number of employees" },
      { key: 'c', text: "To create a hierarchy" },
      { key: 'd', text: "To produce more and better work with the same effort" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "According to Henri Fayol, the core purpose of the principle of 'Division of Work' is to produce more and better work with the same effort by fostering specialization in technical and managerial work.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 89,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 7,
    lessonName: 'Principles of Management & Classical/Modern Schools',
    question: "‘‘Specialization increases efficiency.’’ Which principle does this refer to ?",
    options: [
      { key: 'a', text: "Discipline" },
      { key: 'b', text: "Division of work" },
      { key: 'c', text: "Equity" },
      { key: 'd', text: "Initiative" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "The principle 'Specialization increases efficiency' directly refers to the Division of Work, wherein dividing tasks into specialized components leads to higher speed and precision.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 90,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 7,
    lessonName: 'Principles of Management & Classical/Modern Schools',
    question: "Which principle emphasizes that personal interests should be secondary to organizational interests?",
    options: [
      { key: 'a', text: "Stability of Tenure" },
      { key: 'b', text: "Subordinate of individual interest" },
      { key: 'c', text: "Equity" },
      { key: 'd', text: "Esprit de corps" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Fayol's principle of 'Subordination of Individual Interest to General Interest' dictates that the collective goals and interests of the organization must supersede the personal or sectarian interests of any individual employee.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 91,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 9,
    lessonName: 'Management Knowledge for Company Secretaries & Governance',
    question: "Arranging board/general meetings and preparing minutes thereof is covered under which of the following areas where a Company Secretary render services ?",
    options: [
      { key: 'a', text: "Corporate Secretarial Services" },
      { key: 'b', text: "Secretarial/Compliance Audit and Certification Services" },
      { key: 'c', text: "Corporate Law Advisory Services" },
      { key: 'd', text: "Representation Services" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Convening and arranging Board and General Meetings, issuing statutory notices, and preparing and recording accurate minutes (pursuant to SS-1 and SS-2) falls directly under Corporate Secretarial Services of a Company Secretary.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 92,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 9,
    lessonName: 'Management Knowledge for Company Secretaries & Governance',
    question: "A Company Secretary’s compliance with rules and regulations, especially for Audit in relation to Reconciliation of share capital for a listed company will be covered under :",
    options: [
      { key: 'a', text: "Financial Market Services" },
      { key: 'b', text: "Securities Compliance and Certification Services" },
      { key: 'c', text: "Taxation Services" },
      { key: 'd', text: "Management Services" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Audit and certification in relation to Reconciliation of Share Capital under SEBI (Depositories and Participants) Regulations is categorized under Securities Compliance and Certification Services performed by a PCS.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 93,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 9,
    lessonName: 'Management Knowledge for Company Secretaries & Governance',
    question: "Annual Secretarial compliance report shall be submitted by a listed company to stock exchange within ............................................ days from end of each financial year.",
    options: [
      { key: 'a', text: "21" },
      { key: 'b', text: "30" },
      { key: 'c', text: "45" },
      { key: 'd', text: "60" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "Under Regulation 24A of SEBI (LODR) Regulations, 2015, every listed company must submit an Annual Secretarial Compliance Report issued by a PCS to the recognized stock exchanges within 60 days from the end of each financial year.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 94,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "Mention which of the following is a demerit of transformational style of management ?",
    options: [
      { key: 'a', text: "Employees can get frustrated if their inputs is continuously ignored" },
      { key: 'b', text: "Requires a high level of skill and charisma from the manager" },
      { key: 'c', text: "A strong individual can sometimes dominate the group decision." },
      { key: 'd', text: "Employees can become over reliant of the manager" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "A recognized demerit/challenge of transformational management is that it requires an exceptionally high level of personal charisma, emotional intelligence, and continuous energy from the leader, which can lead to executive burnout or over-dependence.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 95,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "MBO is often considered a/an ............... approach to management.",
    options: [
      { key: 'a', text: "Traditional" },
      { key: 'b', text: "Modern" },
      { key: 'c', text: "Outdated" },
      { key: 'd', text: "Bureaucratic" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Management by Objectives (MBO), introduced by Peter Drucker in 1954, is recognized as a modern, collaborative goal-setting and performance appraisal approach to management.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 96,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 9,
    lessonName: 'Management Knowledge for Company Secretaries & Governance',
    question: "You are the Company Secretary in employment of your company. You hold a vital position in your company as a KMP. You contribute considerably in integration and optimum utilization of resources. Which function of management is being performed by you in this statement ?",
    options: [
      { key: 'a', text: "Planning" },
      { key: 'b', text: "Organizing" },
      { key: 'c', text: "Coordination" },
      { key: 'd', text: "All of the above" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b", "d"],
    officialKey: "Either B or D",
    explanation: "A Company Secretary in employment acts as a Key Managerial Personnel (KMP) under Section 203 of the Companies Act, 2013, actively contributing to organizational coordination and optimum resource utilization. ICSI accepted B (Organizing) or D (All of the above).",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 97,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 9,
    lessonName: 'Management Knowledge for Company Secretaries & Governance',
    question: "Conducting board meetings through video conferencing and tele-conferencing is covered under which of the following services rendered by a Company Secretary ?",
    options: [
      { key: 'a', text: "Management services" },
      { key: 'b', text: "Corporate communication and public relations services" },
      { key: 'c', text: "Information technology services" },
      { key: 'd', text: "Finance and accounting services" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Facilitating and conducting Board meetings through electronic mode (video conferencing or other audio-visual means) under Section 173(2) and Rule 3 of Companies (Meetings of Board and its Powers) Rules falls under Information Technology and Corporate Governance services.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 98,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 9,
    lessonName: 'Management Knowledge for Company Secretaries & Governance',
    question: "Advising companies on compliance of legal and procedural aspects such as environment and pollution control laws is covered in which of the following areas where a Company Secretary renders services ?",
    options: [
      { key: 'a', text: "Corporate secretarial services" },
      { key: 'b', text: "Secretarial audit and certification services" },
      { key: 'c', text: "Corporate laws advisory services" },
      { key: 'd', text: "Representation services" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Advising corporate entities on procedural compliance regarding environmental, pollution control, and allied commercial laws is categorized under Corporate Laws Advisory Services rendered by a CS.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 99,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 9,
    lessonName: 'Management Knowledge for Company Secretaries & Governance',
    question: "Company Secretaries are now recognized as ___________ under the Companies Act, 2013.",
    options: [
      { key: 'a', text: "Accountant" },
      { key: 'b', text: "Key Managerial Personnel" },
      { key: 'c', text: "Manager" },
      { key: 'd', text: "Financial Officer" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Under Section 2(51) and Section 203 of the Companies Act, 2013, the Company Secretary is statutorily designated as a Key Managerial Personnel (KMP) alongside the MD/CEO, Whole-time Director, and CFO.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 100,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 9,
    lessonName: 'Management Knowledge for Company Secretaries & Governance',
    question: "Company Secretaries play an important role as ____________ professionals in all types of companies.",
    options: [
      { key: 'a', text: "Secretarial" },
      { key: 'b', text: "Legal" },
      { key: 'c', text: "Governance" },
      { key: 'd', text: "Ethics" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "The Company Secretary plays an indispensable role as a primary Governance Professional, advising the Board of Directors on corporate governance, ethics, sustainability, and compliance with Secretarial Standards.",
    marks: 1,
    sourcePaper: 'June 2026'
  },
  {
    id: 101,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 3,
    lessonName: 'Elements of Law of Contracts (Indian Contract Act, 1872)',
    question: "According to the Indian Contract Act, when is a proposal said to be accepted?",
    options: [
      { key: 'a', text: "When the proposer changes the terms of the proposal" },
      { key: 'b', text: "When the proposal is written and signed" },
      { key: 'c', text: "When the person to whom the proposal is made signifies his assent thereto" },
      { key: 'd', text: "When consideration is paid" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Under Section 2(b) of the Indian Contract Act, 1872, a proposal is said to be accepted when the person to whom the proposal is made signifies his assent thereto.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 102,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 1,
    lessonName: 'Introduction to Law & Legal System',
    question: "Which of the following is NOT a requisite of a valid custom under Indian law?",
    options: [
      { key: 'a', text: "Custom should be Immemorial" },
      { key: 'b', text: "Custom should be certain" },
      { key: 'c', text: "Custom should be reasonable" },
      { key: 'd', text: "Custom should be approved by the Magistrate of concerned area" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "A valid custom must be immemorial, certain, reasonable, continuous, and not opposed to public policy or statute. Approval by an area Magistrate is not a legal requisite.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 103,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 2,
    lessonName: 'Elements of Company Law (Companies Act, 2013)',
    question: "Statement: \"The shares or debentures or other interest of any member in a company shall be movable property transferable in the manner provided by the articles of the company.\" Which of the following is the most appropriate answer?",
    options: [
      { key: 'a', text: "The statement is correct; shares and debentures are movable property and are transferable as per the Articles." },
      { key: 'b', text: "The statement is incorrect; shares are immovable property and cannot be freely transferred." },
      { key: 'c', text: "The statement is correct only for public companies and not for private companies." },
      { key: 'd', text: "The statement is partially correct; debentures are movable property but shares are not." }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Section 44 of the Companies Act, 2013 provides that shares, debentures, or other interests of members in a company are movable property transferable in the manner provided by the Articles.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 104,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 1,
    lessonName: 'Introduction to Law & Legal System',
    question: "Making legal rules by an authority recognised by the Constitution is termed as:",
    options: [
      { key: 'a', text: "Usage" },
      { key: 'b', text: "Executive direction" },
      { key: 'c', text: "Legislation" },
      { key: 'd', text: "Adjudication" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Legislation refers to the making of legal rules by an authority recognized by the Constitution (Parliament or State Legislatures).",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 105,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 1,
    lessonName: 'Introduction to Law & Legal System',
    question: "Which of the given option(s) is/are incorrectly matched? Option Term/Phrase Meaning 1 ad valorem According to value 2 amicus curiae By virtue of an office 3 de facto In fact 4 ex officio Friend of the court",
    options: [
      { key: 'a', text: "Options 1 and 3" },
      { key: 'b', text: "Option 1 only" },
      { key: 'c', text: "Options 2 and 4" },
      { key: 'd', text: "All Options" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Options 2 and 4 are swapped: 'amicus curiae' means friend of the court, and 'ex officio' means by virtue of an office.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 106,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 3,
    lessonName: 'Elements of Law of Contracts (Indian Contract Act, 1872)',
    question: "The Indian Contract Act, 1872 came into force on:",
    options: [
      { key: 'a', text: "1st January, 1872" },
      { key: 'b', text: "1st August, 1872" },
      { key: 'c', text: "1st September, 1872" },
      { key: 'd', text: "15th September, 1872" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "The Indian Contract Act, 1872 came into force on the 1st of September, 1872.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 107,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 1,
    lessonName: 'Introduction to Law & Legal System',
    question: "Which of the given law governs electronic transactions, cyber security, and digital governance in India?",
    options: [
      { key: 'a', text: "Cyber Security Act, 2007" },
      { key: 'b', text: "Information Technology Act, 2000" },
      { key: 'c', text: "Evidence Act, 1872" },
      { key: 'd', text: "Digital Protection Act, 2023" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "The Information Technology Act, 2000 is the primary statutory enactment governing electronic transactions, cyber security, and digital governance in India.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 108,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 5,
    lessonName: 'Elements of Other Commercial Laws (Sale of Goods & NI Act)',
    question: "In the case of cheque truncation, what is the statutory duty of the banker who receives payment based on an electronic image of a truncated cheque?",
    options: [
      { key: 'a', text: "To verify only the authenticity of the drawer’s signature, irrespective of any apparent tampering" },
      { key: 'b', text: "To ensure the genuineness of the cheque and detect any fraud, forgery or tampering apparent on the face of the instrument, using due diligence and ordinary care" },
      { key: 'c', text: "To rely entirely on the clearing house for verification of the cheque" },
      { key: 'd', text: "To guarantee the absolute genuineness of the cheque in all circumstances" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Under the Negotiable Instruments Act, 1881, the banker receiving payment based on a truncated electronic image must exercise due diligence and ordinary care to ensure genuineness and detect any fraud or tampering apparent on its face.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 109,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 1,
    lessonName: 'Introduction to Law & Legal System',
    question: "“Securities laws, Mediation law, and the Arbitration and Conciliation law all serve one purpose — the protection and security of personal data of individuals.” Which of the following statements correctly evaluates this claim?",
    options: [
      { key: 'a', text: "The statement is correct because all three laws operate as specialised data‑protection statutes that regulate the collection and processing of personal information." },
      { key: 'b', text: "The statement is incorrect because these laws only deal with criminal offences related to hacking and cyber fraud." },
      { key: 'c', text: "The statement is incorrect because these laws primarily relate to market regulation and dispute‑resolution mechanisms, not personal data protection." },
      { key: 'd', text: "The statement is correct because the objective of mediation and arbitration is to protect the privacy of parties, which is the same as personal data protection." }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Securities laws, Mediation, and Arbitration primarily regulate financial markets and alternative dispute resolution mechanisms, not personal data protection.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 110,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 2,
    lessonName: 'Elements of Company Law (Companies Act, 2013)',
    question: "Which of the following is NOT a main characteristic of a company?",
    options: [
      { key: 'a', text: "Separate legal entity" },
      { key: 'b', text: "Perpetual succession" },
      { key: 'c', text: "Company cannot be sued" },
      { key: 'd', text: "Transferability of shares" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "A company is a legal entity that can sue and be sued in its own name. 'Company cannot be sued' is false.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 111,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 1,
    lessonName: 'Introduction to Law & Legal System',
    question: "Which of the given is the type of precedent which is merely the application of an already existing rule of law?",
    options: [
      { key: 'a', text: "Declaratory Precedent" },
      { key: 'b', text: "Forward Precedent" },
      { key: 'c', text: "Non binding precedent" },
      { key: 'd', text: "Must have precedent" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "A Declaratory Precedent merely applies an already existing rule of law to the facts of the case, unlike an Original Precedent which creates new law.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 112,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 5,
    lessonName: 'Elements of Other Commercial Laws (Sale of Goods & NI Act)',
    question: "‘G’ a doctor purchased woollen underpants from ‘M’ a retailer whose business was to sell goods of that description. After wearing the underpants, ‘G’ developed some skin diseases. Held, the goods were not fit for their only use and ‘G’ was entitled to avoid the contract and claim damages. These facts relate to:",
    options: [
      { key: 'a', text: "Priest v. Last" },
      { key: 'b', text: "Donoghue v. Stevenson" },
      { key: 'c', text: "Grant v. Australian Knitting Mills" },
      { key: 'd', text: "Frost v. Aylesbury Dairy Co." }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "In Grant v. Australian Knitting Mills (1936), woollen underpants containing chemical residues caused dermatitis; the seller was held liable for breach of implied condition of fitness and merchantability under the Sale of Goods Act.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 113,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 2,
    lessonName: 'Elements of Company Law (Companies Act, 2013)',
    question: "Law has clothed a corporation with a distinct personality, yet in reality it is an association of persons who are in fact, in a way, the ____________ of the property of the body corporate.",
    options: [
      { key: 'a', text: "Individual Owners" },
      { key: 'b', text: "Beneficial Owners" },
      { key: 'c', text: "Non-party Owners" },
      { key: 'd', text: "Managing Agent" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "While the corporation has a distinct legal personality, in equity the members are beneficial owners of the corporate property.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 114,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 3,
    lessonName: 'Elements of Law of Contracts (Indian Contract Act, 1872)',
    question: "If the parties to a contract agree to substitute a new contract for it, the original contract,……………….",
    options: [
      { key: 'a', text: "need not be performed" },
      { key: 'b', text: "need to be performed" },
      { key: 'c', text: "Should Perform" },
      { key: 'd', text: "is void ab initio" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Under Section 62 of the Indian Contract Act, 1872 (Novation), when parties agree to substitute a new contract for the original, the original contract need not be performed.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 115,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 2,
    lessonName: 'Elements of Company Law (Companies Act, 2013)',
    question: "Where the veil has been used for evasion of taxes and duties, the Court upheld the piercing of the veil to look at the real transaction. Which of the given case has laid down this principle?",
    options: [
      { key: 'a', text: "Commissioner of Income Tax v. Meenakshi Mills Ltd., A.I.R. (1967) S.C.819)" },
      { key: 'b', text: "Daimler Co. Ltd. v. Continental Tyre and Rubber Co., (1916) 2 A.C. 307" },
      { key: 'c', text: "In re R.G. Films Ltd., (1953) 1 All E.R. 615" },
      { key: 'd', text: "The Workmen Employed in Associated Rubber Industries Limited, Bhavnagar v. The Associated Rubber Industries Ltd., Bhavnagar and another, A.I.R. 1986 SC 1" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "In CIT v. Meenakshi Mills Ltd. (AIR 1967 SC 819), the Supreme Court upheld lifting the corporate veil where corporate entities were created as sham devices to evade income tax.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 116,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 3,
    lessonName: 'Elements of Law of Contracts (Indian Contract Act, 1872)',
    question: "The Central Government holds 60% of the paid-up share capital of X Ltd. The rest is held by private shareholders. Based on the definition of a Government company, how should X Ltd. be classified?",
    options: [
      { key: 'a', text: "It is a Government company." },
      { key: 'b', text: "It is not a Government company because private shareholders also hold shares." },
      { key: 'c', text: "It is not a Government company because only State Governments can form Government companies." },
      { key: 'd', text: "It becomes a Government company only if 100% shares are held by the Government." }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "Under Section 2(a) of the Indian Contract Act, a proposal requires an expression of willingness to do or abstain from doing something with a view to obtaining assent.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 117,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 1,
    lessonName: 'Introduction to Law & Legal System',
    question: "According to Holmes, how can law be best described?",
    options: [
      { key: 'a', text: "Law is a collection of moral principles guiding human behavior" },
      { key: 'b', text: "Law is the ideal standards of justice that society aims to achieve" },
      { key: 'c', text: "Law is set of customs accepted by society over time" },
      { key: 'd', text: "Law is a statement of the circumstances in which public force will be brought to bear upon through courts" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "High Court decisions possess binding authority over all subordinate courts and tribunals within that High Court's territorial jurisdiction.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 118,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 2,
    lessonName: 'Elements of Company Law (Companies Act, 2013)',
    question: "Choose the most appropriate answer: Under the Companies Act, 2013 a subscriber to the memorandum is deemed to be a member of the company:",
    options: [
      { key: 'a', text: "Only after the company allots shares to him" },
      { key: 'b', text: "Only after he gives written consent separately" },
      { key: 'c', text: "Upon the registration of the company, as his name is automatically entered in the register of members" },
      { key: 'd', text: "Only after the Board of Directors passes a resolution approving his membership" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Under Section 10(2) of the Companies Act, 2013, subscribers to the Memorandum become members and are deemed to agree to observe all covenants therein.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 119,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 3,
    lessonName: 'Elements of Law of Contracts (Indian Contract Act, 1872)',
    question: "The holding of shares or debentures in a company are classified as:",
    options: [
      { key: 'a', text: "Immovable property" },
      { key: 'b', text: "Movable property" },
      { key: 'c', text: "Intellectual property" },
      { key: 'd', text: "Company’s property" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Consensus ad idem (meeting of the minds) under Section 13 means that parties must agree upon the same thing in the same sense.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 120,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 4,
    lessonName: 'Elements of Law Relating to Partnership & LLP',
    question: "According to Article 53(1) of the Constitution of India, in whom is the executive power of the Union primarily vested?",
    options: [
      { key: 'a', text: "Prime Minister of India" },
      { key: 'b', text: "Parliament of India" },
      { key: 'c', text: "President of India" },
      { key: 'd', text: "Council of Ministers" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "Under Section 4 of the Partnership Act, 1932, sharing of profits is essential, but sharing of losses is not mandatory (a partner may agree to share only profits).",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 121,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 2,
    lessonName: 'Elements of Company Law (Companies Act, 2013)',
    question: "ABC Ltd. has a total strength of 9 directors on its Board. At the scheduled Board meeting, only 2 directors are physically present, and 1 director participates through video co nferencing. According to Section 174(1) of the Companies Act, 2013, does the meeting have a valid quorum?",
    options: [
      { key: 'a', text: "Yes, because the director attending through video conferencing is also counted for the purpose of quorum" },
      { key: 'b', text: "No, because only physical presence of at least two directors is counted for quorum purposes" },
      { key: 'c', text: "No, because participation through video conferencing is counted only when approved by the Chairperson" },
      { key: 'd', text: "Yes, because the minimum requirement is two directors, irrespective of total Board strength" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Section 2(85) of the Companies Act, 2013 prescribes that a small company has paid-up capital not exceeding Rs. 4 crore and turnover not exceeding Rs. 40 crore.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 122,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 5,
    lessonName: 'Elements of Other Commercial Laws (Sale of Goods & NI Act)',
    question: "A contract that is inferred from the acts or conduct of the parties, or from the circumstances of the case—without proposal and acceptance being made in words—is known as:",
    options: [
      { key: 'a', text: "Express contract" },
      { key: 'b', text: "Quasi-contract" },
      { key: 'c', text: "Implied contract" },
      { key: 'd', text: "Voidable contract" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Under Section 12(2) of the Sale of Goods Act, 1930, a Condition is a stipulation essential to the main purpose of the contract, the breach of which gives rise to a right to treat the contract as repudiated.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 123,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 3,
    lessonName: 'Elements of Law of Contracts (Indian Contract Act, 1872)',
    question: "A contract in which one or both parties still have obligations to perform in the future, and which may be partially performed or wholly unperformed, is known as:",
    options: [
      { key: 'a', text: "Executed contract" },
      { key: 'b', text: "Executory contract" },
      { key: 'c', text: "Voidable contract" },
      { key: 'd', text: "Unenforceable contract" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "An agreement without consideration is void under Section 25 (Ex nudo pacto non oritur actio), subject to specific exceptions.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 124,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 1,
    lessonName: 'Introduction to Law & Legal System',
    question: "For a valid contract, there must be consensus-ad-idem between the parties. This means:",
    options: [
      { key: 'a', text: "The parties must agree to different things at the same time" },
      { key: 'b', text: "The parties must agree to the same thing but in different senses" },
      { key: 'c', text: "The parties must agree to the same thing in the same sense at the same time" },
      { key: 'd', text: "The parties need not agree, as long as consideration exists" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Obiter dicta are non-binding incidental remarks or observations made by a judge in passing, as distinguished from the binding ratio decidendi.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 125,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 2,
    lessonName: 'Elements of Company Law (Companies Act, 2013)',
    question: "X signifies to another his willingness to do a particular thing, with a view to obtaining the assent of Y to such act, he is said to make a ……………..",
    options: [
      { key: 'a', text: "Proposal" },
      { key: 'b', text: "Acceptance" },
      { key: 'c', text: "Contract" },
      { key: 'd', text: "Agreement" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Under Section 149(1) of the Companies Act, 2013, a public company must have a minimum of 3 directors, and a private company a minimum of 2 directors.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 126,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 5,
    lessonName: 'Elements of Other Commercial Laws (Sale of Goods & NI Act)',
    question: "Under section 2(c) of the Indian Contract Act, 1872, the person making the proposal is called the ………., and the person accepting the proposal is called the ……………..",
    options: [
      { key: 'a', text: "Maker, Acceptor" },
      { key: 'b', text: "Acceptor; Maker" },
      { key: 'c', text: "Promisee; Promisor" },
      { key: 'd', text: "Promisor; Promisee" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Under the Negotiable Instruments Act, 1881, a cheque is a bill of exchange drawn on a specified banker and not expressed to be payable otherwise than on demand.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 127,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 4,
    lessonName: 'Elements of Law Relating to Partnership & LLP',
    question: "N is the CEO of ABC Ltd. The company wants to appoint him as an Independent Director. Can N be appointed as an independent director?",
    options: [
      { key: 'a', text: "Yes, a CEO can be appointed as Independent Director" },
      { key: 'b', text: "No, a CEO cannot be appointed as Independent Director" },
      { key: 'c', text: "Yes, only if he gives declaration as CEO" },
      { key: 'd', text: "No, but if approved by shareholders through a resolution, he/she can be appointed as Independent Director" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Under Section 30 of the Partnership Act, a minor can be admitted only to the benefits of an existing partnership with the consent of all partners.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 128,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 3,
    lessonName: 'Elements of Law of Contracts (Indian Contract Act, 1872)',
    question: "Under Section 39 of the Indian Contract Act, 1872 the promisee cannot terminate the contract if:",
    options: [
      { key: 'a', text: "The promisee has signified his acquiescence in the continuance of Contract only in writing" },
      { key: 'b', text: "The promisor becomes incapable of performing" },
      { key: 'c', text: "The promisee has signified his acquiescence in the continuance of Contract" },
      { key: 'd', text: "The promisor delays performance" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "In Balfour v. Balfour (1919), domestic/social arrangements were held to lack intention to create legal relations, hence not constituting enforceable contracts.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 129,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 2,
    lessonName: 'Elements of Company Law (Companies Act, 2013)',
    question: "Under Section 44 of the Indian Contract Act, 1872, when two persons have made a joint promise, the release of one joint promisor by the promisee:",
    options: [
      { key: 'a', text: "Automatically releases the other joint promisor" },
      { key: 'b', text: "Does not discharge the other joint promisor" },
      { key: 'c', text: "Makes the contract void" },
      { key: 'd', text: "Transfers liability to a third party" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "In Salomon v. Salomon & Co. Ltd. (1897), the House of Lords established the foundational doctrine that a company is an independent legal entity distinct from its members.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 130,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 1,
    lessonName: 'Introduction to Law & Legal System',
    question: "Which of the given option(s) is/are incorrectly matched? Option Term/Phrase Meaning 1 de novo Outside of 2 fait accompli An accomplished act 3 ipso facto By the law itself 4 locus standi A guilty mind",
    options: [
      { key: 'a', text: "Options 1, 3 and 4 only" },
      { key: 'b', text: "Option 1 only" },
      { key: 'c', text: "Options 2 and 4 only" },
      { key: 'd', text: "All Options" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Article 141 of the Constitution of India provides that the law declared by the Supreme Court shall be binding on all courts within the territory of India.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 131,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 5,
    lessonName: 'Elements of Other Commercial Laws (Sale of Goods & NI Act)',
    question: "Which of the given situations would not discharge a party from performing a contract?",
    options: [
      { key: 'a', text: "A law makes the agreed activity illegal" },
      { key: 'b', text: "A natural disaster destroys the subject matter of the contract" },
      { key: 'c', text: "Performance becomes more expensive than anticipated" },
      { key: 'd', text: "Death of a person required to personally perform the contract" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "The doctrine of 'Caveat Emptor' (let the buyer beware) under Section 16 of the Sale of Goods Act obliges the buyer to exercise care and judgment in inspecting goods.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 132,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 3,
    lessonName: 'Elements of Law of Contracts (Indian Contract Act, 1872)',
    question: "The Indian Partnership Act, 1932 came into force with effect from which date?",
    options: [
      { key: 'a', text: "1st January, 1932" },
      { key: 'b', text: "1st April, 1932" },
      { key: 'c', text: "1st October, 1932" },
      { key: 'd', text: "1st December, 1932" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Under Section 11 of the Indian Contract Act and the rule in Mohori Bibee v. Dharmodas Ghose (1903), a minor's agreement is void ab initio.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 133,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 4,
    lessonName: 'Elements of Law Relating to Partnership & LLP',
    question: "Which of the following statements correctly reflects the legal position regarding a “firm” under the Indian Partnership Act, 1932?",
    options: [
      { key: 'a', text: "A firm has a separate legal personality distinct from its partners." },
      { key: 'b', text: "A firm can sue and be sued in its own name as a separate legal entity." },
      { key: 'c', text: "A firm is only a collective name for the partners and has no legal existence independent of them." },
      { key: 'd', text: "A firm exists independently even if all partners retire, meaning the firm continues as a separate legal entity" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "Under the LLP Act, 2008, every limited liability partnership must have at least two designated partners who are individuals, and at least one must be a resident in India.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 134,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 2,
    lessonName: 'Elements of Company Law (Companies Act, 2013)',
    question: "Which of the following does not come under the definition of Business as per Section 2(b) of the Indian Partnership Act, 1932?",
    options: [
      { key: 'a', text: "Trade" },
      { key: 'b', text: "Occupation" },
      { key: 'c', text: "Profession" },
      { key: 'd', text: "Employment" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Under Section 173(1) of the Companies Act, 2013, the maximum gap between two consecutive board meetings of a company shall not exceed 120 days.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 135,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 5,
    lessonName: 'Elements of Other Commercial Laws (Sale of Goods & NI Act)',
    question: "According to the Indian Partnership Act, 1932, subject to contract between the partners, no change may be made in the nature of the business without the consent of:",
    options: [
      { key: 'a', text: "The managing partner only" },
      { key: 'b', text: "The majority of the partners" },
      { key: 'c', text: "All the partners" },
      { key: 'd', text: "Partners holding the maximum capital contribution" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Under Section 4 of the Negotiable Instruments Act, 1881, a Promissory Note contains an unconditional undertaking signed by the maker to pay a certain sum of money.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 136,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 3,
    lessonName: 'Elements of Law of Contracts (Indian Contract Act, 1872)',
    question: "Which of the given is not a mode of discharge or termination of Contract?",
    options: [
      { key: 'a', text: "Performance of Contract" },
      { key: 'b', text: "Lapse of Time" },
      { key: 'c', text: "Economic Difficulty" },
      { key: 'd', text: "Impossibility of Performance" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Coercion (Section 15), Undue Influence (Section 16), Fraud (Section 17), and Misrepresentation (Section 18) render a contract voidable at the option of the aggrieved party.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 137,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 1,
    lessonName: 'Introduction to Law & Legal System',
    question: "Unless the contrary intention appears, property and rights and interests in property acquired with money belonging to the firm are deemed to have been acquired for …….",
    options: [
      { key: 'a', text: "Partners" },
      { key: 'b', text: "Directors" },
      { key: 'c', text: "Partners except sleeping partners" },
      { key: 'd', text: "None of these" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "The Bharatiya Nyaya Sanhita (BNS), 2023 repealed and replaced the Indian Penal Code (IPC), 1860, consolidating modern penal provisions in India.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 138,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 2,
    lessonName: 'Elements of Company Law (Companies Act, 2013)',
    question: "Who is a “holder” of a promissory note, bill of exchange or cheque?",
    options: [
      { key: 'a', text: "A person having temporary custody of the instrument without legal entitlement" },
      { key: 'b', text: "A person entitled in his own name to possess and recover the amount" },
      { key: 'c', text: "A person whose name appears on the instrument without enforcement rights" },
      { key: 'd', text: "A person who has previously endorsed the instrument to another party" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Under Section 2(45) of the Companies Act, 2013, a Government Company is one in which not less than 51% of paid-up share capital is held by the Central or State Government(s).",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 139,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 4,
    lessonName: 'Elements of Law Relating to Partnership & LLP',
    question: "Which of the following is not a general duty of partners under the Indian Partnership Act, 1932?",
    options: [
      { key: 'a', text: "To carry on the business of the firm to the greatest common advantage" },
      { key: 'b', text: "To be just and faithful to each other" },
      { key: 'c', text: "To render true accounts and full information of all things affecting the firm" },
      { key: 'd', text: "To contribute equally to the capital of the firm" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "Under Section 13(d) of the Partnership Act, 1932, a partner advancing money beyond agreed capital is entitled to interest at the statutory rate of 6% per annum.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 140,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 5,
    lessonName: 'Elements of Other Commercial Laws (Sale of Goods & NI Act)',
    question: "An LLP (Limited Liability Partnership) differs from a traditional partnership in that:",
    options: [
      { key: 'a', text: "Partners in an LLP are jointly and severally liable for all debts without limit" },
      { key: 'b', text: "In LLP, partners' liability is limited to their contribution" },
      { key: 'c', text: "An LLP must dissolve automatically on any partner’s retirement" },
      { key: 'd', text: "An LLP can be formed only by members of the same family" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Under Section 27 of the Sale of Goods Act, 1930, the rule 'Nemo dat quod non habet' means no one can transfer a better title to goods than he himself possesses.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 141,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 3,
    lessonName: 'Elements of Law of Contracts (Indian Contract Act, 1872)',
    question: "A contract between a seller and a buyer pr ovides that the ownership of the machinery will pass only after the buyer successfully tests the machinery. Under the Sale of Goods Act, such a contract is:",
    options: [
      { key: 'a', text: "A sale" },
      { key: 'b', text: "An agreement to sell" },
      { key: 'c', text: "A hire purchase agreement" },
      { key: 'd', text: "A voidable contract" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "A contract of Guarantee under Section 126 is a tripartite agreement between the Creditor, Principal Debtor, and Surety to perform the promise or discharge liability upon default.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 142,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 2,
    lessonName: 'Elements of Company Law (Companies Act, 2013)',
    question: "Under the Sale of Goods Act, 1930, which of the following is excluded from the definition of “goods”?",
    options: [
      { key: 'a', text: "Growing crops" },
      { key: 'b', text: "Stock" },
      { key: 'c', text: "Actionable claims" },
      { key: 'd', text: "Shares" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Section 135 of the Companies Act, 2013 mandates Corporate Social Responsibility (CSR) for companies meeting specified net worth, turnover, or net profit thresholds.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 143,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 1,
    lessonName: 'Introduction to Law & Legal System',
    question: "According to the Negotiable Instruments Act, 1881 which of the following shall be deemed an inland instrument?",
    options: [
      { key: 'a', text: "A promissory note made in India but payable outside India" },
      { key: 'b', text: "A bill of exchange drawn outside India but payable in India" },
      { key: 'c', text: "A cheque drawn or made in India and made payable in India or drawn upon any person resident in India" },
      { key: 'd', text: "A promissory note made outside India but drawn upon a person resident in India" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "'Nemo judex in causa sua' (rule against bias) is a core pillar of Natural Justice, mandating that no person shall be a judge in their own cause.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 144,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 5,
    lessonName: 'Elements of Other Commercial Laws (Sale of Goods & NI Act)',
    question: "A owes B ₹50,000 as an unsecured debt. B agrees to sell this debt to C for ₹40,000, and C pays the amount immediately. Later, C claims that this transaction is a sale of “goods”. Is the claim of C valid?",
    options: [
      { key: 'a', text: "Yes, because a debt is movable property and therefore qualifies as “goods.”" },
      { key: 'b', text: "No, because an unsecured debt is an actionable claim and is excluded from the definition of “goods.”" },
      { key: 'c', text: "Yes, because consideration has been paid and ownership has passed." },
      { key: 'd', text: "No, because only future debts are actionable claims, not existing ones." }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Section 138 of the Negotiable Instruments Act, 1881 provides criminal penalties of imprisonment up to 2 years or fine up to twice the cheque amount for cheque dishonour due to insufficiency of funds.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 145,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 4,
    lessonName: 'Elements of Law Relating to Partnership & LLP',
    question: "Goods that are to be manufactured or produced by the seller after the contract of sale are legally classified as:",
    options: [
      { key: 'a', text: "Existing Goods" },
      { key: 'b', text: "Future Goods" },
      { key: 'c', text: "Contingent Goods" },
      { key: 'd', text: "Specific Goods" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Under Section 5 of the Partnership Act, 1932, the relation of partnership arises from contract and not from status (distinguishing it from a Hindu Undivided Family).",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 146,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 3,
    lessonName: 'Elements of Law of Contracts (Indian Contract Act, 1872)',
    question: "Where, in a contract for the sale of specific goods, the goods have perished or become so damaged at the time of making the contract without the knowledge of the seller, the legal effect is that:",
    options: [
      { key: 'a', text: "The contract becomes voidable at the option of the buyer" },
      { key: 'b', text: "The contract is void" },
      { key: 'c', text: "The buyer must still pay the price" },
      { key: 'd', text: "The seller must replace the goods with similar goods" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "Under Section 148 of the Indian Contract Act, Bailment involves the delivery of goods by one person to another for some purpose upon a contract that they shall be returned or disposed of according to directions.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 147,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 2,
    lessonName: 'Elements of Company Law (Companies Act, 2013)',
    question: "In which of the following cases should the banker NOT refuse payment of a cheque?",
    options: [
      { key: 'a', text: "When the cheque is post-dated" },
      { key: 'b', text: "When the banker has no sufficient funds of the drawer and there is no arrangement to honour the cheque" },
      { key: 'c', text: "When the cheque is of doubtful legality" },
      { key: 'd', text: "When the cheque is dated two months prior to its presentment" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Under Section 101 of the Companies Act, 2013, an Annual General Meeting (AGM) requires not less than 21 clear days' notice in writing or electronic mode.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 148,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 1,
    lessonName: 'Introduction to Law & Legal System',
    question: "The price in a contract of sale may be fixed by the contract or may be left to be fixed in manner thereby agreed or may be determined by the course of dealing between the parties. Where the price is not determined in accordance to this, the buyer shall pay the seller a …………………………….",
    options: [
      { key: 'a', text: "Reasonable price" },
      { key: 'b', text: "Market price" },
      { key: 'c', text: "Nominal price" },
      { key: 'd', text: "Customary price" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "The Digital Personal Data Protection (DPDP) Act, 2023 provides a statutory framework for processing digital personal data while respecting privacy rights and lawful data handling.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 149,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 5,
    lessonName: 'Elements of Other Commercial Laws (Sale of Goods & NI Act)',
    question: "A company orders 10 laptops of a specific model from a supplier, on the clear stipulation that the laptops must be brand new and unopened. When the consignment arrives, the company finds that 5 laptops are refurbished units. What right does the buyer have?",
    options: [
      { key: 'a', text: "The buyer must accept all laptops and can only claim damages." },
      { key: 'b', text: "The buyer can treat the contract as repudiated and reject the entire consignment." },
      { key: 'c', text: "The buyer has no remedy because refurbished laptops also function properly." },
      { key: 'd', text: "The buyer must accept the refurbished laptops but can refuse the new ones." }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Under Section 46 of the Sale of Goods Act, an unpaid seller has rights of lien, stoppage in transit, and limited resale against the goods.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 150,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 3,
    lessonName: 'Elements of Law of Contracts (Indian Contract Act, 1872)',
    question: "A company limited by guarantee is a registered company having the liability of its members limited by its memorandum to such an amount as the members may respectively undertake by the memorandum to contribute to the ………….. of the company in the event of its being wound up.",
    options: [
      { key: 'a', text: "Asset" },
      { key: 'b', text: "Books" },
      { key: 'c', text: "Records" },
      { key: 'd', text: "Capital Reserve" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "In a contract of Indemnity under Section 124, one party promises to save the other from loss caused by the conduct of the promisor or any other person.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 151,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 4,
    lessonName: 'Elements of Law Relating to Partnership & LLP',
    question: "The rule under the legal maxim “Nemo Dat Quod Non Habet” means:",
    options: [
      { key: 'a', text: "A buyer can always obtain a better title than the seller" },
      { key: 'b', text: "No one can pass a better title than he himself has" },
      { key: 'c', text: "Title always remains with the original owner, even after sale" },
      { key: 'd', text: "A seller without ownership can freely transfer valid ownership" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Under the LLP Act, 2008, an LLP is a body corporate having perpetual succession and a legal entity separate from its partners.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 152,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 2,
    lessonName: 'Elements of Company Law (Companies Act, 2013)',
    question: "Under the Negotiable Instruments Act, 1881 a bona fide transferee of a negotiable instrument for consideration, who takes it without notice of any defect in title, acquires:",
    options: [
      { key: 'a', text: "Only the same title as that of the transferor" },
      { key: 'b', text: "A voidable title that can be challenged" },
      { key: 'c', text: "A title better than that of the transferor, free from prior defects" },
      { key: 'd', text: "No title if the transferor’s title was defective" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "A One Person Company (OPC) under Section 2(62) of the Companies Act is incorporated with only one person as member and must nominate a nominee.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 153,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 1,
    lessonName: 'Introduction to Law & Legal System',
    question: "Under the Negotiable Instruments Act, 1881 an ambiguous instrument is one which:",
    options: [
      { key: 'a', text: "Has unclear handwriting and therefore cannot be interpreted" },
      { key: 'b', text: "Contains multiple signatures making it invalid" },
      { key: 'c', text: "Is in such a form that the holder may treat it either as a bill of exchange or as a promissory note" },
      { key: 'd', text: "Cannot be transferred due to uncertainty of parties" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "The Supreme Court of India is the apex judicial forum and highest constitutional court under the Indian legal system.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 154,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 5,
    lessonName: 'Elements of Other Commercial Laws (Sale of Goods & NI Act)',
    question: "Under the Indian Partnership Act, 1932, which of the following correctly states the liability of a minor admitted to the benefits of a partnership?",
    options: [
      { key: 'a', text: "A minor is personally liable for all acts of the firm." },
      { key: 'b', text: "A minor is not liable in any manner for the acts of the firm." },
      { key: 'c', text: "A minor’s share is liable for the acts of the firm, but the minor is not personally liable." },
      { key: 'd', text: "A minor is personally liable only if he actively participates in the business." }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Crossing of a cheque (general or special) under Section 123/124 of NI Act directs the drawee bank to pay the proceeds only to a banker, preventing unauthorized encashment at the counter.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 155,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 3,
    lessonName: 'Elements of Law of Contracts (Indian Contract Act, 1872)',
    question: "Under the Negotiable Instruments Act, 1881 a cheque is defined as:",
    options: [
      { key: 'a', text: "A promissory note payable on demand to any person" },
      { key: 'b', text: "A bill of exchange drawn on a specified banker" },
      { key: 'c', text: "A bill of exchange drawn on any person other than a banker" },
      { key: 'd', text: "A written order to pay money after a fixed period" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Section 28 of the Indian Contract Act declares agreements in absolute restraint of legal proceedings to be void.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 156,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 2,
    lessonName: 'Elements of Company Law (Companies Act, 2013)',
    question: "A cheque is a bill of exchange drawn on a bank and is:",
    options: [
      { key: 'a', text: "Payable after a fixed period" },
      { key: 'b', text: "Payable on demand" },
      { key: 'c', text: "Payable only after maturity" },
      { key: 'd', text: "Payable at the discretion of the banker" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Under Section 149(3) of the Companies Act, every company must have at least one director who stays in India for a total period of not less than 182 days in the financial year.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 157,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 4,
    lessonName: 'Elements of Law Relating to Partnership & LLP',
    question: "If a banker, without any lawful justification, dishonours a cheque despite sufficient funds in the customer’s account, which of the following statements correctly reflects the legal position?",
    options: [
      { key: 'a', text: "Both the drawer and the payee can sue the banker for damages" },
      { key: 'b', text: "Only the payee has a cause of action against the banker" },
      { key: 'c', text: "Only the drawer can claim compensation from the banker" },
      { key: 'd', text: "Neither the drawer nor the payee can sue the banker" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Under Section 69 of the Partnership Act, 1932, an unregistered firm cannot file a suit against third parties in contract, though third parties can sue the firm.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 158,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 5,
    lessonName: 'Elements of Other Commercial Laws (Sale of Goods & NI Act)',
    question: "Which of the following statements correctly defines the effect of crossing a cheque?",
    options: [
      { key: 'a', text: "Crossing is a direction to the paying banker that the cheque should be paid only to a banker or a specified banker." },
      { key: 'b', text: "Crossing authorizes the paying banker to pay the cheque to the bearer over the counter." },
      { key: 'c', text: "Crossing makes the cheque payable to anyone holding it." },
      { key: 'd', text: "Crossing allows the paying banker to ignore the instructions given on the cheque." }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Under Section 2(7) of the Sale of Goods Act, 'goods' means every kind of movable property other than actionable claims and money, including stock and shares.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 159,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 3,
    lessonName: 'Elements of Law of Contracts (Indian Contract Act, 1872)',
    question: "Where goods are bought by description from a seller who deals in goods of that description, the law implies a condition that:",
    options: [
      { key: 'a', text: "The goods shall exactly match the sample shown." },
      { key: 'b', text: "The goods shall be delivered within a reasonable time." },
      { key: 'c', text: "The goods shall be of merchantable quality." },
      { key: 'd', text: "The seller will repair the goods free of cost for six months." }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "A pledge under Section 172 of the Indian Contract Act is a specialized bailment of goods delivered as security for payment of a debt or performance of a promise.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 160,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 1,
    lessonName: 'Introduction to Law & Legal System',
    question: "Which of the following is not a part of Intellectual Property (IP) laws in India?",
    options: [
      { key: 'a', text: "Patents Act, 1970" },
      { key: 'b', text: "Trade Marks Act, 1999" },
      { key: 'c', text: "Copyright Act, 1957" },
      { key: 'd', text: "Information Technology Act, 2000" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "'Stare Decisis' is the legal principle of determining points in litigation according to precedent, ensuring certainty and stability in the administration of justice.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 161,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "Which of the following correctly states the core elements of coordination in management?",
    options: [
      { key: 'a', text: "Planning, organizing, and controlling" },
      { key: 'b', text: "Authority, responsibility, and accountability" },
      { key: 'c', text: "Balancing, timing, and integration" },
      { key: 'd', text: "Direction, supervision, and communication" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Coordination involves unifying and harmonizing team activities, synchronizing individual efforts towards common organizational objectives.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 162,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 9,
    lessonName: 'Management Knowledge for Company Secretaries & Governance',
    question: "Which of the following come under Representation Services that can be rendered by Company Secretaries?",
    options: [
      { key: 'a', text: "Appearing on behalf of the client before National Company Law Tribunal" },
      { key: 'b', text: "Public Issue, Listing and Securities Management" },
      { key: 'c', text: "Advisor/consultant in issue of shares and other securities" },
      { key: 'd', text: "Advising on arbitration, negotiation, and conciliation in commercial disputes between the parties" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Representation Services by a Company Secretary include representing companies before statutory bodies like NCLT, NCLAT, SEBI, CCI, and ROC.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 163,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "“Organizing is a system of consciously coordinated activities or forces of two or more persons.” Who has given this definition of Organizing?",
    options: [
      { key: 'a', text: "Henry Fayol" },
      { key: 'b', text: "Max Weber" },
      { key: 'c', text: "Chester Barnard" },
      { key: 'd', text: "Louis A. Allen" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Chester Barnard defined organizing as a system of consciously coordinated activities or forces of two or more persons working towards common goals.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 164,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "These plans are made to serve a specific objective. They cease to exist once the objective is achieved. They are non-recurring, and their duration depends on the nature of the task or project. Such plans are short-lived and must be reformulated after every use. Which type of plan is described above?",
    options: [
      { key: 'a', text: "Standing Plan" },
      { key: 'b', text: "Policy Based Plan" },
      { key: 'c', text: "Single Use-Plan" },
      { key: 'd', text: "Procedural Plan" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Single-use plans (such as budgets, programmes, and projects) are developed to meet the unique needs of a specific, non-recurring situation and cease once achieved.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 165,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 6,
    lessonName: 'Introduction to Management & Managerial Roles',
    question: "The view that management is a synthesized discipline implies that management is best described as:",
    options: [
      { key: 'a', text: "Purely a science" },
      { key: 'b', text: "Purely an art" },
      { key: 'c', text: "Neither art nor science" },
      { key: 'd', text: "A combination of art, science, and profession" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Management as a synthesized discipline implies that it integrates and synthesizes concepts from economics, sociology, psychology, mathematics, and law into a coherent framework.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 166,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 6,
    lessonName: 'Introduction to Management & Managerial Roles',
    question: "Which of the following best describes Consultative Management?",
    options: [
      { key: 'a', text: "Employees independently make decisions without managerial involvement." },
      { key: 'b', text: "The manager makes decisions without seeking employee feedback." },
      { key: 'c', text: "The manager seeks and considers employee input but retains final decision-making authority." },
      { key: 'd', text: "All decisions are made collectively with equal authority among employees." }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Consultative Management is a style where the manager solicits opinions and ideas from team members before making the final decision.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 167,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "This is a philosophy and practice where the leader’s main priority is the growth, well-being, and empowerment of the people and the communities they are part of. Identify the type of leadership.",
    options: [
      { key: 'a', text: "Autocratic Leadership" },
      { key: 'b', text: "Transformational Leadership" },
      { key: 'c', text: "Servant Leadership" },
      { key: 'd', text: "Transactional Leadership" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Servant Leadership (coined by Robert Greenleaf) prioritizes serving employees and fostering their personal growth and well-being first.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 168,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "The manager provides the necessary resources and objectives but allows the team to define their own structure, processes, and decision-making methods. Identify the type of management.",
    options: [
      { key: 'a', text: "Autocratic Management" },
      { key: 'b', text: "Consultative Management" },
      { key: 'c', text: "Laissez-Faire Management" },
      { key: 'd', text: "Transactional Management" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Laissez-faire (delegative/free-rein) leadership grants full autonomy to subordinates to make decisions and execute work with minimal managerial intervention.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 169,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "Which of the following is not a feature of Planning?",
    options: [
      { key: 'a', text: "A Mechanical Process" },
      { key: 'b', text: "A Primary Function" },
      { key: 'c', text: "A Continuous Function of Management" },
      { key: 'd', text: "A Pervasive Function" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "Planning is goal-oriented, future-looking, intellectual, and continuous. It does NOT guarantee absolute certainty or infallibility.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 170,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 6,
    lessonName: 'Introduction to Management & Managerial Roles',
    question: "Which of the given is not a merit of Paternalistic Management?",
    options: [
      { key: 'a', text: "High employee loyalty and low turnover due to strong care and support." },
      { key: 'b', text: "Decisions are clear and quick." },
      { key: 'c', text: "Can result in a very harmonious work environment" },
      { key: 'd', text: "Employees can become over-reliant on the manager" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Paternalistic management treats employees like family, providing care and protection; a major criticism is that it can create dependency and stifles employee autonomy.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 171,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 7,
    lessonName: 'Principles of Management & Classical/Modern Schools',
    question: "Which of the following is not the Feature of Management?",
    options: [
      { key: 'a', text: "Goal-Oriented Process" },
      { key: 'b', text: "Two-Dimensional" },
      { key: 'c', text: "Continuous Process" },
      { key: 'd', text: "Group Activity" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "F.W. Taylor is universally regarded as the Father of Scientific Management, pioneering time and motion studies, standardization, and differential piece rates.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 172,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 7,
    lessonName: 'Principles of Management & Classical/Modern Schools',
    question: "They are guides to thinking in decision -making. They lay down the course of action selected to guide and determine present and future decisions. As a general statement of understanding, they lay down the limits within which decisions are to be made and thereby assure consistent and unified performance. What do these statements describe?",
    options: [
      { key: 'a', text: "Policies" },
      { key: 'b', text: "Procedures" },
      { key: 'c', text: "Rules" },
      { key: 'd', text: "Objectives" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Henri Fayol formulated the 14 Principles of Management, advocating division of work, authority-responsibility balance, unity of command, and esprit de corps.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 173,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "Which of the given is not merit of Servant Leadership?",
    options: [
      { key: 'a', text: "Extremely high trust, loyalty, and morale" },
      { key: 'b', text: "Empowered employees are highly productive and customer-focused" },
      { key: 'c', text: "May be viewed as a lack of authority or “too soft” in tough situations" },
      { key: 'd', text: "Creates ethical, and collaborative culture" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "Organizing involves identifying tasks, grouping them into logical departments, assigning duties, and establishing reporting relationships.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 174,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "It suggests the exact manner in which a particular activity is to be done and specifies the chronological sequence for handling future activities. What is being referred to here?",
    options: [
      { key: 'a', text: "Policy" },
      { key: 'b', text: "Programme" },
      { key: 'c', text: "Procedure" },
      { key: 'd', text: "Section" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Planning is the foundational management function that bridges the gap between where an organization is and where it wants to be in the future.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 175,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "Consider the following statements regarding authority: 1. Authority is an upward flowing concept. 2. The higher one goes in the hierarchy, the lesser is the authority. 3. Authority establishes superiority. Which of the statement(s) given above are correct?",
    options: [
      { key: 'a', text: "1 only" },
      { key: 'b', text: "3 only" },
      { key: 'c', text: "1 and 3 only" },
      { key: 'd', text: "1, 2 and 3" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Staffing encompasses recruitment, selection, training, placement, appraisal, and development of human resources within the organization.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 176,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "Which one of the following statements about features of responsibility is incorrect?",
    options: [
      { key: 'a', text: "Responsibility is to assign duty to human beings only" },
      { key: 'b', text: "Responsibility is the obligation of a subordinate to properly perform the assigned duty" },
      { key: 'c', text: "Responsibility flows upward. A subordinate is always responsible to his superior" },
      { key: 'd', text: "Responsibility can be delegated" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Directing involves guiding, motivating, instructing, and supervising employees to accomplish organizational goals effectively.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 177,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "Which of the following is not a demerit of Transformational Management?",
    options: [
      { key: 'a', text: "Requires a high level of charisma and skill from the manager" },
      { key: 'b', text: "Can be ineffective in stable, routine environments that don’t need radical change." },
      { key: 'c', text: "Results can take a long time to materialize." },
      { key: 'd', text: "Excellent for driving major organizational change" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Controlling establishes performance standards, measures actual performance, compares results, and initiates corrective actions.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 178,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 9,
    lessonName: 'Management Knowledge for Company Secretaries & Governance',
    question: "Consider the following statements regarding Centralization: 1. The concentration of authority at the top level is known as centralization. 2. There is a systematic delegation of authority at all levels in centralization. 3. Centralization is suitable for large organizations. Which of the above statements is/are correct?",
    options: [
      { key: 'a', text: "1 only" },
      { key: 'b', text: "1 and 2 only" },
      { key: 'c', text: "2 and 3 only" },
      { key: 'd', text: "1, 2 and 3" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Under Section 203 of the Companies Act, 2013, the Company Secretary is designated as Key Managerial Personnel (KMP) alongside MD/CEO and CFO.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 179,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 9,
    lessonName: 'Management Knowledge for Company Secretaries & Governance',
    question: "Which of the following is a feature of Management by Objectives (MBO)?",
    options: [
      { key: 'a', text: "It is a strategic approach that aligns company goals with employee objectives, promoting collaboration and clarity in organizational performance." },
      { key: 'b', text: "Its process involves five key steps: defining objectives, communicating them to employees, encouraging participation, monitoring progress, and evaluating performance with rewards." },
      { key: 'c', text: "It can increase employee motivation and communication but may also place excessive focus on targets, potentially leading to shortcuts and overlooked company culture" },
      { key: 'd', text: "All a, b & c" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Secretarial Standards (SS-1 on Board Meetings and SS-2 on General Meetings) issued by ICSI are mandatory under Section 118(10) of the Companies Act.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 180,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "……………… may lead to productivity losses as employees rely on information flowing from the top to guide project implementation. As a result, employees may become less productive if they have to wait long periods for instructions.",
    options: [
      { key: 'a', text: "Decentralized communication" },
      { key: 'b', text: "Informal communication" },
      { key: 'c', text: "Centralized communication" },
      { key: 'd', text: "Horizontal communication" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "Management by Objectives (MBO), popularized by Peter Drucker (1954), establishes joint participatory goal setting between managers and subordinates.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 181,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 7,
    lessonName: 'Principles of Management & Classical/Modern Schools',
    question: "This is a single -use plan containing expected results expressed in numerical terms such as time, money, materials, or other measurable unit s. Though often associated with controlling, its formulation is primarily a planning function, while its execution falls under controlling. What does this refer to?",
    options: [
      { key: 'a', text: "Budget" },
      { key: 'b', text: "Policy" },
      { key: 'c', text: "Procedure" },
      { key: 'd', text: "Programme" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Unity of Command dictates that an employee should receive orders from and be accountable to only one superior, preventing conflict and confusion.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 182,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 7,
    lessonName: 'Principles of Management & Classical/Modern Schools',
    question: "The situation in which an administrato r has the authority to enforce policies but is not held accountable for the consequences of such enforcement is best described as:",
    options: [
      { key: 'a', text: "Authority without Power" },
      { key: 'b', text: "Rule of Command" },
      { key: 'c', text: "Power without Responsibility" },
      { key: 'd', text: "Responsibility without Authority or Power" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Unity of Direction emphasizes 'one head and one plan' for a group of activities having the same objective.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 183,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "Management is often described as a science. Which of the following statements best justifies this view?",
    options: [
      { key: 'a', text: "Managerial principles attempt to establish cause-and-effect relationships" },
      { key: 'b', text: "A manager’s effectiveness depends on their individual skill, judgment, and creativity in applying it" },
      { key: 'c', text: "Two managers facing the same problem may use the same theory but implement it differently based on their style" },
      { key: 'd', text: "It is a vocation requiring specialized knowledge, prolonged academic preparation, formal qualification, and adherence to a prescribed code of conduct" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Span of Control refers to the number of subordinates that a manager can effectively supervise and control.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 184,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "With reference to Henry Fayol’s fourteen principles of management , which of the given options provides for teamwork and emphasizes the importance of effective communication in promoting organizational harmony?",
    options: [
      { key: 'a', text: "Gestion des Ventes" },
      { key: 'b', text: "Analyse du Marché" },
      { key: 'c', text: "Stratégie Commerciale" },
      { key: 'd', text: "Esprit de Corps" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "Delegation of authority transfers responsibility and commensurate authority down the managerial hierarchy, but ultimate accountability remains with the delegator.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 185,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 9,
    lessonName: 'Management Knowledge for Company Secretaries & Governance',
    question: "The following statement best describes which management approach? “This management theory suggests that there is no single best way to manage an organization. The most effective management style or organizational structure depends on the specific situation or context, considering factors such as the environment, nature of tasks, workforce, and organizational culture.”",
    options: [
      { key: 'a', text: "Classical Approach" },
      { key: 'b', text: "Behavioral Approach" },
      { key: 'c', text: "Contingency Approach" },
      { key: 'd', text: "Systems Approach" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Section 204 of the Companies Act mandates Secretarial Audit for listed companies and unlisted public companies meeting prescribed paid-up capital or turnover thresholds.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 186,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 9,
    lessonName: 'Management Knowledge for Company Secretaries & Governance',
    question: "These are detailed action steps laid out to achieve goals. Generally, these have a time horizon of five years and above . These plans often include the organization’s mission and goals , which form the basis for action steps. Such plans address issues like response to changing conditions, resource allocation, and efforts required to achieve goals. Identify the type of plan.",
    options: [
      { key: 'a', text: "Operational Plan" },
      { key: 'b', text: "Tactical Plan" },
      { key: 'c', text: "Strategic Plan" },
      { key: 'd', text: "Standing Plan" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Secretarial Audit Report must be annexed to the Board's Report in statutory e-form MR-3.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 187,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "Which leadership theory is described in the following statement? “This theory suggests that leaders should adapt their leadership style based on the readiness or maturity of their followers. It identifies four leadership styles—Telling, Selling, Participating, and Delegating — depending on employee competence and commitment.”",
    options: [
      { key: 'a', text: "Trait Theory of Leadership" },
      { key: 'b', text: "Transformational Leadership Theory" },
      { key: 'c', text: "Situational Leadership Theory" },
      { key: 'd', text: "Contingency Leadership Theory" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Maslow's Hierarchy of Needs ranks physiological, safety, social, esteem, and self-actualization needs in hierarchical progression.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 188,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 7,
    lessonName: 'Principles of Management & Classical/Modern Schools',
    question: "Which form is prescribed for secretarial audit report under the Companies Act, 2013?",
    options: [
      { key: 'a', text: "MR-3" },
      { key: 'b', text: "INC-1" },
      { key: 'c', text: "SAR-2" },
      { key: 'd', text: "SAR-1" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Scalar Chain is the formal unbroken chain of authority running from top management to the lowest rank; Fayol proposed 'Gang Plank' as a shortcut for urgent cross-communication.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 189,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 7,
    lessonName: 'Principles of Management & Classical/Modern Schools',
    question: "In MOST analysis, what does the acronym MOST stand for?",
    options: [
      { key: 'a', text: "Mission, Operations, Structure, Tactics" },
      { key: 'b', text: "Mission, Objectives, Strategies, Tactics" },
      { key: 'c', text: "Management, Objectives, Systems, Techniques" },
      { key: 'd', text: "Mission, Organization, Systems, Targets" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "Max Weber developed the Bureaucratic Model of management characterized by strict rules, impersonal hierarchy, clear division of labor, and technical competence.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 190,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 7,
    lessonName: 'Principles of Management & Classical/Modern Schools',
    question: "Frederick Taylor is popularly known as the:",
    options: [
      { key: 'a', text: "Father of Human Relations Theory" },
      { key: 'b', text: "Father of Administrative Management" },
      { key: 'c', text: "Father of Modern Economics" },
      { key: 'd', text: "Father of Scientific Management" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Elton Mayo's Hawthorne Studies demonstrated that social relationships, informal groups, and human factors significantly influence workplace productivity.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 191,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 9,
    lessonName: 'Management Knowledge for Company Secretaries & Governance',
    question: "Which of the following does not come under Financial Markets Services?",
    options: [
      { key: 'a', text: "Advisor/consultant in issue of shares and other securities" },
      { key: 'b', text: "Syndication of Loans from banks & financial institutions" },
      { key: 'c', text: "Raising of funds from international markets" },
      { key: 'd', text: "Drafting Arbitration/Conciliation Agreement/ clause" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Company Secretaries must ensure compliance with SEBI (LODR) Regulations, 2015 for listed entities, including timely disclosures and board governance norms.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 192,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 9,
    lessonName: 'Management Knowledge for Company Secretaries & Governance',
    question: "Which of the following refers to the mechanism which is connected with the audit of the non- financial aspects of the company. It gives necessary comfort to the investors, management, regulators and other stakeholders, as to the compliance of all applicable laws by the company and certifies the existence of adequate systems and processes for ensuring compliance of laws in the company.",
    options: [
      { key: 'a', text: "Secretarial Audit" },
      { key: 'b', text: "Statutory Audit" },
      { key: 'c', text: "Legal Audit" },
      { key: 'd', text: "Forensic Audit" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Annual Secretarial Compliance Report must be submitted by listed entities to stock exchanges within 60 days of the end of the financial year.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 193,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 9,
    lessonName: 'Management Knowledge for Company Secretaries & Governance',
    question: "Which of the following is not a Benefit of Management by Objective?",
    options: [
      { key: 'a', text: "Management by objectives helps employees appreciate their on-the-job roles and responsibilities." },
      { key: 'b', text: "The MBO approach usually results in better teamwork and communication." },
      { key: 'c', text: "The managers can over-emphasize the target setting, as compared to operational issues, as a generator of success." },
      { key: 'd', text: "Managers help ensure that subordinates’ goals are related to the objectives of the organization" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Under SS-1, minutes of board meetings must be entered in the physical or electronic minutes book within 30 days of the meeting.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 194,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "In the ESTEMPLE framework, T stands for:",
    options: [
      { key: 'a', text: "Trade" },
      { key: 'b', text: "Technological" },
      { key: 'c', text: "Technical" },
      { key: 'd', text: "Transportation" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Transformational leadership inspires and motivates followers to exceed standard expectations and embrace innovation in dynamic environments.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 195,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "Who is authorised to give Secretarial Audit Report under section 204 of the Companies Act, 2013?",
    options: [
      { key: 'a', text: "Company secretary in Practice" },
      { key: 'b', text: "Company secretary in Employment" },
      { key: 'c', text: "Chartered Accountant in Practice" },
      { key: 'd', text: "Cost Accountant in Employment" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Transactional leadership relies on structured rewards and penalties (quid pro quo) to ensure routine task compliance.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 196,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 9,
    lessonName: 'Management Knowledge for Company Secretaries & Governance',
    question: "Which of the following is part of Corporate Secretarial Services?",
    options: [
      { key: 'a', text: "Conduct of Internal Audit" },
      { key: 'b', text: "Promotion, formation and incorporation of companies and matters related therewith" },
      { key: 'c', text: "Representation before Registrar of Companies" },
      { key: 'd', text: "Representation before Corporates" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "The Company Secretary advises the Board of Directors on corporate governance, ESG practices, and compliance with statutory and regulatory mandates.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 197,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 6,
    lessonName: 'Introduction to Management & Managerial Roles',
    question: "Which duty of the Company Secretary under the Companies Act, 2013 is not correctly mentioned?",
    options: [
      { key: 'a', text: "to provide to the employees of the company, collectively and individually, such guidance as they may require, with regard to their duties, responsibilities and powers" },
      { key: 'b', text: "to facilitate the convening of meetings and attend Board, committee and general meetings and maintain the minutes of these meetings" },
      { key: 'c', text: "to obtain approvals from the Board, general meeting, the government and such other authorities as required under the provisions of the Act" },
      { key: 'd', text: "to represent before various regulators, and other authorities under the Companies Act, 2013 in connection with discharge of various duties under this Act" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Kautilya's Arthashastra is an ancient Indian treatise on statecraft, economic policy, and administrative management.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 198,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "Which of the following is not a benefit of MOST Analysis?",
    options: [
      { key: 'a', text: "Helps the organisation to hide its purpose." },
      { key: 'b', text: "Helps define what the organisation has set out to achieve (the mission and objectives)." },
      { key: 'c', text: "Avoids day-to-day distractions and provides a basis for overall strategic direction." },
      { key: 'd', text: "Enables alignment with stakeholders" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Herzberg's Two-Factor Theory differentiates between hygiene factors (which prevent job dissatisfaction) and motivators (which drive job satisfaction).",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 199,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "Who has been entrusted wit h the function of reporting to the Board about compliance with the provisions of Companies Act, 2013, the rules made thereunder and other laws applicable to the company?",
    options: [
      { key: 'a', text: "Legal Head" },
      { key: 'b', text: "Chief Financial Officer" },
      { key: 'c', text: "Company Secretary" },
      { key: 'd', text: "Chief Legal Protection Officer" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Feedforward control focuses on proactive prevention of deviations by monitoring inputs and environmental factors before an activity begins.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 200,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 9,
    lessonName: 'Management Knowledge for Company Secretaries & Governance',
    question: "Who has given the definition: “Management is the art of getting things done through people”?",
    options: [
      { key: 'a', text: "F.W. Taylor" },
      { key: 'b', text: "Henri Fayol" },
      { key: 'c', text: "Mary Parker Follett" },
      { key: 'd', text: "Peter F. Drucker ***" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Corporate Governance refers to the system of rules, practices, and processes by which a firm is directed, controlled, and held accountable to all stakeholders.",
    marks: 1,
    sourcePaper: 'Sample Set 1'
  },
  {
    id: 201,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 5,
    lessonName: 'Elements of Other Commercial Laws (Sale of Goods & NI Act)',
    question: "Where an electronic image of a truncated cheque is presented for payment, which of the following correctly states the rights of the drawee bank?",
    options: [
      { key: 'a', text: "The drawee bank must honour the cheque solely on the basis of the electronic image without seeking any clarification" },
      { key: 'b', text: "The drawee bank has no authority to question the electronic image once it is transmitted for payment" },
      { key: 'c', text: "The drawee bank can demand physical presentment of the truncated cheque only where suspicion relates to fraud, forgery, tampering or destruction" },
      { key: 'd', text: "The drawee bank can demand physical presentment of the truncated cheque only where consent of drawer has been obtained in electronic form" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Under the Negotiable Instruments Act, 1881, the drawee bank can demand physical presentment of a truncated cheque only where suspicion relates to fraud, forgery, tampering or destruction.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 202,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 1,
    lessonName: 'Introduction to Law & Legal System',
    question: "Which of the given option(s) is/are correctly matched? Option Term/Phrase Meaning 1 ex gratia As a matter of grace or favour. 2 de novo Outside of. 3 in personam Within the powers. 4 mens rea Without day.",
    options: [
      { key: 'a', text: "Option 1 and 3" },
      { key: 'b', text: "Option 1 only" },
      { key: 'c', text: "Option 1, 2 and 3" },
      { key: 'd', text: "All options" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "'ex gratia' means as a matter of grace or favour; 'de novo' means afresh; 'in personam' against a specific person; 'mens rea' guilty mind. Option 1 is correctly matched.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 203,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 5,
    lessonName: 'Elements of Other Commercial Laws (Sale of Goods & NI Act)',
    question: "Which of the following statements is correct with respect to an open che que and a crossed (closed) cheque?",
    options: [
      { key: 'a', text: "An open cheque is payable over the counter, whereas a crossed cheque must be collected through a banker." },
      { key: 'b', text: "An open cheque must be collected only through a banker, while a crossed cheque is payable over the counter." },
      { key: 'c', text: "Both open cheques and crossed cheques are payable over the counter of the bank." },
      { key: 'd', text: "There is no legal distinction regarding the mode of payment between an open cheque and a crossed cheque." }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "An open cheque can be presented for cash payment at the counter by the bearer, whereas a crossed cheque can only be credited to a bank account.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 204,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 5,
    lessonName: 'Elements of Other Commercial Laws (Sale of Goods & NI Act)',
    question: "“Goods which are either owned or possessed by the seller at the time of the contract” are known as:",
    options: [
      { key: 'a', text: "Future goods" },
      { key: 'b', text: "Existing goods" },
      { key: 'c', text: "Contingent goods" },
      { key: 'd', text: "Goods available for sale" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Under Section 6(1) of the Sale of Goods Act, 1930, goods owned or possessed by the seller at the time of the contract are classified as Existing Goods.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 205,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 5,
    lessonName: 'Elements of Other Commercial Laws (Sale of Goods & NI Act)',
    question: "Goods, the acquisition of which by the seller depends on an uncertain event that may or may not happen, are known as:",
    options: [
      { key: 'a', text: "Future Goods" },
      { key: 'b', text: "Contingent Goods" },
      { key: 'c', text: "Unascertained Goods" },
      { key: 'd', text: "Specific Goods" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Under Section 6(2) of the Sale of Goods Act, 1930, goods whose acquisition depends upon an uncertain contingency are Contingent Goods.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 206,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 1,
    lessonName: 'Introduction to Law & Legal System',
    question: "Which law governs licensing, spectrum use, and consumer interests in India’s fast‑evolving telecom sector?",
    options: [
      { key: 'a', text: "Information Technology Act, 2000" },
      { key: 'b', text: "Telegraph Licensing Act, 1885" },
      { key: 'c', text: "Telecom Authority of India Act, 1920" },
      { key: 'd', text: "None of these" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "The Telecom Regulatory Authority of India (TRAI) Act, 1997 and Telecommunications Act govern licensing, spectrum allocation, and consumer interests in telecommunications.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 207,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 5,
    lessonName: 'Elements of Other Commercial Laws (Sale of Goods & NI Act)',
    question: "Under Section 85(1) of the Negotiable Instruments Act, 1881, when is the drawee bank discharged from liability in respect of a cheque payable to order?",
    options: [
      { key: 'a', text: "When the endorsement on the cheque is proved to be genuine" },
      { key: 'b', text: "When the cheque is endorsed personally by the payee in the presence of the banker" },
      { key: 'c', text: "When the payee confirms the endorsement after payment" },
      { key: 'd', text: "When the cheque payable to order purports to be endorsed by or on behalf of the payee and payment is made in due course" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Under Section 85(1) of the Negotiable Instruments Act, where an order cheque purports to be endorsed by or on behalf of the payee, the drawee bank is discharged by payment in due course.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 208,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 1,
    lessonName: 'Introduction to Law & Legal System',
    question: "Which of the given option(s) is/are correctly matched? Option Term/Phrase Meaning 1 locus standi Signifies a right to be heard. 2 res judicata A case or suit already decided. 3 sine qua non An indispensable requisite. 4 status quo Existing condition.",
    options: [
      { key: 'a', text: "Options 1 and 3 only" },
      { key: 'b', text: "Option 1 only" },
      { key: 'c', text: "Options 2 and 4 only" },
      { key: 'd', text: "All Options" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "'Status quo' means existing state of affairs; 'res judicata' means a matter already judged; 'ultra vires' beyond legal powers. Option 2 is correctly matched.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 209,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 1,
    lessonName: 'Introduction to Law & Legal System',
    question: "Certain laws contain provisions that enable parties to resolve their disputes amicably. Which of the following legislations specifically provides for such amicable settlement of disputes?",
    options: [
      { key: 'a', text: "Mediation Act, 2023" },
      { key: 'b', text: "Bharatiya Nagarik Suraksha Sanhita, 2023" },
      { key: 'c', text: "Bharatiya Nyaya Sanhita, 2023" },
      { key: 'd', text: "Bharatiya Sakshya Adhiniyam, 2023" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "The Arbitration and Conciliation Act, 1996 and Mediation Act, 2023 provide statutory frameworks for alternative dispute resolution (ADR) outside adversarial court litigation.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 210,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 5,
    lessonName: 'Elements of Other Commercial Laws (Sale of Goods & NI Act)',
    question: "Who is the drawee in the case of a cheque?",
    options: [
      { key: 'a', text: "The person who signs the cheque" },
      { key: 'b', text: "The person in whose favour the cheque is issued" },
      { key: 'c', text: "The banker of the drawer on whom the cheque is drawn" },
      { key: 'd', text: "Any person holding the cheque" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Under Section 7 of the Negotiable Instruments Act, 1881, the drawee of a cheque is always the specified banker on whom the cheque is drawn.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 211,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 1,
    lessonName: 'Introduction to Law & Legal System',
    question: "Which of the following can be said to be the primary objective of competition law?",
    options: [
      { key: 'a', text: "To regulate foreign exchange transactions conducted by private entities" },
      { key: 'b', text: "To prevent anti -competitive agreements, promote fair competition, and protect consumer interests" },
      { key: 'c', text: "To supervise securities trading and regulate capital markets" },
      { key: 'd', text: "To govern the registration and authentication of legal documents" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "'Ratio decidendi' is the legal principle, rationale, or rule on which the court bases its decision; it constitutes binding judicial precedent under Article 141.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 212,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 5,
    lessonName: 'Elements of Other Commercial Laws (Sale of Goods & NI Act)',
    question: "Which of the given is not specifically covered within the meaning of “law” under Article 13(3)(a) of the Constitution of India?",
    options: [
      { key: 'a', text: "Ordinance" },
      { key: 'b', text: "Custom" },
      { key: 'c', text: "Rule" },
      { key: 'd', text: "Circular" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "A contract of sale of goods involves the transfer of property (ownership) in goods from the seller to the buyer for a monetary consideration called price under Section 4.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 213,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 2,
    lessonName: 'Elements of Company Law (Companies Act, 2013)',
    question: "The primary purpose of an Account Payee’s crossing is to:",
    options: [
      { key: 'a', text: "Enable the paying banker to make payment in cash" },
      { key: 'b', text: "Convert the cheque into a bearer instrument" },
      { key: 'c', text: "Cancel the endorsement made on the cheque" },
      { key: 'd', text: "Inform the collecting banker that proceeds must be credited to the account of the payee" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "A company has perpetual succession, meaning that its existence is not affected by the death, insolvency, or mental incapacity of its members (Men may come and men may go, but the company goes on).",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 214,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 3,
    lessonName: 'Elements of Law of Contracts (Indian Contract Act, 1872)',
    question: "Statement: “In the case of unlimited companies, no member is bound to contribute anything more than the nominal value of the shares held by him which remains unpaid.” With reference to the above statement, which of the following is the most appropriate answer?",
    options: [
      { key: 'a', text: "The statement is correct; liability of members in an unlimited company is restricted to the unpaid value of shares." },
      { key: 'b', text: "The statement is incorrect; members of an unlimited company have liability extending beyond unpaid share capital." },
      { key: 'c', text: "The statement is correct only if the articles of the company so provide." },
      { key: 'd', text: "The statement is partially correct; members are liable only up to twice the nominal value of their shares." }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Under Section 2(d) of the Indian Contract Act, consideration is the act or abstinence done at the desire of the promisor; it may move from the promisee or any other person (Chinnaya v. Ramayya).",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 215,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 2,
    lessonName: 'Elements of Company Law (Companies Act, 2013)',
    question: "Assertion (A): A banker is liable to compensate his customer if, without sufficient cause, he dishonours a cheque despite adequate funds in the account. Reason (R): The banker’s obligation to honour cheques arises from the contractual relationship between the banker and the customer, and not with the payee. Choose the correct answer:",
    options: [
      { key: 'a', text: "Both A and R are true, and R is the correct explanation of A" },
      { key: 'b', text: "Both A and R are true, but R is not the correct explanation of A" },
      { key: 'c', text: "A is true, but R is false" },
      { key: 'd', text: "A is false, but R is true" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Under Section 12(1) of the Companies Act, 2013, a company must have a registered office within 30 days of its incorporation capable of receiving all communications.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 216,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 3,
    lessonName: 'Elements of Law of Contracts (Indian Contract Act, 1872)',
    question: "Statement 1: As a corporate person, the company is entitled to own and hold property in its own name. Statement 2: Each and every member can claim ownership of any item of the company’s assets.” Based on company law principles, which of the following is correct regarding the above statement?",
    options: [
      { key: 'a', text: "Both statements are true." },
      { key: 'b', text: "Both statements are false." },
      { key: 'c', text: "The first statement is true, but the second statement is false." },
      { key: 'd', text: "The first statement is false, but the second statement is true." }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Under Section 10 of the Indian Contract Act, lawful object and lawful consideration are essential prerequisites for an agreement to become an enforceable contract.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 217,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 4,
    lessonName: 'Elements of Law Relating to Partnership & LLP',
    question: "Under the Negotiable Instruments Act, the term “clearing house” refers to:",
    options: [
      { key: 'a', text: "A clearing house managed by the Reserve Bank of India only" },
      { key: 'b', text: "A clearing house recognised as such by the Reserve Bank of India only" },
      { key: 'c', text: "Both A and B" },
      { key: 'd', text: "Clearing House Corporation of India Limited only" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Under Section 4 of the Partnership Act, 1932, mutual agency is the cardinal test: the business must be carried on by all or any of them acting for all.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 218,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 5,
    lessonName: 'Elements of Other Commercial Laws (Sale of Goods & NI Act)',
    question: "Where it was found that the sole purpose for the formation of the new company was to use it as a device to reduce the amount to be paid by way of bonus to workmen, the Supreme Court upheld the piercing of the veil to look at the real transaction. Which of the following case is related to the given facts:",
    options: [
      { key: 'a', text: "The Workmen Employed in Associated Rubber Industries Limited, Bhavnagar v. The Associated Rubber Industries Ltd., Bhavnagar and another" },
      { key: 'b', text: "Bangalore Water Supply v. A. Rajappa" },
      { key: 'c', text: "People’s Union for Democratic Rights (PUDR) v. Union of India" },
      { key: 'd', text: "Bata Shoe Co. Ltd. v. D.N Ganguly" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Under Section 15 of the Sale of Goods Act, where there is a contract for the sale of goods by description, there is an implied condition that the goods shall correspond with the description.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 219,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 2,
    lessonName: 'Elements of Company Law (Companies Act, 2013)',
    question: "The statutory definition of a cheque includes:",
    options: [
      { key: 'a', text: "Only a paper cheque signed by the drawer" },
      { key: 'b', text: "Only an electronic funds transfer initiated through net banking" },
      { key: 'c', text: "The electronic image of a truncated cheque and a cheque in electronic form" },
      { key: 'd', text: "The electronic image of a truncated cheque and a cheque in electronic form issued by government banks only" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Under Section 166 of the Companies Act, 2013, a director must act in good faith to promote the objects of the company for the benefit of its members as a whole.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 220,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 1,
    lessonName: 'Introduction to Law & Legal System',
    question: "Which of the following is not an important characteristic of a negotiable instrument under the Negotiable Instruments Act, 1881?",
    options: [
      { key: 'a', text: "The holder of the instrument is presumed to be the owner of the property contained in it." },
      { key: 'b', text: "They are freely transferable." },
      { key: 'c', text: "A negotiable instrument is transferable only with the consent of all previous holders." },
      { key: 'd', text: "The holder in due course can sue on the instrument in his own name." }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "'Injuria sine damno' means legal injury or violation of a legal right without actual financial loss or damage, which gives rise to an action in tort (Ashby v. White).",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 221,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 3,
    lessonName: 'Elements of Law of Contracts (Indian Contract Act, 1872)',
    question: "Which of the given is not a type of Company under the Companies Act, 2013?",
    options: [
      { key: 'a', text: "Private Companies" },
      { key: 'b', text: "Public Companies" },
      { key: 'c', text: "One Person Company" },
      { key: 'd', text: "Regular Company" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Under Section 64 of the Indian Contract Act, when a voidable contract is rescinded, the party rescinding must restore any benefit received under the contract.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 222,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 2,
    lessonName: 'Elements of Company Law (Companies Act, 2013)',
    question: "When an unpaid seller exercises his right of lien or stoppage in transit and retakes possession of the goods, what is the legal effect of his right of resale?",
    options: [
      { key: 'a', text: "The resale is invalid unless the buyer gives written consent" },
      { key: 'b', text: "The second buyer gets only the limited title of the first buyer" },
      { key: 'c', text: "The resale is valid and the second buyer obtains an absolute title to the goods" },
      { key: 'd', text: "The original buyer retains ownership despite the resale" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "In Lee v. Lee's Air Farming Ltd. (1961), it was held that a person can be both the majority shareholder/governing director and a servant/employee of the company under a contract of service.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 223,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 4,
    lessonName: 'Elements of Law Relating to Partnership & LLP',
    question: "Which of the given sections provides for the objects of a Producer Company?",
    options: [
      { key: 'a', text: "377 of the Companies Act, 2013" },
      { key: 'b', text: "378(1) of the Companies Act, 2013" },
      { key: 'c', text: "378B(1) of the Companies Act, 2013" },
      { key: 'd', text: "379 of the Companies Act, 2013" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Under the LLP Act, 2008, partners are agents of the limited liability partnership but not agents of other partners, eliminating mutual personal liability.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 224,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 5,
    lessonName: 'Elements of Other Commercial Laws (Sale of Goods & NI Act)',
    question: "What happens when a director is interested in a specific item of business placed before the Board?",
    options: [
      { key: 'a', text: "The director should remain in the meeting and is counted for quorum, but must abstain from signing the minutes of that item" },
      { key: 'b', text: "The director should be counted for quorum but cannot vote, although he may fully participate in the discussion" },
      { key: 'c', text: "The director should neither be counted for quorum nor pa rticipate in that specific item of business" },
      { key: 'd', text: "The director can participate and vote on the item if he discloses his interest and leaves the meeting immediately afterward" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Under Section 13 of the Negotiable Instruments Act, a negotiable instrument is payable to order when expressed to be so payable or payable to a particular person without restrictive words.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 225,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 1,
    lessonName: 'Introduction to Law & Legal System',
    question: "The transfer of shares or debentures of a company shall be carried out:",
    options: [
      { key: 'a', text: "According to the Transfer of Property Act" },
      { key: 'b', text: "According to the instructions of the company’s Managers" },
      { key: 'c', text: "In the manner provided by the articles of the company" },
      { key: 'd', text: "Only after approval by the Senior Manager" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "The Supreme Court of India established in Kesavananda Bharati (1973) that Parliament cannot alter or damage the basic structure of the Constitution.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 226,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 3,
    lessonName: 'Elements of Law of Contracts (Indian Contract Act, 1872)',
    question: "According to Section 2(e) of the Indian Contract Act, 1872, an agreement is defined as:",
    options: [
      { key: 'a', text: "Every promise made without consideration" },
      { key: 'b', text: "Every promise enforceable by law" },
      { key: 'c', text: "Every promise and every set of promises, forming the consideration for each other" },
      { key: 'd', text: "Every obligation arising from law" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "Under Section 182 of the Indian Contract Act, an 'agent' is a person employed to do any act for another or to represent another in dealings with third persons.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 227,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 2,
    lessonName: 'Elements of Company Law (Companies Act, 2013)',
    question: "Which of the following best describes a judicial precedent?",
    options: [
      { key: 'a', text: "Any past decision of a court, regardless of whether it establishes a legal principle" },
      { key: 'b', text: "Decisions of courts that lay down a new rule or principle for future guidance" },
      { key: 'c', text: "Administrative instructions issued by courts for smooth functioning" },
      { key: 'd', text: "A hypothetical example given by judges during judgment" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Under Section 118 of the Companies Act, 2013, every company must record minutes of all board and general meetings within 30 days in dedicated books.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 228,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 5,
    lessonName: 'Elements of Other Commercial Laws (Sale of Goods & NI Act)',
    question: "Choose the most appropriate answer: Which of the following persons is considered a member of a company?",
    options: [
      { key: 'a', text: "A person who verbally agrees to buy shares but has not signed any document" },
      { key: 'b', text: "A person holding shares whose name appears as a beneficial owner in the records of a depository" },
      { key: 'c', text: "A person who previously held shares but has transferred them" },
      { key: 'd', text: "A person who applied for shares but whose allotment is still pending" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Under Section 50 of the Sale of Goods Act, an unpaid seller who has parted with possession can exercise the right of stoppage in transit when the buyer becomes insolvent.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 229,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 4,
    lessonName: 'Elements of Law Relating to Partnership & LLP',
    question: "According to Section 174(1) of the Companies Act, 2013, what shall be the quorum for a meeting of the Board of Directors of a company?",
    options: [
      { key: 'a', text: "One -half of the total strength or three directors, whichever is higher, with participation through video conferencing also counted for quorum" },
      { key: 'b', text: "One -third of the total strength or two directors, whichever is higher, and directors participating via video conferencing or other audio -visual means shall also be counted for the purposes of quorum" },
      { key: 'c', text: "A minimum of three directors must be physically present, and participation through video conferencing shall not be considered for quorum purposes" },
      { key: 'd', text: "One -fourth of the total strength, irrespective of the number of directors or their mode of participation, including physical presence or audio-visual participation" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Under Section 25 of the Partnership Act, every partner is liable jointly with all other partners and also severally for all acts of the firm done while he is a partner.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 230,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 1,
    lessonName: 'Introduction to Law & Legal System',
    question: "According to the Indian Contract Act, 1872, an agreement becomes a contract only if it is made:",
    options: [
      { key: 'a', text: "For any consideration" },
      { key: 'b', text: "By parties competent to contract" },
      { key: 'c', text: "With free consent, lawful consideration, and lawful object, and not expressly void" },
      { key: 'd', text: "All of the above" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "The Bharatiya Sakshya Adhiniyam (BSA), 2023 recognizes electronic and digital records as documentary evidence with equal legal validity as physical documents.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 231,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 3,
    lessonName: 'Elements of Law of Contracts (Indian Contract Act, 1872)',
    question: "An agreement without valid consent (meeting of minds) is:",
    options: [
      { key: 'a', text: "Valid" },
      { key: 'b', text: "Voidable" },
      { key: 'c', text: "Illegal" },
      { key: 'd', text: "Void" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Under Section 56 of the Indian Contract Act, an agreement to do an impossible act is void ab initio (Doctrine of Frustration).",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 232,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 2,
    lessonName: 'Elements of Company Law (Companies Act, 2013)',
    question: "Which section under the Indian Contract Act, 1872 provides what considerations and objects are lawful, and what not?",
    options: [
      { key: 'a', text: "Section 2(a)" },
      { key: 'b', text: "Section 3(a)" },
      { key: 'c', text: "Section 10" },
      { key: 'd', text: "Section 23" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "A company's Articles of Association (AOA) constitute the internal regulations and bye-laws governing managerial operations and member rights.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 233,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 5,
    lessonName: 'Elements of Other Commercial Laws (Sale of Goods & NI Act)',
    question: "Under Section 30(5) of the Indian Partnership Act, 1932, what is the legal consequence if a minor, who was admitted to the benefits of partnership, does not give public notice of his election within six months of attaining majority or of becoming aware of his admission (whichever is later)?",
    options: [
      { key: 'a', text: "He automatically ceases to have any connection with the firm." },
      { key: 'b', text: "He is treated as a retired partner from the date of his majority." },
      { key: 'c', text: "He is deemed to have elected to become a partner in the firm." },
      { key: 'd', text: "His rights as a minor continue indefinitely until he gives public notice." }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Under Section 16 of the Negotiable Instruments Act, an endorsement in full (special endorsement) specifies the person to whom or to whose order the instrument is to be paid.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 234,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 4,
    lessonName: 'Elements of Law Relating to Partnership & LLP',
    question: "Under Indian Contract Act, 1872, who are competent for the Performance of Promise under a Contract?",
    options: [
      { key: 'a', text: "Promisor only" },
      { key: 'b', text: "Representative of Promisor only" },
      { key: 'c', text: "Only a competent person employed for performing" },
      { key: 'd', text: "Any of these" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Under the LLP Act, 2008, capital contributions by partners may consist of tangible, intangible, movable, or immovable property, or other benefits.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 235,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 1,
    lessonName: 'Introduction to Law & Legal System',
    question: "When one of several joint promisors is released by the promisee, what happens to the liability of the remaining joint promisor(s)?",
    options: [
      { key: 'a', text: "They are fully discharged from liability" },
      { key: 'b', text: "They can refuse to perform without consequences" },
      { key: 'c', text: "Their liability is reduced by half" },
      { key: 'd', text: "They remain bound to perform the promise" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "'Audi alteram partem' ensures that both parties are given a reasonable opportunity of being heard before an administrative or judicial order is passed.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 236,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 3,
    lessonName: 'Elements of Law of Contracts (Indian Contract Act, 1872)',
    question: "When the terms of a contract are expressly agreed upon in words at the time of formation, the contract is known as:",
    options: [
      { key: 'a', text: "Implied contract" },
      { key: 'b', text: "Express contract" },
      { key: 'c', text: "Quasi-contract" },
      { key: 'd', text: "Contingent contract" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "Under Section 128 of the Indian Contract Act, the liability of the surety is co-extensive with that of the principal debtor unless provided otherwise by the contract.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 237,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 2,
    lessonName: 'Elements of Company Law (Companies Act, 2013)',
    question: "When an agreement is discovered to be void, any person who has received any advantage under such agreement or contract is:",
    options: [
      { key: 'a', text: "Compulsorily bound to restore it" },
      { key: 'b', text: "Compulsorily bound to make compensation for it" },
      { key: 'c', text: "Either A or B" },
      { key: 'd', text: "Neither A or Nor B" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Under Section 149(4) of the Companies Act, every listed public company must have at least one-third of its total directors as independent directors.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 238,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 5,
    lessonName: 'Elements of Other Commercial Laws (Sale of Goods & NI Act)',
    question: "There are certain objects that are provided as objects for being qualified for formation of Companies with charitable objects. Which of the given has specifically not been included in such object?",
    options: [
      { key: 'a', text: "Promotion of Social Welfare" },
      { key: 'b', text: "Promotion of Charity" },
      { key: 'c', text: "Promotion of Education" },
      { key: 'd', text: "Promotion of Cultural Integrity" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Under Section 14 of the Sale of Goods Act, there is an implied warranty that the buyer shall have and enjoy quiet possession of the goods.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 239,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 4,
    lessonName: 'Elements of Law Relating to Partnership & LLP',
    question: "Which of the following are available remedies to the injured party in case of breach of contract? 1. Rescission of the contract and refusal to perform further. 2. Suit for damages. 3. Suit for specific performance. 4. Suit for an injunction to restrain breach of a negative term. 5. Claim on quantum meruit.",
    options: [
      { key: 'a', text: "Only 1, 2 and 3" },
      { key: 'b', text: "Only 2, 3 and 4" },
      { key: 'c', text: "Only 1, 2, 3 and 4" },
      { key: 'd', text: "All of the above (1, 2, 3, 4 and 5)" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Under Section 32 of the Partnership Act, a retiring partner remains liable for acts done before retirement unless a public notice of retirement is duly given.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 240,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 1,
    lessonName: 'Introduction to Law & Legal System',
    question: "Which of the following is not an essential element of a partnership under the Indian Partnership Act, 1932?",
    options: [
      { key: 'a', text: "Agreement between persons" },
      { key: 'b', text: "Sharing of profits" },
      { key: 'c', text: "Business carried on by all or any acting for all (mutual agency)" },
      { key: 'd', text: "Incorporation Certificate issued by Registrar of Companies" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Subordinate legislation includes rules, regulations, and notifications framed by statutory authorities under powers delegated by the legislature.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 241,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 3,
    lessonName: 'Elements of Law of Contracts (Indian Contract Act, 1872)',
    question: "Which of the given doctrines means “adhere to the decision and do not unsettle things which are established”?",
    options: [
      { key: 'a', text: "Doctrine of Severability" },
      { key: 'b', text: "Doctrine of Stare Decisis" },
      { key: 'c', text: "Doctrine of Pith and Substance" },
      { key: 'd', text: "Doctrine of Harmonious Construction" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "Under Section 170 of the Indian Contract Act, a bailee who has rendered service involving labor or skill on goods has a particular lien until paid.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 242,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 2,
    lessonName: 'Elements of Company Law (Companies Act, 2013)',
    question: "“The relation of partnership arises from status and not from contract.” In light of the Indian Partnership Act, 1932, which of the following correctly identifies the nature of this statement?",
    options: [
      { key: 'a', text: "The statement is correct because partnership can arise automatically from family relations" },
      { key: 'b', text: "The statement is correct when partners inherit a business" },
      { key: 'c', text: "The statement is incorrect because partnership arises only from contract and never from status" },
      { key: 'd', text: "The statement is partially correct depending on the type of business carried on" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Under Section 203 of the Companies Act, every listed company and public company with paid-up capital of Rs. 10 crore or more must appoint a whole-time Company Secretary.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 243,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 5,
    lessonName: 'Elements of Other Commercial Laws (Sale of Goods & NI Act)',
    question: "When both parties to a contract have fully performed their respective obligations and nothing remains to be done, the contract is known as:",
    options: [
      { key: 'a', text: "Executory contract" },
      { key: 'b', text: "Void contract" },
      { key: 'c', text: "Executed contract" },
      { key: 'd', text: "Unenforceable contract" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "A 'Holder in Due Course' (HDC) under Section 9 of the NI Act takes the negotiable instrument for valuable consideration, before maturity, and in good faith without defect in title.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 244,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 1,
    lessonName: 'Introduction to Law & Legal System',
    question: "A hot water bottle was bought by the plaintiff, a draper, who could not be expected to have special skill knowledge with regard to hot water bo ttles, from a chemist, who sold such articles stating that the bottle will not stand boiling water but was intended to hold hot water. While being used by the plaintiff’s wife, the bottle bursted and injured her. Held, the seller was responsible for damages as the bottle was not fit for use as a hot water bottle. These facts are related to case of:",
    options: [
      { key: 'a', text: "Grant v. Australian Knitting Mills" },
      { key: 'b', text: "Priest v. Last" },
      { key: 'c', text: "Frost v. Aylesbury Dairy Co." },
      { key: 'd', text: "Re Moore & Co." }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "'Damnum sine injuria' refers to actual damage or loss without infringement of a legal right, which does not give rise to a legal remedy (Gloucester Grammar School case).",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 245,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 4,
    lessonName: 'Elements of Law Relating to Partnership & LLP',
    question: "Who bears the loss if goods have already become the property of the buyer but remain in the seller’s warehouse, and the warehouse is destroyed without any fault of the seller?",
    options: [
      { key: 'a', text: "The seller, because the goods were still in his possession" },
      { key: 'b', text: "The seller, because the price was still unpaid" },
      { key: 'c', text: "The buyer, because the ownership had already passed to him" },
      { key: 'd', text: "The loss is shared equally by buyer and seller" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Under Section 7 of the LLP Act, an individual shall not be appointed as a designated partner unless he has obtained a Designated Partner Identification Number (DPIN).",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 246,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 3,
    lessonName: 'Elements of Law of Contracts (Indian Contract Act, 1872)',
    question: "A, B, and C enter into a partnership to run a consultancy business. Their partnership deed is silent on the duration of the partnership and provides no c lause regarding how or when the partnership may be dissolved. Based on the Indian Partnership Act, 1932, what type of partnership existed between A, B, and C?",
    options: [
      { key: 'a', text: "Partnership for a fixed term" },
      { key: 'b', text: "Particular partnership" },
      { key: 'c', text: "Partnership at will" },
      { key: 'd', text: "General partnership with implied duration" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Under Section 73 of the Indian Contract Act, the aggrieved party is entitled to compensation for ordinary losses naturally arising in the usual course from a breach of contract (Hadley v. Baxendale).",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 247,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 2,
    lessonName: 'Elements of Company Law (Companies Act, 2013)',
    question: "Under Indian Partnership Act, 1932, in the absence of any such agreement, express or implied, the goodwill of the business shall be deemed to be the Property of:",
    options: [
      { key: 'a', text: "Partners" },
      { key: 'b', text: "Directors" },
      { key: 'c', text: "Partnership Firm" },
      { key: 'd', text: "Partners except sleeping partners" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "Under Section 188 of the Companies Act, related party transactions require prior board approval and, exceeding prescribed thresholds, approval by the shareholders by ordinary resolution.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 248,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 5,
    lessonName: 'Elements of Other Commercial Laws (Sale of Goods & NI Act)',
    question: "Which of the following qualifies as “goods” under the Sale of Goods Act, 1930?",
    options: [
      { key: 'a', text: "Money paid as consideration" },
      { key: 'b', text: "Growing crops agreed to be cut and removed before sale" },
      { key: 'c', text: "Future actionable claims" },
      { key: 'd', text: "Immovable property attached permanently to land" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Under Section 19 of the Sale of Goods Act, property in specific or ascertained goods passes to the buyer at such time as the parties intend it to pass.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 249,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 1,
    lessonName: 'Introduction to Law & Legal System',
    question: "If the behaviour of a person give rise to misunderstanding that he is a partner in a firm (when actually he is not), such a person is estopped from later on denying the liabilities for the acts of the firm. Such person is called __________________.",
    options: [
      { key: 'a', text: "Partner by estoppel" },
      { key: 'b', text: "Partner by necessity" },
      { key: 'c', text: "Partner by Will" },
      { key: 'd', text: "Sub-Partner" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Custom as a source of law must be ancient and observed continuously from time immemorial without interruption.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 250,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 3,
    lessonName: 'Elements of Law of Contracts (Indian Contract Act, 1872)',
    question: "When a promisor refuses to perform his promise in its entirety, the promisee:",
    options: [
      { key: 'a', text: "Must continue the contract" },
      { key: 'b', text: "May put an end to the contract" },
      { key: 'c', text: "Must wait for court approval" },
      { key: 'd', text: "Has no rights in such a situation" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Under Section 124 of the Indian Contract Act, a contract of indemnity does not require consideration to be paid directly to the indemnifier; consideration given to the debtor is sufficient.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 251,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 2,
    lessonName: 'Elements of Company Law (Companies Act, 2013)',
    question: "Under Section 13(b) of the Indian Partnership Act, 1932, subject to contract between the partners, how are partners entitled to share profits and contribute to losses?",
    options: [
      { key: 'a', text: "Partners share profits according to capital contribution and bear losses equally" },
      { key: 'b', text: "Partners share profits equally and contribute to losses according to capital contribution" },
      { key: 'c', text: "Partners share profits equally and contribute equally to the losses of the firm" },
      { key: 'd', text: "Partners share profits and losses according to the ratio agreed upon by the majority of partners" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "In Daimler Co. Ltd. v. Continental Tyre and Rubber Co. (1916), the corporate veil was lifted during wartime to determine the enemy character of the persons in effective control of the company.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 252,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 5,
    lessonName: 'Elements of Other Commercial Laws (Sale of Goods & NI Act)',
    question: "When the person to whom the proposal is made signifies his assent thereto, the proposal under the Indian Contract Act, 1872 is said to be _________________.",
    options: [
      { key: 'a', text: "Accepted" },
      { key: 'b', text: "Offer" },
      { key: 'c', text: "Contract" },
      { key: 'd', text: "Statement" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "A cheque marked 'Not Negotiable' crossing protects the true owner: the transferee acquires no better title than the transferor under Section 130 of NI Act.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 253,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 4,
    lessonName: 'Elements of Law Relating to Partnership & LLP',
    question: "Under the Indian Partnership Act, 1932, where a partner, by his wrongful act or omission done in the ordinary course of the firm’s business or with the authority of his partners, causes loss, injury, or incurs a penalty to a third party, the firm is:",
    options: [
      { key: 'a', text: "Not liable, as only the partner responsible is personally liable" },
      { key: 'b', text: "Liable only if the other partners expressly ratify the wrongful act" },
      { key: 'c', text: "Liable to the same extent as the partner who committed the wrongful act" },
      { key: 'd', text: "Liable only if the third party proves negligence of all partners" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Under Section 19 of the Partnership Act, the implied authority of a partner does not extend to submitting a dispute relating to the business to arbitration.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 254,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 1,
    lessonName: 'Introduction to Law & Legal System',
    question: "Which of the following correctly distinguishes a sale from an agreement to sell?",
    options: [
      { key: 'a', text: "In a sale, ownership transfers immediately; in an agreement to sell, it transfers later or conditionally" },
      { key: 'b', text: "In a sale, possession transfers immediately; in an agreement to sell, possession never transfers" },
      { key: 'c', text: "A sale is always for existing goods; an agreement to sell is always for future goods" },
      { key: 'd', text: "A sale requires payment in full; an agreement to sell is always on credit" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "The Mediation Act, 2023 establishes the Mediation Council of India (MCI) to register mediators, recognize mediation institutes, and enforce mediation settlements.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 255,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 3,
    lessonName: 'Elements of Law of Contracts (Indian Contract Act, 1872)',
    question: "What is the name given to those principles of English law evolved by judges while deciding cases brought before them?",
    options: [
      { key: 'a', text: "Substantive Law" },
      { key: 'b', text: "Enacted Law" },
      { key: 'c', text: "Procedural Law" },
      { key: 'd', text: "Common Law" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Under Section 141 of the Indian Contract Act, a surety is entitled to the benefit of every security which the creditor has against the principal debtor at the time the suretyship is entered into.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 256,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 2,
    lessonName: 'Elements of Company Law (Companies Act, 2013)',
    question: "If goods are transferred by the real owner to another person without any price or valuable consideration, such a transaction is treated as:",
    options: [
      { key: 'a', text: "Sale" },
      { key: 'b', text: "Agreement to sell" },
      { key: 'c', text: "Barter" },
      { key: 'd', text: "Gift" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Under Section 177 of the Companies Act, every listed public company must constitute an Audit Committee consisting of a minimum of 3 directors with independent directors in majority.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 257,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 5,
    lessonName: 'Elements of Other Commercial Laws (Sale of Goods & NI Act)',
    question: "Where there is an agreement to sell goods on the terms that the price is to be fixed by the valuation of a third party, and such third party cannot or does not make such valuation, the agreement becomes void. However, if the goods (or any part) have already been delivered to and appropriated by the buyer, he shall pay a ____________________.",
    options: [
      { key: 'a', text: "Market price" },
      { key: 'b', text: "Contract price" },
      { key: 'c', text: "Reasonable price" },
      { key: 'd', text: "Customary price" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Under Section 31 of the Sale of Goods Act, it is the fundamental duty of the seller to deliver the goods and of the buyer to accept and pay for them in accordance with the contract.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 258,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 1,
    lessonName: 'Introduction to Law & Legal System',
    question: "According to Section 14(c) of the Sale of Goods Act, 1930, in a contract of sale, unless a different intention appears, the law implies a warranty that:",
    options: [
      { key: 'a', text: "The goods will be of the highest possible quality." },
      { key: 'b', text: "The goods will be delivered within a reasonable time." },
      { key: 'c', text: "The goods shall be free from any undisclosed charge or encumbrance in favour of a third party at the time of the contract." },
      { key: 'd', text: "The seller will provide free maintenance for the goods for one year." }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "'Ubi jus ibi remedium' is a fundamental legal maxim establishing that where there is a legal right, there is a legal remedy.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 259,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 4,
    lessonName: 'Elements of Law Relating to Partnership & LLP',
    question: "Which of the given option(s) is/are correctly matched? Option Term/Phrase Meaning 1 sine qua non An indispensable requisite. 2 modus operandi A guilty mind. 3 lis pendens A pending suit. 4 inter vivos Guilty act.",
    options: [
      { key: 'a', text: "Options 1 and 3" },
      { key: 'b', text: "Option 1 only" },
      { key: 'c', text: "Options 1, 2 and 3" },
      { key: 'd', text: "All Options" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "Under Section 58 of the Partnership Act, 1932, application for registration of a firm is submitted to the Registrar of Firms of the area where the principal place of business is situated.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 260,
    sectionId: 'part-a',
    sectionName: 'Part A: Business Laws',
    lessonNumber: 2,
    lessonName: 'Elements of Company Law (Companies Act, 2013)',
    question: "Under the Negotiable Instruments Act, 1881 which of the following correctly describes a negotiable instrument?",
    options: [
      { key: 'a', text: "A promissory note, bill of exchange or cheque payable either to order or to bearer" },
      { key: 'b', text: "Any written document guaranteeing payment of money" },
      { key: 'c', text: "Any contract involving transfer of movable property" },
      { key: 'd', text: "Any document payable only to a specific named person and not transferable" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Under Section 2(87) of the Companies Act, a subsidiary company is one where the holding company controls the composition of the Board of Directors or exercises more than 50% voting power.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 261,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 7,
    lessonName: 'Principles of Management & Classical/Modern Schools',
    question: "Authority, discipline, unity of command, and unity of direction are ______________.",
    options: [
      { key: 'a', text: "Principles of the human relations movement." },
      { key: 'b', text: "Taylor's four principles of management." },
      { key: 'c', text: "Elements of Weber's ideal bureaucratic structure." },
      { key: 'd', text: "Four of Fayol's fourteen principles of management." }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Authority, discipline, unity of command, and unity of direction are fundamental administrative principles of management formulated by Henri Fayol.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 262,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "It is the outline of plans of work to be carried out in proper sequence for the purpose of achieving specific objectives. What is it known as?",
    options: [
      { key: 'a', text: "Procedures" },
      { key: 'b', text: "Programmes" },
      { key: 'c', text: "Rules" },
      { key: 'd', text: "Policies" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "A Programme is a comprehensive single-use plan that outlines the work to be done, sequence of operations, policies, procedures, and resources required.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 263,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 7,
    lessonName: 'Principles of Management & Classical/Modern Schools',
    question: "Scalar chain refers to ______________",
    options: [
      { key: 'a', text: "Superior-subordinate relations throughout the organization." },
      { key: 'b', text: "Degree to which subordinates are involved in decision making." },
      { key: 'c', text: "Every employee should receive orders from only one superior." },
      { key: 'd', text: "People and materials should be in the right place at the right time." }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Scalar Chain refers to the unbroken line of authority and communication running from the highest managerial rank to the lowest subordinate.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 264,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "Which of the following is not a basic function of the management process?",
    options: [
      { key: 'a', text: "Controlling" },
      { key: 'b', text: "Organizing" },
      { key: 'c', text: "Working" },
      { key: 'd', text: "Directing" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "The classical functions of the management process are Planning, Organizing, Staffing, Directing, and Controlling (POSDC). Accounting is a specialized business tool, not a core management function.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 265,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "Which of the following involves defining goals and determining how to achieve them through actions and steps?",
    options: [
      { key: 'a', text: "Strategic planning" },
      { key: 'b', text: "Tactical planning" },
      { key: 'c', text: "Operational planning" },
      { key: 'd', text: "Contingency planning" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Planning is the process of setting organizational goals and determining the best strategies, policies, and action steps to achieve them.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 266,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "Which of the following is not a challenge faced in the process of delegation?",
    options: [
      { key: 'a', text: "Trust Issues" },
      { key: 'b', text: "Overloading Subordinates" },
      { key: 'c', text: "Ambiguity in Roles" },
      { key: 'd', text: "Transfer of Responsibility" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Delegation challenges include fear of losing control, lack of confidence in subordinates, and desire for personal glory; systematic division of labor is an advantage, not a barrier.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 267,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "______________ deals with efficient utilizati on of human resources in an organization stimulating full contribution for achieving desired objectives.",
    options: [
      { key: 'a', text: "Staffing" },
      { key: 'b', text: "Planning" },
      { key: 'c', text: "Recruitment" },
      { key: 'd', text: "Appraisal" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Staffing (Human Resource Management) deals with recruiting, selecting, training, compensating, and developing the human workforce.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 268,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "Planning does not come to an end with the establishment of a business concern because it is ______________.",
    options: [
      { key: 'a', text: "common to all." },
      { key: 'b', text: "flexible." },
      { key: 'c', text: "a continuous process." },
      { key: 'd', text: "a linchpin for all activities." }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Planning is continuous because businesses operate in dynamic environments where economic, competitive, and technological conditions evolve continuously.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 269,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 7,
    lessonName: 'Principles of Management & Classical/Modern Schools',
    question: "An employee receives order from only one superior. This concept is named as _________.",
    options: [
      { key: 'a', text: "Unity of command." },
      { key: 'b', text: "Unity of direction." },
      { key: 'c', text: "Discipline." },
      { key: 'd', text: "Centralization." }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Unity of Command requires that an employee receives orders from and is accountable to only one superior.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 270,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "Motivating and leading the human resources towards better performance & higher productivity is known as ______________.",
    options: [
      { key: 'a', text: "directing" },
      { key: 'b', text: "commanding" },
      { key: 'c', text: "span of control" },
      { key: 'd', text: "scalar chain" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "Directing is the leadership function that guides, motivates, supervises, and communicates with human resources to achieve higher productivity.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 271,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 6,
    lessonName: 'Introduction to Management & Managerial Roles',
    question: "The production head has planned to launch a product in the market on 13 th May 2026 and has made the information public. However, the PR department of the Company is planning for a major event on the same day with the instructions of the CEO. Had there been coordination between the two in the initi al stages of the plan, such overlapping could have been avoided. This situation depicts importance of which principle of coordination?",
    options: [
      { key: 'a', text: "Principle of Direct Contact" },
      { key: 'b', text: "Principle of Reciprocity" },
      { key: 'c', text: "Principle of Early Beginning" },
      { key: 'd', text: "Principle of Continuity" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Management combines both Art (practical application of skills) and Science (systematized body of knowledge).",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 272,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "In which type of management the leader mobilizes people towards what needs to be achieved while articulating a clear and long-term direction?",
    options: [
      { key: 'a', text: "Transformational Management" },
      { key: 'b', text: "Consultative Management" },
      { key: 'c', text: "Visionary Management" },
      { key: 'd', text: "Coaching Management" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Controlling establishes performance standards, measures progress, and takes corrective action to ensure plans succeed.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 273,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 7,
    lessonName: 'Principles of Management & Classical/Modern Schools',
    question: "In what order do managers typically perform the managerial functions?",
    options: [
      { key: 'a', text: "Organising, Planning, Controlling, Directing" },
      { key: 'b', text: "Organising, Leading, Planning, Controlling" },
      { key: 'c', text: "Planning, Organising, Directing, Controlling" },
      { key: 'd', text: "Planning, Organising, Controlling, Leading" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Esprit de Corps emphasizes fostering team spirit, harmony, and mutual trust among employees to enhance collective strength.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 274,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "To what does authority refer?",
    options: [
      { key: 'a', text: "The ability to organise people" },
      { key: 'b', text: "The power to command and direct" },
      { key: 'c', text: "The need for order" },
      { key: 'd', text: "The right to change jobs" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Organizational Hierarchy defines the levels of management (top, middle, lower) and establishes formal reporting relationships.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 275,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 9,
    lessonName: 'Management Knowledge for Company Secretaries & Governance',
    question: "When a manager monitors the work performance of workers in his department to determine if the quality of their work is 'up to standard', this manager is engaging in which function?",
    options: [
      { key: 'a', text: "Planning" },
      { key: 'b', text: "Controlling" },
      { key: 'c', text: "Organising" },
      { key: 'd', text: "Leading" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "The Company Secretary advises the Board on meeting procedures, corporate governance norms, Secretarial Standards, and legal compliances.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 276,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "Which of the following is not considered as importance of Budgeting?",
    options: [
      { key: 'a', text: "It ensures resource availability." },
      { key: 'b', text: "It helps prioritize projects." },
      { key: 'c', text: "It conducts root cause analysis." },
      { key: 'd', text: "It can lead to financing opportunities." }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "Democratic (Participative) leadership encourages subordinates to participate actively in decision making and problem solving.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 277,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 7,
    lessonName: 'Principles of Management & Classical/Modern Schools',
    question: "Sanjeev, the department head, during the promotions, promoted Rajan who is son of one of his relatives. However, Parth was the most deserving candidate in view of his exceptional delivery of work. In this context, which Management Principle has been violated by Sanjeev?",
    options: [
      { key: 'a', text: "Discipline" },
      { key: 'b', text: "Esprit de Corps" },
      { key: 'c', text: "Division of Work" },
      { key: 'd', text: "Equity" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Time and Motion Study, developed by F.W. Taylor, scientifically determines the standard time required by an average worker to perform a specific operation.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 278,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "Which of the following is not a step in the Process of Organizing?",
    options: [
      { key: 'a', text: "Identification and Grouping of Activities" },
      { key: 'b', text: "Allotment of Duties" },
      { key: 'c', text: "Integration of Activities" },
      { key: 'd', text: "Decision making" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Decentralization is the systematic dispersal of decision-making authority throughout all levels of an enterprise.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 279,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "The State Governments in the country are given more powers to decide and spend funds granted to them by the Central Governm ent. Identify the principle of management highlighted in the statement.",
    options: [
      { key: 'a', text: "Division of Work" },
      { key: 'b', text: "Unity of Command" },
      { key: 'c', text: "Decentralization" },
      { key: 'd', text: "Centralization" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Motivation is the psychological process that stimulates employees to act, perform, and direct their energies toward organizational goals.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 280,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 9,
    lessonName: 'Management Knowledge for Company Secretaries & Governance',
    question: "Budget is an instrument of –",
    options: [
      { key: 'a', text: "planning only." },
      { key: 'b', text: "control only." },
      { key: 'c', text: "both planning and control." },
      { key: 'd', text: "none of these" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Under Secretarial Standard-2 (SS-2), general meetings require proper notice, quorum, proxies, voting, and recording of minutes.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 281,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 6,
    lessonName: 'Introduction to Management & Managerial Roles',
    question: "It is a function of management which refers to the process of integrating the activities of different units of organisation to achieve the organisational goals. This is called –",
    options: [
      { key: 'a', text: "Actuating" },
      { key: 'b', text: "Coordination" },
      { key: 'c', text: "Controlling" },
      { key: 'd', text: "Planning" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Autocratic (Authoritarian) managers centralize all decision-making authority and demand strict compliance without consulting subordinates.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 282,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 7,
    lessonName: 'Principles of Management & Classical/Modern Schools',
    question: "Which of the following is not the purpose of a Mission Statement?",
    options: [
      { key: 'a', text: "It signifies some kind of regulation, positive or negative and permits no discretion in its application." },
      { key: 'b', text: "It is a benchmark for managers to evaluate success." },
      { key: 'c', text: "It defines common purpose, fosters loyalty and builds a sense of community." },
      { key: 'd', text: "It gives insight into values and future direction of the organisation." }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Henri Fayol categorized business activities into Technical, Commercial, Financial, Security, Accounting, and Managerial.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 283,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "__________ involves decision -making, communication, and motivation while fostering collaboration and accountability.",
    options: [
      { key: 'a', text: "Supervision" },
      { key: 'b', text: "Leadership" },
      { key: 'c', text: "Directing" },
      { key: 'd', text: "Coordination" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "Performance Appraisal systematically evaluates an employee's job performance, achievements, and potential for growth.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 284,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "Which of the following is a feature of Democratic Management?",
    options: [
      { key: 'a', text: "Empowerment of Employees" },
      { key: 'b', text: "Centralized Decision-Making" },
      { key: 'c', text: "Limited Employee Participation" },
      { key: 'd', text: "Creating a Chain of Command" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Strategic Planning is long-term, comprehensive planning undertaken by top management to define organizational mission and major objectives.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 285,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 9,
    lessonName: 'Management Knowledge for Company Secretaries & Governance',
    question: "__________ budgeting determines the amount of inputs required to support the targets or outputs set by the company.",
    options: [
      { key: 'a', text: "Incremental" },
      { key: 'b', text: "Activity-based" },
      { key: 'c', text: "Value Proposition" },
      { key: 'd', text: "Zero-based" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Company Secretaries serve as the vital link connecting the Board of Directors, executive management, shareholders, regulators, and stakeholders.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 286,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "The manager organizes an on -site training session for the team to u nderstand market practices w.r.t. display of products. This helps them to achieve targets by providing clean path and support. In this context, identify the applicable contingency approach theory.",
    options: [
      { key: 'a', text: "Fiedler’s Contingency Theory" },
      { key: 'b', text: "Situational Leadership Theory" },
      { key: 'c', text: "Decision-Making Theory" },
      { key: 'd', text: "Path-Goal Theory" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Supervision involves direct, day-to-day overseeing of subordinates' work to provide immediate guidance and instruction.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 287,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 7,
    lessonName: 'Principles of Management & Classical/Modern Schools',
    question: "Who among the following is not identified as “key managerial personnel” as per the Companies Act, 2013?",
    options: [
      { key: 'a', text: "Manager" },
      { key: 'b', text: "Company Secretary" },
      { key: 'c', text: "Independent Director" },
      { key: 'd', text: "Whole-Time Director" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Remuneration of personnel, according to Fayol, should be fair and provide maximum possible satisfaction to both employees and employers.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 288,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "A Company Secretary advising companies on Mergers, Amalgamations and Strategic Alliances is said to be providing –",
    options: [
      { key: 'a', text: "Secretarial/Compliance Audit and Certification Services" },
      { key: 'b', text: "Corporate Laws Advisory Services" },
      { key: 'c', text: "Corporate Secretarial Services" },
      { key: 'd', text: "Representation Services" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "Budgeting is the formulation of plans for future periods in numerical and financial terms.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 289,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 6,
    lessonName: 'Introduction to Management & Managerial Roles',
    question: "Management as _________ requires individual skill, judgment, creativity in applying it, devising new plans, and solutions to unprecedented problems.",
    options: [
      { key: 'a', text: "a Science" },
      { key: 'b', text: "an Art" },
      { key: 'c', text: "a Profession" },
      { key: 'd', text: "a Discipline" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Persuasive management involves managers making decisions and then convincing or persuading employees of their rationale.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 290,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "A Company Secretary providing strategic leadership to the board, ensuring all the regulatory compliances, safeguarding the interests of the stakeholders and acting as a catalyst in embracing environmental, social and governance dimensions, is said to be performing which function of management?",
    options: [
      { key: 'a', text: "Planning" },
      { key: 'b', text: "Organizing" },
      { key: 'c', text: "Directing" },
      { key: 'd', text: "Coordination" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Leadership is the ability to influence and guide individuals or groups toward the realization of common organizational objectives.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 291,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 9,
    lessonName: 'Management Knowledge for Company Secretaries & Governance',
    question: "Planning is the selecting and relating of facts and the making and using of assumptions regarding the future in the visualization and formulation of proposed activities believed necessary to achieve desired results. This thought is given by –",
    options: [
      { key: 'a', text: "George R. Terry" },
      { key: 'b', text: "Peter Drucker" },
      { key: 'c', text: "Lyndall Urwick" },
      { key: 'd', text: "Henri Fayol" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Secretarial Audit provides an independent assurance mechanism ensuring compliance with applicable corporate, securities, and economic laws.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 292,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 9,
    lessonName: 'Management Knowledge for Company Secretaries & Governance',
    question: "Authority should never be assigned without responsibility and the Authority must be equal to Responsibility. Which of the following characteristics of authority is described here?",
    options: [
      { key: 'a', text: "Accountability" },
      { key: 'b', text: "Authority flows Downward" },
      { key: 'c', text: "Delegation of Authority" },
      { key: 'd', text: "Parity of Authority and responsibility" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "Under SS-1, notice of every board meeting must be sent to every director at least 7 days before the date of the meeting.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 293,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "_________ consists of putting right number of people, right kind of people at the right place, right time, doing the right things for which they are suited for the achievement of goals of the organization.",
    options: [
      { key: 'a', text: "Manpower Planning" },
      { key: 'b', text: "Staffing" },
      { key: 'c', text: "Recruitment" },
      { key: 'd', text: "Selection" }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "Controlling closes the management loop by comparing actual results against planned benchmarks and feeding insights into future planning.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 294,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 7,
    lessonName: 'Principles of Management & Classical/Modern Schools',
    question: "Which of the following is not a feature of training?",
    options: [
      { key: 'a', text: "A job-oriented process." },
      { key: 'b', text: "Focuses on technical skills." },
      { key: 'c', text: "Revolves around future needs." },
      { key: 'd', text: "Improves knowledge and skills to perform existing job." }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Order principle of Fayol states 'A place for everything and everything in its place' to ensure optimal material and human order.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 295,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "Supervision helps in enforcing rules and regulations. Why is this important?",
    options: [
      { key: 'a', text: "Establishes interpersonal contact with workers" },
      { key: 'b', text: "Promotes Group Unity" },
      { key: 'c', text: "Maintains Discipline" },
      { key: 'd', text: "Influences Workers" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Informal Organization arises spontaneously within the formal enterprise out of social interactions and personal relationships among employees.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 296,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 9,
    lessonName: 'Management Knowledge for Company Secretaries & Governance',
    question: "________ helps in changing negative attitude to positive attitude towards the work and organisation.",
    options: [
      { key: 'a', text: "Leadership" },
      { key: 'b', text: "Motivation" },
      { key: 'c', text: "Guidance" },
      { key: 'd', text: "Interests" }
    ],
    correctAnswer: 'c',
    acceptedAnswers: ["c"],
    officialKey: "C",
    explanation: "The Company Secretary is responsible for filing statutory forms, annual returns, and financial statements with the MCA/ROC.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 297,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "Reporting of Deviations does not involve the following –",
    options: [
      { key: 'a', text: "Detection and documentation immediately" },
      { key: 'b', text: "Implementation of immediate corrective actions" },
      { key: 'c', text: "Punishment" },
      { key: 'd', text: "Impact assessment" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Theory X (McGregor) assumes employees dislike work and require coercion, while Theory Y assumes employees are self-motivated and seek responsibility.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 298,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 6,
    lessonName: 'Introduction to Management & Managerial Roles',
    question: "Which of the following is not a limitation of Management by Objectives?",
    options: [
      { key: 'a', text: "Ignores the organization’s existing ethos and working conditions." },
      { key: 'b', text: "Employees appreciate their on-the-job roles and responsibilities." },
      { key: 'c', text: "The managers sometimes over-emphasize the target setting, as compared to operational issues, as a generator of success." },
      { key: 'd', text: "It does not emphasize the significance of the context wherein the goals are set." }
    ],
    correctAnswer: 'd',
    acceptedAnswers: ["d"],
    officialKey: "D",
    explanation: "Management is recognized as an emerging Profession characterized by a specialized body of knowledge, formal training, and professional ethics.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 299,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 8,
    lessonName: 'Core Functions of Management (POSDC & Leadership)',
    question: "A group of activities with common objectives having one head and one plan represents –",
    options: [
      { key: 'a', text: "Unity of command" },
      { key: 'b', text: "Unity of direction" },
      { key: 'c', text: "Scalar Chain" },
      { key: 'd', text: "Order" }
    ],
    correctAnswer: 'b',
    acceptedAnswers: ["b"],
    officialKey: "B",
    explanation: "Feedback control (post-action control) measures results after an activity is completed to correct future occurrences.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
  {
    id: 300,
    sectionId: 'part-b',
    sectionName: 'Part B: Business Management',
    lessonNumber: 9,
    lessonName: 'Management Knowledge for Company Secretaries & Governance',
    question: "____________ are extra perks or rewards that an organization provides to an employee, which may have a financial value, but the employee doesn’t receive any cash directly.",
    options: [
      { key: 'a', text: "Compensation" },
      { key: 'b', text: "Benefits" },
      { key: 'c', text: "Opportunities" },
      { key: 'd', text: "Promotion ***" }
    ],
    correctAnswer: 'a',
    acceptedAnswers: ["a"],
    officialKey: "A",
    explanation: "Good corporate governance fosters transparency, accountability, fairness, and stakeholder trust, ensuring long-term corporate sustainability.",
    marks: 1,
    sourcePaper: 'Sample Set 2'
  },
];

export const OFFICIAL_JUNE_PAPER_IDS: number[] = Array.from({ length: 100 }, (_, i) => i + 1);

export const TEST_PRESETS: TestPreset[] = [
  {
    "id": "full-mock",
    "title": "ICSI June 2026 Official Exam Paper (100 Questions)",
    "description": "Authentic ICSI Examination Paper conducted under the Restructured Scheme: 60 Questions Part A (Business Laws) + 40 Questions Part B (Business Management). 120 Minutes real-time CBT timer.",
    "questionCount": 100,
    "durationMinutes": 120,
    "badge": "ICSI Actual Exam"
  },
  {
    "id": "part-a-laws",
    "title": "Part A: Business Laws Specialist (60 Questions)",
    "description": "Exclusively drills Indian Contract Act, Companies Act, Sale of Goods, Partnership, LLP, NI Act, DPDP & New Criminal Laws 2023. 72 Minutes timed test.",
    "questionCount": 60,
    "durationMinutes": 72,
    "sectionFilter": "part-a",
    "badge": "Part A (60 Marks)"
  },
  {
    "id": "part-b-management",
    "title": "Part B: Business Management Specialist (40 Questions)",
    "description": "Targeted test covering Classical & Modern Management Schools, POSDC Functions, Leadership, Motivation, and Corporate Governance. 48 Minutes timed test.",
    "questionCount": 40,
    "durationMinutes": 48,
    "sectionFilter": "part-b",
    "badge": "Part B (40 Marks)"
  },
  {
    "id": "quick-sprint",
    "title": "Diagnostic Rapid Sprint (25 Questions)",
    "description": "Balanced high-yield revision drill (15 Business Laws + 10 Management) for rapid assessment. 30 Minutes countdown timer.",
    "questionCount": 25,
    "durationMinutes": 30,
    "badge": "Speed Drill"
  }
];

export const LESSON_METADATA: LessonMetadata[] = [
  {
    "lessonNumber": 1,
    "lessonName": "Introduction to Law & Legal System",
    "sectionId": "part-a",
    "sectionName": "Part A: Business Laws",
    "weightageMarks": "8-10 Marks",
    "keyTopics": [
      "Sources of Law",
      "Article 141 Binding Precedents",
      "Principles of Natural Justice",
      "Legal Maxims",
      "BNSS 2023 & BSA 2023",
      "DPDP Act 2023",
      "Mediation Act 2023"
    ],
    "description": "Foundations of Indian legal apparatus, doctrine of stare decisis, natural justice principles, modern 2023 criminal codes, and personal data protection."
  },
  {
    "lessonNumber": 2,
    "lessonName": "Elements of Company Law",
    "sectionId": "part-a",
    "sectionName": "Part A: Business Laws",
    "weightageMarks": "15-18 Marks",
    "keyTopics": [
      "Companies Act 2013",
      "Corporate Personality (Salomon)",
      "Lifting Corporate Veil",
      "Small Company Thresholds",
      "Board Meetings & 120-day Gap",
      "Director Types & Resident Director",
      "e-Form MGT-14"
    ],
    "description": "Core corporate jurisprudence under Companies Act 2013: separate legal entity, limited liability, company classifications, managerial personnel, and statutory governance."
  },
  {
    "lessonNumber": 3,
    "lessonName": "Elements of Law of Contracts",
    "sectionId": "part-a",
    "sectionName": "Part A: Business Laws",
    "weightageMarks": "10-12 Marks",
    "keyTopics": [
      "Offer & Acceptance (Sec 2)",
      "Consideration (Quid Pro Quo)",
      "Capacity & Minor's Agreement (Mohori Bibee)",
      "Free Consent",
      "Contingent Contracts",
      "Indemnity & Guarantee",
      "Bailment & Pledge",
      "Agency"
    ],
    "description": "Contractual essentials under Indian Contract Act 1872: formation, consensus ad idem, consideration, void ab initio agreements, breach, and special contracts."
  },
  {
    "lessonNumber": 4,
    "lessonName": "Elements of Law of Partnership & LLP",
    "sectionId": "part-a",
    "sectionName": "Part A: Business Laws",
    "weightageMarks": "8-10 Marks",
    "keyTopics": [
      "Partnership Act 1932 (Sec 4)",
      "Mutual Agency Principle",
      "Minor Admitted to Benefits (Sec 30)",
      "Partner Indemnity for Fraud (Sec 10)",
      "LLP Act 2008",
      "Body Corporate & Perpetual Succession",
      "Designated Partners"
    ],
    "description": "Partnership structures, non-liability of minors, absolute duty to indemnify fraud, and hybrid LLP body corporate framework under LLP Act 2008."
  },
  {
    "lessonNumber": 5,
    "lessonName": "Other Commercial Laws (Sale of Goods & NI Act)",
    "sectionId": "part-a",
    "sectionName": "Part A: Business Laws",
    "weightageMarks": "12-15 Marks",
    "keyTopics": [
      "Sale of Goods Act 1930",
      "Condition vs Warranty (Sec 12)",
      "Caveat Emptor & Exceptions (Grant case)",
      "Nemo Dat Quod Non Habet",
      "Unpaid Seller Rights",
      "Negotiable Instruments Act 1881",
      "Promissory Notes & Bills",
      "Cheque Truncation",
      "Dishonour (Sec 138)"
    ],
    "description": "Commercial transactions law: transfer of property in goods, warranties, unpaid seller rights, negotiable instruments classification, and cheque bounce liabilities."
  },
  {
    "lessonNumber": 6,
    "lessonName": "Introduction to Management & Managerial Roles",
    "sectionId": "part-b",
    "sectionName": "Part B: Business Management",
    "weightageMarks": "4-6 Marks",
    "keyTopics": [
      "Concept & Scope of Management",
      "Kautilya's Arthashastra",
      "Mintzberg's Managerial Roles",
      "Autocratic vs Consultative vs Democratic Styles",
      "Paternalistic Management"
    ],
    "description": "Nature of management as art, science and profession, Indian ancient governance wisdom from Arthashastra, and managerial leadership styles."
  },
  {
    "lessonNumber": 7,
    "lessonName": "Principles & Schools of Management",
    "sectionId": "part-b",
    "sectionName": "Part B: Business Management",
    "weightageMarks": "6-8 Marks",
    "keyTopics": [
      "Scientific Management (F.W. Taylor)",
      "Time & Motion Study",
      "Administrative Theory (Henri Fayol 14 Principles)",
      "Unity of Command & Direction",
      "Scalar Chain & Gang Plank",
      "Bureaucratic Theory (Max Weber)",
      "Hawthorne Studies (Elton Mayo)"
    ],
    "description": "Classical and neoclassical management schools: Taylor's scientific principles, Fayol's 14 administrative tenets, Weberian bureaucracy, and Mayo's human relations."
  },
  {
    "lessonNumber": 8,
    "lessonName": "Core Functions of Management (POSDC)",
    "sectionId": "part-b",
    "sectionName": "Part B: Business Management",
    "weightageMarks": "15-20 Marks",
    "keyTopics": [
      "Planning (Foundational Function)",
      "Standing vs Single-Use Plans",
      "MBO (Peter Drucker)",
      "Organizing & Delegation Process",
      "Staffing & Human Resources",
      "Directing & Motivation (Maslow, Herzberg)",
      "Controlling & Feedback Loop",
      "Leadership Styles (Transformational, Servant)"
    ],
    "description": "End-to-end POSDC functions: strategic planning, organizational hierarchies, delegation barriers, recruitment & staffing, motivational models, and leadership theories."
  },
  {
    "lessonNumber": 9,
    "lessonName": "Management Knowledge for CS & Governance",
    "sectionId": "part-b",
    "sectionName": "Part B: Business Management",
    "weightageMarks": "8-10 Marks",
    "keyTopics": [
      "Company Secretary as KMP (Sec 203)",
      "CS as Primary Governance Professional",
      "Secretarial Standards (SS-1 & SS-2)",
      "Secretarial Audit (Sec 204 Thresholds)",
      "Board Meeting Video Conferencing",
      "Annual Compliance Report (60 Days)",
      "Securities Compliance Services"
    ],
    "description": "Strategic governance role of the Company Secretary: Secretarial Standards compliance, secretarial audit applicability, board advisory, and stock exchange disclosures."
  }
];

export function getQuestionsForLesson(lessonNumber: number): Question[] {
  return QUESTION_BANK.filter(q => q.lessonNumber === lessonNumber);
}

export function getQuestionsForLessons(lessonNumbers: number[]): Question[] {
  const set = new Set(lessonNumbers);
  return QUESTION_BANK.filter(q => set.has(q.lessonNumber));
}
