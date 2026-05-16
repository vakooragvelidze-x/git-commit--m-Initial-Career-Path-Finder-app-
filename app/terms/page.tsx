import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,#fff8d9_0%,#e8e2a0_42%,#f5b3df_100%)] px-6 py-10 text-[#240366]">
      <section className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="inline-flex rounded-full border border-[#240366]/12 bg-white/70 px-5 py-3 text-sm font-semibold text-[#240366] shadow-sm backdrop-blur transition hover:bg-white"
        >
          ← Back to home
        </Link>

        <div className="mt-8 rounded-[2.5rem] border border-[#240366]/10 bg-white/78 p-8 shadow-[0_24px_70px_rgba(36,3,102,0.14)] backdrop-blur md:p-12">
          <div className="inline-flex rounded-full bg-[#f5b3df]/45 px-4 py-2 text-sm font-bold">
            Terms of Service
          </div>

          <h1 className="mt-6 text-5xl font-extrabold tracking-tight md:text-6xl">
            Terms of Service
          </h1>

          <p className="mt-4 text-sm font-semibold text-[#240366]/55">
            Last updated: May 2026
          </p>

          <div className="mt-8 space-y-8 leading-8 text-[#240366]/72">
            <section>
              <h2 className="text-2xl font-extrabold text-[#240366]">
                1. Overview
              </h2>
              <p className="mt-3">
                Career Fit Finder is a practical self-assessment tool designed
                to help users reflect on their career situation and receive a
                personalized report based on their selected answers.
              </p>
              <p className="mt-3">
                By using this website, completing the assessment, or purchasing
                a report unlock, you agree to these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-[#240366]">
                2. Digital product
              </h2>
              <p className="mt-3">
                The paid product is a one-time digital report unlock. After
                checkout, users receive access to their personalized Career Fit
                Finder report through a private result link.
              </p>
              <p className="mt-3">
                The report may include your career direction type, score
                breakdown, strongest signals, main bottleneck, recommended next
                move, risk warnings, scripts, and a 28-day action plan.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-[#240366]">
                3. Not professional advice
              </h2>
              <p className="mt-3">
                Career Fit Finder is not professional career counseling,
                psychological advice, medical advice, financial advice, legal
                advice, academic advice, or employment placement advice.
              </p>
              <p className="mt-3">
                The report is generated from your selected answers and is meant
                for reflection and decision support. It does not guarantee job
                offers, income changes, career outcomes, promotions, or personal
                results.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-[#240366]">
                4. User responsibility
              </h2>
              <p className="mt-3">
                You are responsible for how you interpret and use your report.
                You should consider your personal circumstances, financial
                situation, responsibilities, and professional needs before making
                career decisions.
              </p>
              <p className="mt-3">
                If you need professional support, you should speak with a
                qualified career advisor, coach, counselor, financial advisor,
                or other relevant professional.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-[#240366]">
                5. Payments
              </h2>
              <p className="mt-3">
                Payments are processed securely by Paddle or another authorized
                payment provider. Career Fit Finder does not store your full card
                details.
              </p>
              <p className="mt-3">
                The current report unlock price is $1.99 unless shown otherwise
                at checkout. Prices may change in the future.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-[#240366]">
                6. Refunds
              </h2>
              <p className="mt-3">
                Because the report is a digital product delivered instantly,
                refunds may be limited once the report has been accessed. Please
                review our Refund Policy before purchasing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-[#240366]">
                7. Acceptable use
              </h2>
              <p className="mt-3">
                You agree not to misuse the website, interfere with its
                operation, attempt unauthorized access, copy the product for
                resale, or use the service for unlawful purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-[#240366]">
                8. Changes to the service
              </h2>
              <p className="mt-3">
                We may update, improve, modify, or discontinue parts of the
                website or report structure at any time. We may also update
                these Terms when needed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-[#240366]">
                9. Contact
              </h2>
              <p className="mt-3">
                For support or policy questions, contact us at:
              </p>
              <p className="mt-2 font-bold text-[#240366]">
                support@careerfitfinder.space
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}