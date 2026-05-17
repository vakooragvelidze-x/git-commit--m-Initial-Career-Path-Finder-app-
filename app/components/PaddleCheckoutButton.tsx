"use client";

import { useEffect, useState } from "react";
import { initializePaddle, Paddle } from "@paddle/paddle-js";

type PaddleCheckoutButtonProps = {
  sessionId: string;
  accessToken: string;
};

export default function PaddleCheckoutButton({
  sessionId,
  accessToken,
}: PaddleCheckoutButtonProps) {
  const [paddle, setPaddle] = useState<Paddle | undefined>();
  const [email, setEmail] = useState("");
  const [isOpening, setIsOpening] = useState(false);
  const [error, setError] = useState("");

  const clientToken = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN;
  const priceId = process.env.NEXT_PUBLIC_PADDLE_PRICE_ID;
  const appUrl =
    process.env.NEXT_PUBLIC_APP_URL || "https://careerfitfinder.space";
  const paddleEnvironment = process.env.NEXT_PUBLIC_PADDLE_ENVIRONMENT;

  useEffect(() => {
    async function loadPaddle() {
      if (!clientToken) {
        setError("Missing Paddle client-side token.");
        return;
      }

      try {
        const paddleInstance = await initializePaddle({
          token: clientToken,
          environment:
            paddleEnvironment === "sandbox" ? "sandbox" : undefined,
        });

        if (!paddleInstance) {
          setError("Unable to initialize Paddle.");
          return;
        }

        setPaddle(paddleInstance);
      } catch (err) {
        console.error("Paddle initialization error:", err);
        setError("Unable to initialize Paddle checkout.");
      }
    }

    void loadPaddle();
  }, [clientToken, paddleEnvironment]);

  async function handleCheckout() {
    setError("");

    if (!email.trim()) {
      setError("Please enter your email before continuing.");
      return;
    }

    if (!priceId) {
      setError("Missing Paddle price ID.");
      return;
    }

    if (!paddle) {
      setError("Paddle is still loading. Please try again.");
      return;
    }
    try {
  await fetch("/api/track-event", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      eventName: "checkout_clicked",
      pagePath: window.location.pathname,
      sessionId,
      accessToken,
      metadata: {
        price: 1.99,
        currency: "USD",
        product: "career_fit_finder_report",
      },
    }),
  });
} catch (error) {
  console.error("Checkout tracking failed:", error);
}
    try {
      setIsOpening(true);

      paddle.Checkout.open({
        settings: {
          displayMode: "overlay",
          variant: "one-page",
          theme: "light",
          successUrl: `${appUrl}/result/${accessToken}`,
        },
        items: [
          {
            priceId,
            quantity: 1,
          },
        ],
        customer: {
          email: email.trim(),
        },
        customData: {
          sessionId,
          accessToken,
          source: "career-fit-finder",
        },
      });
    } catch (err) {
      console.error("Paddle checkout error:", err);
      setError("Paddle was unable to open checkout.");
    } finally {
      setIsOpening(false);
    }
  }

  return (
    <div className="mt-8">
      <div>
        <label
          htmlFor="checkout-email"
          className="mb-2 block text-sm font-medium text-[#f4ddc8]"
        >
          Email for result access
        </label>

        <input
          id="checkout-email"
          type="email"
          inputMode="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-2xl border border-white/15 bg-white px-5 py-4 text-base text-[#2b2019] outline-none transition placeholder:text-[#8d8178] focus:border-[#d9a679] focus:ring-2 focus:ring-[#d9a679]/30"
        />
      </div>

      <button
        type="button"
        onClick={handleCheckout}
        disabled={isOpening}
        className="mt-5 w-full rounded-2xl bg-[#f4d7ba] px-6 py-4 text-base font-semibold text-[#2e2119] transition hover:bg-[#efcfad] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isOpening ? "Opening checkout..." : "Unlock My Report — $1.99"}
      </button>

      {error ? (
        <div className="mt-4 rounded-2xl border border-[#d99670] bg-[#fff1e8] px-4 py-3 text-sm text-[#8a4b27]">
          {error}
        </div>
      ) : null}

      <p className="mt-4 text-sm leading-6 text-white/65">
        Secure payment powered by Paddle. After payment, your private result
        page will open automatically.
      </p>
    </div>
  );
}