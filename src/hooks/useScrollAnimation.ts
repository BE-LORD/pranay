import { useEffect, useRef } from "react";

const ANIMATION_CLASSES = [
  "fade-in-up",
  "fade-in-left",
  "fade-in-right",
  "scale-in",
  "rotate-in",
];

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const el = ref.current;
    if (el) {
      ANIMATION_CLASSES.forEach((cls) => {
        const children = el.querySelectorAll(`.${cls}`);
        children.forEach((child) => observer.observe(child));
      });
      // Also observe the element itself
      if (ANIMATION_CLASSES.some((cls) => el.classList.contains(cls))) {
        observer.observe(el);
      }
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}