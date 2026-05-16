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

export type PlanWeek = {
  week: string;
  focus: string;
  actions: string[];
};

export type ReportScript = {
  title: string;
  context: string;
  script: string;
};

export type ReportChecklistItem = {
  title: string;
  description: string;
};

export type ReportSection = {
  title: string;
  body: string;
};

export type CareerExperiment = {
  title: string;
  purpose: string;
  steps: string[];
};

export type DimensionProfile = {
  key: DimensionKey;
  title: string;
  shortTitle: string;
  plainMeaning: string;
  highScoreMeaning: string;
  lowScoreMeaning: string;
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
  plan28Days: PlanWeek[];

  /**
   * V2 paid-report fields.
   * These are optional for now so the current project does not break.
   * We will fill them in results.ts next.
   */
  reportHeadline?: string;
  reportSubheadline?: string;

  whyYouGotThisResult?: string[];
  decisionPattern?: string;
  careerRiskLevel?: "Low" | "Moderate" | "High";
  riskExplanation?: string;

  strongestSignals?: ReportChecklistItem[];
  watchOutFor?: ReportChecklistItem[];

  idealWorkEnvironment?: ReportChecklistItem[];
  poorFitEnvironments?: ReportChecklistItem[];

  bestNextRoles?: ReportChecklistItem[];
  transitionStrategy?: ReportSection[];

  personalOperatingAdvice?: string[];
  commonMistakes?: string[];

  careerExperiments?: CareerExperiment[];

  scripts?: ReportScript[];

  first24Hours?: {
    title: string;
    actions: string[];
  };

  finalGuidance?: string;
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

  /**
   * V2 generated-report fields.
   * These are produced by scoring.ts later.
   */
  strongestDimensions?: DimensionKey[];
  weakestDimensions?: DimensionKey[];
  whyThisResult?: string[];
  personalizedWarnings?: string[];
  recommendedExperiments?: CareerExperiment[];
  emailSummary?: string;

  generatedAt: string;
};

export type PublicResultPreview = {
  answeredCount: number;
  confidence: number;
  dimensionsAnalyzed: number;
  resultPrepared: boolean;
  lockedSections: string[];
};