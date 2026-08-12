'use client';

import { useCallback, useEffect, useState } from 'react';

type DisplayPreference = 'auto' | 'normal' | 'dark' | 'contrast';
type AppliedTheme = 'normal' | 'dark' | 'contrast';

const STORAGE_KEY = 'display-mode-v2';

function isDisplayPreference(
  value: string | null
): value is DisplayPreference {
  return (
    value === 'auto' ||
    value === 'normal' ||
    value === 'dark' ||
    value === 'contrast'
  );
}

function getSystemTheme(): AppliedTheme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'normal';
}

export default function ThemeControls() {
  const [displayPreference, setDisplayPreference] =
    useState<DisplayPreference>('auto');

  const applyDisplayPreference = useCallback(
    (preference: DisplayPreference) => {
      const theme =
        preference === 'auto' ? getSystemTheme() : preference;

      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem(STORAGE_KEY, preference);
      setDisplayPreference(preference);
    },
    []
  );

  useEffect(() => {
    const savedPreference = localStorage.getItem(STORAGE_KEY);

    const initialPreference: DisplayPreference =
      isDisplayPreference(savedPreference)
        ? savedPreference
        : 'auto';

    applyDisplayPreference(initialPreference);
  }, [applyDisplayPreference]);

  useEffect(() => {
    const systemTheme = window.matchMedia(
      '(prefers-color-scheme: dark)'
    );

    function handleSystemThemeChange() {
      if (displayPreference === 'auto') {
        document.documentElement.setAttribute(
          'data-theme',
          systemTheme.matches ? 'dark' : 'normal'
        );
      }
    }

    systemTheme.addEventListener('change', handleSystemThemeChange);

    return () => {
      systemTheme.removeEventListener(
        'change',
        handleSystemThemeChange
      );
    };
  }, [displayPreference]);

  function changeDisplayPreference(
    preference: AppliedTheme
  ) {
    applyDisplayPreference(preference);
  }

  return (
    <div
      className="global-theme-controls"
      role="group"
      aria-label="Modo de visualización"
    >
      <button
        type="button"
        className={`theme-button ${
          displayPreference === 'normal' ? 'active' : ''
        }`}
        aria-label="Usar modo normal"
        aria-pressed={displayPreference === 'normal'}
        title="Normal"
        onClick={() => changeDisplayPreference('normal')}
      >
        <span aria-hidden="true">☀️</span>
      </button>

      <button
        type="button"
        className={`theme-button ${
          displayPreference === 'dark' ? 'active' : ''
        }`}
        aria-label="Usar modo oscuro"
        aria-pressed={displayPreference === 'dark'}
        title="Oscuro"
        onClick={() => changeDisplayPreference('dark')}
      >
        <span aria-hidden="true">🌙</span>
      </button>

      <button
        type="button"
        className={`theme-button ${
          displayPreference === 'contrast' ? 'active' : ''
        }`}
        aria-label="Usar modo de alto contraste"
        aria-pressed={displayPreference === 'contrast'}
        title="Contraste"
        onClick={() => changeDisplayPreference('contrast')}
      >
        <span aria-hidden="true">◐</span>
      </button>
    </div>
  );
}