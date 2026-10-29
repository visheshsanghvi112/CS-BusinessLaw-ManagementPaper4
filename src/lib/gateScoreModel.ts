import { GateScoreEstimate } from '@/types';

/**
 * Calculates normalized GATE Score (out of 1000) and predicts Estimated All India Rank (AIR)
 * based on IIT normalization parameters and recent GATE CS empirical score curves.
 */
export function calculateGateScoreEstimate(rawScore: number, totalMarks: number = 100): GateScoreEstimate {
  // Normalize raw score to a 100-mark baseline
  const normalizedMarks = totalMarks > 0 ? (rawScore / totalMarks) * 100 : 0;
  const clampedMarks = Math.max(-20, Math.min(100, normalizedMarks));

  const Mq = 28.5;  // Qualifying cutoff for General category
  const Mt = 78.5;  // Mean of top 0.1% candidates
  const Sq = 350;   // Score assigned to Mq
  const St = 900;   // Score assigned to Mt

  let gateScore = 0;
  if (clampedMarks >= Mq) {
    // Standard IIT formula
    gateScore = Sq + (St - Sq) * ((clampedMarks - Mq) / (Mt - Mq));
    gateScore = Math.min(1000, Math.round(gateScore));
  } else {
    // Proportional sub-cutoff scaling
    gateScore = Math.max(0, Math.round(Sq * (Math.max(0, clampedMarks) / Mq)));
  }

  // Derive Rank, Percentile, and Institute Admission Radar
  let estimatedAirRange = 'Rank > 25,000 (Below Cutoff)';
  let percentile = 65.0;
  let category: GateScoreEstimate['category'] = 'BELOW_CUTOFF';
  let eligibleColleges: GateScoreEstimate['eligibleColleges'] = [];

  if (gateScore >= 900) {
    estimatedAirRange = 'AIR 1 – 60';
    percentile = 99.95;
    category = 'TOP_IIT';
    eligibleColleges = [
      { institute: 'IISc Bengaluru', branch: 'M.Tech CSE / CSA / CDS', probability: 'Very High' },
      { institute: 'IIT Bombay', branch: 'M.Tech Computer Science & Engg', probability: 'Very High' },
      { institute: 'IIT Delhi', branch: 'M.Tech Computer Science & Engg', probability: 'Very High' },
      { institute: 'IIT Madras', branch: 'M.Tech Computer Science & Engg', probability: 'Very High' },
      { institute: 'PSU (ONGC / IOCL / POSOCO)', branch: 'Executive Trainee / Scientist', probability: 'Very High' }
    ];
  } else if (gateScore >= 800) {
    estimatedAirRange = 'AIR 61 – 250';
    percentile = 99.75;
    category = 'TOP_IIT';
    eligibleColleges = [
      { institute: 'IIT Madras', branch: 'M.Tech Computer Science', probability: 'Very High' },
      { institute: 'IIT Kanpur', branch: 'M.Tech Computer Science', probability: 'Very High' },
      { institute: 'IIT Kharagpur', branch: 'M.Tech Computer Science', probability: 'Very High' },
      { institute: 'IIT Roorkee', branch: 'M.Tech Computer Science', probability: 'Very High' },
      { institute: 'IIT Bombay', branch: 'M.Tech CSE (Interview / Round 2)', probability: 'High' }
    ];
  } else if (gateScore >= 700) {
    estimatedAirRange = 'AIR 251 – 750';
    percentile = 99.3;
    category = 'OLD_IIT';
    eligibleColleges = [
      { institute: 'IIT Guwahati', branch: 'M.Tech Computer Science', probability: 'Very High' },
      { institute: 'IIT (BHU) Varanasi', branch: 'M.Tech Computer Science', probability: 'Very High' },
      { institute: 'IIT Hyderabad', branch: 'M.Tech Computer Science', probability: 'High' },
      { institute: 'NIT Trichy', branch: 'M.Tech Computer Science', probability: 'Very High' },
      { institute: 'NIT Surathkal', branch: 'M.Tech Computer Science', probability: 'Very High' }
    ];
  } else if (gateScore >= 600) {
    estimatedAirRange = 'AIR 751 – 2,200';
    percentile = 98.2;
    category = 'NEW_IIT_TOP_NIT';
    eligibleColleges = [
      { institute: 'NIT Warangal', branch: 'M.Tech Computer Science', probability: 'Very High' },
      { institute: 'IIIT Hyderabad', branch: 'M.Tech Computer Science', probability: 'High' },
      { institute: 'IIT Indore / Ropar / Patna', branch: 'M.Tech CSE', probability: 'High' },
      { institute: 'NIT Calicut', branch: 'M.Tech Computer Science', probability: 'Very High' }
    ];
  } else if (gateScore >= 450) {
    estimatedAirRange = 'AIR 2,201 – 7,500';
    percentile = 94.0;
    category = 'QUALIFIED';
    eligibleColleges = [
      { institute: 'VNIT Nagpur / MNIT Jaipur', branch: 'M.Tech Computer Science', probability: 'High' },
      { institute: 'IIIT Delhi / IIIT Allahabad', branch: 'M.Tech CSE', probability: 'Moderate' },
      { institute: 'Top State Universities (DTU / NSUT)', branch: 'M.Tech CSE', probability: 'High' }
    ];
  } else if (gateScore >= 350) {
    estimatedAirRange = 'AIR 7,501 – 22,000 (Qualified)';
    percentile = 82.5;
    category = 'QUALIFIED';
    eligibleColleges = [
      { institute: 'Newer NITs / Central Universities', branch: 'M.Tech Computer Science', probability: 'Moderate' },
      { institute: 'State Govt Colleges', branch: 'M.Tech CSE', probability: 'High' }
    ];
  } else {
    estimatedAirRange = 'Rank > 25,000 (Below Cutoff)';
    percentile = Math.max(10, Math.round((gateScore / 350) * 80));
    category = 'BELOW_CUTOFF';
    eligibleColleges = [];
  }

  return {
    rawScore: Math.round(rawScore * 100) / 100,
    totalMarks,
    gateScore,
    estimatedAirRange,
    percentile,
    category,
    eligibleColleges
  };
}

