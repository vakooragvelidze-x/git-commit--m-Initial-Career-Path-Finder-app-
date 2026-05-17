import ReviewCarousel from "./components/ReviewCarousel";
import TrackEvent from "./components/TrackEvent";
export default function Home() {
  return (
    <main className="min-h-screen text-[#240366]">
      <TrackEvent eventName="homepage_viewed" />
      <section className="mx-auto flex max-w-6xl flex-col items-center justify-center px-6 pb-16 pt-20 text-center">
        <div className="mb-6 rounded-full border border-[#240366]/15 bg-white/65 px-4 py-2 text-sm font-bold text-[#240366]/70 shadow-sm backdrop-blur">
          3–5 minute self-assessment for adults 30+
        </div>

        <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-[#240366] md:text-7xl">
          Find the career direction that fits you best right now.
        </h1>

        <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-[#240366]/75">
          Answer 22 focused questions and get a personalized career report that
          explains your best next move, your main bottleneck, your strongest
          career signals, and your practical 28-day action plan.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
  <a
    href="/quiz"
    className="flex h-16 w-[270px] items-center justify-center rounded-full bg-[#fffdf8] text-base font-extrabold text-[#240366] shadow-lg shadow-[#240366]/15 ring-1 ring-[#240366]/15 transition hover:bg-[#f5b3df]"
  >
    Start Assessment
  </a>

  <a
    href="#report-preview"
    className="flex h-16 w-[270px] items-center justify-center rounded-full border border-[#240366]/15 bg-[#fffdf8] text-base font-extrabold text-[#240366] shadow-lg shadow-[#240366]/10 backdrop-blur transition hover:bg-[#e8e2a0]"
  >
    See What You’ll Get
  </a>
</div>
      </section>

      <section
        id="report-preview"
        className="mx-auto max-w-6xl px-6 pb-16 text-[#240366]"
      >
        <div className="rounded-[2.5rem] border border-[#240366]/10 bg-white/72 p-8 shadow-[0_24px_70px_rgba(36,3,102,0.12)] backdrop-blur md:p-12">
          <div className="inline-flex rounded-full bg-[#86cf6d]/30 px-4 py-2 text-sm font-bold ring-1 ring-[#240366]/10">
            Personalized report preview
          </div>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl">
                Not just a label. A clear explanation of what to do next.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#240366]/70">
                Your result is based on your answers across career fit,
                stability, energy, skill leverage, values, autonomy, growth,
                risk tolerance, and change readiness.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#240366] p-6 text-[#e8e2a0]">
              <h3 className="text-2xl font-extrabold">
                Inside the paid report
              </h3>

              <div className="mt-5 space-y-3 text-sm leading-6 text-[#e8e2a0]/88">
                <div className="flex gap-3">
                  <span className="text-[#86cf6d]">✓</span>
                  <span>Your primary career direction type</span>
                </div>

                <div className="flex gap-3">
                  <span className="text-[#86cf6d]">✓</span>
                  <span>Your secondary career signal</span>
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
                  <span>Main bottleneck and recommended next move</span>
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
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl bg-[#e8e2a0]/55 p-6 ring-1 ring-[#240366]/10">
              <h3 className="text-xl font-extrabold">22 focused questions</h3>
              <p className="mt-3 leading-7 text-[#240366]/68">
                Designed to be short enough to finish, but detailed enough to
                create a useful report.
              </p>
            </div>

            <div className="rounded-3xl bg-[#f5b3df]/40 p-6 ring-1 ring-[#240366]/10">
              <h3 className="text-xl font-extrabold">10 career dimensions</h3>
              <p className="mt-3 leading-7 text-[#240366]/68">
                Your answers are scored across fit, stability, skills, values,
                autonomy, growth, energy, risk, and readiness.
              </p>
            </div>

            <div className="rounded-3xl bg-[#86cf6d]/28 p-6 ring-1 ring-[#240366]/10">
              <h3 className="text-xl font-extrabold">28-day action plan</h3>
              <p className="mt-3 leading-7 text-[#240366]/68">
                The report gives you practical steps instead of vague motivation
                or generic advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-[#240366]/10 bg-white/68 p-6 shadow-xl shadow-[#240366]/10 backdrop-blur">
            <div className="mb-4 h-3 w-16 rounded-full bg-[#86cf6d]" />
            <h2 className="text-2xl font-extrabold">Who it’s for</h2>
            <p className="mt-3 leading-7 text-[#240366]/68">
              Adults who feel unsure about their next career move, whether that
              means improving their current path, changing direction, or making
              a safer transition.
            </p>
          </div>

          <div className="rounded-3xl border border-[#240366]/10 bg-white/68 p-6 shadow-xl shadow-[#240366]/10 backdrop-blur">
            <div className="mb-4 h-3 w-16 rounded-full bg-[#f5b3df]" />
            <h2 className="text-2xl font-extrabold">How it works</h2>
            <p className="mt-3 leading-7 text-[#240366]/68">
              Your answers are analyzed into a career direction profile, then
              translated into a practical report with next-step guidance.
            </p>
          </div>

          <div className="rounded-3xl border border-[#240366]/10 bg-white/68 p-6 shadow-xl shadow-[#240366]/10 backdrop-blur">
            <div className="mb-4 h-3 w-16 rounded-full bg-[#240366]" />
            <h2 className="text-2xl font-extrabold">What you get</h2>
            <p className="mt-3 leading-7 text-[#240366]/68">
              A personalized report showing your path type, strongest signals,
              biggest bottleneck, recommended direction, and 28-day plan.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-[2.5rem] border border-[#240366]/10 bg-white/72 p-8 shadow-[0_24px_70px_rgba(36,3,102,0.12)] backdrop-blur md:p-12">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <div className="inline-flex rounded-full bg-[#f5b3df]/45 px-4 py-2 text-sm font-bold text-[#240366]">
                Simple pricing
              </div>

              <h2 className="mt-5 text-4xl font-extrabold tracking-tight md:text-5xl">
                Free to take. $1.99 to unlock the full report.
              </h2>

              <p className="mt-5 leading-8 text-[#240366]/70">
                Complete the quiz first. After your answers are analyzed, you can
                decide whether to unlock the full personalized report.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#e8e2a0]/60 p-6 ring-1 ring-[#240366]/10">
              <div className="text-sm font-bold uppercase tracking-[0.15em] text-[#240366]/55">
                One-time unlock
              </div>

              <div className="mt-3 text-6xl font-extrabold">$1.99</div>

              <p className="mt-4 leading-7 text-[#240366]/68">
                No subscription. No hidden membership. Just a one-time unlock
                for your report.
              </p>

              <a
                href="/quiz"
                className="mt-6 block rounded-full bg-[#240366] px-8 py-4 text-center text-base font-extrabold text-[#e8e2a0] transition hover:bg-[#351189]"
              >
                Start Assessment
              </a>
            </div>
          </div>
        </div>
      </section>

      <ReviewCarousel />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-[2.5rem] border border-[#240366]/10 bg-white/65 p-8 backdrop-blur md:p-12">
          <h2 className="text-4xl font-extrabold tracking-tight">FAQ</h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl bg-[#fffdf8]/80 p-6 ring-1 ring-[#240366]/10">
              <h3 className="font-extrabold">Is this a subscription?</h3>
              <p className="mt-2 leading-7 text-[#240366]/68">
                No. The report unlock is a one-time $1.99 payment.
              </p>
            </div>

            <div className="rounded-3xl bg-[#fffdf8]/80 p-6 ring-1 ring-[#240366]/10">
              <h3 className="font-extrabold">How long does it take?</h3>
              <p className="mt-2 leading-7 text-[#240366]/68">
                Most people can finish the 22-question assessment in about 3–5
                minutes.
              </p>
            </div>

            <div className="rounded-3xl bg-[#fffdf8]/80 p-6 ring-1 ring-[#240366]/10">
              <h3 className="font-extrabold">
                Is this professional career counseling?
              </h3>
              <p className="mt-2 leading-7 text-[#240366]/68">
                No. It is a practical self-assessment based on your selected
                answers. It is meant for direction and reflection, not diagnosis.
              </p>
            </div>

            <div className="rounded-3xl bg-[#fffdf8]/80 p-6 ring-1 ring-[#240366]/10">
              <h3 className="font-extrabold">Do I get the result instantly?</h3>
              <p className="mt-2 leading-7 text-[#240366]/68">
                Yes. After checkout, your private report link opens
                automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#240366]/10 bg-white/55 px-6 py-10 text-center backdrop-blur">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm text-[#240366]/55">
            Career Fit Finder is a practical self-assessment tool for career
            clarity. It is not professional career counseling or a guarantee of
            employment outcomes.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-5 text-sm font-bold text-[#240366]/70">
            <a href="/pricing" className="transition hover:text-[#240366]">
              Pricing
            </a>
            <a href="/terms" className="transition hover:text-[#240366]">
              Terms of Service
            </a>
            <a href="/privacy" className="transition hover:text-[#240366]">
              Privacy Policy
            </a>
            <a href="/refund" className="transition hover:text-[#240366]">
              Refund Policy
            </a>
          </div>

          <p className="mt-5 text-xs text-[#240366]/45">
            © 2026 Career Fit Finder. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}