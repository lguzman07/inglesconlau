'use client';

import { useCallback, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

type DisplayMode = 'normal' | 'dark' | 'contrast';

function isDisplayMode(value: string | null): value is DisplayMode {
  return (
    value === 'normal' ||
    value === 'dark' ||
    value === 'contrast'
  );
}

export default function ThemeControls() {
  const pathname = usePathname();

  const [displayMode, setDisplayMode] = useState<DisplayMode>('normal');

  const applyDisplayMode = useCallback((mode: DisplayMode) => {
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('display-mode', mode);
    setDisplayMode(mode);
  }, []);

  useEffect(() => {
    const savedMode = localStorage.getItem('display-mode');

    const initialMode: DisplayMode = isDisplayMode(savedMode)
      ? savedMode
      : 'normal';

    applyDisplayMode(initialMode);
  }, [applyDisplayMode, pathname]);

  function changeDisplayMode(mode: DisplayMode) {
    applyDisplayMode(mode);
  }

  /*
    En la landing no mostramos estos controles globales,
    porque ya están dentro del Navbar.
  */
  if (pathname === '/') {
    return null;
  }

  return (
    <div
      className="global-theme-controls"
      role="group"
      aria-label="Modo de visualización"
    >
      <button
        type="button"
        className={`theme-button ${displayMode === 'normal' ? 'active' : ''}`}
        aria-pressed={displayMode === 'normal'}
        onClick={() => changeDisplayMode('normal')}
      >
        <span aria-hidden="true">☀️</span>
        <span>Normal</span>
      </button>

      <button
        type="button"
        className={`theme-button ${displayMode === 'dark' ? 'active' : ''}`}
        aria-pressed={displayMode === 'dark'}
        onClick={() => changeDisplayMode('dark')}
      >
        <span aria-hidden="true">🌙</span>
        <span>Oscuro</span>
      </button>

      <button
        type="button"
        className={`theme-button ${displayMode === 'contrast' ? 'active' : ''}`}
        aria-pressed={displayMode === 'contrast'}
        onClick={() => changeDisplayMode('contrast')}
      >
        <span aria-hidden="true">◐</span>
        <span>Contraste</span>
      </button>
    </div>
  );
}
