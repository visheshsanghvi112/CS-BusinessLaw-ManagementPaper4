'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { TestResult, Question, GateSectionId, GateSubjectId, GateQuestionType } from '@/types';
import {
  getLatestResult,
  getResultById,
  createNewSession,
  getSavedCandidateName,
  evaluateAnswer,
  getBookmarkedQuestionIds,
  toggleQuestionBookmark
} from '@/lib/storage';
import { QUESTION_BANK, SUBJECT_METADATA } from '@/lib/questionBank';
import { GateScorePredictorCard } from '@/components/cbt/GateScorePredictorCard';
import { MistakeNotebookModal } from '@/components/cbt/MistakeNotebookModal';
import confetti from 'canvas-confetti';
import {
  Trophy,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Clock,
  Target,
  RotateCcw,
  BookOpen,
  BarChart3,
  ChevronLeft,
  Printer,
  Search,
  X,
  Sparkles,
  Layers,
  ArrowRight,
  TrendingDown,
  Hash,
  CheckSquare,
  Bookmark
} from 'lucide-react';

export default function ResultsPage() {
  const router = useRouter();
  const [result, setResult] = useState<TestResult | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'correct' | 'incorrect' | 'unattempted' | 'review'>('all');
  const [selectedSectionFilter, setSelectedSectionFilter] = useState<'all' | GateSectionId>('all');
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<'all' | GateSubjectId>('all');
  const [selectedTypeFilter, setSelectedTypeFilter] = useState<'all' | GateQuestionType>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isMistakesModalOpen, setIsMistakesModalOpen] = useState<boolean>(false);
  const [bookmarkedIds, setBookmarkedIds] = useState<(string | number)[]>([]);

  useEffect(() => {
    setBookmarkedIds(getBookmarkedQuestionIds());
  }, []);

  const handleToggleBookmark = (qid: string | number) => {
    toggleQuestionBookmark(qid);
    setBookmarkedIds(getBookmarkedQuestionIds());
  };

  useEffect(() => {
    let resultToLoad: TestResult | null = null;
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const testId = params.get('testId');
      if (testId) {
        resultToLoad = getResultById(testId);
      }
    }
    if (!resultToLoad) {
      resultToLoad = getLatestResult();
    }
    setResult(resultToLoad);

    if (resultToLoad && resultToLoad.isQualified) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Ignore if confetti not supported
      }
    }
  }, []);

  // Format time taken
  const formattedTime = useMemo(() => {
    if (!result) return '0s';
    const totalSec = result.timeTakenSeconds;
    const hours = Math.floor(totalSec / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;
    return `${hours > 0 ? hours + 'h ' : ''}${mins}m ${secs}s`;
  }, [result]);

  // Questions in this test
  const questions: Question[] = useMemo(() => {
    if (!result) return [];
    return result.questionIds
      .map(id => QUESTION_BANK.find(q => q.id === id))
      .filter(Boolean) as Question[];
  }, [result]);

  // Filtered questions for review
  const filteredQuestions = useMemo(() => {
    if (!result) return [];

    return questions.filter((q) => {
      const resp = result.responses[q.id];
      const { isAttempted, isCorrect } = evaluateAnswer(q, resp);
      const isReview = resp?.status === 'marked-for-review' || resp?.status === 'answered-marked-review';

      if (activeFilter === 'correct' && !isCorrect) return false;
      if (activeFilter === 'incorrect' && (!isAttempted || isCorrect)) return false;
      if (activeFilter === 'unattempted' && isAttempted) return false;
      if (activeFilter === 'review' && !isReview) return false;

      if (selectedSectionFilter !== 'all' && q.sectionId !== selectedSectionFilter) return false;
      if (selectedSubjectFilter !== 'all' && q.subjectId !== selectedSubjectFilter) return false;
      if (selectedTypeFilter !== 'all' && q.type !== selectedTypeFilter) return false;

      if (searchQuery.trim()) {
        const qText = (q.question + ' ' + (q.explanation || '')).toLowerCase();
        if (!qText.includes(searchQuery.toLowerCase())) return false;
      }

      return true;
    });
  }, [questions, result, activeFilter, selectedSectionFilter, selectedSubjectFilter, selectedTypeFilter, searchQuery]);

  const handleRetakeTest = () => {
    if (!result) return;
    const candidateName = getSavedCandidateName();
    createNewSession(result.presetId || 'gate-2026-cs1', candidateName);
    router.push('/test');
  };

  const handlePrint = () => {
    window.print();
  };

  if (!result) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4 text-slate-300 select-none">
        <AlertCircle className="w-12 h-12 text-slate-500 mb-3" />
        <h2 className="text-xl font-bold text-white mb-1">No Examination Record Found</h2>
        <p className="text-sm text-slate-400 mb-6">Complete a mock exam or topic drill to generate performance analytics.</p>
        <button
          onClick={() => router.push('/')}
          className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm transition"
        >
          Return to GATE Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col antialiased select-none">
      {/* Top Header */}
      <header className="border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md sticky top-0 z-30 no-print">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-400 hover:text-white transition cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Dashboard</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMistakesModalOpen(true)}
              className="px-3 py-1.5 rounded-xl bg-amber-950/80 hover:bg-amber-900 text-amber-300 border border-amber-600/60 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer"
            >
              <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>Mistake Notebook ({result.incorrectCount})</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden sm:inline">Print Scorecard</span>
            </button>
            <button
              onClick={handleRetakeTest}
              className="px-3.5 sm:px-4 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-xs sm:text-sm flex items-center gap-1.5 shadow-md shadow-blue-950/60 transition cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retake Mock</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
        {/* Scorecard Hero Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950/20 border border-slate-800 shadow-2xl relative overflow-hidden space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-900/60 text-blue-300 border border-blue-700/60 font-bold uppercase tracking-wider">
                  Official GATE Result
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {new Date(result.completedAt).toLocaleString()}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
                {result.testTitle}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Candidate: <strong className="text-slate-200">{result.candidateName}</strong>
              </p>
            </div>

            {/* Qualified / Below Cutoff Badge */}
            <div className={`px-4 py-2.5 rounded-2xl border flex items-center gap-2.5 self-start sm:self-center shrink-0 ${
              result.isQualified
                ? 'bg-emerald-950/60 border-emerald-500/80 text-emerald-300 ring-2 ring-emerald-500/30'
                : 'bg-rose-950/60 border-rose-500/80 text-rose-300 ring-2 ring-rose-500/30'
            }`}>
              {result.isQualified ? (
                <Trophy className="w-6 h-6 text-emerald-400" />
              ) : (
                <AlertCircle className="w-6 h-6 text-rose-400" />
              )}
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider">
                  {result.isQualified ? 'GATE Qualified' : 'Below Cutoff'}
                </div>
                <div className="text-xs text-slate-300 font-mono">
                  Cutoff: {result.cutoffMarks} Marks
                </div>
              </div>
            </div>
          </div>

          {/* Key Metric Counters */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {/* Total Score */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
              <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider block">Total Score</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">{result.score}</span>
                <span className="text-xs text-slate-400 font-mono">/ {result.totalMarks}</span>
              </div>
              <span className="text-[11px] text-slate-500 font-mono mt-0.5 block">{result.percentage}% marks</span>
            </div>

            {/* Accuracy */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
              <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider block">Accuracy</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-2xl sm:text-3xl font-black text-blue-400 font-mono">{result.accuracy}%</span>
              </div>
              <span className="text-[11px] text-slate-500 font-mono mt-0.5 block">{result.correctCount} correct of {result.attemptedCount}</span>
            </div>

            {/* Negative Penalty */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
              <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider block">Negative Marks Incurred</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-2xl sm:text-3xl font-black text-rose-400 font-mono">-{result.negativeMarksIncurred}</span>
              </div>
              <span className="text-[11px] text-slate-500 font-mono mt-0.5 block">{result.incorrectCount} incorrect MCQs</span>
            </div>

            {/* Time Taken */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
              <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider block">Time Taken</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-xl sm:text-2xl font-black text-white font-mono">{formattedTime}</span>
              </div>
              <span className="text-[11px] text-slate-500 font-mono mt-0.5 block">{result.skippedCount} skipped</span>
            </div>
          </div>
        </div>

        {/* Normalized GATE Score & AIR Predictor Card */}
        <GateScorePredictorCard rawScore={result.score} totalMarks={result.totalMarks} />

        {/* Sectional & Subject-Wise Performance Heatmap */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Section Scores */}
          <div className="p-5 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
            <h3 className="font-extrabold text-base text-white flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-blue-400" />
              <span>Sectional Performance Breakdown</span>
            </h3>

            <div className="space-y-3">
              {result.sectionScores.map(sec => (
                <div key={sec.sectionId} className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white">{sec.sectionName}</span>
                    <span className="font-mono font-bold text-emerald-400">{sec.score} / {sec.totalMarks} Marks</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full bg-blue-500 rounded-full transition-all duration-300"
                      style={{ width: `${sec.totalMarks > 0 ? Math.max(0, Math.min(100, (sec.score / sec.totalMarks) * 100)) : 0}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span>{sec.attempted} attempted • {sec.correct} correct</span>
                    <span>{sec.accuracy}% Accuracy</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subject Scores Heatmap */}
          <div className="p-5 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
            <h3 className="font-extrabold text-base text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-400" />
              <span>Subject-Wise Performance Distribution</span>
            </h3>

            <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
              {result.subjectScores.map(subj => (
                <div key={subj.subjectId} className="p-3 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between gap-3 text-xs">
                  <div className="min-w-0">
                    <span className="font-bold text-slate-200 block truncate">{subj.subjectName}</span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {subj.correct}/{subj.attempted} of {subj.totalQuestions}Q
                    </span>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-mono font-bold text-emerald-400 block">{subj.score} Marks</span>
                    <span className="text-[10px] text-slate-500 font-mono">{subj.accuracy}% Acc</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Question Review & Solutions */}
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div>
              <h3 className="font-extrabold text-lg sm:text-xl text-white">
                Detailed Solutions &amp; Step-by-Step Rationales
              </h3>
              <p className="text-xs text-slate-400">
                Review verified solutions, compare your answers with official keys, and understand derivations.
              </p>
            </div>

            {/* Status Filter Buttons */}
            <div className="flex items-center gap-1 overflow-x-auto bg-slate-900 p-1 rounded-2xl border border-slate-800 text-xs shrink-0">
              {(['all', 'correct', 'incorrect', 'unattempted', 'review'] as const).map(f => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-3 py-1 rounded-xl font-bold transition capitalize cursor-pointer ${
                    activeFilter === f
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Sub-filters (Type, Search) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 p-3 rounded-2xl bg-slate-900 border border-slate-800 text-xs">
            {/* Subject Filter */}
            <div>
              <select
                value={selectedSubjectFilter}
                onChange={e => setSelectedSubjectFilter(e.target.value as any)}
                className="w-full px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-200 focus:outline-none"
              >
                <option value="all">All Subjects ({questions.length})</option>
                {SUBJECT_METADATA.map(s => (
                  <option key={s.subjectId} value={s.subjectId}>
                    {s.subjectName}
                  </option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div>
              <select
                value={selectedTypeFilter}
                onChange={e => setSelectedTypeFilter(e.target.value as any)}
                className="w-full px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-200 focus:outline-none"
              >
                <option value="all">All Types (MCQ, MSQ, NAT)</option>
                <option value="MCQ">MCQ (Multiple Choice)</option>
                <option value="MSQ">MSQ (Multiple Select)</option>
                <option value="NAT">NAT (Numerical Answer)</option>
              </select>
            </div>

            {/* Keyword Search */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search solutions..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-200 focus:outline-none"
              />
            </div>
          </div>

          {/* Question Cards List */}
          <div className="space-y-4">
            {filteredQuestions.map((q, idx) => {
              const resp = result.responses[q.id];
              const { isAttempted, isCorrect, marksAwarded } = evaluateAnswer(q, resp);

              return (
                <div
                  key={q.id}
                  className={`p-5 rounded-3xl border space-y-4 transition ${
                    isCorrect
                      ? 'bg-slate-900/90 border-slate-800'
                      : isAttempted
                      ? 'bg-rose-950/15 border-rose-900/40'
                      : 'bg-slate-900/60 border-slate-800/80'
                  }`}
                >
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-blue-600 text-white font-black text-xs">
                        Q.{q.questionNumber || idx + 1}
                      </span>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-purple-950 text-purple-300 border border-purple-800">
                        {q.type}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        {q.subjectName}
                      </span>
                      <span className="text-[11px] text-slate-500">
                        {q.sourcePaper}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-bold font-mono px-2.5 py-1 rounded-lg ${
                        isCorrect
                          ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                          : isAttempted
                          ? 'bg-rose-950 text-rose-400 border border-rose-800'
                          : 'bg-slate-800 text-slate-400'
                      }`}>
                        {isCorrect ? `+${marksAwarded}.0 Marks` : isAttempted ? `${marksAwarded} Marks` : 'Unattempted (0.0)'}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleToggleBookmark(q.id)}
                        className={`p-1.5 rounded-lg border transition cursor-pointer ${
                          bookmarkedIds.includes(q.id)
                            ? 'bg-amber-950 text-amber-400 border-amber-600'
                            : 'bg-slate-950 text-slate-500 border-slate-800 hover:text-slate-300'
                        }`}
                        title={bookmarkedIds.includes(q.id) ? 'Bookmarked' : 'Bookmark Question'}
                      >
                        <Bookmark className="w-3.5 h-3.5 fill-current" />
                      </button>
                    </div>
                  </div>

                  {/* Question Text */}
                  <div className="text-sm font-semibold text-slate-100 leading-relaxed">
                    {q.question}
                  </div>

                  {/* Options (for MCQ & MSQ) */}
                  {q.options && q.options.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {q.options.map(opt => {
                        const isChosen = q.type === 'MSQ'
                          ? (resp?.selectedOptions || []).includes(opt.key)
                          : resp?.selectedOption === opt.key;

                        const isOfficial = q.type === 'MSQ'
                          ? (q.correctAnswers || [q.correctAnswer || 'a']).includes(opt.key)
                          : q.correctAnswer === opt.key;

                        let style = 'bg-slate-950/70 border-slate-800 text-slate-300';
                        if (isOfficial) {
                          style = 'bg-emerald-950/50 border-emerald-500/80 text-emerald-200 ring-1 ring-emerald-500/30';
                        } else if (isChosen && !isOfficial) {
                          style = 'bg-rose-950/50 border-rose-500/80 text-rose-200 ring-1 ring-rose-500/30';
                        }

                        return (
                          <div key={opt.key} className={`p-3 rounded-2xl border text-xs flex items-start gap-2.5 ${style}`}>
                            <span className="w-5 h-5 rounded flex items-center justify-center font-bold text-[10px] uppercase shrink-0 bg-slate-800 text-slate-300">
                              {opt.key}
                            </span>
                            <span className="pt-0.5 leading-snug flex-1">{opt.text}</span>
                            {isOfficial && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                            {isChosen && !isOfficial && <XCircle className="w-4 h-4 text-rose-400 shrink-0" />}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* NAT User Answer Display */}
                  {q.type === 'NAT' && (
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono flex items-center justify-between">
                      <span>Your Input: <strong className={isCorrect ? 'text-emerald-400' : 'text-rose-400'}>{resp?.natValue || 'None'}</strong></span>
                      <span>Official Value/Range: <strong className="text-emerald-400">{q.natAnswerRange ? `${q.natAnswerRange.min} to ${q.natAnswerRange.max}` : q.natAnswer}</strong></span>
                    </div>
                  )}

                  {/* Step-by-Step Explanation Box */}
                  <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800/80 space-y-2.5 text-xs">
                    <div className="flex items-center gap-1.5 font-bold text-emerald-400">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Verified GATE Derivation &amp; Solution:</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed pl-5">
                      {q.explanation}
                    </p>
                    <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between flex-wrap gap-2">
                      <span className="text-[11px] text-slate-400 font-mono">
                        Topic Area: <strong className="text-slate-200">{q.subjectName}</strong>
                      </span>
                      <button
                        type="button"
                        onClick={() => router.push(`/study?subject=${q.subjectId}`)}
                        className="px-3 py-1.5 rounded-xl bg-blue-950/80 hover:bg-blue-900 border border-blue-700/60 text-blue-300 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Revise Concept in Study Hub →</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Mistake Notebook Modal */}
      <MistakeNotebookModal
        isOpen={isMistakesModalOpen}
        onClose={() => setIsMistakesModalOpen(false)}
      />
    </div>
  );
}
