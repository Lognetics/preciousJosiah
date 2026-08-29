export const site = {
  name: "Precious Josiah Cheta-Udezue",
  shortName: "Precious Josiah",
  role: "Web3 & Fintech Builder · Educator · Ecosystem Contributor",
  tagline: "Building at the intersection of Africa, Web3 and digital finance.",
  // Hero supporting paragraph (also used for meta description).
  heroSub:
    "I want more people to understand and benefit from the technology reshaping how money moves, and to build it from Africa outward.",
  footerNote:
    "Web3 & Fintech builder, educator and ecosystem contributor working across Africa and beyond.",
  url: "https://preciousjosiah.com",
  email: "hello@preciousjosiah.com",
  description:
    "Precious Josiah Cheta-Udezue builds at the intersection of Africa and the future of money, working across digital finance, stablecoins, cross-border payments, community and education.",
  socials: {
    linkedin: "https://linkedin.com/in/preciousjosiah",
    twitter: "https://twitter.com/preciousjosiah",
    telegram: "https://t.me/preciousjosiah",
  },
  // Point this at the live Raba Pay site when it is ready.
  rabaPayUrl: "/contact",
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Publications", href: "/publications" },
  { label: "Speaking", href: "/speaking" },
  { label: "Projects", href: "/projects" },
  { label: "Media", href: "/media" },
  { label: "Community", href: "/community" },
  { label: "Newsletter", href: "/newsletter" },
  { label: "Contact", href: "/contact" },
] as const;

export const topics = [
  "Web3",
  "Stablecoins",
  "Digital Finance",
  "Cross-Border Payments",
  "Financial Inclusion",
  "Community Building",
  "Africa's Digital Economy",
  "Fintech",
] as const;

// "What I Work On" - two focused areas.
export const workAreas = [
  {
    title: "Digital Finance & Payments",
    body: "Stablecoins, digital assets, and cross-border payments that make it easier for money to move in and out of Africa.",
  },
  {
    title: "Community & Education",
    body: "Building the communities and content that help people understand this technology and actually use it.",
  },
];

// "Selected Work" - what has actually been done.
export const selectedWork = [
  {
    title: "Raba Pay",
    tag: "Fintech / Digital Finance",
    body: "Building better ways for money to move across African borders.",
    image: "/images/gallery-yacht.jpg",
    href: "#raba-pay",
    cta: "Learn more",
  },
  {
    title: "Community Building",
    tag: "Community / Ecosystem",
    body: "Growing and supporting communities across Web3 and digital finance, from early adopters to builders.",
    image: "/images/gallery-city.jpg",
    href: "/projects",
    cta: "Learn more",
  },
];

// "Speaking" topics.
export const speakingTopics = [
  "Cross-Border Payments in Africa",
  "Stablecoins & Digital Finance",
  "Financial Inclusion in Practice",
  "Mentorship & Career Growth for Women",
  "Any topic that aligns",
];

// "By the Numbers" - edit values/labels freely; keep only figures you can stand behind.
export const stats = [
  { value: 5, suffix: "+", label: "Years in Web3" },
  { value: 20, suffix: "+", label: "Speaking Engagements" },
  { value: 40, suffix: "+", label: "Articles Published" },
  { value: 20, suffix: "+", label: "Countries Reached" },
  { value: 10, suffix: "+", label: "Projects Supported" },
  { value: 25, suffix: "+", label: "Communities Built & Supported" },
  { value: 250, suffix: "K+", label: "People Reached" },
];

export const expertise = [
  "Digital Finance",
  "Stablecoins",
  "Cross-Border Payments",
  "Web3 & Blockchain",
  "Financial Inclusion",
  "Community Building",
  "Ecosystem Development",
  "Education & Content",
  "Public Speaking",
  "Africa's Digital Economy",
];
