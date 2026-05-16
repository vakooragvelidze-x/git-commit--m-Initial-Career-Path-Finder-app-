import Link from "next/link";

export default function RefundPage() {
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
          <div className="inline-flex rounded-full bg-[#e8e2a0]/70 px-4 py-2 text-sm font-bold ring-1 ring-[#240366]/10">
            Refund Policy
          </div>

          <h1 className="mt-6 text-5xl font-extrabold tracking-tight md:text-6xl">
            Refund Policy
          </h1>

          <p className="mt-4 text-sm font-semibold text-[#240366]/55">
            Last updated: May 2026
          </p>

          <div className="mt-8 space-y-8 leading-8 text-[#240366]/72">
            <section>
              <h2 className="text-2xl font-extrabold text-[#240366]">
                1. Digital product delivery
              </h2>
              <p className="mt-3">
                Career Fit Finder sells a one-time digital report unlock. After
                successful checkout, the personalized report is delivered
                instantly through a private result link.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-[#240366]">
                2. General refund rule
              </h2>
              <p className="mt-3">
                Because the report is a digital product delivered immediately,
                refunds are generally not available once the report has been
                unlocked or accessed.
              </p>
              <p className="mt-3">
                We encourage users to review the pricing page, product
                description, and these policies before purchasing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-[#240366]">
                3. Refunds may be considered when
              </h2>
              <p className="mt-3">
                We may consider refund requests in cases such as:
              </p>
              <ul className="mt-3 space-y-2">
                <li>• Duplicate accidental charge</li>
                <li>• Payment was successful but the report could not be accessed</li>
                <li>• Serious technical error that prevented delivery</li>
                <li>• Unauthorized transaction, subject to payment provider review</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-[#240366]">
                4. Refunds are usually not provided when
              </h2>
              <ul className="mt-3 space-y-2">
                <li>• The report was successfully unlocked and accessed</li>
                <li>• The user disagrees with the assessment result</li>
                <li>• The user expected professional career counseling</li>
                <li>• The user did not read the product description before purchasing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-[#240366]">
                5. How to request support
              </h2>
              <p className="mt-3">
                If you believe there was a payment or delivery issue, contact us
                with your email address, approximate purchase time, and a short
                explanation of the issue.
              </p>
              <p className="mt-2 font-bold text-[#240366]">
                support@careerfitfinder.space
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-[#240366]">
                6. Payment provider rules
              </h2>
              <p className="mt-3">
                Refunds may also be subject to the rules, review process, and
                timing of the payment provider used at checkout.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}