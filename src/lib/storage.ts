import { TestSession, TestResult, UserResponse, Question, SectionId, CustomSessionConfig } from '@/types';
import { QUESTION_BANK, LESSON_METADATA } from './questionBank';

const ACTIVE_TEST_KEY = 'cseet_active_test_session';
const TEST_HISTORY_KEY = 'cseet_test_history';
const CANDIDATE_NAME_KEY = 'cseet_candidate_name';

export function getSavedCandidateName(): string {
  if (typeof window === 'undefined') return "Candidate";
  return localStorage.getItem(CANDIDATE_NAME_KEY) || "Candidate";
}

export function saveCandidateName(name: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(CANDIDATE_NAME_KEY, name.trim() || "Candidate");
}

export function createNewSession(
  presetId: string,
  candidateName: string = "Candidate",
  customConfig?: CustomSessionConfig
): TestSession {
  let selectedQuestions: Question[] = [];
  let testTitle = 'ICSI CSEET Paper 4: Full Official Mock Exam';
  let durationMinutes = 120;
  let practiceMode: 'exam' | 'study' = customConfig?.mode || 'exam';
  let selectedLessons: number[] | undefined = undefined;

  // The 100 benchmark questions from the official June 2026 Examination Paper
  const officialJuneQuestions = QUESTION_BANK.filter(q => q.sourcePaper === 'June 2026' || q.id <= 100);

  if (presetId === 'part-a-laws') {
    selectedQuestions = officialJuneQuestions.filter(q => q.sectionId === 'part-a');
    testTitle = 'Part A: Business Laws Specialist Mock';
    durationMinutes = 72;
  } else if (presetId === 'part-b-management') {
    selectedQuestions = officialJuneQuestions.filter(q => q.sectionId === 'part-b');
    testTitle = 'Part B: Business Management Specialist Mock';
    durationMinutes = 48;
  } else if (presetId === 'quick-sprint') {
    const partA = officialJuneQuestions.filter(q => q.sectionId === 'part-a').slice(0, 15);
    const partB = officialJuneQuestions.filter(q => q.sectionId === 'part-b').slice(0, 10);
    selectedQuestions = [...partA, ...partB];
    testTitle = 'Diagnostic Rapid Sprint (25Q)';
    durationMinutes = 30;
  } else if (presetId.startsWith('chapter-')) {
    // Single Chapter Specialist Drill
    const lessonNum = parseInt(presetId.replace('chapter-', ''), 10);
    selectedQuestions = QUESTION_BANK.filter(q => q.lessonNumber === lessonNum);
    const lessonMeta = LESSON_METADATA.find(l => l.lessonNumber === lessonNum);
    selectedLessons = [lessonNum];
    testTitle = `Chapter ${lessonNum}: ${lessonMeta?.lessonName || 'Specialist Drill'} (${selectedQuestions.length}Q)`;
    durationMinutes = Math.max(15, Math.round(selectedQuestions.length * 1.2));
  } else if (presetId === 'custom-topic' && customConfig) {
    // Custom Multi-Topic / Unit Selection
    const set = new Set(customConfig.lessonNumbers);
    selectedLessons = customConfig.lessonNumbers;
    let pool = QUESTION_BANK.filter(q => set.has(q.lessonNumber));
    if (customConfig.questionCount && customConfig.questionCount < pool.length) {
      // Shuffle or slice deterministically
      pool = pool.slice(0, customConfig.questionCount);
    }
    selectedQuestions = pool;
    practiceMode = customConfig.mode || 'exam';
    testTitle = `Custom Topic Test: ${selectedLessons.length} Unit(s) (${selectedQuestions.length}Q)`;
    durationMinutes = Math.max(15, Math.round(selectedQuestions.length * 1.2));
  } else {
    // Default Full Official Mock Exam (100 Questions)
    selectedQuestions = [...officialJuneQuestions];
    testTitle = 'ICSI CSEET Paper 4: Full Official Mock Exam';
    durationMinutes = 120;
  }

  const responses: Record<number, UserResponse> = {};
  selectedQuestions.forEach((q, idx) => {
    responses[q.id] = {
      questionId: q.id,
      selectedOption: null,
      status: idx === 0 ? 'not-answered' : 'not-visited',
      timeSpentSeconds: 0
    };
  });

  const session: TestSession = {
    testId: `cseet-${presetId}-${Date.now()}`,
    presetId,
    testTitle,
    candidateName: candidateName || "Candidate",
    rollNumber: `CSEET-${Math.floor(100000 + Math.random() * 900000)}`,
    startTime: Date.now(),
    durationMinutes,
    remainingSeconds: durationMinutes * 60,
    activeQuestionIndex: 0,
    activeSection: selectedQuestions[0]?.sectionId || 'part-a',
    responses,
    isSubmitted: false,
    isPaused: false,
    questionIds: selectedQuestions.map(q => q.id),
    practiceMode,
    selectedLessons
  };

  saveActiveSession(session);
  return session;
}

export function saveActiveSession(session: TestSession): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(ACTIVE_TEST_KEY, JSON.stringify(session));
}

export function pauseActiveSession(): TestSession | null {
  const session = getActiveSession();
  if (!session || session.isSubmitted) return null;
  const updated: TestSession = {
    ...session,
    isPaused: true,
    pausedAt: Date.now()
  };
  saveActiveSession(updated);
  return updated;
}

export function resumeActiveSession(): TestSession | null {
  const session = getActiveSession();
  if (!session || session.isSubmitted) return null;
  const updated: TestSession = {
    ...session,
    isPaused: false,
    pausedAt: undefined
  };
  saveActiveSession(updated);
  return updated;
}

export function getActiveSession(): TestSession | null {
  if (typeof window === 'undefined') return null;
  const data = localStorage.getItem(ACTIVE_TEST_KEY);
  if (!data) return null;
  try {
    const session = JSON.parse(data) as TestSession;
    if (!session || !session.testId) return null;
    if (!Array.isArray(session.questionIds) || session.questionIds.length === 0) {
      const respKeys = Object.keys(session.responses || {}).map(Number).filter(n => !isNaN(n) && n > 0);
      session.questionIds = respKeys.length > 0 ? respKeys : QUESTION_BANK.map(q => q.id);
    }
    return session;
  } catch (e) {
    console.error('Failed to parse active test session', e);
    return null;
  }
}

export function clearActiveSession(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(ACTIVE_TEST_KEY);
}

export function calculateTestResult(session: TestSession): TestResult {
  const resolvedQuestionIds = Array.isArray(session.questionIds) && session.questionIds.length > 0
    ? session.questionIds
    : Object.keys(session.responses || {}).map(Number).filter(n => !isNaN(n) && n > 0);

  const safeQuestionIds = resolvedQuestionIds.length > 0
    ? resolvedQuestionIds
    : QUESTION_BANK.map(q => q.id);

  const questions = safeQuestionIds
    .map(id => QUESTION_BANK.find(q => q.id === id))
    .filter(Boolean) as Question[];

  let correctCount = 0;
  let incorrectCount = 0;
  let attemptedCount = 0;
  let markedForReviewCount = 0;

  // Section level metrics
  const sectionStats: Record<SectionId, { total: number; attempted: number; correct: number; score: number }> = {
    'part-a': { total: 0, attempted: 0, correct: 0, score: 0 },
    'part-b': { total: 0, attempted: 0, correct: 0, score: 0 }
  };

  questions.forEach(q => {
    const resp = session.responses[q.id];
    sectionStats[q.sectionId].total += 1;

    if (resp?.status === 'marked-for-review' || resp?.status === 'answered-marked-review') {
      markedForReviewCount++;
    }

    const hasValidAnswer = Boolean(resp && resp.selectedOption !== null);

    if (hasValidAnswer) {
      attemptedCount++;
      sectionStats[q.sectionId].attempted += 1;

      // Ensure status is normalized if an option was selected
      if (resp.status === 'marked-for-review') {
        resp.status = 'answered-marked-review';
      } else if (resp.status !== 'answered-marked-review') {
        resp.status = 'answered';
      }

      // Check accepted answers (supporting official alternate keys)
      const isCorrect = q.acceptedAnswers && q.acceptedAnswers.length > 0
        ? q.acceptedAnswers.includes(resp.selectedOption!)
        : resp.selectedOption === q.correctAnswer;

      if (isCorrect) {
        correctCount++;
        sectionStats[q.sectionId].correct += 1;
        sectionStats[q.sectionId].score += 1;
      } else {
        incorrectCount++;
      }
    }
  });

  const totalQuestions = questions.length;
  const score = correctCount; // +1, -0
  const percentage = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;
  const skippedCount = totalQuestions - attemptedCount;
  const accuracy = attemptedCount > 0 ? (correctCount / attemptedCount) * 100 : 0;
  const totalDurationSec = session.durationMinutes * 60;
  const timeTakenSeconds = Math.max(0, Math.min(totalDurationSec, totalDurationSec - session.remainingSeconds));

  const isQualified = percentage >= 40.0; // ICSI individual paper passing mark is 40%

  const result: TestResult = {
    testId: session.testId,
    presetId: session.presetId || 'full-mock',
    testTitle: session.testTitle,
    candidateName: session.candidateName,
    completedAt: new Date().toISOString(),
    timeTakenSeconds,
    totalQuestions,
    totalMarks: totalQuestions,
    score,
    percentage: Math.round(percentage * 10) / 10,
    isQualified,
    accuracy: Math.round(accuracy * 10) / 10,
    attemptedCount,
    correctCount,
    incorrectCount,
    skippedCount,
    markedForReviewCount,
    sectionScores: [
      {
        sectionId: 'part-a' as SectionId,
        sectionName: 'Part A: Business Laws',
        totalQuestions: sectionStats['part-a'].total,
        attempted: sectionStats['part-a'].attempted,
        correct: sectionStats['part-a'].correct,
        score: sectionStats['part-a'].score,
        accuracy: sectionStats['part-a'].attempted > 0
          ? Math.round((sectionStats['part-a'].correct / sectionStats['part-a'].attempted) * 1000) / 10
          : 0
      },
      {
        sectionId: 'part-b' as SectionId,
        sectionName: 'Part B: Business Management',
        totalQuestions: sectionStats['part-b'].total,
        attempted: sectionStats['part-b'].attempted,
        correct: sectionStats['part-b'].correct,
        score: sectionStats['part-b'].score,
        accuracy: sectionStats['part-b'].attempted > 0
          ? Math.round((sectionStats['part-b'].correct / sectionStats['part-b'].attempted) * 1000) / 10
          : 0
      }
    ].filter(s => s.totalQuestions > 0),
    responses: session.responses,
    questionIds: safeQuestionIds,
    practiceMode: session.practiceMode,
    selectedLessons: session.selectedLessons
  };

  saveTestHistory(result);
  return result;
}

export function saveTestHistory(result: TestResult): void {
  if (typeof window === 'undefined') return;
  try {
    const history = getTestHistory();
    history.unshift(result);
    // Keep last 25 test results
    localStorage.setItem(TEST_HISTORY_KEY, JSON.stringify(history.slice(0, 25)));
  } catch (e) {
    console.error('Failed to save test history', e);
  }
}

export function getTestHistory(): TestResult[] {
  if (typeof window === 'undefined') return [];
  const data = localStorage.getItem(TEST_HISTORY_KEY);
  if (!data) return [];
  try {
    const list = JSON.parse(data) as TestResult[];
    return list.map(r => {
      if (!Array.isArray(r.questionIds) || r.questionIds.length === 0) {
        const ids = Object.keys(r.responses || {}).map(Number).filter(n => !isNaN(n) && n > 0);
        return {
          ...r,
          questionIds: ids.length > 0 ? ids : QUESTION_BANK.map(q => q.id)
        };
      }
      return r;
    });
  } catch (e) {
    console.error('Failed to parse test history', e);
    return [];
  }
}

export function getLatestResult(): TestResult | null {
  const history = getTestHistory();
  return history.length > 0 ? history[0] : null;
}

export function getResultById(testId: string): TestResult | null {
  const history = getTestHistory();
  return history.find(r => r.testId === testId) || null;
}

export function clearTestHistory(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(TEST_HISTORY_KEY);
}

