'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { GATE_STUDY_MODULES, getAllStudyTopics, TopicNote, SubjectStudyModule } from '@/lib/gateStudyNotes';
import { StudySidebar } from '@/components/study/StudySidebar';
import { TopicNoteViewer } from '@/components/study/TopicNoteViewer';
import { RevisionNotesModal } from '@/components/cbt/RevisionNotesModal';
import { FormulaFlashcardsModal } from '@/components/study/FormulaFlashcardsModal';
import { GlobalCommandPalette } from '@/components/common/GlobalCommandPalette';
import { getCompletedTopics } from '@/lib/storage';
import {
  BookOpen,
  ChevronLeft,
  BookMarked,
  Menu,
  X,
  Search,
  CheckCircle2
} from 'lucide-react';

export default function StudyPage() {
  const router = useRouter();
  const allTopics = useMemo(() => getAllStudyTopics(), []);

  const [activeTopic, setActiveTopic] = useState<TopicNote>(allTopics[0]?.topic);
  const [activeModule, setActiveModule] = useState<SubjectStudyModule>(allTopics[0]?.module);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFormulaModalOpen, setIsFormulaModalOpen] = useState(false);
  const [isFlashcardsModalOpen, setIsFlashcardsModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [completedCount, setCompletedCount] = useState(0);
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
    setCompletedCount(getCompletedTopics().length);
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [refreshTrigger]);

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
                {allTopics.length} Official Syllabus Modules
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-emerald-400">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                <span>{completedCount}/{allTopics.length} Read</span>
              </span>
            </div>
          </div>

          {/* Quick Header Utilities - Pure Learning Tools */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-300 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer"
              title="Search topics and formulas (⌘K)"
            >
              <Search className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden md:inline px-1 rounded bg-slate-800 text-[10px] font-mono text-slate-400 border border-slate-700">⌘K</kbd>
            </button>

            <button
              onClick={() => setIsFlashcardsModalOpen(true)}
              className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-indigo-950/80 hover:bg-indigo-900 border border-indigo-700/80 text-indigo-300 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer"
              title="Active Recall Formula Flashcards"
            >
              <BookMarked className="w-3.5 h-3.5 text-indigo-400" />
              <span>Flashcards</span>
            </button>

            <button
              onClick={() => setIsFormulaModalOpen(true)}
              className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer"
              title="Quick Formula & Theorem Reference Sheet"
            >
              <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">Cheat Sheet</span>
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

      {/* Global Command Palette (⌘K) */}
      <GlobalCommandPalette
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </div>
  );
}

