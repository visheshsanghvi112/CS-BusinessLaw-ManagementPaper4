'use client';

import React, { useEffect } from 'react';
import { Question, UserResponse, QuestionStatus } from '@/types';
import { AlertTriangle, CheckCircle2, X } from 'lucide-react';

interface SubmitConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmSubmit: () => void;
  questions: Question[];
  responses: Record<number, UserResponse>;
}

export const SubmitConfirmationModal: React.FC<SubmitConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirmSubmit,
  questions,
  responses
}) => {
  // Lock scroll & handle Escape key
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

  let answered = 0;
  let notAnswered = 0;
  let notVisited = 0;
  let markedForReview = 0;
  let answeredMarked = 0;

  questions.forEach(q => {
    const status: QuestionStatus = responses[q.id]?.status || 'not-visited';
    if (status === 'answered') answered++;
    else if (status === 'not-answered') notAnswered++;
    else if (status === 'not-visited') notVisited++;
    else if (status === 'marked-for-review') markedForReview++;
    else if (status === 'answered-marked-review') answeredMarked++;
  });

  const totalAttempted = answered + answeredMarked;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Confirm Examination Submission"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200 select-none"
    >
      <div className="relative w-full max-w-lg bg-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-800 overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-4 sm:px-6 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-100 font-bold text-sm sm:text-base">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
            <span>Confirm Final Submission</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition cursor-pointer touch-feedback"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body: Summary Breakdown Table */}
        <div className="p-4 sm:p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Please review your examination breakdown before confirming final submission:
          </p>

          <div className="overflow-hidden border border-slate-800 rounded-xl bg-slate-950/60">
            <table className="w-full text-xs sm:text-sm text-left">
              <thead className="bg-slate-950 text-slate-400 font-semibold border-b border-slate-800">
                <tr>
                  <th className="px-3 sm:px-4 py-2 sm:py-2.5">Category</th>
                  <th className="px-3 sm:px-4 py-2 sm:py-2.5 text-right font-mono">Count</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr>
                  <td className="px-3 sm:px-4 py-2 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 shrink-0"></span>
                    <span>Answered</span>
                  </td>
                  <td className="px-3 sm:px-4 py-2 text-right font-bold text-emerald-400 font-mono">
                    {answered}
                  </td>
                </tr>
                <tr>
                  <td className="px-3 sm:px-4 py-2 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-purple-500 shrink-0"></span>
                    <span>Answered & Marked for Review</span>
                  </td>
                  <td className="px-3 sm:px-4 py-2 text-right font-bold text-purple-400 font-mono">
                    {answeredMarked}
                  </td>
                </tr>
                <tr>
                  <td className="px-3 sm:px-4 py-2 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500 shrink-0"></span>
                    <span>Not Answered (Visited)</span>
                  </td>
                  <td className="px-3 sm:px-4 py-2 text-right font-bold text-red-400 font-mono">
                    {notAnswered}
                  </td>
                </tr>
                <tr>
                  <td className="px-3 sm:px-4 py-2 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-purple-400 shrink-0"></span>
                    <span>Marked for Review (Unanswered)</span>
                  </td>
                  <td className="px-3 sm:px-4 py-2 text-right font-bold text-purple-400 font-mono">
                    {markedForReview}
                  </td>
                </tr>
                <tr>
                  <td className="px-3 sm:px-4 py-2 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-slate-700 shrink-0"></span>
                    <span>Not Visited</span>
                  </td>
                  <td className="px-3 sm:px-4 py-2 text-right font-bold text-slate-400 font-mono">
                    {notVisited}
                  </td>
                </tr>
                <tr className="bg-slate-950 font-bold border-t border-slate-700">
                  <td className="px-3 sm:px-4 py-2.5 text-white">Total Questions</td>
                  <td className="px-3 sm:px-4 py-2.5 text-right text-white font-mono text-sm">
                    {questions.length}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-3 sm:p-3.5 bg-blue-950/40 border border-blue-800/60 rounded-xl text-xs text-blue-200 leading-relaxed">
            <strong>Evaluation Rule:</strong> Exactly <strong>{totalAttempted}</strong> of <strong>{questions.length}</strong> questions have marked choices and will be evaluated for scoring (+1.0 Mark for each correct, zero negative marking).
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-4 sm:px-6 py-3.5 bg-slate-950 border-t border-slate-800 flex items-center justify-end gap-2.5">
          <button
            type="button"
            onClick={onClose}
            className="px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 hover:bg-slate-800 transition cursor-pointer touch-feedback"
          >
            Return to Exam
          </button>
          <button
            type="button"
            onClick={onConfirmSubmit}
            className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white shadow-md transition cursor-pointer touch-feedback"
          >
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            Yes, Submit Exam
          </button>
        </div>
      </div>
    </div>
  );
};

