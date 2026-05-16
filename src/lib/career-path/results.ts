import type { ResultDefinition, ResultKey } from "./types";

export const RESULT_DEFINITIONS: Record<ResultKey, ResultDefinition> = {
  stability_planner: {
    key: "stability_planner",
    title: "Stability First Planner",
    shortTitle: "Stability Planner",
    plainMeaning:
      "You should create stability before making a big career move.",
    description:
      "Your answers suggest that the next smart move is not a dramatic career jump. Your best path is to reduce pressure, protect your income, rebuild energy, and create a realistic transition plan before making major decisions.",
    mainBottleneck:
      "Your biggest bottleneck is not lack of ambition. It is that your current stress, obligations, energy level, or uncertainty may make risky decisions more expensive than they need to be.",
    bestMove:
      "Stabilize your work life first, then explore career changes from a stronger position.",
    avoidForNow: [
      "Quitting without a financial runway",
      "Starting an intense retraining path while exhausted",
      "Comparing yourself to people with fewer responsibilities",
      "Making permanent decisions during temporary burnout",
    ],
    bestFor: [
      "Adults with financial or family responsibilities",
      "People feeling overextended or burned out",
      "People who want change but need a safer transition",
      "People who need confidence before risk",
    ],
    firstStep:
      "Make a stability audit: income needs, energy drains, time availability, and the minimum safe runway before changing direction.",
    plan28Days: [
      {
        week: "Week 1",
        focus: "Stability audit",
        actions: [
          "Write down your monthly income needs.",
          "List your top 5 work-related energy drains.",
          "Identify what must stay stable for the next 90 days.",
        ],
      },
      {
        week: "Week 2",
        focus: "Pressure reduction",
        actions: [
          "Remove or reduce one avoidable stressor.",
          "Improve one work boundary.",
          "Create a simple weekly recovery routine.",
        ],
      },
      {
        week: "Week 3",
        focus: "Low-risk exploration",
        actions: [
          "Research 3 possible paths without committing yet.",
          "Speak to one person in a role that interests you.",
          "Test one small project related to a possible direction.",
        ],
      },
      {
        week: "Week 4",
        focus: "Safe transition plan",
        actions: [
          "Choose one path to explore for the next 60 days.",
          "Define your minimum savings or income requirement.",
          "Create a next-step plan that does not risk your stability.",
        ],
      },
    ],
  },

  current_path_optimizer: {
    key: "current_path_optimizer",
    title: "Current Path Optimizer",
    shortTitle: "Path Optimizer",
    plainMeaning:
      "You may not need a new career. You may need a better version of your current path.",
    description:
      "Your answers suggest that your current direction still has value, but the way you are positioned inside it may need improvement. You may benefit more from a better role, team, company, schedule, manager, specialization, or compensation path than from starting over.",
    mainBottleneck:
      "Your bottleneck is likely environment, positioning, negotiation, or role design — not necessarily the entire career field.",
    bestMove:
      "Upgrade your current path before assuming you need to abandon it.",
    avoidForNow: [
      "Changing industries before testing easier improvements",
      "Assuming boredom means total misalignment",
      "Underpricing your existing experience",
      "Ignoring negotiation, internal mobility, or role redesign",
    ],
    bestFor: [
      "People with useful experience in their current field",
      "People who are dissatisfied but not completely misaligned",
      "Professionals who may need a better role or company",
      "People who want progress without starting from zero",
    ],
    firstStep:
      "List what is wrong with your current work and separate field problems from company, manager, pay, workload, and role-design problems.",
    plan28Days: [
      {
        week: "Week 1",
        focus: "Role diagnosis",
        actions: [
          "Separate problems into role, company, manager, pay, energy, and field.",
          "Rate each problem from 1 to 10.",
          "Identify which problems are fixable without changing careers.",
        ],
      },
      {
        week: "Week 2",
        focus: "Career capital inventory",
        actions: [
          "List your strongest skills and achievements.",
          "Collect proof of results, projects, numbers, or responsibilities.",
          "Identify 3 adjacent roles where your experience transfers easily.",
        ],
      },
      {
        week: "Week 3",
        focus: "Market test",
        actions: [
          "Review 15 job posts in your current or adjacent field.",
          "Find common requirements you already match.",
          "Update your résumé or LinkedIn positioning around stronger fit.",
        ],
      },
      {
        week: "Week 4",
        focus: "Upgrade move",
        actions: [
          "Choose one upgrade path: internal move, new company, specialization, or negotiation.",
          "Send 5 exploratory applications or messages.",
          "Create a 60-day plan to improve your current path deliberately.",
        ],
      },
    ],
  },

  skill_repositioner: {
    key: "skill_repositioner",
    title: "Skill Repositioner",
    shortTitle: "Repositioner",
    plainMeaning:
      "You should use your existing experience in a new way instead of starting over.",
    description:
      "Your answers suggest that you may want a new direction, but you do not need to throw away your past experience. Your best career move is likely repositioning: using transferable skills in a better-fitting role, industry, audience, or work model.",
    mainBottleneck:
      "Your bottleneck is translation. You may not yet see how your existing skills connect to better opportunities, so your experience may feel less valuable than it actually is.",
    bestMove:
      "Translate your existing skills into a better-fitting career direction.",
    avoidForNow: [
      "Thinking you must start from zero",
      "Choosing a completely unrelated path without skill overlap",
      "Underselling your past experience",
      "Only applying to roles with your old job title",
    ],
    bestFor: [
      "Adults changing industries",
      "Professionals with transferable skills",
      "People who want change without wasting past experience",
      "People unsure how to describe their value",
    ],
    firstStep:
      "Create a transferable skills map: what you do, who benefits from it, and where that skill is valuable outside your current role.",
    plan28Days: [
      {
        week: "Week 1",
        focus: "Skill inventory",
        actions: [
          "List 20 tasks you have done well in past roles.",
          "Group them into skill categories.",
          "Highlight skills that could matter in other industries.",
        ],
      },
      {
        week: "Week 2",
        focus: "Market translation",
        actions: [
          "Find 20 job posts that look interesting.",
          "Mark repeated skills and language.",
          "Rewrite your experience using the language of those roles.",
        ],
      },
      {
        week: "Week 3",
        focus: "Proof building",
        actions: [
          "Choose 3 achievements that prove your transferable skills.",
          "Turn each achievement into a short case-study bullet.",
          "Update résumé or LinkedIn around outcomes, not only duties.",
        ],
      },
      {
        week: "Week 4",
        focus: "Repositioning test",
        actions: [
          "Apply to 5 adjacent roles.",
          "Message 3 people who moved into your target direction.",
          "Refine your target based on responses and job-market feedback.",
        ],
      },
    ],
  },

  purposeful_switcher: {
    key: "purposeful_switcher",
    title: "Purposeful Switcher",
    shortTitle: "Switcher",
    plainMeaning:
      "You may need a more meaningful career direction, not just a better job.",
    description:
      "Your answers suggest that your current path may be misaligned with your values, interests, identity, or desired future. Your best move may involve a real career switch — but it should be tested carefully and built around evidence, not only emotion.",
    mainBottleneck:
      "Your bottleneck is alignment. You may be able to keep functioning in your current path, but it may cost motivation and long-term energy if it conflicts with what matters to you now.",
    bestMove:
      "Explore a values-aligned switch through experiments before making a full leap.",
    avoidForNow: [
      "Romanticizing a new field without testing it",
      "Quitting from frustration rather than strategy",
      "Ignoring financial and lifestyle constraints",
      "Confusing fantasy work with daily reality",
    ],
    bestFor: [
      "People who feel their work no longer matches who they are",
      "People craving meaning or identity alignment",
      "Adults considering a real pivot",
      "People willing to learn if the direction is right",
    ],
    firstStep:
      "Define what you are moving toward, not only what you are escaping from.",
    plan28Days: [
      {
        week: "Week 1",
        focus: "Alignment map",
        actions: [
          "Write what you want more of and less of in work.",
          "Identify your top 5 work values.",
          "List 3 fields or roles that may match those values.",
        ],
      },
      {
        week: "Week 2",
        focus: "Reality testing",
        actions: [
          "Research the daily tasks of each possible path.",
          "Find salary, skill, and entry requirements.",
          "Talk to one person in a field that interests you.",
        ],
      },
      {
        week: "Week 3",
        focus: "Small experiment",
        actions: [
          "Complete one mini project related to your target path.",
          "Track whether it gives energy or drains energy.",
          "Identify the biggest skill gap you would need to close.",
        ],
      },
      {
        week: "Week 4",
        focus: "Bridge plan",
        actions: [
          "Choose one direction to explore for 60 more days.",
          "Create a learning and savings plan.",
          "Decide what evidence would prove the switch is worth pursuing.",
        ],
      },
    ],
  },

  independent_builder: {
    key: "independent_builder",
    title: "Independent Builder",
    shortTitle: "Builder",
    plainMeaning:
      "You may fit best with a more independent, flexible, or self-directed path.",
    description:
      "Your answers suggest a strong need for autonomy. You may feel limited by traditional roles and may be drawn to freelancing, consulting, side projects, creator work, small business, or a portfolio career.",
    mainBottleneck:
      "Your bottleneck is turning independence into structure. Freedom without a clear offer, audience, routine, or income plan can quickly become stress.",
    bestMove:
      "Build an independent path gradually while keeping enough structure and financial safety.",
    avoidForNow: [
      "Quitting before proving demand",
      "Starting with too many business ideas",
      "Confusing freedom with lack of discipline",
      "Ignoring sales, distribution, and consistency",
    ],
    bestFor: [
      "Self-directed professionals",
      "People who want flexibility and control",
      "Freelancers or future freelancers",
      "People interested in side income or portfolio work",
    ],
    firstStep:
      "Choose one small offer or project you can test without risking your current stability.",
    plan28Days: [
      {
        week: "Week 1",
        focus: "Offer direction",
        actions: [
          "List skills people already ask you for or praise.",
          "Choose one audience you understand.",
          "Write 3 simple service, project, or product ideas.",
        ],
      },
      {
        week: "Week 2",
        focus: "Demand test",
        actions: [
          "Talk to 5 potential customers or peers.",
          "Find repeated pain points in their answers.",
          "Choose one small offer to test.",
        ],
      },
      {
        week: "Week 3",
        focus: "Proof asset",
        actions: [
          "Create one example, portfolio piece, landing page, or case study.",
          "Explain the problem it solves clearly.",
          "Ask for feedback before trying to scale it.",
        ],
      },
      {
        week: "Week 4",
        focus: "Controlled launch",
        actions: [
          "Send 10 low-pressure messages or applications for the offer.",
          "Track responses and objections.",
          "Decide whether to refine, continue, or change the offer.",
        ],
      },
    ],
  },

  growth_accelerator: {
    key: "growth_accelerator",
    title: "Growth Accelerator",
    shortTitle: "Accelerator",
    plainMeaning:
      "You are likely ready for a bigger challenge, promotion, or stronger professional positioning.",
    description:
      "Your answers suggest that you may not need a career switch. You may need more challenge, visibility, responsibility, compensation, leadership, or a clearer growth track.",
    mainBottleneck:
      "Your bottleneck is likely under-positioning. You may be capable of more than your current role demands, but your value may not be visible, packaged, or negotiated strongly enough.",
    bestMove:
      "Turn your existing strengths into a clearer advancement strategy.",
    avoidForNow: [
      "Waiting for recognition without asking for it",
      "Changing careers because you are under-challenged",
      "Doing more work without improving visibility",
      "Avoiding negotiation or leadership opportunities",
    ],
    bestFor: [
      "Professionals with momentum",
      "People ready for leadership or higher responsibility",
      "People who want better pay or status",
      "People who need stronger positioning",
    ],
    firstStep:
      "Document your wins, responsibilities, and measurable impact so your growth case becomes obvious.",
    plan28Days: [
      {
        week: "Week 1",
        focus: "Impact inventory",
        actions: [
          "List your strongest achievements from the last 12–24 months.",
          "Add numbers, responsibilities, or clear outcomes where possible.",
          "Identify which achievements show leadership or leverage.",
        ],
      },
      {
        week: "Week 2",
        focus: "Positioning upgrade",
        actions: [
          "Rewrite your professional summary around outcomes.",
          "Update résumé or LinkedIn with stronger proof.",
          "Identify 3 roles that represent the next level.",
        ],
      },
      {
        week: "Week 3",
        focus: "Visibility and conversations",
        actions: [
          "Schedule one growth conversation with a manager, mentor, or peer.",
          "Ask what would make you a stronger candidate for the next level.",
          "Find skill gaps that matter for advancement.",
        ],
      },
      {
        week: "Week 4",
        focus: "Growth move",
        actions: [
          "Choose one path: promotion, new role, leadership, specialization, or negotiation.",
          "Create a 60-day action plan around that path.",
          "Send 5 applications or start one internal growth conversation.",
        ],
      },
    ],
  },
};