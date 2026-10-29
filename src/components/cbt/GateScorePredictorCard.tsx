'use client';

import React from 'react';
import { calculateGateScoreEstimate } from '@/lib/gateScoreModel';
import {
  Trophy,
  Award,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Building2,
  Target
} from 'lucide-react';

interface GateScorePredictorCardProps {
  rawScore: number;
  totalMarks: number;
}

export const GateScorePredictorCard: React.FC<GateScorePredictorCardProps> = ({
  rawScore,
  totalMarks
}) => {
  const estimate = calculateGateScoreEstimate(rawScore, totalMarks);

  const getScoreColor = (score: number) => {
    if (score >= 800) return 'text-emerald-400 border-emerald-500/40 bg-emerald-950/40';
    if (score >= 650) return 'text-blue-400 border-blue-500/40 bg-blue-950/40';
    if (score >= 450) return 'text-purple-400 border-purple-500/40 bg-purple-950/40';
    if (score >= 350) return 'text-amber-400 border-amber-500/40 bg-amber-950/40';
    return 'text-rose-400 border-rose-500/40 bg-rose-950/40';
  };

  const getProbabilityBadge = (prob: string) => {
    switch (prob) {
      case 'Very High':
        return 'bg-emerald-950 text-emerald-300 border-emerald-700/60';
      case 'High':
        return 'bg-blue-950 text-blue-300 border-blue-700/60';
      case 'Moderate':
        return 'bg-amber-950 text-amber-300 border-amber-700/60';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  return (
    <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950/40 border border-indigo-500/30 shadow-2xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shadow-inner shrink-0">
            <Trophy className="w-6 h-6 text-indigo-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-700/60 font-bold uppercase tracking-wider">
                IIT Normalization Model
              </span>
              <span className="text-xs text-slate-400">Based on Recent GATE CS Cutoffs</span>
            </div>
            <h3 className="font-black text-lg sm:text-xl text-white tracking-tight">
              GATE 2027 Score &amp; AIR Rank Forecaster
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400">Target Institute:</span>
          <span className="text-xs font-black text-white px-2.5 py-1 rounded-xl bg-slate-950 border border-slate-800 font-mono">
            IIT Madras (Host)
          </span>
        </div>
      </div>

      {/* Core Score & AIR Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Normalized Score (Out of 1000) */}
        <div className={`p-5 rounded-2xl border flex flex-col justify-between ${getScoreColor(estimate.gateScore)}`}>
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Normalized GATE Score
            </span>
            <Sparkles className="w-4 h-4 opacity-70" />
          </div>
          <div className="py-2">
            <div className="text-3xl sm:text-4xl font-black font-mono tracking-tight">
              {estimate.gateScore}
              <span className="text-sm font-normal text-slate-400 ml-1.5">/ 1000</span>
            </div>
          </div>
          <div className="text-[11px] text-slate-300">
            Scaled from raw {rawScore} / {totalMarks} marks
          </div>
        </div>

        {/* Estimated AIR Range */}
        <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Predicted All India Rank (AIR)
            </span>
            <TrendingUp className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="py-2">
            <div className="text-2xl sm:text-3xl font-black font-mono text-white tracking-tight">
              {estimate.estimatedAirRange}
            </div>
          </div>
          <div className="text-[11px] text-emerald-400 font-mono font-semibold">
            Estimated Percentile: ~{estimate.percentile}%
          </div>
        </div>

        {/* Admissions Category */}
        <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Eligibility Status
            </span>
            <Award className="w-4 h-4 text-indigo-400" />
          </div>
          <div className="py-2">
            <div className="text-lg sm:text-xl font-black text-white tracking-tight">
              {estimate.category === 'TOP_IIT' && 'Top IIT Direct Call 🌟'}
              {estimate.category === 'OLD_IIT' && 'Old IIT M.Tech Call 🎓'}
              {estimate.category === 'NEW_IIT_TOP_NIT' && 'Top NIT / New IIT Admit 🏛️'}
              {estimate.category === 'QUALIFIED' && 'GATE Qualified Candidate ✓'}
              {estimate.category === 'BELOW_CUTOFF' && 'Below General Cutoff ⚠️'}
            </div>
          </div>
          <div className="text-[11px] text-slate-400">
            {estimate.gateScore >= 350 ? 'Eligible for CCMT / COAP Counseling' : 'Need ~28.5 marks to qualify'}
          </div>
        </div>
      </div>

      {/* Target College & PSU Admission Radar */}
      {estimate.eligibleColleges.length > 0 && (
        <div className="space-y-3 pt-2 border-t border-slate-800/80">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>Target Institute Admission Feasibility Radar:</span>
            </h4>
            <span className="text-[11px] text-slate-400">M.Tech Computer Science</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {estimate.eligibleColleges.map((col, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-slate-950/90 border border-slate-800/90 flex items-center justify-between gap-3 text-xs"
              >
                <div>
                  <div className="font-bold text-white">{col.institute}</div>
                  <div className="text-[11px] text-slate-400">{col.branch}</div>
                </div>

                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border shrink-0 ${getProbabilityBadge(col.probability)}`}>
                  {col.probability} Chance
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

