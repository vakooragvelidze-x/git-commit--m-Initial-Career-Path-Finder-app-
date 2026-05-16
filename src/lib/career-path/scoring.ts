import { QUESTIONS } from "./questions";
import { RESULT_DEFINITIONS } from "./results";
import type {
  CareerExperiment,
  CareerPathReport,
  DimensionKey,
  DimensionProfile,
  PublicResultPreview,
  ResultKey,
  ScoreMap,
} from "./types";

export const DIMENSION_KEYS: DimensionKey[] = [
  "currentFit",
  "changeReadiness",
  "stabilityNeed",
  "skillLeverage",
  "valuesNeed",
  "autonomyNeed",
  "growthAmbition",
  "burnoutRisk",
  "riskTolerance",
  "learningCapacity",
];

export const RESULT_KEYS: ResultKey[] = [
  "stability_planner",
  "current_path_optimizer",
  "skill_repositioner",
  "purposeful_switcher",
  "independent_builder",
  "growth_accelerator",
];

export const DIMENSION_PROFILES: Record<DimensionKey, DimensionProfile> = {
  currentFit: {
    key: "currentFit",
    title: "Current Fit",
    shortTitle: "Fit",
    plainMeaning: "How well your current path fits you right now.",
    highScoreMeaning:
      "Your current field or direction may still contain useful value.",
    lowScoreMeaning:
      "Your current path may feel misaligned, draining, or too limited.",
  },
  changeReadiness: {
    key: "changeReadiness",
    title: "Change Readiness",
    shortTitle: "Readiness",
    plainMeaning: "How ready you are to take meaningful career action.",
    highScoreMeaning:
      "You may be ready to research, test, apply, reposition, or make a move.",
    lowScoreMeaning:
      "You may need more clarity, stability, or energy before taking action.",
  },
  stabilityNeed: {
    key: "stabilityNeed",
    title: "Stability Need",
    shortTitle: "Stability",
    plainMeaning: "How much safety and predictability matter right now.",
    highScoreMeaning:
      "Your next move should protect income, responsibilities, and energy.",
    lowScoreMeaning:
      "You may have more room to experiment or take calculated risks.",
  },
  skillLeverage: {
    key: "skillLeverage",
    title: "Skill Leverage",
    shortTitle: "Skills",
    plainMeaning: "How much your existing experience can help your next move.",
    highScoreMeaning:
      "Your past skills are likely useful and should be repositioned, not wasted.",
    lowScoreMeaning:
      "You may need more skill clarity, proof, practice, or retraining.",
  },
  valuesNeed: {
    key: "valuesNeed",
    title: "Values Alignment",
    shortTitle: "Values",
    plainMeaning: "How much your work needs to match what matters to you.",
    highScoreMeaning:
      "Meaning, identity, and personal fit are major drivers in your decision.",
    lowScoreMeaning:
      "Practical upgrades may matter more than deep purpose alignment right now.",
  },
  autonomyNeed: {
    key: "autonomyNeed",
    title: "Autonomy Need",
    shortTitle: "Autonomy",
    plainMeaning: "How much independence and control you want in work.",
    highScoreMeaning:
      "You may need more ownership, flexibility, or self-directed work.",
    lowScoreMeaning:
      "A structured role or organization may still fit you well.",
  },
  growthAmbition: {
    key: "growthAmbition",
    title: "Growth Ambition",
    shortTitle: "Growth",
    plainMeaning: "How strongly you want progress, challenge, or visibility.",
    highScoreMeaning:
      "You may be under-positioned and ready for a bigger opportunity.",
    lowScoreMeaning:
      "Progress may need to be slower, safer, or less pressure-heavy right now.",
  },
  burnoutRisk: {
    key: "burnoutRisk",
    title: "Energy Strain",
    shortTitle: "Energy",
    plainMeaning: "How much stress or low energy may affect your decision.",
    highScoreMeaning:
      "You should avoid making rushed decisions from exhaustion.",
    lowScoreMeaning:
      "You likely have more energy available for exploration or action.",
  },
  riskTolerance: {
    key: "riskTolerance",
    title: "Risk Tolerance",
    shortTitle: "Risk",
    plainMeaning: "How comfortable you are with uncertainty and career risk.",
    highScoreMeaning:
      "You may be able to test bolder options or independent paths.",
    lowScoreMeaning:
      "You likely need a gradual plan with safety built in.",
  },
  learningCapacity: {
    key: "learningCapacity",
    title: "Learning Capacity",
    shortTitle: "Learning",
    plainMeaning: "How much space you have to learn, retrain, or build proof.",
    highScoreMeaning:
      "You can likely handle skill-building or experimentation.",
    lowScoreMeaning:
      "You may need a simpler plan before adding new learning pressure.",
  },
};

function emptyDimensionScores(): Record<DimensionKey, number> {
  return DIMENSION_KEYS.reduce((acc, key) => {
    acc[key] = 0;
    return acc;
  }, {} as Record<DimensionKey, number>);
}

function emptyResultScores(): Record<ResultKey, number> {
  return RESULT_KEYS.reduce((acc, key) => {
    acc[key] = 0;
    return acc;
  }, {} as Record<ResultKey, number>);
}

function addToScores<T extends string>(
  target: Record<T, number>,
  scores?: ScoreMap<T>
) {
  if (!scores) return;

  for (const [key, value] of Object.entries(scores)) {
    target[key as T] = (target[key as T] || 0) + Number(value);
  }
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function normalizeScores<T extends string>(
  scores: Record<T, number>
): Record<T, number> {
  const values = Object.values(scores).map(Number);
  const max = Math.max(...values, 1);

  return Object.fromEntries(
    Object.entries(scores).map(([key, value]) => [
      key,
      Math.round(clamp((Number(value) / max) * 100, 0, 100)),
    ])
  ) as Record<T, number>;
}

function getTopKeys<T extends string>(
  scores: Record<T, number>,
  count: number
): T[] {
  return Object.entries(scores)
    .map(([key, value]) => ({
      key: key as T,
      value: Number(value),
    }))
    .sort((a, b) => b.value - a.value)
    .slice(0, count)
    .map((item) => item.key);
}

function getBottomKeys<T extends string>(
  scores: Record<T, number>,
  count: number
): T[] {
  return Object.entries(scores)
    .map(([key, value]) => ({
      key: key as T,
      value: Number(value),
    }))
    .sort((a, b) => a.value - b.value)
    .slice(0, count)
    .map((item) => item.key);
}

function applyRuleAdjustments(
  resultScores: Record<ResultKey, number>,
  normalizedDimensionScores: Record<DimensionKey, number>
) {
  const d = normalizedDimensionScores;

  if (d.stabilityNeed >= 80 && d.burnoutRisk >= 65 && d.riskTolerance <= 45) {
    resultScores.stability_planner += 18;
    resultScores.independent_builder -= 5;
    resultScores.purposeful_switcher -= 4;
  }

  if (d.currentFit >= 65 && d.growthAmbition >= 65) {
    resultScores.current_path_optimizer += 10;
    resultScores.growth_accelerator += 10;
    resultScores.purposeful_switcher -= 4;
  }

  if (d.skillLeverage >= 75 && d.changeReadiness >= 55 && d.valuesNeed < 85) {
    resultScores.skill_repositioner += 14;
  }

  if (d.valuesNeed >= 78 && d.currentFit <= 45 && d.changeReadiness >= 55) {
    resultScores.purposeful_switcher += 16;
  }

  if (d.autonomyNeed >= 78 && d.riskTolerance >= 60) {
    resultScores.independent_builder += 16;
  }

  if (d.autonomyNeed >= 75 && d.stabilityNeed >= 70) {
    resultScores.independent_builder += 6;
    resultScores.stability_planner += 6;
  }

  if (d.learningCapacity <= 40 && d.burnoutRisk >= 65) {
    resultScores.stability_planner += 12;
    resultScores.purposeful_switcher -= 5;
    resultScores.independent_builder -= 5;
  }

  if (
    d.growthAmbition >= 78 &&
    d.currentFit >= 45 &&
    d.autonomyNeed < 75 &&
    d.valuesNeed < 80
  ) {
    resultScores.growth_accelerator += 16;
  }

  if (d.skillLeverage >= 70 && d.growthAmbition >= 70 && d.currentFit >= 45) {
    resultScores.growth_accelerator += 8;
    resultScores.current_path_optimizer += 6;
  }

  for (const key of RESULT_KEYS) {
    resultScores[key] = Math.max(0, Math.round(resultScores[key]));
  }
}

function buildWhyThisResult(
  resultKey: ResultKey,
  strongestDimensions: DimensionKey[],
  normalizedDimensionScores: Record<DimensionKey, number>
) {
  const result = RESULT_DEFINITIONS[resultKey];
  const base = result.whyYouGotThisResult || [];

  const dimensionReasons = strongestDimensions.map((key) => {
    const profile = DIMENSION_PROFILES[key];
    const score = normalizedDimensionScores[key];

    return `${profile.title} scored strongly at ${score}%, which means ${profile.highScoreMeaning.toLowerCase()}`;
  });

  return [...base, ...dimensionReasons].slice(0, 6);
}

function buildPersonalizedWarnings(
  resultKey: ResultKey,
  normalizedDimensionScores: Record<DimensionKey, number>
) {
  const d = normalizedDimensionScores;
  const warnings: string[] = [];

  if (d.burnoutRisk >= 70) {
    warnings.push(
      "Your energy strain is high, so avoid making a permanent career decision during a temporary stress peak."
    );
  }

  if (d.stabilityNeed >= 75 && d.riskTolerance <= 45) {
    warnings.push(
      "Your need for stability is strong, so your next move should include financial and practical safety."
    );
  }

  if (d.autonomyNeed >= 75 && d.stabilityNeed >= 70) {
    warnings.push(
      "You may want independence, but your situation still needs structure. Build gradually instead of jumping blindly."
    );
  }

  if (d.valuesNeed >= 75 && d.learningCapacity <= 45) {
    warnings.push(
      "Your desire for meaningful work is strong, but your current learning capacity may be limited. Start with research before retraining."
    );
  }

  if (d.growthAmbition >= 75 && d.currentFit >= 50) {
    warnings.push(
      "Your ambition is high, but that does not automatically mean you need a new career. You may need stronger positioning first."
    );
  }

  if (d.skillLeverage >= 75 && d.changeReadiness >= 55) {
    warnings.push(
      "Your existing experience is valuable. Avoid starting from zero before mapping your transferable skills."
    );
  }

  const result = RESULT_DEFINITIONS[resultKey];

  return [...warnings, ...(result.commonMistakes || [])].slice(0, 6);
}

function pickRecommendedExperiments(
  resultKey: ResultKey,
  secondaryKey: ResultKey
): CareerExperiment[] {
  const primary = RESULT_DEFINITIONS[resultKey].careerExperiments || [];
  const secondary = RESULT_DEFINITIONS[secondaryKey].careerExperiments || [];

  return [...primary.slice(0, 2), ...secondary.slice(0, 1)].slice(0, 3);
}

function buildSummary(
  resultKey: ResultKey,
  secondaryKey: ResultKey,
  confidence: number,
  strongestDimensions: DimensionKey[]
) {
  const result = RESULT_DEFINITIONS[resultKey];
  const secondary = RESULT_DEFINITIONS[secondaryKey];

  const topSignals = strongestDimensions
    .map((key) => DIMENSION_PROFILES[key].shortTitle)
    .join(", ");

  return `Your primary result is ${result.title}. In plain language: ${result.plainMeaning} Your strongest score signals were ${topSignals}. Your secondary signal is ${secondary.title}, which means your best next move may need to combine your main result with some influence from that secondary pattern. Confidence score: ${confidence}%.`;
}

function buildInterpretation(resultKey: ResultKey, secondaryKey: ResultKey) {
  const result = RESULT_DEFINITIONS[resultKey];
  const secondary = RESULT_DEFINITIONS[secondaryKey];

  return `${result.description} Your secondary result, ${secondary.shortTitle}, adds another layer. This does not replace your primary result, but it shows what may influence your decision style, timing, or next move.`;
}

function buildEmailSummary(
  resultKey: ResultKey,
  secondaryKey: ResultKey,
  confidence: number
) {
  const result = RESULT_DEFINITIONS[resultKey];
  const secondary = RESULT_DEFINITIONS[secondaryKey];

  return `Your Career Fit Finder result is ${result.title} with ${confidence}% confidence. Your secondary signal is ${secondary.title}. Your best next move: ${result.bestMove}`;
}

export function calculateCareerPathReport(
  selectedAnswers: Record<string, string>
): CareerPathReport {
  const dimensionScores = emptyDimensionScores();
  const resultScores = emptyResultScores();
  let answeredCount = 0;

  for (const question of QUESTIONS) {
    const selectedOptionId = selectedAnswers[question.id];

    if (!selectedOptionId) continue;

    const option = question.options.find((item) => item.id === selectedOptionId);

    if (!option) continue;

    answeredCount += 1;
    addToScores(dimensionScores, option.dimensions);
    addToScores(resultScores, option.results);
  }

  const normalizedDimensionScoresBeforeRules = normalizeScores(dimensionScores);

  applyRuleAdjustments(resultScores, normalizedDimensionScoresBeforeRules);

  const sortedResults = RESULT_KEYS.map((key) => ({
    key,
    score: resultScores[key],
  })).sort((a, b) => b.score - a.score);

  const winnerKey = sortedResults[0]?.key || "stability_planner";
  const secondaryKey = sortedResults[1]?.key || "skill_repositioner";

  const topScore = sortedResults[0]?.score || 1;
  const secondScore = sortedResults[1]?.score || 0;

  const completionFactor = answeredCount / QUESTIONS.length;
  const gapFactor = (topScore - secondScore) / Math.max(topScore, 1);

  const confidence = Math.round(
    clamp(60 + gapFactor * 28 + completionFactor * 10, 60, 96)
  );

  const normalizedResultScores = normalizeScores(resultScores);
  const normalizedDimensionScores = normalizeScores(dimensionScores);

  const strongestDimensions = getTopKeys(normalizedDimensionScores, 3);
  const weakestDimensions = getBottomKeys(normalizedDimensionScores, 2);

  const whyThisResult = buildWhyThisResult(
    winnerKey,
    strongestDimensions,
    normalizedDimensionScores
  );

  const personalizedWarnings = buildPersonalizedWarnings(
    winnerKey,
    normalizedDimensionScores
  );

  const recommendedExperiments = pickRecommendedExperiments(
    winnerKey,
    secondaryKey
  );

  const result = RESULT_DEFINITIONS[winnerKey];
  const secondary = RESULT_DEFINITIONS[secondaryKey];

  return {
    resultKey: winnerKey,
    result,

    secondaryKey,
    secondary,

    confidence,
    answeredCount,

    resultScores,
    normalizedResultScores,

    dimensionScores,
    normalizedDimensionScores,

    summary: buildSummary(
      winnerKey,
      secondaryKey,
      confidence,
      strongestDimensions
    ),
    interpretation: buildInterpretation(winnerKey, secondaryKey),
    nextBestAction: result.firstStep,

    strongestDimensions,
    weakestDimensions,
    whyThisResult,
    personalizedWarnings,
    recommendedExperiments,
    emailSummary: buildEmailSummary(winnerKey, secondaryKey, confidence),

    generatedAt: new Date().toISOString(),
  };
}

export function createEmptyAnswerMap(): Record<string, string> {
  return QUESTIONS.reduce((acc, question) => {
    acc[question.id] = "";
    return acc;
  }, {} as Record<string, string>);
}

export function validateAnswerMap(selectedAnswers: Record<string, string>) {
  const errors: string[] = [];

  for (const question of QUESTIONS) {
    const selected = selectedAnswers[question.id];

    if (!selected) {
      errors.push(`Missing answer for question: ${question.id}`);
      continue;
    }

    const valid = question.options.some((option) => option.id === selected);

    if (!valid) {
      errors.push(`Invalid answer '${selected}' for question: ${question.id}`);
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

export function getPublicResultPreview(
  report: CareerPathReport
): PublicResultPreview {
  return {
    answeredCount: report.answeredCount,
    confidence: report.confidence,
    dimensionsAnalyzed: DIMENSION_KEYS.length,
    resultPrepared: true,
    lockedSections: [
      "Primary career direction result",
      "Secondary career signal",
      "Why you got this result",
      "Full score breakdown",
      "Main bottleneck",
      "Recommended next move",
      "Career risk warnings",
      "28-day action plan",
      "First 24-hour action",
      "Conversation scripts",
    ],
  };
}