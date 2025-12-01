"use client";

import Icon from "./Icon";

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="w-10 h-10 border border-neutral-300 rounded bg-white flex items-center justify-center gap-0.5 transition-all duration-300 hover:border-primary hover:bg-primary/5"
      aria-label="بازگشت به بالا"
    >
      <Icon name="arrow up" size={14} className="text-neutral-700" />
      <Icon name="arrow up" size={14} className="text-neutral-700" />
    </button>
  );
};

export default ScrollToTop;

