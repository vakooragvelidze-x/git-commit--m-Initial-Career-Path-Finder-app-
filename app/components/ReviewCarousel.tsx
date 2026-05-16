const betaFeedback = [
  {
    name: "Maya R.",
    handle: "@maya.rethinks",
    role: "Beta-style feedback",
    rating: "★★★★★",
    title: "It helped me separate burnout from real career misalignment.",
    body: "The useful part was that it did not immediately push me toward quitting. My result explained that I might be tired and overloaded, but that does not automatically mean my whole career is wrong. That distinction felt practical.",
    initials: "MR",
    accent: "#86cf6d",
  },
  {
    name: "Daniel K.",
    handle: "@daniel.moves",
    role: "Beta-style feedback",
    rating: "★★★★★",
    title: "The score breakdown made the result feel more believable.",
    body: "I liked seeing different areas measured separately. Stability, skills, growth, autonomy, and risk tolerance all made the result feel more logical. It felt less like a random quiz and more like a structured decision tool.",
    initials: "DK",
    accent: "#f5b3df",
  },
  {
    name: "Laura M.",
    handle: "@laura.nextstep",
    role: "Beta-style feedback",
    rating: "★★★★☆",
    title: "Good for people who feel stuck but cannot explain why.",
    body: "The report helped me realize that my problem may not be the entire career path. It may be the role, environment, or lack of growth. That made the next step feel less scary and more specific.",
    initials: "LM",
    accent: "#e8e2a0",
  },
  {
    name: "Chris A.",
    handle: "@chris.workshift",
    role: "Beta-style feedback",
    rating: "★★★★★",
    title: "The 28-day plan made it feel actionable.",
    body: "A lot of career quizzes stop after giving you a label. This felt more useful because it gave me a practical sequence of actions. I could see what to do first instead of just overthinking everything again.",
    initials: "CA",
    accent: "#86cf6d",
  },
  {
    name: "Nina S.",
    handle: "@nina.pathfinder",
    role: "Beta-style feedback",
    rating: "★★★★☆",
    title: "The warnings were surprisingly helpful.",
    body: "The report warned me not to make a major decision while exhausted. That felt accurate. It was not just motivational. It gave me a more responsible way to think about timing and risk.",
    initials: "NS",
    accent: "#f5b3df",
  },
  {
    name: "Adam T.",
    handle: "@adam.careerreset",
    role: "Beta-style feedback",
    rating: "★★★★★",
    title: "It gave language to something I could not clearly describe.",
    body: "I knew something felt off, but I did not know whether I needed growth, stability, independence, or a complete switch. The report helped me name the issue more clearly.",
    initials: "AT",
    accent: "#e8e2a0",
  },
  {
    name: "Elena P.",
    handle: "@elena.reposition",
    role: "Beta-style feedback",
    rating: "★★★★★",
    title: "The transferable skills part was the most valuable.",
    body: "I always thought changing direction meant starting over. The report made me think differently. It showed that maybe I need to reposition my existing experience instead of throwing it away.",
    initials: "EP",
    accent: "#86cf6d",
  },
  {
    name: "Marcus V.",
    handle: "@marcus.growth",
    role: "Beta-style feedback",
    rating: "★★★★☆",
    title: "It made me think about upgrading before switching.",
    body: "My first instinct was that I needed a new career. The report made me consider whether I actually need a better role, better company, or clearer growth path first. That felt more realistic.",
    initials: "MV",
    accent: "#f5b3df",
  },
  {
    name: "Sophie L.",
    handle: "@sophie.findsfit",
    role: "Beta-style feedback",
    rating: "★★★★★",
    title: "It felt written for adults with real responsibilities.",
    body: "I liked that it considered stability, energy, money pressure, and responsibility. A lot of career advice ignores that. This felt more mature than just saying follow your passion.",
    initials: "SL",
    accent: "#e8e2a0",
  },
  {
    name: "Ryan D.",
    handle: "@ryan.builds",
    role: "Beta-style feedback",
    rating: "★★★★★",
    title: "The independent path advice felt balanced.",
    body: "I liked that it did not simply say go build something and quit your job. It explained that independence needs structure, proof, and a small test first. That made the advice feel grounded.",
    initials: "RD",
    accent: "#86cf6d",
  },
];

export default function ReviewCarousel() {
  return (
    <section className="overflow-hidden bg-[#eef3f7]/70 px-6 py-16 text-[#240366]">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex rounded-full bg-white/75 px-4 py-2 text-sm font-bold text-[#240366]/70 ring-1 ring-[#240366]/10">
              Beta-style feedback preview
            </div>

            <h2 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl">
              What people look for when they feel stuck in their career
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#240366]/68">
              Career Fit Finder is designed to help you understand whether your
              next move should be stability, optimization, repositioning,
              switching, independence, or growth.
            </p>
          </div>

          <div className="rounded-3xl bg-white/75 px-5 py-4 text-sm font-bold text-[#240366] ring-1 ring-[#240366]/10">
            22 questions · 10 dimensions · 28-day plan
          </div>
        </div>

        <div className="mt-10 flex gap-5 overflow-x-auto pb-4">
          {betaFeedback.map((review) => (
            <article
              key={review.handle}
              className="min-w-[310px] max-w-[310px] rounded-3xl border border-[#240366]/10 bg-white/82 p-6 shadow-xl shadow-[#240366]/10 backdrop-blur md:min-w-[370px] md:max-w-[370px]"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-base font-extrabold text-[#240366] ring-1 ring-[#240366]/10"
                    style={{ backgroundColor: review.accent }}
                  >
                    {review.initials}
                  </div>

                  <div>
                    <div className="font-extrabold text-[#240366]">
                      {review.name}
                    </div>
                    <div className="text-sm font-semibold text-[#240366]/48">
                      {review.handle}
                    </div>
                  </div>
                </div>

                <div className="rounded-full bg-[#86cf6d]/28 px-3 py-1 text-xs font-extrabold text-[#240366] ring-1 ring-[#240366]/10">
                  {review.role}
                </div>
              </div>

              <div className="mt-5 text-xl tracking-[0.08em] text-[#240366]">
                {review.rating}
              </div>

              <h3 className="mt-4 text-2xl font-extrabold leading-tight">
                {review.title}
              </h3>

              <p className="mt-4 leading-7 text-[#240366]/68">
                {review.body}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-4 max-w-4xl text-xs leading-5 text-[#240366]/45">
          Feedback cards are presentation examples for the beta/testing version
          of Career Fit Finder. Replace with verified customer feedback before
          presenting this section as real testimonials.
        </p>
      </div>
    </section>
  );
}