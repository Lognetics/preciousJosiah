export const site = {
  name: "Precious Josiah Cheta-Udezue",
  shortName: "Precious Josiah",
  role: "Web3 & Fintech Builder · Educator · Ecosystem Contributor",
  tagline: "Building at the intersection of Africa, Web3 and digital finance.",
  // Hero supporting paragraph (also used for meta description).
  heroSub:
    "Precious Josiah Cheta-Udezue is a Web3 & Fintech builder working across blockchain, digital finance, stablecoins and Africa's innovation ecosystem. She builds, writes, speaks and works with communities around the technologies shaping the future of finance.",
  footerNote:
    "Web3 & Fintech builder, educator and ecosystem contributor working across Africa and beyond.",
  url: "https://preciousjosiah.com",
  email: "hello@preciousjosiah.com",
  description:
    "Precious Josiah Cheta-Udezue is a Web3 and fintech builder working across blockchain, digital finance, stablecoins and Africa's innovation ecosystem. She builds, writes, speaks and works with communities around the technologies shaping the future of finance.",
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

// "What I Work On" - kept deliberately short.
export const workAreas = [
  {
    title: "Digital Finance",
    body: "Stablecoins, digital assets, cross-border payments and financial inclusion.",
  },
  {
    title: "Web3 & Emerging Technology",
    body: "Helping people understand and navigate blockchain and emerging technologies.",
  },
  {
    title: "Africa's Digital Economy",
    body: "Exploring opportunities for African businesses, builders and talent in the digital economy.",
  },
  {
    title: "Education & Community",
    body: "Building communities, creating educational content and helping more people participate in emerging technology.",
  },
];

// "Selected Work" - what has actually been done.
export const selectedWork = [
  {
    title: "Raba Pay",
    tag: "Fintech / Digital Finance",
    body: "Fintech, digital finance and cross-border payments, exploring better ways for money to move across borders.",
    image: "/images/gallery-yacht.jpg",
    href: "#raba-pay",
    cta: "Learn more",
  },
  {
    title: "Web3 & Community Building",
    tag: "Community / Ecosystem",
    body: "Building and supporting Web3 communities and ecosystems, and helping more people take part in emerging technology.",
    image: "/images/gallery-city.jpg",
    href: "/projects",
    cta: "Learn more",
  },
  {
    title: "Education & Thought Leadership",
    tag: "Writing / Speaking",
    body: "Articles, educational work, interviews and industry conversations on Web3, digital finance and Africa's digital economy.",
    image: "/images/portrait-seated.jpg",
    href: "/publications",
    cta: "Learn more",
  },
];

// "Speaking" topics.
export const speakingTopics = [
  "The Future of Cross-Border Payments",
  "Stablecoins & Digital Finance",
  "Africa's Digital Economy",
  "Web3 Beyond the Hype",
  "Financial Inclusion & Emerging Technology",
  "Building Communities Around Emerging Technology",
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
