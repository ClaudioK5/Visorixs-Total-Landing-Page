export const pricingHero = {
  eyebrow: "Pricing",
  title: "Simple pricing for the way you work with video.",
  support: "Choose the plan based on how much video you analyze each month.",
  note: "No credits. No token system. Plans are based on how many hours of video you analyze each month.",
} as const;

export const pricingPlans = [
  {
    name: "Starter",
    audience: "For short-form content and occasional longer videos",
    price: "$8.99 / month",
    hoursLabel: "Video hours / month",
    hoursValue: "10 hours",
    points: [
      "General, Creator, and Podcast modes",
      "Ideal for short-form video analysis",
      "Standard upload size",
      "Core find, summarize, and feedback workflows",
      "Extra video hours available",
      "3 free analyses before you subscribe",
    ],
  },
  {
    name: "Pro",
    audience: "For marketers, creators, and regular video analysis",
    badge: "Best for regular use",
    price: "$19.99 / month",
    hoursLabel: "Video hours / month",
    hoursValue: "30 hours",
    featured: true,
    points: [
      "Everything in Starter",
      "Larger upload size",
      "More video hours for regular use",
      "Creator, podcast, and marketing workflows",
      "Extra video hours available",
    ],
  },
  {
    name: "Business",
    audience: "For teams, podcasts, and heavier video workflows",
    price: "$49.99 / month",
    hoursLabel: "Video hours / month",
    hoursValue: "50 hours",
    points: [
      "Everything in Pro",
      "Higher monthly video hours",
      "Team workflows",
      "Custom workflows available",
      "Extra video hours on request",
    ],
  },
] as const;

export const extraHours = {
  lead: "Need more video hours without changing your plan? Add extra hours whenever you need them.",
  rule: "Extra-hour packs require an active subscription. Monthly hours reset every billing cycle. Purchased extra hours stay until they are used, while your subscription remains active.",
  packs: [
    {
      name: "Extra 5 hours",
      audience: "For a small monthly top-up",
      price: "$5.99",
      hoursLabel: "Additional video hours",
      hoursValue: "5 hours",
      points: [
        "Added to your current plan",
        "Use with your existing workflows",
        "Available immediately",
        "No subscription change required",
      ],
      cta: "Add 5 hours",
    },
    {
      name: "Extra 15 hours",
      audience: "For additional projects and heavier weeks",
      price: "$14.99",
      hoursLabel: "Additional video hours",
      hoursValue: "15 hours",
      points: [
        "Added to your current plan",
        "Good for campaigns and longer projects",
        "Available immediately",
        "No subscription change required",
      ],
      cta: "Add 15 hours",
    },
    {
      name: "Extra 40 hours",
      audience: "For high-volume periods",
      price: "$34.99",
      hoursLabel: "Additional video hours",
      hoursValue: "40 hours",
      points: [
        "Added to your current plan",
        "Designed for large workloads",
        "Available immediately",
        "No subscription change required",
      ],
      cta: "Add 40 hours",
    },
  ],
} as const;

export const pricingFaq = [
  {
    question: "What counts toward usage?",
    answer:
      "Usage is measured by the duration of the videos you analyze. A 30-minute video uses 30 minutes of your monthly allowance. A 2-hour podcast uses 2 hours.",
  },
  {
    question: "What happens when I reach my monthly video-hour limit?",
    answer:
      "Upgrade your plan, add more video hours, or wait for your allowance to reset. Analyses you already completed stay available.",
  },
  {
    question: "Can I upgrade later?",
    answer: "Yes. You can move from Starter to Pro or Business when your video work grows.",
  },
  {
    question: "Are the 3 free analyses still available?",
    answer: "Yes. New accounts still get 3 free analyses before subscribing. No credit card required.",
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
  support: "From occasional analysis to regular creator, podcast, and business workflows. Usage is measured in video hours, not credits.",
  cta: "View pricing",
} as const;
