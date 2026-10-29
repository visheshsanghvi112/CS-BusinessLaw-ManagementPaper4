export type GateSectionId = 'GA' | 'CS';

export type GateSubjectId =
  | 'general-aptitude'
  | 'discrete-maths'
  | 'linear-algebra'
  | 'calculus'
  | 'probability'
  | 'digital-logic'
  | 'coa'
  | 'programming-ds'
  | 'algorithms'
  | 'toc'
  | 'compiler-design'
  | 'os'
  | 'dbms'
  | 'computer-networks';

export type GateQuestionType = 'MCQ' | 'MSQ' | 'NAT';

export type QuestionStatus =
  | 'not-visited'              // ⚪ White/Grey (Initial unvisited)
  | 'not-answered'             // 🔴 Red (Visited but not answered)
  | 'answered'                 // 🟢 Green (Answer saved)
  | 'marked-for-review'        // 🟣 Purple (Flagged for review, no answer)
  | 'answered-marked-review';  // 🟣🟢 Purple with green dot (Answered AND flagged for review)

export interface Question {
  id: string | number;
  numericId: number;
  year?: number;
  paperSet?: string;
  questionNumber: number;
  sectionId: GateSectionId;    // 'GA' (General Aptitude) or 'CS' (Computer Science & Engg Maths)
  sectionName: string;
  subjectId: GateSubjectId;
  subjectName: string;
  topic?: string;
  type: GateQuestionType;      // 'MCQ' | 'MSQ' | 'NAT'
  question: string;
  options?: {
    key: 'a' | 'b' | 'c' | 'd';
    text: string;
  }[];
  // For MCQ: single letter 'a' | 'b' | 'c' | 'd'
  correctAnswer?: 'a' | 'b' | 'c' | 'd' | null;
  // For MSQ: multiple letters, e.g. ['a', 'c']
  correctAnswers?: ('a' | 'b' | 'c' | 'd')[] | null;
  // For NAT: numerical value or range
  natAnswer?: number | null;
  natAnswerRange?: {
    min: number;
    max: number;
  } | null;
  marks: 1 | 2;
  negativeMarks: number;       // 0.33 for 1M MCQ, 0.66 for 2M MCQ, 0 for MSQ/NAT
  explanation: string;
  sourcePaper: string;         // e.g. "GATE 2026 (CS1)", "GATE 2025 (CS1)", "GATE 2024 (CS1)"
  codeSnippet?: string;
}

export interface UserResponse {
  questionId: string | number;
  // For MCQ
  selectedOption: 'a' | 'b' | 'c' | 'd' | null;
  // For MSQ
  selectedOptions?: ('a' | 'b' | 'c' | 'd')[];
  // For NAT
  natValue?: string | number | null;
  status: QuestionStatus;
  timeSpentSeconds: number;
}

export interface TestSession {
  testId: string;
  presetId?: string;
  testTitle: string;
  candidateName: string;
  rollNumber: string;
  startTime: number;
  durationMinutes: number;
  remainingSeconds: number;
  activeQuestionIndex: number;
  activeSection: GateSectionId;
  responses: Record<string | number, UserResponse>;
  isSubmitted: boolean;
  isPaused?: boolean;
  pausedAt?: number;
  questionIds: (string | number)[];
  practiceMode?: 'exam' | 'study';
  selectedSubjects?: GateSubjectId[];
}

export interface SubjectMetadata {
  subjectId: GateSubjectId;
  subjectName: string;
  sectionId: GateSectionId;
  syllabusSection: string;
  weightageMarks: string;
  keyTopics: string[];
  description: string;
}

export interface CustomSessionConfig {
  subjectIds?: GateSubjectId[];
  questionCount?: number;
  mode?: 'exam' | 'study';
  types?: GateQuestionType[];
  years?: number[];
  marks?: (1 | 2)[];
  durationMinutes?: number;
  specificQuestionIds?: (string | number)[];
}

export type MistakeErrorTag = 'conceptual' | 'calculation' | 'trap' | 'unattempted';

export interface MistakeRecord {
  questionId: string | number;
  testId: string;
  testTitle: string;
  subjectId: GateSubjectId;
  subjectName: string;
  questionType: GateQuestionType;
  marks: 1 | 2;
  attemptedAt: number;
  errorTag: MistakeErrorTag;
  userNotes?: string;
  isResolved?: boolean;
}

export interface FormulaCard {
  id: string;
  subjectId: GateSubjectId;
  subjectName: string;
  topicTitle: string;
  conceptPrompt: string;
  formula: string;
  keyDetails: string[];
  examinerTrap: string;
}

export interface GateScoreEstimate {
  rawScore: number;
  totalMarks: number;
  gateScore: number;            // Out of 1000
  estimatedAirRange: string;    // e.g. "AIR 45 – 120"
  percentile: number;           // e.g. 99.4%
  category: 'TOP_IIT' | 'OLD_IIT' | 'NEW_IIT_TOP_NIT' | 'QUALIFIED' | 'BELOW_CUTOFF';
  eligibleColleges: {
    institute: string;
    branch: string;
    probability: 'Very High' | 'High' | 'Moderate' | 'Borderline';
  }[];
}

export interface TestResult {
  testId: string;
  presetId?: string;
  testTitle: string;
  candidateName: string;
  completedAt: string;
  timeTakenSeconds: number;
  totalQuestions: number;
  totalMarks: number;
  score: number;
  percentage: number;
  isQualified: boolean; // >= 28 marks (typical GATE General cutoff ~27-32)
  cutoffMarks: number;
  accuracy: number;
  attemptedCount: number;
  correctCount: number;
  incorrectCount: number;
  skippedCount: number;
  markedForReviewCount: number;
  negativeMarksIncurred: number;
  sectionScores: {
    sectionId: GateSectionId;
    sectionName: string;
    totalQuestions: number;
    attempted: number;
    correct: number;
    score: number;
    totalMarks: number;
    accuracy: number;
  }[];
  subjectScores: {
    subjectId: GateSubjectId;
    subjectName: string;
    totalQuestions: number;
    attempted: number;
    correct: number;
    score: number;
    accuracy: number;
  }[];
  responses: Record<string | number, UserResponse>;
  questionIds: (string | number)[];
  practiceMode?: 'exam' | 'study';
}

export interface TestPreset {
  id: string;
  title: string;
  year?: number;
  paperSet?: string;
  description: string;
  questionCount: number;
  durationMinutes: number;
  sectionFilter?: GateSectionId;
  badge: string;
  featured?: boolean;
  organizingInstitute?: string;
}
