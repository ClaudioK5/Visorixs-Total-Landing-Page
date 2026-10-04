export const whatIs = {
  title: "What is Visorix?",
  headline: "Video AI specialized for the task you actually need solved.",
  paragraphs: [
    "Visorix turns video understanding into specialized workflows — whether you need to find something, evaluate something, extract useful information, improve content, or build a completely custom video-analysis task.",
  ],
} as const;

export const howItWorksSection = {
  eyebrow: "How Visorix works",
  headline: "From raw video to\nspecialized analysis.",
} as const;

export const howItWorks = [
  {
    step: "1",
    title: "Upload your video",
    body: "Add the video you want to work with.",
  },
  {
    step: "2",
    title: "Choose your mode",
    body: "Select the specialized Visorix workflow for your use case.",
  },
  {
    step: "3",
    title: "Get task-specific analysis",
    body: "Visorix analyzes the video using that workflow and returns the results that matter for the job.",
  },
] as const;

export const useCasesSection = {
  eyebrow: "Specialized video intelligence",
  headline: "One video intelligence engine.\nBuilt around different problems.",
  lead: "Visorix can turn the same underlying video understanding into very different professional tools. For example:",
} as const;

export const useCases = [
  {
    icon: "media",
    title: "Content & Media",
    body: "Analyze hooks, pacing, storytelling, engagement, scenes, highlights and other creative elements.",
  },
  {
    icon: "longform",
    title: "Long-form Video",
    body: "Find exact discussions, timestamps, summaries, topics, quotes and important moments inside long recordings.",
  },
  {
    icon: "review",
    title: "Review & Detection",
    body: "Check whether specific objects, actions, situations, events or types of content appear in a video.",
  },
  {
    icon: "custom",
    title: "Custom Video Workflows",
    body: "Build a specialized analysis around the exact thing your company or workflow needs to detect, evaluate or understand.",
  },
] as const;

export const differentiator = {
  eyebrow: "Why Visorix?",
  title: "Video understanding is only useful when it replaces work.",
  paragraphs: [
    "A raw multimodal AI can watch a video, understand what happens and answer questions about it.",
    "Visorix builds workflows on top of that capability so the AI can use its understanding of the video to execute the actual task a human would otherwise have to perform after watching it — turning hours of manual work into minutes, especially for long recordings or large volumes of video.",
    "The goal is not simply to understand video. It is to automate the work humans normally have to do with video.",
  ],
  imageAlt: "Example of Visorix turning an uploaded video into useful analysis",
} as const;

export const finalCta = {
  eyebrow: "Ready when you are",
  title: "Give Visorix a video.\nTell it what matters.",
  support:
    "Use specialized video intelligence to find, evaluate and understand exactly what your workflow needs.",
} as const;
