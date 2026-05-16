import Link from "next/link";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,#fff8d9_0%,#e8e2a0_42%,#f5b3df_100%)] px-6 py-10 text-[#240366]">
      <section className="mx-auto max-w-5xl">
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
            Start assessment
          </Link>
        </div>

        <div className="rounded-[2.5rem] border border-[#240366]/10 bg-white/75 p-8 shadow-[0_24px_70px_rgba(36,3,102,0.14)] backdrop-blur md:p-12">
          <div className="inline-flex rounded-full bg-[#f5b3df]/45 px-4 py-2 text-sm font-bold text-[#240366]">
            Simple pricing
          </div>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-start">
            <div>
              <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">
                Free to take. $1.99 to unlock your full report.
              </h1>

              <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-[#240366]/72">
                Career Fit Finder is a 22-question self-assessment for adults
                who want clearer direction around their next career move. You
                can complete the assessment for free. After your answers are
                analyzed, you can choose to unlock the full personalized report.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#e8e2a0]/65 p-6 ring-1 ring-[#240366]/10">
              <div className="text-sm font-bold uppercase tracking-[0.15em] text-[#240366]/55">
                One-time unlock
              </div>

              <div className="mt-3 text-7xl font-extrabold">$1.99</div>

              <p className="mt-4 leading-7 text-[#240366]/70">
                No subscription. No hidden membership. One payment unlocks your
                saved report.
              </p>

              <Link
                href="/quiz"
                className="mt-6 flex h-16 items-center justify-center rounded-full bg-[#fffdf8] text-base font-extrabold text-[#240366] shadow-lg shadow-[#240366]/15 ring-1 ring-[#240366]/15 transition hover:bg-[#f5b3df]"
              >
                Start Assessment
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl bg-[#e8e2a0]/55 p-6 ring-1 ring-[#240366]/10">
              <h2 className="text-xl font-extrabold">Free assessment</h2>
              <p className="mt-3 leading-7 text-[#240366]/68">
                Answer 22 focused questions about your current career situation,
                energy, skills, values, responsibilities, and readiness.
              </p>
            </div>

            <div className="rounded-3xl bg-[#f5b3df]/40 p-6 ring-1 ring-[#240366]/10">
              <h2 className="text-xl font-extrabold">Paid report</h2>
              <p className="mt-3 leading-7 text-[#240366]/68">
                Unlock your personalized career direction, score breakdown,
                main bottleneck, risk warnings, scripts, and next-step plan.
              </p>
            </div>

            <div className="rounded-3xl bg-[#86cf6d]/28 p-6 ring-1 ring-[#240366]/10">
              <h2 className="text-xl font-extrabold">Instant access</h2>
              <p className="mt-3 leading-7 text-[#240366]/68">
                After successful checkout, your private report link opens
                automatically.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-[2rem] border border-[#240366]/10 bg-[#fffdf8]/85 p-6">
            <h2 className="text-2xl font-extrabold">What is included?</h2>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {[
                "Primary career direction result",
                "Secondary career signal",
                "Why you got this result",
                "Full score breakdown across 10 dimensions",
                "Main bottleneck and recommended next move",
                "Career risk warnings and mistakes to avoid",
                "Ideal work environment guidance",
                "28-day action plan",
                "First 24-hour action",
                "Useful scripts for career conversations",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-2xl bg-white/80 p-4 ring-1 ring-[#240366]/10"
                >
                  <span className="font-bold text-[#86cf6d]">✓</span>
                  <span className="font-semibold text-[#240366]/75">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-[#240366]/10 bg-white/70 p-6">
              <h2 className="text-2xl font-extrabold">Is this a subscription?</h2>
              <p className="mt-3 leading-7 text-[#240366]/68">
                No. Career Fit Finder currently sells a one-time personalized
                report unlock for $1.99.
              </p>
            </div>

            <div className="rounded-3xl border border-[#240366]/10 bg-white/70 p-6">
              <h2 className="text-2xl font-extrabold">Is this career counseling?</h2>
              <p className="mt-3 leading-7 text-[#240366]/68">
                No. It is a practical self-assessment based on your selected
                answers. It is designed for reflection and decision support, not
                professional diagnosis or guaranteed outcomes.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-3xl bg-[#240366] p-6 text-[#e8e2a0]">
            <h2 className="text-2xl font-extrabold">Payment and refund note</h2>
            <p className="mt-3 leading-8 text-[#e8e2a0]/85">
              Payments are processed securely through Paddle. Because the report
              is a digital product delivered instantly after purchase, refunds
              may be limited once the report has been accessed. Please review
              our refund policy before purchasing.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/refund"
                className="rounded-full bg-[#fffdf8] px-5 py-3 text-sm font-extrabold text-[#240366] transition hover:bg-[#f5b3df]"
              >
                Refund policy
              </Link>

              <Link
                href="/privacy"
                className="rounded-full bg-[#fffdf8] px-5 py-3 text-sm font-extrabold text-[#240366] transition hover:bg-[#f5b3df]"
              >
                Privacy policy
              </Link>

              <Link
                href="/terms"
                className="rounded-full bg-[#fffdf8] px-5 py-3 text-sm font-extrabold text-[#240366] transition hover:bg-[#f5b3df]"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}