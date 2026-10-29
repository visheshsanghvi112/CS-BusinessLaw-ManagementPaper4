'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MistakeRecord, MistakeErrorTag, GateSubjectId } from '@/types';
import {
  getMistakeRecords,
  updateMistakeTag,
  removeMistakeRecord,
  clearMistakeRecords,
  createNewSession,
  getSavedCandidateName,
  toggleQuestionBookmark,
  getBookmarkedQuestionIds
} from '@/lib/storage';
import { QUESTION_BANK, SUBJECT_METADATA } from '@/lib/questionBank';
import {
  AlertTriangle,
  Bookmark,
  CheckCircle2,
  Trash2,
  Play,
  X,
  Sparkles,
  HelpCircle,
  Tag,
  BookOpen,
  Filter,
  Search,
  RotateCcw
} from 'lucide-react';

interface MistakeNotebookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MistakeNotebookModal: React.FC<MistakeNotebookModalProps> = ({
  isOpen,
  onClose
}) => {
  const router = useRouter();
  const [mistakes, setMistakes] = useState<MistakeRecord[]>([]);
  const [activeTab, setActiveTab] = useState<'all' | 'unresolved' | 'resolved'>('unresolved');
  const [selectedTagFilter, setSelectedTagFilter] = useState<'all' | MistakeErrorTag>('all');
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<'all' | GateSubjectId>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [editingNotesId, setEditingNotesId] = useState<string | number | null>(null);
  const [noteText, setNoteText] = useState('');
  const [bookmarkedIds, setBookmarkedIds] = useState<(string | number)[]>([]);

  useEffect(() => {
    if (isOpen) {
      setMistakes(getMistakeRecords());
      setBookmarkedIds(getBookmarkedQuestionIds());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleToggleBookmark = (qid: string | number) => {
    toggleQuestionBookmark(qid);
    setBookmarkedIds(getBookmarkedQuestionIds());
  };

  const handleUpdateTag = (qid: string | number, tag: MistakeErrorTag) => {
    updateMistakeTag(qid, tag);
    setMistakes(getMistakeRecords());
  };

  const handleSaveNotes = (qid: string | number) => {
    const record = mistakes.find(m => String(m.questionId) === String(qid));
    if (record) {
      updateMistakeTag(qid, record.errorTag, noteText);
      setMistakes(getMistakeRecords());
    }
    setEditingNotesId(null);
  };

  const handleRemove = (qid: string | number) => {
    removeMistakeRecord(qid);
    setMistakes(getMistakeRecords());
  };

  const handleClearAll = () => {
    if (confirm('Are you sure you want to clear your entire Mistake Notebook?')) {
      clearMistakeRecords();
      setMistakes([]);
    }
  };

  const handleLaunchDrill = (onlyUnresolved = true) => {
    const candidateName = getSavedCandidateName();
    const targetMistakes = onlyUnresolved
      ? mistakes.filter(m => !m.isResolved)
      : mistakes;

    if (targetMistakes.length === 0) {
      alert('No mistake questions available for a drill!');
      return;
    }

    const questionIds = targetMistakes.map(m => m.questionId);
    createNewSession('custom-archive', candidateName, {
      specificQuestionIds: questionIds,
      mode: 'study',
      durationMinutes: Math.max(15, Math.round(questionIds.length * 2.5))
    });
    onClose();
    router.push('/test');
  };

  // Filtered mistakes
  const filtered = mistakes.filter(m => {
    if (activeTab === 'unresolved' && m.isResolved) return false;
    if (activeTab === 'resolved' && !m.isResolved) return false;
    if (selectedTagFilter !== 'all' && m.errorTag !== selectedTagFilter) return false;
    if (selectedSubjectFilter !== 'all' && m.subjectId !== selectedSubjectFilter) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const qObj = QUESTION_BANK.find(qb => String(qb.id) === String(m.questionId));
      const matchText = (qObj?.question || '').toLowerCase().includes(q) ||
        m.subjectName.toLowerCase().includes(q) ||
        (m.userNotes || '').toLowerCase().includes(q);
      if (!matchText) return false;
    }
    return true;
  });

  const unresolvedCount = mistakes.filter(m => !m.isResolved).length;
  const resolvedCount = mistakes.filter(m => m.isResolved).length;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-slate-800 bg-slate-950/80 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-base sm:text-lg text-white">
                  Smart Mistake Notebook &amp; Error Tracker
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  {mistakes.length} Total Logged
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Track concepts you missed, tag error causes, write personal correction notes, and re-test targeted drills.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action & Filter Bar */}
        <div className="p-4 border-b border-slate-800 bg-slate-900/60 space-y-3 shrink-0 text-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            {/* Resolution Tabs */}
            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setActiveTab('unresolved')}
                className={`px-3 py-1.5 rounded-lg font-bold transition flex items-center gap-1.5 ${
                  activeTab === 'unresolved' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span>Needs Remediation</span>
                <span className="px-1.5 py-0.2 rounded-full bg-slate-900/60 text-[10px] font-mono">
                  {unresolvedCount}
                </span>
              </button>
              <button
                onClick={() => setActiveTab('resolved')}
                className={`px-3 py-1.5 rounded-lg font-bold transition flex items-center gap-1.5 ${
                  activeTab === 'resolved' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span>Mastered ✓</span>
                <span className="px-1.5 py-0.2 rounded-full bg-slate-900/60 text-[10px] font-mono">
                  {resolvedCount}
                </span>
              </button>
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 rounded-lg font-bold transition ${
                  activeTab === 'all' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                All ({mistakes.length})
              </button>
            </div>

            {/* Drill Launch CTA */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleLaunchDrill(activeTab === 'unresolved')}
                disabled={filtered.length === 0}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold shadow-md transition flex items-center gap-1.5 disabled:opacity-50 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Launch Remediation Drill ({filtered.length}Q)</span>
              </button>

              {mistakes.length > 0 && (
                <button
                  type="button"
                  onClick={handleClearAll}
                  title="Clear all mistake records"
                  className="p-2 rounded-xl bg-slate-800 hover:bg-rose-950/80 text-slate-400 hover:text-rose-400 border border-slate-700 transition"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Sub-filters (Subject, Tag, Search) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
            <select
              value={selectedSubjectFilter}
              onChange={e => setSelectedSubjectFilter(e.target.value as any)}
              className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-300 focus:outline-none"
            >
              <option value="all">All Subjects</option>
              {SUBJECT_METADATA.map(s => (
                <option key={s.subjectId} value={s.subjectId}>
                  {s.subjectName}
                </option>
              ))}
            </select>

            <select
              value={selectedTagFilter}
              onChange={e => setSelectedTagFilter(e.target.value as any)}
              className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-300 focus:outline-none"
            >
              <option value="all">All Error Types</option>
              <option value="conceptual">🔴 Conceptual Gap</option>
              <option value="calculation">🟡 Calculation / NAT Precision</option>
              <option value="trap">🔵 Question Trap / Misread</option>
              <option value="unattempted">⚪ Unattempted / Time Shortage</option>
            </select>

            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search missed questions..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-300 focus:outline-none placeholder-slate-500"
              />
            </div>
          </div>
        </div>

        {/* Mistakes List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {filtered.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto opacity-70" />
              <h4 className="font-extrabold text-base text-white">
                {mistakes.length === 0 ? 'No Mistakes Logged Yet!' : 'No Matching Questions Found'}
              </h4>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                {mistakes.length === 0
                  ? 'Take a full mock test or subject drill. Any incorrect or missed answers will automatically be cataloged here for revision.'
                  : 'Try loosening your subject or error filters.'}
              </p>
            </div>
          ) : (
            filtered.map((item, idx) => {
              const q = QUESTION_BANK.find(qb => String(qb.id) === String(item.questionId));
              const isStarred = bookmarkedIds.includes(item.questionId);

              return (
                <div
                  key={item.questionId}
                  className={`p-4 sm:p-5 rounded-2xl border space-y-3 transition ${
                    item.isResolved
                      ? 'bg-slate-950/40 border-slate-800/80 opacity-80'
                      : 'bg-slate-950/80 border-slate-800 hover:border-slate-700 shadow-md'
                  }`}
                >
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-blue-900/60 text-blue-300 border border-blue-700/60">
                        {item.subjectName}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-purple-950 text-purple-300 border border-purple-800">
                        {item.questionType} • {item.marks}M
                      </span>
                      {item.isResolved && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-950 text-emerald-400 border border-emerald-800 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Mastered
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      {/* Star Bookmark */}
                      <button
                        type="button"
                        onClick={() => handleToggleBookmark(item.questionId)}
                        className={`p-1.5 rounded-lg border transition cursor-pointer ${
                          isStarred
                            ? 'bg-amber-950 text-amber-400 border-amber-600'
                            : 'bg-slate-900 text-slate-500 border-slate-800 hover:text-slate-300'
                        }`}
                        title={isStarred ? 'Remove Star' : 'Star this Question'}
                      >
                        <Bookmark className="w-3.5 h-3.5 fill-current" />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleRemove(item.questionId)}
                        className="text-slate-500 hover:text-rose-400 p-1.5 transition"
                        title="Remove from notebook"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Question Text */}
                  <div className="text-xs sm:text-sm font-semibold text-slate-200 leading-relaxed">
                    {q?.question || `Question ID: ${item.questionId}`}
                  </div>

                  {/* Tagging & Notes Area */}
                  <div className="pt-2 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    {/* Error Tag Selector */}
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-slate-400 flex items-center gap-1">
                        <Tag className="w-3 h-3 text-blue-400" />
                        <span>Error Type:</span>
                      </span>
                      <select
                        value={item.errorTag}
                        onChange={e => handleUpdateTag(item.questionId, e.target.value as MistakeErrorTag)}
                        className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 text-xs focus:outline-none"
                      >
                        <option value="conceptual">🔴 Conceptual Gap</option>
                        <option value="calculation">🟡 Calculation / Precision</option>
                        <option value="trap">🔵 Question Trap / Distractor</option>
                        <option value="unattempted">⚪ Unattempted</option>
                      </select>
                    </div>

                    {/* Correction Notes / Revise Theory */}
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          if (editingNotesId === item.questionId) {
                            handleSaveNotes(item.questionId);
                          } else {
                            setEditingNotesId(item.questionId);
                            setNoteText(item.userNotes || '');
                          }
                        }}
                        className="text-[11px] font-bold text-amber-400 hover:text-amber-300 transition"
                      >
                        {editingNotesId === item.questionId ? 'Save Note ✓' : item.userNotes ? 'Edit Note' : '+ Add Note'}
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          onClose();
                          router.push(`/study?subject=${item.subjectId}`);
                        }}
                        className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-blue-400 text-[11px] font-bold flex items-center gap-1 border border-slate-800 transition cursor-pointer"
                      >
                        <BookOpen className="w-3 h-3" />
                        <span>Revise Theory →</span>
                      </button>
                    </div>
                  </div>

                  {/* Inline Note Editor */}
                  {editingNotesId === item.questionId ? (
                    <div className="pt-2">
                      <textarea
                        value={noteText}
                        onChange={e => setNoteText(e.target.value)}
                        placeholder="Write why you got this wrong (e.g., 'Forgot that IEEE 754 denormalized exponent is -126 not -127')..."
                        rows={2}
                        className="w-full p-2.5 rounded-xl bg-slate-900 border border-amber-600/50 text-xs text-white placeholder-slate-500 focus:outline-none"
                      />
                    </div>
                  ) : item.userNotes ? (
                    <div className="p-2.5 rounded-xl bg-amber-950/20 border border-amber-500/30 text-amber-200/90 text-xs">
                      <span className="font-bold text-amber-400">My Note: </span>
                      <span>{item.userNotes}</span>
                    </div>
                  ) : null}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

