'use client';

import React, { useState, useEffect } from 'react';
import { GATE_STUDY_MODULES, SubjectStudyModule, TopicNote } from '@/lib/gateStudyNotes';
import { getCompletedTopics } from '@/lib/storage';
import {
  BookOpen,
  Search,
  ChevronDown,
  ChevronRight,
  Layers,
  Sparkles,
  CheckCircle2,
  Bookmark
} from 'lucide-react';

interface StudySidebarProps {
  activeTopicId: string;
  onSelectTopic: (topic: TopicNote, module: SubjectStudyModule) => void;
  refreshTrigger?: number;
}

export const StudySidebar: React.FC<StudySidebarProps> = ({
  activeTopicId,
  onSelectTopic,
  refreshTrigger
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({
    'discrete-maths': true,
    'linear-algebra': true,
    'calculus': true,
    'probability': true,
    'digital-logic': true,
    'coa': true,
    'programming-ds': true,
    'algorithms': true,
    'toc': true,
    'compiler-design': true,
    'os': true,
    'dbms': true,
    'computer-networks': true,
    'general-aptitude': true
  });

  // Sync completed topics on mount and on trigger/active change
  useEffect(() => {
    setCompletedTopics(getCompletedTopics());
  }, [refreshTrigger, activeTopicId]);

  // Ensure active module is expanded
  useEffect(() => {
    const activeMod = GATE_STUDY_MODULES.find(m => m.topics.some(t => t.id === activeTopicId));
    if (activeMod) {
      setExpandedModules(prev => ({
        ...prev,
        [activeMod.subjectId]: true
      }));
    }
  }, [activeTopicId]);

  const toggleModule = (modId: string) => {
    setExpandedModules(prev => ({
      ...prev,
      [modId]: !prev[modId]
    }));
  };

  const totalTopics = GATE_STUDY_MODULES.reduce((acc, m) => acc + m.topics.length, 0);
  const percent = totalTopics > 0 ? Math.round((completedTopics.length / totalTopics) * 100) : 0;

  // Filter modules/topics by search query
  const filteredModules = GATE_STUDY_MODULES.map(mod => {
    if (!searchQuery.trim()) return mod;
    const q = searchQuery.toLowerCase();
    const matchingTopics = mod.topics.filter(t =>
      t.topicTitle.toLowerCase().includes(q) ||
      t.summary.toLowerCase().includes(q) ||
      mod.subjectName.toLowerCase().includes(q)
    );
    return {
      ...mod,
      topics: matchingTopics
    };
  }).filter(mod => mod.topics.length > 0);

  return (
    <aside className="w-full h-full flex flex-col bg-slate-950 border-r border-slate-800/80 select-none">
      {/* Sidebar Header, Progress & Search */}
      <div className="p-4 border-b border-slate-800/80 space-y-3 shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <h3 className="font-extrabold text-sm text-white">
              Syllabus Study Modules
            </h3>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-900 text-slate-400 border border-slate-800">
            IIT Madras
          </span>
        </div>

        {/* Progress Bar */}
        <div className="space-y-1.5 pt-0.5">
          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <span>Progress:</span>
            <span className="font-mono text-emerald-400 font-bold">
              {completedTopics.length} / {totalTopics} topics ({percent}%)
            </span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-slate-900 border border-slate-800 overflow-hidden">
            <div
              className="h-full bg-emerald-500 rounded-full transition-all duration-300"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search topics, formulas..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Modules and Topics Scrollable List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {filteredModules.map(mod => {
          const isExpanded = expandedModules[mod.subjectId] ?? true;
          const hasActiveChild = mod.topics.some(t => t.id === activeTopicId);

          return (
            <div
              key={mod.subjectId}
              className="rounded-2xl border border-slate-850 overflow-hidden bg-slate-900/40"
            >
              {/* Module Header Row */}
              <button
                type="button"
                onClick={() => toggleModule(mod.subjectId)}
                className={`w-full px-3 py-2.5 flex items-center justify-between text-left transition cursor-pointer ${
                  hasActiveChild ? 'bg-blue-950/30 text-blue-300' : 'hover:bg-slate-900 text-slate-300'
                }`}
              >
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] font-mono text-slate-400 block truncate">
                    {mod.syllabusSection}
                  </span>
                  <span className="font-bold text-xs text-white truncate block">
                    {mod.subjectName}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 shrink-0 ml-2">
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold">
                    {mod.weightage}
                  </span>
                  {isExpanded ? (
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                  ) : (
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  )}
                </div>
              </button>

              {/* Topics Sub-list */}
              {isExpanded && (
                <div className="p-1 space-y-0.5 bg-slate-950/60 border-t border-slate-800/60">
                  {mod.topics.map(topic => {
                    const isActive = topic.id === activeTopicId;
                    const isDone = completedTopics.includes(topic.id);

                    return (
                      <button
                        key={topic.id}
                        type="button"
                        onClick={() => onSelectTopic(topic, mod)}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs transition flex items-center justify-between gap-2 cursor-pointer ${
                          isActive
                            ? 'bg-blue-600 text-white font-bold shadow-sm'
                            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate flex-1 min-w-0">
                          {isDone ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          ) : (
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-700 shrink-0" />
                          )}
                          <span className="truncate">{topic.topicTitle}</span>
                        </div>
                        <span className={`text-[10px] font-mono shrink-0 ${isActive ? 'text-blue-200' : 'text-slate-400'}`}>
                          {topic.estimatedReadTime}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
};

