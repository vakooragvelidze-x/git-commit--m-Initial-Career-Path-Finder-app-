import type { ResultDefinition, ResultKey } from "./types";

export const RESULT_DEFINITIONS: Record<ResultKey, ResultDefinition> = {
  stability_planner: {
    key: "stability_planner",
    title: "Stability First Planner",
    shortTitle: "Stability Planner",
    plainMeaning:
      "Your best next move is to create stability before making a major career change.",
    description:
      "Your answers suggest that your next career decision should be made from a stronger, calmer position. This does not mean you lack ambition. It means your current energy, responsibilities, financial pressure, or stress level may make sudden moves more expensive than necessary.",
    mainBottleneck:
      "Your main bottleneck is pressure. When stress is high and stability matters, big career decisions can become reactive instead of strategic.",
    bestMove:
      "Stabilize your current situation first, then explore career change through low-risk experiments.",
    avoidForNow: [
      "Quitting without a financial runway",
      "Starting an intense retraining path while exhausted",
      "Making permanent decisions during a temporary stress peak",
      "Comparing your timeline to people with fewer responsibilities",
    ],
    bestFor: [
      "People with real financial or family responsibilities",
      "People who feel burned out or overloaded",
      "People who want change but need a safer transition",
      "People who need clarity before taking risk",
    ],
    firstStep:
      "Create a stability audit: income needs, energy drains, time availability, and the minimum safe runway before changing direction.",
    plan28Days: [
      {
        week: "Week 1",
        focus: "Stability audit",
        actions: [
          "Write down your monthly income needs.",
          "List your top 5 career-related stress triggers.",
          "Identify what must stay stable for the next 90 days.",
        ],
      },
      {
        week: "Week 2",
        focus: "Pressure reduction",
        actions: [
          "Remove or reduce one avoidable stressor.",
          "Set one work boundary that protects your energy.",
          "Create one recovery habit you can repeat weekly.",
        ],
      },
      {
        week: "Week 3",
        focus: "Low-risk exploration",
        actions: [
          "Research 3 possible career paths without committing yet.",
          "Talk to one person who works in a path that interests you.",
          "Test one small activity related to a possible direction.",
        ],
      },
      {
        week: "Week 4",
        focus: "Safe transition plan",
        actions: [
          "Choose one direction to explore for the next 60 days.",
          "Define the minimum income or savings needed before risk.",
          "Write a next-step plan that protects your stability.",
        ],
      },
    ],

    reportHeadline: "Stabilize first, then move with clarity.",
    reportSubheadline:
      "Your result points toward a careful, realistic path forward rather than a dramatic leap.",
    whyYouGotThisResult: [
      "Your answers show a strong need for security, recovery, or lower pressure.",
      "You may want change, but your current situation makes reckless moves risky.",
      "Your best progress will come from reducing chaos before increasing ambition.",
    ],
    decisionPattern:
      "You are likely to make better career decisions after you lower stress and define your safety requirements.",
    careerRiskLevel: "High",
    riskExplanation:
      "Your risk level is high if you make a sudden move without stabilizing energy, money, or responsibilities first.",
    strongestSignals: [
      {
        title: "Stability matters",
        description:
          "Your next move needs to protect income, energy, and real-life responsibilities.",
      },
      {
        title: "Stress affects clarity",
        description:
          "You may need recovery before you can accurately judge your long-term direction.",
      },
      {
        title: "Low-risk testing fits you",
        description:
          "Small experiments are better than dramatic commitments right now.",
      },
    ],
    watchOutFor: [
      {
        title: "Reactive decisions",
        description:
          "Do not confuse temporary exhaustion with a fully informed career conclusion.",
      },
      {
        title: "Overcommitting",
        description:
          "Avoid starting a demanding new path before you have enough time and energy.",
      },
    ],
    idealWorkEnvironment: [
      {
        title: "Predictable structure",
        description:
          "Clear expectations, stable income, and fewer chaotic demands will help you think better.",
      },
      {
        title: "Lower-pressure improvement",
        description:
          "A calmer role, better schedule, or healthier company may help before a full switch.",
      },
    ],
    poorFitEnvironments: [
      {
        title: "High chaos",
        description:
          "Fast-moving environments with unclear demands may increase stress and reduce judgment quality.",
      },
      {
        title: "All-or-nothing risk",
        description:
          "Situations that require immediate quitting or heavy financial risk are poor fits right now.",
      },
    ],
    bestNextRoles: [
      {
        title: "Safer adjacent role",
        description:
          "A role close to your current experience but with better conditions.",
      },
      {
        title: "Lower-stress version of current field",
        description:
          "Same general direction, but better management, workload, or schedule.",
      },
      {
        title: "Gradual transition path",
        description:
          "A path you can explore part-time before committing fully.",
      },
    ],
    transitionStrategy: [
      {
        title: "Stabilize",
        body: "First reduce pressure and define what must remain secure.",
      },
      {
        title: "Explore",
        body: "Research options without forcing a decision too early.",
      },
      {
        title: "Test",
        body: "Use one low-risk experiment to collect real evidence.",
      },
    ],
    personalOperatingAdvice: [
      "Make decisions after recovery, not during your most stressed moments.",
      "Use numbers: income needs, time availability, and energy limits.",
      "Move in steps, not dramatic leaps.",
    ],
    commonMistakes: [
      "Thinking stability means weakness",
      "Quitting just to escape pressure",
      "Starting a new path without a realistic runway",
    ],
    careerExperiments: [
      {
        title: "90-minute career audit",
        purpose:
          "Separate real career misalignment from temporary overload.",
        steps: [
          "Write what drains you most.",
          "Write what still feels tolerable or useful.",
          "Mark which problems are fixable without changing careers.",
        ],
      },
      {
        title: "One conversation test",
        purpose:
          "Learn about a possible path without committing to it.",
        steps: [
          "Choose one field or role that interests you.",
          "Find one person in that area.",
          "Ask what the daily work is actually like.",
        ],
      },
    ],
    scripts: [
      {
        title: "Boundary conversation",
        context: "Use this when your current role is draining your energy.",
        script:
          "I want to do strong work, but I need to clarify priorities so I can focus on the most important outcomes. Which tasks should be highest priority this week, and which can wait?",
      },
      {
        title: "Career research message",
        context: "Use this to explore a possible path safely.",
        script:
          "I’m exploring whether this path could fit my background. What would you tell someone to understand before seriously moving into this kind of work?",
      },
    ],
    first24Hours: {
      title: "Create your stability snapshot",
      actions: [
        "Write your minimum monthly income requirement.",
        "List your 3 biggest stress triggers.",
        "Choose one small pressure-reduction action for this week.",
      ],
    },
    finalGuidance:
      "You do not need to solve your entire career at once. Your first win is to become stable enough to make a smart decision.",
  },

  current_path_optimizer: {
    key: "current_path_optimizer",
    title: "Current Path Optimizer",
    shortTitle: "Path Optimizer",
    plainMeaning:
      "You may not need a new career. You may need a better version of your current path.",
    description:
      "Your answers suggest that your current direction still has value, but the way you are positioned inside it may need improvement. Your issue may be role quality, pay, management, workload, responsibility, visibility, or company fit rather than the entire field.",
    mainBottleneck:
      "Your main bottleneck is positioning. You may be too close to your current frustration to see which parts are fixable.",
    bestMove:
      "Upgrade your current path before assuming you need to abandon it.",
    avoidForNow: [
      "Changing industries before testing easier improvements",
      "Assuming boredom means total misalignment",
      "Underpricing your existing experience",
      "Ignoring negotiation, internal mobility, or better companies",
    ],
    bestFor: [
      "People with useful experience in their current field",
      "People dissatisfied with the current role but not the whole field",
      "Professionals who may need better pay or responsibility",
      "People who want progress without starting from zero",
    ],
    firstStep:
      "Separate field problems from role, company, manager, pay, workload, and positioning problems.",
    plan28Days: [
      {
        week: "Week 1",
        focus: "Role diagnosis",
        actions: [
          "List what feels wrong in your current work.",
          "Separate problems into role, company, pay, manager, and field.",
          "Identify which problems could be fixed without switching careers.",
        ],
      },
      {
        week: "Week 2",
        focus: "Career capital inventory",
        actions: [
          "List your strongest skills and achievements.",
          "Collect proof of results, responsibilities, or measurable wins.",
          "Identify 3 adjacent roles where your experience could fit.",
        ],
      },
      {
        week: "Week 3",
        focus: "Market test",
        actions: [
          "Review 15 job posts in your current or adjacent field.",
          "Mark requirements you already match.",
          "Update your résumé or profile around stronger positioning.",
        ],
      },
      {
        week: "Week 4",
        focus: "Upgrade move",
        actions: [
          "Choose one upgrade path: better company, internal move, negotiation, or specialization.",
          "Send 5 applications or exploratory messages.",
          "Create a 60-day plan to improve your current path deliberately.",
        ],
      },
    ],

    reportHeadline: "Optimize before you abandon.",
    reportSubheadline:
      "Your answers suggest there is still usable value in your current direction.",
    whyYouGotThisResult: [
      "Your current path may still contain career capital you can use.",
      "Your dissatisfaction may be connected to role quality rather than total misalignment.",
      "You likely need better positioning, environment, or responsibility.",
    ],
    decisionPattern:
      "You may be tempted to think in extremes, but your best move is likely an upgrade rather than a reset.",
    careerRiskLevel: "Moderate",
    riskExplanation:
      "The main risk is leaving too quickly before testing whether a better version of your current path would solve the problem.",
    strongestSignals: [
      {
        title: "Existing career value",
        description:
          "Your past experience likely still matters and should not be discarded too quickly.",
      },
      {
        title: "Upgrade potential",
        description:
          "Better pay, role design, company fit, or responsibility may change the picture.",
      },
      {
        title: "Practical improvement path",
        description:
          "Your next step can be concrete rather than dramatic.",
      },
    ],
    watchOutFor: [
      {
        title: "Mislabeling the problem",
        description:
          "Do not call the whole career wrong if the real issue is company, pay, manager, or workload.",
      },
      {
        title: "Passive waiting",
        description:
          "Do not wait for recognition without improving visibility and asking for growth.",
      },
    ],
    idealWorkEnvironment: [
      {
        title: "Better-managed team",
        description:
          "A healthier structure may let your current skills produce better results.",
      },
      {
        title: "Clear growth path",
        description:
          "You need visible progress, not just more tasks.",
      },
    ],
    poorFitEnvironments: [
      {
        title: "Dead-end roles",
        description:
          "Roles with no growth path will likely frustrate you again.",
      },
      {
        title: "Low-recognition environments",
        description:
          "If your work stays invisible, motivation may continue dropping.",
      },
    ],
    bestNextRoles: [
      {
        title: "Higher-quality current role",
        description:
          "Same general field, but better company, team, or responsibility.",
      },
      {
        title: "Adjacent upgrade",
        description:
          "A nearby role that uses your experience but gives more growth.",
      },
      {
        title: "Specialized track",
        description:
          "A narrower and more valuable version of what you already do.",
      },
    ],
    transitionStrategy: [
      {
        title: "Diagnose",
        body: "Find out whether the problem is the field or the current version of the work.",
      },
      {
        title: "Reposition",
        body: "Rewrite your experience around outcomes, not just tasks.",
      },
      {
        title: "Test the market",
        body: "Apply or network before deciding that the entire path is wrong.",
      },
    ],
    personalOperatingAdvice: [
      "Do not confuse frustration with total misalignment.",
      "Show your value using proof, not effort alone.",
      "Test better versions of your current path before starting over.",
    ],
    commonMistakes: [
      "Leaving before diagnosing the real issue",
      "Staying passive and hoping someone notices",
      "Applying with weak positioning",
    ],
    careerExperiments: [
      {
        title: "Role problem map",
        purpose:
          "Identify whether your frustration comes from role, company, pay, manager, or field.",
        steps: [
          "Write your top 5 frustrations.",
          "Label each one by source.",
          "Circle the problems that could be fixed without changing careers.",
        ],
      },
      {
        title: "Market positioning test",
        purpose:
          "See whether your current skills can attract better opportunities.",
        steps: [
          "Find 10 job posts that look better than your current role.",
          "Highlight repeated skill requirements.",
          "Rewrite 3 résumé bullets to match that language.",
        ],
      },
    ],
    scripts: [
      {
        title: "Growth conversation",
        context: "Use this with a manager or mentor.",
        script:
          "I want to grow into more valuable responsibility. Based on my current work, what would make me a stronger candidate for the next level over the next 3 months?",
      },
      {
        title: "Networking message",
        context: "Use this to explore better roles.",
        script:
          "I’m exploring stronger versions of my current career path. Your role looks close to the direction I’m considering. What skills or proof matter most for someone trying to move into this type of position?",
      },
    ],
    first24Hours: {
      title: "Separate the problem",
      actions: [
        "Write whether your issue is role, company, manager, pay, workload, or field.",
        "List 3 upgrades that do not require changing careers.",
        "Find 5 job posts that represent a better version of your current path.",
      ],
    },
    finalGuidance:
      "Your career may not need a dramatic reset. It may need stronger positioning and a better environment.",
  },

  skill_repositioner: {
    key: "skill_repositioner",
    title: "Skill Repositioner",
    shortTitle: "Repositioner",
    plainMeaning:
      "You should use your existing experience in a new way instead of starting over.",
    description:
      "Your answers suggest that you may want a new direction, but your past experience is still valuable. Your best move is likely repositioning: transferring your skills into a better-fitting role, industry, audience, or work model.",
    mainBottleneck:
      "Your main bottleneck is translation. You may not yet see how your existing skills connect to better opportunities.",
    bestMove:
      "Translate your existing skills into a clearer, better-fitting career direction.",
    avoidForNow: [
      "Thinking you must start from zero",
      "Choosing a completely unrelated path without skill overlap",
      "Underselling your previous experience",
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
          "Group those tasks into skill categories.",
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
          "Choose 3 achievements that prove transferable skills.",
          "Turn each achievement into a short case-study bullet.",
          "Update your résumé or profile around outcomes, not duties.",
        ],
      },
      {
        week: "Week 4",
        focus: "Repositioning test",
        actions: [
          "Apply to 5 adjacent roles.",
          "Message 3 people who moved into your target direction.",
          "Refine your target based on responses and market feedback.",
        ],
      },
    ],

    reportHeadline: "You are not starting from zero.",
    reportSubheadline:
      "Your strongest path is likely a smarter translation of what you already know.",
    whyYouGotThisResult: [
      "Your answers show that existing skills are still important to your next move.",
      "You may want change, but not a full reset.",
      "The best opportunity may be adjacent rather than completely unrelated.",
    ],
    decisionPattern:
      "You are likely in a bridge moment: not fully staying, not fully starting over.",
    careerRiskLevel: "Moderate",
    riskExplanation:
      "The risk is choosing a new path without clearly connecting it to your existing proof and skills.",
    strongestSignals: [
      {
        title: "Transferable skill value",
        description:
          "Your experience likely has more market value than you currently see.",
      },
      {
        title: "Adjacent opportunity",
        description:
          "A related move may give you change without unnecessary restart costs.",
      },
      {
        title: "Repackaging matters",
        description:
          "How you describe your experience may be as important as the experience itself.",
      },
    ],
    watchOutFor: [
      {
        title: "Starting from zero thinking",
        description:
          "Do not throw away useful experience just because your old title feels limiting.",
      },
      {
        title: "Vague applications",
        description:
          "If you do not translate your skills into the target market’s language, people may miss your value.",
      },
    ],
    idealWorkEnvironment: [
      {
        title: "Skill-transfer friendly",
        description:
          "Environments that value problem-solving, communication, organization, operations, leadership, or domain knowledge.",
      },
      {
        title: "Adjacent learning curve",
        description:
          "A place where you can learn new context without losing the value of your past.",
      },
    ],
    poorFitEnvironments: [
      {
        title: "Credential-only gatekeeping",
        description:
          "Some paths may ignore transferable value if they require formal credentials first.",
      },
      {
        title: "Totally unrelated jumps",
        description:
          "A move with no skill overlap may create unnecessary difficulty.",
      },
    ],
    bestNextRoles: [
      {
        title: "Adjacent industry role",
        description:
          "Same skills, different market or customer.",
      },
      {
        title: "Operations or coordination role",
        description:
          "Useful if your past experience involved organization, systems, or execution.",
      },
      {
        title: "Customer, project, or strategy-facing role",
        description:
          "Useful if your strength is understanding people, problems, and outcomes.",
      },
    ],
    transitionStrategy: [
      {
        title: "Inventory",
        body: "List what you can already do well.",
      },
      {
        title: "Translate",
        body: "Rewrite your skills in the language of the target role.",
      },
      {
        title: "Test",
        body: "Apply or network with adjacent roles and learn from the response.",
      },
    ],
    personalOperatingAdvice: [
      "Lead with outcomes, not old job titles.",
      "Use proof from your past to reduce perceived risk.",
      "Move toward adjacent options before unrelated ones.",
    ],
    commonMistakes: [
      "Only applying to familiar job titles",
      "Describing past duties instead of transferable outcomes",
      "Choosing a new direction without market research",
    ],
    careerExperiments: [
      {
        title: "Transferable skill map",
        purpose:
          "Turn your experience into language that other industries understand.",
        steps: [
          "List 10 things you know how to do.",
          "Write who benefits from each skill.",
          "Find 3 roles where those skills solve real problems.",
        ],
      },
      {
        title: "Adjacent role test",
        purpose:
          "Check whether your background fits nearby opportunities.",
        steps: [
          "Find 10 adjacent job posts.",
          "Mark repeated requirements.",
          "Compare them with your strongest proof points.",
        ],
      },
    ],
    scripts: [
      {
        title: "Transferable value message",
        context: "Use this when contacting someone in a target role.",
        script:
          "I’m exploring how my background in [your area] could transfer into [target area]. From your experience, which skills matter most for someone making that kind of move?",
      },
      {
        title: "Résumé bullet template",
        context: "Use this to reposition experience.",
        script:
          "Improved [outcome] by using [skill/action], resulting in [proof, number, or clear business result].",
      },
    ],
    first24Hours: {
      title: "Build your skill bridge",
      actions: [
        "Write 10 skills you have used repeatedly.",
        "Find 5 roles where those skills appear in job descriptions.",
        "Rewrite one past achievement for a new target role.",
      ],
    },
    finalGuidance:
      "Your past experience is not a cage. It is material you can reposition.",
  },

  purposeful_switcher: {
    key: "purposeful_switcher",
    title: "Purposeful Switcher",
    shortTitle: "Switcher",
    plainMeaning:
      "You may need a more meaningful career direction, not just a better job.",
    description:
      "Your answers suggest that your current path may be misaligned with your values, interests, identity, or desired future. Your best move may involve a real career switch, but it should be tested carefully and built around evidence, not only emotion.",
    mainBottleneck:
      "Your main bottleneck is alignment. You may be able to keep functioning in your current path, but it may cost motivation and long-term energy.",
    bestMove:
      "Explore a values-aligned switch through experiments before making a full leap.",
    avoidForNow: [
      "Romanticizing a new field without testing it",
      "Quitting from frustration instead of strategy",
      "Ignoring financial and lifestyle constraints",
      "Confusing fantasy work with daily reality",
    ],
    bestFor: [
      "People whose work no longer matches who they are",
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
          "List 3 roles or fields that may match those values.",
        ],
      },
      {
        week: "Week 2",
        focus: "Reality testing",
        actions: [
          "Research daily tasks of each possible path.",
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

    reportHeadline: "Move toward meaning, but test reality first.",
    reportSubheadline:
      "Your result points toward alignment, identity, and values as major decision drivers.",
    whyYouGotThisResult: [
      "Your answers show that meaning and alignment matter strongly.",
      "Your current work may feel disconnected from who you are becoming.",
      "A new direction may be right, but it needs real-world testing.",
    ],
    decisionPattern:
      "You are likely to feel stuck when work conflicts with your values, even if the job is objectively acceptable.",
    careerRiskLevel: "Moderate",
    riskExplanation:
      "The risk is moving from emotional dissatisfaction into an untested fantasy version of a new path.",
    strongestSignals: [
      {
        title: "Values alignment matters",
        description:
          "You need work that feels connected to who you are and what matters to you.",
      },
      {
        title: "Identity shift",
        description:
          "Your old career identity may no longer feel accurate.",
      },
      {
        title: "Meaning drives energy",
        description:
          "You may work harder and learn faster when the direction feels personally worthwhile.",
      },
    ],
    watchOutFor: [
      {
        title: "Fantasy careers",
        description:
          "Every path has boring, stressful, or repetitive parts. Test the daily reality before committing.",
      },
      {
        title: "Escaping instead of choosing",
        description:
          "Make sure you know what you are moving toward, not only what you are leaving.",
      },
    ],
    idealWorkEnvironment: [
      {
        title: "Mission or purpose connection",
        description:
          "A field, product, audience, or problem that feels worth your effort.",
      },
      {
        title: "Learning-friendly environment",
        description:
          "You may need room to build proof and close gaps.",
      },
    ],
    poorFitEnvironments: [
      {
        title: "Purely transactional work",
        description:
          "Work that feels meaningless may drain motivation over time.",
      },
      {
        title: "Values conflict",
        description:
          "Environments that conflict with your standards may become difficult to tolerate.",
      },
    ],
    bestNextRoles: [
      {
        title: "Mission-driven role",
        description:
          "A role connected to a problem, audience, or cause you care about.",
      },
      {
        title: "Creative or human-centered role",
        description:
          "Useful if your values involve expression, people, education, service, or impact.",
      },
      {
        title: "Values-aligned adjacent move",
        description:
          "A safer bridge from current experience into a more meaningful context.",
      },
    ],
    transitionStrategy: [
      {
        title: "Clarify values",
        body: "Define what the new path must include and what it must avoid.",
      },
      {
        title: "Reality-test",
        body: "Study daily tasks, income ranges, and entry barriers.",
      },
      {
        title: "Build evidence",
        body: "Complete one small project or conversation before committing.",
      },
    ],
    personalOperatingAdvice: [
      "Do not ignore meaning, but do not let emotion replace research.",
      "Test the daily reality of a path before investing heavily.",
      "Build a bridge between values and practical requirements.",
    ],
    commonMistakes: [
      "Romanticizing a new field",
      "Ignoring money and lifestyle constraints",
      "Making a leap before testing proof of fit",
    ],
    careerExperiments: [
      {
        title: "Values-to-work map",
        purpose:
          "Connect abstract values to actual work options.",
        steps: [
          "Write your top 5 work values.",
          "For each value, list one real role where it appears.",
          "Remove any path that sounds good but has daily tasks you dislike.",
        ],
      },
      {
        title: "One mini project",
        purpose:
          "Test whether the work gives you energy in practice.",
        steps: [
          "Choose one small project related to your target path.",
          "Complete it in under 3 hours.",
          "Write whether it gave energy, drained energy, or felt neutral.",
        ],
      },
    ],
    scripts: [
      {
        title: "Reality-check message",
        context: "Use this before investing in a new path.",
        script:
          "I’m exploring whether this field could be a better fit for my values. What does the daily work actually look like, including the parts people usually do not talk about?",
      },
      {
        title: "Values clarity prompt",
        context: "Use this for self-reflection.",
        script:
          "The kind of work I want more of includes [value 1], [value 2], and [value 3]. The kind of work I want less of includes [drain 1], [drain 2], and [drain 3].",
      },
    ],
    first24Hours: {
      title: "Define the direction, not just the escape",
      actions: [
        "Write what you want more of in work.",
        "Write what you want less of in work.",
        "Pick one path to reality-test this week.",
      ],
    },
    finalGuidance:
      "Your desire for meaning is not childish. It just needs a practical testing process.",
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
      "Your main bottleneck is structure. Freedom without a clear offer, audience, routine, or income plan can quickly become stress.",
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
          "Talk to 5 potential customers, peers, or buyers.",
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

    reportHeadline: "Build independence with structure.",
    reportSubheadline:
      "Your result points toward freedom, ownership, and self-directed work — but it needs a real system.",
    whyYouGotThisResult: [
      "Your answers show a strong need for autonomy and control.",
      "You may be motivated by building, testing, selling, creating, or leading your own direction.",
      "You are likely to do best when independence is paired with structure.",
    ],
    decisionPattern:
      "You may feel trapped when too many decisions are made for you, but you still need a clear operating system.",
    careerRiskLevel: "Moderate",
    riskExplanation:
      "The risk is jumping into freedom without a clear offer, audience, proof, or income plan.",
    strongestSignals: [
      {
        title: "Autonomy need",
        description:
          "You want more control over time, direction, standards, or income path.",
      },
      {
        title: "Builder energy",
        description:
          "You may gain energy from creating something directly instead of only fitting into a role.",
      },
      {
        title: "Risk tolerance",
        description:
          "You may be more open to testing uncertain opportunities than average.",
      },
    ],
    watchOutFor: [
      {
        title: "Too many ideas",
        description:
          "Multiple ideas can create motion without progress. Choose one test first.",
      },
      {
        title: "No distribution",
        description:
          "A good offer still needs people to see it, understand it, and trust it.",
      },
    ],
    idealWorkEnvironment: [
      {
        title: "High ownership",
        description:
          "You need room to make decisions and shape outcomes.",
      },
      {
        title: "Clear output-based work",
        description:
          "Projects, deliverables, services, or offers fit better than vague busywork.",
      },
    ],
    poorFitEnvironments: [
      {
        title: "Micromanagement",
        description:
          "Too much control from others may quickly reduce motivation.",
      },
      {
        title: "No room to build",
        description:
          "Roles with no experimentation or ownership may feel suffocating.",
      },
    ],
    bestNextRoles: [
      {
        title: "Freelance or consulting offer",
        description:
          "A small service based on a skill you already have.",
      },
      {
        title: "Side project or creator path",
        description:
          "A low-risk way to test independence before relying on it.",
      },
      {
        title: "High-autonomy role",
        description:
          "A role inside a company but with more ownership and less micromanagement.",
      },
    ],
    transitionStrategy: [
      {
        title: "Choose one audience",
        body: "Do not start with everyone. Choose one type of person or business.",
      },
      {
        title: "Create one offer",
        body: "Define the problem, promise, deliverable, and price.",
      },
      {
        title: "Test demand",
        body: "Talk to people and track real responses before scaling.",
      },
    ],
    personalOperatingAdvice: [
      "Freedom works best when you create rules for yourself.",
      "Start with one small offer, not ten ideas.",
      "Track demand before assuming people will buy.",
    ],
    commonMistakes: [
      "Quitting before proving demand",
      "Building too long before talking to customers",
      "Confusing independence with no structure",
    ],
    careerExperiments: [
      {
        title: "One-off offer test",
        purpose:
          "See whether someone wants a simple version of what you can provide.",
        steps: [
          "Pick one problem you can solve.",
          "Write one simple offer in one sentence.",
          "Send it to 10 relevant people or communities.",
        ],
      },
      {
        title: "Portfolio proof test",
        purpose:
          "Create evidence that shows what you can do.",
        steps: [
          "Create one sample result.",
          "Explain the problem and outcome.",
          "Ask 3 people if the offer is clear.",
        ],
      },
    ],
    scripts: [
      {
        title: "Offer validation message",
        context: "Use this to test demand without sounding pushy.",
        script:
          "I’m testing a small service that helps [audience] with [problem]. Is this something people like you would care about, or is there a bigger problem I should focus on instead?",
      },
      {
        title: "Simple offer template",
        context: "Use this to define your first offer.",
        script:
          "I help [specific audience] achieve [specific outcome] by doing [specific service or process], without [main pain or obstacle].",
      },
    ],
    first24Hours: {
      title: "Choose one testable offer",
      actions: [
        "List 3 problems you can help solve.",
        "Choose one audience you understand.",
        "Write one simple offer sentence.",
      ],
    },
    finalGuidance:
      "Independence can fit you well, but only if you treat it like a system, not just an escape.",
  },

  growth_accelerator: {
    key: "growth_accelerator",
    title: "Growth Accelerator",
    shortTitle: "Accelerator",
    plainMeaning:
      "You are likely ready for a bigger challenge, stronger positioning, or higher-level opportunity.",
    description:
      "Your answers suggest that you may not need a career switch. You may need more challenge, visibility, responsibility, compensation, leadership, or a clearer growth track.",
    mainBottleneck:
      "Your main bottleneck is under-positioning. You may be capable of more than your current role demands, but your value may not be visible or packaged strongly enough.",
    bestMove:
      "Turn your existing strengths into a clearer advancement strategy.",
    avoidForNow: [
      "Waiting for recognition without asking for it",
      "Changing careers only because you are under-challenged",
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
          "Update résumé or profile with stronger proof.",
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

    reportHeadline: "You may be ready for the next level.",
    reportSubheadline:
      "Your result points toward growth, stronger positioning, and more visible value.",
    whyYouGotThisResult: [
      "Your answers show ambition and readiness for more responsibility or progress.",
      "Your current path may still be useful, but the current level may be too small.",
      "You likely need better proof, visibility, or negotiation rather than a full reset.",
    ],
    decisionPattern:
      "You are likely to lose motivation when your work is too small for your ability.",
    careerRiskLevel: "Low",
    riskExplanation:
      "Your main risk is not career change. It is staying under-positioned and letting opportunities pass quietly.",
    strongestSignals: [
      {
        title: "Growth ambition",
        description:
          "You want more challenge, recognition, responsibility, or compensation.",
      },
      {
        title: "Career momentum",
        description:
          "You likely have experience you can turn into a stronger opportunity.",
      },
      {
        title: "Upgrade readiness",
        description:
          "You may be closer to the next level than you think.",
      },
    ],
    watchOutFor: [
      {
        title: "Invisible effort",
        description:
          "Doing more work does not automatically lead to better opportunities unless people see the value.",
      },
      {
        title: "Avoiding negotiation",
        description:
          "If you never ask for growth, you may keep getting the same level of opportunity.",
      },
    ],
    idealWorkEnvironment: [
      {
        title: "Performance-recognizing environment",
        description:
          "A place where outcomes, leadership, and responsibility are visible and rewarded.",
      },
      {
        title: "Growth track",
        description:
          "A role or company with a clear next level.",
      },
    ],
    poorFitEnvironments: [
      {
        title: "Flat structure",
        description:
          "No growth path may quickly become frustrating.",
      },
      {
        title: "Low ownership",
        description:
          "If you cannot own outcomes, your strongest value may stay hidden.",
      },
    ],
    bestNextRoles: [
      {
        title: "Higher-responsibility role",
        description:
          "A role that gives you ownership of outcomes, not just tasks.",
      },
      {
        title: "Leadership or specialist path",
        description:
          "A next-level track where your expertise becomes more visible.",
      },
      {
        title: "Better-paying company or market",
        description:
          "Sometimes the fastest growth is moving to a place that values your skills more.",
      },
    ],
    transitionStrategy: [
      {
        title: "Collect proof",
        body: "Document achievements, numbers, outcomes, and responsibility.",
      },
      {
        title: "Reposition",
        body: "Update your résumé or profile around value, not tasks.",
      },
      {
        title: "Ask or apply",
        body: "Create movement through conversations, applications, or negotiation.",
      },
    ],
    personalOperatingAdvice: [
      "Your work needs visibility, not just effort.",
      "Speak in outcomes, numbers, responsibility, and business value.",
      "Look for roles that stretch you without burning you out.",
    ],
    commonMistakes: [
      "Waiting to be noticed",
      "Accepting more work without more growth",
      "Thinking under-challenge means the whole career is wrong",
    ],
    careerExperiments: [
      {
        title: "Impact proof audit",
        purpose:
          "Turn invisible effort into visible evidence.",
        steps: [
          "List 10 achievements.",
          "Add numbers, outcomes, or responsibilities.",
          "Choose the strongest 3 for your résumé or profile.",
        ],
      },
      {
        title: "Next-level role scan",
        purpose:
          "Identify what the next level actually requires.",
        steps: [
          "Find 10 job posts one level above your current role.",
          "Highlight repeated requirements.",
          "Mark what you already have and what you need to build.",
        ],
      },
    ],
    scripts: [
      {
        title: "Promotion conversation",
        context: "Use this with a manager.",
        script:
          "I want to grow into a higher-impact role. Based on my current results, what would I need to demonstrate over the next 60–90 days to be considered for more responsibility or compensation?",
      },
      {
        title: "Achievement bullet template",
        context: "Use this for résumé/profile positioning.",
        script:
          "Led or improved [area] by doing [action], resulting in [measurable or clear outcome].",
      },
    ],
    first24Hours: {
      title: "Build your growth case",
      actions: [
        "List your 5 strongest achievements.",
        "Add proof or numbers where possible.",
        "Find 3 next-level roles and compare requirements.",
      ],
    },
    finalGuidance:
      "You may not need to change who you are professionally. You may need to show your value more clearly and move toward a bigger table.",
  },
};