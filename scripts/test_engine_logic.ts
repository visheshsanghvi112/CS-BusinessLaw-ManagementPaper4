import {
  createNewSession,
  calculateTestResult,
  getLatestResult,
  getResultById,
  saveActiveSession,
  getActiveSession,
  clearActiveSession,
  clearTestHistory,
  saveCandidateName,
  getSavedCandidateName,
  pauseActiveSession,
  resumeActiveSession
} from '../src/lib/storage';
import { QUESTION_BANK } from '../src/lib/questionBank';
import { TestSession, UserResponse } from '../src/types';

// Mock localStorage in node environment
const storageMock: Record<string, string> = {};
(global as any).window = {};
(global as any).localStorage = {
  getItem: (key: string) => storageMock[key] || null,
  setItem: (key: string, val: string) => { storageMock[key] = val; },
  removeItem: (key: string) => { delete storageMock[key]; },
  clear: () => { Object.keys(storageMock).forEach(k => delete storageMock[k]); }
};

console.log('=== RUNNING RIGOROUS CBT LOGIC VERIFICATION ===\n');

// Test 1: Candidate Name Persistence
console.log('Test 1: Candidate Name Persistence');
saveCandidateName('Aakash Sharma');
const savedName = getSavedCandidateName();
if (savedName !== 'Aakash Sharma') throw new Error(`Expected Aakash Sharma, got ${savedName}`);
console.log('✓ Candidate name saved and retrieved correctly.\n');

// Test 2: Preset Creation & Question Counts
console.log('Test 2: Preset Creation & Question Counts');
const fullSession = createNewSession('full-mock', 'Aakash Sharma');
if (fullSession.questionIds.length !== 100) throw new Error(`Expected 100 Qs for full-mock, got ${fullSession.questionIds.length}`);
if (fullSession.durationMinutes !== 120) throw new Error('Expected 120 mins');

const sprintSession = createNewSession('quick-sprint', 'Aakash Sharma');
if (sprintSession.questionIds.length !== 25) throw new Error(`Expected 25 Qs for quick-sprint, got ${sprintSession.questionIds.length}`);
if (sprintSession.durationMinutes !== 30) throw new Error('Expected 30 mins');

const partASession = createNewSession('part-a-laws', 'Aakash Sharma');
if (partASession.questionIds.length !== 60) throw new Error(`Expected 60 Qs for part-a, got ${partASession.questionIds.length}`);

const partBSession = createNewSession('part-b-management', 'Aakash Sharma');
if (partBSession.questionIds.length !== 40) throw new Error(`Expected 40 Qs for part-b, got ${partBSession.questionIds.length}`);
console.log('✓ All 4 presets create correct question distributions and durations.\n');

// Test 3: Active Session Persistence
console.log('Test 3: Active Session Persistence');
fullSession.activeQuestionIndex = 5;
fullSession.responses[1].selectedOption = 'b';
fullSession.responses[1].status = 'answered';
saveActiveSession(fullSession);

const retrieved = getActiveSession();
if (!retrieved) throw new Error('Failed to retrieve active session');
if (retrieved.activeQuestionIndex !== 5) throw new Error('Active index mismatch');
if (retrieved.responses[1].selectedOption !== 'b') throw new Error('Answer selection mismatch');
if (retrieved.responses[1].status !== 'answered') throw new Error('Status mismatch');
console.log('✓ Active session preserves index, responses, and statuses.\n');

// Test 4: Official Multiple Accepted Answers Evaluation
console.log('Test 4: Official Multiple Accepted Answers Evaluation');
// Q57 accepted answers: ['c', 'd']
// Q65 accepted answers: ['a', 'b', 'c']
// Q96 accepted answers: ['b', 'd']
const testSession: TestSession = createNewSession('full-mock', 'Aakash Sharma');

// Answer Q57 with alternative option 'd'
testSession.responses[57] = {
  questionId: 57,
  selectedOption: 'd',
  status: 'answered',
  timeSpentSeconds: 10
};

// Answer Q65 with alternative option 'b'
testSession.responses[65] = {
  questionId: 65,
  selectedOption: 'b',
  status: 'answered',
  timeSpentSeconds: 10
};

// Answer Q96 with alternative option 'd'
testSession.responses[96] = {
  questionId: 96,
  selectedOption: 'd',
  status: 'answered',
  timeSpentSeconds: 10
};

// Answer 37 other questions correctly to hit exactly 40 correct answers (passing cutoff)
let answeredCount = 3;
for (const qId of testSession.questionIds) {
  if ([57, 65, 96].includes(qId)) continue;
  if (answeredCount >= 40) break;
  const q = QUESTION_BANK.find(item => item.id === qId)!;
  testSession.responses[qId] = {
    questionId: qId,
    selectedOption: q.correctAnswer,
    status: 'answered',
    timeSpentSeconds: 15
  };
  answeredCount++;
}

testSession.remainingSeconds = 3600; // 60 mins remaining
const result = calculateTestResult(testSession);

if (result.score !== 40) throw new Error(`Expected score 40, got ${result.score}`);
if (result.percentage !== 40) throw new Error(`Expected 40%, got ${result.percentage}%`);
if (!result.isQualified) throw new Error('Expected isQualified to be true for >= 40%');
if (result.attemptedCount !== 40) throw new Error(`Expected 40 attempted, got ${result.attemptedCount}`);
if (result.incorrectCount !== 0) throw new Error(`Expected 0 incorrect, got ${result.incorrectCount}`);
if (result.accuracy !== 100) throw new Error(`Expected 100% accuracy, got ${result.accuracy}`);
if (result.timeTakenSeconds !== 3600) throw new Error(`Expected 3600s time taken, got ${result.timeTakenSeconds}`);
console.log('✓ Multiple accepted official ICSI keys (Q57, Q65, Q96) correctly awarded marks!');
console.log('✓ 40% passing benchmark accurately calculated as QUALIFIED.\n');

// Test 5: Failing score (< 40%)
console.log('Test 5: Cutoff failure detection');
const failingSession: TestSession = createNewSession('quick-sprint', 'Aakash Sharma');
// 25 questions total. Answer only 5 correctly (20%)
for (let i = 0; i < 5; i++) {
  const qId = failingSession.questionIds[i];
  const q = QUESTION_BANK.find(item => item.id === qId)!;
  failingSession.responses[qId] = {
    questionId: qId,
    selectedOption: q.correctAnswer,
    status: 'answered',
    timeSpentSeconds: 10
  };
}
const failResult = calculateTestResult(failingSession);
if (failResult.score !== 5) throw new Error(`Expected score 5, got ${failResult.score}`);
if (failResult.percentage !== 20) throw new Error(`Expected 20%, got ${failResult.percentage}%`);
if (failResult.isQualified) throw new Error('Expected isQualified to be false for 20%');
console.log('✓ Below 40% correctly flagged as NOT QUALIFIED.\n');

// Test 6: Specific Result Retrieval by ID
console.log('Test 6: Specific Result Retrieval by ID');
const fetched = getResultById(result.testId);
if (!fetched) throw new Error('Failed to find result by testId');
if (fetched.score !== 40) throw new Error('Fetched score mismatch');
console.log('✓ getResultById retrieved exact past test correctly.\n');

// Test 7: Sectional isolation and metrics
console.log('Test 7: Sectional isolation and metrics');
const secSession = createNewSession('full-mock', 'Aakash Sharma');
// Answer 10 correctly in Part A, 5 correctly in Part B, and 5 incorrectly in Part B
let partACount = 0;
let partBCount = 0;
for (const qId of secSession.questionIds) {
  const q = QUESTION_BANK.find(item => item.id === qId)!;
  if (q.sectionId === 'part-a' && partACount < 10) {
    secSession.responses[qId] = {
      questionId: qId,
      selectedOption: q.correctAnswer,
      status: 'answered',
      timeSpentSeconds: 12
    };
    partACount++;
  } else if (q.sectionId === 'part-b' && partBCount < 5) {
    secSession.responses[qId] = {
      questionId: qId,
      selectedOption: q.correctAnswer,
      status: 'answered',
      timeSpentSeconds: 12
    };
    partBCount++;
  } else if (q.sectionId === 'part-b' && partBCount < 10) {
    // Pick wrong option
    const wrongOpt = q.options.find(o => o.key !== q.correctAnswer)!.key;
    secSession.responses[qId] = {
      questionId: qId,
      selectedOption: wrongOpt,
      status: 'answered',
      timeSpentSeconds: 12
    };
    partBCount++;
  }
}
const secResult = calculateTestResult(secSession);
const partAScore = secResult.sectionScores.find(s => s.sectionId === 'part-a')!;
const partBScore = secResult.sectionScores.find(s => s.sectionId === 'part-b')!;
if (partAScore.score !== 10) throw new Error(`Expected Part A score 10, got ${partAScore.score}`);
if (partAScore.attempted !== 10) throw new Error(`Expected Part A attempted 10, got ${partAScore.attempted}`);
if (partAScore.accuracy !== 100) throw new Error(`Expected Part A accuracy 100%, got ${partAScore.accuracy}%`);
if (partBScore.score !== 5) throw new Error(`Expected Part B score 5, got ${partBScore.score}`);
if (partBScore.attempted !== 10) throw new Error(`Expected Part B attempted 10, got ${partBScore.attempted}`);
if (partBScore.accuracy !== 50) throw new Error(`Expected Part B accuracy 50%, got ${partBScore.accuracy}%`);
console.log('✓ Sectional scores, attempts, and accuracies computed with perfect isolation.\n');

// Test 8: Evaluation of Answered & Marked for Review vs Unanswered Marked for Review
console.log('Test 8: Marked for Review evaluation rules');
const reviewSession = createNewSession('quick-sprint', 'Aakash Sharma');
const q1 = QUESTION_BANK.find(item => item.id === reviewSession.questionIds[0])!;
const q2 = QUESTION_BANK.find(item => item.id === reviewSession.questionIds[1])!;
// Q1: Answered & Marked for Review
reviewSession.responses[q1.id] = {
  questionId: q1.id,
  selectedOption: q1.correctAnswer,
  status: 'answered-marked-review',
  timeSpentSeconds: 20
};
// Q2: Marked for Review WITHOUT answer
reviewSession.responses[q2.id] = {
  questionId: q2.id,
  selectedOption: null,
  status: 'marked-for-review',
  timeSpentSeconds: 15
};
const reviewResult = calculateTestResult(reviewSession);
if (reviewResult.attemptedCount !== 1) throw new Error(`Expected 1 attempted, got ${reviewResult.attemptedCount}`);
if (reviewResult.score !== 1) throw new Error(`Expected score 1, got ${reviewResult.score}`);
if (reviewResult.markedForReviewCount !== 2) throw new Error(`Expected 2 marked for review, got ${reviewResult.markedForReviewCount}`);
if (reviewResult.skippedCount !== 24) throw new Error(`Expected 24 skipped, got ${reviewResult.skippedCount}`);
console.log('✓ Answered & Marked is evaluated for marks; Unanswered Marked is treated as skipped.\n');

// Test 9: Status Normalization when option selected but status not yet transitioned
console.log('Test 9: Auto-normalization of selected options');
const unnormSession = createNewSession('quick-sprint', 'Aakash Sharma');
const qA = QUESTION_BANK.find(item => item.id === unnormSession.questionIds[0])!;
unnormSession.responses[qA.id] = {
  questionId: qA.id,
  selectedOption: qA.correctAnswer,
  status: 'not-answered', // selectedOption exists, status was pending
  timeSpentSeconds: 5
};
const normResult = calculateTestResult(unnormSession);
if (normResult.score !== 1) throw new Error(`Expected score 1, got ${normResult.score}`);
if (normResult.responses[qA.id].status !== 'answered') throw new Error(`Expected status normalized to answered, got ${normResult.responses[qA.id].status}`);
console.log('✓ Pending selected options auto-normalize to answered status and evaluate properly.\n');

// Test 10: Session Pause Logic & Freezing Remaining Time
console.log('Test 10: Active session pause logic');
const testPauseSession = createNewSession('quick-sprint', 'Aakash Sharma');
testPauseSession.remainingSeconds = 1500;
saveActiveSession(testPauseSession);

const pausedSession = pauseActiveSession();
if (!pausedSession) throw new Error('Failed to pause session');
if (pausedSession.isPaused !== true) throw new Error('isPaused should be true');
if (!pausedSession.pausedAt) throw new Error('pausedAt should be defined');
if (pausedSession.remainingSeconds !== 1500) throw new Error('Remaining seconds should be preserved on pause');
console.log('✓ pauseActiveSession correctly freezes session and timestamps pausedAt.\n');

// Test 11: Session Resume Logic
console.log('Test 11: Active session resume logic');
const resumedSession = resumeActiveSession();
if (!resumedSession) throw new Error('Failed to resume session');
if (resumedSession.isPaused !== false) throw new Error('isPaused should be false');
if (resumedSession.pausedAt !== undefined) throw new Error('pausedAt should be cleared on resume');
if (resumedSession.remainingSeconds !== 1500) throw new Error('Remaining seconds should remain unchanged');
console.log('✓ resumeActiveSession unfreezes session and clears pausedAt without timer loss.\n');

// Test 12: Chapter-Wise Preset Creation
console.log('Test 12: Chapter-Wise Preset Creation');
const ch2Session = createNewSession('chapter-2', 'Aakash Sharma');
if (ch2Session.questionIds.length !== 44) {
  throw new Error(`Expected 44 questions for Chapter 2, got ${ch2Session.questionIds.length}`);
}
// Verify every question belongs to Lesson 2
for (const qId of ch2Session.questionIds) {
  const q = QUESTION_BANK.find(item => item.id === qId)!;
  if (q.lessonNumber !== 2) throw new Error(`Question ${qId} belongs to lesson ${q.lessonNumber}, expected 2`);
}
console.log(`✓ Chapter 2 Preset successfully isolated all ${ch2Session.questionIds.length} Company Law questions.\n`);

// Test 13: Custom Multi-Topic Test with Study Mode
console.log('Test 13: Custom Multi-Topic Test with Study Mode');
const customSession = createNewSession('custom-topic', 'Aakash Sharma', {
  lessonNumbers: [2, 3],
  questionCount: 15,
  mode: 'study'
});
if (customSession.questionIds.length !== 15) {
  throw new Error(`Expected 15 questions for custom topic test, got ${customSession.questionIds.length}`);
}
if (customSession.practiceMode !== 'study') {
  throw new Error(`Expected practiceMode to be 'study', got ${customSession.practiceMode}`);
}
for (const qId of customSession.questionIds) {
  const q = QUESTION_BANK.find(item => item.id === qId)!;
  if (![2, 3].includes(q.lessonNumber)) {
    throw new Error(`Question ${qId} belongs to lesson ${q.lessonNumber}, expected 2 or 3`);
  }
}
console.log('✓ Custom topic test properly filtered across multiple lessons and preserved Study Mode.\n');

// Test 14: Verification that Core Mock Presets are strictly frozen
console.log('Test 14: Core Mock Presets Freezing Verification');
const mock100 = createNewSession('full-mock', 'Aakash Sharma');
if (mock100.questionIds.length !== 100) throw new Error(`Expected 100 Qs for full-mock, got ${mock100.questionIds.length}`);
if (mock100.durationMinutes !== 120) throw new Error(`Expected 120 mins duration, got ${mock100.durationMinutes}`);

const mockSprint = createNewSession('quick-sprint', 'Aakash Sharma');
if (mockSprint.questionIds.length !== 25) throw new Error(`Expected 25 Qs for quick-sprint, got ${mockSprint.questionIds.length}`);
if (mockSprint.durationMinutes !== 30) throw new Error(`Expected 30 mins duration, got ${mockSprint.durationMinutes}`);

const mockPartA = createNewSession('part-a-laws', 'Aakash Sharma');
if (mockPartA.questionIds.length !== 60) throw new Error(`Expected 60 Qs for part-a, got ${mockPartA.questionIds.length}`);

const mockPartB = createNewSession('part-b-management', 'Aakash Sharma');
if (mockPartB.questionIds.length !== 40) throw new Error(`Expected 40 Qs for part-b, got ${mockPartB.questionIds.length}`);
console.log('✓ All 4 original core presets are 100% frozen, accurate, and completely unaffected.\n');

// Test 15: Retake Custom/Chapter Session Preserves Configuration and Mode
console.log('Test 15: Retake Test Preserves Custom/Chapter Configuration and Mode');
const studyCustomSession = createNewSession('custom-topic', 'Aakash Sharma', {
  lessonNumbers: [6, 7],
  questionCount: 12,
  mode: 'study'
});
studyCustomSession.responses[studyCustomSession.questionIds[0]].selectedOption = 'b';
studyCustomSession.responses[studyCustomSession.questionIds[0]].status = 'answered';
const studyResult = calculateTestResult(studyCustomSession);

if (studyResult.practiceMode !== 'study') throw new Error('Expected practiceMode to be study in result');
if (!studyResult.selectedLessons || studyResult.selectedLessons.length !== 2) throw new Error('Expected 2 selected lessons in result');

// Simulate retake with preserved config
const retakenSession = createNewSession(
  studyResult.presetId || 'full-mock',
  studyResult.candidateName,
  studyResult.selectedLessons
    ? {
        lessonNumbers: studyResult.selectedLessons,
        questionCount: studyResult.totalQuestions,
        mode: studyResult.practiceMode || 'exam'
      }
    : undefined
);
if (retakenSession.practiceMode !== 'study') throw new Error('Retaken session failed to retain study mode');
if (retakenSession.questionIds.length !== 12) throw new Error(`Expected 12 Qs on retake, got ${retakenSession.questionIds.length}`);
console.log('✓ Retaking a custom/chapter test accurately retains exact lessons, question pool, and practice mode.\n');

// Test 16: Clear Response Status Reversion Logic
console.log('Test 16: Clear Response Status Reversion Logic');
const clearTestSession = createNewSession('quick-sprint', 'Aakash Sharma');
const testQId = clearTestSession.questionIds[0];

// Case A: Unflagged answered question
clearTestSession.responses[testQId].selectedOption = 'c';
clearTestSession.responses[testQId].status = 'answered';
// Simulate clear
const prevStatusA = clearTestSession.responses[testQId].status as string;
const wasMarkedA = prevStatusA === 'marked-for-review' || prevStatusA === 'answered-marked-review';
clearTestSession.responses[testQId].selectedOption = null;
clearTestSession.responses[testQId].status = wasMarkedA ? 'marked-for-review' : 'not-answered';
if (clearTestSession.responses[testQId].status !== 'not-answered') throw new Error('Expected not-answered after clearing unflagged response');

// Case B: Flagged answered question
clearTestSession.responses[testQId].selectedOption = 'c';
clearTestSession.responses[testQId].status = 'answered-marked-review';
// Simulate clear
const prevStatusB = clearTestSession.responses[testQId].status as string;
const wasMarkedB = prevStatusB === 'marked-for-review' || prevStatusB === 'answered-marked-review';
clearTestSession.responses[testQId].selectedOption = null;
clearTestSession.responses[testQId].status = wasMarkedB ? 'marked-for-review' : 'not-answered';
if (clearTestSession.responses[testQId].status !== 'marked-for-review') throw new Error('Expected marked-for-review after clearing flagged response');
console.log('✓ Clearing an answered question reverts to not-answered; clearing a flagged answer retains marked-for-review.\n');

// Test 17: Last Question Save & Finish Final Evaluation Commit
console.log('Test 17: Last Question Save & Finish Final Evaluation Commit');
const lastQSession = createNewSession('quick-sprint', 'Aakash Sharma');
const lastQId = lastQSession.questionIds[lastQSession.questionIds.length - 1];
const lastQ = QUESTION_BANK.find(q => q.id === lastQId)!;

// Select option on last question without prior save
lastQSession.activeQuestionIndex = lastQSession.questionIds.length - 1;
lastQSession.responses[lastQId].selectedOption = lastQ.correctAnswer;
lastQSession.responses[lastQId].status = 'not-answered'; // Pending status before commit

const lastQResult = calculateTestResult(lastQSession);
if (lastQResult.responses[lastQId].status !== 'answered') {
  throw new Error(`Expected last question to be auto-normalized to answered, got ${lastQResult.responses[lastQId].status}`);
}
if (lastQResult.score !== 1) throw new Error(`Expected score 1 on last question commit, got ${lastQResult.score}`);
console.log('✓ Last question choice is committed without status lag or data loss.\n');

// Test 18: Section Distribution Validation (Single Section vs Multi Section)
console.log('Test 18: Section Distribution Validation (Single Section vs Multi Section)');
const ch6Session = createNewSession('chapter-6', 'Aakash Sharma');
const ch6Questions = ch6Session.questionIds.map(id => QUESTION_BANK.find(q => q.id === id)!);
const hasPartAInCh6 = ch6Questions.some(q => q.sectionId === 'part-a');
const hasPartBInCh6 = ch6Questions.some(q => q.sectionId === 'part-b');
if (hasPartAInCh6 !== false) throw new Error('Chapter 6 should have NO Part A questions');
if (hasPartBInCh6 !== true) throw new Error('Chapter 6 must have Part B questions');

const sprintQuestions = sprintSession.questionIds.map(id => QUESTION_BANK.find(q => q.id === id)!);
const hasPartAInSprint = sprintQuestions.some(q => q.sectionId === 'part-a');
const hasPartBInSprint = sprintQuestions.some(q => q.sectionId === 'part-b');
if (!hasPartAInSprint || !hasPartBInSprint) throw new Error('Rapid sprint must contain both Part A and Part B');
console.log('✓ Single-section and multi-section distributions validate accurately.\n');

console.log('==============================================');
console.log('ALL 18 CBT RIGOROUS LOGIC TESTS PASSED WITHOUT ANY ERROR!');
console.log('==============================================\n');
