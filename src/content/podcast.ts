export const podcastHero = {
  eyebrow: "Visorix for Podcasts",
  headline: "Understand an entire podcast without rewatching it.",
  subheadline:
    "Upload an episode and let Visorix find discussions, timestamps, key moments, summaries and answers to anything you want to know about the recording.",
  cta: "Analyze an episode free",
  heroPrompt: "Where did the guest talk about starting his first company?",
  heroAnswer: "The guest begins discussing how he launched his first company…",
  heroTime: "32:14",
} as const;

export const podcastWhatIs = {
  eyebrow: "What is Visorix?",
  headline: "Stop searching through hours of footage.",
  body: "Visorix watches the full episode for you. Ask where a topic was discussed, find important moments, generate summaries, or understand what the guest said — without scrubbing through the timeline yourself.",
} as const;

export const podcastHowItWorks = [
  {
    step: "1",
    title: "Upload your episode",
    body: "Add a full podcast, interview, or long-form video.",
  },
  {
    step: "2",
    title: "Ask anything about it",
    body: "Find topics, discussions, takeaways, quotes, or important moments.",
  },
  {
    step: "3",
    title: "Visorix finds it",
    body: "Get clear answers grounded in the episode, with relevant timestamps.",
  },
] as const;

export const podcastBenefits = [
  {
    icon: "find",
    title: "Find anything instantly",
    body: "Locate discussions, topics and important moments without rewatching the episode.",
  },
  {
    icon: "time",
    title: "Get exact timestamps",
    body: "Jump directly to the part of the conversation that matters.",
  },
  {
    icon: "insights",
    title: "Turn episodes into usable insights",
    body: "Generate summaries, key takeaways and potential clip moments from the full recording.",
  },
] as const;

export const podcastDifferentiator = {
  eyebrow: "Why Visorix",
  title: "Answers that could only come from watching the full episode.",
  body: "Generic AI knows nothing about your recording. Visorix watches the actual conversation — the dialogue, context and progression of the episode — so it can tell you what was discussed, where it happened and what matters.",
  prompt: "What did the guest say mattered most in the first year?",
  answers: [
    {
      time: "18:42",
      text: "He says the first year was mostly listening to customers and fixing what they actually needed.",
    },
    {
      time: "46:05",
      text: "He returns to the same idea when describing what he would repeat.",
    },
  ],
} as const;

export const podcastExamples = [
  {
    question: "Where did the guest talk about raising capital?",
    kind: "timestamp",
    time: "41:28",
    answer: "The discussion about raising capital begins here…",
  },
  {
    question: "What are the five main lessons from this episode?",
    kind: "list",
    items: [
      "Start before the plan feels finished.",
      "Raise only enough for the next milestone.",
      "Spend the first year close to customers.",
      "Fix pricing mistakes while they are still small.",
      "Make the first hire remove a real bottleneck.",
    ],
  },
  {
    question: "Which moments could work well as short-form clips?",
    kind: "moments",
    moments: [
      {
        time: "12:06",
        text: "The guest describes the week he almost shut the company down.",
      },
      {
        time: "27:41",
        text: "A concise explanation of the pricing mistake they made.",
      },
      {
        time: "44:18",
        text: "The story of hiring the first employee.",
      },
    ],
  },
] as const;

export const podcastFinalCta = {
  eyebrow: "Ready to save time?",
  title: "Stop rewatching. Start asking.",
  body: "Upload your podcast and let Visorix help you find the moments, ideas and answers buried inside it.",
  cta: "Analyze an episode free",
} as const;
