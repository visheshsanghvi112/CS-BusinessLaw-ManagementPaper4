import { Question, TestPreset } from '@/types';

/**
 * ICSI CSEET Paper 4: Business Laws and Management
 * Official Restructured Examination & Mock Question Bank
 * Source: ICSI Directorate of Academics & Research (DAR) & June 2026 Examination Guideline Answers
 * Total Questions: 100 (60 Business Laws + 40 Business Management)
 * Marking Scheme: +1 for Correct, 0 for Incorrect (Zero Negative Marking)
 * Qualifying Criteria: Minimum 40% (40 Marks) in this paper, 50% Aggregate across all papers
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
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
    marks: 1
  },
];

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
