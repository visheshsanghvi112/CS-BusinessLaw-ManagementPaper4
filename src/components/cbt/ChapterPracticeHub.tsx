'use client';

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { LESSON_METADATA, QUESTION_BANK } from '@/lib/questionBank';
import { createNewSession, getActiveSession } from '@/lib/storage';
import { CustomSessionConfig, LessonMetadata } from '@/types';
import {
  Scale,
  Briefcase,
  Play,
  CheckSquare,
  Sliders,
  Sparkles,
  Timer,
  Eye
} from 'lucide-react';

interface ChapterPracticeHubProps {
  candidateName: string;
}

export const ChapterPracticeHub: React.FC<ChapterPracticeHubProps> = ({ candidateName }) => {
  const router = useRouter();

  // Custom Topic Selector State
  const [selectedLessons, setSelectedLessons] = useState<number[]>([2, 3]);
  const [questionCount, setQuestionCount] = useState<number>(20);
  const [sessionMode, setSessionMode] = useState<'exam' | 'study'>('exam');
  const [isCustomBuilderOpen, setIsCustomBuilderOpen] = useState(false);

  // Pre-calculate question count per lesson
  const questionCountMap = useMemo(() => {
    const map: Record<number, number> = {};
    QUESTION_BANK.forEach(q => {
      map[q.lessonNumber] = (map[q.lessonNumber] || 0) + 1;
    });
    return map;
  }, []);

  const partALessons = useMemo(() => {
    return LESSON_METADATA.filter(l => l.sectionId === 'part-a');
  }, []);

  const partBLessons = useMemo(() => {
    return LESSON_METADATA.filter(l => l.sectionId === 'part-b');
  }, []);

  // Total questions in selected custom lessons
  const totalAvailableInSelection = useMemo(() => {
    return selectedLessons.reduce((acc, num) => acc + (questionCountMap[num] || 0), 0);
  }, [selectedLessons, questionCountMap]);

  // Check if an active session is currently running
  const checkActiveSessionBeforeStart = (): boolean => {
    const existing = getActiveSession();
    if (existing && !existing.isSubmitted && existing.remainingSeconds > 0) {
      return window.confirm(
        `You have an active or paused examination session in progress ("${existing.testTitle}"). Starting this practice drill will discard your current progress. Do you want to proceed?`
      );
    }
    return true;
  };

  // Start single chapter test
  const handleStartChapter = (lessonNum: number, mode: 'exam' | 'study' = 'exam') => {
    if (!checkActiveSessionBeforeStart()) return;
    createNewSession(`chapter-${lessonNum}`, candidateName.trim() || 'Candidate', {
      lessonNumbers: [lessonNum],
      mode
    });
    router.push('/test');
  };

  // Start custom topic test
  const handleStartCustomTest = () => {
    if (selectedLessons.length === 0) return;
    if (!checkActiveSessionBeforeStart()) return;
    const config: CustomSessionConfig = {
      lessonNumbers: selectedLessons,
      questionCount: Math.min(questionCount, totalAvailableInSelection),
      mode: sessionMode
    };
    createNewSession('custom-topic', candidateName.trim() || 'Candidate', config);
    router.push('/test');
  };

  const toggleLessonSelection = (lessonNum: number) => {
    setSelectedLessons(prev =>
      prev.includes(lessonNum)
        ? prev.filter(n => n !== lessonNum)
        : [...prev, lessonNum]
    );
  };

  const selectAllPartA = () => {
    const aNums = partALessons.map(l => l.lessonNumber);
    setSelectedLessons(prev => Array.from(new Set([...prev, ...aNums])));
  };

  const selectAllPartB = () => {
    const bNums = partBLessons.map(l => l.lessonNumber);
    setSelectedLessons(prev => Array.from(new Set([...prev, ...bNums])));
  };

  const clearSelection = () => {
    setSelectedLessons([]);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-indigo-900/40 rounded-2xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute -right-12 -top-12 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              Official Syllabus Segregation
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-white">
              Targeted Chapter & Unit Practice Hub
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Drill down into individual chapters or build custom multi-topic tests across all 9 official ICSI syllabus units. Pick between <span className="text-indigo-300 font-semibold">Timed Exam Mode</span> or <span className="text-emerald-300 font-semibold">Instant Study Mode</span> for rapid learning.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              onClick={() => setIsCustomBuilderOpen(!isCustomBuilderOpen)}
              className="px-5 py-3 rounded-xl font-bold text-sm bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white shadow-lg transition flex items-center justify-center gap-2 cursor-pointer touch-feedback"
            >
              <Sliders className="w-4 h-4" />
              {isCustomBuilderOpen ? 'Hide Custom Builder' : 'Custom Topic Builder'}
            </button>
          </div>
        </div>
      </div>

      {/* Custom Topic Test Builder Panel */}
      {isCustomBuilderOpen && (
        <div className="bg-slate-900 border-2 border-indigo-500/40 rounded-2xl p-6 shadow-2xl space-y-6 animate-fadeIn">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sliders className="w-5 h-5 text-indigo-400" />
                Custom Multi-Topic Test Generator
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Select any combination of chapters to create a personalized revision test.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <button
                type="button"
                onClick={selectAllPartA}
                className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold cursor-pointer"
              >
                + Part A (Laws)
              </button>
              <button
                type="button"
                onClick={selectAllPartB}
                className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold cursor-pointer"
              >
                + Part B (Mgmt)
              </button>
              <button
                type="button"
                onClick={clearSelection}
                className="px-2.5 py-1.5 rounded-lg bg-slate-800/60 hover:bg-rose-950/40 text-slate-400 hover:text-rose-300 font-semibold cursor-pointer"
              >
                Clear
              </button>
            </div>
          </div>

          {/* Chapter Selection Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {LESSON_METADATA.map(lesson => {
              const isSelected = selectedLessons.includes(lesson.lessonNumber);
              const qCount = questionCountMap[lesson.lessonNumber] || 0;
              return (
                <div
                  key={lesson.lessonNumber}
                  onClick={() => toggleLessonSelection(lesson.lessonNumber)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 select-none ${
                    isSelected
                      ? 'bg-indigo-950/40 border-indigo-500/70 text-white shadow-sm'
                      : 'bg-slate-950/40 border-slate-800 hover:border-slate-700 text-slate-400'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded flex items-center justify-center transition ${
                        isSelected ? 'bg-indigo-600 text-white' : 'border border-slate-700'
                      }`}
                    >
                      {isSelected && <CheckSquare className="w-3.5 h-3.5" />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-bold">
                          L{lesson.lessonNumber}
                        </span>
                        <span className="text-sm font-semibold text-slate-200">
                          {lesson.lessonName}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-400">
                        {lesson.sectionName}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold px-2 py-1 rounded bg-slate-800/80 text-indigo-300 shrink-0">
                    {qCount} Qs
                  </span>
                </div>
              );
            })}
          </div>

          {/* Configurations: Count & Mode */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {/* Question Count */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Question Count
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[10, 20, 30, totalAvailableInSelection || 50].map((count, idx) => {
                  const isAll = idx === 3;
                  const val = isAll ? totalAvailableInSelection : count;
                  const isChecked = questionCount === val;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setQuestionCount(val)}
                      className={`py-2 px-3 rounded-xl text-xs font-bold border transition cursor-pointer ${
                        isChecked
                          ? 'bg-indigo-600 border-indigo-400 text-white shadow'
                          : 'bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-400'
                      }`}
                    >
                      {isAll ? `All (${val})` : `${count} Qs`}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mode: Timed Exam vs Instant Study */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Practice Mode
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSessionMode('exam')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold border transition flex items-center justify-center gap-1.5 cursor-pointer ${
                    sessionMode === 'exam'
                      ? 'bg-blue-600 border-blue-400 text-white shadow'
                      : 'bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-400'
                  }`}
                >
                  <Timer className="w-3.5 h-3.5" />
                  Timed Exam
                </button>
                <button
                  type="button"
                  onClick={() => setSessionMode('study')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold border transition flex items-center justify-center gap-1.5 cursor-pointer ${
                    sessionMode === 'study'
                      ? 'bg-emerald-600 border-emerald-400 text-white shadow'
                      : 'bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-400'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  Instant Study
                </button>
              </div>
            </div>
          </div>

          {/* Launch Custom Test Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800">
            <div className="text-xs text-slate-400">
              Selected: <span className="text-white font-bold">{selectedLessons.length}</span> Chapter(s) •{' '}
              Pool: <span className="text-indigo-400 font-bold">{Math.min(questionCount, totalAvailableInSelection)}</span> Questions •{' '}
              Mode: <span className="text-emerald-400 font-bold uppercase">{sessionMode}</span>
            </div>
            <button
              type="button"
              disabled={selectedLessons.length === 0}
              onClick={handleStartCustomTest}
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white shadow-lg transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed touch-feedback"
            >
              <Play className="w-4 h-4 fill-white" />
              Launch Custom Test ({Math.min(questionCount, totalAvailableInSelection)} Qs)
            </button>
          </div>
        </div>
      )}

      {/* Part A: Business Laws (Lessons 1 to 5) */}
      <div className="space-y-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
            <Scale className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Part A: Business Laws (60 Marks)</h3>
            <p className="text-xs text-slate-400">Lessons 1 to 5 • Direct statutory questions & landmark judicial precedents</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {partALessons.map(lesson => (
            <LessonCard
              key={lesson.lessonNumber}
              lesson={lesson}
              questionCount={questionCountMap[lesson.lessonNumber] || 0}
              onStart={handleStartChapter}
            />
          ))}
        </div>
      </div>

      {/* Part B: Business Management (Lessons 6 to 9) */}
      <div className="space-y-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
            <Briefcase className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Part B: Business Management (40 Marks)</h3>
            <p className="text-xs text-slate-400">Lessons 6 to 9 • Management theories, POSDC functions, leadership, and CS governance</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {partBLessons.map(lesson => (
            <LessonCard
              key={lesson.lessonNumber}
              lesson={lesson}
              questionCount={questionCountMap[lesson.lessonNumber] || 0}
              onStart={handleStartChapter}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface LessonCardProps {
  lesson: LessonMetadata;
  questionCount: number;
  onStart: (lessonNumber: number, mode: 'exam' | 'study') => void;
}

const LessonCard: React.FC<LessonCardProps> = ({ lesson, questionCount, onStart }) => {
  return (
    <div className="bg-slate-900 border border-slate-800/80 hover:border-indigo-500/50 rounded-2xl p-5 flex flex-col justify-between gap-4 transition-all duration-200 hover:shadow-xl group">
      <div className="space-y-3">
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-800 text-indigo-300 border border-slate-700/50">
            Lesson {lesson.lessonNumber}
          </span>
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-800/50">
              {lesson.weightageMarks}
            </span>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-950/60 text-blue-400 border border-blue-800/50">
              {questionCount} Qs
            </span>
          </div>
        </div>

        {/* Title & Description */}
        <div>
          <h4 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
            {lesson.lessonName}
          </h4>
          <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
            {lesson.description}
          </p>
        </div>

        {/* Key Syllabus Topic Badges */}
        <div className="flex flex-wrap gap-1 pt-1">
          {lesson.keyTopics.slice(0, 3).map((topic, i) => (
            <span
              key={i}
              className="text-[10px] px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800"
            >
              {topic}
            </span>
          ))}
          {lesson.keyTopics.length > 3 && (
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-950 text-slate-500 border border-slate-800">
              +{lesson.keyTopics.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/60">
        <button
          type="button"
          onClick={() => onStart(lesson.lessonNumber, 'exam')}
          className="px-3 py-2 rounded-xl text-xs font-bold bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/30 transition flex items-center justify-center gap-1.5 cursor-pointer touch-feedback"
          title="Start Timed Examination Mode"
        >
          <Timer className="w-3.5 h-3.5" />
          Timed Test
        </button>
        <button
          type="button"
          onClick={() => onStart(lesson.lessonNumber, 'study')}
          className="px-3 py-2 rounded-xl text-xs font-bold bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/30 transition flex items-center justify-center gap-1.5 cursor-pointer touch-feedback"
          title="Start Study Mode with Immediate Explanations"
        >
          <Eye className="w-3.5 h-3.5" />
          Study Mode
        </button>
      </div>
    </div>
  );
};
