export type SectionId = 'part-a' | 'part-b';

export type QuestionStatus =
  | 'not-visited'              // ⚪ White/Grey (Initial unvisited)
  | 'not-answered'             // 🔴 Red (Visited but no option saved)
  | 'answered'                 // 🟢 Green (Saved answer)
  | 'marked-for-review'        // 🟣 Purple (Flagged for review, no answer)
  | 'answered-marked-review';  // 🟣🟢 Purple with green dot (Answered AND flagged for review)

export interface Question {
  id: number;
  sectionId: SectionId;
  sectionName: string;
  lessonNumber: number;
  lessonName: string;
  question: string;
  options: {
    key: 'a' | 'b' | 'c' | 'd';
    text: string;
  }[];
  correctAnswer: 'a' | 'b' | 'c' | 'd';
  acceptedAnswers?: ('a' | 'b' | 'c' | 'd')[];
  officialKey?: string;
  explanation: string;
  marks: number;
  sourcePaper?: 'June 2026' | 'Sample Set 1' | 'Sample Set 2' | string;
}

export interface UserResponse {
  questionId: number;
  selectedOption: 'a' | 'b' | 'c' | 'd' | null;
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
  activeSection: SectionId;
  responses: Record<number, UserResponse>;
  isSubmitted: boolean;
  isPaused?: boolean;
  pausedAt?: number;
  questionIds: number[];
  practiceMode?: 'exam' | 'study';
  selectedLessons?: number[];
}

export interface LessonMetadata {
  lessonNumber: number;
  lessonName: string;
  sectionId: SectionId;
  sectionName: string;
  weightageMarks: string;
  keyTopics: string[];
  description: string;
}

export interface CustomSessionConfig {
  lessonNumbers: number[];
  questionCount?: number;
  mode?: 'exam' | 'study';
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
  isQualified: boolean; // >= 40%
  accuracy: number;
  attemptedCount: number;
  correctCount: number;
  incorrectCount: number;
  skippedCount: number;
  markedForReviewCount: number;
  sectionScores: {
    sectionId: SectionId;
    sectionName: string;
    totalQuestions: number;
    attempted: number;
    correct: number;
    score: number;
    accuracy: number;
  }[];
  responses: Record<number, UserResponse>;
  questionIds: number[];
  practiceMode?: 'exam' | 'study';
  selectedLessons?: number[];
}

export interface TestPreset {
  id: string;
  title: string;
  description: string;
  questionCount: number;
  durationMinutes: number;
  sectionFilter?: SectionId;
  badge: string;
}
