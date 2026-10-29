'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { TestSession, GateSectionId, Question, QuestionStatus } from '@/types';
import { QUESTION_BANK } from '@/lib/questionBank';
import {
  getActiveSession,
  saveActiveSession,
  calculateTestResult,
  createNewSession,
  clearActiveSession,
  getSavedCandidateName
} from '@/lib/storage';
import { TopHeader } from '@/components/cbt/TopHeader';
import { QuestionArea } from '@/components/cbt/QuestionArea';
import { QuestionPalette } from '@/components/cbt/QuestionPalette';
import { MobilePaletteDrawer } from '@/components/cbt/MobilePaletteDrawer';
import { SubmitConfirmationModal } from '@/components/cbt/SubmitConfirmationModal';
import { PauseExitModal } from '@/components/cbt/PauseExitModal';
import { ExamInstructionsModal } from '@/components/cbt/ExamInstructionsModal';
import { QuestionPaperModal } from '@/components/cbt/QuestionPaperModal';
import { ScientificCalculator } from '@/components/cbt/ScientificCalculator';

export default function TestPage() {
  const router = useRouter();
  const [session, setSession] = useState<TestSession | null>(null);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [isPauseModalOpen, setIsPauseModalOpen] = useState(false);
  const [isInstructionsModalOpen, setIsInstructionsModalOpen] = useState(false);
  const [isQuestionPaperModalOpen, setIsQuestionPaperModalOpen] = useState(false);
  const [isCalcOpen, setIsCalcOpen] = useState(false);

  const sessionRef = React.useRef<TestSession | null>(null);
  useEffect(() => {
    sessionRef.current = session;
  }, [session]);

  // Initialize session on mount
  useEffect(() => {
    let existing = getActiveSession();
    if (existing && !existing.isSubmitted && existing.remainingSeconds <= 0) {
      calculateTestResult(existing);
      clearActiveSession();
      router.push('/results');
      return;
    }
    if (!existing || existing.isSubmitted) {
      existing = createNewSession('gate-2026-cs1', getSavedCandidateName());
    }
    const activeQ = QUESTION_BANK.find(q => q.id === existing.questionIds[existing.activeQuestionIndex]);
    if (activeQ && existing.activeSection !== activeQ.sectionId) {
      existing.activeSection = activeQ.sectionId;
    }
    sessionRef.current = existing;
    setSession(existing);
    if (existing.isPaused) {
      setIsPauseModalOpen(true);
    }
  }, [router]);

  // BeforeUnload hook to auto-pause and save state
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      const current = sessionRef.current;
      if (current && !current.isSubmitted && current.remainingSeconds > 0) {
        const pausedSession: TestSession = {
          ...current,
          isPaused: true,
          pausedAt: Date.now()
        };
        saveActiveSession(pausedSession);
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  // Questions in this active session
  const questions: Question[] = useMemo(() => {
    if (!session) return [];
    return session.questionIds
      .map(id => QUESTION_BANK.find(q => q.id === id))
      .filter(Boolean) as Question[];
  }, [session]);

  const currentQuestion: Question | undefined = questions[session?.activeQuestionIndex ?? 0];

  // Available sections list
  const availableSections = useMemo(() => {
    if (questions.length === 0) return [];
    const secMap: Record<GateSectionId, { id: GateSectionId; name: string; count: number }> = {
      GA: { id: 'GA', name: 'General Aptitude (GA)', count: 0 },
      CS: { id: 'CS', name: 'CS & Engineering Maths', count: 0 }
    };
    questions.forEach(q => {
      if (secMap[q.sectionId]) {
        secMap[q.sectionId].count += 1;
      }
    });
    return Object.values(secMap).filter(s => s.count > 0).map(s => ({
      id: s.id,
      name: s.name,
      questionCount: s.count
    }));
  }, [questions]);

  // Answered count
  const answeredCount = useMemo(() => {
    if (!session) return 0;
    return Object.values(session.responses).filter(
      r => r.status === 'answered' || r.status === 'answered-marked-review'
    ).length;
  }, [session]);

  // Handle final submission
  const handleFinalSubmit = useCallback((explicitSession?: TestSession | unknown) => {
    const isActualSession = Boolean(
      explicitSession &&
      typeof explicitSession === 'object' &&
      'testId' in (explicitSession as Record<string, unknown>) &&
      'questionIds' in (explicitSession as Record<string, unknown>)
    );
    let s: TestSession | null = (isActualSession ? (explicitSession as TestSession) : null) || sessionRef.current || session;
    if (!s) return;

    calculateTestResult(s);
    clearActiveSession();
    router.push('/results');
  }, [session, router]);

  const handleFinalSubmitRef = React.useRef(handleFinalSubmit);
  useEffect(() => {
    handleFinalSubmitRef.current = handleFinalSubmit;
  }, [handleFinalSubmit]);

  const testId = session?.testId;
  const isSubmitted = session?.isSubmitted ?? true;

  // 1-second countdown timer interval
  useEffect(() => {
    if (!testId || isSubmitted) return;

    const timer = setInterval(() => {
      setSession(prev => {
        if (!prev || prev.isSubmitted || prev.isPaused) return prev;
        if (prev.remainingSeconds <= 1) {
          clearInterval(timer);
          const zeroSession = { ...prev, remainingSeconds: 0, isSubmitted: true };
          saveActiveSession(zeroSession);
          handleFinalSubmitRef.current(zeroSession);
          return zeroSession;
        }
        const updated = {
          ...prev,
          remainingSeconds: prev.remainingSeconds - 1
        };
        saveActiveSession(updated);
        return updated;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [testId, isSubmitted]);

  // Open submission modal
  const handleOpenSubmitModal = useCallback(() => {
    setIsMobileDrawerOpen(false);
    setIsSubmitModalOpen(true);
  }, []);

  // Pause / Resume Handlers
  const handlePause = useCallback(() => {
    if (!session) return;
    const pausedSession: TestSession = {
      ...session,
      isPaused: true,
      pausedAt: Date.now()
    };
    sessionRef.current = pausedSession;
    setSession(pausedSession);
    saveActiveSession(pausedSession);
    setIsPauseModalOpen(true);
  }, [session]);

  const handleResume = useCallback(() => {
    if (!session) return;
    const resumedSession: TestSession = {
      ...session,
      isPaused: false
    };
    sessionRef.current = resumedSession;
    setSession(resumedSession);
    saveActiveSession(resumedSession);
    setIsPauseModalOpen(false);
  }, [session]);

  const handleSaveAndExit = useCallback(() => {
    if (session) {
      saveActiveSession({
        ...session,
        isPaused: true,
        pausedAt: Date.now()
      });
    }
    router.push('/');
  }, [session, router]);

  // 1. Select MCQ Option
  const handleSelectOption = useCallback((optionKey: 'a' | 'b' | 'c' | 'd') => {
    if (!session || !currentQuestion) return;
    const qId = currentQuestion.id;
    const currentResp = session.responses[qId];
    const prevStatus = currentResp?.status || 'not-visited';

    let newStatus: QuestionStatus = 'answered';
    if (prevStatus === 'marked-for-review' || prevStatus === 'answered-marked-review') {
      newStatus = 'answered-marked-review';
    }

    const updatedSession: TestSession = {
      ...session,
      responses: {
        ...session.responses,
        [qId]: {
          questionId: qId,
          selectedOption: optionKey,
          selectedOptions: [optionKey],
          status: newStatus,
          timeSpentSeconds: currentResp?.timeSpentSeconds || 0
        }
      }
    };

    sessionRef.current = updatedSession;
    setSession(updatedSession);
    saveActiveSession(updatedSession);
  }, [session, currentQuestion]);

  // 2. Toggle MSQ Option
  const handleToggleMsqOption = useCallback((optionKey: 'a' | 'b' | 'c' | 'd') => {
    if (!session || !currentQuestion) return;
    const qId = currentQuestion.id;
    const currentResp = session.responses[qId];
    const existingOpts = currentResp?.selectedOptions || [];
    const updatedOpts = existingOpts.includes(optionKey)
      ? existingOpts.filter(k => k !== optionKey)
      : [...existingOpts, optionKey];

    const prevStatus = currentResp?.status || 'not-visited';
    let newStatus: QuestionStatus = updatedOpts.length > 0 ? 'answered' : 'not-answered';
    if (prevStatus === 'marked-for-review' || prevStatus === 'answered-marked-review') {
      newStatus = updatedOpts.length > 0 ? 'answered-marked-review' : 'marked-for-review';
    }

    const updatedSession: TestSession = {
      ...session,
      responses: {
        ...session.responses,
        [qId]: {
          questionId: qId,
          selectedOption: updatedOpts[0] || null,
          selectedOptions: updatedOpts,
          status: newStatus,
          timeSpentSeconds: currentResp?.timeSpentSeconds || 0
        }
      }
    };

    sessionRef.current = updatedSession;
    setSession(updatedSession);
    saveActiveSession(updatedSession);
  }, [session, currentQuestion]);

  // 3. Change NAT Value
  const handleChangeNatValue = useCallback((val: string) => {
    if (!session || !currentQuestion) return;
    const qId = currentQuestion.id;
    const currentResp = session.responses[qId];
    const hasVal = val.trim().length > 0;
    const prevStatus = currentResp?.status || 'not-visited';

    let newStatus: QuestionStatus = hasVal ? 'answered' : 'not-answered';
    if (prevStatus === 'marked-for-review' || prevStatus === 'answered-marked-review') {
      newStatus = hasVal ? 'answered-marked-review' : 'marked-for-review';
    }

    const updatedSession: TestSession = {
      ...session,
      responses: {
        ...session.responses,
        [qId]: {
          questionId: qId,
          selectedOption: null,
          natValue: val,
          status: newStatus,
          timeSpentSeconds: currentResp?.timeSpentSeconds || 0
        }
      }
    };

    sessionRef.current = updatedSession;
    setSession(updatedSession);
    saveActiveSession(updatedSession);
  }, [session, currentQuestion]);

  // Clear Response
  const handleClearResponse = useCallback(() => {
    if (!session || !currentQuestion) return;
    const qId = currentQuestion.id;
    const currentResp = session.responses[qId];

    let newStatus: QuestionStatus = 'not-answered';
    if (currentResp?.status === 'answered-marked-review' || currentResp?.status === 'marked-for-review') {
      newStatus = 'marked-for-review';
    }

    const updatedSession: TestSession = {
      ...session,
      responses: {
        ...session.responses,
        [qId]: {
          questionId: qId,
          selectedOption: null,
          selectedOptions: [],
          natValue: '',
          status: newStatus,
          timeSpentSeconds: currentResp?.timeSpentSeconds || 0
        }
      }
    };

    sessionRef.current = updatedSession;
    setSession(updatedSession);
    saveActiveSession(updatedSession);
  }, [session, currentQuestion]);

  // Save & Next
  const handleSaveAndNext = useCallback(() => {
    if (!session || !currentQuestion) return;
    const nextIndex = session.activeQuestionIndex + 1;
    if (nextIndex >= questions.length) {
      handleOpenSubmitModal();
      return;
    }

    const nextQ = questions[nextIndex];
    const nextResp = session.responses[nextQ.id];
    let nextStatus = nextResp?.status || 'not-visited';
    if (nextStatus === 'not-visited') {
      nextStatus = 'not-answered';
    }

    const updatedSession: TestSession = {
      ...session,
      activeQuestionIndex: nextIndex,
      activeSection: nextQ.sectionId,
      responses: {
        ...session.responses,
        [nextQ.id]: {
          questionId: nextQ.id,
          selectedOption: nextResp?.selectedOption || null,
          selectedOptions: nextResp?.selectedOptions || [],
          natValue: nextResp?.natValue || '',
          status: nextStatus,
          timeSpentSeconds: nextResp?.timeSpentSeconds || 0
        }
      }
    };

    sessionRef.current = updatedSession;
    setSession(updatedSession);
    saveActiveSession(updatedSession);
  }, [session, currentQuestion, questions, handleOpenSubmitModal]);

  // Mark for Review & Next
  const handleMarkForReviewAndNext = useCallback(() => {
    if (!session || !currentQuestion) return;
    const qId = currentQuestion.id;
    const currentResp = session.responses[qId];

    const hasAnswer = currentQuestion.type === 'NAT'
      ? (currentResp?.natValue !== undefined && currentResp?.natValue !== null && String(currentResp.natValue).trim().length > 0)
      : currentQuestion.type === 'MSQ'
      ? ((currentResp?.selectedOptions || []).length > 0)
      : (currentResp?.selectedOption !== null && currentResp?.selectedOption !== undefined);

    const markStatus: QuestionStatus = hasAnswer ? 'answered-marked-review' : 'marked-for-review';

    const nextIndex = session.activeQuestionIndex + 1;
    if (nextIndex >= questions.length) {
      const updatedSession: TestSession = {
        ...session,
        responses: {
          ...session.responses,
          [qId]: {
            ...currentResp,
            questionId: qId,
            status: markStatus
          }
        }
      };
      sessionRef.current = updatedSession;
      setSession(updatedSession);
      saveActiveSession(updatedSession);
      handleOpenSubmitModal();
      return;
    }

    const nextQ = questions[nextIndex];
    const nextResp = session.responses[nextQ.id];
    let nextStatus = nextResp?.status || 'not-visited';
    if (nextStatus === 'not-visited') nextStatus = 'not-answered';

    const updatedSession: TestSession = {
      ...session,
      activeQuestionIndex: nextIndex,
      activeSection: nextQ.sectionId,
      responses: {
        ...session.responses,
        [qId]: {
          ...currentResp,
          questionId: qId,
          status: markStatus
        },
        [nextQ.id]: {
          questionId: nextQ.id,
          selectedOption: nextResp?.selectedOption || null,
          selectedOptions: nextResp?.selectedOptions || [],
          natValue: nextResp?.natValue || '',
          status: nextStatus,
          timeSpentSeconds: nextResp?.timeSpentSeconds || 0
        }
      }
    };

    sessionRef.current = updatedSession;
    setSession(updatedSession);
    saveActiveSession(updatedSession);
  }, [session, currentQuestion, questions, handleOpenSubmitModal]);

  // Previous
  const handlePrevious = useCallback(() => {
    if (!session || session.activeQuestionIndex === 0) return;
    const prevIndex = session.activeQuestionIndex - 1;
    const prevQ = questions[prevIndex];

    const updatedSession: TestSession = {
      ...session,
      activeQuestionIndex: prevIndex,
      activeSection: prevQ.sectionId
    };

    sessionRef.current = updatedSession;
    setSession(updatedSession);
    saveActiveSession(updatedSession);
  }, [session, questions]);

  // Jump via Palette
  const handleSelectQuestionIndex = useCallback((targetIndex: number) => {
    if (!session || targetIndex < 0 || targetIndex >= questions.length) return;
    const targetQ = questions[targetIndex];
    const targetResp = session.responses[targetQ.id];
    let newStatus = targetResp?.status || 'not-visited';
    if (newStatus === 'not-visited') newStatus = 'not-answered';

    const updatedSession: TestSession = {
      ...session,
      activeQuestionIndex: targetIndex,
      activeSection: targetQ.sectionId,
      responses: {
        ...session.responses,
        [targetQ.id]: {
          questionId: targetQ.id,
          selectedOption: targetResp?.selectedOption || null,
          selectedOptions: targetResp?.selectedOptions || [],
          natValue: targetResp?.natValue || '',
          status: newStatus,
          timeSpentSeconds: targetResp?.timeSpentSeconds || 0
        }
      }
    };

    sessionRef.current = updatedSession;
    setSession(updatedSession);
    saveActiveSession(updatedSession);
    setIsMobileDrawerOpen(false);
  }, [session, questions]);

  // Section Switcher
  const handleSelectSection = useCallback((secId: GateSectionId) => {
    if (!session) return;
    const firstQIndex = questions.findIndex(q => q.sectionId === secId);
    if (firstQIndex !== -1) {
      handleSelectQuestionIndex(firstQIndex);
    }
  }, [session, questions, handleSelectQuestionIndex]);

  const isModalOpen = isSubmitModalOpen || isPauseModalOpen || isInstructionsModalOpen || isQuestionPaperModalOpen || isCalcOpen;

  if (!session || !currentQuestion) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-400">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          <span className="text-sm font-semibold">Initializing GATE CBT Examination...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen overflow-hidden bg-slate-950 text-slate-100 flex flex-col antialiased">
      {/* Top Header */}
      <TopHeader
        testTitle={session.testTitle}
        candidateName={session.candidateName}
        rollNumber={session.rollNumber}
        remainingSeconds={session.remainingSeconds}
        activeSection={session.activeSection}
        onSelectSection={handleSelectSection}
        availableSections={availableSections}
        onToggleMobileDrawer={() => setIsMobileDrawerOpen(prev => !prev)}
        onOpenSubmitModal={handleOpenSubmitModal}
        onOpenCalculator={() => setIsCalcOpen(true)}
        answeredCount={answeredCount}
        totalQuestions={questions.length}
        isPaused={session.isPaused}
        onTogglePause={handlePause}
        onOpenInstructions={() => setIsInstructionsModalOpen(true)}
        onOpenQuestionPaper={() => setIsQuestionPaperModalOpen(true)}
        practiceMode={session.practiceMode}
      />

      {/* Main Workspace Layout */}
      <div className="flex-1 flex overflow-hidden p-2 sm:p-4 gap-3">
        {/* Left / Center: Question Area */}
        <main className="flex-1 min-w-0 h-full">
          <QuestionArea
            question={currentQuestion}
            questionIndex={session.activeQuestionIndex}
            totalQuestions={questions.length}
            currentResponse={session.responses[currentQuestion.id]}
            onSelectOption={handleSelectOption}
            onToggleMsqOption={handleToggleMsqOption}
            onChangeNatValue={handleChangeNatValue}
            onClearResponse={handleClearResponse}
            onSaveAndNext={handleSaveAndNext}
            onMarkForReviewAndNext={handleMarkForReviewAndNext}
            onPrevious={handlePrevious}
            onOpenCalculator={() => setIsCalcOpen(true)}
            isFirstQuestion={session.activeQuestionIndex === 0}
            isLastQuestion={session.activeQuestionIndex === questions.length - 1}
            isModalOpen={isModalOpen}
            practiceMode={session.practiceMode}
          />
        </main>

        {/* Right Desktop Palette */}
        <aside className="hidden lg:block w-80 shrink-0 h-full">
          <QuestionPalette
            questions={questions}
            responses={session.responses}
            currentQuestionIndex={session.activeQuestionIndex}
            candidateName={session.candidateName}
            rollNumber={session.rollNumber}
            activeSection={session.activeSection}
            onSelectQuestionIndex={handleSelectQuestionIndex}
            onSubmitTest={handleOpenSubmitModal}
          />
        </aside>
      </div>

      {/* Mobile Drawer */}
      <MobilePaletteDrawer
        isOpen={isMobileDrawerOpen}
        onClose={() => setIsMobileDrawerOpen(false)}
      >
        <QuestionPalette
          questions={questions}
          responses={session.responses}
          currentQuestionIndex={session.activeQuestionIndex}
          candidateName={session.candidateName}
          rollNumber={session.rollNumber}
          activeSection={session.activeSection}
          onSelectQuestionIndex={handleSelectQuestionIndex}
          onSubmitTest={handleOpenSubmitModal}
        />
      </MobilePaletteDrawer>

      {/* Virtual Scientific Calculator Modal */}
      <ScientificCalculator
        isOpen={isCalcOpen}
        onClose={() => setIsCalcOpen(false)}
      />

      {/* Confirmation Modal */}
      <SubmitConfirmationModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        onConfirmSubmit={() => handleFinalSubmit()}
        questions={questions}
        responses={session.responses}
      />

      {/* Pause / Exit Modal */}
      <PauseExitModal
        isOpen={isPauseModalOpen}
        remainingSeconds={session.remainingSeconds}
        answeredCount={answeredCount}
        totalQuestions={questions.length}
        testTitle={session.testTitle}
        onResume={handleResume}
        onSaveAndExit={handleSaveAndExit}
        onSubmitNow={() => handleFinalSubmit()}
      />

      {/* Instructions Modal */}
      <ExamInstructionsModal
        isOpen={isInstructionsModalOpen}
        onClose={() => setIsInstructionsModalOpen(false)}
        durationMinutes={session.durationMinutes}
        totalQuestions={questions.length}
      />

      {/* Question Paper Modal */}
      <QuestionPaperModal
        isOpen={isQuestionPaperModalOpen}
        onClose={() => setIsQuestionPaperModalOpen(false)}
        questions={questions}
        responses={session.responses}
        onSelectQuestion={handleSelectQuestionIndex}
      />
    </div>
  );
}
