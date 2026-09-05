'use client';

import React, { useEffect } from 'react';
import { BookOpen, X } from 'lucide-react';

interface ExamInstructionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  durationMinutes: number;
  totalQuestions: number;
}

export const ExamInstructionsModal: React.FC<ExamInstructionsModalProps> = ({
  isOpen,
  onClose,
  durationMinutes,
  totalQuestions
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

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Examination Instructions"
      className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 select-none"
    >
      <div className="relative w-full max-w-2xl bg-slate-900 rounded-3xl shadow-2xl border border-slate-700/80 overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-5 sm:px-6 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base">
            <BookOpen className="w-5 h-5 text-blue-400" />
            <span>ICSI Examination Instructions &amp; Marking Guidelines</span>
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

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 space-y-4 max-h-[75vh] overflow-y-auto text-xs sm:text-sm text-slate-300 leading-relaxed">
          {/* Paper Overview Box */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-950/80 border border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400">Total Duration</div>
              <div className="text-base font-black text-white font-mono mt-0.5">{durationMinutes} Mins</div>
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400">Total Questions</div>
              <div className="text-base font-black text-white font-mono mt-0.5">{totalQuestions} Qs</div>
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400">Marking Scheme</div>
              <div className="text-base font-black text-emerald-400 font-mono mt-0.5">+1.0 / 0.0</div>
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400">Paper Cutoff</div>
              <div className="text-base font-black text-blue-400 font-mono mt-0.5">&ge; 40% Marks</div>
            </div>
          </div>

          {/* Sectional Rules */}
          <div className="space-y-2">
            <h4 className="font-bold text-white text-xs sm:text-sm flex items-center gap-1.5">
              <span>Sectional Composition &amp; Negative Marking</span>
            </h4>
            <ul className="list-disc list-inside space-y-1.5 text-slate-300">
              {totalQuestions === 100 ? (
                <>
                  <li><strong>Part A (Business Laws):</strong> 60 Questions (60 Marks) covering Company Law 2013, Contract Act 1872, Partnership &amp; LLP, Sale of Goods, NI Act, DPDP &amp; BNSS 2023.</li>
                  <li><strong>Part B (Business Management):</strong> 40 Questions (40 Marks) covering Management Theories, POSDC Functions, Leadership, Motivation &amp; Corporate Governance.</li>
                </>
              ) : (
                <>
                  <li><strong>Targeted Session:</strong> This examination consists of <strong>{totalQuestions} questions</strong> (+1.0 Mark per question) aligned to official ICSI syllabus units.</li>
                  <li><strong>Sectional Distribution:</strong> Business Laws (Lessons 1-5) and Business Management (Lessons 6-9) as selected for this session.</li>
                </>
              )}
              <li><strong className="text-emerald-400">Zero Negative Marking:</strong> There is no negative penalty for incorrect or unattempted questions. Candidates are advised to attempt all questions.</li>
              <li><strong>Qualifying Criteria:</strong> A minimum of 40% marks must be secured in Paper 4 to qualify under official ICSI guidelines.</li>
            </ul>
          </div>

          {/* 5-Color Status Legend */}
          <div className="space-y-2 pt-1 border-t border-slate-800">
            <h4 className="font-bold text-white text-xs sm:text-sm">
              Official ICSI 5-State Question Palette Symbols
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-slate-300 shrink-0">
                  ⚪
                </span>
                <span><strong>Not Visited:</strong> You have not visited this question yet.</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-lg bg-red-600 border border-red-500 flex items-center justify-center font-bold text-white shrink-0">
                  🔴
                </span>
                <span><strong>Not Answered:</strong> Visited question without saving any option.</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-lg bg-emerald-600 border border-emerald-500 flex items-center justify-center font-bold text-white shrink-0">
                  🟢
                </span>
                <span><strong>Answered:</strong> Option chosen and saved for evaluation.</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-lg bg-purple-600 border border-purple-500 flex items-center justify-center font-bold text-white shrink-0">
                  🟣
                </span>
                <span><strong>Marked for Review:</strong> Flagged without answer (not scored).</span>
              </div>
            </div>
            <div className="p-2.5 rounded-xl bg-purple-950/30 border border-purple-800/60 flex items-center gap-2.5 text-xs">
              <span className="w-6 h-6 rounded-lg bg-purple-600 border border-purple-500 relative flex items-center justify-center font-bold text-white shrink-0">
                🟣<span className="w-2 h-2 rounded-full bg-emerald-400 absolute bottom-0.5 right-0.5 border border-white"></span>
              </span>
              <span><strong className="text-purple-300">Answered &amp; Marked for Review:</strong> Option chosen AND flagged. <strong>Evaluated for marks</strong> (+1.0 if correct) in final score per ICSI rule.</span>
            </div>
          </div>

          {/* Keyboard Shortcuts */}
          <div className="space-y-2 pt-1 border-t border-slate-800">
            <h4 className="font-bold text-white text-xs sm:text-sm">
              Rapid Keyboard Shortcuts
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono text-[11px]">
              <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center justify-between">
                <span className="text-slate-400 font-sans">Select Option:</span>
                <span className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-200 border border-slate-700">1-4 / A-D</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center justify-between">
                <span className="text-slate-400 font-sans">Save &amp; Next:</span>
                <span className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-200 border border-slate-700">Enter / &rarr;</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center justify-between">
                <span className="text-slate-400 font-sans">Previous:</span>
                <span className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-200 border border-slate-700">P / &larr;</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center justify-between">
                <span className="text-slate-400 font-sans">Review &amp; Next:</span>
                <span className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-200 border border-slate-700">M</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center justify-between">
                <span className="text-slate-400 font-sans">Clear Answer:</span>
                <span className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-200 border border-slate-700">C</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center justify-between">
                <span className="text-slate-400 font-sans">Close Dialog:</span>
                <span className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-200 border border-slate-700">Esc</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 sm:px-6 py-3.5 bg-slate-950 border-t border-slate-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md transition cursor-pointer"
          >
            Back to Examination
          </button>
        </div>
      </div>
    </div>
  );
};
