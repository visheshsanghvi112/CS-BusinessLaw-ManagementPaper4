'use client';

import React, { useEffect } from 'react';
import { BookOpen, X, Calculator, ShieldCheck, AlertCircle } from 'lucide-react';

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
      <div className="relative w-full max-w-2xl bg-slate-900 rounded-3xl shadow-2xl border border-slate-700/80 overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-5 sm:px-6 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base">
            <BookOpen className="w-5 h-5 text-blue-400" />
            <span>GATE 2027 Examination Instructions &amp; Marking Scheme</span>
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

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <div className="p-3 bg-blue-950/40 border border-blue-800/60 rounded-xl text-blue-200 flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0" />
            <span>Organizing Institute: <strong>IIT Madras</strong> | Paper: <strong>Computer Science &amp; Information Technology (CS)</strong></span>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-white text-sm">1. General Overview &amp; Duration</h4>
            <ul className="list-disc pl-5 space-y-1 text-slate-300">
              <li>Total test duration is <strong>{durationMinutes} minutes</strong> (180 minutes for full mock).</li>
              <li>The clock in the top banner displays the remaining time. The test submits automatically when the timer reaches 00:00:00.</li>
              <li>There are <strong>{totalQuestions} questions</strong> carrying a total of 100 marks.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-white text-sm">2. Section Structure</h4>
            <ul className="list-disc pl-5 space-y-1 text-slate-300">
              <li><strong>General Aptitude (GA):</strong> Q.1 to Q.10 (Q1–Q5 carry 1 mark, Q6–Q10 carry 2 marks; Total 15 marks).</li>
              <li><strong>CS &amp; Engineering Mathematics:</strong> Q.11 to Q.65 (Q11–Q35 carry 1 mark, Q36–Q65 carry 2 marks; Total 85 marks).</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-white text-sm">3. Question Types &amp; Marking Rules</h4>
            <div className="space-y-2 pt-1">
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="font-bold text-blue-300">MCQ (Multiple Choice Questions):</span>
                <p className="text-xs text-slate-300 mt-0.5">
                  Single option is correct. Negative marking applies: <strong>-0.33</strong> for 1-mark questions and <strong>-0.66</strong> for 2-mark questions.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="font-bold text-purple-300">MSQ (Multiple Select Questions):</span>
                <p className="text-xs text-slate-300 mt-0.5">
                  One or more options are correct. Full marks awarded only if ALL correct options are selected and NO wrong options selected. <strong>NO negative marking</strong>. No partial credit.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="font-bold text-amber-300">NAT (Numerical Answer Type):</span>
                <p className="text-xs text-slate-300 mt-0.5">
                  Enter integer or decimal number via virtual keypad. <strong>NO negative marking</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-white text-sm flex items-center gap-1.5">
              <Calculator className="w-4 h-4 text-emerald-400" />
              <span>4. Virtual Scientific Calculator</span>
            </h4>
            <p>
              An official virtual scientific calculator is embedded in the portal. Click the <strong>Calculator</strong> button in the top header or question area at any time to compute trigonometric, logarithmic, root, and exponential expressions.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-slate-950 border-t border-slate-800 flex justify-end shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm cursor-pointer"
          >
            I Understand &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
};
