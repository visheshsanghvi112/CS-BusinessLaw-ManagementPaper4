'use client';

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { QUESTION_BANK, SUBJECT_METADATA } from '@/lib/questionBank';
import { GateSubjectId, GateQuestionType } from '@/types';
import { createNewSession, getSavedCandidateName } from '@/lib/storage';
import {
  Filter,
  Play,
  Eye,
  Sparkles,
  Calendar,
  Layers,
  CheckSquare,
  Square,
  Hash,
  Clock,
  ChevronDown,
  ChevronUp,
  Search,
  BookOpen,
  Award
} from 'lucide-react';

export const PyqArchiveExplorer: React.FC = () => {
  const router = useRouter();

  // Distinct Years available in question bank
  const availableYears = useMemo(() => {
    const years = Array.from(new Set(QUESTION_BANK.map(q => q.year).filter(Boolean) as number[]));
    return years.sort((a, b) => b - a);
  }, []);

  const [selectedYears, setSelectedYears] = useState<number[]>([]);
  const [selectedSubjects, setSelectedSubjects] = useState<GateSubjectId[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<GateQuestionType[]>([]);
  const [selectedMarks, setSelectedMarks] = useState<(1 | 2)[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [practiceMode, setPracticeMode] = useState<'study' | 'exam'>('study');
  const [customDuration, setCustomDuration] = useState<number>(45);
  const [customQuestionCount, setCustomQuestionCount] = useState<number>(20);
  const [expandedPreviewId, setExpandedPreviewId] = useState<string | number | null>(null);

  // Quick year filters
  const applyYearPreset = (preset: 'all' | 'recent' | 'mid' | 'classic') => {
    if (preset === 'all') {
      setSelectedYears([]);
    } else if (preset === 'recent') {
      setSelectedYears([2026, 2025, 2024]);
    } else if (preset === 'mid') {
      setSelectedYears([2023, 2022, 2021, 2020, 2019, 2018]);
    } else if (preset === 'classic') {
      setSelectedYears(availableYears.filter(y => y <= 2017));
    }
  };

  const toggleYear = (y: number) => {
    setSelectedYears(prev =>
      prev.includes(y) ? prev.filter(item => item !== y) : [...prev, y]
    );
  };

  const toggleSubject = (s: GateSubjectId) => {
    setSelectedSubjects(prev =>
      prev.includes(s) ? prev.filter(item => item !== s) : [...prev, s]
    );
  };

  const toggleType = (t: GateQuestionType) => {
    setSelectedTypes(prev =>
      prev.includes(t) ? prev.filter(item => item !== t) : [...prev, t]
    );
  };

  const toggleMark = (m: 1 | 2) => {
    setSelectedMarks(prev =>
      prev.includes(m) ? prev.filter(item => item !== m) : [...prev, m]
    );
  };

  // Filtered pool
  const filteredQuestions = useMemo(() => {
    return QUESTION_BANK.filter(q => {
      if (selectedYears.length > 0 && q.year && !selectedYears.includes(q.year)) return false;
      if (selectedSubjects.length > 0 && !selectedSubjects.includes(q.subjectId)) return false;
      if (selectedTypes.length > 0 && !selectedTypes.includes(q.type)) return false;
      if (selectedMarks.length > 0 && !selectedMarks.includes(q.marks)) return false;
      if (searchQuery.trim()) {
        const text = (q.question + ' ' + (q.explanation || '')).toLowerCase();
        if (!text.includes(searchQuery.toLowerCase())) return false;
      }
      return true;
    });
  }, [selectedYears, selectedSubjects, selectedTypes, selectedMarks, searchQuery]);

  const msqCount = filteredQuestions.filter(q => q.type === 'MSQ').length;
  const natCount = filteredQuestions.filter(q => q.type === 'NAT').length;
  const mcqCount = filteredQuestions.filter(q => q.type === 'MCQ').length;
  const totalAvailableMarks = filteredQuestions.reduce((acc, q) => acc + q.marks, 0);

  const handleLaunchTest = () => {
    if (filteredQuestions.length === 0) return;
    const candidateName = getSavedCandidateName();
    const count = Math.min(customQuestionCount, filteredQuestions.length);
    const selectedSubset = filteredQuestions.slice(0, count);

    createNewSession('custom-archive', candidateName, {
      specificQuestionIds: selectedSubset.map(q => q.id),
      mode: practiceMode,
      durationMinutes: practiceMode === 'exam' ? customDuration : Math.max(15, Math.round(count * 2.5))
    });
    router.push('/test');
  };

  return (
    <div className="space-y-6 animate-fadeIn select-none">
      {/* Top Banner & Control Center */}
      <div className="p-5 sm:p-7 bg-slate-900 border border-slate-800 rounded-3xl shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-900/60 text-blue-300 border border-blue-700/60 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>520+ Official Question Archive</span>
              </span>
              <span className="px-2 py-0.5 rounded-full text-xs font-mono font-bold bg-slate-800 text-slate-300 border border-slate-700">
                2007 – 2026 PYQs
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              PYQ Archive Explorer &amp; Custom Test Builder
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
              Design tailored practice tests from 24 official papers. Slice by year ranges (with high weightage to 2024–2026), target MSQs/NATs, or drill specific subjects with customizable timer settings.
            </p>
          </div>

          {/* Launch CTA */}
          <div className="shrink-0 flex items-center gap-2">
            <button
              type="button"
              onClick={handleLaunchTest}
              disabled={filteredQuestions.length === 0}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-xs sm:text-sm shadow-xl shadow-blue-900/30 flex items-center gap-2 transition disabled:opacity-50 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Launch Test ({Math.min(customQuestionCount, filteredQuestions.length)}Q)</span>
            </button>
          </div>
        </div>

        {/* Live Filter Metric Counters */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 bg-slate-950/70 rounded-2xl border border-slate-800/80 text-xs font-mono">
          <div>
            <span className="text-slate-500 text-[10px] block">MATCHING QUESTIONS</span>
            <strong className="text-sm sm:text-base text-white">{filteredQuestions.length}</strong>
            <span className="text-slate-500 text-[10px] ml-1">/ {QUESTION_BANK.length}</span>
          </div>
          <div>
            <span className="text-purple-400 text-[10px] block">MSQs (MULTI-SELECT)</span>
            <strong className="text-sm sm:text-base text-purple-300">{msqCount}</strong>
          </div>
          <div>
            <span className="text-amber-400 text-[10px] block">NATs (NUMERICAL)</span>
            <strong className="text-sm sm:text-base text-amber-300">{natCount}</strong>
          </div>
          <div>
            <span className="text-emerald-400 text-[10px] block">TOTAL POOL MARKS</span>
            <strong className="text-sm sm:text-base text-emerald-300">{totalAvailableMarks}M</strong>
          </div>
        </div>

        {/* Filter Configuration Deck */}
        <div className="space-y-4 pt-2">
          {/* Year Range Presets */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-300 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-blue-400" />
                <span>Examination Years:</span>
              </span>
              <div className="flex items-center gap-1.5 text-[11px]">
                <button
                  type="button"
                  onClick={() => applyYearPreset('recent')}
                  className="px-2 py-0.5 rounded bg-blue-950/80 hover:bg-blue-900 text-blue-300 border border-blue-700/60 font-semibold"
                >
                  Recent (2024–2026) ⭐
                </button>
                <button
                  type="button"
                  onClick={() => applyYearPreset('mid')}
                  className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700"
                >
                  2018–2023
                </button>
                <button
                  type="button"
                  onClick={() => applyYearPreset('all')}
                  className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-400 border border-slate-700"
                >
                  All Years
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {availableYears.map(y => {
                const isSelected = selectedYears.includes(y);
                const isRecent = [2026, 2025, 2024].includes(y);

                return (
                  <button
                    key={y}
                    type="button"
                    onClick={() => toggleYear(y)}
                    className={`px-2.5 py-1 rounded-xl text-xs font-mono font-bold transition flex items-center gap-1 ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-xs'
                        : isRecent
                        ? 'bg-blue-950/40 text-blue-300 border border-blue-800/60 hover:bg-blue-900/60'
                        : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white'
                    }`}
                  >
                    <span>{y}</span>
                    {isRecent && <span className="text-[10px] text-amber-400">★</span>}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Subjects Selection */}
          <div className="space-y-2 pt-2 border-t border-slate-800/80">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-300 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-blue-400" />
                <span>Syllabus Subjects ({selectedSubjects.length === 0 ? 'All Selected' : `${selectedSubjects.length} Selected`}):</span>
              </span>
              <div className="flex items-center gap-1 text-[11px]">
                <button
                  type="button"
                  onClick={() => setSelectedSubjects([])}
                  className="text-slate-400 hover:text-white transition"
                >
                  Select All
                </button>
                <span>•</span>
                <button
                  type="button"
                  onClick={() => setSelectedSubjects(['algorithms', 'toc', 'coa', 'os', 'dbms'])}
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  Core Systems
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {SUBJECT_METADATA.map(s => {
                const isSelected = selectedSubjects.includes(s.subjectId);

                return (
                  <button
                    key={s.subjectId}
                    type="button"
                    onClick={() => toggleSubject(s.subjectId)}
                    className={`px-2.5 py-1 rounded-xl text-xs font-semibold transition ${
                      isSelected
                        ? 'bg-indigo-600 text-white shadow-xs'
                        : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white'
                    }`}
                  >
                    {s.subjectName}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question Type, Marks & Search */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-slate-800/80 text-xs">
            {/* Question Type */}
            <div>
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Question Type:
              </label>
              <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
                {(['MCQ', 'MSQ', 'NAT'] as const).map(t => {
                  const isSel = selectedTypes.includes(t);
                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() => toggleType(t)}
                      className={`flex-1 py-1 rounded-lg font-bold transition text-center ${
                        isSel ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Marks Filter */}
            <div>
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Marks Weight:
              </label>
              <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
                {([1, 2] as const).map(m => {
                  const isSel = selectedMarks.includes(m);
                  return (
                    <button
                      key={m}
                      type="button"
                      onClick={() => toggleMark(m)}
                      className={`flex-1 py-1 rounded-lg font-bold transition text-center ${
                        isSel ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {m} Mark
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Keyword Search */}
            <div>
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Keyword in Question:
              </label>
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="e.g. Cache, Dijkstra, B+..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-500 text-xs"
                />
              </div>
            </div>
          </div>

          {/* Test Setup Options: Duration, Question Count & Mode */}
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="block font-bold text-slate-300 mb-1">Practice Mode:</label>
              <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
                <button
                  type="button"
                  onClick={() => setPracticeMode('study')}
                  className={`flex-1 py-1 rounded-lg font-bold transition flex items-center justify-center gap-1 ${
                    practiceMode === 'study' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Eye className="w-3 h-3" />
                  <span>Study Mode</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPracticeMode('exam')}
                  className={`flex-1 py-1 rounded-lg font-bold transition flex items-center justify-center gap-1 ${
                    practiceMode === 'exam' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Clock className="w-3 h-3" />
                  <span>Timed Exam</span>
                </button>
              </div>
            </div>

            <div>
              <label className="block font-bold text-slate-300 mb-1">
                Question Count: <strong className="text-white font-mono">{customQuestionCount}Q</strong>
              </label>
              <div className="flex items-center gap-1">
                {[10, 20, 30, 45, 65].map(cnt => (
                  <button
                    key={cnt}
                    type="button"
                    onClick={() => setCustomQuestionCount(cnt)}
                    className={`flex-1 py-1 rounded-lg border font-mono font-bold transition ${
                      customQuestionCount === cnt
                        ? 'bg-blue-600 border-blue-500 text-white'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {cnt}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-bold text-slate-300 mb-1">
                Duration: <strong className="text-white font-mono">{practiceMode === 'exam' ? `${customDuration} Mins` : 'Untimed'}</strong>
              </label>
              <div className="flex items-center gap-1">
                {[15, 30, 45, 60, 90].map(mins => (
                  <button
                    key={mins}
                    type="button"
                    disabled={practiceMode === 'study'}
                    onClick={() => setCustomDuration(mins)}
                    className={`flex-1 py-1 rounded-lg border font-mono font-bold transition disabled:opacity-40 ${
                      customDuration === mins && practiceMode === 'exam'
                        ? 'bg-blue-600 border-blue-500 text-white'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {mins}m
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Question Previews Accordion */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="font-extrabold text-white uppercase tracking-wider">
            Matching Questions Preview ({filteredQuestions.length})
          </span>
          <span className="text-slate-400">Click any card to expand official derivation</span>
        </div>

        <div className="space-y-2.5 max-h-[600px] overflow-y-auto pr-1">
          {filteredQuestions.slice(0, 30).map((q, idx) => {
            const isExpanded = expandedPreviewId === q.id;

            return (
              <div
                key={q.id}
                className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition space-y-2.5"
              >
                <div
                  className="flex items-start justify-between gap-3 cursor-pointer"
                  onClick={() => setExpandedPreviewId(isExpanded ? null : q.id)}
                >
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-0.5 rounded-lg bg-blue-600 text-white font-black text-xs">
                      #{idx + 1}
                    </span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-purple-950 text-purple-300 border border-purple-800">
                      {q.type}
                    </span>
                    <span className="text-xs text-slate-300 font-mono">
                      {q.subjectName}
                    </span>
                    <span className="text-[11px] text-slate-500">
                      {q.sourcePaper}
                    </span>
                    <span className="text-[11px] text-emerald-400 font-bold font-mono">
                      +{q.marks}M
                    </span>
                  </div>

                  <button
                    type="button"
                    className="text-slate-400 hover:text-white p-1"
                  >
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>

                <div className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                  {q.question}
                </div>

                {isExpanded && (
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs animate-in fade-in">
                    {q.options && q.options.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pb-2">
                        {q.options.map(opt => (
                          <div
                            key={opt.key}
                            className={`p-2.5 rounded-xl border text-xs flex items-start gap-2 ${
                              (q.correctAnswers || [q.correctAnswer]).includes(opt.key)
                                ? 'bg-emerald-950/50 border-emerald-600 text-emerald-200'
                                : 'bg-slate-900 border-slate-800 text-slate-400'
                            }`}
                          >
                            <span className="font-bold uppercase text-[10px] w-4 h-4 rounded bg-slate-800 flex items-center justify-center shrink-0">
                              {opt.key}
                            </span>
                            <span>{opt.text}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center gap-1.5 font-bold text-emerald-400">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Verified GATE Explanation:</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed pl-5">
                      {q.explanation}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

