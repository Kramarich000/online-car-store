import { useEffect } from "react";

export function useSmoothScroll() {
  useEffect(() => {
    const scrollSpeed = 0.05;
    let currentScroll = window.scrollY;
    let targetScroll = currentScroll;
    let animationFrameId = null;
    let siteScrollEnabled = true;

    function isScrollableElement(element) {
      const style = getComputedStyle(element);
      return (
        (style.overflowY === "auto" || style.overflowY === "scroll") &&
        element.scrollHeight > element.clientHeight
      );
    }

    function stopSmoothScroll() {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
      currentScroll = window.scrollY;
    }

    function smoothScrollStep() {
      currentScroll += (targetScroll - currentScroll) * scrollSpeed;
      window.scrollTo(0, currentScroll);

      if (Math.abs(targetScroll - currentScroll) <= 0.5) {
        animationFrameId = null;
        return;
      }

      animationFrameId = requestAnimationFrame(smoothScrollStep);
    }

    function onScroll(event) {
      if (!siteScrollEnabled) return;

      targetScroll = Math.min(
        Math.max(0, targetScroll + event.deltaY),
        document.documentElement.scrollHeight - window.innerHeight
      );

      event.preventDefault();

      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(smoothScrollStep);
      }
    }

    function handleWheel(event) {
      let target = event.target;

      while (target && target !== document.body) {
        if (isScrollableElement(target)) {
          stopSmoothScroll();
          siteScrollEnabled = false;
          return;
        }
        target = target.parentElement;
      }

      siteScrollEnabled = true;
    }

    document.addEventListener("wheel", handleWheel);
    document.addEventListener("wheel", onScroll, { passive: false });

    return () => {
      document.removeEventListener("wheel", handleWheel);
      document.removeEventListener("wheel", onScroll);
    };
  }, []);
}
