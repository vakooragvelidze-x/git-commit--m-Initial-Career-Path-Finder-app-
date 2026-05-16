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
    <main className="min-h-screen bg-[#f7f3ec] px-6 py-10 text-[#171717]">
      <section className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <Link href="/" className="text-sm font-medium text-black/55">
            ← Back to home
          </Link>

          <Link
            href="/quiz"
            className="rounded-full border border-black/10 bg-white px-5 py-2 text-sm font-semibold shadow-sm hover:bg-black/5"
          >
            Retake test
          </Link>
        </div>

        <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm md:p-12">
          <div className="mb-5 inline-flex rounded-full bg-black px-4 py-2 text-sm font-semibold text-white">
            Full report unlocked
          </div>

          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            {report.result.title}
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-black/60">
            {report.result.plainMeaning}
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl bg-[#f7f3ec] p-5">
              <div className="text-sm text-black/45">Confidence</div>
              <div className="mt-2 text-3xl font-bold">
                {report.confidence}%
              </div>
            </div>

            <div className="rounded-3xl bg-[#f7f3ec] p-5">
              <div className="text-sm text-black/45">Answers analyzed</div>
              <div className="mt-2 text-3xl font-bold">
                {report.answeredCount}
              </div>
            </div>

            <div className="rounded-3xl bg-[#f7f3ec] p-5">
              <div className="text-sm text-black/45">Secondary signal</div>
              <div className="mt-2 text-xl font-bold">
                {report.secondary.shortTitle}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-black/10 p-6">
              <h2 className="text-2xl font-semibold">What this means</h2>
              <p className="mt-3 leading-7 text-black/60">
                {report.result.description}
              </p>
            </div>

            <div className="rounded-3xl border border-black/10 p-6">
              <h2 className="text-2xl font-semibold">Main bottleneck</h2>
              <p className="mt-3 leading-7 text-black/60">
                {report.result.mainBottleneck}
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-black/10 p-6">
            <h2 className="text-2xl font-semibold">Recommended next move</h2>
            <p className="mt-3 leading-7 text-black/60">
              {report.result.bestMove}
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-black/10 p-6">
              <h2 className="text-2xl font-semibold">Best for</h2>
              <ul className="mt-4 space-y-2 text-black/60">
                {report.result.bestFor.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-black/10 p-6">
              <h2 className="text-2xl font-semibold">Avoid for now</h2>
              <ul className="mt-4 space-y-2 text-black/60">
                {report.result.avoidForNow.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Your 28-day action plan</h2>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {report.result.plan28Days.map((week) => (
                <div
                  key={week.week}
                  className="rounded-3xl border border-black/10 bg-[#f7f3ec] p-6"
                >
                  <div className="text-sm font-semibold text-black/45">
                    {week.week}
                  </div>

                  <h3 className="mt-2 text-xl font-semibold">{week.focus}</h3>

                  <ul className="mt-4 space-y-2 text-black/60">
                    {week.actions.map((action) => (
                      <li key={action}>• {action}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-3xl bg-black p-6 text-white">
            <h2 className="text-2xl font-semibold">Your first action</h2>
            <p className="mt-3 leading-7 text-white/65">
              {report.nextBestAction}
            </p>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-black/35">
          Career Path Finder is a practical self-assessment. It is not a
          psychological, medical, financial, academic, or professional diagnosis.
          Results are based on your selected answers and are meant to provide
          direction, not guarantee outcomes.
        </p>
      </section>
    </main>
  );
}