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
    <main className="min-h-screen bg-[#f8f0e7] px-6 py-8 text-[#2f241d]">
      <section className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="rounded-full border border-[#ead8c5] bg-white/70 px-5 py-3 text-sm font-medium text-[#7a5b45] shadow-sm transition hover:bg-white hover:text-[#2f241d]"
          >
            ← Back to home
          </Link>

          <Link
            href="/quiz"
            className="rounded-full border border-[#ead8c5] bg-white/70 px-5 py-3 text-sm font-medium text-[#7a5b45] shadow-sm transition hover:bg-white hover:text-[#2f241d]"
          >
            Retake test
          </Link>
        </div>

        <div className="mb-10 text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#4a2d1f] text-3xl text-white shadow-lg">
            🔒
          </div>

          <div className="mb-4 inline-flex rounded-full border border-[#ead8c5] bg-white/70 px-4 py-2 text-sm font-medium text-[#8b6a50] shadow-sm">
            Your report is ready
          </div>

          <h1 className="mx-auto max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
            Unlock your personalized career report
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#725d4f]">
            Your answers have been analyzed. Unlock the full report to see
            your career path type, score breakdown, main bottleneck, recommended
            next move, and practical 28-day action plan.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2.25rem] border border-[#ead8c5] bg-white p-6 shadow-[0_18px_50px_rgba(74,45,31,0.08)] md:p-8">
            <div className="inline-flex rounded-full bg-[#f7eadc] px-4 py-2 text-sm font-semibold text-[#9a6a46]">
              Report preview
            </div>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
              Inside your report
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-[#77665b]">
              These sections are prepared from your answers and locked until the
              report is unlocked.
            </p>

            <div className="mt-7 space-y-3">
              {preview.lockedSections.map((section) => (
                <div
                  key={section}
                  className="flex items-center justify-between rounded-2xl border border-[#eadfd4] bg-[#fffdf9] px-5 py-5"
                >
                  <span className="flex items-center gap-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4a2d1f] text-sm text-white">
                      ✓
                    </span>

                    <span className="text-lg font-medium text-[#3b2d25]">
                      {section}
                    </span>
                  </span>

                  <span className="text-lg text-[#c99a74]">🔒</span>
                </div>
              ))}
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-[#faf2e9] p-5">
                <div className="text-sm text-[#8e7868]">Answers</div>
                <div className="mt-2 text-4xl font-bold">
                  {preview.answeredCount}
                </div>
              </div>

              <div className="rounded-2xl bg-[#faf2e9] p-5">
                <div className="text-sm text-[#8e7868]">Dimensions</div>
                <div className="mt-2 text-4xl font-bold">
                  {preview.dimensionsAnalyzed}
                </div>
              </div>

              <div className="rounded-2xl bg-[#faf2e9] p-5">
                <div className="text-sm text-[#8e7868]">Confidence</div>
                <div className="mt-2 text-4xl font-bold">
                  {preview.confidence}%
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-[#eadfd4] bg-[#fffaf4] px-5 py-4 text-sm text-[#8a7769]">
              Session ID: {session.id}
            </div>
          </div>

          <div className="rounded-[2.25rem] bg-gradient-to-b from-[#5c3828] via-[#44291e] to-[#291912] p-6 text-white shadow-[0_24px_60px_rgba(60,34,20,0.22)] md:p-8">
            <div className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-[#f5d8bd]">
              One-time unlock
            </div>

            <div className="mt-6 flex items-end gap-3">
              <div className="text-7xl font-bold tracking-tight">$1.99</div>
              <div className="pb-3 text-sm text-white/45">USD</div>
            </div>

            <p className="mt-6 text-lg leading-8 text-white/75">
              Unlock your full Career Fit Finder report instantly. This is a
              practical self-assessment designed to help you understand your next
              career direction more clearly.
            </p>

            <div className="mt-7 rounded-3xl border border-white/10 bg-white/8 p-5">
              <h3 className="font-semibold text-[#f8dec6]">
                What unlocks immediately
              </h3>

              <div className="mt-4 space-y-3 text-sm leading-6 text-white/75">
                <div className="flex gap-3">
                  <span className="text-[#f5d8bd]">✓</span>
                  <span>Your primary career path result</span>
                </div>

                <div className="flex gap-3">
                  <span className="text-[#f5d8bd]">✓</span>
                  <span>Your strongest secondary signal</span>
                </div>

                <div className="flex gap-3">
                  <span className="text-[#f5d8bd]">✓</span>
                  <span>Your main bottleneck and best next move</span>
                </div>

                <div className="flex gap-3">
                  <span className="text-[#f5d8bd]">✓</span>
                  <span>Personalized 28-day action plan</span>
                </div>
              </div>
            </div>

            <PaddleCheckoutButton
              sessionId={session.id}
              accessToken={session.access_token}
            />

            <p className="mt-5 text-center text-xs leading-6 text-white/45">
              Secure checkout powered by Paddle. Your report link opens after
              successful payment.
            </p>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-[#8c7a6d]">
          Career Fit Finder is a practical self-assessment. It is not a
          psychological, medical, financial, academic, or professional diagnosis.
          Results are based on your selected answers and are meant to provide
          direction, not guarantee outcomes.
        </p>
      </section>
    </main>
  );
}