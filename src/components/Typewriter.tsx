"use client";

import { useEffect, useState } from "react";

export function Typewriter({ text, speed = 55 }: { text: string; speed?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const id = setInterval(
      () => {
        setCount((c) => {
          const next = reduced ? text.length : c + 1;
          if (next >= text.length) clearInterval(id);
          return Math.min(next, text.length);
        });
      },
      reduced ? 0 : speed,
    );
    return () => clearInterval(id);
  }, [text, speed]);

  return (
    <span aria-label={text}>
      <span aria-hidden>{text.slice(0, count)}</span>
      <span className="cursor" aria-hidden />
    </span>
  );
}
