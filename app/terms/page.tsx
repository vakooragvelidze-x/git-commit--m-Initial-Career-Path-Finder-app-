import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ec] px-6 py-12 text-[#171717]">
      <section className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-medium text-black/55">
          ← Back to home
        </Link>

        <div className="mt-10 rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm md:p-12">
          <h1 className="text-4xl font-semibold tracking-tight">
            Terms of Service
          </h1>

          <p className="mt-4 text-sm text-black/45">
            Last updated: May 16, 2026
          </p>

          <div className="mt-8 space-y-6 leading-8 text-black/65">
            <p>
              These Terms of Service govern your use of Career Path Finder, a
              self-assessment website that provides personalized career direction
              reports based on user-selected quiz answers.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-black">
                1. Educational self-assessment
              </h2>
              <p className="mt-2">
                Career Path Finder is provided for educational and informational
                purposes only. It is not a psychological, medical, financial,
                legal, academic, or professional career counseling service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black">
                2. No guaranteed outcomes
              </h2>
              <p className="mt-2">
                The results are based on the answers you provide. We do not
                guarantee employment, promotions, income changes, career success,
                or any specific outcome.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black">
                3. Digital product
              </h2>
              <p className="mt-2">
                The paid report is a digital product delivered online after
                purchase. Access is provided through a private result link.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black">
                4. User responsibility
              </h2>
              <p className="mt-2">
                You are responsible for how you interpret and use your report.
                Important career, financial, or life decisions should be made
                with appropriate personal judgment and, when needed, guidance
                from qualified professionals.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black">
                5. Payments
              </h2>
              <p className="mt-2">
                Payments are processed by third-party payment providers. We do
                not store full payment card details on our servers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black">
                6. Contact
              </h2>
              <p className="mt-2">
                For questions about these terms, contact us at:
                vako.oragvelidze36@gmail.com
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}