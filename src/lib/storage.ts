import { TestSession, TestResult, UserResponse, Question, SectionId } from '@/types';
import { QUESTION_BANK } from './questionBank';

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
  candidateName: string = "Candidate"
): TestSession {
  let selectedQuestions: Question[] = [];

  if (presetId === 'part-a-laws') {
    selectedQuestions = QUESTION_BANK.filter(q => q.sectionId === 'part-a');
  } else if (presetId === 'part-b-management') {
    selectedQuestions = QUESTION_BANK.filter(q => q.sectionId === 'part-b');
  } else if (presetId === 'quick-sprint') {
    // 15 from part A, 10 from part B
    const partA = QUESTION_BANK.filter(q => q.sectionId === 'part-a').slice(0, 15);
    const partB = QUESTION_BANK.filter(q => q.sectionId === 'part-b').slice(0, 10);
    selectedQuestions = [...partA, ...partB];
  } else {
    // Default full mock
    selectedQuestions = [...QUESTION_BANK];
  }

  const durationMinutes =
    presetId === 'part-a-laws' ? 72 :
    presetId === 'part-b-management' ? 48 :
    presetId === 'quick-sprint' ? 30 : 120;

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
    testTitle:
      presetId === 'part-a-laws' ? 'Part A: Business Laws Specialist Mock' :
      presetId === 'part-b-management' ? 'Part B: Business Management Specialist Mock' :
      presetId === 'quick-sprint' ? 'Diagnostic Rapid Sprint (25Q)' :
      'ICSI CSEET Paper 4: Full Official Mock Exam',
    candidateName: candidateName || "Candidate",
    rollNumber: `CSEET-${Math.floor(100000 + Math.random() * 900000)}`,
    startTime: Date.now(),
    durationMinutes,
    remainingSeconds: durationMinutes * 60,
    activeQuestionIndex: 0,
    activeSection: selectedQuestions[0]?.sectionId || 'part-a',
    responses,
    isSubmitted: false,
    questionIds: selectedQuestions.map(q => q.id)
  };

  saveActiveSession(session);
  return session;
}

export function saveActiveSession(session: TestSession): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(ACTIVE_TEST_KEY, JSON.stringify(session));
}

export function getActiveSession(): TestSession | null {
  if (typeof window === 'undefined') return null;
  const data = localStorage.getItem(ACTIVE_TEST_KEY);
  if (!data) return null;
  try {
    return JSON.parse(data) as TestSession;
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
  const questions = session.questionIds
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

    const hasValidAnswer = resp && resp.selectedOption !== null && (resp.status === 'answered' || resp.status === 'answered-marked-review');

    if (hasValidAnswer) {
      attemptedCount++;
      sectionStats[q.sectionId].attempted += 1;

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
    questionIds: session.questionIds
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
    return JSON.parse(data) as TestResult[];
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

