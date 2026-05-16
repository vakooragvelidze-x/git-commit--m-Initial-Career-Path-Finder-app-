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

  const priceId = process.env.NEXT_PUBLIC_PADDLE_PRICE_ID;
  const appUrl =
    process.env.NEXT_PUBLIC_APP_URL || "https://careerfitfinder.space";

  useEffect(() => {
    async function loadPaddle() {
      const token = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN;

      if (!token) {
        setError("Missing Paddle client-side token.");
        return;
      }

      const paddleInstance = await initializePaddle({
        token,
      });

      setPaddle(paddleInstance);
    }

    void loadPaddle();
  }, []);

  function openCheckout() {
    setError("");

    if (!paddle) {
      setError("Paddle checkout is still loading. Try again in a moment.");
      return;
    }

    if (!priceId) {
      setError("Missing Paddle price ID.");
      return;
    }

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
      customer: email.trim()
        ? {
            email: email.trim(),
          }
        : undefined,
      customData: {
        sessionId,
        product: "career_fit_finder_report",
      },
    });

    setIsOpening(false);
  }

  return (
    <div className="mt-6">
      <div className="rounded-3xl bg-white/10 p-4">
        <label className="text-sm font-medium text-white/60">
          Email for result access
        </label>

        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          className="mt-2 w-full rounded-2xl border border-white/10 bg-white px-4 py-4 text-black outline-none placeholder:text-black/35"
        />
      </div>

      <button
        onClick={openCheckout}
        disabled={isOpening}
        className="mt-6 w-full rounded-full bg-white px-8 py-4 text-base font-semibold text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isOpening ? "Opening checkout..." : "Unlock My Report — $1.99"}
      </button>

      {error && (
        <p className="mt-4 rounded-2xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}

      <p className="mt-4 text-center text-xs leading-6 text-white/40">
        Secure checkout powered by Paddle. After payment, your private result
        link will open automatically.
      </p>
    </div>
  );
}