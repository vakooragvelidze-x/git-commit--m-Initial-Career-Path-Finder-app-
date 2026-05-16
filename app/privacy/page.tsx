import Link from "next/link";

export default function PrivacyPage() {
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
          <div className="inline-flex rounded-full bg-[#86cf6d]/30 px-4 py-2 text-sm font-bold">
            Privacy Policy
          </div>

          <h1 className="mt-6 text-5xl font-extrabold tracking-tight md:text-6xl">
            Privacy Policy
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
                This Privacy Policy explains what information Career Fit Finder
                collects, how we use it, and how we protect it when you use the
                website, complete the assessment, or purchase a report unlock.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-[#240366]">
                2. Information we collect
              </h2>
              <p className="mt-3">We may collect:</p>
              <ul className="mt-3 space-y-2">
                <li>• Your quiz answers</li>
                <li>• Your generated report data</li>
                <li>• Your email address if entered during checkout</li>
                <li>• Payment status and transaction reference</li>
                <li>• Basic technical data such as browser, device, and usage events</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-[#240366]">
                3. How we use your information
              </h2>
              <p className="mt-3">We use your information to:</p>
              <ul className="mt-3 space-y-2">
                <li>• Generate your personalized report</li>
                <li>• Save your assessment session</li>
                <li>• Unlock your report after payment</li>
                <li>• Send or recover access to your report link when available</li>
                <li>• Improve the website and user experience</li>
                <li>• Prevent fraud, abuse, and technical issues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-[#240366]">
                4. Payment information
              </h2>
              <p className="mt-3">
                Payments are processed by Paddle or another authorized payment
                provider. We do not store your full card number or full payment
                credentials.
              </p>
              <p className="mt-3">
                We may receive payment confirmation, transaction ID, customer
                email, and purchase status from the payment provider so we can
                unlock your report.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-[#240366]">
                5. Service providers
              </h2>
              <p className="mt-3">
                We may use trusted service providers for hosting, database
                storage, analytics, and payment processing. These providers only
                process information as needed to operate the service.
              </p>
              <p className="mt-3">
                Current or possible providers include hosting platforms,
                database providers, analytics tools, and payment processors such
                as Paddle.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-[#240366]">
                6. Data retention
              </h2>
              <p className="mt-3">
                We keep assessment and purchase data only as long as reasonably
                needed to provide access to your report, operate the service,
                comply with payment records, prevent abuse, and improve the
                product.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-[#240366]">
                7. Your choices
              </h2>
              <p className="mt-3">
                You may contact us to request access, correction, or deletion of
                your personal information where applicable. Some payment or
                transaction records may need to be retained for legal, tax,
                fraud prevention, or accounting reasons.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-[#240366]">
                8. Security
              </h2>
              <p className="mt-3">
                We use reasonable technical and organizational safeguards to
                protect your information. However, no website or online system
                can guarantee perfect security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-[#240366]">
                9. Children
              </h2>
              <p className="mt-3">
                Career Fit Finder is intended for adults and is not designed for
                children under 13. We do not knowingly collect information from
                children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-[#240366]">
                10. Contact
              </h2>
              <p className="mt-3">
                For privacy questions or data requests, contact us at:
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