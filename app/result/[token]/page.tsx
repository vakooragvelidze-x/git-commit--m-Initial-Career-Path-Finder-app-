import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { getQuizSessionByAccessToken } from "../../../src/lib/quiz-sessions";
import {
  DIMENSION_KEYS,
  DIMENSION_PROFILES,
} from "../../../src/lib/career-path/scoring";
import type { DimensionKey } from "../../../src/lib/career-path/types";

type PageProps = {
  params: Promise<{
    token: string;
  }>;
};

function ScoreBar({
  label,
  meaning,
  score,
  color = "#86cf6d",
}: {
  label: string;
  meaning: string;
  score: number;
  color?: string;
}) {
  return (
    <div className="rounded-3xl border border-[#240366]/10 bg-[#fffdf8]/85 p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-extrabold text-[#240366]">{label}</h3>
          <p className="mt-1 text-sm leading-6 text-[#240366]/58">
            {meaning}
          </p>
        </div>

        <div className="shrink-0 text-xl font-extrabold text-[#240366]">
          {score}%
        </div>
      </div>

      <div className="mt-4 h-3 overflow-hidden rounded-full bg-[#240366]/10">
        <div
          className="h-full rounded-full"
          style={{ width: `${score}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}

function ChecklistCard({
  title,
  items,
  accent = "✓",
}: {
  title: string;
  items?: string[];
  accent?: string;
}) {
  if (!items || items.length === 0) return null;

  return (
    <div className="rounded-3xl border border-[#240366]/10 bg-white/72 p-6">
      <h2 className="text-2xl font-extrabold text-[#240366]">{title}</h2>

      <ul className="mt-4 space-y-3 text-[#240366]/70">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="font-bold text-[#86cf6d]">{accent}</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DetailItems({
  title,
  items,
}: {
  title: string;
  items?: { title: string; description: string }[];
}) {
  if (!items || items.length === 0) return null;

  return (
    <div className="rounded-3xl border border-[#240366]/10 bg-white/72 p-6">
      <h2 className="text-2xl font-extrabold text-[#240366]">{title}</h2>

      <div className="mt-5 space-y-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-[#240366]/10 bg-[#fffdf8]/80 p-5"
          >
            <h3 className="font-extrabold text-[#240366]">{item.title}</h3>
            <p className="mt-2 leading-7 text-[#240366]/68">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function ResultPage({ params }: PageProps) {
  const { token } = await params;
  const session = await getQuizSessionByAccessToken(token);

  if (!session) {
    notFound();
  }

  if (!session.paid) {
    redirect(`/locked/${session.id}`);
  }

  const report = session.report;
  const result = report.result;
  const secondary = report.secondary;

  const normalizedScores = report.normalizedDimensionScores || {};

  const strongestDimensions =
    report.strongestDimensions ||
    DIMENSION_KEYS.slice()
      .sort(
        (a, b) =>
          (normalizedScores[b] || 0) - (normalizedScores[a] || 0)
      )
      .slice(0, 3);

  const weakestDimensions =
    report.weakestDimensions ||
    DIMENSION_KEYS.slice()
      .sort(
        (a, b) =>
          (normalizedScores[a] || 0) - (normalizedScores[b] || 0)
      )
      .slice(0, 2);

  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,#fff8d9_0%,#e8e2a0_42%,#f5b3df_100%)] px-6 py-10 text-[#240366]">
      <section className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="rounded-full border border-[#240366]/12 bg-white/70 px-5 py-3 text-sm font-semibold text-[#240366] shadow-sm backdrop-blur transition hover:bg-white"
          >
            ← Back to home
          </Link>

          <Link
            href="/quiz"
            className="rounded-full border border-[#240366]/12 bg-white/70 px-5 py-3 text-sm font-semibold text-[#240366] shadow-sm backdrop-blur transition hover:bg-[#e8e2a0]"
          >
            Retake test
          </Link>
        </div>

        <div className="rounded-[2.5rem] border border-[#240366]/10 bg-white/78 p-8 shadow-[0_24px_70px_rgba(36,3,102,0.14)] backdrop-blur md:p-12">
          <div className="mb-5 inline-flex rounded-full bg-[#86cf6d]/30 px-4 py-2 text-sm font-bold text-[#240366] ring-1 ring-[#240366]/10">
            Full report unlocked
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
            <div>
              <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-[#240366] md:text-6xl">
                {result.reportHeadline || result.title}
              </h1>

              <p className="mt-5 max-w-3xl text-lg font-medium leading-8 text-[#240366]/72">
                {result.reportSubheadline || result.plainMeaning}
              </p>

              <p className="mt-5 max-w-3xl leading-8 text-[#240366]/68">
                {result.description}
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#240366]/10 bg-[#fffdf8]/90 p-6">
              <h2 className="text-xl font-extrabold">Your result snapshot</h2>

              <div className="mt-5 space-y-5">
                <div>
                  <div className="text-sm font-semibold text-[#240366]/55">
                    Primary result
                  </div>
                  <div className="mt-1 text-2xl font-extrabold">
                    {result.shortTitle}
                  </div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-[#240366]/55">
                    Secondary signal
                  </div>
                  <div className="mt-1 text-2xl font-extrabold">
                    {secondary.shortTitle}
                  </div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-[#240366]/55">
                    Confidence
                  </div>
                  <div className="mt-1 text-5xl font-extrabold">
                    {report.confidence}%
                  </div>
                </div>

                {result.careerRiskLevel && (
                  <div className="rounded-2xl bg-[#f5b3df]/35 p-4 ring-1 ring-[#240366]/10">
                    <div className="text-sm font-semibold text-[#240366]/55">
                      Career risk level
                    </div>
                    <div className="mt-1 text-2xl font-extrabold">
                      {result.careerRiskLevel}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl bg-[#e8e2a0]/55 p-5 ring-1 ring-[#240366]/10">
              <div className="text-sm font-semibold text-[#240366]/55">
                Answers analyzed
              </div>
              <div className="mt-2 text-4xl font-extrabold">
                {report.answeredCount}
              </div>
            </div>

            <div className="rounded-3xl bg-[#f5b3df]/42 p-5 ring-1 ring-[#240366]/10">
              <div className="text-sm font-semibold text-[#240366]/55">
                Career type
              </div>
              <div className="mt-2 text-2xl font-extrabold">
                {result.shortTitle}
              </div>
            </div>

            <div className="rounded-3xl bg-[#86cf6d]/30 p-5 ring-1 ring-[#240366]/10">
              <div className="text-sm font-semibold text-[#240366]/55">
                Report status
              </div>
              <div className="mt-2 text-2xl font-extrabold">Unlocked</div>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-[#240366]/10 bg-[#fffdf8]/85 p-6">
            <h2 className="text-2xl font-extrabold">
              Personalized summary
            </h2>
            <p className="mt-3 leading-8 text-[#240366]/70">
              {report.summary}
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-[#240366]/10 bg-white/72 p-6">
              <h2 className="text-2xl font-extrabold">
                Why you got this result
              </h2>

              <ul className="mt-4 space-y-3 text-[#240366]/70">
                {(report.whyThisResult || result.whyYouGotThisResult || []).map(
                  (item) => (
                    <li key={item} className="flex gap-3">
                      <span className="font-bold text-[#86cf6d]">✓</span>
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="rounded-3xl border border-[#240366]/10 bg-white/72 p-6">
              <h2 className="text-2xl font-extrabold">
                How to interpret it
              </h2>

              <p className="mt-3 leading-8 text-[#240366]/70">
                {result.decisionPattern || report.interpretation}
              </p>

              {result.riskExplanation && (
                <p className="mt-4 leading-8 text-[#240366]/70">
                  {result.riskExplanation}
                </p>
              )}
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-[#240366]/10 bg-[#fffdf8]/85 p-6">
              <h2 className="text-2xl font-extrabold">
                Your strongest career signals
              </h2>

              <div className="mt-5 space-y-4">
                {strongestDimensions.map((key) => {
                  const profile = DIMENSION_PROFILES[key as DimensionKey];
                  const score = normalizedScores[key] || 0;

                  return (
                    <ScoreBar
                      key={key}
                      label={profile.title}
                      meaning={profile.highScoreMeaning}
                      score={score}
                      color="#86cf6d"
                    />
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl border border-[#240366]/10 bg-[#fffdf8]/85 p-6">
              <h2 className="text-2xl font-extrabold">
                Areas to watch
              </h2>

              <div className="mt-5 space-y-4">
                {weakestDimensions.map((key) => {
                  const profile = DIMENSION_PROFILES[key as DimensionKey];
                  const score = normalizedScores[key] || 0;

                  return (
                    <ScoreBar
                      key={key}
                      label={profile.title}
                      meaning={profile.lowScoreMeaning}
                      score={score}
                      color="#f5b3df"
                    />
                  );
                })}
              </div>

              <p className="mt-5 text-sm leading-6 text-[#240366]/58">
                Lower scores are not automatically bad. They show which parts of
                your profile are less dominant right now.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-[#240366]/10 bg-white/72 p-6">
            <h2 className="text-2xl font-extrabold">
              Full score breakdown
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {DIMENSION_KEYS.map((key) => {
                const profile = DIMENSION_PROFILES[key];
                const score = normalizedScores[key] || 0;

                return (
                  <ScoreBar
                    key={key}
                    label={profile.title}
                    meaning={profile.plainMeaning}
                    score={score}
                    color="#240366"
                  />
                );
              })}
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-[#240366]/10 bg-white/72 p-6">
              <h2 className="text-2xl font-extrabold">Main bottleneck</h2>
              <p className="mt-3 leading-8 text-[#240366]/70">
                {result.mainBottleneck}
              </p>
            </div>

            <div className="rounded-3xl border border-[#240366]/10 bg-white/72 p-6">
              <h2 className="text-2xl font-extrabold">
                Recommended next move
              </h2>
              <p className="mt-3 leading-8 text-[#240366]/70">
                {result.bestMove}
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <DetailItems
              title="Ideal work environments"
              items={result.idealWorkEnvironment}
            />

            <DetailItems
              title="Poor-fit environments"
              items={result.poorFitEnvironments}
            />
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <DetailItems title="Best next role directions" items={result.bestNextRoles} />

            <ChecklistCard
              title="Personal operating advice"
              items={result.personalOperatingAdvice}
            />
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <ChecklistCard title="Best for" items={result.bestFor} />

            <ChecklistCard
              title="Avoid for now"
              items={[
                ...result.avoidForNow,
                ...(report.personalizedWarnings || []),
              ]}
              accent="•"
            />
          </div>

          {result.transitionStrategy && result.transitionStrategy.length > 0 && (
            <div className="mt-8 rounded-3xl border border-[#240366]/10 bg-[#fffdf8]/85 p-6">
              <h2 className="text-2xl font-extrabold">
                Your transition strategy
              </h2>

              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {result.transitionStrategy.map((step) => (
                  <div
                    key={step.title}
                    className="rounded-2xl border border-[#240366]/10 bg-white/75 p-5"
                  >
                    <h3 className="font-extrabold text-[#240366]">
                      {step.title}
                    </h3>
                    <p className="mt-2 leading-7 text-[#240366]/68">
                      {step.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8">
            <h2 className="text-3xl font-extrabold">Your 28-day action plan</h2>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {result.plan28Days.map((week) => (
                <div
                  key={week.week}
                  className="rounded-3xl border border-[#240366]/10 bg-[#fffdf8]/85 p-6"
                >
                  <div className="inline-flex rounded-full bg-[#240366] px-3 py-1 text-sm font-bold text-[#e8e2a0]">
                    {week.week}
                  </div>

                  <h3 className="mt-4 text-xl font-extrabold">
                    {week.focus}
                  </h3>

                  <ul className="mt-4 space-y-3 text-[#240366]/70">
                    {week.actions.map((action) => (
                      <li key={action} className="flex gap-3">
                        <span className="font-bold text-[#86cf6d]">✓</span>
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {report.recommendedExperiments &&
            report.recommendedExperiments.length > 0 && (
              <div className="mt-8 rounded-3xl border border-[#240366]/10 bg-white/72 p-6">
                <h2 className="text-2xl font-extrabold">
                  Career experiments to run
                </h2>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  {report.recommendedExperiments.map((experiment) => (
                    <div
                      key={experiment.title}
                      className="rounded-2xl border border-[#240366]/10 bg-[#fffdf8]/85 p-5"
                    >
                      <h3 className="font-extrabold text-[#240366]">
                        {experiment.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#240366]/62">
                        {experiment.purpose}
                      </p>

                      <ul className="mt-4 space-y-2 text-sm text-[#240366]/70">
                        {experiment.steps.map((step) => (
                          <li key={step} className="flex gap-2">
                            <span className="text-[#86cf6d]">✓</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

          {result.scripts && result.scripts.length > 0 && (
            <div className="mt-8 rounded-3xl border border-[#240366]/10 bg-[#fffdf8]/85 p-6">
              <h2 className="text-2xl font-extrabold">
                Useful scripts and prompts
              </h2>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {result.scripts.map((script) => (
                  <div
                    key={script.title}
                    className="rounded-2xl border border-[#240366]/10 bg-white/75 p-5"
                  >
                    <h3 className="font-extrabold text-[#240366]">
                      {script.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#240366]/58">
                      {script.context}
                    </p>

                    <div className="mt-4 rounded-2xl bg-[#240366] p-4 text-sm leading-7 text-[#e8e2a0]">
                      “{script.script}”
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {(result.first24Hours || report.nextBestAction) && (
            <div className="mt-8 rounded-3xl bg-[#240366] p-6 text-[#e8e2a0]">
              <h2 className="text-2xl font-extrabold">
                {result.first24Hours?.title || "Your first 24-hour action"}
              </h2>

              {result.first24Hours?.actions ? (
                <ul className="mt-4 space-y-3 text-[#e8e2a0]/88">
                  {result.first24Hours.actions.map((action) => (
                    <li key={action} className="flex gap-3">
                      <span>✓</span>
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 leading-8 text-[#e8e2a0]/88">
                  {report.nextBestAction}
                </p>
              )}
            </div>
          )}

          {result.finalGuidance && (
            <div className="mt-8 rounded-3xl border border-[#240366]/10 bg-[#86cf6d]/25 p-6">
              <h2 className="text-2xl font-extrabold">Final guidance</h2>
              <p className="mt-3 leading-8 text-[#240366]/75">
                {result.finalGuidance}
              </p>
            </div>
          )}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-[#240366]/50">
          Career Fit Finder is a practical self-assessment. It is not a
          psychological, medical, financial, academic, or professional diagnosis.
          Results are based on your selected answers and are meant to provide
          direction, not guarantee outcomes.
        </p>
      </section>
    </main>
  );
}