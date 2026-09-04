'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { TestSession, SectionId, Question, QuestionStatus } from '@/types';
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

export default function TestPage() {
  const router = useRouter();
  const [session, setSession] = useState<TestSession | null>(null);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  const sessionRef = React.useRef<TestSession | null>(null);
  sessionRef.current = session;

  // Initialize session on mount
  useEffect(() => {
    let existing = getActiveSession();
    if (!existing || existing.isSubmitted) {
      existing = createNewSession('full-mock', getSavedCandidateName());
    }
    setSession(existing);
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
    const secMap: Record<SectionId, { id: SectionId; name: string; count: number }> = {
      'part-a': { id: 'part-a', name: 'Part A: Business Laws', count: 0 },
      'part-b': { id: 'part-b', name: 'Part B: Business Management', count: 0 }
    };
    questions.forEach(q => {
      secMap[q.sectionId].count += 1;
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

  // Handle final submission (commits any pending choice on the active question)
  const handleFinalSubmit = useCallback((submittingSession?: TestSession) => {
    let s = submittingSession || sessionRef.current || session;
    if (!s) return;

    // Commit any unsaved selection on the active question
    const activeQ = questions[s.activeQuestionIndex];
    if (activeQ) {
      const activeResp = s.responses[activeQ.id];
      if (activeResp && activeResp.selectedOption !== null) {
        let finalStatus: QuestionStatus = 'answered';
        if (activeResp.status === 'marked-for-review' || activeResp.status === 'answered-marked-review') {
          finalStatus = 'answered-marked-review';
        }
        s = {
          ...s,
          responses: {
            ...s.responses,
            [activeQ.id]: {
              ...activeResp,
              status: finalStatus
            }
          }
        };
      }
    }

    calculateTestResult(s);
    clearActiveSession();
    router.push('/results');
  }, [session, questions, router]);

  const handleFinalSubmitRef = React.useRef(handleFinalSubmit);
  handleFinalSubmitRef.current = handleFinalSubmit;

  // 1-second countdown timer interval
  useEffect(() => {
    if (!session || session.isSubmitted) return;

    const timer = setInterval(() => {
      setSession(prev => {
        if (!prev || prev.isSubmitted) return prev;
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
  }, [session?.testId, session?.isSubmitted]);

  // Select Option on current question
  const handleSelectOption = (optionKey: 'a' | 'b' | 'c' | 'd') => {
    if (!session || !currentQuestion) return;
    const qId = currentQuestion.id;
    const currentResp = session.responses[qId];

    const updated = {
      ...session,
      responses: {
        ...session.responses,
        [qId]: {
          ...currentResp,
          selectedOption: optionKey
        }
      }
    };
    setSession(updated);
    saveActiveSession(updated);
  };

  // Clear Response
  const handleClearResponse = () => {
    if (!session || !currentQuestion) return;
    const qId = currentQuestion.id;
    const currentResp = session.responses[qId];

    const wasMarked = currentResp?.status === 'marked-for-review' || currentResp?.status === 'answered-marked-review';
    const newStatus: QuestionStatus = wasMarked ? 'marked-for-review' : 'not-answered';

    const updated = {
      ...session,
      responses: {
        ...session.responses,
        [qId]: {
          ...currentResp,
          selectedOption: null,
          status: newStatus
        }
      }
    };
    setSession(updated);
    saveActiveSession(updated);
  };

  // Move to a target question index
  const goToQuestionIndex = (targetIndex: number) => {
    if (!session || targetIndex < 0 || targetIndex >= questions.length) return;
    const targetQ = questions[targetIndex];

    const currentQ = questions[session.activeQuestionIndex];
    const currentResp = currentQ ? session.responses[currentQ.id] : undefined;

    const updatedResponses = { ...session.responses };

    // If current question has an option selected, commit it properly
    if (currentQ && currentResp && currentResp.selectedOption !== null) {
      if (currentResp.status === 'not-answered' || currentResp.status === 'not-visited') {
        updatedResponses[currentQ.id] = {
          ...currentResp,
          status: 'answered'
        };
      } else if (currentResp.status === 'marked-for-review') {
        updatedResponses[currentQ.id] = {
          ...currentResp,
          status: 'answered-marked-review'
        };
      }
    }

    const targetResp = updatedResponses[targetQ.id];
    let newTargetStatus = targetResp?.status || 'not-answered';
    if (newTargetStatus === 'not-visited') {
      newTargetStatus = 'not-answered';
    }

    updatedResponses[targetQ.id] = {
      ...targetResp,
      status: newTargetStatus
    };

    const updated = {
      ...session,
      activeQuestionIndex: targetIndex,
      activeSection: targetQ.sectionId,
      responses: updatedResponses
    };
    setSession(updated);
    saveActiveSession(updated);
    setIsMobileDrawerOpen(false);
  };

  // Save & Next
  const handleSaveAndNext = () => {
    if (!session || !currentQuestion) return;
    const qId = currentQuestion.id;
    const currentResp = session.responses[qId];

    const isAnswered = currentResp?.selectedOption !== null;
    const newStatus: QuestionStatus = isAnswered ? 'answered' : 'not-answered';

    const updatedResponses = {
      ...session.responses,
      [qId]: {
        ...currentResp,
        status: newStatus
      }
    };

    const nextIndex = session.activeQuestionIndex + 1;
    if (nextIndex < questions.length) {
      const nextQ = questions[nextIndex];
      const nextResp = updatedResponses[nextQ.id];
      if (nextResp && nextResp.status === 'not-visited') {
        nextResp.status = 'not-answered';
      }

      const updated = {
        ...session,
        activeQuestionIndex: nextIndex,
        activeSection: nextQ.sectionId,
        responses: updatedResponses
      };
      setSession(updated);
      saveActiveSession(updated);
    } else {
      const updated = {
        ...session,
        responses: updatedResponses
      };
      setSession(updated);
      saveActiveSession(updated);
      setIsSubmitModalOpen(true);
    }
  };

  // Mark for Review & Next
  const handleMarkForReviewAndNext = () => {
    if (!session || !currentQuestion) return;
    const qId = currentQuestion.id;
    const currentResp = session.responses[qId];

    const hasAnswer = currentResp?.selectedOption !== null;
    const newStatus: QuestionStatus = hasAnswer ? 'answered-marked-review' : 'marked-for-review';

    const updatedResponses = {
      ...session.responses,
      [qId]: {
        ...currentResp,
        status: newStatus
      }
    };

    const nextIndex = session.activeQuestionIndex + 1;
    if (nextIndex < questions.length) {
      const nextQ = questions[nextIndex];
      const nextResp = updatedResponses[nextQ.id];
      if (nextResp && nextResp.status === 'not-visited') {
        nextResp.status = 'not-answered';
      }

      const updated = {
        ...session,
        activeQuestionIndex: nextIndex,
        activeSection: nextQ.sectionId,
        responses: updatedResponses
      };
      setSession(updated);
      saveActiveSession(updated);
    } else {
      const updated = {
        ...session,
        responses: updatedResponses
      };
      setSession(updated);
      saveActiveSession(updated);
      setIsSubmitModalOpen(true);
    }
  };

  // Previous
  const handlePrevious = () => {
    if (!session || session.activeQuestionIndex <= 0) return;
    goToQuestionIndex(session.activeQuestionIndex - 1);
  };

  // Switch Section Tabs
  const handleSelectSection = (secId: SectionId) => {
    if (!session) return;
    const targetIdx = questions.findIndex(q => q.sectionId === secId);
    if (targetIdx !== -1) {
      goToQuestionIndex(targetIdx);
    }
  };

  if (!session || !currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-sm font-semibold text-slate-400">Loading Examination Session...</span>
        </div>
      </div>
    );
  }

  const currentResponse = session.responses[currentQuestion.id];

  return (
    <div className="h-[100dvh] flex flex-col bg-slate-950 overflow-hidden select-none">
      {/* Top System Header */}
      <TopHeader
        testTitle={session.testTitle}
        candidateName={session.candidateName}
        rollNumber={session.rollNumber}
        remainingSeconds={session.remainingSeconds}
        activeSection={session.activeSection}
        onSelectSection={handleSelectSection}
        availableSections={availableSections}
        onToggleMobileDrawer={() => setIsMobileDrawerOpen(true)}
        onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
        answeredCount={answeredCount}
        totalQuestions={questions.length}
      />

      {/* Main Examination Workspace */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-2.5 sm:p-4 flex flex-col lg:flex-row gap-3 sm:gap-4 overflow-hidden">
        {/* Left / Main: Question Workspace */}
        <div className="flex-1 h-full min-h-0 overflow-hidden">
          <QuestionArea
            question={currentQuestion}
            questionIndex={session.activeQuestionIndex}
            totalQuestions={questions.length}
            currentResponse={currentResponse}
            onSelectOption={handleSelectOption}
            onClearResponse={handleClearResponse}
            onSaveAndNext={handleSaveAndNext}
            onMarkForReviewAndNext={handleMarkForReviewAndNext}
            onPrevious={handlePrevious}
            isFirstQuestion={session.activeQuestionIndex === 0}
            isLastQuestion={session.activeQuestionIndex === questions.length - 1}
            isModalOpen={isSubmitModalOpen || isMobileDrawerOpen}
          />
        </div>

        {/* Right Pane: Question Palette (Desktop Only) */}
        <div className="hidden lg:block w-80 shrink-0 h-full min-h-0 overflow-hidden">
          <QuestionPalette
            questions={questions}
            responses={session.responses}
            currentQuestionIndex={session.activeQuestionIndex}
            candidateName={session.candidateName}
            rollNumber={session.rollNumber}
            activeSection={session.activeSection}
            onSelectQuestionIndex={goToQuestionIndex}
            onSubmitTest={() => setIsSubmitModalOpen(true)}
          />
        </div>
      </main>

      {/* Responsive Slide-In Mobile Palette Drawer */}
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
          onSelectQuestionIndex={goToQuestionIndex}
          onSubmitTest={() => {
            setIsMobileDrawerOpen(false);
            setIsSubmitModalOpen(true);
          }}
        />
      </MobilePaletteDrawer>

      {/* Pre-Submission Modal */}
      <SubmitConfirmationModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        onConfirmSubmit={handleFinalSubmit}
        questions={questions}
        responses={session.responses}
      />
    </div>
  );
}
