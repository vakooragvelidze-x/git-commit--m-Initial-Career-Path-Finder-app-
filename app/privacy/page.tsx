import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ec] px-6 py-12 text-[#171717]">
      <section className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-medium text-black/55">
          ← Back to home
        </Link>

        <div className="mt-10 rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm md:p-12">
          <h1 className="text-4xl font-semibold tracking-tight">
            Privacy Policy
          </h1>

          <p className="mt-4 text-sm text-black/45">
            Last updated: May 16, 2026
          </p>

          <div className="mt-8 space-y-6 leading-8 text-black/65">
            <p>
              This Privacy Policy explains how Career Path Finder collects and
              uses information when you use our website and career
              self-assessment.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-black">
                1. Information we collect
              </h2>
              <p className="mt-2">
                We may collect quiz answers, generated report data, email
                address if provided, payment status, and basic technical
                information needed to operate the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black">
                2. How we use information
              </h2>
              <p className="mt-2">
                We use this information to generate your report, save your
                result, provide access after purchase, deliver result links, and
                improve the website experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black">
                3. Payment information
              </h2>
              <p className="mt-2">
                Payments are handled by third-party payment processors. Career
                Path Finder does not store full card numbers or full payment
                credentials on its own servers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black">
                4. Data sharing
              </h2>
              <p className="mt-2">
                We do not sell your personal information. We may share limited
                data with service providers needed to operate the website,
                process payments, store quiz sessions, or send emails.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black">
                5. Data retention
              </h2>
              <p className="mt-2">
                Quiz sessions and reports may be stored so users can access
                their results after purchase. You may contact us to request
                deletion of your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black">
                6. Contact
              </h2>
              <p className="mt-2">
                For privacy questions or deletion requests, contact us at:
                vako.oragvelidze36@gmail.com
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}