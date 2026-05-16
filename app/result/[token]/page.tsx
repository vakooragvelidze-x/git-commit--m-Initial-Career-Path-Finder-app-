import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { getQuizSessionByAccessToken } from "../../../src/lib/quiz-sessions";

type PageProps = {
  params: Promise<{
    token: string;
  }>;
};

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

        <div className="rounded-[2.25rem] border border-[#240366]/10 bg-white/78 p-8 shadow-[0_24px_70px_rgba(36,3,102,0.14)] backdrop-blur md:p-12">
          <div className="mb-5 inline-flex rounded-full bg-[#86cf6d]/30 px-4 py-2 text-sm font-bold text-[#240366] ring-1 ring-[#240366]/10">
            Full report unlocked
          </div>

          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-[#240366] md:text-6xl">
            {report.result.title}
          </h1>

          <p className="mt-5 max-w-3xl text-lg font-medium leading-8 text-[#240366]/70">
            {report.result.plainMeaning}
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl bg-[#e8e2a0]/45 p-5 ring-1 ring-[#240366]/10">
              <div className="text-sm font-semibold text-[#240366]/55">
                Confidence
              </div>
              <div className="mt-2 text-4xl font-extrabold">
                {report.confidence}%
              </div>
            </div>

            <div className="rounded-3xl bg-[#f5b3df]/38 p-5 ring-1 ring-[#240366]/10">
              <div className="text-sm font-semibold text-[#240366]/55">
                Answers analyzed
              </div>
              <div className="mt-2 text-4xl font-extrabold">
                {report.answeredCount}
              </div>
            </div>

            <div className="rounded-3xl bg-[#86cf6d]/28 p-5 ring-1 ring-[#240366]/10">
              <div className="text-sm font-semibold text-[#240366]/55">
                Secondary signal
              </div>
              <div className="mt-2 text-2xl font-extrabold">
                {report.secondary.shortTitle}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-[#240366]/10 bg-white/70 p-6">
              <h2 className="text-2xl font-extrabold">What this means</h2>
              <p className="mt-3 leading-7 text-[#240366]/68">
                {report.result.description}
              </p>
            </div>

            <div className="rounded-3xl border border-[#240366]/10 bg-white/70 p-6">
              <h2 className="text-2xl font-extrabold">Main bottleneck</h2>
              <p className="mt-3 leading-7 text-[#240366]/68">
                {report.result.mainBottleneck}
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-[#240366]/10 bg-[#fffdf8]/80 p-6">
            <h2 className="text-2xl font-extrabold">Recommended next move</h2>
            <p className="mt-3 leading-7 text-[#240366]/68">
              {report.result.bestMove}
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-[#240366]/10 bg-white/70 p-6">
              <h2 className="text-2xl font-extrabold">Best for</h2>
              <ul className="mt-4 space-y-3 text-[#240366]/68">
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
              <ul className="mt-4 space-y-3 text-[#240366]/68">
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
                  className="rounded-3xl border border-[#240366]/10 bg-[#fffdf8]/80 p-6"
                >
                  <div className="inline-flex rounded-full bg-[#240366] px-3 py-1 text-sm font-bold text-[#e8e2a0]">
                    {week.week}
                  </div>

                  <h3 className="mt-4 text-xl font-extrabold">
                    {week.focus}
                  </h3>

                  <ul className="mt-4 space-y-3 text-[#240366]/68">
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
            <h2 className="text-2xl font-extrabold">Your first action</h2>
            <p className="mt-3 leading-7 text-[#e8e2a0]/85">
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