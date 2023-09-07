import { Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";

export const MAX_FREE_COUNTS = 5;

export const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
];

export const promptCategories = [
  "Marketing",
  // "Business",
  // "Content Creation",
  // "Writing",
  // "Web Development",
  // "Education",
  // "Teachers",
  // "Music",
  // "Fun",
  // "Healthcare and Wellbeing",
  // "AI ART (Midjourney)",
  // "Food and Cooking",
  // "Games (Team collaboration)",
  // "Sales",
  // "resume",
  // "analytics",
  // "Email Campaigns",
  // "UX",
];

export const promptItems = [
  {
    id: 1,
    prompt:
      "Can you provide me with some ideas for blog posts about [topic of your choice]?",
    category: "Marketing",
    substitution: ["topic of your choice"],
  },
  {
    id: 2,
    prompt:
      "Write a minute-long script for an advertisement about [product or service or company]",
    category: "Marketing",
  },
  {
    id: 3,
    prompt:
      "Write a product description for my [product or service or company]",
    category: "Marketing",
  },
  {
    id: 4,
    prompt:
      "Suggest inexpensive ways I can promote my [company] with/without using [Media channel]",
    category: "Marketing",
  },
  {
    id: 5,
    prompt:
      "How can I obtain high-quality backlinks to raise the SEO of [Website name]",
    category: "Marketing",
  },
  {
    id: 6,
    prompt: "Make 5 distinct CTA messages and buttons for [Your product]",
    category: "Marketing",
  },
  {
    id: 7,
    prompt:
      "Create a [social media] campaign plan for launching an [your product], aimed at [ Your target audience]",
    category: "Marketing",
  },
  {
    id: 8,
    prompt:
      "Analyze these below metrics to improve email open rates for a fashion brand <paste metrics>",
    category: "Marketing",
  },
  {
    id: 9,
    prompt:
      "Write follow-up emails to people who attended my [webinar topic] webinar",
    category: "Marketing",
  },
  {
    id: 10,
    prompt: "Structure a weekly [newsletter topic] newsletter",
    category: "Marketing",
  },
  {
    id: 11,
    prompt:
      "Make a post showcasing the benefits of using our product [product name] for [specific problem/issue].",
    category: "Marketing",
  },
  {
    id: 12,
    prompt:
      "Generate 5 creative ways to use Instagram Reels for [your product or service or company]",
    category: "Marketing",
  },
  {
    id: 13,
    prompt:
      "Create a social media post that targets [the specific audience] and explains how our product [product name] can help them.",
    category: "Marketing",
  },
  {
    id: 14,
    prompt: "Create a personalized email greeting for a VIP customer",
    category: "Marketing",
  },
  {
    id: 15,
    prompt:
      "Write a list of 5 YouTube video ideas for [your product or company]",
    category: "Marketing",
  },
  {
    id: 16,
    prompt:
      "Create two Google Ads in an RSA format (using multiple headlines and descriptions) for an A/B test for “Your product”.",
    category: "Marketing",
  },
  {
    id: 17,
    prompt:
      "Write a 100-character meta description for my blog post about <topic>.",
    category: "Marketing",
  },
  {
    id: 18,
    prompt: "",
    category: "Business",
  },
  {
    id: 18,
    prompt:
      "Analyze the current state of <industry> and its trends, challenges, and opportunities, including relevant data and statistics. Provide a list of key players and a short and long-term industry forecast, and explain any potential impact of current events or future developments.",
    category: "Business",
  },
  {
    id: 19,
    prompt:
      "Offer a detailed review of a <specific software or tool>  for <describe your business>.",
    category: "Business",
  },
  {
    id: 20,
    prompt:
      "Offer an in-depth analysis of the current state of small business legislation and regulations and their impact on entrepreneurship.",
    category: "Business",
  },
  {
    id: 21,
    prompt:
      "Offer a comprehensive guide to small business financing options, including loans, grants, and equity financing.",
    category: "Business",
  },
  {
    id: 22,
    prompt:
      "Provide a guide on managing finances for a small business, including budgeting, cash flow management, and tax considerations.",
    category: "Business",
  },
  {
    id: 23,
    prompt:
      "Provide a guide on networking and building partnerships as a small business owner.",
    category: "Business",
  },
  {
    id: 24,
    prompt:
      "I want to create an agenda for a meeting about<Meeting info> with my team. Can you give me some examples of what should be included?",
    category: "Business",
  },
  {
    id: 25,
    prompt:
      "I need to write an email to a client regarding a change in the project timeline. Can you give me some guidance on how to phrase it?",
    category: "Business",
  },

  {
    id: 26,
    prompt:
      "I need to write an email to a client regarding a change in the project timeline. Can you give me some guidance on how to phrase it?",
    category: "Business",
  },
  {
    id: 27,
    prompt:
      "To increase the number of Instagram posts, please develop a product roadmap for Instagram’s story.",
    category: "Business",
  },
  {
    id: 28,
    prompt:
      "Write an in-depth analysis of the current state of a specific industry and its potential for small business opportunities.",
    category: "Business",
  },
  {
    id: 29,
    prompt:
      "I need to prepare a presentation for a potential investor on <presentation topic>. Can you give me some guidance on what to include?",
    category: "Business",
  },
];
