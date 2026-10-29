'use client';

import React, { useState, useMemo } from 'react';
import { GATE_STUDY_MODULES } from '@/lib/gateStudyNotes';
import { GateSubjectId } from '@/types';
import {
  X,
  RotateCw,
  CheckCircle2,
  AlertTriangle,
  BookMarked,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Shuffle,
  Layers
} from 'lucide-react';

interface Flashcard {
  id: string;
  subjectName: string;
  subjectId: string;
  topicTitle: string;
  title: string;
  formula?: string;
  explanation: string;
  examinerTrap?: string;
}

interface FormulaFlashcardsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSubjectId?: string;
}

export const FormulaFlashcardsModal: React.FC<FormulaFlashcardsModalProps> = ({
  isOpen,
  onClose,
  initialSubjectId
}) => {
  // Extract all formula items across all modules
  const allCards: Flashcard[] = useMemo(() => {
    const list: Flashcard[] = [];
    GATE_STUDY_MODULES.forEach(mod => {
      mod.topics.forEach(t => {
        t.keyFormulasAndTheorems.forEach((item, idx) => {
          list.push({
            id: `${t.id}-${idx}`,
            subjectName: mod.subjectName,
            subjectId: mod.subjectId,
            topicTitle: t.topicTitle,
            title: item.title,
            formula: item.formula,
            explanation: item.explanation,
            examinerTrap: t.examinerTraps && t.examinerTraps.length > 0 ? t.examinerTraps[0] : undefined
          });
        });
      });
    });
    return list;
  }, []);

  const [selectedSubject, setSelectedSubject] = useState<string>(initialSubjectId || 'all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [masteredIds, setMasteredIds] = useState<Set<string>>(new Set());

  const filteredCards = useMemo(() => {
    if (selectedSubject === 'all') return allCards;
    return allCards.filter(c => c.subjectId === selectedSubject);
  }, [allCards, selectedSubject]);

  if (!isOpen) return null;

  const currentCard = filteredCards[currentIndex] || filteredCards[0];
  const isCurrentMastered = currentCard ? masteredIds.has(currentCard.id) : false;

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex(prev => (prev < filteredCards.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : filteredCards.length - 1));
  };

  const handleToggleMastered = () => {
    if (!currentCard) return;
    setMasteredIds(prev => {
      const next = new Set(prev);
      if (next.has(currentCard.id)) {
        next.delete(currentCard.id);
      } else {
        next.add(currentCard.id);
      }
      return next;
    });
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    setCurrentIndex(Math.floor(Math.random() * filteredCards.length));
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 select-none animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl w-full max-w-2xl flex flex-col shadow-2xl overflow-hidden max-h-[92vh]">
        {/* Top Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-950/80 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <BookMarked className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-sm sm:text-base text-white">
                  Active Recall Formula Flashcards
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-700/60 font-bold">
                  {masteredIds.size} / {filteredCards.length} Mastered
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Test yourself on core equations, boundary conditions &amp; examiner traps.
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

        {/* Filter & Progress Bar */}
        <div className="px-5 py-3 border-b border-slate-800 bg-slate-900/60 flex items-center justify-between gap-3 text-xs shrink-0">
          <select
            value={selectedSubject}
            onChange={e => {
              setSelectedSubject(e.target.value);
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-200 text-xs focus:outline-none"
          >
            <option value="all">All Subjects ({allCards.length} Cards)</option>
            {GATE_STUDY_MODULES.map(m => (
              <option key={m.subjectId} value={m.subjectId}>
                {m.subjectName}
              </option>
            ))}
          </select>

          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-slate-400">
              Card {currentIndex + 1} of {filteredCards.length}
            </span>
            <button
              type="button"
              onClick={handleShuffle}
              title="Shuffle cards"
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
            >
              <Shuffle className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Flashcard Area */}
        <div className="p-5 sm:p-7 flex-1 flex flex-col justify-center items-center">
          {currentCard ? (
            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className={`w-full min-h-[300px] sm:min-h-[340px] p-6 sm:p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-xl relative ${
                isFlipped
                  ? 'bg-gradient-to-b from-indigo-950/60 via-slate-900 to-slate-900 border-indigo-500/60'
                  : 'bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 font-bold uppercase tracking-wider">
                  {currentCard.subjectName}
                </span>

                <span className="text-[11px] text-slate-500 font-mono">
                  {isFlipped ? 'Back (Answer & Details)' : 'Front (Click / Tap to Flip)'}
                </span>
              </div>

              {/* Card Body */}
              <div className="py-4 space-y-4 my-auto">
                {!isFlipped ? (
                  // Front side: Prompt / Theorem Question
                  <div className="space-y-3 text-center">
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block font-bold">
                      {currentCard.topicTitle}
                    </span>
                    <h2 className="text-lg sm:text-2xl font-black text-white tracking-tight leading-snug">
                      {currentCard.title}
                    </h2>
                    <p className="text-xs text-slate-400 max-w-md mx-auto pt-2">
                      What is the mathematical formulation, invariant property, and boundary condition for this?
                    </p>
                  </div>
                ) : (
                  // Back side: Formula & Explanation & Trap
                  <div className="space-y-3.5 animate-in fade-in">
                    <span className="text-xs font-mono text-indigo-400 font-bold uppercase tracking-wider block">
                      {currentCard.title}
                    </span>

                    {currentCard.formula && (
                      <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-sm sm:text-base font-bold text-emerald-300 overflow-x-auto shadow-inner">
                        {currentCard.formula}
                      </div>
                    )}

                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {currentCard.explanation}
                    </p>

                    {currentCard.examinerTrap && (
                      <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-600/40 text-amber-200 text-xs flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span><strong>Watch Out:</strong> {currentCard.examinerTrap}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Card Footer Hint */}
              <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-800/80">
                <span className="flex items-center gap-1">
                  <RotateCw className="w-3.5 h-3.5" /> Tap anywhere to flip
                </span>
                {isCurrentMastered ? (
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Mastered
                  </span>
                ) : (
                  <span className="text-slate-500">Unmastered</span>
                )}
              </div>
            </div>
          ) : null}
        </div>

        {/* Bottom Navigation & Mastery Controls */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-950 flex items-center justify-between gap-3 shrink-0">
          <button
            type="button"
            onClick={handlePrev}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-bold text-xs flex items-center gap-1 border border-slate-800 transition cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Prev</span>
          </button>

          <button
            type="button"
            onClick={handleToggleMastered}
            className={`px-4 py-2 rounded-xl font-extrabold text-xs transition flex items-center gap-1.5 cursor-pointer ${
              isCurrentMastered
                ? 'bg-emerald-950 text-emerald-300 border border-emerald-600'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
            }`}
          >
            <CheckCircle2 className={`w-4 h-4 ${isCurrentMastered ? 'text-emerald-400' : 'text-slate-400'}`} />
            <span>{isCurrentMastered ? 'Marked Mastered ✓' : 'Mark as Mastered'}</span>
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs flex items-center gap-1 shadow-md transition cursor-pointer"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

