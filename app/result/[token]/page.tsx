import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { getQuizSessionByAccessToken } from "../../../src/lib/quiz-sessions";

type PageProps = {
  params: Promise<{
    token: string;
  }>;
};

const dimensionLabels: Record<
  string,
  {
    title: string;
    meaning: string;
  }
> = {
  currentFit: {
    title: "Current fit",
    meaning: "How well your current role or field fits you right now.",
  },
  changeReadiness: {
    title: "Change readiness",
    meaning: "How ready you are to make a meaningful career move.",
  },
  stabilityNeed: {
    title: "Stability need",
    meaning: "How much safety, structure, and lower risk matter right now.",
  },
  skillLeverage: {
    title: "Skill leverage",
    meaning: "How much your existing skills can help you move forward.",
  },
  valuesNeed: {
    title: "Values alignment",
    meaning: "How strongly your work needs to match your personal values.",
  },
  autonomyNeed: {
    title: "Autonomy need",
    meaning: "How much independence and control you want in your work.",
  },
  growthAmbition: {
    title: "Growth ambition",
    meaning: "How strongly you want more challenge, progress, or visibility.",
  },
  burnoutRisk: {
    title: "Burnout risk",
    meaning: "How much your energy level may affect your next decision.",
  },
  riskTolerance: {
    title: "Risk tolerance",
    meaning: "How comfortable you are with uncertainty and career risk.",
  },
  learningCapacity: {
    title: "Learning capacity",
    meaning: "How much space you currently have to learn or retrain.",
  },
};

function getDimensionTitle(key: string) {
  return dimensionLabels[key]?.title || key;
}

function getDimensionMeaning(key: string) {
  return dimensionLabels[key]?.meaning || "A measured part of your career profile.";
}

function getDimensionInsights(scores: Record<string, number>) {
  const entries = Object.entries(scores).map(([key, score]) => ({
    key,
    score: Number(score),
    title: getDimensionTitle(key),
    meaning: getDimensionMeaning(key),
  }));

  const strongest = [...entries].sort((a, b) => b.score - a.score).slice(0, 3);
  const focusAreas = [...entries].sort((a, b) => a.score - b.score).slice(0, 2);

  return {
    entries,
    strongest,
    focusAreas,
  };
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
  const dimensionScores = report.normalizedDimensionScores || {};
  const { entries, strongest, focusAreas } = getDimensionInsights(dimensionScores);

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

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-[#240366] md:text-6xl">
                {report.result.title}
              </h1>

              <p className="mt-5 max-w-3xl text-lg font-medium leading-8 text-[#240366]/72">
                {report.result.plainMeaning}
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#240366]/10 bg-[#fffdf8]/85 p-6">
              <h2 className="text-xl font-extrabold">Your result snapshot</h2>

              <div className="mt-5 space-y-4">
                <div>
                  <div className="text-sm font-semibold text-[#240366]/55">
                    Primary result
                  </div>
                  <div className="mt-1 text-2xl font-extrabold">
                    {report.result.shortTitle}
                  </div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-[#240366]/55">
                    Secondary signal
                  </div>
                  <div className="mt-1 text-2xl font-extrabold">
                    {report.secondary.shortTitle}
                  </div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-[#240366]/55">
                    Confidence
                  </div>
                  <div className="mt-1 text-4xl font-extrabold">
                    {report.confidence}%
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl bg-[#e8e2a0]/50 p-5 ring-1 ring-[#240366]/10">
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
                {report.result.shortTitle}
              </div>
            </div>

            <div className="rounded-3xl bg-[#86cf6d]/30 p-5 ring-1 ring-[#240366]/10">
              <div className="text-sm font-semibold text-[#240366]/55">
                Report status
              </div>
              <div className="mt-2 text-2xl font-extrabold">
                Unlocked
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-[#240366]/10 bg-[#fffdf8]/85 p-6">
            <h2 className="text-2xl font-extrabold">Personalized summary</h2>
            <p className="mt-3 leading-8 text-[#240366]/70">
              {report.summary}
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-[#240366]/10 bg-white/70 p-6">
              <h2 className="text-2xl font-extrabold">What this means</h2>
              <p className="mt-3 leading-8 text-[#240366]/70">
                {report.result.description}
              </p>
            </div>

            <div className="rounded-3xl border border-[#240366]/10 bg-white/70 p-6">
              <h2 className="text-2xl font-extrabold">Secondary signal</h2>
              <p className="mt-3 leading-8 text-[#240366]/70">
                {report.secondary.description}
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-[#240366]/10 bg-[#fffdf8]/85 p-6">
              <h2 className="text-2xl font-extrabold">Your strongest signals</h2>

              <div className="mt-5 space-y-4">
                {strongest.map((item) => (
                  <div key={item.key}>
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="font-extrabold">{item.title}</div>
                        <div className="mt-1 text-sm leading-6 text-[#240366]/58">
                          {item.meaning}
                        </div>
                      </div>

                      <div className="text-xl font-extrabold">{item.score}%</div>
                    </div>

                    <div className="mt-3 h-3 overflow-hidden rounded-full bg-[#240366]/10">
                      <div
                        className="h-full rounded-full bg-[#86cf6d]"
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-[#240366]/10 bg-[#fffdf8]/85 p-6">
              <h2 className="text-2xl font-extrabold">Areas to watch</h2>

              <div className="mt-5 space-y-4">
                {focusAreas.map((item) => (
                  <div key={item.key}>
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="font-extrabold">{item.title}</div>
                        <div className="mt-1 text-sm leading-6 text-[#240366]/58">
                          {item.meaning}
                        </div>
                      </div>

                      <div className="text-xl font-extrabold">{item.score}%</div>
                    </div>

                    <div className="mt-3 h-3 overflow-hidden rounded-full bg-[#240366]/10">
                      <div
                        className="h-full rounded-full bg-[#f5b3df]"
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-sm leading-6 text-[#240366]/58">
                Low scores are not automatically bad. They simply show which
                parts of your career profile are less active right now.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-[#240366]/10 bg-white/70 p-6">
            <h2 className="text-2xl font-extrabold">Full score breakdown</h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {entries.map((item) => (
                <div
                  key={item.key}
                  className="rounded-2xl border border-[#240366]/10 bg-[#fffdf8]/80 p-5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="font-extrabold">{item.title}</div>
                      <div className="mt-1 text-sm leading-6 text-[#240366]/58">
                        {item.meaning}
                      </div>
                    </div>

                    <div className="text-xl font-extrabold">{item.score}%</div>
                  </div>

                  <div className="mt-4 h-3 overflow-hidden rounded-full bg-[#240366]/10">
                    <div
                      className="h-full rounded-full bg-[linear-gradient(90deg,#240366_0%,#f5b3df_70%,#86cf6d_100%)]"
                      style={{ width: `${item.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-[#240366]/10 bg-white/70 p-6">
              <h2 className="text-2xl font-extrabold">Main bottleneck</h2>
              <p className="mt-3 leading-8 text-[#240366]/70">
                {report.result.mainBottleneck}
              </p>
            </div>

            <div className="rounded-3xl border border-[#240366]/10 bg-white/70 p-6">
              <h2 className="text-2xl font-extrabold">Recommended next move</h2>
              <p className="mt-3 leading-8 text-[#240366]/70">
                {report.result.bestMove}
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-[#240366]/10 bg-white/70 p-6">
              <h2 className="text-2xl font-extrabold">Best for</h2>
              <ul className="mt-4 space-y-3 text-[#240366]/70">
                {report.result.bestFor.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="font-bold text-[#86cf6d]">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-[#240366]/10 bg-white/70 p-6">
              <h2 className="text-2xl font-extrabold">Avoid for now</h2>
              <ul className="mt-4 space-y-3 text-[#240366]/70">
                {report.result.avoidForNow.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="font-bold text-[#f5b3df]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-3xl font-extrabold">Your 28-day action plan</h2>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {report.result.plan28Days.map((week) => (
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

          <div className="mt-8 rounded-3xl bg-[#240366] p-6 text-[#e8e2a0]">
            <h2 className="text-2xl font-extrabold">Your first 24-hour action</h2>
            <p className="mt-3 leading-8 text-[#e8e2a0]/88">
              {report.nextBestAction}
            </p>
          </div>
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