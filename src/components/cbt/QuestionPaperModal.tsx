'use client';

import React, { useEffect, useState } from 'react';
import { Question, UserResponse, GateSectionId } from '@/types';
import { FileText, X, ExternalLink, Filter } from 'lucide-react';

interface QuestionPaperModalProps {
  isOpen: boolean;
  onClose: () => void;
  questions: Question[];
  responses: Record<string | number, UserResponse>;
  onSelectQuestion: (index: number) => void;
}

export const QuestionPaperModal: React.FC<QuestionPaperModalProps> = ({
  isOpen,
  onClose,
  questions,
  responses,
  onSelectQuestion
}) => {
  const [sectionFilter, setSectionFilter] = useState<'all' | GateSectionId>('all');

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
            <span>Complete Question Paper ({questions.length} Questions)</span>
          </div>

          <div className="flex items-center gap-3">
            {/* Section Filter Pills */}
            <div className="hidden sm:flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
              <button
                type="button"
                onClick={() => setSectionFilter('all')}
                className={`px-2.5 py-1 rounded-lg font-semibold transition ${
                  sectionFilter === 'all' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setSectionFilter('GA')}
                className={`px-2.5 py-1 rounded-lg font-semibold transition ${
                  sectionFilter === 'GA' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                GA
              </button>
              <button
                type="button"
                onClick={() => setSectionFilter('CS')}
                className={`px-2.5 py-1 rounded-lg font-semibold transition ${
                  sectionFilter === 'CS' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                CS Core
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Question List View */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 divide-y divide-slate-800/80">
          {filteredQuestions.map(({ q, originalIndex }) => {
            const resp = responses[q.id];
            const hasAnswer = q.type === 'NAT'
              ? (resp?.natValue !== undefined && resp.natValue !== null && String(resp.natValue).length > 0)
              : q.type === 'MSQ'
              ? ((resp?.selectedOptions || []).length > 0)
              : (resp?.selectedOption !== null && resp?.selectedOption !== undefined);

            return (
              <div key={`${q.id}-${originalIndex}`} className="pt-4 first:pt-0 space-y-2">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-0.5 rounded-md bg-blue-600 text-white text-xs font-black">
                      Q.{originalIndex + 1}
                    </span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-purple-950/80 text-purple-300 border border-purple-800/60">
                      {q.type}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {q.subjectName}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-400">
                      +{q.marks}.0 Marks
                    </span>
                    {hasAnswer && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 font-bold border border-emerald-800">
                        Answered
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      onSelectQuestion(originalIndex);
                      onClose();
                    }}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-blue-400 hover:text-blue-300 text-xs font-bold transition shrink-0"
                  >
                    <span>Jump</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>

                <div className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                  {q.question}
                </div>

                {q.options && q.options.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {q.options.map(opt => (
                      <div
                        key={opt.key}
                        className="p-2 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 flex items-start gap-2"
                      >
                        <span className="w-5 h-5 rounded flex items-center justify-center bg-slate-800 font-bold text-[10px] uppercase shrink-0 text-slate-400">
                          {opt.key}
                        </span>
                        <span className="pt-0.5 leading-snug">{opt.text}</span>
                      </div>
                    ))}
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
