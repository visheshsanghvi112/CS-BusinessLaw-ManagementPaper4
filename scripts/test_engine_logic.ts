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
  getSavedCandidateName
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

console.log('==============================================');
console.log('ALL CBT LOGIC TESTS PASSED WITHOUT ANY ERROR!');
console.log('==============================================\n');
