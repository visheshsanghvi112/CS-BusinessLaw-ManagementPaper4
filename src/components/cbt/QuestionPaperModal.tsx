'use client';

import React, { useEffect, useState } from 'react';
import { Question, UserResponse, SectionId } from '@/types';
import { FileText, X, ExternalLink, Filter } from 'lucide-react';

interface QuestionPaperModalProps {
  isOpen: boolean;
  onClose: () => void;
  questions: Question[];
  responses: Record<number, UserResponse>;
  onSelectQuestion: (index: number) => void;
}

export const QuestionPaperModal: React.FC<QuestionPaperModalProps> = ({
  isOpen,
  onClose,
  questions,
  responses,
  onSelectQuestion
}) => {
  const [sectionFilter, setSectionFilter] = useState<'all' | SectionId>('all');

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredQuestions = questions
    .map((q, idx) => ({ q, originalIndex: idx }))
    .filter(item => {
      if (sectionFilter !== 'all' && item.q.sectionId !== sectionFilter) return false;
      return true;
    });

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Full Question Paper View"
      className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 select-none"
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 rounded-3xl shadow-2xl border border-slate-700/80 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-5 sm:px-6 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base">
            <FileText className="w-5 h-5 text-blue-400" />
            <span>Complete Question Paper Skim ({questions.length} Questions)</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Section Filter Toolbar (Only shown when multiple sections exist) */}
        {questions.some(q => q.sectionId === 'part-a') && questions.some(q => q.sectionId === 'part-b') && (
          <div className="px-5 sm:px-6 py-2 bg-slate-950/60 border-b border-slate-800/80 flex items-center justify-between gap-2 shrink-0">
            <span className="text-xs text-slate-400 font-semibold flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5" /> Filter Section:
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setSectionFilter('all')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                  sectionFilter === 'all'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                All ({questions.length})
              </button>
              {questions.filter(q => q.sectionId === 'part-a').length > 0 && (
                <button
                  type="button"
                  onClick={() => setSectionFilter('part-a')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                    sectionFilter === 'part-a'
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  Part A: Laws ({questions.filter(q => q.sectionId === 'part-a').length})
                </button>
              )}
              {questions.filter(q => q.sectionId === 'part-b').length > 0 && (
                <button
                  type="button"
                  onClick={() => setSectionFilter('part-b')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                    sectionFilter === 'part-b'
                      ? 'bg-purple-600 text-white shadow-xs'
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  Part B: Management ({questions.filter(q => q.sectionId === 'part-b').length})
                </button>
              )}
            </div>
          </div>
        )}

        {/* Scrollable Questions List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {filteredQuestions.map(({ q, originalIndex }) => {
            const resp = responses[q.id];
            const isAnswered = resp?.selectedOption !== null;

            return (
              <div
                key={q.id}
                className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 transition space-y-3"
              >
                {/* Question Meta Bar */}
                <div className="flex items-center justify-between gap-2 flex-wrap text-xs">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-md bg-blue-900/60 text-blue-300 font-black">
                      Q.{originalIndex + 1}
                    </span>
                    <span className="text-slate-300 font-bold">{q.sectionName}</span>
                    <span className="hidden sm:inline px-2 py-0.5 rounded bg-slate-800 text-slate-400 text-[11px]">
                      {q.lessonName}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {isAnswered && (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800">
                        Option: {resp.selectedOption?.toUpperCase()}
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        onSelectQuestion(originalIndex);
                        onClose();
                      }}
                      className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-blue-400 hover:text-blue-300 font-bold text-xs inline-flex items-center gap-1 cursor-pointer transition touch-feedback"
                    >
                      Jump to Question <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Prompt */}
                <div className="text-sm font-semibold text-white leading-relaxed">
                  {q.question}
                </div>

                {/* 4 Options Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {q.options.map(opt => {
                    const isSelected = resp?.selectedOption === opt.key;
                    return (
                      <div
                        key={opt.key}
                        className={`p-2 rounded-xl border flex items-start gap-2 ${
                          isSelected
                            ? 'bg-blue-950/60 border-blue-500 text-blue-200'
                            : 'bg-slate-900/60 border-slate-800/80 text-slate-400'
                        }`}
                      >
                        <span className={`w-5 h-5 rounded flex items-center justify-center font-bold text-[10px] uppercase shrink-0 ${
                          isSelected ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'
                        }`}>
                          {opt.key}
                        </span>
                        <span className="leading-snug">{opt.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-5 sm:px-6 py-3 bg-slate-950 border-t border-slate-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition cursor-pointer"
          >
            Close Question Paper
          </button>
        </div>
      </div>
    </div>
  );
};
