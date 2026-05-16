import ReviewCarousel from "./components/ReviewCarousel";

export default function Home() {
  return (
    <main className="min-h-screen text-[#240366]">
      <section className="mx-auto flex max-w-6xl flex-col items-center justify-center px-6 pb-16 pt-20 text-center">
        <div className="mb-6 rounded-full border border-[#240366]/15 bg-white/60 px-4 py-2 text-sm text-[#240366]/70 shadow-sm backdrop-blur">
          5-minute self-assessment for adults 30+
        </div>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          Find the career direction that fits you best right now.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#240366]/70">
          Answer 28 carefully designed questions and get a personalized career
          path report based on your current situation, goals, energy, skills,
          responsibilities, and next-step readiness.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="/quiz"
            className="rounded-full bg-[#240366] px-8 py-4 text-base font-semibold text-[#e8e2a0] shadow-lg shadow-[#240366]/20 transition hover:bg-[#351189]"
          >
            Start Free Assessment
          </a>

          <a
            href="#how-it-works"
            className="rounded-full border border-[#240366]/15 bg-white/60 px-8 py-4 text-base font-semibold text-[#240366] shadow-sm backdrop-blur transition hover:bg-white/80"
          >
            See What You’ll Get
          </a>
        </div>

        <div
          id="how-it-works"
          className="mt-16 grid w-full gap-4 text-left md:grid-cols-3"
        >
          <div className="rounded-3xl border border-[#240366]/15 bg-white/65 p-6 shadow-xl shadow-[#240366]/10 backdrop-blur">
            <div className="mb-4 h-3 w-16 rounded-full bg-[#86cf6d]" />
            <h2 className="text-xl font-bold">Who it’s for</h2>
            <p className="mt-3 leading-7 text-[#240366]/68">
              Adults who feel unsure about their next career move, whether that
              means improving their current path, changing direction, or making
              a safer transition.
            </p>
          </div>

          <div className="rounded-3xl border border-[#240366]/15 bg-white/65 p-6 shadow-xl shadow-[#240366]/10 backdrop-blur">
            <div className="mb-4 h-3 w-16 rounded-full bg-[#f5b3df]" />
            <h2 className="text-xl font-bold">How it works</h2>
            <p className="mt-3 leading-7 text-[#240366]/68">
              Your answers are scored across stability, growth, skill leverage,
              values, autonomy, burnout risk, and change readiness.
            </p>
          </div>

          <div className="rounded-3xl border border-[#240366]/15 bg-white/65 p-6 shadow-xl shadow-[#240366]/10 backdrop-blur">
            <div className="mb-4 h-3 w-16 rounded-full bg-[#240366]" />
            <h2 className="text-xl font-bold">What you get</h2>
            <p className="mt-3 leading-7 text-[#240366]/68">
              A personalized report showing your career path type, biggest
              bottleneck, recommended direction, and 28-day action plan.
            </p>
          </div>
        </div>
      </section>

      <ReviewCarousel />

      <footer className="border-t border-[#240366]/10 bg-white/55 px-6 py-10 text-center backdrop-blur">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm text-[#240366]/55">
            Career Fit Finder is a practical self-assessment tool for career
            clarity. It is not professional career counseling or a guarantee of
            employment outcomes.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-5 text-sm font-semibold text-[#240366]/70">
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