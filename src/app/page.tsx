'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { TEST_PRESETS } from '@/lib/questionBank';
import {
  createNewSession,
  getSavedCandidateName,
  saveCandidateName,
  getTestHistory,
  clearTestHistory,
  getActiveSession,
  clearActiveSession
} from '@/lib/storage';
import { TestResult, TestSession } from '@/types';
import {
  ShieldCheck,
  Play,
  Clock,
  BookOpen,
  Scale,
  Users,
  CheckCircle2,
  ChevronRight,
  User,
  History,
  Sparkles,
  Zap,
  Target,
  Trophy,
  Trash2,
  HelpCircle,
  Award
} from 'lucide-react';

export default function HomePage() {
  const router = useRouter();
  const [candidateName, setCandidateName] = useState<string>('Candidate');
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [history, setHistory] = useState<TestResult[]>([]);
  const [activeSession, setActiveSession] = useState<TestSession | null>(null);
  const [activeSyllabusTab, setActiveSyllabusTab] = useState<'overview' | 'part-a' | 'part-b'>('overview');

  useEffect(() => {
    setCandidateName(getSavedCandidateName());
    setHistory(getTestHistory());
    const existing = getActiveSession();
    if (existing && !existing.isSubmitted && existing.remainingSeconds > 0) {
      setActiveSession(existing);
    }
  }, []);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCandidateName(val);
    saveCandidateName(val);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const handleStartTest = (presetId: string) => {
    saveCandidateName(candidateName);
    createNewSession(presetId, candidateName);
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
                  ICSI CSEET
                </span>
                <span className="text-[10px] text-slate-400 hidden sm:inline">Restructured Scheme</span>
              </div>
              <h1 className="text-xs sm:text-sm md:text-base font-black text-white tracking-tight">
                Paper 4: Business Laws & Management
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] sm:text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5 font-bold shrink-0">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              CBT Simulation
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-3.5 sm:px-6 py-6 sm:py-10 space-y-8 sm:space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-3.5 sm:space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span>100% Authentic Exam Simulation • Zero Auth Friction</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Master CSEET Paper 4 with Official <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-teal-300">CBT Simulation</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Experience the real national computer-based examination: countdown timer, 5-state palette, keyboard shortcuts, sectional navigation, and complete statutory rationales.
          </p>

          {/* Candidate Profile Customizer */}
          <div className="pt-2 max-w-md mx-auto">
            <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl flex items-center gap-3 text-left">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-950 border border-blue-800 flex items-center justify-center text-blue-400 shrink-0 font-bold">
                <User className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <label className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">
                    Candidate Name (For Scorecard)
                  </label>
                  {isSaved && (
                    <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-0.5 animate-in fade-in">
                      <CheckCircle2 className="w-3 h-3" /> Saved
                    </span>
                  )}
                </div>
                <input
                  type="text"
                  value={candidateName}
                  onChange={handleNameChange}
                  placeholder="Enter candidate name"
                  className="w-full bg-transparent text-sm font-bold text-white focus:outline-hidden border-b border-slate-700 focus:border-blue-500 transition py-1"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Active In-Progress Session Resume Banner */}
        {activeSession && (
          <div className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-950/80 via-indigo-950/70 to-slate-900 border border-blue-500/50 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 ring-1 ring-blue-500/30">
            <div className="space-y-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                  Active Examination in Progress
                </span>
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white truncate">
                {activeSession.testTitle}
              </h4>
              <p className="text-xs text-slate-300">
                {Math.floor(activeSession.remainingSeconds / 60)} Mins remaining • {Object.values(activeSession.responses).filter(r => r.status === 'answered' || r.status === 'answered-marked-review').length} / {activeSession.questionIds.length} Questions Answered
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => router.push('/test')}
                className="px-4 py-2 sm:py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md transition flex items-center gap-1.5 cursor-pointer touch-feedback ring-1 ring-blue-400/50"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                Resume Exam
              </button>
              <button
                type="button"
                onClick={() => {
                  if (confirm('Are you sure you want to discard this in-progress exam? All unsaved work will be lost.')) {
                    clearActiveSession();
                    setActiveSession(null);
                  }
                }}
                className="px-3 py-2 sm:py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-slate-400 hover:text-red-400 font-semibold text-xs border border-slate-700 transition cursor-pointer"
              >
                Discard
              </button>
            </div>
          </div>
        )}

        {/* Test Mode Selector Cards */}
        <div className="space-y-3.5 sm:space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <div>
              <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-400" />
                Select Examination Mode
              </h3>
              <p className="text-xs text-slate-400">
                Passing cutoff: 40% (40 / 100 Marks) • Zero negative marking • +1.0 for each correct answer
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {TEST_PRESETS.map(preset => {
              const isFull = preset.id === 'full-mock';
              return (
                <div
                  key={preset.id}
                  className={`p-4 sm:p-6 rounded-2xl sm:rounded-3xl border transition-all duration-200 flex flex-col justify-between group hover:border-slate-700 touch-feedback ${
                    isFull
                      ? 'bg-gradient-to-br from-blue-950/40 via-slate-900 to-slate-900 border-blue-500/50 shadow-xl ring-1 ring-blue-500/30'
                      : 'bg-slate-900/80 border-slate-800 shadow-sm'
                  }`}
                >
                  <div className="space-y-2.5 sm:space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className={`text-[10px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border ${
                        isFull
                          ? 'bg-blue-500/20 text-blue-300 border-blue-500/40'
                          : 'bg-slate-800 text-slate-300 border-slate-700'
                      }`}>
                        {preset.badge}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                        <Clock className="w-3.5 h-3.5 text-blue-400" />
                        {preset.durationMinutes} Mins
                      </div>
                    </div>

                    <h4 className="text-sm sm:text-base md:text-lg font-bold text-white group-hover:text-blue-300 transition">
                      {preset.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {preset.description}
                    </p>
                  </div>

                  <div className="pt-4 flex items-center justify-between border-t border-slate-800/80 mt-3 sm:mt-4 gap-2">
                    <div className="text-xs text-slate-400">
                      <strong className="text-white text-sm font-bold">{preset.questionCount}</strong> Questions • 1 Mark Each
                    </div>

                    <button
                      type="button"
                      onClick={() => handleStartTest(preset.id)}
                      className={`inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-md transition cursor-pointer touch-feedback ${
                        isFull
                          ? 'bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white shadow-blue-900/40 ring-1 ring-blue-400/50'
                          : 'bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-slate-200 border border-slate-700'
                      }`}
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      Start Test
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Syllabus & Blueprint Guide */}
        <div className="space-y-3.5 sm:space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
              <Scale className="w-5 h-5 text-blue-400" />
              Syllabus & Legal Blueprint
            </h3>

            {/* Tab Selector */}
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5">
              <button
                type="button"
                onClick={() => setActiveSyllabusTab('overview')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer touch-feedback ${
                  activeSyllabusTab === 'overview'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                Overview
              </button>
              <button
                type="button"
                onClick={() => setActiveSyllabusTab('part-a')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer touch-feedback ${
                  activeSyllabusTab === 'part-a'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                Part A: Laws (60M)
              </button>
              <button
                type="button"
                onClick={() => setActiveSyllabusTab('part-b')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer touch-feedback ${
                  activeSyllabusTab === 'part-b'
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                Part B: Management (40M)
              </button>
            </div>
          </div>

          {/* Tab Content */}
          {activeSyllabusTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
              {/* Part A Blueprint */}
              <div className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-slate-900/70 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-sm sm:text-base">
                  <Scale className="w-4 h-4 sm:w-5 sm:h-5" />
                  Part A: Business Laws (60 Marks • 60 Questions)
                </div>
                <ul className="text-xs sm:text-sm text-slate-300 space-y-2 list-disc list-inside leading-relaxed">
                  <li><strong>Lesson 1:</strong> Introduction to Law, Latin maxims, Stare decisis (Art 141) & Court hierarchy</li>
                  <li><strong>Lesson 2:</strong> Companies Act 2013, Salomon rule, Lifting Veil, Small Co criteria, CSR (Sec 135)</li>
                  <li><strong>Lesson 3:</strong> Indian Contract Act 1872, Sec 10 essentials, Minor agreements, Free consent</li>
                  <li><strong>Lesson 4:</strong> Partnership Act 1932 (Mutual agency test) & LLP Act 2008 (Body corporate)</li>
                  <li><strong>Lesson 5:</strong> Sale of Goods (Condition vs Warranty) & Negotiable Instruments Act 1881 (Sec 138)</li>
                </ul>
              </div>

              {/* Part B Blueprint */}
              <div className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-slate-900/70 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-purple-400 font-bold text-sm sm:text-base">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                  Part B: Business Management (40 Marks • 40 Questions)
                </div>
                <ul className="text-xs sm:text-sm text-slate-300 space-y-2 list-disc list-inside leading-relaxed">
                  <li><strong>Lesson 6:</strong> Management definitions (Koontz), Art vs Science, Katz 3 managerial skills</li>
                  <li><strong>Lesson 7:</strong> Fayol’s 14 Principles (Scalar chain, Esprit de corps), Taylor’s Scientific mgmt</li>
                  <li><strong>Lesson 8:</strong> POSDC functions, Maslow hierarchy, Herzberg Two-Factor, McGregor Theory X & Y</li>
                  <li><strong>Lesson 9:</strong> Business Ethics, 4 Pillars of Governance, ICSI Secretarial Standards (SS-1 & SS-2)</li>
                </ul>
              </div>
            </div>
          )}

          {activeSyllabusTab === 'part-a' && (
            <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm sm:text-base font-bold text-blue-400">
                  Part A: Business Laws Detailed Scope
                </span>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-950 border border-blue-800 text-blue-300">
                  60 Questions • 60 Marks
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
                <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80 space-y-1">
                  <strong className="text-white block">1. Intro to Law & Maxims:</strong>
                  <span>Analytical School (Austin), Stare Decisis (Art 141), Ubi jus ibi remedium, Damnum sine injuria.</span>
                </div>
                <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80 space-y-1">
                  <strong className="text-white block">2. Companies Act 2013:</strong>
                  <span>Salomon v. Salomon, Corporate veil piercing (Daimler), Small Company limits (Capital ≤ ₹4 Cr, Turnover ≤ ₹40 Cr), CSR (Net profit ≥ ₹5 Cr).</span>
                </div>
                <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80 space-y-1">
                  <strong className="text-white block">3. Indian Contract Act 1872:</strong>
                  <span>Sec 10 valid contract essentials, Mohori Bibee minor rule, Coercion (Sec 15), Undue influence (Sec 16), Fraud vs Misrepresentation.</span>
                </div>
                <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80 space-y-1">
                  <strong className="text-white block">4. Partnership & LLP:</strong>
                  <span>Cox v. Hickman mutual agency test, Sec 30 minor partner rights, LLP separate legal entity status, minimum 2 designated partners.</span>
                </div>
              </div>
            </div>
          )}

          {activeSyllabusTab === 'part-b' && (
            <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm sm:text-base font-bold text-purple-400">
                  Part B: Business Management Detailed Scope
                </span>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-purple-950 border border-purple-800 text-purple-300">
                  40 Questions • 40 Marks
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
                <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80 space-y-1">
                  <strong className="text-white block">6. Nature of Management:</strong>
                  <span>Harold Koontz "getting things done through others", Katz skills (Technical, Human, Conceptual at Top Mgmt).</span>
                </div>
                <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80 space-y-1">
                  <strong className="text-white block">7. Management Theories:</strong>
                  <span>Henri Fayol 14 Principles (Scalar chain, Gang plank, Unity of command), F.W. Taylor Scientific Management, Hawthorne studies.</span>
                </div>
                <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80 space-y-1">
                  <strong className="text-white block">8. POSDC & Motivation:</strong>
                  <span>Planning, Organizing, Staffing, Directing, Controlling. Maslow hierarchy, Herzberg hygiene factors, McGregor Theory X & Y.</span>
                </div>
                <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80 space-y-1">
                  <strong className="text-white block">9. Ethics & Corporate Governance:</strong>
                  <span>4 Pillars (Transparency, Accountability, Fairness, Responsibility), Whistleblower protection, ICSI SS-1 (Board) & SS-2 (General Meetings).</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Past Test Attempts Section (Responsive Cards on Mobile, Table on Desktop) */}
        {history.length > 0 && (
          <div className="space-y-3.5 sm:space-y-4 pt-2">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <History className="w-5 h-5 text-blue-400" />
                Recent Test Attempts ({history.length})
              </h3>
              <button
                type="button"
                onClick={handleClearHistory}
                className="text-xs text-slate-400 hover:text-red-400 flex items-center gap-1 font-semibold cursor-pointer transition touch-feedback"
              >
                <Trash2 className="w-3.5 h-3.5" /> Clear History
              </button>
            </div>

            {/* Desktop Table */}
            <div className="hidden sm:block overflow-hidden border border-slate-800 rounded-2xl bg-slate-900/60">
              <table className="w-full text-xs sm:text-sm text-left">
                <thead className="bg-slate-950 text-slate-400 font-semibold border-b border-slate-800">
                  <tr>
                    <th className="px-4 py-3">Exam Name</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3 text-center">Score</th>
                    <th className="px-4 py-3 text-center">Percentage</th>
                    <th className="px-4 py-3 text-center">Cutoff Status</th>
                    <th className="px-4 py-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  {history.map(item => (
                    <tr key={item.testId} className="hover:bg-slate-800/30 transition">
                      <td className="px-4 py-3 font-semibold text-white truncate max-w-[200px]">
                        {item.testTitle}
                      </td>
                      <td className="px-4 py-3 text-slate-400 text-xs">
                        {new Date(item.completedAt).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-3 text-center font-bold text-white font-mono">
                        {item.score} / {item.totalMarks}
                      </td>
                      <td className="px-4 py-3 text-center font-bold text-blue-400 font-mono">
                        {item.percentage}%
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full ${
                          item.isQualified
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                            : 'bg-red-500/20 text-red-400 border border-red-500/40'
                        }`}>
                          {item.isQualified ? 'QUALIFIED' : 'NOT MET'}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <button
                          type="button"
                          onClick={() => router.push(`/results?testId=${item.testId}`)}
                          className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 font-semibold cursor-pointer touch-feedback"
                        >
                          View Result <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Stacked Cards */}
            <div className="sm:hidden space-y-2.5">
              {history.map(item => (
                <div
                  key={item.testId}
                  className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-white truncate max-w-[180px]">
                      {item.testTitle}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
                      item.isQualified
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                        : 'bg-red-500/20 text-red-400 border border-red-500/40'
                    }`}>
                      {item.isQualified ? 'QUALIFIED' : 'NOT MET'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                    <span>Score: <strong className="text-white font-mono">{item.score}/{item.totalMarks}</strong> ({item.percentage}%)</span>
                    <button
                      type="button"
                      onClick={() => router.push(`/results?testId=${item.testId}`)}
                      className="text-blue-400 font-bold flex items-center gap-1 cursor-pointer touch-feedback text-xs"
                    >
                      Result <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-500 px-4">
        <p>ICSI CSEET CBT Mock Test Preparation Engine • Seamless desktop & mobile simulation</p>
      </footer>
    </div>
  );
}

