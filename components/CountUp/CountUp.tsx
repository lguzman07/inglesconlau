'use client';

import { useEffect, useRef, useState } from 'react';

type CountUpProps = {
  value: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
};

export default function CountUp({
  value,
  duration = 900,
  decimals = 0,
  suffix = '',
}: CountUpProps) {
  const [display, setDisplay] = useState(0);
  const previousValueRef = useRef(0);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      previousValueRef.current = value;
      setDisplay(value);
      return;
    }

    const startValue = previousValueRef.current;
    const startTime = performance.now();
    let frameId: number;

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      const eased = 1 - (1 - progress) ** 3;
      setDisplay(startValue + (value - startValue) * eased);

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      } else {
        previousValueRef.current = value;
      }
    }

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [value, duration]);

  return (
    <>
      {display.toFixed(decimals)}
      {suffix}
    </>
  );
}
