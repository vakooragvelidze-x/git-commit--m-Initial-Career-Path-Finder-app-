import { QUESTIONS } from "./questions";
import { RESULT_DEFINITIONS } from "./results";
import type {
  CareerPathReport,
  DimensionKey,
  ResultKey,
  ScoreMap,
} from "./types";

const DIMENSION_KEYS: DimensionKey[] = [
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

const RESULT_KEYS: ResultKey[] = [
  "stability_planner",
  "current_path_optimizer",
  "skill_repositioner",
  "purposeful_switcher",
  "independent_builder",
  "growth_accelerator",
];

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

function applyRuleAdjustments(
  resultScores: Record<ResultKey, number>,
  dimensionScores: Record<DimensionKey, number>
) {
  const d = dimensionScores;

  // High stress + high stability need = avoid recommending risky moves too strongly.
  if (d.stabilityNeed >= 95 && d.burnoutRisk >= 65 && d.riskTolerance < 25) {
    resultScores.stability_planner += 22;
    resultScores.independent_builder -= 6;
    resultScores.purposeful_switcher -= 4;
  }

  // Strong current fit + ambition = likely upgrade current path, not escape.
  if (d.currentFit >= 75 && d.growthAmbition >= 65) {
    resultScores.current_path_optimizer += 12;
    resultScores.growth_accelerator += 12;
    resultScores.purposeful_switcher -= 5;
  }

  // Strong transferable skills + change readiness = repositioning should become stronger.
  if (d.skillLeverage >= 90 && d.changeReadiness >= 55 && d.valuesNeed < 85) {
    resultScores.skill_repositioner += 18;
  }

  // Strong values need + low current fit = meaningful switch becomes stronger.
  if (d.valuesNeed >= 90 && d.currentFit < 25 && d.changeReadiness >= 60) {
    resultScores.purposeful_switcher += 20;
  }

  // High autonomy + high stability pressure = independent path, but gradual.
  if (d.autonomyNeed >= 85 && d.stabilityNeed >= 75) {
    resultScores.independent_builder += 8;
    resultScores.stability_planner += 8;
  }

  // High autonomy + enough risk tolerance = independent builder stronger.
  if (d.autonomyNeed >= 85 && d.riskTolerance >= 55) {
    resultScores.independent_builder += 18;
  }

  // Low learning capacity + burnout = reduce aggressive pivot recommendations.
  if (d.learningCapacity < 20 && d.burnoutRisk >= 60) {
    resultScores.stability_planner += 14;
    resultScores.purposeful_switcher -= 8;
    resultScores.independent_builder -= 6;
  }

  // Strong ambition without strong autonomy/values signal = growth accelerator.
  if (
    d.growthAmbition >= 90 &&
    d.currentFit >= 45 &&
    d.autonomyNeed < 75 &&
    d.valuesNeed < 80
  ) {
    resultScores.growth_accelerator += 20;
  }

  // Prevent negative final result scores.
  for (const key of RESULT_KEYS) {
    resultScores[key] = Math.max(0, Math.round(resultScores[key]));
  }
}

function buildSummary(
  resultTitle: string,
  resultMeaning: string,
  secondaryTitle: string,
  confidence: number
) {
  return `Your primary result is ${resultTitle}. This means: ${resultMeaning} Your secondary signal is ${secondaryTitle}, which may influence how you should approach your next move. Confidence score: ${confidence}%.`;
}

function buildInterpretation(resultDescription: string, secondaryTitle: string) {
  return `${resultDescription} Your secondary result, ${secondaryTitle}, adds another layer. The best decision is likely a blend of your primary recommendation and your secondary signal, rather than a one-dimensional move.`;
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

  applyRuleAdjustments(resultScores, dimensionScores);

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
    clamp(58 + gapFactor * 28 + completionFactor * 10, 58, 96)
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
    normalizedResultScores: normalizeScores(resultScores),
    dimensionScores,
    normalizedDimensionScores: normalizeScores(dimensionScores),
    summary: buildSummary(
      result.title,
      result.plainMeaning,
      secondary.title,
      confidence
    ),
    interpretation: buildInterpretation(result.description, secondary.title),
    nextBestAction: result.firstStep,
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

export function getPublicResultPreview(report: CareerPathReport) {
  return {
    answeredCount: report.answeredCount,
    confidence: report.confidence,
    dimensionsAnalyzed: DIMENSION_KEYS.length,
    resultPrepared: true,
    lockedSections: [
      "Career path result",
      "Score breakdown",
      "Main bottleneck",
      "Recommended next move",
      "28-day action plan",
      "Personalized career advice",
    ],
  };
}