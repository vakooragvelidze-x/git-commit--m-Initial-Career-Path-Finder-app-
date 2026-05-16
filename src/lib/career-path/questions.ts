export const QUESTIONS = [
  // 1. CURRENT FIT — 3 QUESTIONS
  {
    id: "q01_current_fit",
    section: "Current fit",
    question: "Which sentence best describes your work life right now?",
    options: [
      {
        id: "a",
        label:
          "I feel drained and need more stability before changing anything big.",
        dimensions: {
          stabilityNeed: 5,
          burnoutRisk: 5,
          riskTolerance: 1,
          changeReadiness: 1,
        },
        results: {
          stability_planner: 6,
        },
      },
      {
        id: "b",
        label:
          "My field may still be right, but my current role or company does not fit well.",
        dimensions: {
          currentFit: 4,
          growthAmbition: 4,
          skillLeverage: 4,
          changeReadiness: 3,
        },
        results: {
          current_path_optimizer: 5,
          growth_accelerator: 3,
        },
      },
      {
        id: "c",
        label:
          "I want a different direction, but I do not want to waste my past experience.",
        dimensions: {
          skillLeverage: 5,
          changeReadiness: 4,
          riskTolerance: 3,
          learningCapacity: 3,
        },
        results: {
          skill_repositioner: 6,
          purposeful_switcher: 2,
        },
      },
      {
        id: "d",
        label:
          "My work no longer matches who I am or what matters to me.",
        dimensions: {
          valuesNeed: 5,
          currentFit: 1,
          changeReadiness: 4,
          learningCapacity: 3,
        },
        results: {
          purposeful_switcher: 6,
        },
      },
      {
        id: "e",
        label:
          "I want more freedom, control, and independence in how I work.",
        dimensions: {
          autonomyNeed: 5,
          riskTolerance: 4,
          changeReadiness: 4,
          growthAmbition: 3,
        },
        results: {
          independent_builder: 6,
        },
      },
    ],
  },
  {
    id: "q02_current_problem",
    section: "Current fit",
    question: "What feels like the biggest problem in your current career situation?",
    options: [
      {
        id: "a",
        label: "I feel overextended, tired, or mentally overloaded.",
        dimensions: {
          burnoutRisk: 5,
          stabilityNeed: 4,
          learningCapacity: 1,
          riskTolerance: 1,
        },
        results: {
          stability_planner: 6,
        },
      },
      {
        id: "b",
        label:
          "I am capable of more, but my current role does not use my full ability.",
        dimensions: {
          growthAmbition: 5,
          skillLeverage: 4,
          currentFit: 3,
          changeReadiness: 3,
        },
        results: {
          growth_accelerator: 5,
          current_path_optimizer: 3,
        },
      },
      {
        id: "c",
        label:
          "I have useful experience, but I do not know how to reposition it.",
        dimensions: {
          skillLeverage: 5,
          changeReadiness: 3,
          learningCapacity: 3,
        },
        results: {
          skill_repositioner: 6,
        },
      },
      {
        id: "d",
        label:
          "The work itself feels misaligned with my values or personality.",
        dimensions: {
          valuesNeed: 5,
          currentFit: 1,
          changeReadiness: 4,
        },
        results: {
          purposeful_switcher: 6,
        },
      },
      {
        id: "e",
        label:
          "I dislike being boxed into someone else’s structure or decisions.",
        dimensions: {
          autonomyNeed: 5,
          riskTolerance: 4,
          growthAmbition: 3,
        },
        results: {
          independent_builder: 6,
        },
      },
    ],
  },
  {
    id: "q03_current_fit_future",
    section: "Current fit",
    question: "When you imagine staying on your current path for another year, what do you feel?",
    options: [
      {
        id: "a",
        label: "Relief, if I can make it more stable and less stressful.",
        dimensions: {
          currentFit: 3,
          stabilityNeed: 5,
          burnoutRisk: 4,
        },
        results: {
          stability_planner: 5,
          current_path_optimizer: 2,
        },
      },
      {
        id: "b",
        label: "It could work if I get more responsibility, money, or recognition.",
        dimensions: {
          currentFit: 4,
          growthAmbition: 5,
          skillLeverage: 4,
        },
        results: {
          growth_accelerator: 5,
          current_path_optimizer: 4,
        },
      },
      {
        id: "c",
        label: "I would rather move sideways into something related but better.",
        dimensions: {
          skillLeverage: 5,
          changeReadiness: 4,
          riskTolerance: 3,
        },
        results: {
          skill_repositioner: 6,
        },
      },
      {
        id: "d",
        label: "I feel like I would be delaying a change I already know I need.",
        dimensions: {
          valuesNeed: 5,
          currentFit: 1,
          changeReadiness: 5,
        },
        results: {
          purposeful_switcher: 6,
        },
      },
      {
        id: "e",
        label: "I mostly want to create my own path instead of staying inside a fixed track.",
        dimensions: {
          autonomyNeed: 5,
          riskTolerance: 4,
          growthAmbition: 4,
        },
        results: {
          independent_builder: 6,
        },
      },
    ],
  },

  // 2. ENERGY / BURNOUT RISK — 3 QUESTIONS
  {
    id: "q04_energy",
    section: "Energy and burnout risk",
    question: "How much energy do you realistically have for career change right now?",
    options: [
      {
        id: "a",
        label: "Very little. I need recovery and stability first.",
        dimensions: {
          burnoutRisk: 5,
          stabilityNeed: 5,
          learningCapacity: 1,
          riskTolerance: 1,
        },
        results: {
          stability_planner: 7,
        },
      },
      {
        id: "b",
        label: "Some energy, but only for small practical improvements.",
        dimensions: {
          stabilityNeed: 4,
          burnoutRisk: 3,
          changeReadiness: 2,
          learningCapacity: 2,
        },
        results: {
          stability_planner: 4,
          current_path_optimizer: 3,
        },
      },
      {
        id: "c",
        label: "Enough energy to update my role, positioning, or opportunities.",
        dimensions: {
          growthAmbition: 4,
          skillLeverage: 4,
          changeReadiness: 3,
          learningCapacity: 3,
        },
        results: {
          current_path_optimizer: 4,
          growth_accelerator: 4,
        },
      },
      {
        id: "d",
        label: "Enough energy to explore a serious transition if it is planned well.",
        dimensions: {
          changeReadiness: 5,
          learningCapacity: 4,
          riskTolerance: 3,
          valuesNeed: 3,
        },
        results: {
          skill_repositioner: 3,
          purposeful_switcher: 4,
        },
      },
      {
        id: "e",
        label: "High energy. I am ready to build, test, or take a bigger move.",
        dimensions: {
          growthAmbition: 5,
          autonomyNeed: 4,
          changeReadiness: 5,
          riskTolerance: 5,
        },
        results: {
          independent_builder: 4,
          growth_accelerator: 4,
        },
      },
    ],
  },
  {
    id: "q05_stress_pattern",
    section: "Energy and burnout risk",
    question: "Which stress pattern sounds most familiar?",
    options: [
      {
        id: "a",
        label: "I am tired from pressure, responsibility, or lack of breathing room.",
        dimensions: {
          burnoutRisk: 5,
          stabilityNeed: 5,
          riskTolerance: 1,
        },
        results: {
          stability_planner: 6,
        },
      },
      {
        id: "b",
        label: "I am frustrated because I am underused or not progressing.",
        dimensions: {
          growthAmbition: 5,
          currentFit: 3,
          skillLeverage: 3,
        },
        results: {
          growth_accelerator: 5,
          current_path_optimizer: 3,
        },
      },
      {
        id: "c",
        label: "I am confused because I have options but no clear direction.",
        dimensions: {
          changeReadiness: 4,
          skillLeverage: 4,
          learningCapacity: 3,
        },
        results: {
          skill_repositioner: 5,
        },
      },
      {
        id: "d",
        label: "I am emotionally disconnected from the work itself.",
        dimensions: {
          valuesNeed: 5,
          currentFit: 1,
          burnoutRisk: 3,
        },
        results: {
          purposeful_switcher: 6,
        },
      },
      {
        id: "e",
        label: "I am restless because I want more control over my time and decisions.",
        dimensions: {
          autonomyNeed: 5,
          growthAmbition: 4,
          riskTolerance: 4,
        },
        results: {
          independent_builder: 6,
        },
      },
    ],
  },
  {
    id: "q06_decision_timing",
    section: "Energy and burnout risk",
    question: "What kind of career decision would be healthiest for you right now?",
    options: [
      {
        id: "a",
        label: "A slower decision after I reduce stress and regain clarity.",
        dimensions: {
          burnoutRisk: 5,
          stabilityNeed: 5,
          learningCapacity: 1,
        },
        results: {
          stability_planner: 7,
        },
      },
      {
        id: "b",
        label: "A practical improvement inside or near my current path.",
        dimensions: {
          currentFit: 4,
          skillLeverage: 4,
          stabilityNeed: 3,
        },
        results: {
          current_path_optimizer: 5,
        },
      },
      {
        id: "c",
        label: "A low-risk transition that uses what I already know.",
        dimensions: {
          skillLeverage: 5,
          riskTolerance: 3,
          changeReadiness: 4,
        },
        results: {
          skill_repositioner: 6,
        },
      },
      {
        id: "d",
        label: "A meaningful shift toward work that fits my values better.",
        dimensions: {
          valuesNeed: 5,
          changeReadiness: 5,
          learningCapacity: 3,
        },
        results: {
          purposeful_switcher: 6,
        },
      },
      {
        id: "e",
        label: "A bold experiment where I test more independent work.",
        dimensions: {
          autonomyNeed: 5,
          riskTolerance: 5,
          growthAmbition: 4,
        },
        results: {
          independent_builder: 6,
        },
      },
    ],
  },

  // 3. STABILITY & RESPONSIBILITY — 3 QUESTIONS
  {
    id: "q07_stability",
    section: "Stability and responsibility",
    question: "How important is stability in your next career move?",
    options: [
      {
        id: "a",
        label: "Extremely important. I cannot afford a risky move right now.",
        dimensions: {
          stabilityNeed: 5,
          riskTolerance: 1,
          burnoutRisk: 3,
        },
        results: {
          stability_planner: 7,
        },
      },
      {
        id: "b",
        label: "Important, but I still want progress inside a safer path.",
        dimensions: {
          stabilityNeed: 4,
          growthAmbition: 3,
          currentFit: 3,
        },
        results: {
          current_path_optimizer: 4,
          stability_planner: 3,
        },
      },
      {
        id: "c",
        label: "Important, but I can make a planned transition if it is not reckless.",
        dimensions: {
          stabilityNeed: 3,
          skillLeverage: 4,
          changeReadiness: 4,
          riskTolerance: 3,
        },
        results: {
          skill_repositioner: 5,
        },
      },
      {
        id: "d",
        label: "Less important than finding work that feels meaningful.",
        dimensions: {
          valuesNeed: 5,
          changeReadiness: 4,
          riskTolerance: 3,
        },
        results: {
          purposeful_switcher: 5,
        },
      },
      {
        id: "e",
        label: "I can handle uncertainty if it gives me independence or upside.",
        dimensions: {
          autonomyNeed: 5,
          riskTolerance: 5,
          growthAmbition: 4,
        },
        results: {
          independent_builder: 6,
        },
      },
    ],
  },
  {
    id: "q08_responsibilities",
    section: "Stability and responsibility",
    question: "How do your current responsibilities affect your career options?",
    options: [
      {
        id: "a",
        label: "They limit my options heavily. I need a careful plan.",
        dimensions: {
          stabilityNeed: 5,
          riskTolerance: 1,
          learningCapacity: 1,
        },
        results: {
          stability_planner: 7,
        },
      },
      {
        id: "b",
        label: "They matter, but I can still improve my current situation.",
        dimensions: {
          stabilityNeed: 4,
          currentFit: 3,
          growthAmbition: 3,
        },
        results: {
          current_path_optimizer: 5,
        },
      },
      {
        id: "c",
        label: "They mean I need a transition that uses my existing skills.",
        dimensions: {
          skillLeverage: 5,
          stabilityNeed: 3,
          changeReadiness: 3,
        },
        results: {
          skill_repositioner: 6,
        },
      },
      {
        id: "d",
        label: "They make change harder, but staying misaligned also has a cost.",
        dimensions: {
          valuesNeed: 4,
          changeReadiness: 4,
          stabilityNeed: 3,
        },
        results: {
          purposeful_switcher: 4,
          skill_repositioner: 2,
        },
      },
      {
        id: "e",
        label: "I can create space for a side project, offer, or independent path.",
        dimensions: {
          autonomyNeed: 5,
          learningCapacity: 4,
          riskTolerance: 4,
        },
        results: {
          independent_builder: 6,
        },
      },
    ],
  },
  {
    id: "q09_money_risk",
    section: "Stability and responsibility",
    question: "What is your relationship with financial risk right now?",
    options: [
      {
        id: "a",
        label: "I need to protect income first. Risk must be very low.",
        dimensions: {
          stabilityNeed: 5,
          riskTolerance: 1,
          burnoutRisk: 3,
        },
        results: {
          stability_planner: 7,
        },
      },
      {
        id: "b",
        label: "I want better income, but through a safer career upgrade.",
        dimensions: {
          growthAmbition: 4,
          stabilityNeed: 4,
          currentFit: 3,
          skillLeverage: 3,
        },
        results: {
          current_path_optimizer: 5,
          growth_accelerator: 3,
        },
      },
      {
        id: "c",
        label: "I can accept moderate risk if my existing experience gives me leverage.",
        dimensions: {
          skillLeverage: 5,
          riskTolerance: 3,
          changeReadiness: 4,
        },
        results: {
          skill_repositioner: 6,
        },
      },
      {
        id: "d",
        label: "I may accept temporary discomfort for a more meaningful direction.",
        dimensions: {
          valuesNeed: 5,
          riskTolerance: 3,
          changeReadiness: 4,
        },
        results: {
          purposeful_switcher: 5,
        },
      },
      {
        id: "e",
        label: "I am comfortable testing something independent if upside is real.",
        dimensions: {
          autonomyNeed: 5,
          riskTolerance: 5,
          growthAmbition: 4,
        },
        results: {
          independent_builder: 6,
        },
      },
    ],
  },

  // 4. SKILLS & LEVERAGE — 3 QUESTIONS
  {
    id: "q10_skills",
    section: "Skills and leverage",
    question: "How do you see your current skills?",
    options: [
      {
        id: "a",
        label: "I am too drained to think clearly about skills right now.",
        dimensions: {
          burnoutRisk: 5,
          stabilityNeed: 4,
          learningCapacity: 1,
          skillLeverage: 1,
        },
        results: {
          stability_planner: 6,
        },
      },
      {
        id: "b",
        label: "My skills are useful, but I need a better role or environment.",
        dimensions: {
          skillLeverage: 4,
          currentFit: 4,
          growthAmbition: 3,
        },
        results: {
          current_path_optimizer: 5,
        },
      },
      {
        id: "c",
        label: "My skills are transferable, but I need to package them differently.",
        dimensions: {
          skillLeverage: 5,
          changeReadiness: 4,
          learningCapacity: 3,
        },
        results: {
          skill_repositioner: 7,
        },
      },
      {
        id: "d",
        label: "My skills may help, but I need work that feels more aligned.",
        dimensions: {
          valuesNeed: 4,
          skillLeverage: 3,
          changeReadiness: 4,
        },
        results: {
          purposeful_switcher: 5,
          skill_repositioner: 2,
        },
      },
      {
        id: "e",
        label: "My skills could become an offer, service, product, or independent path.",
        dimensions: {
          autonomyNeed: 5,
          skillLeverage: 4,
          riskTolerance: 4,
        },
        results: {
          independent_builder: 6,
        },
      },
    ],
  },
  {
    id: "q11_experience",
    section: "Skills and leverage",
    question: "What should happen to your past experience?",
    options: [
      {
        id: "a",
        label: "I need to stabilize first before deciding how to use it.",
        dimensions: {
          stabilityNeed: 5,
          burnoutRisk: 4,
          learningCapacity: 1,
        },
        results: {
          stability_planner: 6,
        },
      },
      {
        id: "b",
        label: "It should help me get a stronger position in a similar direction.",
        dimensions: {
          currentFit: 4,
          skillLeverage: 5,
          growthAmbition: 4,
        },
        results: {
          current_path_optimizer: 4,
          growth_accelerator: 4,
        },
      },
      {
        id: "c",
        label: "It should become the bridge into a better related path.",
        dimensions: {
          skillLeverage: 5,
          changeReadiness: 4,
          riskTolerance: 3,
        },
        results: {
          skill_repositioner: 7,
        },
      },
      {
        id: "d",
        label: "Some of it matters, but I may need a more meaningful reset.",
        dimensions: {
          valuesNeed: 5,
          currentFit: 1,
          changeReadiness: 4,
        },
        results: {
          purposeful_switcher: 6,
        },
      },
      {
        id: "e",
        label: "It should help me build something with more independence.",
        dimensions: {
          autonomyNeed: 5,
          skillLeverage: 4,
          growthAmbition: 3,
        },
        results: {
          independent_builder: 6,
        },
      },
    ],
  },
  {
    id: "q12_learning",
    section: "Skills and leverage",
    question: "How much learning or retraining capacity do you have right now?",
    options: [
      {
        id: "a",
        label: "Very little. I need a simpler next step.",
        dimensions: {
          learningCapacity: 1,
          burnoutRisk: 5,
          stabilityNeed: 4,
        },
        results: {
          stability_planner: 6,
        },
      },
      {
        id: "b",
        label: "Some, but I would rather improve what I already do.",
        dimensions: {
          learningCapacity: 2,
          currentFit: 4,
          skillLeverage: 4,
        },
        results: {
          current_path_optimizer: 5,
        },
      },
      {
        id: "c",
        label: "Enough to reposition my existing skills into a related path.",
        dimensions: {
          learningCapacity: 4,
          skillLeverage: 5,
          changeReadiness: 4,
        },
        results: {
          skill_repositioner: 6,
        },
      },
      {
        id: "d",
        label: "Enough to learn a new direction if it truly fits me better.",
        dimensions: {
          learningCapacity: 5,
          valuesNeed: 4,
          changeReadiness: 5,
        },
        results: {
          purposeful_switcher: 6,
        },
      },
      {
        id: "e",
        label: "High. I can learn, test, build, and iterate fast.",
        dimensions: {
          learningCapacity: 5,
          autonomyNeed: 4,
          riskTolerance: 5,
          growthAmbition: 4,
        },
        results: {
          independent_builder: 4,
          growth_accelerator: 3,
        },
      },
    ],
  },

  // 5. VALUES & MEANING — 3 QUESTIONS
  {
    id: "q13_values",
    section: "Values and meaning",
    question: "How important is meaning in your next career move?",
    options: [
      {
        id: "a",
        label: "Meaning matters, but stability and energy come first right now.",
        dimensions: {
          stabilityNeed: 5,
          burnoutRisk: 4,
          valuesNeed: 2,
        },
        results: {
          stability_planner: 5,
        },
      },
      {
        id: "b",
        label: "I want my current path to feel more useful or rewarding.",
        dimensions: {
          currentFit: 4,
          valuesNeed: 3,
          growthAmbition: 3,
        },
        results: {
          current_path_optimizer: 5,
        },
      },
      {
        id: "c",
        label: "I want to use my skills in a context that matters more.",
        dimensions: {
          skillLeverage: 5,
          valuesNeed: 4,
          changeReadiness: 3,
        },
        results: {
          skill_repositioner: 5,
        },
      },
      {
        id: "d",
        label: "It is central. Misaligned work feels increasingly unacceptable.",
        dimensions: {
          valuesNeed: 5,
          currentFit: 1,
          changeReadiness: 5,
        },
        results: {
          purposeful_switcher: 7,
        },
      },
      {
        id: "e",
        label: "Meaning matters most when I have freedom to shape the work myself.",
        dimensions: {
          autonomyNeed: 5,
          valuesNeed: 4,
          riskTolerance: 4,
        },
        results: {
          independent_builder: 5,
          purposeful_switcher: 2,
        },
      },
    ],
  },
  {
    id: "q14_work_environment",
    section: "Values and meaning",
    question: "Which environment would probably fit you better?",
    options: [
      {
        id: "a",
        label: "A calmer, clearer environment with less pressure.",
        dimensions: {
          stabilityNeed: 5,
          burnoutRisk: 4,
          riskTolerance: 1,
        },
        results: {
          stability_planner: 6,
        },
      },
      {
        id: "b",
        label: "A better-managed version of the same field or role type.",
        dimensions: {
          currentFit: 5,
          skillLeverage: 4,
          growthAmbition: 2,
        },
        results: {
          current_path_optimizer: 6,
        },
      },
      {
        id: "c",
        label: "A related environment where my experience is valued differently.",
        dimensions: {
          skillLeverage: 5,
          changeReadiness: 4,
          valuesNeed: 2,
        },
        results: {
          skill_repositioner: 6,
        },
      },
      {
        id: "d",
        label: "An environment with stronger mission, purpose, or personal meaning.",
        dimensions: {
          valuesNeed: 5,
          changeReadiness: 4,
          currentFit: 1,
        },
        results: {
          purposeful_switcher: 6,
        },
      },
      {
        id: "e",
        label: "An environment where I set direction, standards, and priorities.",
        dimensions: {
          autonomyNeed: 5,
          riskTolerance: 4,
          growthAmbition: 4,
        },
        results: {
          independent_builder: 6,
        },
      },
    ],
  },
  {
    id: "q15_regret",
    section: "Values and meaning",
    question: "What would you regret most one year from now?",
    options: [
      {
        id: "a",
        label: "Making a rushed decision while tired or unstable.",
        dimensions: {
          stabilityNeed: 5,
          burnoutRisk: 4,
          riskTolerance: 1,
        },
        results: {
          stability_planner: 7,
        },
      },
      {
        id: "b",
        label: "Staying underpaid, underused, or invisible in my current path.",
        dimensions: {
          growthAmbition: 5,
          currentFit: 3,
          skillLeverage: 4,
        },
        results: {
          growth_accelerator: 5,
          current_path_optimizer: 3,
        },
      },
      {
        id: "c",
        label: "Not using my existing experience to move into something better.",
        dimensions: {
          skillLeverage: 5,
          changeReadiness: 4,
          growthAmbition: 3,
        },
        results: {
          skill_repositioner: 6,
        },
      },
      {
        id: "d",
        label: "Ignoring the fact that my work no longer fits my values.",
        dimensions: {
          valuesNeed: 5,
          currentFit: 1,
          changeReadiness: 5,
        },
        results: {
          purposeful_switcher: 7,
        },
      },
      {
        id: "e",
        label: "Never testing whether I could build a more independent path.",
        dimensions: {
          autonomyNeed: 5,
          riskTolerance: 5,
          growthAmbition: 4,
        },
        results: {
          independent_builder: 7,
        },
      },
    ],
  },

  // 6. AUTONOMY & WORK STYLE — 3 QUESTIONS
  {
    id: "q16_autonomy",
    section: "Autonomy and work style",
    question: "How much independence do you want in your work?",
    options: [
      {
        id: "a",
        label: "Less independence right now. I need structure and stability.",
        dimensions: {
          stabilityNeed: 5,
          autonomyNeed: 1,
          burnoutRisk: 3,
        },
        results: {
          stability_planner: 6,
        },
      },
      {
        id: "b",
        label: "Some independence, but inside a better role or organization.",
        dimensions: {
          currentFit: 4,
          autonomyNeed: 3,
          growthAmbition: 3,
        },
        results: {
          current_path_optimizer: 5,
        },
      },
      {
        id: "c",
        label: "More independence in a related path where my skills transfer.",
        dimensions: {
          skillLeverage: 5,
          autonomyNeed: 4,
          changeReadiness: 3,
        },
        results: {
          skill_repositioner: 5,
        },
      },
      {
        id: "d",
        label: "Enough independence to choose work that fits my values.",
        dimensions: {
          valuesNeed: 4,
          autonomyNeed: 4,
          changeReadiness: 4,
        },
        results: {
          purposeful_switcher: 5,
        },
      },
      {
        id: "e",
        label: "A lot. I want control over direction, time, decisions, and standards.",
        dimensions: {
          autonomyNeed: 5,
          riskTolerance: 5,
          growthAmbition: 4,
        },
        results: {
          independent_builder: 7,
        },
      },
    ],
  },
  {
    id: "q17_work_style",
    section: "Autonomy and work style",
    question: "Which work style sounds most natural to you?",
    options: [
      {
        id: "a",
        label: "Clear expectations, predictable pace, and low chaos.",
        dimensions: {
          stabilityNeed: 5,
          burnoutRisk: 3,
          riskTolerance: 1,
        },
        results: {
          stability_planner: 6,
        },
      },
      {
        id: "b",
        label: "A structured role where I can grow and become more valuable.",
        dimensions: {
          currentFit: 4,
          growthAmbition: 5,
          skillLeverage: 3,
        },
        results: {
          growth_accelerator: 5,
          current_path_optimizer: 4,
        },
      },
      {
        id: "c",
        label: "Problem-solving in a new context using skills I already have.",
        dimensions: {
          skillLeverage: 5,
          changeReadiness: 4,
          learningCapacity: 3,
        },
        results: {
          skill_repositioner: 6,
        },
      },
      {
        id: "d",
        label: "Work that feels human, meaningful, creative, or personally aligned.",
        dimensions: {
          valuesNeed: 5,
          learningCapacity: 3,
          changeReadiness: 3,
        },
        results: {
          purposeful_switcher: 6,
        },
      },
      {
        id: "e",
        label: "Building, leading, selling, freelancing, or creating something directly.",
        dimensions: {
          autonomyNeed: 5,
          riskTolerance: 5,
          growthAmbition: 5,
        },
        results: {
          independent_builder: 6,
          growth_accelerator: 2,
        },
      },
    ],
  },
  {
    id: "q18_decision_control",
    section: "Autonomy and work style",
    question: "What kind of control do you most want?",
    options: [
      {
        id: "a",
        label: "Control over stress, schedule, and stability.",
        dimensions: {
          stabilityNeed: 5,
          burnoutRisk: 4,
          autonomyNeed: 2,
        },
        results: {
          stability_planner: 6,
        },
      },
      {
        id: "b",
        label: "Control over growth, responsibility, and recognition.",
        dimensions: {
          growthAmbition: 5,
          currentFit: 4,
          skillLeverage: 3,
        },
        results: {
          growth_accelerator: 5,
          current_path_optimizer: 3,
        },
      },
      {
        id: "c",
        label: "Control over how my existing skills are positioned.",
        dimensions: {
          skillLeverage: 5,
          autonomyNeed: 3,
          changeReadiness: 4,
        },
        results: {
          skill_repositioner: 6,
        },
      },
      {
        id: "d",
        label: "Control over whether my work matches my values.",
        dimensions: {
          valuesNeed: 5,
          autonomyNeed: 3,
          changeReadiness: 4,
        },
        results: {
          purposeful_switcher: 6,
        },
      },
      {
        id: "e",
        label: "Control over the whole path, not just the next job.",
        dimensions: {
          autonomyNeed: 5,
          riskTolerance: 5,
          growthAmbition: 4,
        },
        results: {
          independent_builder: 7,
        },
      },
    ],
  },

  // 7. CHANGE READINESS — 4 QUESTIONS
  {
    id: "q19_readiness",
    section: "Change readiness",
    question: "How ready are you to take action in the next 30 days?",
    options: [
      {
        id: "a",
        label: "I need to stabilize before taking major action.",
        dimensions: {
          stabilityNeed: 5,
          burnoutRisk: 4,
          changeReadiness: 1,
        },
        results: {
          stability_planner: 7,
        },
      },
      {
        id: "b",
        label: "I can improve my current role, positioning, or opportunities.",
        dimensions: {
          currentFit: 4,
          growthAmbition: 4,
          changeReadiness: 3,
        },
        results: {
          current_path_optimizer: 5,
          growth_accelerator: 3,
        },
      },
      {
        id: "c",
        label: "I can research and test a related path.",
        dimensions: {
          skillLeverage: 5,
          changeReadiness: 4,
          learningCapacity: 4,
        },
        results: {
          skill_repositioner: 6,
        },
      },
      {
        id: "d",
        label: "I can begin moving toward a more meaningful direction.",
        dimensions: {
          valuesNeed: 5,
          changeReadiness: 5,
          learningCapacity: 4,
        },
        results: {
          purposeful_switcher: 6,
        },
      },
      {
        id: "e",
        label: "I can start testing an independent offer, project, or path.",
        dimensions: {
          autonomyNeed: 5,
          riskTolerance: 5,
          changeReadiness: 5,
        },
        results: {
          independent_builder: 7,
        },
      },
    ],
  },
  {
    id: "q20_next_step",
    section: "Change readiness",
    question: "Which next step feels most realistic?",
    options: [
      {
        id: "a",
        label: "Audit my energy, money, time, and responsibilities first.",
        dimensions: {
          stabilityNeed: 5,
          burnoutRisk: 3,
          learningCapacity: 2,
        },
        results: {
          stability_planner: 7,
        },
      },
      {
        id: "b",
        label: "Ask for better responsibility, pay, clarity, or growth.",
        dimensions: {
          currentFit: 4,
          growthAmbition: 5,
          skillLeverage: 3,
        },
        results: {
          current_path_optimizer: 5,
          growth_accelerator: 4,
        },
      },
      {
        id: "c",
        label: "Map my transferable skills into 2–3 related options.",
        dimensions: {
          skillLeverage: 5,
          changeReadiness: 4,
          learningCapacity: 4,
        },
        results: {
          skill_repositioner: 7,
        },
      },
      {
        id: "d",
        label: "Explore work that better matches my values and identity.",
        dimensions: {
          valuesNeed: 5,
          changeReadiness: 4,
          learningCapacity: 4,
        },
        results: {
          purposeful_switcher: 6,
        },
      },
      {
        id: "e",
        label: "Build a small offer, portfolio, service, or independent test.",
        dimensions: {
          autonomyNeed: 5,
          growthAmbition: 4,
          riskTolerance: 5,
        },
        results: {
          independent_builder: 7,
        },
      },
    ],
  },
  {
    id: "q21_biggest_fear",
    section: "Change readiness",
    question: "What is your biggest fear about changing direction?",
    options: [
      {
        id: "a",
        label: "Losing stability or making my life more stressful.",
        dimensions: {
          stabilityNeed: 5,
          riskTolerance: 1,
          burnoutRisk: 3,
        },
        results: {
          stability_planner: 7,
        },
      },
      {
        id: "b",
        label: "Leaving too early when my current path may still have potential.",
        dimensions: {
          currentFit: 4,
          stabilityNeed: 3,
          growthAmbition: 3,
        },
        results: {
          current_path_optimizer: 5,
        },
      },
      {
        id: "c",
        label: "Starting over and wasting my previous experience.",
        dimensions: {
          skillLeverage: 5,
          stabilityNeed: 3,
          changeReadiness: 3,
        },
        results: {
          skill_repositioner: 7,
        },
      },
      {
        id: "d",
        label: "Choosing another path that still does not feel meaningful.",
        dimensions: {
          valuesNeed: 5,
          changeReadiness: 4,
          learningCapacity: 3,
        },
        results: {
          purposeful_switcher: 6,
        },
      },
      {
        id: "e",
        label: "Never trying to create something more independent.",
        dimensions: {
          autonomyNeed: 5,
          riskTolerance: 4,
          growthAmbition: 5,
        },
        results: {
          independent_builder: 6,
        },
      },
    ],
  },
  {
    id: "q22_best_outcome",
    section: "Change readiness",
    question: "What outcome would make this assessment most useful for you?",
    options: [
      {
        id: "a",
        label: "A calmer plan that helps me stop making stressed decisions.",
        dimensions: {
          stabilityNeed: 5,
          burnoutRisk: 4,
          riskTolerance: 1,
        },
        results: {
          stability_planner: 7,
        },
      },
      {
        id: "b",
        label: "A clear way to improve my current career path.",
        dimensions: {
          currentFit: 5,
          growthAmbition: 4,
          skillLeverage: 3,
        },
        results: {
          current_path_optimizer: 6,
          growth_accelerator: 2,
        },
      },
      {
        id: "c",
        label: "A smarter way to move using the experience I already have.",
        dimensions: {
          skillLeverage: 5,
          changeReadiness: 4,
          learningCapacity: 3,
        },
        results: {
          skill_repositioner: 7,
        },
      },
      {
        id: "d",
        label: "Permission and structure to explore a more meaningful direction.",
        dimensions: {
          valuesNeed: 5,
          changeReadiness: 5,
          learningCapacity: 4,
        },
        results: {
          purposeful_switcher: 7,
        },
      },
      {
        id: "e",
        label: "A practical first step toward a more independent career path.",
        dimensions: {
          autonomyNeed: 5,
          riskTolerance: 5,
          growthAmbition: 4,
        },
        results: {
          independent_builder: 7,
        },
      },
    ],
  },
];