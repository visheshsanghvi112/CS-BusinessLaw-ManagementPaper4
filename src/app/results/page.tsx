'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { TestResult, Question, SectionId } from '@/types';
import { getLatestResult, getResultById, createNewSession, getSavedCandidateName } from '@/lib/storage';
import { QUESTION_BANK } from '@/lib/questionBank';
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
  X
} from 'lucide-react';

export default function ResultsPage() {
  const router = useRouter();
  const [result, setResult] = useState<TestResult | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'correct' | 'incorrect' | 'unattempted' | 'review'>('all');
  const [selectedSectionFilter, setSelectedSectionFilter] = useState<'all' | SectionId>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

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
      const isAttempted = resp && resp.selectedOption !== null;
      const isCorrect = isAttempted && (
        q.acceptedAnswers && q.acceptedAnswers.length > 0
          ? q.acceptedAnswers.includes(resp.selectedOption!)
          : resp.selectedOption === q.correctAnswer
      );
      const isIncorrect = isAttempted && !isCorrect;
      const isMarked = resp?.status === 'marked-for-review' || resp?.status === 'answered-marked-review';

      if (selectedSectionFilter !== 'all' && q.sectionId !== selectedSectionFilter) {
        return false;
      }

      if (activeFilter === 'correct' && !isCorrect) return false;
      if (activeFilter === 'incorrect' && !isIncorrect) return false;
      if (activeFilter === 'unattempted' && isAttempted) return false;
      if (activeFilter === 'review' && !isMarked) return false;

      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesQuestion = q.question.toLowerCase().includes(query);
        const matchesExplanation = q.explanation.toLowerCase().includes(query);
        const matchesLesson = q.lessonName.toLowerCase().includes(query);
        const matchesOptions = q.options.some(o => o.text.toLowerCase().includes(query));
        if (!matchesQuestion && !matchesExplanation && !matchesLesson && !matchesOptions) {
          return false;
        }
      }

      return true;
    });
  }, [questions, result, activeFilter, selectedSectionFilter, searchQuery]);

  const handleRetakeTest = () => {
    if (!result) {
      createNewSession('full-mock', getSavedCandidateName());
      router.push('/test');
      return;
    }
    createNewSession(result.presetId || 'full-mock', result.candidateName);
    router.push('/test');
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  if (!result) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 bg-slate-950 text-slate-100 antialiased">
        <div className="max-w-md w-full bg-slate-900 p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-800 text-center space-y-5">
          <div className="w-16 h-16 bg-blue-950 border border-blue-800 rounded-2xl flex items-center justify-center mx-auto text-blue-400">
            <Trophy className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-white">No Recent Test Found</h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Take a mock test to view detailed performance analytics, accuracy, and official ICSI explanations.
          </p>
          <button
            onClick={handleRetakeTest}
            className="w-full py-3 px-5 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md transition cursor-pointer touch-feedback"
          >
            Start Official Full Mock Test
          </button>
        </div>
      </div>
    );
  }

  // SVG Gauge calculations
  const radius = 46;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (result.percentage / 100) * circumference;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-4 sm:py-10 px-3 sm:px-6 lg:px-8 antialiased select-none">
      <div className="max-w-5xl mx-auto space-y-5 sm:space-y-8">
        {/* Navigation Bar (Hidden in Print) */}
        <div className="flex items-center justify-between gap-2 no-print">
          <button
            type="button"
            onClick={() => router.push('/')}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-bold bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 transition cursor-pointer touch-feedback"
          >
            <ChevronLeft className="w-4 h-4" />
            Dashboard
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              title="Print or Save Scorecard as PDF"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-bold bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 transition cursor-pointer touch-feedback"
            >
              <Printer className="w-4 h-4 text-slate-400" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            <button
              type="button"
              onClick={handleRetakeTest}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white shadow-md transition cursor-pointer touch-feedback"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Retake Mock Test</span>
              <span className="sm:hidden">Retake</span>
            </button>
          </div>
        </div>

        {/* Hero Score Card */}
        <div className="p-5 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-5 sm:space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left: Score & Qualification Info */}
            <div className="text-center md:text-left space-y-3 flex-1 w-full">
              <div className="flex items-center justify-center md:justify-start gap-2 flex-wrap">
                <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full border shadow-inner ${
                  result.isQualified
                    ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/40'
                    : 'bg-red-500/15 text-red-400 border-red-500/40'
                }`}>
                  {result.isQualified ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                  {result.isQualified ? 'QUALIFIED (Cleared Cutoff)' : 'DID NOT MEET CUTOFF'}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {result.candidateName}
                </span>
              </div>

              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
                  {result.testTitle}
                </h1>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Completed on {new Date(result.completedAt).toLocaleDateString()} • {result.totalQuestions} Questions Evaluated
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                {result.isQualified
                  ? 'Congratulations! You secured ≥ 40% marks in Paper 4, satisfying the ICSI individual subject qualifying cutoff.'
                  : 'Individual qualifying cutoff is 40% (40 / 100 Marks). Review the detailed ICSI statutory rationales below to target weak concepts.'}
              </p>
            </div>

            {/* Right: Circular Score Gauge */}
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 shrink-0 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 110 110">
                <circle
                  cx="55"
                  cy="55"
                  r={radius}
                  className="text-slate-800"
                  strokeWidth="10"
                  stroke="currentColor"
                  fill="transparent"
                />
                <circle
                  cx="55"
                  cy="55"
                  r={radius}
                  className={result.isQualified ? 'text-emerald-500' : 'text-red-500'}
                  strokeWidth="10"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
                />
              </svg>
              <div className="absolute flex flex-col items-center justify-center text-center">
                <span className="text-2xl sm:text-3xl font-black text-white leading-none">
                  {result.score}
                </span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">
                  / {result.totalMarks} Marks
                </span>
                <span className="text-xs font-extrabold text-blue-400 mt-0.5">
                  {result.percentage}%
                </span>
              </div>
            </div>
          </div>

          {/* Key Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-1">
            <div className="p-3 sm:p-4 rounded-2xl bg-slate-950/60 border border-slate-800 text-center">
              <Target className="w-4 h-4 sm:w-5 sm:h-5 mx-auto text-blue-400 mb-1" />
              <div className="text-base sm:text-xl font-black text-white">{result.accuracy}%</div>
              <div className="text-[10px] sm:text-[11px] text-slate-400 font-semibold">Accuracy</div>
            </div>

            <div className="p-3 sm:p-4 rounded-2xl bg-emerald-950/30 border border-emerald-900/50 text-center">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 mx-auto text-emerald-400 mb-1" />
              <div className="text-base sm:text-xl font-black text-emerald-400">{result.correctCount}</div>
              <div className="text-[10px] sm:text-[11px] text-emerald-500 font-semibold">Correct (+1.0)</div>
            </div>

            <div className="p-3 sm:p-4 rounded-2xl bg-red-950/30 border border-red-900/50 text-center">
              <XCircle className="w-4 h-4 sm:w-5 sm:h-5 mx-auto text-red-400 mb-1" />
              <div className="text-base sm:text-xl font-black text-red-400">{result.incorrectCount}</div>
              <div className="text-[10px] sm:text-[11px] text-red-500 font-semibold">Incorrect (0.0)</div>
            </div>

            <div className="p-3 sm:p-4 rounded-2xl bg-slate-950/60 border border-slate-800 text-center">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 mx-auto text-purple-400 mb-1" />
              <div className="text-sm sm:text-lg font-black text-white truncate">{formattedTime}</div>
              <div className="text-[10px] sm:text-[11px] text-slate-400 font-semibold">Time Taken</div>
            </div>
          </div>
        </div>

        {/* Sectional Performance Breakdown */}
        {result.sectionScores.length > 0 && (
          <div className="space-y-3">
            <h2 className="text-sm sm:text-lg font-black text-white flex items-center gap-2">
              <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
              Sectional Performance Breakdown
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {result.sectionScores.map(sec => {
                const percentage = sec.totalQuestions > 0 ? (sec.score / sec.totalQuestions) * 100 : 0;
                return (
                  <div
                    key={sec.sectionId}
                    className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-bold text-xs sm:text-sm text-white truncate">
                        {sec.sectionName}
                      </span>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-blue-950 border border-blue-800 text-blue-300 shrink-0 font-mono">
                        {sec.score} / {sec.totalQuestions}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-blue-500 transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between text-[11px] sm:text-xs text-slate-400 font-semibold pt-0.5">
                      <span>Attempted: {sec.attempted} / {sec.totalQuestions}</span>
                      <span>Accuracy: {sec.accuracy}%</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Solutions & Explanations Review Engine */}
        <div className="space-y-4 pt-2">
          <div className="space-y-3 border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-400" />
                Comprehensive Solutions & ICSI Rationales
              </h2>
              <p className="text-xs text-slate-400">
                Detailed statutory sections, landmark judicial precedents, and management principles.
              </p>
            </div>

            {/* Search Bar & Filter Bar */}
            <div className="space-y-2.5 no-print">
              {/* Search input */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search questions by topic, keyword, or section (e.g. Salomon, Taylor, Sec 135)..."
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-8 py-2 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-hidden focus:border-blue-500 transition"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-white"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Section & Status Filter Tabs */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
                  <button
                    type="button"
                    onClick={() => setSelectedSectionFilter('all')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer touch-feedback ${
                      selectedSectionFilter === 'all'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                    }`}
                  >
                    All Sections
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedSectionFilter('part-a')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer touch-feedback ${
                      selectedSectionFilter === 'part-a'
                        ? 'bg-blue-700 text-white shadow-md'
                        : 'bg-slate-900 text-blue-400 border border-slate-800 hover:bg-blue-950/40'
                    }`}
                  >
                    Part A: Laws
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedSectionFilter('part-b')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer touch-feedback ${
                      selectedSectionFilter === 'part-b'
                        ? 'bg-purple-700 text-white shadow-md'
                        : 'bg-slate-900 text-purple-400 border border-slate-800 hover:bg-purple-950/40'
                    }`}
                  >
                    Part B: Management
                  </button>
                </div>

                <div className="hidden sm:block w-px h-5 bg-slate-800 mx-1" />

                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
                <button
                  type="button"
                  onClick={() => setActiveFilter('all')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer touch-feedback ${
                    activeFilter === 'all'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                  }`}
                >
                  All ({questions.length})
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFilter('correct')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer touch-feedback ${
                    activeFilter === 'correct'
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-slate-900 text-emerald-400 border border-slate-800 hover:bg-emerald-950/40'
                  }`}
                >
                  Correct ({result.correctCount})
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFilter('incorrect')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer touch-feedback ${
                    activeFilter === 'incorrect'
                      ? 'bg-red-600 text-white shadow-md'
                      : 'bg-slate-900 text-red-400 border border-slate-800 hover:bg-red-950/40'
                  }`}
                >
                  Incorrect ({result.incorrectCount})
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFilter('unattempted')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer touch-feedback ${
                    activeFilter === 'unattempted'
                      ? 'bg-slate-700 text-white shadow-md'
                      : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                  }`}
                >
                  Skipped ({result.skippedCount})
                </button>
              </div>
              </div>
            </div>
          </div>

          {/* Question Review Cards */}
          <div className="space-y-4">
            {filteredQuestions.map(q => {
              const resp = result.responses[q.id];
              const userSelected = resp?.selectedOption || null;
              const isCorrect = userSelected !== null && (
                q.acceptedAnswers && q.acceptedAnswers.length > 0
                  ? q.acceptedAnswers.includes(userSelected)
                  : userSelected === q.correctAnswer
              );
              const isUnattempted = userSelected === null;

              return (
                <div
                  key={q.id}
                  className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-slate-900 border border-slate-800 shadow-md space-y-3.5 sm:space-y-4"
                >
                  {/* Question Header Badge */}
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-white font-black text-xs">
                        Q.{q.id}
                      </span>
                      <span className="text-xs text-slate-400 font-bold">
                        {q.sectionName}
                      </span>
                      <span className="hidden sm:inline text-xs px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700">
                        {q.lessonName}
                      </span>
                      {q.officialKey && q.officialKey.includes('or') && (
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-900/60 text-blue-300 border border-blue-700">
                          ICSI Key: {q.officialKey}
                        </span>
                      )}
                    </div>

                    {/* User outcome status */}
                    <div className="shrink-0">
                      {isCorrect && (
                        <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-800">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Correct (+1.0)
                        </span>
                      )}
                      {!isCorrect && !isUnattempted && (
                        <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-lg bg-red-950/80 text-red-400 border border-red-800">
                          <XCircle className="w-3.5 h-3.5" /> Incorrect (0.0)
                        </span>
                      )}
                      {isUnattempted && (
                        <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-800 text-slate-400 border border-slate-700">
                          Skipped (0.0)
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Question Prompt */}
                  <div className="text-sm sm:text-base font-bold text-slate-100 leading-relaxed">
                    {q.question}
                  </div>

                  {/* 4 Option Review Cards */}
                  <div className="space-y-2 pt-1">
                    {q.options.map(opt => {
                      const isOptionSelected = userSelected === opt.key;
                      const isOptionCorrect = q.acceptedAnswers && q.acceptedAnswers.length > 0
                        ? q.acceptedAnswers.includes(opt.key)
                        : q.correctAnswer === opt.key;

                      let cardStyle = 'bg-slate-950/60 border-slate-800 text-slate-300';

                      if (isOptionCorrect) {
                        cardStyle = 'bg-emerald-950/40 border-emerald-500 text-emerald-100 ring-1 ring-emerald-500/60';
                      } else if (isOptionSelected && !isOptionCorrect) {
                        cardStyle = 'bg-red-950/40 border-red-500 text-red-100 ring-1 ring-red-500/60';
                      }

                      return (
                        <div
                          key={opt.key}
                          className={`p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border flex items-start gap-2.5 sm:gap-3 transition-all ${cardStyle}`}
                        >
                          <span
                            className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg sm:rounded-xl flex items-center justify-center font-black text-xs uppercase shrink-0 ${
                              isOptionCorrect
                                ? 'bg-emerald-600 text-white'
                                : isOptionSelected && !isOptionCorrect
                                ? 'bg-red-600 text-white'
                                : 'bg-slate-800 text-slate-400 border border-slate-700'
                            }`}
                          >
                            {opt.key}
                          </span>
                          <span className="text-xs sm:text-sm pt-0.5 leading-snug flex-1">
                            {opt.text}
                          </span>
                          {isOptionCorrect && (
                            <span className="text-[11px] sm:text-xs font-bold text-emerald-400 shrink-0 pt-0.5">
                              Correct Answer ✓
                            </span>
                          )}
                          {isOptionSelected && !isOptionCorrect && (
                            <span className="text-[11px] sm:text-xs font-bold text-red-400 shrink-0 pt-0.5">
                              Your Answer ✗
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* ICSI Statutory / Theoretical Explanation */}
                  <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-blue-950/30 border border-blue-900/50 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-blue-400">
                      <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                      Official ICSI Statutory Rationale
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {q.explanation}
                    </p>
                  </div>
                </div>
              );
            })}

            {filteredQuestions.length === 0 && (
              <div className="p-8 text-center bg-slate-900 rounded-3xl border border-slate-800 text-slate-400 text-sm space-y-2">
                <p>No questions match the current filter or search criteria.</p>
                {(activeFilter !== 'all' || searchQuery) && (
                  <button
                    type="button"
                    onClick={() => {
                      setActiveFilter('all');
                      setSearchQuery('');
                    }}
                    className="text-xs text-blue-400 hover:underline font-bold"
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

