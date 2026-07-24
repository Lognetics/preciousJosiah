"use client";

import { useEffect, useState } from "react";
import {
  Bookmark,
  BookmarkCheck,
  Volume2,
  Square,
  Printer,
  Share2,
  Check,
} from "lucide-react";

export function ArticleTools({ slug, title }: { slug: string; title: string }) {
  const [bookmarked, setBookmarked] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("bookmarks") || "[]");
      setBookmarked(saved.includes(slug));
    } catch {}
    return () => window.speechSynthesis?.cancel();
  }, [slug]);

  const toggleBookmark = () => {
    try {
      const saved: string[] = JSON.parse(localStorage.getItem("bookmarks") || "[]");
      const next = saved.includes(slug)
        ? saved.filter((s) => s !== slug)
        : [...saved, slug];
      localStorage.setItem("bookmarks", JSON.stringify(next));
      setBookmarked(next.includes(slug));
    } catch {}
  };

  const toggleSpeech = () => {
    if (!("speechSynthesis" in window)) return;
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }
    const article = document.querySelector(".prose-editorial");
    const text = article?.textContent?.slice(0, 6000) ?? title;
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 1;
    utter.onend = () => setSpeaking(false);
    window.speechSynthesis.speak(utter);
    setSpeaking(true);
  };

  const share = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {}
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  const btn =
    "grid h-11 w-11 place-items-center rounded-full border border-[var(--line)] text-[var(--muted)] transition-colors hover:border-royal hover:text-royal";

  return (
    <div className="flex gap-2 lg:flex-col">
      <button onClick={toggleBookmark} aria-label="Bookmark" className={btn}>
        {bookmarked ? <BookmarkCheck size={18} className="text-royal" /> : <Bookmark size={18} />}
      </button>
      <button onClick={toggleSpeech} aria-label="Listen" className={btn}>
        {speaking ? <Square size={16} /> : <Volume2 size={18} />}
      </button>
      <button onClick={share} aria-label="Share" className={btn}>
        {copied ? <Check size={18} className="text-emerald" /> : <Share2 size={18} />}
      </button>
      <button onClick={() => window.print()} aria-label="Print" className={btn}>
        <Printer size={18} />
      </button>
    </div>
  );
}
