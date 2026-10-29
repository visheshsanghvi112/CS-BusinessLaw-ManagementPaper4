'use client';

import React, { useEffect } from 'react';
import { Question, UserResponse, QuestionStatus } from '@/types';
import { AlertTriangle, CheckCircle2, X } from 'lucide-react';

interface SubmitConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmSubmit: () => void;
  questions: Question[];
  responses: Record<string | number, UserResponse>;
}

export const SubmitConfirmationModal: React.FC<SubmitConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirmSubmit,
  questions,
  responses
}) => {
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
    const resp = responses[q.id];
    let status: QuestionStatus = resp?.status || 'not-visited';

    const hasAnswer = q.type === 'NAT'
      ? (resp?.natValue !== undefined && resp.natValue !== null && String(resp.natValue).trim().length > 0)
      : q.type === 'MSQ'
      ? ((resp?.selectedOptions || []).length > 0)
      : (resp?.selectedOption !== null && resp?.selectedOption !== undefined);

    if (hasAnswer) {
      if (status === 'marked-for-review' || status === 'answered-marked-review') {
        status = 'answered-marked-review';
      } else {
        status = 'answered';
      }
    }

    if (status === 'answered') answered++;
    else if (status === 'not-answered') notAnswered++;
    else if (status === 'not-visited') notVisited++;
    else if (status === 'marked-for-review') markedForReview++;
    else if (status === 'answered-marked-review') answeredMarked++;
  });

  const totalAnsweredEvaluated = answered + answeredMarked;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Confirm Test Submission"
      className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 select-none"
    >
      <div className="relative w-full max-w-lg bg-slate-900 rounded-3xl shadow-2xl border border-slate-700/80 overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-5 sm:px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5 text-white font-bold text-sm sm:text-base">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
            <span>Submit GATE Examination?</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Stats Table */}
        <div className="p-5 sm:p-6 space-y-4">
          <p className="text-xs sm:text-sm text-slate-300">
            Are you sure you want to conclude your examination? Here is your current test summary:
          </p>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
              <span className="text-slate-400 block text-[11px]">Total Questions</span>
              <strong className="text-white text-base">{questions.length}</strong>
            </div>

            <div className="p-3 rounded-2xl bg-emerald-950/30 border border-emerald-800/40">
              <span className="text-emerald-300 block text-[11px]">Answered (Evaluated)</span>
              <strong className="text-emerald-400 text-base">{totalAnsweredEvaluated}</strong>
            </div>

            <div className="p-3 rounded-2xl bg-rose-950/30 border border-rose-800/40">
              <span className="text-rose-300 block text-[11px]">Not Answered</span>
              <strong className="text-rose-400 text-base">{notAnswered}</strong>
            </div>

            <div className="p-3 rounded-2xl bg-purple-950/30 border border-purple-800/40">
              <span className="text-purple-300 block text-[11px]">Marked for Review</span>
              <strong className="text-purple-400 text-base">{markedForReview}</strong>
            </div>
          </div>

          <p className="text-[11px] text-slate-400 leading-normal">
            Note: As per official GATE evaluation criteria, questions with status <strong>Answered &amp; Marked for Review</strong> will be graded and credited to your final score.
          </p>
        </div>

        {/* Footer Actions */}
        <div className="px-5 py-3.5 bg-slate-950 border-t border-slate-800 flex items-center justify-end gap-2.5">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs sm:text-sm font-semibold transition cursor-pointer"
          >
            Return to Test
          </button>

          <button
            type="button"
            onClick={onConfirmSubmit}
            className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white text-xs sm:text-sm font-extrabold shadow-lg shadow-emerald-950/60 transition cursor-pointer flex items-center gap-1.5"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Yes, Submit Examination</span>
          </button>
        </div>
      </div>
    </div>
  );
};
