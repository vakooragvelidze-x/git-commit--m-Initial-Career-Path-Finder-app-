import Link from "next/link";
import { notFound } from "next/navigation";
import { getQuizSessionById } from "../../../src/lib/quiz-sessions";
import { getPublicResultPreview } from "../../../src/lib/career-path/scoring";
import PaddleCheckoutButton from "../../components/PaddleCheckoutButton";

type PageProps = {
  params: Promise<{
    sessionId: string;
  }>;
};

export default async function LockedReportPage({ params }: PageProps) {
  const { sessionId } = await params;
  const session = await getQuizSessionById(sessionId);

  if (!session) {
    notFound();
  }

  const preview = getPublicResultPreview(session.report);

  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,#fff8d9_0%,#e8e2a0_42%,#f5b3df_100%)] px-6 py-8 text-[#240366]">
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

        <div className="mb-10 text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#240366] text-3xl text-[#e8e2a0] shadow-lg shadow-[#240366]/25">
            🔒
          </div>

          <div className="mb-4 inline-flex rounded-full border border-[#240366]/12 bg-white/70 px-4 py-2 text-sm font-bold text-[#240366]/75 shadow-sm backdrop-blur">
            Your report is ready
          </div>

          <h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight md:text-7xl">
            Unlock your Career Fit Finder Report
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg font-medium leading-8 text-[#240366]/72">
            Your 22-question assessment has been analyzed. Unlock the full
            report to see your career direction, score breakdown, risk warnings,
            personalized next move, scripts, and 28-day action plan.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="rounded-[2.25rem] border border-[#240366]/10 bg-white/78 p-6 shadow-[0_24px_70px_rgba(36,3,102,0.14)] backdrop-blur md:p-8">
            <div className="inline-flex rounded-full bg-[#86cf6d]/25 px-4 py-2 text-sm font-bold text-[#240366] ring-1 ring-[#240366]/10">
              Full report preview
            </div>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight md:text-4xl">
              What unlocks inside
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-[#240366]/68">
              This is not just a result label. Your report explains why you got
              the result, what it means, what to avoid, and what to do next.
            </p>

            <div className="mt-7 space-y-3">
              {preview.lockedSections.map((section) => (
                <div
                  key={section}
                  className="flex items-center justify-between rounded-2xl border border-[#240366]/10 bg-[#fffdf8]/90 px-5 py-5"
                >
                  <span className="flex items-center gap-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#86cf6d] text-sm font-extrabold text-[#240366]">
                      ✓
                    </span>

                    <span className="text-lg font-bold text-[#240366]">
                      {section}
                    </span>
                  </span>

                  <span className="text-lg text-[#240366]/35">🔒</span>
                </div>
              ))}
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-[#e8e2a0]/55 p-5 ring-1 ring-[#240366]/10">
                <div className="text-sm font-semibold text-[#240366]/55">
                  Answers
                </div>
                <div className="mt-2 text-4xl font-extrabold">
                  {preview.answeredCount}
                </div>
              </div>

              <div className="rounded-2xl bg-[#f5b3df]/38 p-5 ring-1 ring-[#240366]/10">
                <div className="text-sm font-semibold text-[#240366]/55">
                  Dimensions
                </div>
                <div className="mt-2 text-4xl font-extrabold">
                  {preview.dimensionsAnalyzed}
                </div>
              </div>

              <div className="rounded-2xl bg-[#86cf6d]/28 p-5 ring-1 ring-[#240366]/10">
                <div className="text-sm font-semibold text-[#240366]/55">
                  Confidence
                </div>
                <div className="mt-2 text-4xl font-extrabold">
                  {preview.confidence}%
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-[#240366]/10 bg-white/60 px-5 py-4 text-sm text-[#240366]/55">
              Session ID: {session.id}
            </div>
          </div>

          <div className="rounded-[2.25rem] bg-[#240366] p-6 text-[#e8e2a0] shadow-[0_24px_70px_rgba(36,3,102,0.25)] md:p-8">
            <div className="inline-flex rounded-full bg-[#e8e2a0]/10 px-4 py-2 text-sm font-bold text-[#e8e2a0]">
              One-time unlock
            </div>

            <div className="mt-6 flex items-end gap-3">
              <div className="text-7xl font-extrabold tracking-tight">
                $1.99
              </div>
              <div className="pb-3 text-sm font-semibold text-[#e8e2a0]/55">
                USD
              </div>
            </div>

            <p className="mt-6 text-lg leading-8 text-[#e8e2a0]/82">
              Unlock your full personalized career report instantly. Designed
              for adults who want practical career clarity, not vague motivation.
            </p>

            <div className="mt-7 rounded-3xl border border-[#e8e2a0]/15 bg-white/8 p-5">
              <h3 className="font-extrabold text-[#e8e2a0]">
                Included in your report
              </h3>

              <div className="mt-4 space-y-3 text-sm leading-6 text-[#e8e2a0]/80">
                <div className="flex gap-3">
                  <span className="text-[#86cf6d]">✓</span>
                  <span>Your primary career direction type</span>
                </div>

                <div className="flex gap-3">
                  <span className="text-[#86cf6d]">✓</span>
                  <span>Why you got this result</span>
                </div>

                <div className="flex gap-3">
                  <span className="text-[#86cf6d]">✓</span>
                  <span>Full score breakdown across 10 dimensions</span>
                </div>

                <div className="flex gap-3">
                  <span className="text-[#86cf6d]">✓</span>
                  <span>Career risk warnings and mistakes to avoid</span>
                </div>

                <div className="flex gap-3">
                  <span className="text-[#86cf6d]">✓</span>
                  <span>28-day action plan and first 24-hour action</span>
                </div>

                <div className="flex gap-3">
                  <span className="text-[#86cf6d]">✓</span>
                  <span>Useful scripts for career conversations</span>
                </div>
              </div>
            </div>

            <PaddleCheckoutButton
              sessionId={session.id}
              accessToken={session.access_token}
            />

            <p className="mt-5 text-center text-xs leading-6 text-[#e8e2a0]/50">
              Secure checkout powered by Paddle. Your report link opens after
              successful payment.
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