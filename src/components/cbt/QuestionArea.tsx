'use client';

import React, { useState, useEffect } from 'react';
import { Question, UserResponse } from '@/types';
import { Bookmark, RotateCcw, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

interface QuestionAreaProps {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  currentResponse: UserResponse | undefined;
  onSelectOption: (optionKey: 'a' | 'b' | 'c' | 'd') => void;
  onClearResponse: () => void;
  onSaveAndNext: () => void;
  onMarkForReviewAndNext: () => void;
  onPrevious: () => void;
  isFirstQuestion: boolean;
  isLastQuestion: boolean;
  isModalOpen?: boolean;
}

export const QuestionArea: React.FC<QuestionAreaProps> = ({
  question,
  questionIndex,
  totalQuestions,
  currentResponse,
  onSelectOption,
  onClearResponse,
  onSaveAndNext,
  onMarkForReviewAndNext,
  onPrevious,
  isFirstQuestion,
  isLastQuestion,
  isModalOpen = false
}) => {
  const selectedOption = currentResponse?.selectedOption || null;
  const [zoomLevel, setZoomLevel] = useState<'sm' | 'md' | 'lg'>('md');

  // Keyboard shortcut listener
  useEffect(() => {
    if (isModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;

      const key = e.key.toLowerCase();
      if (['1', 'a'].includes(key)) {
        e.preventDefault();
        onSelectOption('a');
      } else if (['2', 'b'].includes(key)) {
        e.preventDefault();
        onSelectOption('b');
      } else if (['3', 'c'].includes(key)) {
        e.preventDefault();
        onSelectOption('c');
      } else if (['4', 'd'].includes(key)) {
        e.preventDefault();
        onSelectOption('d');
      } else if (e.key === 'Enter' || key === 'arrowright') {
        e.preventDefault();
        onSaveAndNext();
      } else if ((key === 'p' || key === 'arrowleft') && !isFirstQuestion) {
        e.preventDefault();
        onPrevious();
      } else if (key === 'm') {
        e.preventDefault();
        onMarkForReviewAndNext();
      } else if (key === 'c' && selectedOption) {
        e.preventDefault();
        onClearResponse();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onSelectOption, onSaveAndNext, onPrevious, onMarkForReviewAndNext, onClearResponse, isFirstQuestion, selectedOption, isModalOpen]);

  const toggleZoom = () => {
    if (zoomLevel === 'sm') setZoomLevel('md');
    else if (zoomLevel === 'md') setZoomLevel('lg');
    else setZoomLevel('sm');
  };

  const getQuestionFontSize = () => {
    if (zoomLevel === 'sm') return 'text-sm sm:text-base';
    if (zoomLevel === 'lg') return 'text-lg sm:text-xl md:text-2xl';
    return 'text-base sm:text-lg md:text-xl';
  };

  const getOptionFontSize = () => {
    if (zoomLevel === 'sm') return 'text-xs sm:text-sm';
    if (zoomLevel === 'lg') return 'text-base sm:text-lg';
    return 'text-sm sm:text-base';
  };

  return (
    <div className="flex flex-col h-full bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden select-none">
      {/* Question Sub-Header */}
      <div className="px-3.5 sm:px-6 py-2.5 sm:py-3 bg-slate-950/85 border-b border-slate-800/90 flex items-center justify-between gap-2 sm:gap-3 shrink-0">
        <div className="flex items-center gap-1.5 sm:gap-2.5 flex-wrap min-w-0">
          <span className="px-2.5 py-1 rounded-lg bg-blue-600 text-white font-extrabold text-xs tracking-wide shadow-xs shrink-0">
            Q. {questionIndex + 1} / {totalQuestions}
          </span>
          <span className="text-xs font-bold text-slate-300 truncate max-w-[140px] sm:max-w-[200px]">
            {question.sectionName}
          </span>
          <span className="hidden md:inline text-[11px] px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-400 font-medium truncate max-w-[220px]">
            {question.lessonName}
          </span>
        </div>

        {/* Right Header Controls: Font Zoom & Marks */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Font Resizer Button */}
          <button
            type="button"
            onClick={toggleZoom}
            title={`Toggle Font Size (Currently: ${zoomLevel.toUpperCase()})`}
            className="px-2 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-[11px] font-bold flex items-center gap-1 cursor-pointer transition touch-feedback"
          >
            <span className="font-mono">{zoomLevel === 'sm' ? 'A-' : zoomLevel === 'md' ? 'A' : 'A+'}</span>
          </button>

          {/* Mark Scheme Badges */}
          <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-950/90 text-emerald-400 border border-emerald-800/80">
            +1.0
          </span>
          <span className="hidden sm:inline text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 border border-slate-700">
            0.0 Neg
          </span>
        </div>
      </div>

      {/* Scrollable Question Content & Option Cards */}
      <div className="flex-1 overflow-y-auto p-3.5 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
        {/* Question Prompt */}
        <div className={`font-bold text-slate-100 leading-relaxed ${getQuestionFontSize()}`}>
          {question.question}
        </div>

        {/* 4 Interactive Option Cards */}
        <div className="space-y-2.5 sm:space-y-3 pt-1">
          {question.options.map(option => {
            const isSelected = selectedOption === option.key;
            return (
              <button
                key={option.key}
                type="button"
                onClick={() => onSelectOption(option.key)}
                className={`w-full text-left p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-150 flex items-start gap-3 sm:gap-4 group cursor-pointer tap-target touch-feedback ${
                  isSelected
                    ? 'bg-blue-950/50 border-blue-500 shadow-md ring-2 ring-blue-500/40 text-blue-100'
                    : 'bg-slate-900/90 border-slate-800 hover:border-slate-700 hover:bg-slate-800/50 text-slate-300 active:bg-slate-800'
                }`}
              >
                {/* Option Key Badge: A, B, C, D */}
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl flex items-center justify-center font-black text-xs sm:text-sm uppercase shrink-0 transition-colors ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-slate-800 text-slate-400 group-hover:bg-slate-700 group-hover:text-slate-200 border border-slate-700'
                  }`}
                >
                  {option.key}
                </div>

                {/* Option Text */}
                <div className={`leading-snug pt-0.5 sm:pt-1 flex-1 ${getOptionFontSize()} ${
                  isSelected ? 'font-semibold text-white' : 'font-normal text-slate-300'
                }`}>
                  {option.text}
                </div>

                {/* Selected Checkmark */}
                {isSelected && (
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5 sm:mt-1 animate-in zoom-in duration-100" />
                )}
              </button>
            );
          })}
        </div>

        {/* Desktop Keyboard Shortcuts Hint */}
        <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 pt-2 border-t border-slate-800/60">
          <span className="font-semibold text-slate-400">Shortcuts:</span>
          <span><kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-[10px] font-mono text-slate-300">1-4</kbd> / <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-[10px] font-mono text-slate-300">A-D</kbd> Select</span>
          <span>• <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-[10px] font-mono text-slate-300">Enter</kbd> Next</span>
          <span>• <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-[10px] font-mono text-slate-300">P</kbd> Prev</span>
          <span>• <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-[10px] font-mono text-slate-300">M</kbd> Review</span>
          <span>• <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-[10px] font-mono text-slate-300">C</kbd> Clear</span>
        </div>
      </div>

      {/* Docked Bottom Control Bar (Optimized for both Mobile & Desktop) */}
      <div className="p-2.5 sm:p-4 bg-slate-950/95 border-t border-slate-800/90 flex items-center justify-between gap-1.5 sm:gap-2 shrink-0 safe-bottom">
        {/* Left Actions: Review & Clear */}
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            onClick={onMarkForReviewAndNext}
            title="Mark for Review and advance to Next"
            className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-purple-950/80 hover:bg-purple-900 active:bg-purple-800 text-purple-300 border border-purple-700/80 transition cursor-pointer touch-feedback"
          >
            <Bookmark className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400 shrink-0" />
            <span className="hidden sm:inline">Mark for Review & Next</span>
            <span className="sm:hidden">Review</span>
          </button>

          <button
            type="button"
            onClick={onClearResponse}
            disabled={!selectedOption}
            title="Clear selected option"
            className={`inline-flex items-center gap-1 px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition cursor-pointer touch-feedback ${
              selectedOption
                ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700 active:bg-slate-600'
                : 'opacity-40 text-slate-600 border-transparent cursor-not-allowed'
            }`}
          >
            <RotateCcw className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden sm:inline">Clear</span>
          </button>
        </div>

        {/* Right Actions: Previous & Save and Next */}
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            onClick={onPrevious}
            disabled={isFirstQuestion}
            title="Go to previous question"
            className={`inline-flex items-center gap-1 px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition cursor-pointer touch-feedback ${
              isFirstQuestion
                ? 'opacity-40 text-slate-600 border-transparent cursor-not-allowed'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700 active:bg-slate-600'
            }`}
          >
            <ChevronLeft className="w-4 h-4 shrink-0" />
            <span className="hidden sm:inline">Previous</span>
          </button>

          <button
            type="button"
            onClick={onSaveAndNext}
            title="Save answer and proceed to next question"
            className="inline-flex items-center gap-1 sm:gap-1.5 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-extrabold bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white shadow-lg shadow-blue-900/40 transition ring-1 ring-blue-400/50 cursor-pointer touch-feedback"
          >
            <span>{isLastQuestion ? 'Save & Finish' : 'Save & Next'}</span>
            <ChevronRight className="w-4 h-4 shrink-0" />
          </button>
        </div>
      </div>
    </div>
  );
};

