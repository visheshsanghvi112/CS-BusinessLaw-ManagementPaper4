'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { GATE_STUDY_MODULES } from '@/lib/gateStudyNotes';
import { QUESTION_BANK } from '@/lib/questionBank';
import {
  Search,
  BookOpen,
  BookMarked,
  HelpCircle,
  X,
  Sparkles,
  Command,
  ArrowRight,
  Layers,
  Zap,
  Play
} from 'lucide-react';

interface GlobalCommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlobalCommandPalette: React.FC<GlobalCommandPaletteProps> = ({
  isOpen,
  onClose
}) => {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'topics' | 'formulas' | 'questions'>('all');

  // Keyboard shortcut listener for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Reset query on open
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setActiveTab('all');
    }
  }, [isOpen]);

  // Collect all searchable study topics
  const searchableTopics = useMemo(() => {
    const list: { id: string; title: string; summary: string; subjectName: string; readTime: string }[] = [];
    GATE_STUDY_MODULES.forEach(m => {
      m.topics.forEach(t => {
        list.push({
          id: t.id,
          title: t.topicTitle,
          summary: t.summary,
          subjectName: m.subjectName,
          readTime: t.estimatedReadTime
        });
      });
    });
    return list;
  }, []);

  // Collect all searchable formulas
  const searchableFormulas = useMemo(() => {
    const list: { id: string; topicId: string; title: string; formula?: string; explanation: string; subjectName: string }[] = [];
    GATE_STUDY_MODULES.forEach(m => {
      m.topics.forEach(t => {
        t.keyFormulasAndTheorems.forEach((f, idx) => {
          list.push({
            id: `${t.id}-${idx}`,
            topicId: t.id,
            title: f.title,
            formula: f.formula,
            explanation: f.explanation,
            subjectName: m.subjectName
          });
        });
      });
    });
    return list;
  }, []);

  // Filter matching items
  const matchingTopics = useMemo(() => {
    if (!query.trim()) return searchableTopics.slice(0, 5);
    const q = query.toLowerCase();
    return searchableTopics.filter(t =>
      t.title.toLowerCase().includes(q) ||
      t.summary.toLowerCase().includes(q) ||
      t.subjectName.toLowerCase().includes(q)
    ).slice(0, 6);
  }, [searchableTopics, query]);

  const matchingFormulas = useMemo(() => {
    if (!query.trim()) return searchableFormulas.slice(0, 4);
    const q = query.toLowerCase();
    return searchableFormulas.filter(f =>
      f.title.toLowerCase().includes(q) ||
      (f.formula || '').toLowerCase().includes(q) ||
      f.explanation.toLowerCase().includes(q) ||
      f.subjectName.toLowerCase().includes(q)
    ).slice(0, 6);
  }, [searchableFormulas, query]);

  const matchingQuestions = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return QUESTION_BANK.filter(qb =>
      qb.question.toLowerCase().includes(q) ||
      qb.subjectName.toLowerCase().includes(q) ||
      (qb.sourcePaper || '').toLowerCase().includes(q)
    ).slice(0, 5);
  }, [query]);

  if (!isOpen) return null;

  const handleSelectTopic = (topicId: string) => {
    onClose();
    router.push(`/study?topic=${topicId}`);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-start justify-center p-3 sm:p-6 pt-12 sm:pt-20 select-none animate-in fade-in duration-150">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-2xl flex flex-col shadow-2xl overflow-hidden max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-800 bg-slate-950 flex items-center gap-3">
          <Search className="w-5 h-5 text-blue-400 shrink-0" />
          <input
            autoFocus
            type="text"
            placeholder="Search all 37 study modules, formulas, theorems, and PYQs..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 rounded-lg text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-400 border border-slate-700 hidden sm:inline-block">
              ESC
            </kbd>
          )}
        </div>

        {/* Filter Category Tabs */}
        <div className="px-4 py-2 border-b border-slate-800/80 bg-slate-900/60 flex items-center gap-1 text-xs shrink-0 overflow-x-auto">
          {(['all', 'topics', 'formulas', 'questions'] as const).map(tab => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 rounded-lg font-bold capitalize transition whitespace-nowrap cursor-pointer ${
                activeTab === tab
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab === 'all' ? 'All Results' : tab === 'topics' ? `Study Topics (${matchingTopics.length})` : tab === 'formulas' ? `Formulas (${matchingFormulas.length})` : `PYQ Bank (${matchingQuestions.length})`}
            </button>
          ))}
        </div>

        {/* Results Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Section: Study Topics */}
          {(activeTab === 'all' || activeTab === 'topics') && matchingTopics.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                <span>Syllabus Study Modules:</span>
              </div>
              <div className="space-y-1.5">
                {matchingTopics.map(t => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => handleSelectTopic(t.id)}
                    className="w-full p-3 rounded-2xl bg-slate-950/70 hover:bg-blue-950/40 border border-slate-800 hover:border-blue-700/60 transition text-left flex items-center justify-between gap-3 group cursor-pointer"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono px-2 py-0.2 rounded-md bg-slate-800 text-slate-300">
                          {t.subjectName}
                        </span>
                        <h4 className="font-bold text-xs sm:text-sm text-white group-hover:text-blue-300 truncate">
                          {t.title}
                        </h4>
                      </div>
                      <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                        {t.summary}
                      </p>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 group-hover:text-blue-400 shrink-0">
                      {t.readTime} →
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Section: Formulas & Theorems */}
          {(activeTab === 'all' || activeTab === 'formulas') && matchingFormulas.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <BookMarked className="w-3.5 h-3.5 text-emerald-400" />
                <span>Core Formulas &amp; Identities:</span>
              </div>
              <div className="space-y-1.5">
                {matchingFormulas.map(f => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => handleSelectTopic(f.topicId)}
                    className="w-full p-3 rounded-2xl bg-slate-950/70 hover:bg-emerald-950/30 border border-slate-800 hover:border-emerald-700/60 transition text-left flex flex-col justify-between gap-1 group cursor-pointer"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-bold text-xs sm:text-sm text-white group-hover:text-emerald-300">
                        {f.title}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">
                        {f.subjectName}
                      </span>
                    </div>
                    {f.formula && (
                      <div className="text-xs font-mono font-bold text-emerald-400 truncate">
                        {f.formula}
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Section: PYQ Questions */}
          {(activeTab === 'all' || activeTab === 'questions') && matchingQuestions.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>Past GATE Questions:</span>
              </div>
              <div className="space-y-1.5">
                {matchingQuestions.map(q => (
                  <div
                    key={q.id}
                    className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1.5"
                  >
                    <div className="flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-purple-300 font-mono">
                          {q.type}
                        </span>
                        <span className="text-slate-400">
                          {q.subjectName}
                        </span>
                      </div>
                      <span className="text-slate-500 font-mono">
                        {q.sourcePaper}
                      </span>
                    </div>
                    <p className="text-xs text-slate-200 line-clamp-2 leading-relaxed">
                      {q.question}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Empty state when searching and no results */}
          {query.trim() && matchingTopics.length === 0 && matchingFormulas.length === 0 && matchingQuestions.length === 0 && (
            <div className="text-center py-10 space-y-2 text-xs text-slate-400">
              <Search className="w-8 h-8 text-slate-600 mx-auto" />
              <p>No results found for &ldquo;{query}&rdquo;</p>
              <p className="text-slate-500 text-[11px]">Try searching for terms like &ldquo;Cache&rdquo;, &ldquo;Dijkstra&rdquo;, &ldquo;Pipelining&rdquo;, or &ldquo;Eigenvalue&rdquo;</p>
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="p-3 bg-slate-950 border-t border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span>Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 font-mono">ESC</kbd> to close</span>
          </div>
          <span>IIT Madras GATE 2027 Portal</span>
        </div>
      </div>
    </div>
  );
};

