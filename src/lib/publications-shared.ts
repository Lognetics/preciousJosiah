// Client-safe types & constants (no Node.js `fs` imports).

export type Publication = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  date: string;
  featured: boolean;
  cover: string; // gradient token id (fallback tint)
  image: string; // hero/cover photo path
  readingTime: string;
  content: string;
};

// Cover gradient tokens used by the UI
export const coverGradients: Record<string, string> = {
  royal: "from-[#1E3AAF] via-[#2B59FF] to-[#5B7CFF]",
  emerald: "from-[#065F46] via-[#10B981] to-[#34D399]",
  midnight: "from-[#0A0B0F] via-[#1C1F27] to-[#2B3040]",
  dusk: "from-[#1E3AAF] via-[#3B2F8F] to-[#10B981]",
  amber: "from-[#7C3A12] via-[#D97706] to-[#F59E0B]",
};
