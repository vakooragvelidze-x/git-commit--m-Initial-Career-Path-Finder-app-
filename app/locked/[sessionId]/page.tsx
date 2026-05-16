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
    <main className="min-h-screen bg-[#f7f3ec] px-6 py-10 text-[#171717]">
      <section className="mx-auto max-w-6xl">
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

        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-black text-3xl text-white">
            🔒
          </div>

          <div className="mb-4 inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-black/55 shadow-sm">
            Your report is ready
          </div>

          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
            Unlock your Career Path Finder Report
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-black/60">
            We analyzed your answers and prepared your personalized career
            direction report, including your path type, main bottleneck, score
            breakdown, recommended next move, and 28-day action plan.
          </p>

          <div className="mx-auto mt-5 max-w-xl rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            Report session saved successfully.
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-semibold">Inside your report</h2>

            <div className="mt-6 space-y-3">
              {preview.lockedSections.map((section) => (
                <div
                  key={section}
                  className="flex items-center justify-between rounded-2xl border border-black/10 bg-[#fbfaf8] p-4 text-black/70"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-xs text-white">
                      ✓
                    </span>
                    {section}
                  </span>
                  <span className="text-black/35">🔒</span>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-[#f7f3ec] p-4">
                <div className="text-sm text-black/45">Answers</div>
                <div className="mt-1 text-2xl font-bold">
                  {preview.answeredCount}
                </div>
              </div>

              <div className="rounded-2xl bg-[#f7f3ec] p-4">
                <div className="text-sm text-black/45">Dimensions</div>
                <div className="mt-1 text-2xl font-bold">
                  {preview.dimensionsAnalyzed}
                </div>
              </div>

              <div className="rounded-2xl bg-[#f7f3ec] p-4">
                <div className="text-sm text-black/45">Confidence</div>
                <div className="mt-1 text-2xl font-bold">
                  {preview.confidence}%
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-[#f7f3ec] p-4 text-sm text-black/50">
              Session ID: {session.id}
            </div>
          </div>

          <div className="rounded-[2rem] bg-black p-6 text-white shadow-sm md:p-8">
            <div className="mb-5 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm text-white/75">
              One-time unlock
            </div>

            <div className="text-6xl font-bold tracking-tight">$1.99</div>

            <p className="mt-5 leading-7 text-white/65">
              Unlock your complete personalized report instantly. This is a
              practical self-assessment designed to help you understand your
              next career direction more clearly.
            </p>

            <div className="mt-6 rounded-3xl bg-white/10 p-4">
              <label className="text-sm font-medium text-white/60">
                Email for result access
              </label>

              
            
            </div>

            <Link
              href={`/result/${session.access_token}`}
              className="mt-6 block w-full rounded-full bg-white px-8 py-4 text-center text-base font-semibold text-black transition hover:bg-white/90"
            >
              <PaddleCheckoutButton
  sessionId={session.id}
  accessToken={session.access_token}
/>
            </Link>

            <p className="mt-4 text-center text-xs leading-6 text-white/40">
              Preview mode: this link opens the saved result directly. Later it
              will be replaced with a real checkout button.
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