'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { TEST_PRESETS, SUBJECT_METADATA, QUESTION_BANK } from '@/lib/questionBank';
import { GATE_STUDY_MODULES } from '@/lib/gateStudyNotes';
import {
  createNewSession,
  getSavedCandidateName,
  saveCandidateName,
  getTestHistory,
  clearTestHistory,
  getActiveSession,
  clearActiveSession,
  getMistakeRecords,
  getBookmarkedQuestionIds
} from '@/lib/storage';
import { TestResult, TestSession } from '@/types';
import {
  ShieldCheck,
  Play,
  Clock,
  BookOpen,
  Calculator,
  CheckCircle2,
  ChevronRight,
  User,
  History,
  Sparkles,
  Trash2,
  Layers,
  BookMarked,
  Award,
  Zap,
  CheckSquare,
  Hash,
  Search,
  AlertTriangle,
  Bookmark,
  Calendar
} from 'lucide-react';
import { SubjectPracticeHub } from '@/components/cbt/SubjectPracticeHub';
import { PyqArchiveExplorer } from '@/components/cbt/PyqArchiveExplorer';
import { MistakeNotebookModal } from '@/components/cbt/MistakeNotebookModal';
import { FormulaFlashcardsModal } from '@/components/study/FormulaFlashcardsModal';
import { GlobalCommandPalette } from '@/components/common/GlobalCommandPalette';
import { ScientificCalculator } from '@/components/cbt/ScientificCalculator';
import { RevisionNotesModal } from '@/components/cbt/RevisionNotesModal';

export default function HomePage() {
  const router = useRouter();
  const [candidateName, setCandidateName] = useState<string>('Candidate');
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [history, setHistory] = useState<TestResult[]>([]);
  const [activeSession, setActiveSession] = useState<TestSession | null>(null);
  const [mainTab, setMainTab] = useState<'mocks' | 'archive' | 'subjects' | 'syllabus' | 'formulas'>('mocks');
  const [isCalcOpen, setIsCalcOpen] = useState<boolean>(false);
  const [isFormulaModalOpen, setIsFormulaModalOpen] = useState<boolean>(false);
  const [isFlashcardsModalOpen, setIsFlashcardsModalOpen] = useState<boolean>(false);
  const [isMistakesModalOpen, setIsMistakesModalOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [mistakesCount, setMistakesCount] = useState<number>(0);
  const [bookmarksCount, setBookmarksCount] = useState<number>(0);

  useEffect(() => {
    setCandidateName(getSavedCandidateName());
    setHistory(getTestHistory());
    setMistakesCount(getMistakeRecords().filter(m => !m.isResolved).length);
    setBookmarksCount(getBookmarkedQuestionIds().length);
    const existing = getActiveSession();
    if (existing && !existing.isSubmitted && existing.remainingSeconds > 0) {
      setActiveSession(existing);
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const savedTimerRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCandidateName(val);
    saveCandidateName(val.trim() || 'Candidate');
    setIsSaved(true);
    if (savedTimerRef.current) clearTimeout(savedTimerRef.current);
    savedTimerRef.current = setTimeout(() => setIsSaved(false), 2000);
  };

  const handleStartTest = (presetId: string) => {
    if (activeSession && !activeSession.isSubmitted && activeSession.remainingSeconds > 0) {
      const confirmed = window.confirm(
        `You have an active examination session in progress ("${activeSession.testTitle}"). Starting a new test will discard your current progress. Are you sure you want to proceed?`
      );
      if (!confirmed) return;
    }
    const finalName = candidateName.trim() || 'Candidate';
    saveCandidateName(finalName);
    createNewSession(presetId, finalName);
    router.push('/test');
  };

  const handleResumeActive = () => {
    router.push('/test');
  };

  const handleClearHistory = () => {
    if (confirm('Are you sure you want to clear your past test attempt history?')) {
      clearTestHistory();
      setHistory([]);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col antialiased select-none">
      {/* Top Navbar */}
      <header className="border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3.5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-black shadow-inner shrink-0">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 rounded-md bg-blue-900/60 border border-blue-700/60 text-blue-300 uppercase tracking-wider">
                  GATE 2027 CS &amp; IT
                </span>
                <span className="text-[10px] text-slate-400 hidden sm:inline">IIT Madras Organizing Institute</span>
              </div>
              <h1 className="text-xs sm:text-sm md:text-base font-black text-white tracking-tight">
                Computer Science &amp; Information Technology
              </h1>
            </div>
          </div>

          {/* Quick Header Utilities */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-300 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer"
              title="Search all syllabus notes, formulas, and questions (⌘K)"
            >
              <Search className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden md:inline px-1 py-0.2 rounded bg-slate-800 text-[10px] font-mono text-slate-400 border border-slate-700">⌘K</kbd>
            </button>

            <button
              onClick={() => router.push('/study')}
              className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs flex items-center gap-1.5 shadow-md shadow-blue-900/30 transition cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Study Hub</span>
            </button>

            <button
              onClick={() => setIsMistakesModalOpen(true)}
              className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-amber-950/80 hover:bg-amber-900 border border-amber-600/60 text-amber-300 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer"
              title="Open Mistake Notebook"
            >
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Mistakes</span>
              {mistakesCount > 0 && (
                <span className="px-1.5 py-0.2 rounded-full bg-amber-500 text-slate-950 font-black text-[10px]">
                  {mistakesCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsCalcOpen(true)}
              className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-700/80 text-emerald-300 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-emerald-400" />
              <span className="hidden sm:inline">Calc</span>
            </button>

            <button
              onClick={() => setIsFlashcardsModalOpen(true)}
              className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-indigo-950/80 hover:bg-indigo-900 border border-indigo-700/80 text-indigo-300 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer"
              title="Active Recall Formula Flashcards"
            >
              <BookMarked className="w-4 h-4 text-indigo-400" />
              <span className="hidden sm:inline">Flashcards</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Header & Candidate Name Input */}
      <section className="border-b border-slate-800/60 bg-gradient-to-b from-blue-950/20 via-slate-950 to-slate-950 px-4 sm:px-6 py-6 sm:py-8">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Active Session Resume Banner */}
          {activeSession && (
            <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-950/90 to-indigo-950/80 border border-blue-500/50 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/30 flex items-center justify-center text-blue-400 shrink-0">
                  <Clock className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-500 text-white uppercase tracking-wider">
                      Session In Progress
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {Math.ceil(activeSession.remainingSeconds / 60)} mins remaining
                    </span>
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-white">
                    {activeSession.testTitle}
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={handleResumeActive}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs sm:text-sm shadow-md transition flex items-center gap-1.5 cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Resume Test</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    clearActiveSession();
                    setActiveSession(null);
                  }}
                  className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white text-xs font-semibold border border-slate-700 transition cursor-pointer"
                >
                  Discard
                </button>
              </div>
            </div>
          )}

          {/* Main Hero Card */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>500+ Official PYQ Archive (2007–2026) • High Weightage to 2024, 2025 &amp; 2026</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
                Master GATE 2027 CS &amp; IT with Official Simulation &amp; Study Hub
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Authentic IIT Madras syllabus architecture. Study in-depth concepts, formulas, and examiner pitfalls topic-by-topic, or test yourself with 180-minute 65-question mocks featuring 2024–2026 PYQs, MSQs, NATs, and virtual scientific calculator.
              </p>

              <div className="flex items-center gap-2.5 pt-2 flex-wrap">
                <button
                  type="button"
                  onClick={() => router.push('/study')}
                  className="px-4 sm:px-5 py-2.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-xs sm:text-sm shadow-xl shadow-blue-900/30 flex items-center gap-2 transition cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Explore Study Notes &amp; Theory Hub</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMainTab('mocks');
                    window.scrollTo({ top: 400, behavior: 'smooth' });
                  }}
                  className="px-4 sm:px-5 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-xs sm:text-sm flex items-center gap-2 transition cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 text-emerald-400 fill-current" />
                  <span>Launch 2024–2026 Mocks</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsMistakesModalOpen(true)}
                  className="px-3.5 py-2.5 rounded-2xl bg-amber-950/40 hover:bg-amber-950/70 border border-amber-600/50 text-amber-300 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer"
                >
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                  <span>Mistake Notebook</span>
                  {mistakesCount > 0 && (
                    <span className="px-1.5 py-0.2 rounded-full bg-amber-500 text-slate-950 font-black text-[10px]">
                      {mistakesCount}
                    </span>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setIsFlashcardsModalOpen(true)}
                  className="px-3.5 py-2.5 rounded-2xl bg-indigo-950/40 hover:bg-indigo-950/70 border border-indigo-600/50 text-indigo-300 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer"
                >
                  <BookMarked className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Formula Flashcards</span>
                </button>
              </div>

              {/* Quick Stats Pills */}
              <div className="flex items-center gap-2 flex-wrap pt-1">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300">
                  <Hash className="w-3.5 h-3.5 text-blue-400" />
                  <span><strong className="text-white">{QUESTION_BANK.length}</strong> PYQs (2007–2026)</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300">
                  <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                  <span><strong className="text-white">{GATE_STUDY_MODULES.reduce((acc, m) => acc + m.topics.length, 0)}</strong> Topics</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300">
                  <Bookmark className="w-3.5 h-3.5 text-indigo-400" />
                  <span><strong className="text-white">{bookmarksCount}</strong> Bookmarks</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                  <span><strong className="text-white">{mistakesCount}</strong> Open Mistakes</span>
                </div>
              </div>
            </div>

            {/* Candidate Identity Setting Card */}
            <div className="p-4 sm:p-5 bg-slate-900/90 border border-slate-800 rounded-3xl shadow-xl w-full lg:max-w-xs space-y-3 shrink-0">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                  <User className="w-4 h-4 text-blue-400" />
                  <span>Candidate Name:</span>
                </label>
                {isSaved && (
                  <span className="text-[11px] font-bold text-emerald-400 animate-in fade-in">
                    Saved ✓
                  </span>
                )}
              </div>
              <input
                type="text"
                value={candidateName}
                onChange={handleNameChange}
                placeholder="Enter candidate name"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <div className="text-[11px] text-slate-400 flex items-center justify-between">
                <span>Stored locally for scorecards</span>
                <span className="font-mono text-slate-500">GATE2027</span>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 border-b border-slate-800 pt-2 overflow-x-auto text-xs sm:text-sm font-bold">
            <button
              onClick={() => setMainTab('mocks')}
              className={`pb-3 px-3 sm:px-4 border-b-2 transition flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                mainTab === 'mocks'
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>Full Mocks (2024–2026)</span>
            </button>
            <button
              onClick={() => setMainTab('archive')}
              className={`pb-3 px-3 sm:px-4 border-b-2 transition flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                mainTab === 'archive'
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>PYQ Archive Explorer (2007–2026)</span>
            </button>
            <button
              onClick={() => setMainTab('subjects')}
              className={`pb-3 px-3 sm:px-4 border-b-2 transition flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                mainTab === 'subjects'
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Subject &amp; Topic Drills</span>
            </button>
            <button
              onClick={() => setMainTab('syllabus')}
              className={`pb-3 px-3 sm:px-4 border-b-2 transition flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                mainTab === 'syllabus'
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Syllabus Breakdown</span>
            </button>
            <button
              onClick={() => setMainTab('formulas')}
              className={`pb-3 px-3 sm:px-4 border-b-2 transition flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                mainTab === 'formulas'
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <BookMarked className="w-4 h-4" />
              <span>Formulas &amp; Flashcards</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Tab Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8">
        {/* TAB 1: FULL MOCKS */}
        {mainTab === 'mocks' && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-950 text-emerald-400 border border-emerald-800">
                  Featured Official Papers
                </span>
                <span className="text-xs text-slate-400">180 Mins • 65 Questions • 100 Marks</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Recent Years High-Weightage Mock Examinations
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
                Take full official examination papers from 2026, 2025, and 2024 under real test conditions with sectional gates, MSQ multi-select, NAT precision bounds, and instant scoring against the GATE cutoff.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {TEST_PRESETS.map(preset => (
                <div
                  key={preset.id}
                  className={`p-5 rounded-3xl border transition-all duration-200 flex flex-col justify-between space-y-4 ${
                    preset.featured
                      ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950/30 border-blue-500/40 hover:border-blue-500/80 shadow-xl'
                      : 'bg-slate-900/90 border-slate-800 hover:border-slate-700 shadow-md'
                  }`}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-950/80 text-blue-300 border border-blue-700/60">
                        {preset.badge}
                      </span>
                      {preset.organizingInstitute && (
                        <span className="text-[10px] text-slate-400 font-mono">
                          {preset.organizingInstitute}
                        </span>
                      )}
                    </div>

                    <h4 className="font-extrabold text-base sm:text-lg text-white tracking-tight">
                      {preset.title}
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {preset.description}
                    </p>

                    <div className="flex items-center gap-3 pt-2 text-xs text-slate-300 font-mono">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-blue-400" />
                        {preset.durationMinutes} mins
                      </span>
                      <span>•</span>
                      <span>{preset.questionCount} Questions</span>
                      <span>•</span>
                      <span className="text-emerald-400 font-bold">100 Marks</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleStartTest(preset.id)}
                    className="w-full py-2.5 px-4 rounded-xl font-black text-xs sm:text-sm bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white shadow-lg shadow-blue-900/40 transition flex items-center justify-center gap-2 cursor-pointer touch-feedback"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>Launch Examination</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: PYQ ARCHIVE EXPLORER */}
        {mainTab === 'archive' && (
          <PyqArchiveExplorer />
        )}

        {/* TAB 3: SUBJECT DRILLS */}
        {mainTab === 'subjects' && (
          <SubjectPracticeHub />
        )}

        {/* TAB 3: SYLLABUS BREAKDOWN & STUDY TOPICS */}
        {mainTab === 'syllabus' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  IIT Madras GATE 2027 CS Syllabus Architecture
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Extracted directly from the official notification document. Click any topic to study theory, formulas, and examiner traps directly.
                </p>
              </div>
              <button
                type="button"
                onClick={() => router.push('/study')}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-xs sm:text-sm shadow-md transition flex items-center gap-1.5 shrink-0 cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Open Full Study Reader →</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {SUBJECT_METADATA.map(meta => {
                const studyMod = GATE_STUDY_MODULES.find(m => m.subjectId === meta.subjectId);

                return (
                  <div
                    key={meta.subjectId}
                    className="p-5 sm:p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 flex flex-col justify-between hover:border-slate-700 transition shadow-lg"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                          {meta.syllabusSection}
                        </span>
                        <span className="text-xs font-bold text-emerald-400 font-mono">
                          {meta.weightageMarks}
                        </span>
                      </div>
                      <h4 className="font-extrabold text-base sm:text-lg text-white">
                        {meta.subjectName}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {meta.description}
                      </p>

                      {/* Interactive Topic Notes Links */}
                      {studyMod && studyMod.topics.length > 0 ? (
                        <div className="space-y-2 pt-2 border-t border-slate-800/80">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                            <BookOpen className="w-3 h-3 text-blue-400" />
                            <span>Structured Study Modules (Click to Read):</span>
                          </span>
                          <div className="space-y-1.5">
                            {studyMod.topics.map(t => (
                              <button
                                key={t.id}
                                type="button"
                                onClick={() => router.push(`/study?topic=${t.id}`)}
                                className="w-full p-2.5 rounded-xl bg-slate-950 hover:bg-blue-950/60 border border-slate-800 hover:border-blue-700/60 text-left transition flex items-center justify-between gap-2 group cursor-pointer"
                              >
                                <span className="text-xs font-bold text-slate-200 group-hover:text-blue-300 transition line-clamp-1">
                                  {t.topicTitle}
                                </span>
                                <span className="text-[10px] font-mono text-slate-500 group-hover:text-blue-400 shrink-0">
                                  {t.estimatedReadTime} →
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Key Syllabus Topics:</span>
                          <ul className="grid grid-cols-1 gap-1 text-xs text-slate-300">
                            {meta.keyTopics.map((t, idx) => (
                              <li key={idx} className="flex items-start gap-1.5">
                                <span className="text-blue-400 font-bold">•</span>
                                <span>{t}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => router.push(`/study?subject=${meta.subjectId}`)}
                        className="w-full py-2 px-3 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-blue-300 hover:text-white font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer"
                      >
                        <BookMarked className="w-3.5 h-3.5" />
                        <span>Open Complete {meta.subjectName} Study Guide →</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 4: FORMULAS & NOTES PREVIEW */}
        {mainTab === 'formulas' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  High-Yield Formula &amp; Concept Sheets
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Quick-reference cheat sheet for mathematical identities, complexity tables, and hardware formulas.
                </p>
              </div>
              <button
                onClick={() => setIsFormulaModalOpen(true)}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 transition"
              >
                <BookMarked className="w-4 h-4" />
                <span>Open Full Sheet</span>
              </button>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 text-center space-y-3">
              <BookMarked className="w-10 h-10 text-emerald-400 mx-auto" />
              <h4 className="text-base font-bold text-white">Browse All Core Formulas</h4>
              <p className="text-xs text-slate-400 max-w-lg mx-auto">
                Explore handshaking lemmas, planar graph formulas, Master theorem cases, Chomsky closure matrices, and paging calculations.
              </p>
              <div className="flex items-center justify-center gap-3 pt-2 flex-wrap">
                <button
                  onClick={() => setIsFormulaModalOpen(true)}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-300 font-bold text-xs border border-slate-700 inline-block transition cursor-pointer"
                >
                  Launch Interactive Formula Deck
                </button>
                <button
                  onClick={() => setIsFlashcardsModalOpen(true)}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs shadow-md inline-flex items-center gap-1.5 transition cursor-pointer"
                >
                  <BookMarked className="w-4 h-4" />
                  <span>Launch Formula Flashcards</span>
                </button>
                <button
                  onClick={() => router.push('/study')}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs shadow-md inline-flex items-center gap-1.5 transition cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Open Deep-Dive Topic Notes</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Performance History Section */}
        {history.length > 0 && (
          <div className="space-y-4 pt-6 border-t border-slate-800/80">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <History className="w-5 h-5 text-blue-400" />
                <h3 className="font-extrabold text-base sm:text-lg text-white">
                  Past Examination Attempts ({history.length})
                </h3>
              </div>
              <button
                type="button"
                onClick={handleClearHistory}
                className="text-xs text-slate-500 hover:text-rose-400 flex items-center gap-1 transition"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear History</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {history.slice(0, 4).map((h, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-3"
                >
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        h.isQualified ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-rose-950 text-rose-400 border border-rose-800'
                      }`}>
                        {h.isQualified ? 'Qualified' : 'Below Cutoff'}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        {new Date(h.completedAt).toLocaleDateString()}
                      </span>
                    </div>
                    <h5 className="font-bold text-sm text-white truncate">
                      {h.testTitle}
                    </h5>
                    <div className="text-xs text-slate-400 font-mono">
                      Score: <strong className="text-white">{h.score}</strong> / {h.totalMarks} ({h.accuracy}% Acc)
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      // Navigate to results
                      router.push('/results');
                    }}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-blue-400 text-xs font-bold transition shrink-0"
                  >
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Virtual Scientific Calculator Modal */}
      <ScientificCalculator
        isOpen={isCalcOpen}
        onClose={() => setIsCalcOpen(false)}
      />

      {/* Formula Sheet Modal */}
      <RevisionNotesModal
        isOpen={isFormulaModalOpen}
        onClose={() => setIsFormulaModalOpen(false)}
      />

      {/* Formula Flashcards Modal */}
      <FormulaFlashcardsModal
        isOpen={isFlashcardsModalOpen}
        onClose={() => setIsFlashcardsModalOpen(false)}
      />

      {/* Mistake Notebook Modal */}
      <MistakeNotebookModal
        isOpen={isMistakesModalOpen}
        onClose={() => {
          setIsMistakesModalOpen(false);
          setMistakesCount(getMistakeRecords().filter(m => !m.isResolved).length);
        }}
      />

      {/* Global Command Palette (⌘K) */}
      <GlobalCommandPalette
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-6 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>GATE 2027 Computer Science &amp; Information Technology CBT Simulator</span>
          <span>Aligned strictly with IIT Madras Syllabus &amp; Official Question Papers</span>
        </div>
      </footer>
    </div>
  );
}
