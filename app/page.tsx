export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f3ec] text-[#171717]">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-16 text-center">
        <div className="mb-6 rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-black/60 shadow-sm">
          5-minute self-assessment for adults 30+
        </div>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
          Find the career direction that fits you best right now.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-black/60">
          Answer 28 carefully designed questions and get a personalized career
          path report based on your current situation, goals, energy, skills,
          responsibilities, and next-step readiness.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="/quiz"
            className="rounded-full bg-black px-8 py-4 text-base font-semibold text-white transition hover:bg-black/85"
          >
            Start Free Assessment
          </a>

          <a
            href="#how-it-works"
            className="rounded-full border border-black/10 bg-white px-8 py-4 text-base font-semibold text-black transition hover:bg-black/5"
          >
            See What You’ll Get
          </a>
        </div>

        <div
          id="how-it-works"
          className="mt-16 grid w-full gap-4 text-left md:grid-cols-3"
        >
          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Who it’s for</h2>
            <p className="mt-3 leading-7 text-black/60">
              Adults who feel unsure about their next career move, whether that
              means improving their current path, changing direction, or making
              a safer transition.
            </p>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">How it works</h2>
            <p className="mt-3 leading-7 text-black/60">
              Your answers are scored across stability, growth, skill leverage,
              values, autonomy, burnout risk, and change readiness.
            </p>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">What you get</h2>
            <p className="mt-3 leading-7 text-black/60">
              A personalized report showing your career path type, biggest
              bottleneck, recommended direction, and 28-day action plan.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 bg-white/70 px-6 py-10 text-center">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm text-black/45">
            Career Fit Finder is a practical self-assessment tool for career
            clarity. It is not professional career counseling or a guarantee of
            employment outcomes.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-5 text-sm font-medium text-black/55">
            <a href="/pricing" className="transition hover:text-black">
              Pricing
            </a>
            <a href="/terms" className="transition hover:text-black">
              Terms of Service
            </a>
            <a href="/privacy" className="transition hover:text-black">
              Privacy Policy
            </a>
            <a href="/refund" className="transition hover:text-black">
              Refund Policy
            </a>
          </div>

          <p className="mt-5 text-xs text-black/35">
            © 2026 Career Fit Finder. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}