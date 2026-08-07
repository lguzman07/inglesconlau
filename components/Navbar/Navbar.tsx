'use client';

import Image from 'next/image';
import logo from '@/app/assets/logo-transparent.png';
import { useEffect, useState } from 'react';

type DisplayMode = 'normal' | 'dark' | 'contrast';

export default function Navbar() {
  const [displayMode, setDisplayMode] =
    useState<DisplayMode>('normal');

  useEffect(() => {
    const savedMode = localStorage.getItem('display-mode');

    const initialMode: DisplayMode =
      savedMode === 'dark' || savedMode === 'contrast'
        ? savedMode
        : 'normal';

    setDisplayMode(initialMode);
    document.documentElement.dataset.theme = initialMode;
  }, []);

  function changeDisplayMode(mode: DisplayMode) {
    setDisplayMode(mode);
    document.documentElement.dataset.theme = mode;
    localStorage.setItem('display-mode', mode);
  }

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Image
          src={logo}
          alt="Logo de Inglés con Lau"
          className="nav-logo"
          priority
        />

        <span>Inglés Con Lau</span>
      </div>

      <div className="nav-right">
        <div className="nav-links">
          <a href="#methodology">Metodología</a>
          <a href="#why">¿Por qué nosotros?</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#faq">FAQ</a>
        </div>

        <div
          className="accessibility-controls"
          role="group"
          aria-label="Modo de visualización"
        >
          <button
            type="button"
            className={`theme-button ${
              displayMode === 'normal' ? 'active' : ''
            }`}
            aria-pressed={displayMode === 'normal'}
            onClick={() => changeDisplayMode('normal')}
          >
            <span aria-hidden="true">☀️</span>
            <span>Normal</span>
          </button>

          <button
            type="button"
            className={`theme-button ${
              displayMode === 'dark' ? 'active' : ''
            }`}
            aria-pressed={displayMode === 'dark'}
            onClick={() => changeDisplayMode('dark')}
          >
            <span aria-hidden="true">🌙</span>
            <span>Oscuro</span>
          </button>

          <button
            type="button"
            className={`theme-button ${
              displayMode === 'contrast' ? 'active' : ''
            }`}
            aria-pressed={displayMode === 'contrast'}
            onClick={() => changeDisplayMode('contrast')}
          >
            <span aria-hidden="true">◐</span>
            <span>Contraste</span>
          </button>
        </div>
      </div>
    </nav>
  );
}