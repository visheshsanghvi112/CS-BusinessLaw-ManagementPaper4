import {
  TestSession,
  TestResult,
  UserResponse,
  Question,
  GateSectionId,
  GateSubjectId,
  CustomSessionConfig,
  MistakeRecord,
  MistakeErrorTag
} from '@/types';
import { QUESTION_BANK, SUBJECT_METADATA } from './questionBank';

const ACTIVE_TEST_KEY = 'gate_active_test_session';
const TEST_HISTORY_KEY = 'gate_test_history';
const CANDIDATE_NAME_KEY = 'gate_candidate_name';
const BOOKMARKS_KEY = 'gate_bookmarked_questions';

export function getSavedCandidateName(): string {
  if (typeof window === 'undefined') return "Candidate";
  return localStorage.getItem(CANDIDATE_NAME_KEY) || "Candidate";
}

export function saveCandidateName(name: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(CANDIDATE_NAME_KEY, name.trim() || "Candidate");
}

export function getBookmarkedQuestionIds(): (string | number)[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(BOOKMARKS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function toggleQuestionBookmark(questionId: string | number): boolean {
  if (typeof window === 'undefined') return false;
  const current = getBookmarkedQuestionIds();
  const exists = current.includes(questionId);
  const updated = exists ? current.filter(id => id !== questionId) : [...current, questionId];
  localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(updated));
  return !exists;
}

export function createNewSession(
  presetId: string,
  candidateName: string = "Candidate",
  customConfig?: CustomSessionConfig
): TestSession {
  let selectedQuestions: Question[] = [];
  let testTitle = 'GATE CS 2027: Full Official Mock Exam';
  let durationMinutes = 180;
  let practiceMode: 'exam' | 'study' = customConfig?.mode || 'exam';
  let selectedSubjects: GateSubjectId[] | undefined = undefined;

  if (presetId === 'gate-2026-cs1') {
    selectedQuestions = QUESTION_BANK.filter(q => q.year === 2026 && q.paperSet === 'CS1');
    testTitle = 'GATE 2026 (Shift 1) Official Mock Exam — IIT Guwahati';
    durationMinutes = 180;
  } else if (presetId === 'gate-2026-cs2') {
    selectedQuestions = QUESTION_BANK.filter(q => q.year === 2026 && q.paperSet === 'CS2');
    testTitle = 'GATE 2026 (Shift 2) Official Mock Exam — IIT Guwahati';
    durationMinutes = 180;
  } else if (presetId === 'gate-2025-cs1') {
    selectedQuestions = QUESTION_BANK.filter(q => q.year === 2025 && q.paperSet === 'CS1');
    testTitle = 'GATE 2025 (Shift 1) Official Mock Exam — IIT Roorkee';
    durationMinutes = 180;
  } else if (presetId === 'gate-2025-cs2') {
    selectedQuestions = QUESTION_BANK.filter(q => q.year === 2025 && q.paperSet === 'CS2');
    testTitle = 'GATE 2025 (Shift 2) Official Mock Exam — IIT Roorkee';
    durationMinutes = 180;
  } else if (presetId === 'gate-2024-cs1') {
    selectedQuestions = QUESTION_BANK.filter(q => q.year === 2024 && q.paperSet === 'CS1');
    testTitle = 'GATE 2024 (Set 1) Benchmark Mock Exam — IISc Bengaluru';
    durationMinutes = 180;
  } else if (presetId === 'gate-2024-cs2') {
    selectedQuestions = QUESTION_BANK.filter(q => q.year === 2024 && q.paperSet === 'CS2');
    testTitle = 'GATE 2024 (Set 2) Benchmark Mock Exam — IISc Bengaluru';
    durationMinutes = 180;
  } else if (presetId === 'quick-sprint-30') {
    // 30 high-yield questions sampled across core CS subjects
    const ga = QUESTION_BANK.filter(q => q.sectionId === 'GA').slice(0, 5);
    const cs = QUESTION_BANK.filter(q => q.sectionId === 'CS').slice(0, 25);
    selectedQuestions = [...ga, ...cs];
    testTitle = 'Diagnostic Rapid Sprint (30Q)';
    durationMinutes = 45;
  } else if (presetId === 'general-aptitude-sprint') {
    selectedQuestions = QUESTION_BANK.filter(q => q.sectionId === 'GA').slice(0, 20);
    testTitle = 'General Aptitude Mastery Drill (20Q)';
    durationMinutes = 30;
  } else if (presetId.startsWith('subject-')) {
    const subjId = presetId.replace('subject-', '') as GateSubjectId;
    selectedQuestions = QUESTION_BANK.filter(q => q.subjectId === subjId);
    const meta = SUBJECT_METADATA.find(s => s.subjectId === subjId);
    selectedSubjects = [subjId];
    testTitle = `${meta?.subjectName || 'Subject'} Specialist Drill (${selectedQuestions.length}Q)`;
    durationMinutes = Math.max(20, Math.round(selectedQuestions.length * 2.5));
  } else if (presetId === 'custom-subject' && customConfig) {
    const set = new Set(customConfig.subjectIds || []);
    selectedSubjects = customConfig.subjectIds;
    let pool = QUESTION_BANK.filter(q => set.has(q.subjectId));
    if (customConfig.types && customConfig.types.length > 0) {
      const typeSet = new Set(customConfig.types);
      pool = pool.filter(q => typeSet.has(q.type));
    }
    if (customConfig.questionCount && customConfig.questionCount < pool.length) {
      pool = pool.slice(0, customConfig.questionCount);
    }
    selectedQuestions = pool;
    testTitle = `Custom Multi-Subject Drill (${selectedQuestions.length}Q)`;
    durationMinutes = Math.max(15, Math.round(selectedQuestions.length * 2.5));
  } else if (presetId === 'mistakes-drill') {
    const mistakes = getMistakeRecords().filter(m => !m.isResolved);
    const mIds = new Set(mistakes.map(m => String(m.questionId)));
    selectedQuestions = QUESTION_BANK.filter(q => mIds.has(String(q.id)));
    if (selectedQuestions.length === 0) {
      selectedQuestions = QUESTION_BANK.slice(0, 15);
    }
    testTitle = `Targeted Mistake Remediation Drill (${selectedQuestions.length}Q)`;
    durationMinutes = Math.max(15, Math.round(selectedQuestions.length * 2.5));
  } else if (presetId === 'bookmarks-drill') {
    const bIds = new Set(getBookmarkedQuestionIds().map(id => String(id)));
    selectedQuestions = QUESTION_BANK.filter(q => bIds.has(String(q.id)));
    if (selectedQuestions.length === 0) {
      selectedQuestions = QUESTION_BANK.slice(0, 15);
    }
    testTitle = `Bookmarked Starred Questions Drill (${selectedQuestions.length}Q)`;
    durationMinutes = Math.max(15, Math.round(selectedQuestions.length * 2.5));
  } else if (presetId === 'custom-archive' && customConfig) {
    let pool = [...QUESTION_BANK];
    if (customConfig.years && customConfig.years.length > 0) {
      const yearSet = new Set(customConfig.years);
      pool = pool.filter(q => q.year && yearSet.has(q.year));
    }
    if (customConfig.subjectIds && customConfig.subjectIds.length > 0) {
      const subjSet = new Set(customConfig.subjectIds);
      pool = pool.filter(q => subjSet.has(q.subjectId));
      selectedSubjects = customConfig.subjectIds;
    }
    if (customConfig.types && customConfig.types.length > 0) {
      const typeSet = new Set(customConfig.types);
      pool = pool.filter(q => typeSet.has(q.type));
    }
    if (customConfig.marks && customConfig.marks.length > 0) {
      const marksSet = new Set(customConfig.marks);
      pool = pool.filter(q => marksSet.has(q.marks));
    }
    if (customConfig.specificQuestionIds && customConfig.specificQuestionIds.length > 0) {
      const qidSet = new Set(customConfig.specificQuestionIds.map(id => String(id)));
      pool = pool.filter(q => qidSet.has(String(q.id)));
    }
    if (customConfig.questionCount && customConfig.questionCount < pool.length) {
      pool = pool.slice(0, customConfig.questionCount);
    }
    selectedQuestions = pool;
    testTitle = `Custom Archive Practice Test (${selectedQuestions.length}Q)`;
    durationMinutes = customConfig.durationMinutes || Math.max(15, Math.round(selectedQuestions.length * 2.5));
  } else {
    // Fallback: Default to latest GATE 2026 Shift 1
    selectedQuestions = QUESTION_BANK.filter(q => q.year === 2026 && q.paperSet === 'CS1');
    if (selectedQuestions.length === 0) {
      selectedQuestions = QUESTION_BANK.slice(0, 65);
    }
  }

  // Fallback safety if questions array empty
  if (selectedQuestions.length === 0) {
    selectedQuestions = QUESTION_BANK.slice(0, Math.min(65, QUESTION_BANK.length));
  }

  // Sort questions: GA first (Q1-Q10), then CS Core
  selectedQuestions.sort((a, b) => {
    if (a.sectionId === 'GA' && b.sectionId !== 'GA') return -1;
    if (a.sectionId !== 'GA' && b.sectionId === 'GA') return 1;
    return a.questionNumber - b.questionNumber;
  });

  const responses: Record<string | number, UserResponse> = {};
  selectedQuestions.forEach(q => {
    responses[q.id] = {
      questionId: q.id,
      selectedOption: null,
      selectedOptions: [],
      natValue: '',
      status: 'not-visited',
      timeSpentSeconds: 0
    };
  });

  const session: TestSession = {
    testId: `gate_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
    presetId,
    testTitle,
    candidateName: candidateName.trim() || 'Candidate',
    rollNumber: `GATE2027-${Math.floor(100000 + Math.random() * 900000)}`,
    startTime: Date.now(),
    durationMinutes,
    remainingSeconds: durationMinutes * 60,
    activeQuestionIndex: 0,
    activeSection: selectedQuestions[0]?.sectionId || 'GA',
    responses,
    isSubmitted: false,
    questionIds: selectedQuestions.map(q => q.id),
    practiceMode,
    selectedSubjects
  };

  saveActiveSession(session);
  return session;
}

export function getActiveSession(): TestSession | null {
  if (typeof window === 'undefined') return null;
  const raw = localStorage.getItem(ACTIVE_TEST_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function saveActiveSession(session: TestSession): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(ACTIVE_TEST_KEY, JSON.stringify(session));
}

export function clearActiveSession(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(ACTIVE_TEST_KEY);
}

// Evaluate answer correctness strictly according to GATE rules
export function evaluateAnswer(
  q: Question,
  resp: UserResponse | undefined
): { isAttempted: boolean; isCorrect: boolean; marksAwarded: number; negativeIncurred: number } {
  if (!resp) return { isAttempted: false, isCorrect: false, marksAwarded: 0, negativeIncurred: 0 };

  if (q.type === 'NAT') {
    const valStr = resp.natValue !== undefined && resp.natValue !== null ? String(resp.natValue).trim() : '';
    if (!valStr) return { isAttempted: false, isCorrect: false, marksAwarded: 0, negativeIncurred: 0 };
    const num = parseFloat(valStr);
    if (isNaN(num)) return { isAttempted: true, isCorrect: false, marksAwarded: 0, negativeIncurred: 0 };

    let isCorrect = false;
    if (q.natAnswerRange) {
      isCorrect = num >= q.natAnswerRange.min && num <= q.natAnswerRange.max;
    } else if (q.natAnswer !== undefined && q.natAnswer !== null) {
      isCorrect = Math.abs(num - q.natAnswer) < 0.05;
    }

    // NAT has ZERO negative marking
    return {
      isAttempted: true,
      isCorrect,
      marksAwarded: isCorrect ? q.marks : 0,
      negativeIncurred: 0
    };
  }

  if (q.type === 'MSQ') {
    const selected = (resp.selectedOptions || []).map(s => s.toLowerCase()).sort();
    if (selected.length === 0) return { isAttempted: false, isCorrect: false, marksAwarded: 0, negativeIncurred: 0 };

    const correct = (q.correctAnswers || [q.correctAnswer || 'a']).map(s => s.toLowerCase()).sort();

    // MSQ rule: All correct options must be selected, no extra option. ZERO partial marking, ZERO negative marks.
    const isCorrect = selected.length === correct.length && selected.every((val, idx) => val === correct[idx]);

    return {
      isAttempted: true,
      isCorrect,
      marksAwarded: isCorrect ? q.marks : 0,
      negativeIncurred: 0
    };
  }

  // MCQ
  const opt = resp.selectedOption ? resp.selectedOption.toLowerCase() : null;
  if (!opt) return { isAttempted: false, isCorrect: false, marksAwarded: 0, negativeIncurred: 0 };

  const isCorrect = opt === (q.correctAnswer || 'a').toLowerCase();
  const neg = isCorrect ? 0 : (q.marks === 1 ? 0.33 : 0.66);

  return {
    isAttempted: true,
    isCorrect,
    marksAwarded: isCorrect ? q.marks : -neg,
    negativeIncurred: isCorrect ? 0 : neg
  };
}

export function calculateTestResult(session: TestSession): TestResult {
  const qMap = new Map<string | number, Question>();
  QUESTION_BANK.forEach(q => qMap.set(q.id, q));

  let totalMarks = 0;
  let score = 0;
  let attemptedCount = 0;
  let correctCount = 0;
  let incorrectCount = 0;
  let skippedCount = 0;
  let markedForReviewCount = 0;
  let negativeMarksIncurred = 0;

  const sectionMap = new Map<GateSectionId, {
    sectionId: GateSectionId;
    sectionName: string;
    totalQuestions: number;
    attempted: number;
    correct: number;
    score: number;
    totalMarks: number;
  }>();

  const subjectMap = new Map<GateSubjectId, {
    subjectId: GateSubjectId;
    subjectName: string;
    totalQuestions: number;
    attempted: number;
    correct: number;
    score: number;
  }>();

  session.questionIds.forEach(qId => {
    const q = qMap.get(qId);
    if (!q) return;

    totalMarks += q.marks;
    const resp = session.responses[qId];

    // Initialize section accumulator
    if (!sectionMap.has(q.sectionId)) {
      sectionMap.set(q.sectionId, {
        sectionId: q.sectionId,
        sectionName: q.sectionId === 'GA' ? 'General Aptitude' : 'Computer Science & Engineering Mathematics',
        totalQuestions: 0,
        attempted: 0,
        correct: 0,
        score: 0,
        totalMarks: 0
      });
    }
    const secStats = sectionMap.get(q.sectionId)!;
    secStats.totalQuestions++;
    secStats.totalMarks += q.marks;

    // Initialize subject accumulator
    if (!subjectMap.has(q.subjectId)) {
      subjectMap.set(q.subjectId, {
        subjectId: q.subjectId,
        subjectName: q.subjectName,
        totalQuestions: 0,
        attempted: 0,
        correct: 0,
        score: 0
      });
    }
    const subjStats = subjectMap.get(q.subjectId)!;
    subjStats.totalQuestions++;

    if (resp?.status === 'marked-for-review' || resp?.status === 'answered-marked-review') {
      markedForReviewCount++;
    }

    const { isAttempted, isCorrect, marksAwarded, negativeIncurred } = evaluateAnswer(q, resp);

    if (isAttempted) {
      attemptedCount++;
      secStats.attempted++;
      subjStats.attempted++;
      score += marksAwarded;
      secStats.score += marksAwarded;
      subjStats.score += marksAwarded;
      negativeMarksIncurred += negativeIncurred;

      if (isCorrect) {
        correctCount++;
        secStats.correct++;
        subjStats.correct++;
      } else {
        incorrectCount++;
      }
    } else {
      skippedCount++;
    }
  });

  const accuracy = attemptedCount > 0 ? (correctCount / attemptedCount) * 100 : 0;
  const percentage = totalMarks > 0 ? (score / totalMarks) * 100 : 0;
  const cutoffMarks = 28.5; // Typical General category cutoff for GATE CS
  const isQualified = score >= cutoffMarks;

  const sectionScores = Array.from(sectionMap.values()).map(s => ({
    ...s,
    score: Math.round(s.score * 100) / 100,
    accuracy: s.attempted > 0 ? Math.round((s.correct / s.attempted) * 100) : 0
  }));

  const subjectScores = Array.from(subjectMap.values()).map(s => ({
    ...s,
    score: Math.round(s.score * 100) / 100,
    accuracy: s.attempted > 0 ? Math.round((s.correct / s.attempted) * 100) : 0
  }));

  const timeTaken = (session.durationMinutes * 60) - session.remainingSeconds;

  const result: TestResult = {
    testId: session.testId,
    presetId: session.presetId,
    testTitle: session.testTitle,
    candidateName: session.candidateName,
    completedAt: new Date().toISOString(),
    timeTakenSeconds: Math.max(0, timeTaken),
    totalQuestions: session.questionIds.length,
    totalMarks,
    score: Math.round(score * 100) / 100,
    percentage: Math.round(percentage * 100) / 100,
    cutoffMarks,
    isQualified,
    accuracy: Math.round(accuracy * 100) / 100,
    attemptedCount,
    correctCount,
    incorrectCount,
    skippedCount,
    markedForReviewCount,
    negativeMarksIncurred: Math.round(negativeMarksIncurred * 100) / 100,
    sectionScores,
    subjectScores,
    responses: session.responses,
    questionIds: session.questionIds,
    practiceMode: session.practiceMode
  };

  saveTestResult(result);

  // Automatically catalog mistakes in Mistake Notebook
  try {
    const existingMistakes = getMistakeRecords();
    const mistakeMap = new Map(existingMistakes.map(m => [String(m.questionId), m]));

    session.questionIds.forEach(qid => {
      const q = qMap.get(qid);
      if (!q) return;
      const resp = session.responses[qid];
      const { isAttempted, isCorrect } = evaluateAnswer(q, resp);

      const qidStr = String(qid);
      if (isAttempted && !isCorrect) {
        const prev = mistakeMap.get(qidStr);
        mistakeMap.set(qidStr, {
          questionId: q.id,
          testId: session.testId,
          testTitle: session.testTitle,
          subjectId: q.subjectId,
          subjectName: q.subjectName,
          questionType: q.type,
          marks: q.marks,
          attemptedAt: Date.now(),
          errorTag: prev?.errorTag || (q.type === 'NAT' ? 'calculation' : 'trap'),
          userNotes: prev?.userNotes || '',
          isResolved: false
        });
      } else if (isAttempted && isCorrect) {
        if (mistakeMap.has(qidStr)) {
          const prev = mistakeMap.get(qidStr)!;
          mistakeMap.set(qidStr, {
            ...prev,
            isResolved: true,
            attemptedAt: Date.now()
          });
        }
      }
    });

    saveAllMistakeRecords(Array.from(mistakeMap.values()));
  } catch (err) {
    console.error('Failed to update mistake records', err);
  }

  return result;
}

export function saveTestResult(result: TestResult): void {
  if (typeof window === 'undefined') return;
  const history = getTestHistory();
  const updated = [result, ...history.filter(h => h.testId !== result.testId)].slice(0, 50);
  localStorage.setItem(TEST_HISTORY_KEY, JSON.stringify(updated));
}

export function getTestHistory(): TestResult[] {
  if (typeof window === 'undefined') return [];
  const raw = localStorage.getItem(TEST_HISTORY_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function clearTestHistory(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(TEST_HISTORY_KEY);
}

export function getLatestResult(): TestResult | null {
  const history = getTestHistory();
  return history.length > 0 ? history[0] : null;
}

export function getResultById(testId: string): TestResult | null {
  const history = getTestHistory();
  return history.find(r => r.testId === testId) || null;
}

// -------------------------------------------------------------
// Study Portal Completed Topics Tracking
// -------------------------------------------------------------
const COMPLETED_TOPICS_KEY = 'gate_completed_study_topics';

export function getCompletedTopics(): string[] {
  if (typeof window === 'undefined') return [];
  const raw = localStorage.getItem(COMPLETED_TOPICS_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function isTopicCompleted(topicId: string): boolean {
  const list = getCompletedTopics();
  return list.includes(topicId);
}

export function toggleTopicCompletion(topicId: string): boolean {
  if (typeof window === 'undefined') return false;
  const list = getCompletedTopics();
  const exists = list.includes(topicId);
  const updated = exists ? list.filter(id => id !== topicId) : [...list, topicId];
  localStorage.setItem(COMPLETED_TOPICS_KEY, JSON.stringify(updated));
  return !exists;
}

// -------------------------------------------------------------
// Mistake Notebook & Targeted Error Tracking
// -------------------------------------------------------------
const MISTAKES_KEY = 'gate_mistake_records';

export function getMistakeRecords(): MistakeRecord[] {
  if (typeof window === 'undefined') return [];
  const raw = localStorage.getItem(MISTAKES_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function saveAllMistakeRecords(records: MistakeRecord[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(MISTAKES_KEY, JSON.stringify(records.slice(0, 500)));
}

export function updateMistakeTag(questionId: string | number, tag: MistakeErrorTag, userNotes?: string): void {
  const records = getMistakeRecords();
  const index = records.findIndex(r => String(r.questionId) === String(questionId));
  if (index !== -1) {
    records[index].errorTag = tag;
    if (userNotes !== undefined) records[index].userNotes = userNotes;
    saveAllMistakeRecords(records);
  }
}

export function removeMistakeRecord(questionId: string | number): void {
  const records = getMistakeRecords();
  const updated = records.filter(r => String(r.questionId) !== String(questionId));
  saveAllMistakeRecords(updated);
}

export function clearMistakeRecords(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(MISTAKES_KEY);
}



