import Link from "next/link";

export default function RefundPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ec] px-6 py-12 text-[#171717]">
      <section className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-medium text-black/55">
          ← Back to home
        </Link>

        <div className="mt-10 rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm md:p-12">
          <h1 className="text-4xl font-semibold tracking-tight">
            Refund Policy
          </h1>

          <p className="mt-4 text-sm text-black/45">
            Last updated: May 16, 2026
          </p>

          <div className="mt-8 space-y-6 leading-8 text-black/65">
            <p>
              Career Path Finder sells a low-cost digital report that is
              delivered instantly after purchase.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-black">
                1. Digital product delivery
              </h2>
              <p className="mt-2">
                Once a report is unlocked, the digital product is considered
                delivered. Because the report is personalized and accessible
                immediately, refunds are generally not automatic.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black">
                2. Refund requests
              </h2>
              <p className="mt-2">
                If you experience a technical issue, duplicate payment, or
                cannot access your report after payment, contact us and we will
                review the request.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black">
                3. Case-by-case review
              </h2>
              <p className="mt-2">
                Refund requests are reviewed case by case. We may request the
                email used at checkout, payment confirmation, or details about
                the issue.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black">
                4. Contact
              </h2>
              <p className="mt-2">
                For refund questions, contact us at:
                vako.oragvelidze36@gmail.com
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}