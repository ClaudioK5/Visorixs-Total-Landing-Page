import { useEffect, useRef } from "react";

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = (node: Element) => {
      node.setAttribute("data-revealed", "true");
    };

    const items = Array.from(el.querySelectorAll(".reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -24px 0px" },
    );

    items.forEach((item) => observer.observe(item));

    const failsafe = window.setTimeout(() => {
      items.forEach((item) => {
        if (!item.hasAttribute("data-revealed")) reveal(item);
      });
    }, 1200);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return ref;
}
