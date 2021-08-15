import { useEffect } from "react";

let lastKnownScrollPosition = 0;
let ticking = false;

export default function useWindowScroll(
  fn: (scrollValue: number) => void
): void {
  useEffect(() => {
    const handler = () => {
      if (!fn) {
        return;
      }
      lastKnownScrollPosition = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(function () {
          fn(lastKnownScrollPosition);
          ticking = false;
        });
        ticking = true;
      }
    };
    document.addEventListener("scroll", handler);
    return () => {
      document.removeEventListener("scroll", handler);
    };
  }, []);
}
