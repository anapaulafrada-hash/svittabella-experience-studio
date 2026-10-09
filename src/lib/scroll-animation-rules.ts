export const SCROLL_ANIMATION = {
  rise: 24,
  duration: 800,
  stagger: 100,
  easing: "cubic-bezier(0.22, 1, 0.36, 1)",
  countDuration: 1400,
  maxParallax: 40,
  specialties: 8,
  clients: 460,
} as const;

export function countAt(progress: number, target: number) {
  const bounded = Math.max(0, Math.min(1, progress));
  return Math.round(target * (1 - Math.pow(1 - bounded, 3)));
}

export function parallaxAt(progress: number, availableCrop: number) {
  const limit = Math.min(SCROLL_ANIMATION.maxParallax, Math.max(0, availableCrop / 2));
  return Math.max(-limit, Math.min(limit, progress * limit));
}

export function claimOnce(seen: WeakSet<Element>, element: Element) {
  if (seen.has(element)) return false;
  seen.add(element);
  return true;
}