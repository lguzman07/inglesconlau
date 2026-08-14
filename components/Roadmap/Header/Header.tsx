'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Header.module.css';

const steps = [
  '🎥 Ver la lección',
  '🎧 Escuchar y repetir',
  '🧠 Entender el significado',
  '💬 Practicar la conversación',
  '✍️ Realizar los ejercicios',
  '📖 Leer en nuestro club',
  '🌎 Vivir el inglés',
];

export default function Header() {
  const [activeStep, setActiveStep] = useState(0);
  const pathRef = useRef<HTMLOListElement>(null);
  const stepRefs = useRef<Array<HTMLLIElement | null>>([]);

  function moveToStep(index: number) {
    const nextIndex = Math.max(0, Math.min(index, steps.length - 1));

    stepRefs.current[nextIndex]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });

    setActiveStep(nextIndex);
  }

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    let animationFrame = 0;

    function updateActiveStep() {
      const currentPath = pathRef.current;
      if (!currentPath) return;

      const pathCenter =
        currentPath.getBoundingClientRect().left + currentPath.clientWidth / 2;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      stepRefs.current.forEach((step, index) => {
        if (!step) return;
        const rect = step.getBoundingClientRect();
        const distance = Math.abs(pathCenter - (rect.left + rect.width / 2));

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveStep(closestIndex);
      animationFrame = 0;
    }

    function handleScroll() {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateActiveStep);
      }
    }

    updateActiveStep();
    path.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      path.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className={styles.header}>
      <p className={styles.eyebrow}>TU RECORRIDO</p>

      <h2 className={styles.title}>
        Así es como
        <br />
        aprenderás inglés.
      </h2>

      <p className={styles.description}>
        No encontrarás una colección de clases al azar.
        <br />
        Cada lección prepara la siguiente para que avanzar se sienta natural.
      </p>

      <div className={styles.pathWrapper}>
        <button
          type="button"
          className={`${styles.pathArrow} ${styles.pathArrowLeft}`}
          aria-label="Ver paso anterior"
          disabled={activeStep === 0}
          onClick={() => moveToStep(activeStep - 1)}
        >
          ←
        </button>

        <ol
          className={styles.path}
          ref={pathRef}
          aria-label="Recorrido de aprendizaje"
        >
          {steps.map((step, index) => (
            <li
              className={`${styles.pathStep} ${
                activeStep === index ? styles.activeStep : ''
              }`}
              key={step}
              ref={(element) => {
                stepRefs.current[index] = element;
              }}
            >
              <button
                type="button"
                className={styles.bubble}
                onClick={() => moveToStep(index)}
              >
                {step}
              </button>
            </li>
          ))}
        </ol>

        <button
          type="button"
          className={`${styles.pathArrow} ${styles.pathArrowRight}`}
          aria-label="Ver siguiente paso"
          disabled={activeStep === steps.length - 1}
          onClick={() => moveToStep(activeStep + 1)}
        >
          →
        </button>
      </div>

      <div className={styles.pathDots} aria-label="Seleccionar paso de la ruta">
        {steps.map((step, index) => (
          <button
            type="button"
            className={activeStep === index ? styles.activeDot : ''}
            aria-label={`Ver ${step.replace(/^\S+\s/, '')}`}
            aria-current={activeStep === index ? 'step' : undefined}
            key={step}
            onClick={() => moveToStep(index)}
          />
        ))}
      </div>
    </div>
  );
}
