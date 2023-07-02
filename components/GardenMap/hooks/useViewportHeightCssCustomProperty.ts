import { useEffect } from "react";

/**
 * @see https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
 */
export function useViewportHeightCssCustomProperty(): void {
  useEffect(() => {
    const setViewportHeight = () => {
      const vh = 0.01 * window.innerHeight; // convert px to vh unit
      document.documentElement.style.setProperty(
        "--viewport-height",
        `${vh}px`
      );
    };

    window.addEventListener("resize", setViewportHeight);

    return () => {
      window.removeEventListener("resize", setViewportHeight);
    };
  }, []);
}
