"use client";

import { useRef } from "react";

const reviews = [
  {
    name: "Beta participant",
    rating: 5,
    time: "Career clarity",
    text: "The questions made me think about my work situation in a more practical way. The result felt more useful than a generic career quiz.",
  },
  {
    name: "Beta participant",
    rating: 5,
    time: "Next step planning",
    text: "I liked that it did not just say ‘change careers.’ It separated stability, skills, energy, and timing, which made the advice feel more realistic.",
  },
  {
    name: "Beta participant",
    rating: 4,
    time: "Work direction",
    text: "The report helped me understand whether I should improve my current path or explore something new. The 28-day plan was the most useful part.",
  },
  {
    name: "Beta participant",
    rating: 5,
    time: "Career transition",
    text: "It felt designed for adults with real responsibilities, not just young people choosing a first career. The questions were simple but thoughtful.",
  },
  {
    name: "Beta participant",
    rating: 4,
    time: "Self-assessment",
    text: "The result gave me a clearer way to think about my options. I would use it as a starting point before making any serious career decision.",
  },
  {
    name: "Beta participant",
    rating: 5,
    time: "Personal roadmap",
    text: "The strongest part was seeing the bottleneck and next move. It helped me stop thinking in circles and focus on one practical direction.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1 text-2xl text-[#f5b301]">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index}>{index < count ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

export default function ReviewCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollLeft() {
    trackRef.current?.scrollBy({ left: -380, behavior: "smooth" });
  }

  function scrollRight() {
    trackRef.current?.scrollBy({ left: 380, behavior: "smooth" });
  }

  return (
    <section className="bg-[#e9eef4] px-6 py-16 text-[#171717]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Early feedback from test users
            </h2>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Stars count={5} />
              <span className="font-semibold">4.8 average rating</span>
              <span className="text-black/45">beta feedback preview</span>
            </div>

            <p className="mt-4 max-w-2xl leading-7 text-black/55">
              Replace these cards with real customer feedback before scaling ads
              or submitting for strict payment verification.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={scrollLeft}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl shadow-sm transition hover:bg-black hover:text-white"
              aria-label="Scroll reviews left"
            >
              ←
            </button>

            <button
              onClick={scrollRight}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl shadow-sm transition hover:bg-black hover:text-white"
              aria-label="Scroll reviews right"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="flex gap-5 overflow-x-auto scroll-smooth pb-4"
        >
          {reviews.map((review, index) => (
            <article
              key={`${review.name}-${index}`}
              className="min-w-[320px] max-w-[320px] rounded-3xl border border-black/10 bg-white p-6 shadow-sm md:min-w-[360px] md:max-w-[360px]"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f7f3ec] text-lg font-bold">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="font-semibold">{review.name}</h3>
                    <p className="text-sm text-black/45">{review.time}</p>
                  </div>
                </div>

                <div className="rounded-2xl bg-[#00b67a] px-3 py-2 text-sm font-bold text-white">
                  ★
                </div>
              </div>

              <div className="mt-5">
                <Stars count={review.rating} />
              </div>

              <p className="mt-5 leading-7 text-black/65">{review.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}