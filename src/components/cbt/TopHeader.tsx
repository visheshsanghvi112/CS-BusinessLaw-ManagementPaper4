'use client';

import React, { useState, useEffect } from 'react';
import { GateSectionId } from '@/types';
import { Clock, ShieldCheck, Grid, CheckSquare, Maximize2, Minimize2, Pause, Eye, Calculator, FileText } from 'lucide-react';

interface TopHeaderProps {
  testTitle: string;
  candidateName: string;
  rollNumber: string;
  remainingSeconds: number;
  activeSection: GateSectionId;
  onSelectSection: (section: GateSectionId) => void;
  availableSections: { id: GateSectionId; name: string; questionCount: number }[];
  onToggleMobileDrawer: () => void;
  onOpenSubmitModal: () => void;
  onOpenCalculator?: () => void;
  answeredCount?: number;
  totalQuestions?: number;
  isPaused?: boolean;
  onTogglePause?: () => void;
  onOpenInstructions?: () => void;
  onOpenQuestionPaper?: () => void;
  practiceMode?: 'exam' | 'study';
}

export const TopHeader: React.FC<TopHeaderProps> = ({
  testTitle,
  candidateName,
  rollNumber,
  remainingSeconds,
  activeSection,
  onSelectSection,
  availableSections,
  onToggleMobileDrawer,
  onOpenSubmitModal,
  onOpenCalculator,
  answeredCount = 0,
  totalQuestions = 65,
  isPaused = false,
  onTogglePause,
  onOpenInstructions,
  onOpenQuestionPaper,
  practiceMode = 'exam'
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch {
      // Fullscreen not supported or blocked
    }
  };

  const hours = Math.floor(remainingSeconds / 3600);
  const minutes = Math.floor((remainingSeconds % 3600) / 60);
  const seconds = remainingSeconds % 60;

  const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const isLowTime = remainingSeconds <= 900; // 15 mins
  const isUrgentTime = remainingSeconds <= 300; // 5 mins

  const progressPercent = totalQuestions > 0 ? Math.min(100, Math.round((answeredCount / totalQuestions) * 100)) : 0;

  return (
    <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 text-white shadow-md select-none">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Branding & Candidate identity */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center shrink-0 text-blue-400 font-bold shadow-inner">
            <ShieldCheck className="w-4 h-4 sm:w-6 sm:h-6 text-blue-400" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 rounded bg-blue-900/60 border border-blue-700/60 text-blue-300 uppercase tracking-wider">
                GATE 2027 CS & IT
              </span>
              {practiceMode === 'study' && (
                <span className="text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 rounded bg-emerald-950/90 border border-emerald-600/70 text-emerald-300 uppercase tracking-wider flex items-center gap-1">
                  <Eye className="w-3 h-3" /> Study Mode
                </span>
              )}
              <span className="text-[11px] text-slate-400 font-mono hidden md:inline">
                {rollNumber}
              </span>
            </div>
            <h1 className="text-xs sm:text-sm md:text-base font-bold text-slate-100 truncate max-w-[150px] sm:max-w-xs md:max-w-md">
              {testTitle}
            </h1>
          </div>
        </div>

        {/* Center/Right: Timer & Top Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Virtual Scientific Calculator */}
          {onOpenCalculator && (
            <button
              type="button"
              onClick={onOpenCalculator}
              title="Open Official GATE Scientific Calculator"
              className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 active:bg-emerald-800 text-emerald-300 border border-emerald-700/80 font-bold text-xs flex items-center gap-1.5 cursor-pointer transition shadow-sm"
            >
              <Calculator className="w-4 h-4 text-emerald-400" />
              <span className="hidden sm:inline">Calculator</span>
            </button>
          )}

          {/* Question Paper View */}
          {onOpenQuestionPaper && (
            <button
              type="button"
              onClick={onOpenQuestionPaper}
              title="View Complete Question Paper"
              className="hidden lg:flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 text-xs font-semibold cursor-pointer transition"
            >
              <FileText className="w-4 h-4 text-slate-400" />
              <span>Paper</span>
            </button>
          )}

          {/* Pause / Resume (Study Mode) */}
          {onTogglePause && practiceMode === 'study' && (
            <button
              type="button"
              onClick={onTogglePause}
              title={isPaused ? "Resume Session" : "Pause Session"}
              className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 text-xs font-semibold flex items-center gap-1 cursor-pointer transition"
            >
              <Pause className="w-4 h-4 text-amber-400" />
              <span className="hidden sm:inline">{isPaused ? 'Resume' : 'Pause'}</span>
            </button>
          )}

          {/* Official Countdown Timer */}
          <div
            className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 rounded-xl border font-mono font-bold text-xs sm:text-sm tracking-wider shadow-inner transition-colors ${
              isUrgentTime
                ? 'bg-rose-950/90 border-rose-600 text-rose-300 animate-pulse ring-2 ring-rose-500/50'
                : isLowTime
                ? 'bg-amber-950/80 border-amber-600/80 text-amber-300'
                : 'bg-slate-900 border-slate-700 text-emerald-400'
            }`}
          >
            <Clock className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${isUrgentTime ? 'text-rose-400' : 'text-emerald-400'}`} />
            <span>{formattedTime}</span>
          </div>

          {/* Fullscreen Toggle */}
          <button
            type="button"
            onClick={toggleFullscreen}
            title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
            className="hidden sm:flex p-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 cursor-pointer transition"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {/* Final Submit Button */}
          <button
            type="button"
            onClick={onOpenSubmitModal}
            className="px-3 sm:px-4 py-1.5 rounded-xl text-xs sm:text-sm font-black bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white shadow-lg shadow-emerald-950/60 transition cursor-pointer"
          >
            Submit
          </button>

          {/* Mobile Drawer Toggle */}
          <button
            type="button"
            onClick={onToggleMobileDrawer}
            className="lg:hidden p-1.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300"
          >
            <Grid className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Section Switcher Tabs & Progress Bar */}
      <div className="bg-slate-900/90 border-t border-slate-800 px-3 sm:px-6 py-1.5 flex items-center justify-between gap-3 text-xs">
        {/* Section Tabs */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto py-0.5">
          {availableSections.map(sec => {
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => onSelectSection(sec.id)}
                className={`px-3 py-1 rounded-lg font-bold transition flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-800/80 hover:bg-slate-750 text-slate-300 hover:text-white border border-slate-700/60'
                }`}
              >
                <span>{sec.name}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${isActive ? 'bg-blue-700 text-white' : 'bg-slate-700 text-slate-300'}`}>
                  {sec.questionCount}Q
                </span>
              </button>
            );
          })}
        </div>

        {/* Progress Tracker */}
        <div className="hidden sm:flex items-center gap-2 shrink-0 text-slate-400 font-mono text-[11px]">
          <span>Answered: <strong className="text-emerald-400">{answeredCount}</strong>/{totalQuestions} ({progressPercent}%)</span>
        </div>
      </div>
    </header>
  );
};
