'use client';

import { CSSProperties, useMemo } from 'react';

import styles from './WinterOverlay.module.css';

const FLAKE_COUNT = 18;
const FLAKE_CHARACTERS = ['❄', '❅', '❆'];

type Flake = {
  id: number;
  top: number;
  left: number;
  size: number;
  opacity: number;
  character: string;
};

function createFlakes(): Flake[] {
  return Array.from({ length: FLAKE_COUNT }, (_, index) => ({
    id: index,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: 0.7 + Math.random() * 1,
    opacity: 0.35 + Math.random() * 0.4,
    character:
      FLAKE_CHARACTERS[
        Math.floor(Math.random() * FLAKE_CHARACTERS.length)
      ],
  }));
}

// Copos de nieve fijos, puramente decorativos: sin animación ni
// movimiento para no distraer a quien está estudiando.
export default function WinterOverlay() {
  const flakes = useMemo(createFlakes, []);

  return (
    <div
      className={styles.overlay}
      aria-hidden="true"
    >
      {flakes.map((flake) => (
        <span
          key={flake.id}
          className={styles.flake}
          style={
            {
              top: `${flake.top}%`,
              left: `${flake.left}%`,
              fontSize: `${flake.size}rem`,
              opacity: flake.opacity,
            } as CSSProperties
          }
        >
          {flake.character}
        </span>
      ))}
    </div>
  );
}
