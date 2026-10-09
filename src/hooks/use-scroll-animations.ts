import { useEffect } from "react";
import { claimOnce, countAt, parallaxAt, SCROLL_ANIMATION } from "@/lib/scroll-animation-rules";

/** Progressive enhancement: no hidden CSS state or dependency on JS to show content. */
export function useScrollAnimations(setMenuOpen: (open: boolean) => void) {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let dispose = () => {};

    const start = () => {
      dispose();
      if (preference.matches || typeof IntersectionObserver === "undefined" || !Element.prototype.animate) return;

      const seen = new WeakSet<Element>();
      const animations = new Set<Animation>();
      const frames = new Set<number>();
      const restores = new Set<() => void>();
      const images = [...document.querySelectorAll<HTMLImageElement>("[data-parallax]")];
      let scrollFrame: number | undefined;
      let stopped = false;

      const frame = (callback: FrameRequestCallback) => {
        const id = requestAnimationFrame((time) => {
          frames.delete(id);
          if (!stopped) callback(time);
        });
        frames.add(id);
      };

      const reveal = (element: Element, delay: number) => {
        const animation = element.animate([
          { opacity: 0, translate: `0 ${SCROLL_ANIMATION.rise}px` },
          { opacity: 1, translate: "0 0" },
        ], { duration: SCROLL_ANIMATION.duration, delay, easing: SCROLL_ANIMATION.easing, fill: "backwards" });
        animations.add(animation);
        animation.onfinish = () => { animations.delete(animation); animation.cancel(); };
      };

      const count = (element: HTMLElement) => {
        const target = Number(element.dataset.count);
        if (!Number.isFinite(target)) return;
        const original = element.textContent;
        const originalWidth = element.style.minWidth;
        element.style.minWidth = `${element.getBoundingClientRect().width}px`;
        const restore = () => { element.textContent = original; element.style.minWidth = originalWidth; };
        restores.add(restore);
        const began = performance.now();
        element.textContent = "+0";
        const tick = (time: number) => {
          const progress = Math.min(1, (time - began) / SCROLL_ANIMATION.countDuration);
          element.textContent = `+${countAt(progress, target)}`;
          if (progress < 1) frame(tick);
          else { restore(); restores.delete(restore); }
        };
        frame(tick);
      };

      // Move the existing image frame as a unit: no scaling, recropping or empty edges.
      const updateParallax = () => {
        scrollFrame = undefined;
        for (const image of images) {
          if (!image.complete || !image.naturalWidth || !image.naturalHeight) continue;
          const rect = image.getBoundingClientRect();
          if (!rect.width || !rect.height || rect.bottom < 0 || rect.top > innerHeight) continue;
          const container = image.parentElement;
          if (!container) continue;
          const previous = Number(image.dataset.parallaxOffset ?? 0);
          const progress = (innerHeight / 2 - (rect.top + rect.height / 2 - previous)) / ((innerHeight + rect.height) / 2);
          const offset = parallaxAt(progress, SCROLL_ANIMATION.maxParallax * 2);
          container.style.translate = `0 ${offset}px`;
          image.dataset.parallaxOffset = String(offset);
        }
      };
      const onScroll = () => {
        if (scrollFrame === undefined) scrollFrame = requestAnimationFrame(updateParallax);
      };
      for (const image of images) {
        const container = image.parentElement;
        if (!container) continue;
        const original = container.style.translate;
        restores.add(() => { container.style.translate = original; delete image.dataset.parallaxOffset; });
      }

      const observer = new IntersectionObserver((entries) => {
        try {
          const groups = new Map<Element, number>();
          const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => {
            return a.boundingClientRect.top - b.boundingClientRect.top || a.boundingClientRect.left - b.boundingClientRect.left;
          });
          for (const entry of visible) {
            const element = entry.target;
            if (!claimOnce(seen, element)) continue;
            observer.unobserve(element);
            if (element instanceof HTMLElement && element.hasAttribute("data-count")) {
              count(element);
              continue;
            }
            let delay = 0;
            if (element.hasAttribute("data-reveal-card") && element.parentElement) {
              const index = groups.get(element.parentElement) ?? 0;
              delay = index * SCROLL_ANIMATION.stagger;
              groups.set(element.parentElement, index + 1);
            }
            reveal(element, delay);
          }
        } catch { dispose(); }
      }, { threshold: 0, rootMargin: "0px 0px -24px 0px" });

      const onMenuClick = (event: MouseEvent) => {
        const source = event.target;
        if (!(source instanceof Element) || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        const link = source.closest<HTMLAnchorElement>('header a[href^="#"]');
        if (!link) return;
        const hash = link.getAttribute("href");
        const destination = hash ? document.getElementById(hash.slice(1)) : null;
        if (!destination || !hash) return;
        event.preventDefault();
        event.stopPropagation();
        setMenuOpen(false);
        frame(() => {
          const header = document.querySelector("header");
          const top = destination.getBoundingClientRect().top + scrollY - (header?.getBoundingClientRect().height ?? 0);
          window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
          // Do not update router history here: hash restoration would override smooth scrolling.
        });
      };

      dispose = () => {
        stopped = true;
        observer.disconnect();
        animations.forEach(animation => animation.cancel());
        frames.forEach(id => cancelAnimationFrame(id));
        if (scrollFrame !== undefined) cancelAnimationFrame(scrollFrame);
        restores.forEach(restore => restore());
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
        window.removeEventListener("load", onScroll);
        document.removeEventListener("click", onMenuClick, true);
      };

      try {
        document.querySelectorAll("[data-reveal-section], [data-reveal-card], [data-count]").forEach(element => observer.observe(element));
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll, { passive: true });
        window.addEventListener("load", onScroll);
        document.addEventListener("click", onMenuClick, true);
        onScroll();
      } catch { dispose(); }
    };

    start();
    preference.addEventListener("change", start);
    return () => { dispose(); preference.removeEventListener("change", start); };
  }, [setMenuOpen]);
}