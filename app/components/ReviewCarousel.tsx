"use client";

const reviews = [
  {
    name: "Beta participant",
    label: "Career clarity",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    text: "The questions made me think about my work situation in a more practical way. The result felt more useful than a generic career quiz.",
  },
  {
    name: "Beta participant",
    label: "Next step planning",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    text: "I liked that it did not just say ‘change careers.’ It separated stability, skills, energy, and timing, which made the advice feel more realistic.",
  },
  {
    name: "Beta participant",
    label: "Work direction",
    rating: 4,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    text: "The report helped me understand whether I should improve my current path or explore something new. The 28-day plan was the most useful part.",
  },
  {
    name: "Beta participant",
    label: "Career transition",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    text: "It felt designed for adults with real responsibilities, not just young people choosing a first career. The questions were simple but thoughtful.",
  },
  {
    name: "Beta participant",
    label: "Self-assessment",
    rating: 4,
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    text: "The result gave me a clearer way to think about my options. I would use it as a starting point before making any serious career decision.",
  },
  {
    name: "Beta participant",
    label: "Personal roadmap",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=200&q=80",
    text: "The strongest part was seeing the bottleneck and next move. It helped me stop thinking in circles and focus on one practical direction.",
  },
  {
    name: "Beta participant",
    label: "Career fit",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
    text: "I expected a basic quiz, but the result felt surprisingly structured. It gave me a clearer sense of what I should prioritize first.",
  },
  {
    name: "Beta participant",
    label: "Direction check",
    rating: 4,
    avatar:
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=200&q=80",
    text: "The report helped me think more calmly about changing paths instead of rushing into a decision just because I felt stuck.",
  },
  {
    name: "Beta participant",
    label: "Stability review",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    text: "I liked that it considered responsibilities and energy, not just ambition. That made the result feel more grounded and mature.",
  },
  {
    name: "Beta participant",
    label: "Planning support",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    text: "The 28-day plan gave me something practical to do instead of just overthinking. That part made the whole experience more valuable.",
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
  return (
    <section className="bg-[#e9eef4] px-6 py-16 text-[#171717]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
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

        <div className="overflow-x-auto pb-4">
          <div className="flex w-max gap-5">
            {reviews.map((review, index) => (
              <article
                key={`${review.name}-${index}`}
                className="w-[360px] rounded-3xl border border-black/10 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="h-14 w-14 rounded-full object-cover"
                    />

                    <div>
                      <h3 className="font-semibold">{review.name}</h3>
                      <p className="text-sm text-black/45">{review.label}</p>
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
      </div>
    </section>
  );
}