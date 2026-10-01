export const pricingHero = {
  eyebrow: "Pricing",
  title: "Simple pricing for the way you work with video.",
  support: "Choose the plan based on how much video you analyze each month.",
} as const;

export const pricingPlans = [
  {
    name: "Starter",
    audience: "For light individual use",
    summary: "Occasional analysis when you need a clear read on one video.",
    price: "Monthly price set at launch",
    points: [
      "Monthly video allowance set with the plan",
      "Upload size set with the plan",
      "General, Creator, and Podcast modes",
      "Find moments, summarize, and get feedback",
      "Extra hours listed when pricing opens",
    ],
  },
  {
    name: "Pro",
    audience: "For regular creators and podcasters",
    summary: "Recurring video work, from content feedback to long episodes.",
    price: "Monthly price set at launch",
    featured: true,
    points: [
      "A larger monthly allowance for regular use",
      "Upload size set with the plan",
      "General, Creator, and Podcast modes",
      "Creator feedback, timestamps, summaries, and highlights",
      "Extra hours listed when pricing opens",
    ],
  },
  {
    name: "Business",
    audience: "For heavier usage, teams, or more video hours",
    summary: "More video, shared work, and room for a specialized workflow.",
    price: "Monthly price set at launch",
    points: [
      "Higher monthly allowance for teams and volume",
      "Upload size set with the plan",
      "General, Creator, and Podcast modes",
      "Review, detection, summaries, and team workflows",
      "Extra hours and custom workflows on request",
    ],
  },
] as const;

export const pricingFaq = [
  {
    question: "What counts toward usage?",
    answer:
      "Each analysis of an uploaded video counts toward your monthly allowance. The exact measure will be shown on the plan when pricing opens.",
  },
  {
    question: "What happens when I reach my monthly limit?",
    answer:
      "You can wait until the allowance resets, or move to a higher plan. Analyses you already completed stay available.",
  },
  {
    question: "Can I upgrade later?",
    answer: "Yes. You can move from Starter to Pro or Business when your video work grows.",
  },
  {
    question: "Are the 3 free analyses still available?",
    answer: "Yes. New accounts still get 3 free analyses. No credit card required.",
  },
  {
    question: "Can businesses ask for custom workflows?",
    answer:
      "Yes. Batch analysis, moderation, QA, and other specialized jobs can be scoped separately from the standard plans.",
  },
] as const;

export const pricingCustom = {
  title: "Need a custom video workflow?",
  body: "Contact us for business use cases, batch analysis, moderation, QA, or specialized requirements.",
} as const;

export const pricingTeaser = {
  eyebrow: "Pricing",
  title: "Plans for every level of video work",
  support: "From occasional analysis to regular creator, podcast, and business workflows.",
  cta: "View pricing",
} as const;
