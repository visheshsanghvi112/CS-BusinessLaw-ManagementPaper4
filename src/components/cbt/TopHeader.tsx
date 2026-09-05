'use client';

import React, { useState, useEffect } from 'react';
import { SectionId } from '@/types';
import { Clock, User, ShieldCheck, Grid, CheckSquare, Maximize2, Minimize2, Pause, Eye } from 'lucide-react';

interface TopHeaderProps {
  testTitle: string;
  candidateName: string;
  rollNumber: string;
  remainingSeconds: number;
  activeSection: SectionId;
  onSelectSection: (section: SectionId) => void;
  availableSections: { id: SectionId; name: string; questionCount: number }[];
  onToggleMobileDrawer: () => void;
  onOpenSubmitModal: () => void;
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
  answeredCount = 0,
  totalQuestions = 100,
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
      // Fullscreen not permitted or supported
    }
  };

  const hours = Math.floor(remainingSeconds / 3600);
  const minutes = Math.floor((remainingSeconds % 3600) / 60);
  const seconds = remainingSeconds % 60;

  const formattedTime = `${hours > 0 ? String(hours).padStart(2, '0') + ':' : ''}${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

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
                ICSI CSEET
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

        {/* Center/Right: Countdown Timer & Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Pause / Resume Button */}
          {onTogglePause && (
            <button
              type="button"
              onClick={onTogglePause}
              title={isPaused ? "Resume Examination" : "Pause & Exit Examination"}
              className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl border text-xs font-bold transition cursor-pointer touch-feedback ${
                isPaused
                  ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 border-amber-400 shadow-md animate-pulse'
                  : 'bg-slate-900 hover:bg-slate-800 active:bg-slate-700 text-amber-300 border-amber-600/50 hover:border-amber-500'
              }`}
            >
              <Pause className="w-3.5 h-3.5 fill-current" />
              <span className="hidden sm:inline">{isPaused ? 'Resume' : 'Pause'}</span>
            </button>
          )}

          {/* Live Countdown Timer */}
          <div
            className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-xl border transition-all duration-300 ${
              isPaused
                ? 'bg-amber-950/80 border-amber-500/80 text-amber-300'
                : isUrgentTime
                ? 'bg-red-950/90 border-red-500 text-red-300 animate-pulse ring-2 ring-red-500/30'
                : isLowTime
                ? 'bg-amber-950/90 border-amber-500/80 text-amber-300'
                : 'bg-slate-900 border-slate-700 text-emerald-400'
            }`}
          >
            <Clock className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${isPaused ? 'text-amber-400' : isUrgentTime ? 'text-red-400' : isLowTime ? 'text-amber-400' : 'text-emerald-400'}`} />
            <div className="text-right">
              <span className="hidden md:inline text-[9px] text-slate-400 uppercase tracking-wider block leading-none font-semibold">
                {isPaused ? 'Timer Frozen' : 'Time Left'}
              </span>
              <span className="font-mono text-xs sm:text-base md:text-lg font-black tracking-wider leading-tight">
                {formattedTime}
              </span>
            </div>
          </div>

          {/* Fullscreen Toggle (Desktop & Tablet) */}
          <button
            type="button"
            onClick={toggleFullscreen}
            title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen Examination Mode'}
            className="hidden md:inline-flex p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 transition cursor-pointer"
            aria-label="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {/* Candidate Card (Desktop) */}
          <div className="hidden lg:flex items-center gap-2 pl-2.5 border-l border-slate-800">
            <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300">
              <User className="w-4 h-4" />
            </div>
            <div className="text-left leading-tight">
              <div className="text-xs font-bold text-slate-200 truncate max-w-[110px]">
                {candidateName}
              </div>
              <div className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                {isPaused ? 'Paused' : 'Active'}
              </div>
            </div>
          </div>

          {/* Desktop & Tablet Submit Button */}
          <button
            type="button"
            onClick={onOpenSubmitModal}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white text-xs font-bold transition shadow-sm cursor-pointer"
          >
            <CheckSquare className="w-3.5 h-3.5" />
            Submit Test
          </button>

          {/* Mobile Palette Drawer Trigger */}
          <button
            type="button"
            onClick={onToggleMobileDrawer}
            className="lg:hidden relative p-1.5 sm:p-2 rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-slate-200 border border-slate-700 flex items-center gap-1.5 cursor-pointer touch-feedback"
            aria-label="Open Question Palette"
          >
            <Grid className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-bold text-slate-200">
              {answeredCount}/{totalQuestions}
            </span>
          </button>
        </div>
      </div>

      {/* Sub-bar: Section Navigation Tabs & Helper Tools */}
      <div className="bg-slate-900/90 border-t border-slate-800/80 px-3 sm:px-6 py-1.5 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          {/* Section Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 max-w-full">
            <span className="text-[10px] sm:text-xs uppercase tracking-wider font-bold text-slate-400 mr-1 shrink-0">
              Sections:
            </span>
            {availableSections.map(sec => {
              const isActive = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => onSelectSection(sec.id)}
                  className={`px-2.5 sm:px-3 py-1 rounded-lg text-[11px] sm:text-xs font-bold whitespace-nowrap transition-all cursor-pointer touch-feedback ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm ring-1 ring-blue-400/60'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                  }`}
                >
                  {sec.name} <span className="opacity-75 font-mono">({sec.questionCount})</span>
                </button>
              );
            })}
          </div>

          {/* Quick Helper Tools & Mobile Actions */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* View Instructions Modal Trigger */}
            {onOpenInstructions && (
              <button
                type="button"
                onClick={onOpenInstructions}
                title="View ICSI Examination Instructions & Marking Guidelines"
                className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold border border-slate-700 transition cursor-pointer"
              >
                Instructions
              </button>
            )}

            {/* View Full Question Paper Trigger */}
            {onOpenQuestionPaper && (
              <button
                type="button"
                onClick={onOpenQuestionPaper}
                title="Skim Complete Question Paper"
                className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold border border-slate-700 transition cursor-pointer"
              >
                Question Paper
              </button>
            )}

            {/* Mobile Quick Submit Button inside sub-bar */}
            <button
              type="button"
              onClick={onOpenSubmitModal}
              className="sm:hidden px-2.5 py-1 rounded-lg bg-emerald-600 active:bg-emerald-700 text-white text-[11px] font-bold shadow-xs shrink-0 cursor-pointer"
            >
              Submit
            </button>
          </div>
        </div>

        {/* Real-time Progress Bar at the very bottom edge of the header */}
        <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-slate-800 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-indigo-400 to-emerald-400 transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
            title={`Completed: ${progressPercent}% (${answeredCount}/${totalQuestions})`}
          />
        </div>
      </div>
    </header>
  );
};

