'use client';

import { useEffect } from 'react';

export default function RevealOnScroll() {
  useEffect(() => {
    // Only the public landing page renders .landing-intro. Everywhere
    // else (lessons, dashboard, admin, configuración...) we leave
    // elements at their default opacity: 1 — no reveal, no risk of
    // anything getting stuck invisible on an internal page.
    if (!document.querySelector('.landing-intro')) return;

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(
        'main section h1, main section h2, main section h3, main section p, main section table, main section [class*="card"], main section [class*="quote"]'
      )
    );

    if (reducedMotion) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    document.body.classList.add('reveal-armed');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px',
      }
    );

    elements.forEach((element, index) => {
      // Elements that start with no rendered box (e.g. inside a
      // collapsed accordion or a closed FAQ answer) can never report
      // an intersection, so they'd stay stuck at opacity: 0 forever
      // even after the user opens them. Leave those visible instead
      // of gating them on an observer callback that may never fire.
      const rect = element.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) {
        element.classList.add('is-visible');
        return;
      }

      element.classList.add('scroll-reveal');
      element.style.setProperty('--reveal-delay', `${(index % 3) * 70}ms`);
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
      document.body.classList.remove('reveal-armed');
    };
  }, []);

  return null;
}
