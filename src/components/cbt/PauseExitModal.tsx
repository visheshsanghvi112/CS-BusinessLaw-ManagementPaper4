'use client';

import React, { useEffect } from 'react';
import { Pause, Play, LogOut, CheckSquare, Clock, CheckCircle2 } from 'lucide-react';

interface PauseExitModalProps {
  isOpen: boolean;
  remainingSeconds: number;
  answeredCount: number;
  totalQuestions: number;
  testTitle: string;
  onResume: () => void;
  onSaveAndExit: () => void;
  onSubmitNow: () => void;
}

export const PauseExitModal: React.FC<PauseExitModalProps> = ({
  isOpen,
  remainingSeconds,
  answeredCount,
  totalQuestions,
  testTitle,
  onResume,
  onSaveAndExit,
  onSubmitNow
}) => {
  // Lock scroll & handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onResume();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onResume]);

  if (!isOpen) return null;

  const hours = Math.floor(remainingSeconds / 3600);
  const minutes = Math.floor((remainingSeconds % 3600) / 60);
  const seconds = remainingSeconds % 60;
  const formattedTime = `${hours > 0 ? String(hours).padStart(2, '0') + ':' : ''}${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const unattemptedCount = Math.max(0, totalQuestions - answeredCount);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Examination Paused"
      className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 select-none"
    >
      <div className="relative w-full max-w-lg bg-slate-900 rounded-3xl shadow-2xl border border-slate-700/80 overflow-hidden animate-in zoom-in-95 duration-200 ring-1 ring-blue-500/20">
        {/* Top Header Banner */}
        <div className="px-5 sm:px-6 py-4 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
              <Pause className="w-5 h-5 fill-current" />
            </div>
            <div>
              <span className="text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded bg-amber-950/80 text-amber-300 border border-amber-800 uppercase tracking-wider">
                Exam Paused
              </span>
              <h2 className="text-sm sm:text-base font-bold text-white truncate max-w-xs mt-0.5">
                {testTitle}
              </h2>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 space-y-5">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Your timer is <strong className="text-emerald-400 font-semibold">frozen</strong> and all answers are safely saved. You can take a break, handle urgent work, or resume whenever you are ready.
          </p>

          {/* Quick Metrics Cards */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center">
            <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
              <Clock className="w-4 h-4 mx-auto text-amber-400" />
              <div className="text-sm sm:text-base font-black text-white font-mono">{formattedTime}</div>
              <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Time Frozen</div>
            </div>

            <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
              <CheckCircle2 className="w-4 h-4 mx-auto text-emerald-400" />
              <div className="text-sm sm:text-base font-black text-emerald-400 font-mono">{answeredCount}</div>
              <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Answered</div>
            </div>

            <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
              <div className="w-4 h-4 mx-auto text-slate-400 font-bold text-xs">Q</div>
              <div className="text-sm sm:text-base font-black text-slate-300 font-mono">{unattemptedCount}</div>
              <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Remaining</div>
            </div>
          </div>

          <div className="p-3 sm:p-3.5 rounded-xl bg-blue-950/40 border border-blue-900/50 text-xs text-blue-200 leading-relaxed">
            💡 <strong>Resume Anytime:</strong> Clicking &quot;Save &amp; Return to Dashboard&quot; preserves your exact question position and responses. When you return to the home screen, an active banner lets you jump right back in with a single click.
          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5 pt-2">
            {/* 1. Resume Exam (Primary) */}
            <button
              type="button"
              onClick={onResume}
              className="w-full py-3 px-4 rounded-xl sm:rounded-2xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-900/40 flex items-center justify-center gap-2 cursor-pointer transition touch-feedback ring-1 ring-blue-400/50"
            >
              <Play className="w-4 h-4 fill-current" />
              Resume Examination
            </button>

            {/* 2. Save & Return to Dashboard (Secondary) */}
            <button
              type="button"
              onClick={onSaveAndExit}
              className="w-full py-2.5 sm:py-3 px-4 rounded-xl sm:rounded-2xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-slate-200 border border-slate-700 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition touch-feedback"
            >
              <LogOut className="w-4 h-4 text-slate-400" />
              Save &amp; Return to Dashboard
            </button>

            {/* 3. Submit Exam Now */}
            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={onSubmitNow}
                className="text-xs text-slate-400 hover:text-red-400 font-semibold inline-flex items-center gap-1.5 transition cursor-pointer"
              >
                <CheckSquare className="w-3.5 h-3.5" />
                End &amp; Submit Exam Now (Score Current Answers)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
