export type ResultKey =
  | "stability_planner"
  | "current_path_optimizer"
  | "skill_repositioner"
  | "purposeful_switcher"
  | "independent_builder"
  | "growth_accelerator";

export type DimensionKey =
  | "currentFit"
  | "changeReadiness"
  | "stabilityNeed"
  | "skillLeverage"
  | "valuesNeed"
  | "autonomyNeed"
  | "growthAmbition"
  | "burnoutRisk"
  | "riskTolerance"
  | "learningCapacity";

export type ScoreMap<T extends string> = Partial<Record<T, number>>;

export type AnswerOption = {
  id: string;
  label: string;
  helper?: string;
  dimensions: ScoreMap<DimensionKey>;
  results: ScoreMap<ResultKey>;
};

export type Question = {
  id: string;
  section: string;
  question: string;
  options: AnswerOption[];
};

export type ResultDefinition = {
  key: ResultKey;
  title: string;
  shortTitle: string;
  plainMeaning: string;
  description: string;
  mainBottleneck: string;
  bestMove: string;
  avoidForNow: string[];
  bestFor: string[];
  firstStep: string;
  plan28Days: {
    week: string;
    focus: string;
    actions: string[];
  }[];
};

export type CareerPathReport = {
  resultKey: ResultKey;
  result: ResultDefinition;
  secondaryKey: ResultKey;
  secondary: ResultDefinition;
  confidence: number;
  answeredCount: number;
  resultScores: Record<ResultKey, number>;
  normalizedResultScores: Record<ResultKey, number>;
  dimensionScores: Record<DimensionKey, number>;
  normalizedDimensionScores: Record<DimensionKey, number>;
  summary: string;
  interpretation: string;
  nextBestAction: string;
  generatedAt: string;
};