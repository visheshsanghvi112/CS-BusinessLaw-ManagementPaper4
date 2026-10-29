'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { TopicNote, SubjectStudyModule } from '@/lib/gateStudyNotes';
import { isTopicCompleted, toggleTopicCompletion } from '@/lib/storage';
import {
  BookOpen,
  Clock,
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  HelpCircle,
  BookMarked
} from 'lucide-react';
import { TheoryRenderer, FormattedText } from './TheoryRenderer';

interface TopicNoteViewerProps {
  topic: TopicNote;
  module: SubjectStudyModule;
  onNextTopic?: () => void;
  onPrevTopic?: () => void;
  hasNextTopic?: boolean;
  hasPrevTopic?: boolean;
  onCompletionChange?: () => void;
}

export const TopicNoteViewer: React.FC<TopicNoteViewerProps> = ({
  topic,
  module,
  onNextTopic,
  onPrevTopic,
  hasNextTopic,
  hasPrevTopic,
  onCompletionChange
}) => {
  const router = useRouter();
  const [showSampleSolution, setShowSampleSolution] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    setIsCompleted(isTopicCompleted(topic.id));
    setShowSampleSolution(false);
  }, [topic.id]);

  const handleToggleCompletion = () => {
    const newState = toggleTopicCompletion(topic.id);
    setIsCompleted(newState);
    if (onCompletionChange) {
      onCompletionChange();
    }
  };

  return (
    <article className="max-w-4xl mx-auto space-y-8 animate-fadeIn select-text pb-16">
      {/* Top Breadcrumb & Metadata Header */}
      <header className="space-y-3 border-b border-slate-800/80 pb-6">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-blue-950/80 text-blue-300 border border-blue-700/60 font-semibold">
            {module.syllabusSection}
          </span>
          <span className="text-slate-500">•</span>
          <span className="text-xs text-slate-400 font-semibold">
            {module.subjectName}
          </span>
          <span className="text-slate-500">•</span>
          <span className="text-xs text-emerald-400 font-mono font-bold">
            Weightage: {module.weightage}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
          {topic.topicTitle}
        </h1>

        <div className="flex items-center justify-between gap-4 pt-1 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 font-mono">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              {topic.estimatedReadTime} read
            </span>
            <span>•</span>
            <span className="text-slate-400 truncate max-w-xs sm:max-w-md">
              {topic.syllabusRef}
            </span>
          </div>

          <button
            type="button"
            onClick={handleToggleCompletion}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              isCompleted
                ? 'bg-emerald-950 text-emerald-300 border border-emerald-600 shadow-sm'
                : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700'
            }`}
          >
            <CheckCircle2 className={`w-3.5 h-3.5 ${isCompleted ? 'text-emerald-400' : 'text-slate-500'}`} />
            <span>{isCompleted ? 'Completed ✓' : 'Mark as Done'}</span>
          </button>
        </div>
      </header>

      {/* Summary Box */}
      <section className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
        <h3 className="font-bold text-xs uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
          <BookOpen className="w-4 h-4" />
          <span>Core Concept Synopsis</span>
        </h3>
        <p className="text-sm text-slate-200 leading-relaxed">
          <FormattedText text={topic.summary} />
        </p>
      </section>

      {/* Key Formulas & Theorems */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-5 rounded-full bg-emerald-500" />
          <h3 className="font-black text-lg sm:text-xl text-white tracking-tight">
            Key Formulas &amp; Foundational Theorems
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topic.keyFormulasAndTheorems.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition flex flex-col justify-between space-y-3 shadow-md"
            >
              <div>
                <h4 className="font-bold text-sm text-emerald-300">
                  <FormattedText text={item.title} />
                </h4>
                {item.formula && (
                  <div className="my-2.5 p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs sm:text-sm text-white font-bold leading-relaxed overflow-x-auto">
                    <FormattedText text={item.formula} />
                  </div>
                )}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                <FormattedText text={item.explanation} />
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Deep-Dive Theory & Conceptual Notes */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-5 rounded-full bg-blue-500" />
          <h3 className="font-black text-lg sm:text-xl text-white tracking-tight">
            Detailed Syllabus Theory &amp; Mechanisms
          </h3>
        </div>

        <TheoryRenderer content={topic.deepDiveContent} />
      </section>

      {/* Examiner Traps & Common Mistakes Alert */}
      {topic.examinerTraps && topic.examinerTraps.length > 0 && (
        <section className="space-y-3">
          <div className="p-5 sm:p-6 rounded-3xl bg-amber-950/20 border border-amber-500/40 shadow-xl space-y-3">
            <div className="flex items-center gap-2 text-amber-300 font-bold text-sm sm:text-base">
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
              <span>GATE Examiner Pitfalls &amp; Traps (Watch Out!)</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-amber-100/90 leading-relaxed">
              {topic.examinerTraps.map((trap, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><FormattedText text={trap} /></span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Interactive Sample Problem */}
      {topic.sampleGateProblem && (
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-5 rounded-full bg-purple-500" />
            <h3 className="font-black text-lg sm:text-xl text-white tracking-tight">
              Sample GATE Benchmark Problem
            </h3>
          </div>

          <div className="p-5 sm:p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-purple-950 text-purple-300 border border-purple-800">
                {topic.sampleGateProblem.type} Problem
              </span>
              <span className="text-xs text-slate-400">Concept Application</span>
            </div>

            <div className="text-sm font-semibold text-slate-100 leading-relaxed">
              <FormattedText text={topic.sampleGateProblem.question} />
            </div>

            {topic.sampleGateProblem.options && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
                {topic.sampleGateProblem.options.map((opt, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 text-slate-300">
                    <FormattedText text={opt} />
                  </div>
                ))}
              </div>
            )}

            <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setShowSampleSolution(!showSampleSolution)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-blue-400 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
              >
                <HelpCircle className="w-4 h-4" />
                <span>{showSampleSolution ? 'Hide Solution' : 'Reveal Solution & Derivation'}</span>
              </button>
            </div>

            {showSampleSolution && (
              <div className="p-4 rounded-2xl bg-slate-950 border border-emerald-500/40 space-y-2 animate-in fade-in duration-150">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Correct Answer: {topic.sampleGateProblem.correctAnswer}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pl-6">
                  <FormattedText text={topic.sampleGateProblem.explanation} />
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Bottom Navigation Pagination */}
      <footer className="pt-6 border-t border-slate-800 flex items-center justify-between gap-4">
        {hasPrevTopic && onPrevTopic ? (
          <button
            type="button"
            onClick={onPrevTopic}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs sm:text-sm font-bold border border-slate-800 transition cursor-pointer"
          >
            ← Previous Topic
          </button>
        ) : <div />}

        {hasNextTopic && onNextTopic && (
          <button
            type="button"
            onClick={onNextTopic}
            className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-extrabold shadow-md transition flex items-center gap-1.5 cursor-pointer"
          >
            <span>Next Topic</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </footer>
    </article>
  );
};

