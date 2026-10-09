import { describe, expect, test } from "bun:test";
import { claimOnce, countAt, parallaxAt, SCROLL_ANIMATION } from "./scroll-animation-rules.ts";

describe("Requested scroll animation rules", () => {
  test("entrances rise 24px", () => expect(SCROLL_ANIMATION.rise).toBe(24));
  test("entrances last 0.8 seconds", () => expect(SCROLL_ANIMATION.duration).toBe(800));
  test("cards start 0.1 seconds apart", () => expect(SCROLL_ANIMATION.stagger).toBe(100));
  test("specialties count from zero to eight", () => {
    expect(countAt(0, SCROLL_ANIMATION.specialties)).toBe(0);
    expect(countAt(1, SCROLL_ANIMATION.specialties)).toBe(8);
  });
  test("clients count from zero to 460", () => {
    expect(countAt(0, SCROLL_ANIMATION.clients)).toBe(0);
    expect(countAt(1, SCROLL_ANIMATION.clients)).toBe(460);
    expect(countAt(0.5, 460)).toBeGreaterThan(0);
    expect(countAt(0.5, 460)).toBeLessThan(460);
  });
  test("parallax never exceeds 40px in either direction", () => {
    expect(SCROLL_ANIMATION.maxParallax).toBe(40);
    expect(parallaxAt(10, 500)).toBe(40);
    expect(parallaxAt(-10, 500)).toBe(-40);
  });
  test("parallax never exposes an empty image border", () => {
    expect(parallaxAt(1, 20)).toBe(10);
    expect(parallaxAt(-1, 20)).toBe(-10);
    expect(parallaxAt(1, 0)).toBe(0);
  });
  test("each element animates only once", () => {
    const seen = new WeakSet();
    const element = {};
    expect(claimOnce(seen, element)).toBe(true);
    expect(claimOnce(seen, element)).toBe(false);
    expect(claimOnce(seen, {})).toBe(true);
  });
});