/**
 * Brand logo: a refined gradient monogram mark + editorial serif wordmark.
 * `tone="light"` renders wordmark text in white (for dark backgrounds like the footer).
 */
export function Logo({
  wordmark = true,
  tone = "auto",
  className = "",
}: {
  wordmark?: boolean;
  tone?: "auto" | "light";
  className?: string;
}) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        <defs>
          <linearGradient id="pj-mark" x1="4" y1="3" x2="32" y2="33" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2B59FF" />
            <stop offset="0.55" stopColor="#3B57E8" />
            <stop offset="1" stopColor="#10B981" />
          </linearGradient>
        </defs>
        <rect x="0.5" y="0.5" width="35" height="35" rx="10.5" fill="url(#pj-mark)" />
        <rect
          x="0.5"
          y="0.5"
          width="35"
          height="35"
          rx="10.5"
          fill="white"
          fillOpacity="0"
          stroke="white"
          strokeOpacity="0.18"
        />
        {/* Serif monogram with an emerald accent dot */}
        <text
          x="17"
          y="25.5"
          textAnchor="middle"
          fontFamily="var(--font-serif), Georgia, serif"
          fontSize="21"
          fontWeight="600"
          fill="white"
        >
          P
        </text>
        <circle cx="26.5" cy="24" r="1.9" fill="#8FF0CE" />
      </svg>
      {wordmark && (
        <span
          className={`font-serif text-[15px] font-medium tracking-tight ${
            tone === "light" ? "text-white" : "text-[var(--fg)]"
          }`}
        >
          Precious <span className="text-royal">Josiah</span>
        </span>
      )}
    </span>
  );
}
