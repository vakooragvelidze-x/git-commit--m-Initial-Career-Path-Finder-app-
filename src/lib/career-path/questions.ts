import type { Question } from "./types";

export const QUESTIONS: Question[] = [
  {
    id: "q01_current_feeling",
    section: "Current situation",
    question: "Which sentence best describes your work life right now?",
    options: [
      {
        id: "a",
        label:
          "I feel drained and need to make things more stable before changing anything big.",
        dimensions: { stabilityNeed: 8, burnoutRisk: 8, riskTolerance: -3 },
        results: { stability_planner: 9 },
      },
      {
        id: "b",
        label:
          "My field may still be right, but my current role or company does not fit well.",
        dimensions: { currentFit: 7, changeReadiness: 3, skillLeverage: 4 },
        results: { current_path_optimizer: 8, growth_accelerator: 2 },
      },
      {
        id: "c",
        label:
          "I want a different direction, but I do not want to waste my past experience.",
        dimensions: { skillLeverage: 8, changeReadiness: 6 },
        results: { skill_repositioner: 9 },
      },
      {
        id: "d",
        label:
          "I feel like my work no longer matches who I am or what matters to me.",
        dimensions: { valuesNeed: 9, changeReadiness: 7, currentFit: -4 },
        results: { purposeful_switcher: 9 },
      },
      {
        id: "e",
        label: "I want more freedom, control, and independence in how I work.",
        dimensions: { autonomyNeed: 9, riskTolerance: 5, changeReadiness: 5 },
        results: { independent_builder: 9 },
      },
    ],
  },
  {
    id: "q02_main_goal",
    section: "Goal",
    question: "What would feel like the most useful outcome from this report?",
    options: [
      {
        id: "a",
        label: "A realistic plan that does not risk my income or stability.",
        dimensions: { stabilityNeed: 8, riskTolerance: -2 },
        results: { stability_planner: 8 },
      },
      {
        id: "b",
        label: "A clearer way to improve my current career path.",
        dimensions: { currentFit: 7, growthAmbition: 5 },
        results: { current_path_optimizer: 8, growth_accelerator: 3 },
      },
      {
        id: "c",
        label:
          "A way to use my existing skills in a better-fitting role or industry.",
        dimensions: { skillLeverage: 9, changeReadiness: 5 },
        results: { skill_repositioner: 9 },
      },
      {
        id: "d",
        label:
          "A sign that I should seriously explore a more meaningful direction.",
        dimensions: { valuesNeed: 8, changeReadiness: 7, learningCapacity: 4 },
        results: { purposeful_switcher: 9 },
      },
      {
        id: "e",
        label: "A path toward more independence, flexibility, or side income.",
        dimensions: { autonomyNeed: 8, riskTolerance: 5, growthAmbition: 4 },
        results: { independent_builder: 8 },
      },
    ],
  },
  {
    id: "q03_biggest_problem",
    section: "Problem",
    question: "What feels like the biggest career problem for you right now?",
    options: [
      {
        id: "a",
        label: "I am tired, pressured, or overloaded and cannot think clearly.",
        dimensions: { burnoutRisk: 9, stabilityNeed: 7, learningCapacity: -2 },
        results: { stability_planner: 9 },
      },
      {
        id: "b",
        label: "I am underpaid, underused, or stuck in the wrong environment.",
        dimensions: { currentFit: 6, growthAmbition: 7, skillLeverage: 5 },
        results: { current_path_optimizer: 7, growth_accelerator: 5 },
      },
      {
        id: "c",
        label: "I have skills, but I do not know where else they could fit.",
        dimensions: { skillLeverage: 9, changeReadiness: 5 },
        results: { skill_repositioner: 10 },
      },
      {
        id: "d",
        label:
          "The work feels disconnected from my values or long-term identity.",
        dimensions: { valuesNeed: 10, currentFit: -5, changeReadiness: 6 },
        results: { purposeful_switcher: 10 },
      },
      {
        id: "e",
        label:
          "I do not want to depend completely on one employer or one job title.",
        dimensions: { autonomyNeed: 9, riskTolerance: 5, growthAmbition: 4 },
        results: { independent_builder: 9 },
      },
    ],
  },
  {
    id: "q04_current_field",
    section: "Fit",
    question: "How do you feel about your current field or industry?",
    options: [
      {
        id: "a",
        label: "I mostly want out, but I need to be careful about how I do it.",
        dimensions: { currentFit: -5, changeReadiness: 6, stabilityNeed: 6 },
        results: { stability_planner: 5, purposeful_switcher: 4 },
      },
      {
        id: "b",
        label:
          "The field is okay. I probably need a better role, team, company, or pay level.",
        dimensions: { currentFit: 8, growthAmbition: 5, skillLeverage: 5 },
        results: { current_path_optimizer: 10 },
      },
      {
        id: "c",
        label:
          "Some parts of it are useful, but I want to transfer into a better area.",
        dimensions: { currentFit: 2, skillLeverage: 8, changeReadiness: 6 },
        results: { skill_repositioner: 9 },
      },
      {
        id: "d",
        label: "It feels misaligned. I want something that fits my values better.",
        dimensions: { currentFit: -6, valuesNeed: 9, changeReadiness: 7 },
        results: { purposeful_switcher: 9 },
      },
      {
        id: "e",
        label:
          "I am less attached to fields and more interested in flexible ways to earn.",
        dimensions: { autonomyNeed: 8, riskTolerance: 4 },
        results: { independent_builder: 8, skill_repositioner: 2 },
      },
    ],
  },
  {
    id: "q05_financial_pressure",
    section: "Constraints",
    question:
      "How much financial pressure do you need to consider before changing paths?",
    options: [
      {
        id: "a",
        label:
          "A lot. I need a safe plan because others or major bills depend on my income.",
        dimensions: { stabilityNeed: 10, riskTolerance: -5 },
        results: { stability_planner: 10 },
      },
      {
        id: "b",
        label: "Some. I can move, but only if the next step is practical.",
        dimensions: { stabilityNeed: 5, riskTolerance: 1, changeReadiness: 3 },
        results: { current_path_optimizer: 3, skill_repositioner: 4 },
      },
      {
        id: "c",
        label:
          "Moderate. I can invest time into learning if there is a realistic path.",
        dimensions: { learningCapacity: 6, changeReadiness: 4, stabilityNeed: 3 },
        results: { skill_repositioner: 4, purposeful_switcher: 3 },
      },
      {
        id: "d",
        label: "Low. I can take more risk if the direction feels right.",
        dimensions: { riskTolerance: 8, changeReadiness: 6 },
        results: { purposeful_switcher: 4, independent_builder: 6 },
      },
      {
        id: "e",
        label: "I want to build extra income while keeping my main income stable.",
        dimensions: { autonomyNeed: 7, stabilityNeed: 5, riskTolerance: 2 },
        results: { independent_builder: 8, stability_planner: 2 },
      },
    ],
  },
  {
    id: "q06_energy",
    section: "Energy",
    question: "What is your energy level after a normal workweek?",
    options: [
      {
        id: "a",
        label: "Very low. I mostly need recovery.",
        dimensions: { burnoutRisk: 10, stabilityNeed: 7, learningCapacity: -4 },
        results: { stability_planner: 10 },
      },
      {
        id: "b",
        label: "Low, but I think a better role or environment would help.",
        dimensions: { burnoutRisk: 6, currentFit: 5, stabilityNeed: 4 },
        results: { current_path_optimizer: 7, stability_planner: 3 },
      },
      {
        id: "c",
        label: "Mixed. I have energy for learning if the direction feels useful.",
        dimensions: { learningCapacity: 6, changeReadiness: 4, skillLeverage: 3 },
        results: { skill_repositioner: 5, purposeful_switcher: 3 },
      },
      {
        id: "d",
        label: "I have energy when the work feels meaningful.",
        dimensions: { valuesNeed: 8, learningCapacity: 5, changeReadiness: 5 },
        results: { purposeful_switcher: 7 },
      },
      {
        id: "e",
        label: "I get energy from building my own things or controlling my time.",
        dimensions: { autonomyNeed: 9, learningCapacity: 5, riskTolerance: 4 },
        results: { independent_builder: 8 },
      },
    ],
  },
  {
    id: "q07_existing_skills",
    section: "Career capital",
    question: "How do you see your current skills and experience?",
    options: [
      {
        id: "a",
        label: "I am not sure what my strongest skills are anymore.",
        dimensions: { stabilityNeed: 5, skillLeverage: -2, burnoutRisk: 4 },
        results: { stability_planner: 5, skill_repositioner: 2 },
      },
      {
        id: "b",
        label:
          "They are useful, but I need to position them better in my current path.",
        dimensions: { skillLeverage: 7, currentFit: 7, growthAmbition: 5 },
        results: { current_path_optimizer: 7, growth_accelerator: 5 },
      },
      {
        id: "c",
        label:
          "They are transferable, but I need help translating them into another path.",
        dimensions: { skillLeverage: 10, changeReadiness: 6 },
        results: { skill_repositioner: 10 },
      },
      {
        id: "d",
        label:
          "Some are useful, but I may need to learn something new for a better fit.",
        dimensions: { learningCapacity: 8, changeReadiness: 7, valuesNeed: 5 },
        results: { purposeful_switcher: 7, skill_repositioner: 3 },
      },
      {
        id: "e",
        label: "I can combine them into a service, project, or independent offer.",
        dimensions: { skillLeverage: 8, autonomyNeed: 8, riskTolerance: 5 },
        results: { independent_builder: 9 },
      },
    ],
  },
  {
    id: "q08_promotion",
    section: "Growth",
    question: "How do you feel about growing inside your current career area?",
    options: [
      {
        id: "a",
        label: "I cannot think about growth until I feel less overwhelmed.",
        dimensions: { burnoutRisk: 8, stabilityNeed: 7, growthAmbition: -2 },
        results: { stability_planner: 8 },
      },
      {
        id: "b",
        label:
          "I would grow if I had better management, pay, or responsibility.",
        dimensions: { currentFit: 8, growthAmbition: 8, skillLeverage: 5 },
        results: { growth_accelerator: 8, current_path_optimizer: 5 },
      },
      {
        id: "c",
        label:
          "Growth matters, but probably in a more adjacent or better-fitting role.",
        dimensions: { skillLeverage: 8, growthAmbition: 6, changeReadiness: 5 },
        results: { skill_repositioner: 8, growth_accelerator: 2 },
      },
      {
        id: "d",
        label: "I do not want more of the same even if it comes with a better title.",
        dimensions: { valuesNeed: 8, changeReadiness: 7, currentFit: -4 },
        results: { purposeful_switcher: 8 },
      },
      {
        id: "e",
        label: "I would rather grow something of my own than climb a standard ladder.",
        dimensions: { autonomyNeed: 9, riskTolerance: 6, growthAmbition: 6 },
        results: { independent_builder: 9 },
      },
    ],
  },
  {
    id: "q09_risk",
    section: "Risk",
    question: "Which risk feels most acceptable to you right now?",
    options: [
      {
        id: "a",
        label: "Small experiments only. I need to protect stability first.",
        dimensions: { stabilityNeed: 8, riskTolerance: -4 },
        results: { stability_planner: 9 },
      },
      {
        id: "b",
        label: "Applying to better roles while keeping my current foundation.",
        dimensions: { currentFit: 7, riskTolerance: 2, growthAmbition: 5 },
        results: { current_path_optimizer: 7, growth_accelerator: 4 },
      },
      {
        id: "c",
        label: "Moving into an adjacent field where my experience still matters.",
        dimensions: { skillLeverage: 8, riskTolerance: 4, changeReadiness: 6 },
        results: { skill_repositioner: 9 },
      },
      {
        id: "d",
        label: "Learning a new direction if it feels more aligned long-term.",
        dimensions: { valuesNeed: 7, learningCapacity: 8, riskTolerance: 5 },
        results: { purposeful_switcher: 8 },
      },
      {
        id: "e",
        label: "Testing a side business, freelance offer, or independent project.",
        dimensions: { autonomyNeed: 8, riskTolerance: 7, learningCapacity: 5 },
        results: { independent_builder: 9 },
      },
    ],
  },
  {
    id: "q10_values",
    section: "Values",
    question: "Which work value feels most important for your next chapter?",
    options: [
      {
        id: "a",
        label: "Security and breathing room.",
        dimensions: { stabilityNeed: 9, burnoutRisk: 4 },
        results: { stability_planner: 8 },
      },
      {
        id: "b",
        label: "Recognition, better pay, and a stronger role.",
        dimensions: { growthAmbition: 9, currentFit: 5 },
        results: { growth_accelerator: 8, current_path_optimizer: 4 },
      },
      {
        id: "c",
        label: "Using my strengths in a smarter place.",
        dimensions: { skillLeverage: 9, changeReadiness: 5 },
        results: { skill_repositioner: 8 },
      },
      {
        id: "d",
        label: "Meaning, identity, and doing work that feels worthwhile.",
        dimensions: { valuesNeed: 10, changeReadiness: 5 },
        results: { purposeful_switcher: 9 },
      },
      {
        id: "e",
        label: "Freedom, ownership, and control over my time.",
        dimensions: { autonomyNeed: 10, riskTolerance: 5 },
        results: { independent_builder: 9 },
      },
    ],
  },
  {
    id: "q11_learning_capacity",
    section: "Learning",
    question:
      "How much capacity do you realistically have to learn or build something new right now?",
    options: [
      {
        id: "a",
        label: "Very little. I need a lighter plan first.",
        dimensions: { learningCapacity: -5, burnoutRisk: 8, stabilityNeed: 7 },
        results: { stability_planner: 9 },
      },
      {
        id: "b",
        label: "Some capacity, if it directly improves my current career.",
        dimensions: { learningCapacity: 4, currentFit: 6, growthAmbition: 4 },
        results: { current_path_optimizer: 6, growth_accelerator: 3 },
      },
      {
        id: "c",
        label: "Enough to reposition my existing skills into a better role.",
        dimensions: { learningCapacity: 6, skillLeverage: 8, changeReadiness: 5 },
        results: { skill_repositioner: 8 },
      },
      {
        id: "d",
        label: "Strong capacity if the direction feels meaningful.",
        dimensions: { learningCapacity: 8, valuesNeed: 7, changeReadiness: 7 },
        results: { purposeful_switcher: 8 },
      },
      {
        id: "e",
        label: "I can learn by building a real side project or offer.",
        dimensions: { learningCapacity: 8, autonomyNeed: 8, riskTolerance: 5 },
        results: { independent_builder: 8 },
      },
    ],
  },
  {
    id: "q12_job_search",
    section: "Market",
    question:
      "If you started looking for opportunities tomorrow, where would you begin?",
    options: [
      {
        id: "a",
        label:
          "I would first reduce stress and clarify what I can realistically handle.",
        dimensions: { stabilityNeed: 8, burnoutRisk: 5 },
        results: { stability_planner: 8 },
      },
      {
        id: "b",
        label: "Similar roles at better companies or with better pay.",
        dimensions: { currentFit: 8, growthAmbition: 6 },
        results: { current_path_optimizer: 8, growth_accelerator: 4 },
      },
      {
        id: "c",
        label: "Adjacent roles that use my experience differently.",
        dimensions: { skillLeverage: 9, changeReadiness: 5 },
        results: { skill_repositioner: 10 },
      },
      {
        id: "d",
        label: "Roles or fields that match my values more closely.",
        dimensions: { valuesNeed: 8, changeReadiness: 7 },
        results: { purposeful_switcher: 9 },
      },
      {
        id: "e",
        label: "Freelance, consulting, small business, or flexible work options.",
        dimensions: { autonomyNeed: 9, riskTolerance: 5 },
        results: { independent_builder: 10 },
      },
    ],
  },
  {
    id: "q13_regret",
    section: "Future regret",
    question: "Which future regret worries you most?",
    options: [
      {
        id: "a",
        label: "Making a rushed move that hurts my stability.",
        dimensions: { stabilityNeed: 9, riskTolerance: -4 },
        results: { stability_planner: 9 },
      },
      {
        id: "b",
        label:
          "Staying underpaid or under-recognized when I could have grown.",
        dimensions: { growthAmbition: 9, currentFit: 5 },
        results: { growth_accelerator: 9, current_path_optimizer: 3 },
      },
      {
        id: "c",
        label: "Not using my experience in a better-fitting way.",
        dimensions: { skillLeverage: 9, changeReadiness: 5 },
        results: { skill_repositioner: 9 },
      },
      {
        id: "d",
        label: "Spending more years in work that does not feel meaningful.",
        dimensions: { valuesNeed: 10, changeReadiness: 6 },
        results: { purposeful_switcher: 10 },
      },
      {
        id: "e",
        label: "Never building something independent or flexible for myself.",
        dimensions: { autonomyNeed: 10, riskTolerance: 5 },
        results: { independent_builder: 10 },
      },
    ],
  },
  {
    id: "q14_support",
    section: "Support",
    question: "What type of support would help you most right now?",
    options: [
      {
        id: "a",
        label:
          "A calmer, safer plan that accounts for real-life responsibilities.",
        dimensions: { stabilityNeed: 9, burnoutRisk: 4 },
        results: { stability_planner: 9 },
      },
      {
        id: "b",
        label: "A better strategy for advancing or improving my current path.",
        dimensions: { currentFit: 8, growthAmbition: 7 },
        results: { current_path_optimizer: 7, growth_accelerator: 6 },
      },
      {
        id: "c",
        label: "Help translating my experience into new opportunities.",
        dimensions: { skillLeverage: 10, changeReadiness: 5 },
        results: { skill_repositioner: 10 },
      },
      {
        id: "d",
        label: "Help identifying work that fits my values and identity.",
        dimensions: { valuesNeed: 10, changeReadiness: 5 },
        results: { purposeful_switcher: 10 },
      },
      {
        id: "e",
        label: "Help choosing and testing an independent income direction.",
        dimensions: { autonomyNeed: 9, riskTolerance: 5 },
        results: { independent_builder: 9 },
      },
    ],
  },
  {
    id: "q15_work_environment",
    section: "Environment",
    question: "Which work environment sounds healthiest for your next stage?",
    options: [
      {
        id: "a",
        label: "Predictable, calm, and financially stable.",
        dimensions: { stabilityNeed: 10, burnoutRisk: 3, riskTolerance: -3 },
        results: { stability_planner: 10 },
      },
      {
        id: "b",
        label:
          "Professional, better managed, and more rewarding than my current environment.",
        dimensions: { currentFit: 8, growthAmbition: 6 },
        results: { current_path_optimizer: 8, growth_accelerator: 4 },
      },
      {
        id: "c",
        label: "A place where my existing skills solve different problems.",
        dimensions: { skillLeverage: 8, changeReadiness: 5 },
        results: { skill_repositioner: 8 },
      },
      {
        id: "d",
        label: "A mission, culture, or subject area I actually care about.",
        dimensions: { valuesNeed: 10, changeReadiness: 6 },
        results: { purposeful_switcher: 9 },
      },
      {
        id: "e",
        label: "Flexible, self-directed, and less dependent on office politics.",
        dimensions: { autonomyNeed: 10, riskTolerance: 5 },
        results: { independent_builder: 9 },
      },
    ],
  },
  {
    id: "q16_identity",
    section: "Identity",
    question:
      "Which identity feels closest to who you want to become professionally?",
    options: [
      {
        id: "a",
        label: "A stable professional with more breathing room.",
        dimensions: { stabilityNeed: 9, burnoutRisk: 3 },
        results: { stability_planner: 9 },
      },
      {
        id: "b",
        label: "A stronger version of myself in my current career area.",
        dimensions: { currentFit: 9, growthAmbition: 7 },
        results: { current_path_optimizer: 7, growth_accelerator: 7 },
      },
      {
        id: "c",
        label:
          "A professional who uses past experience in a smarter new direction.",
        dimensions: { skillLeverage: 10, changeReadiness: 5 },
        results: { skill_repositioner: 10 },
      },
      {
        id: "d",
        label: "Someone who does work that feels more meaningful and aligned.",
        dimensions: { valuesNeed: 10, changeReadiness: 6 },
        results: { purposeful_switcher: 10 },
      },
      {
        id: "e",
        label:
          "Someone who builds their own path instead of waiting for permission.",
        dimensions: { autonomyNeed: 10, riskTolerance: 6, growthAmbition: 5 },
        results: { independent_builder: 10 },
      },
    ],
  },
  {
    id: "q17_obstacle",
    section: "Obstacle",
    question: "What is most likely to stop you from making progress?",
    options: [
      {
        id: "a",
        label: "Stress, exhaustion, or financial pressure.",
        dimensions: { stabilityNeed: 9, burnoutRisk: 9, riskTolerance: -3 },
        results: { stability_planner: 10 },
      },
      {
        id: "b",
        label:
          "Not asking for better opportunities or not positioning myself strongly.",
        dimensions: { growthAmbition: 8, currentFit: 5 },
        results: { growth_accelerator: 8, current_path_optimizer: 4 },
      },
      {
        id: "c",
        label: "Not knowing how to explain my transferable value.",
        dimensions: { skillLeverage: 9, changeReadiness: 5 },
        results: { skill_repositioner: 10 },
      },
      {
        id: "d",
        label: "Fear of choosing the wrong new direction.",
        dimensions: { valuesNeed: 7, changeReadiness: 5, learningCapacity: 4 },
        results: { purposeful_switcher: 8 },
      },
      {
        id: "e",
        label: "Lack of structure around my own ideas.",
        dimensions: { autonomyNeed: 7, riskTolerance: 4, learningCapacity: 5 },
        results: { independent_builder: 8 },
      },
    ],
  },
  {
    id: "q18_preferred_next_step",
    section: "Next step",
    question: "Which next step feels most realistic in the next 30 days?",
    options: [
      {
        id: "a",
        label:
          "Create a safer plan and recover enough energy to think clearly.",
        dimensions: { stabilityNeed: 9, burnoutRisk: 6 },
        results: { stability_planner: 9 },
      },
      {
        id: "b",
        label:
          "Update my résumé/LinkedIn and look for better versions of my current role.",
        dimensions: { currentFit: 8, growthAmbition: 6, skillLeverage: 5 },
        results: { current_path_optimizer: 8, growth_accelerator: 4 },
      },
      {
        id: "c",
        label: "Map my transferable skills and test adjacent roles.",
        dimensions: { skillLeverage: 10, changeReadiness: 6 },
        results: { skill_repositioner: 10 },
      },
      {
        id: "d",
        label: "Research and test a more meaningful career direction.",
        dimensions: { valuesNeed: 9, learningCapacity: 6, changeReadiness: 7 },
        results: { purposeful_switcher: 9 },
      },
      {
        id: "e",
        label:
          "Build or test a small independent offer, project, or side path.",
        dimensions: { autonomyNeed: 9, riskTolerance: 6, learningCapacity: 6 },
        results: { independent_builder: 10 },
      },
    ],
  },
  {
    id: "q19_manager_role",
    section: "Role design",
    question: "How do you feel about more responsibility or leadership?",
    options: [
      {
        id: "a",
        label: "Not now. I need less pressure before more responsibility.",
        dimensions: { burnoutRisk: 8, stabilityNeed: 7, growthAmbition: -3 },
        results: { stability_planner: 8 },
      },
      {
        id: "b",
        label: "I would like it if the role, pay, and support were right.",
        dimensions: { growthAmbition: 10, currentFit: 7 },
        results: { growth_accelerator: 9, current_path_optimizer: 4 },
      },
      {
        id: "c",
        label: "Maybe, but probably in a different context than my current one.",
        dimensions: { skillLeverage: 7, changeReadiness: 5, growthAmbition: 4 },
        results: { skill_repositioner: 7 },
      },
      {
        id: "d",
        label: "Only if the mission or work itself feels worth leading.",
        dimensions: { valuesNeed: 8, growthAmbition: 5 },
        results: { purposeful_switcher: 7, growth_accelerator: 2 },
      },
      {
        id: "e",
        label: "I would rather lead my own project, business, or client work.",
        dimensions: { autonomyNeed: 9, growthAmbition: 6, riskTolerance: 5 },
        results: { independent_builder: 9 },
      },
    ],
  },
  {
    id: "q20_change_timeline",
    section: "Timing",
    question: "What timeline feels most realistic for a serious career move?",
    options: [
      {
        id: "a",
        label: "I need 3–12 months to stabilize before making a major move.",
        dimensions: { stabilityNeed: 10, riskTolerance: -4 },
        results: { stability_planner: 10 },
      },
      {
        id: "b",
        label: "I could start looking for a better role soon.",
        dimensions: { currentFit: 8, growthAmbition: 6, riskTolerance: 3 },
        results: { current_path_optimizer: 8, growth_accelerator: 4 },
      },
      {
        id: "c",
        label: "I could test adjacent opportunities within 1–3 months.",
        dimensions: { skillLeverage: 8, changeReadiness: 6, riskTolerance: 4 },
        results: { skill_repositioner: 9 },
      },
      {
        id: "d",
        label:
          "I am ready to explore a real pivot, but I want to test before committing.",
        dimensions: { valuesNeed: 8, changeReadiness: 8, learningCapacity: 6 },
        results: { purposeful_switcher: 9 },
      },
      {
        id: "e",
        label:
          "I can begin building an independent path immediately on the side.",
        dimensions: { autonomyNeed: 9, riskTolerance: 6, learningCapacity: 6 },
        results: { independent_builder: 9 },
      },
    ],
  },
  {
    id: "q21_success_measure",
    section: "Success measure",
    question: "How would you measure a successful next career move?",
    options: [
      {
        id: "a",
        label: "More stability, less stress, and a plan I can actually sustain.",
        dimensions: { stabilityNeed: 10, burnoutRisk: 5 },
        results: { stability_planner: 10 },
      },
      {
        id: "b",
        label: "Better pay, role quality, recognition, or professional growth.",
        dimensions: { growthAmbition: 10, currentFit: 6 },
        results: { growth_accelerator: 9, current_path_optimizer: 5 },
      },
      {
        id: "c",
        label: "Using my existing strengths in a role that fits better.",
        dimensions: { skillLeverage: 10, changeReadiness: 5 },
        results: { skill_repositioner: 10 },
      },
      {
        id: "d",
        label:
          "Doing work that feels more meaningful and aligned with my life now.",
        dimensions: { valuesNeed: 10, changeReadiness: 6 },
        results: { purposeful_switcher: 10 },
      },
      {
        id: "e",
        label:
          "Having more freedom, flexibility, and ownership over my income path.",
        dimensions: { autonomyNeed: 10, riskTolerance: 5 },
        results: { independent_builder: 10 },
      },
    ],
  },
  {
    id: "q22_application_confidence",
    section: "Confidence",
    question:
      "How confident are you that your current profile would attract better opportunities?",
    options: [
      {
        id: "a",
        label: "Not confident. I first need clarity and stability.",
        dimensions: { stabilityNeed: 7, skillLeverage: -2, burnoutRisk: 4 },
        results: { stability_planner: 7 },
      },
      {
        id: "b",
        label: "Somewhat confident, but I need to present myself better.",
        dimensions: { skillLeverage: 6, currentFit: 6, growthAmbition: 6 },
        results: { current_path_optimizer: 6, growth_accelerator: 5 },
      },
      {
        id: "c",
        label:
          "I have strong experience, but it needs to be reframed for new roles.",
        dimensions: { skillLeverage: 10, changeReadiness: 5 },
        results: { skill_repositioner: 10 },
      },
      {
        id: "d",
        label: "I may need new proof or learning before switching direction.",
        dimensions: { learningCapacity: 7, valuesNeed: 6, changeReadiness: 6 },
        results: { purposeful_switcher: 7 },
      },
      {
        id: "e",
        label:
          "I am more interested in attracting clients, customers, or project opportunities.",
        dimensions: { autonomyNeed: 9, skillLeverage: 6, riskTolerance: 5 },
        results: { independent_builder: 9 },
      },
    ],
  },
  {
    id: "q23_outside_work",
    section: "Life fit",
    question: "How much should your next career move support your life outside work?",
    options: [
      {
        id: "a",
        label: "A lot. My life responsibilities need to come first.",
        dimensions: { stabilityNeed: 10, riskTolerance: -3 },
        results: { stability_planner: 10 },
      },
      {
        id: "b",
        label: "I want better balance while still progressing professionally.",
        dimensions: { currentFit: 7, growthAmbition: 5, stabilityNeed: 4 },
        results: { current_path_optimizer: 7, growth_accelerator: 3 },
      },
      {
        id: "c",
        label:
          "I want a role that uses my skills without the same old tradeoffs.",
        dimensions: { skillLeverage: 8, changeReadiness: 5 },
        results: { skill_repositioner: 8 },
      },
      {
        id: "d",
        label:
          "I want work that fits the person I am becoming, not just my résumé.",
        dimensions: { valuesNeed: 10, changeReadiness: 6 },
        results: { purposeful_switcher: 9 },
      },
      {
        id: "e",
        label:
          "Flexibility and control are major reasons I want a new direction.",
        dimensions: { autonomyNeed: 10, riskTolerance: 5 },
        results: { independent_builder: 9 },
      },
    ],
  },
  {
    id: "q24_external_validation",
    section: "Decision pattern",
    question: "What do you usually need before making a career decision?",
    options: [
      {
        id: "a",
        label: "Safety, numbers, and a plan that will not create chaos.",
        dimensions: { stabilityNeed: 9, riskTolerance: -3 },
        results: { stability_planner: 9 },
      },
      {
        id: "b",
        label: "Evidence that a better role or company is actually available.",
        dimensions: { currentFit: 7, growthAmbition: 5, skillLeverage: 4 },
        results: { current_path_optimizer: 7, growth_accelerator: 3 },
      },
      {
        id: "c",
        label: "A clear link between what I know and where I want to go.",
        dimensions: { skillLeverage: 10, changeReadiness: 5 },
        results: { skill_repositioner: 10 },
      },
      {
        id: "d",
        label: "A feeling that the direction is meaningful enough to commit to.",
        dimensions: { valuesNeed: 9, changeReadiness: 6 },
        results: { purposeful_switcher: 9 },
      },
      {
        id: "e",
        label: "Proof that people would pay for what I can build or offer.",
        dimensions: { autonomyNeed: 8, riskTolerance: 5, skillLeverage: 5 },
        results: { independent_builder: 9 },
      },
    ],
  },
  {
    id: "q25_learning_vs_earning",
    section: "Priority",
    question: "Right now, which priority feels strongest?",
    options: [
      {
        id: "a",
        label: "Protecting income and reducing pressure.",
        dimensions: { stabilityNeed: 10, burnoutRisk: 5 },
        results: { stability_planner: 10 },
      },
      {
        id: "b",
        label: "Earning more from the career capital I already have.",
        dimensions: { growthAmbition: 9, currentFit: 7, skillLeverage: 6 },
        results: { growth_accelerator: 9, current_path_optimizer: 5 },
      },
      {
        id: "c",
        label: "Moving my skills into a better opportunity area.",
        dimensions: { skillLeverage: 10, changeReadiness: 6 },
        results: { skill_repositioner: 10 },
      },
      {
        id: "d",
        label: "Learning something new because my current direction feels wrong.",
        dimensions: { valuesNeed: 9, learningCapacity: 7, changeReadiness: 7 },
        results: { purposeful_switcher: 9 },
      },
      {
        id: "e",
        label: "Creating income with more control and independence.",
        dimensions: { autonomyNeed: 10, riskTolerance: 6, growthAmbition: 5 },
        results: { independent_builder: 10 },
      },
    ],
  },
  {
    id: "q26_work_dislike",
    section: "Dislike pattern",
    question: "What do you dislike most about your current or recent work?",
    options: [
      {
        id: "a",
        label: "The pressure, exhaustion, or instability it creates.",
        dimensions: { burnoutRisk: 10, stabilityNeed: 8 },
        results: { stability_planner: 10 },
      },
      {
        id: "b",
        label: "The environment, management, pay, or lack of growth.",
        dimensions: { currentFit: 7, growthAmbition: 8 },
        results: { current_path_optimizer: 8, growth_accelerator: 5 },
      },
      {
        id: "c",
        label:
          "That my strongest skills are not being used in the right way.",
        dimensions: { skillLeverage: 9, changeReadiness: 5 },
        results: { skill_repositioner: 9 },
      },
      {
        id: "d",
        label: "That the work itself does not feel meaningful anymore.",
        dimensions: { valuesNeed: 10, currentFit: -4, changeReadiness: 6 },
        results: { purposeful_switcher: 10 },
      },
      {
        id: "e",
        label:
          "That I have too little control over my time, decisions, or income.",
        dimensions: { autonomyNeed: 10, riskTolerance: 4 },
        results: { independent_builder: 10 },
      },
    ],
  },
  {
    id: "q27_one_year",
    section: "One-year vision",
    question: "One year from now, which outcome would make you feel proudest?",
    options: [
      {
        id: "a",
        label: "I feel stable, healthier, and no longer trapped by pressure.",
        dimensions: { stabilityNeed: 10, burnoutRisk: 5 },
        results: { stability_planner: 10 },
      },
      {
        id: "b",
        label: "I have a better role, stronger pay, and more recognition.",
        dimensions: { growthAmbition: 10, currentFit: 7 },
        results: { growth_accelerator: 9, current_path_optimizer: 5 },
      },
      {
        id: "c",
        label: "I successfully moved my experience into a better-fitting path.",
        dimensions: { skillLeverage: 10, changeReadiness: 7 },
        results: { skill_repositioner: 10 },
      },
      {
        id: "d",
        label: "I am doing work that feels more aligned with who I am now.",
        dimensions: { valuesNeed: 10, changeReadiness: 7 },
        results: { purposeful_switcher: 10 },
      },
      {
        id: "e",
        label:
          "I built an independent income stream, offer, or flexible work path.",
        dimensions: { autonomyNeed: 10, riskTolerance: 6 },
        results: { independent_builder: 10 },
      },
    ],
  },
  {
    id: "q28_final_choice",
    section: "Final priority",
    question:
      "If your report focused on only one thing, what should it help you do?",
    options: [
      {
        id: "a",
        label: "Create a safe and realistic transition plan.",
        dimensions: { stabilityNeed: 10, riskTolerance: -3 },
        results: { stability_planner: 12 },
      },
      {
        id: "b",
        label:
          "Improve, upgrade, or reposition inside my current career direction.",
        dimensions: { currentFit: 9, growthAmbition: 7 },
        results: { current_path_optimizer: 10, growth_accelerator: 5 },
      },
      {
        id: "c",
        label:
          "Use my existing skills to move into a better-fitting opportunity.",
        dimensions: { skillLeverage: 10, changeReadiness: 7 },
        results: { skill_repositioner: 12 },
      },
      {
        id: "d",
        label: "Explore a more meaningful career switch.",
        dimensions: { valuesNeed: 10, learningCapacity: 7, changeReadiness: 8 },
        results: { purposeful_switcher: 12 },
      },
      {
        id: "e",
        label: "Build a more independent or flexible work path.",
        dimensions: { autonomyNeed: 10, riskTolerance: 7, growthAmbition: 5 },
        results: { independent_builder: 12 },
      },
    ],
  },
];