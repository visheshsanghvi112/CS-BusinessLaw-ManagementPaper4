'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SUBJECT_METADATA, QUESTION_BANK } from '@/lib/questionBank';
import { GateSubjectId, GateQuestionType } from '@/types';
import { createNewSession, getSavedCandidateName } from '@/lib/storage';
import {
  BookOpen,
  Play,
  Eye,
  CheckCircle2,
  Layers,
  Sparkles,
  Zap,
  Filter,
  CheckSquare,
  Hash
} from 'lucide-react';

export const SubjectPracticeHub: React.FC = () => {
  const router = useRouter();
  const [selectedSubjects, setSelectedSubjects] = useState<GateSubjectId[]>([]);
  const [selectedType, setSelectedType] = useState<'all' | GateQuestionType>('all');
  const [questionCount, setQuestionCount] = useState<number>(25);
  const [practiceMode, setPracticeMode] = useState<'exam' | 'study'>('study');

  const toggleSubject = (subjectId: GateSubjectId) => {
    setSelectedSubjects(prev =>
      prev.includes(subjectId) ? prev.filter(id => id !== subjectId) : [...prev, subjectId]
    );
  };

  const selectAll = () => {
    setSelectedSubjects(SUBJECT_METADATA.map(s => s.subjectId));
  };

  const clearAll = () => {
    setSelectedSubjects([]);
  };

  // Launch drill for a single subject directly
  const launchSingleSubject = (subjectId: GateSubjectId, mode: 'exam' | 'study' = 'study') => {
    const candidateName = getSavedCandidateName();
    createNewSession(`subject-${subjectId}`, candidateName, {
      subjectIds: [subjectId],
      mode,
      types: selectedType !== 'all' ? [selectedType] : undefined
    });
    router.push('/test');
  };

  // Launch combined multi-subject custom drill
  const launchCustomDrill = () => {
    if (selectedSubjects.length === 0) return;
    const candidateName = getSavedCandidateName();
    createNewSession('custom-subject', candidateName, {
      subjectIds: selectedSubjects,
      questionCount,
      mode: practiceMode,
      types: selectedType !== 'all' ? [selectedType] : undefined
    });
    router.push('/test');
  };

  // Calculate available question pool for selected subjects
  const availableQuestionCount = React.useMemo(() => {
    if (selectedSubjects.length === 0) return 0;
    const set = new Set(selectedSubjects);
    let pool = QUESTION_BANK.filter(q => set.has(q.subjectId));
    if (selectedType !== 'all') {
      pool = pool.filter(q => q.type === selectedType);
    }
    return pool.length;
  }, [selectedSubjects, selectedType]);

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Banner & Control Deck */}
      <div className="p-5 sm:p-6 bg-slate-900 border border-slate-800 rounded-3xl shadow-xl space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-900/60 text-blue-300 border border-blue-700/60 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> IIT Madras GATE 2027 Syllabus
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-slate-800 text-slate-300 border border-slate-700">
                10 Core Subjects + GA
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Subject & Topic-Wise Specialist Drills
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
              Drill down into specific syllabus subjects from official 2007–2026 GATE papers. Target MSQs, NATs, or multi-subject custom arrangements with instant rationales.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={selectAll}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700 transition"
            >
              Select All
            </button>
            <button
              type="button"
              onClick={clearAll}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 text-xs font-semibold border border-slate-700 transition"
            >
              Clear
            </button>
          </div>
        </div>

        {/* Configuration Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-slate-950/70 rounded-2xl border border-slate-800/80 text-xs">
          {/* Question Type Filter */}
          <div>
            <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
              Question Type:
            </label>
            <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
              {(['all', 'MCQ', 'MSQ', 'NAT'] as const).map(t => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setSelectedType(t)}
                  className={`flex-1 py-1 rounded-lg font-bold transition text-center ${
                    selectedType === t
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {t === 'all' ? 'All Types' : t}
                </button>
              ))}
            </div>
          </div>

          {/* Practice Mode */}
          <div>
            <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
              Practice Mode:
            </label>
            <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
              <button
                type="button"
                onClick={() => setPracticeMode('study')}
                className={`flex-1 py-1 rounded-lg font-bold transition flex items-center justify-center gap-1 ${
                  practiceMode === 'study'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Eye className="w-3.5 h-3.5" /> Study (Instant Ans)
              </button>
              <button
                type="button"
                onClick={() => setPracticeMode('exam')}
                className={`flex-1 py-1 rounded-lg font-bold transition flex items-center justify-center gap-1 ${
                  practiceMode === 'exam'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Zap className="w-3.5 h-3.5" /> Exam (Timed)
              </button>
            </div>
          </div>

          {/* Launch Custom Combination */}
          <div className="flex flex-col justify-end">
            <button
              type="button"
              onClick={launchCustomDrill}
              disabled={selectedSubjects.length === 0 || availableQuestionCount === 0}
              className={`w-full py-2 px-4 rounded-xl font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition ${
                selectedSubjects.length > 0 && availableQuestionCount > 0
                  ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-900/40 cursor-pointer'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700/60'
              }`}
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Launch Custom Drill ({availableQuestionCount}Q)</span>
            </button>
          </div>
        </div>
      </div>

      {/* 10 Core Subject Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {SUBJECT_METADATA.map(meta => {
          const isSelected = selectedSubjects.includes(meta.subjectId);
          const subjQuestions = QUESTION_BANK.filter(q => q.subjectId === meta.subjectId);
          const msqCount = subjQuestions.filter(q => q.type === 'MSQ').length;
          const natCount = subjQuestions.filter(q => q.type === 'NAT').length;

          return (
            <div
              key={meta.subjectId}
              className={`p-5 rounded-3xl border transition-all duration-200 flex flex-col justify-between space-y-4 ${
                isSelected
                  ? 'bg-blue-950/30 border-blue-500/80 ring-2 ring-blue-500/30 shadow-xl'
                  : 'bg-slate-900/90 border-slate-800 hover:border-slate-700 shadow-md'
              }`}
            >
              <div>
                {/* Header Row */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {meta.syllabusSection}
                  </span>
                  <span className="text-[11px] font-bold text-emerald-400">
                    {meta.weightageMarks}
                  </span>
                </div>

                <h3 className="font-bold text-base text-white tracking-tight">
                  {meta.subjectName}
                </h3>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                  {meta.description}
                </p>

                {/* Topics Pills */}
                <div className="flex flex-wrap gap-1 mt-3">
                  {meta.keyTopics.slice(0, 3).map((topic, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-slate-950/80 text-slate-400 border border-slate-800"
                    >
                      {topic}
                    </span>
                  ))}
                  {meta.keyTopics.length > 3 && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-slate-950 text-slate-500">
                      +{meta.keyTopics.length - 3} more
                    </span>
                  )}
                </div>

                {/* Sub-counts */}
                <div className="flex items-center gap-2 mt-3 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 font-mono">
                  <span>Total: <strong className="text-slate-200">{subjQuestions.length}Q</strong></span>
                  <span>• MSQ: <strong className="text-purple-300">{msqCount}</strong></span>
                  <span>• NAT: <strong className="text-amber-300">{natCount}</strong></span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => toggleSubject(meta.subjectId)}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold border transition ${
                      isSelected
                        ? 'bg-blue-600 border-blue-500 text-white shadow-sm'
                        : 'bg-slate-800/80 hover:bg-slate-750 text-slate-300 border-slate-700'
                    }`}
                  >
                    {isSelected ? 'Selected' : 'Select'}
                  </button>

                  <button
                    type="button"
                    onClick={() => launchSingleSubject(meta.subjectId, 'study')}
                    title="Launch instant study drill for this subject"
                    className="py-2 px-3 rounded-xl text-xs font-extrabold bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/40 transition flex items-center gap-1"
                  >
                    <Eye className="w-3.5 h-3.5" /> Drill
                  </button>

                  <button
                    type="button"
                    onClick={() => launchSingleSubject(meta.subjectId, 'exam')}
                    title="Launch timed exam drill for this subject"
                    className="py-2 px-3 rounded-xl text-xs font-extrabold bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/40 transition flex items-center gap-1"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" /> Exam
                  </button>
                </div>

                {/* Direct link to Topic Notes */}
                <button
                  type="button"
                  onClick={() => router.push(`/study?subject=${meta.subjectId}`)}
                  className="w-full py-1.5 px-3 rounded-xl bg-slate-950/80 hover:bg-slate-800 border border-slate-800 text-[11px] text-blue-400 font-bold flex items-center justify-center gap-1.5 transition cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Read Topic Notes &amp; Formulas</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

