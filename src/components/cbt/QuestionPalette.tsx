'use client';

import React, { useState, useMemo } from 'react';
import { Question, UserResponse, QuestionStatus, SectionId } from '@/types';
import { User, CheckSquare, Filter, RotateCcw } from 'lucide-react';

interface QuestionPaletteProps {
  questions: Question[];
  responses: Record<number, UserResponse>;
  currentQuestionIndex: number;
  candidateName: string;
  rollNumber: string;
  activeSection: SectionId;
  onSelectQuestionIndex: (index: number) => void;
  onSubmitTest: () => void;
}

export const QuestionPalette: React.FC<QuestionPaletteProps> = ({
  questions,
  responses,
  currentQuestionIndex,
  candidateName,
  rollNumber,
  onSelectQuestionIndex,
  onSubmitTest
}) => {
  const [filterSection, setFilterSection] = useState<'all' | SectionId>('all');
  const [filterStatus, setFilterStatus] = useState<'all' | QuestionStatus>('all');

  // Compute real-time status counts
  const counts = useMemo(() => {
    let answered = 0;
    let notAnswered = 0;
    let notVisited = 0;
    let markedForReview = 0;
    let answeredMarked = 0;

    questions.forEach(q => {
      const status: QuestionStatus = responses[q.id]?.status || 'not-visited';
      switch (status) {
        case 'answered':
          answered++;
          break;
        case 'not-answered':
          notAnswered++;
          break;
        case 'not-visited':
          notVisited++;
          break;
        case 'marked-for-review':
          markedForReview++;
          break;
        case 'answered-marked-review':
          answeredMarked++;
          break;
      }
    });

    return { answered, notAnswered, notVisited, markedForReview, answeredMarked };
  }, [questions, responses]);

  // Questions filtered for palette view
  const visibleQuestions = useMemo(() => {
    return questions
      .map((q, idx) => ({ q, originalIndex: idx }))
      .filter(item => {
        // Section filter
        if (filterSection !== 'all' && item.q.sectionId !== filterSection) {
          return false;
        }
        // Status filter
        if (filterStatus !== 'all') {
          const status = responses[item.q.id]?.status || 'not-visited';
          if (status !== filterStatus) return false;
        }
        return true;
      });
  }, [questions, responses, filterSection, filterStatus]);

  const toggleStatusFilter = (status: QuestionStatus) => {
    setFilterStatus(prev => (prev === status ? 'all' : status));
  };

  return (
    <div className="flex flex-col h-full bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden select-none">
      {/* Candidate Profile Card */}
      <div className="p-3 sm:p-4 bg-slate-950/80 border-b border-slate-800 flex items-center gap-3 shrink-0">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-950 border border-blue-800 flex items-center justify-center text-blue-400 font-bold text-sm shrink-0">
          <User className="w-5 h-5" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-xs sm:text-sm font-bold text-white truncate">
            {candidateName}
          </div>
          <div className="text-[11px] text-slate-400 font-mono truncate">
            {rollNumber}
          </div>
        </div>
      </div>

      {/* Interactive 5-State Legend & Filter Bar */}
      <div className="p-2.5 sm:p-3 bg-slate-950/40 border-b border-slate-800 space-y-1.5 shrink-0">
        <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 mb-1">
          <span>Filter by status:</span>
          {filterStatus !== 'all' && (
            <button
              type="button"
              onClick={() => setFilterStatus('all')}
              className="text-blue-400 hover:text-blue-300 flex items-center gap-1 font-bold cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" /> Reset
            </button>
          )}
        </div>

        <div className="grid grid-cols-2 gap-1.5 text-xs">
          {/* Answered */}
          <button
            type="button"
            onClick={() => toggleStatusFilter('answered')}
            className={`flex items-center gap-2 p-1.5 rounded-lg border text-left cursor-pointer transition touch-feedback ${
              filterStatus === 'answered'
                ? 'bg-emerald-950/60 border-emerald-500 ring-1 ring-emerald-500'
                : 'bg-slate-800/80 border-slate-700/80 hover:bg-slate-800'
            }`}
          >
            <span className="w-5 h-5 rounded-md flex items-center justify-center font-bold text-[11px] status-answered shrink-0">
              {counts.answered}
            </span>
            <span className="text-[11px] font-semibold text-slate-200 truncate">Answered</span>
          </button>

          {/* Not Answered */}
          <button
            type="button"
            onClick={() => toggleStatusFilter('not-answered')}
            className={`flex items-center gap-2 p-1.5 rounded-lg border text-left cursor-pointer transition touch-feedback ${
              filterStatus === 'not-answered'
                ? 'bg-red-950/60 border-red-500 ring-1 ring-red-500'
                : 'bg-slate-800/80 border-slate-700/80 hover:bg-slate-800'
            }`}
          >
            <span className="w-5 h-5 rounded-md flex items-center justify-center font-bold text-[11px] status-not-answered shrink-0">
              {counts.notAnswered}
            </span>
            <span className="text-[11px] font-semibold text-slate-200 truncate">Not Answered</span>
          </button>

          {/* Not Visited */}
          <button
            type="button"
            onClick={() => toggleStatusFilter('not-visited')}
            className={`flex items-center gap-2 p-1.5 rounded-lg border text-left cursor-pointer transition touch-feedback ${
              filterStatus === 'not-visited'
                ? 'bg-slate-800 border-slate-500 ring-1 ring-slate-400'
                : 'bg-slate-800/80 border-slate-700/80 hover:bg-slate-800'
            }`}
          >
            <span className="w-5 h-5 rounded-md flex items-center justify-center font-bold text-[11px] status-not-visited shrink-0">
              {counts.notVisited}
            </span>
            <span className="text-[11px] font-semibold text-slate-300 truncate">Not Visited</span>
          </button>

          {/* Marked for Review */}
          <button
            type="button"
            onClick={() => toggleStatusFilter('marked-for-review')}
            className={`flex items-center gap-2 p-1.5 rounded-lg border text-left cursor-pointer transition touch-feedback ${
              filterStatus === 'marked-for-review'
                ? 'bg-purple-950/60 border-purple-500 ring-1 ring-purple-500'
                : 'bg-slate-800/80 border-slate-700/80 hover:bg-slate-800'
            }`}
          >
            <span className="w-5 h-5 rounded-md flex items-center justify-center font-bold text-[11px] status-marked-review shrink-0">
              {counts.markedForReview}
            </span>
            <span className="text-[11px] font-semibold text-slate-200 truncate">Marked Review</span>
          </button>
        </div>

        {/* Answered & Marked for Review row */}
        <button
          type="button"
          onClick={() => toggleStatusFilter('answered-marked-review')}
          className={`w-full flex items-center gap-2 p-1.5 rounded-lg border text-left cursor-pointer transition touch-feedback ${
            filterStatus === 'answered-marked-review'
              ? 'bg-purple-950/60 border-purple-500 ring-1 ring-purple-500'
              : 'bg-slate-800/80 border-slate-700/80 hover:bg-slate-800'
          }`}
        >
          <span className="w-5 h-5 rounded-md flex items-center justify-center font-bold text-[11px] status-answered-marked-review shrink-0">
            {counts.answeredMarked}
          </span>
          <span className="text-[11px] font-semibold text-slate-200 leading-tight truncate">
            Answered & Marked (Evaluated)
          </span>
        </button>
      </div>

      {/* Section Filter Tabs */}
      <div className="px-3 py-1.5 sm:py-2 bg-slate-950/60 border-b border-slate-800 flex items-center justify-between gap-1 shrink-0">
        <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-bold text-slate-400">
          Section:
        </span>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setFilterSection('all')}
            className={`px-2 py-0.5 rounded text-[11px] font-bold transition cursor-pointer ${
              filterSection === 'all'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            All ({questions.length})
          </button>
          {questions.filter(q => q.sectionId === 'part-a').length > 0 && (
            <button
              type="button"
              onClick={() => setFilterSection('part-a')}
              className={`px-2 py-0.5 rounded text-[11px] font-bold transition cursor-pointer ${
                filterSection === 'part-a'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              Part A ({questions.filter(q => q.sectionId === 'part-a').length})
            </button>
          )}
          {questions.filter(q => q.sectionId === 'part-b').length > 0 && (
            <button
              type="button"
              onClick={() => setFilterSection('part-b')}
              className={`px-2 py-0.5 rounded text-[11px] font-bold transition cursor-pointer ${
                filterSection === 'part-b'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              Part B ({questions.filter(q => q.sectionId === 'part-b').length})
            </button>
          )}
        </div>
      </div>

      {/* Question Number Buttons Grid (Scrollable) */}
      <div className="flex-1 overflow-y-auto p-3">
        {visibleQuestions.length > 0 ? (
          <div className="grid grid-cols-5 sm:grid-cols-6 gap-2">
            {visibleQuestions.map(({ q, originalIndex }) => {
              const resp = responses[q.id];
              const status: QuestionStatus = resp?.status || 'not-visited';
              const isCurrent = currentQuestionIndex === originalIndex;

              let statusClass = 'status-not-visited';
              if (status === 'answered') statusClass = 'status-answered';
              else if (status === 'not-answered') statusClass = 'status-not-answered';
              else if (status === 'marked-for-review') statusClass = 'status-marked-review';
              else if (status === 'answered-marked-review') statusClass = 'status-answered-marked-review';

              return (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => onSelectQuestionIndex(originalIndex)}
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl text-xs palette-btn ${statusClass} ${
                    isCurrent ? 'ring-3 ring-blue-400 ring-offset-2 ring-offset-slate-900 font-black scale-105 z-10' : ''
                  }`}
                  title={`Question ${originalIndex + 1}: ${q.sectionName}`}
                >
                  {originalIndex + 1}
                </button>
              );
            })}
          </div>
        ) : (
          <div className="p-6 text-center text-xs text-slate-400 space-y-2">
            <Filter className="w-6 h-6 mx-auto text-slate-500" />
            <p>No questions match current filter.</p>
            <button
              type="button"
              onClick={() => {
                setFilterSection('all');
                setFilterStatus('all');
              }}
              className="text-xs text-blue-400 hover:underline font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Submit Test Button */}
      <div className="p-2.5 sm:p-3 bg-slate-950 border-t border-slate-800 shrink-0 safe-bottom">
        <button
          type="button"
          onClick={onSubmitTest}
          className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-black text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer touch-feedback"
        >
          <CheckSquare className="w-4 h-4 shrink-0" />
          Submit Examination
        </button>
      </div>
    </div>
  );
};

