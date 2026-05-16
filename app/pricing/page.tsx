import Link from "next/link";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ec] px-6 py-12 text-[#171717]">
      <section className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-medium text-black/55">
          ← Back to home
        </Link>

        <div className="mt-10 rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm md:p-12">
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Pricing
          </h1>

          <p className="mt-5 text-lg leading-8 text-black/60">
            Career Path Finder offers a free self-assessment quiz. After
            completing the quiz, users may choose to unlock their personalized
            career direction report.
          </p>

          <div className="mt-8 rounded-3xl bg-[#f7f3ec] p-6">
            <h2 className="text-2xl font-semibold">
              Career Path Finder Report
            </h2>

            <div className="mt-4 text-5xl font-bold">$1.99</div>

            <p className="mt-4 leading-7 text-black/60">
              One-time payment. Includes your personalized career path result,
              score breakdown, main bottleneck, recommended next move, and
              28-day action plan.
            </p>
          </div>

          <div className="mt-8 space-y-3 text-sm leading-7 text-black/55">
            <p>No subscription is required.</p>
            <p>No hidden fees are added by Career Path Finder.</p>
            <p>
              Payment processing may be handled by a third-party payment
              provider.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}