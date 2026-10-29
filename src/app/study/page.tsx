'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { GATE_STUDY_MODULES, getAllStudyTopics, TopicNote, SubjectStudyModule } from '@/lib/gateStudyNotes';
import { StudySidebar } from '@/components/study/StudySidebar';
import { TopicNoteViewer } from '@/components/study/TopicNoteViewer';
import { ScientificCalculator } from '@/components/cbt/ScientificCalculator';
import { RevisionNotesModal } from '@/components/cbt/RevisionNotesModal';
import { MistakeNotebookModal } from '@/components/cbt/MistakeNotebookModal';
import { FormulaFlashcardsModal } from '@/components/study/FormulaFlashcardsModal';
import { GlobalCommandPalette } from '@/components/common/GlobalCommandPalette';
import { getMistakeRecords } from '@/lib/storage';
import {
  BookOpen,
  ChevronLeft,
  Calculator,
  BookMarked,
  Layers,
  Menu,
  X,
  Sparkles,
  Zap,
  Search,
  AlertTriangle
} from 'lucide-react';

export default function StudyPage() {
  const router = useRouter();
  const allTopics = useMemo(() => getAllStudyTopics(), []);

  const [activeTopic, setActiveTopic] = useState<TopicNote>(allTopics[0]?.topic);
  const [activeModule, setActiveModule] = useState<SubjectStudyModule>(allTopics[0]?.module);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCalcOpen, setIsCalcOpen] = useState(false);
  const [isFormulaModalOpen, setIsFormulaModalOpen] = useState(false);
  const [isFlashcardsModalOpen, setIsFlashcardsModalOpen] = useState(false);
  const [isMistakesModalOpen, setIsMistakesModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mistakesCount, setMistakesCount] = useState(0);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  // Read URL query params on load (e.g. /study?topic=dm-graphs or /study?subject=os)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const topicId = params.get('topic');
      const subjectId = params.get('subject');
      if (topicId) {
        const found = allTopics.find(t => t.topic.id === topicId);
        if (found) {
          setActiveTopic(found.topic);
          setActiveModule(found.module);
        }
      } else if (subjectId) {
        const found = allTopics.find(t => t.module.subjectId === subjectId);
        if (found) {
          setActiveTopic(found.topic);
          setActiveModule(found.module);
        }
      }
    }
  }, [allTopics]);

  useEffect(() => {
    setMistakesCount(getMistakeRecords().filter(m => !m.isResolved).length);
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentIndex = allTopics.findIndex(t => t.topic.id === activeTopic.id);
  const hasPrevTopic = currentIndex > 0;
  const hasNextTopic = currentIndex < allTopics.length - 1;

  const handlePrevTopic = () => {
    if (hasPrevTopic) {
      setActiveTopic(allTopics[currentIndex - 1].topic);
      setActiveModule(allTopics[currentIndex - 1].module);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextTopic = () => {
    if (hasNextTopic) {
      setActiveTopic(allTopics[currentIndex + 1].topic);
      setActiveModule(allTopics[currentIndex + 1].module);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectTopic = (topic: TopicNote, module: SubjectStudyModule) => {
    setActiveTopic(topic);
    setActiveModule(module);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-slate-950 text-slate-100 flex flex-col antialiased">
      {/* Top Navbar */}
      <header className="border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md sticky top-0 z-40 shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>

            <button
              onClick={() => router.push('/')}
              className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-400 hover:text-white transition cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>GATE Home</span>
            </button>

            <div className="hidden sm:block h-4 w-px bg-slate-800" />

            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-900/60 text-blue-300 border border-blue-700/60 uppercase tracking-wider">
                Study &amp; Learn Hub
              </span>
              <span className="text-xs text-slate-400 font-mono hidden md:inline">
                IIT Madras GATE 2027 Syllabus Notes
              </span>
            </div>
          </div>

          {/* Quick Header Utilities */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-300 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer"
              title="Search topics, formulas, questions (⌘K)"
            >
              <Search className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden md:inline px-1 rounded bg-slate-800 text-[10px] font-mono text-slate-400 border border-slate-700">⌘K</kbd>
            </button>

            <button
              onClick={() => setIsMistakesModalOpen(true)}
              className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-amber-950/80 hover:bg-amber-900 border border-amber-600/60 text-amber-300 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer"
              title="Open Mistake Notebook"
            >
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Mistakes</span>
              {mistakesCount > 0 && (
                <span className="px-1.5 rounded-full bg-amber-500 text-slate-950 font-black text-[10px]">
                  {mistakesCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsCalcOpen(true)}
              className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-700/80 text-emerald-300 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer"
            >
              <Calculator className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">Calculator</span>
            </button>

            <button
              onClick={() => setIsFlashcardsModalOpen(true)}
              className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-indigo-950/80 hover:bg-indigo-900 border border-indigo-700/80 text-indigo-300 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer"
              title="Active Recall Formula Flashcards"
            >
              <BookMarked className="w-3.5 h-3.5 text-indigo-400" />
              <span className="hidden sm:inline">Flashcards</span>
            </button>

            <button
              onClick={() => router.push('/test')}
              className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs sm:text-sm shadow-md transition flex items-center gap-1.5 cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Mock Engine</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Study Workbench Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Desktop Sidebar */}
        <div className="hidden lg:block w-80 shrink-0 h-full">
          <StudySidebar
            activeTopicId={activeTopic.id}
            onSelectTopic={handleSelectTopic}
            refreshTrigger={refreshTrigger}
          />
        </div>

        {/* Center / Right Content Reader */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-8 lg:p-10">
          <TopicNoteViewer
            topic={activeTopic}
            module={activeModule}
            onNextTopic={handleNextTopic}
            onPrevTopic={handlePrevTopic}
            hasNextTopic={hasNextTopic}
            hasPrevTopic={hasPrevTopic}
            onCompletionChange={() => setRefreshTrigger(prev => prev + 1)}
          />
        </main>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-xs"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="relative w-80 max-w-[85vw] h-full bg-slate-950 z-10 shadow-2xl">
            <StudySidebar
              activeTopicId={activeTopic.id}
              onSelectTopic={handleSelectTopic}
              refreshTrigger={refreshTrigger}
            />
          </div>
        </div>
      )}

      {/* Virtual Scientific Calculator Modal */}
      <ScientificCalculator
        isOpen={isCalcOpen}
        onClose={() => setIsCalcOpen(false)}
      />

      {/* Formula Sheet Modal */}
      <RevisionNotesModal
        isOpen={isFormulaModalOpen}
        onClose={() => setIsFormulaModalOpen(false)}
      />

      {/* Formula Flashcards Modal */}
      <FormulaFlashcardsModal
        isOpen={isFlashcardsModalOpen}
        onClose={() => setIsFlashcardsModalOpen(false)}
      />

      {/* Mistake Notebook Modal */}
      <MistakeNotebookModal
        isOpen={isMistakesModalOpen}
        onClose={() => {
          setIsMistakesModalOpen(false);
          setMistakesCount(getMistakeRecords().filter(m => !m.isResolved).length);
        }}
      />

      {/* Global Command Palette (⌘K) */}
      <GlobalCommandPalette
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </div>
  );
}

