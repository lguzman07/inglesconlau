'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

type DisplayPreference = 'auto' | 'normal' | 'dark' | 'contrast';
type AppliedTheme = 'normal' | 'dark' | 'contrast';
const STORAGE_KEY = 'display-mode-v2';

const options: Array<{ value: DisplayPreference; icon: string; label: string }> = [
  { value: 'auto', icon: '◑', label: 'Automático' },
  { value: 'normal', icon: '☀️', label: 'Claro' },
  { value: 'dark', icon: '🌙', label: 'Oscuro' },
  { value: 'contrast', icon: '◐', label: 'Alto contraste' },
];

function isDisplayPreference(value: string | null): value is DisplayPreference {
  return options.some((option) => option.value === value);
}

function getSystemTheme(): AppliedTheme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'normal';
}

export default function ThemeControls() {
  const [displayPreference, setDisplayPreference] = useState<DisplayPreference>('auto');
  const [isOpen, setIsOpen] = useState(false);
  const selectorRef = useRef<HTMLDivElement>(null);

  const applyDisplayPreference = useCallback((preference: DisplayPreference) => {
    const theme = preference === 'auto' ? getSystemTheme() : preference;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, preference);
    setDisplayPreference(preference);
  }, []);

  useEffect(() => {
    const savedPreference = localStorage.getItem(STORAGE_KEY);
    applyDisplayPreference(
      isDisplayPreference(savedPreference) ? savedPreference : 'auto'
    );
  }, [applyDisplayPreference]);

  useEffect(() => {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
    function handleSystemThemeChange() {
      if (displayPreference === 'auto') {
        document.documentElement.setAttribute(
          'data-theme',
          systemTheme.matches ? 'dark' : 'normal'
        );
      }
    }
    systemTheme.addEventListener('change', handleSystemThemeChange);
    return () => systemTheme.removeEventListener('change', handleSystemThemeChange);
  }, [displayPreference]);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!selectorRef.current?.contains(event.target as Node)) setIsOpen(false);
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsOpen(false);
    }
    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  function selectPreference(preference: DisplayPreference) {
    applyDisplayPreference(preference);
    setIsOpen(false);
  }

  return (
    <div className="theme-selector" ref={selectorRef}>
      <button
        type="button"
        className="theme-trigger"
        aria-label="Cambiar modo de visualización"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span aria-hidden="true">◐</span>
        <span className="theme-trigger-label">Visualización</span>
      </button>

      {isOpen && (
        <div className="theme-menu" role="menu" aria-label="Visualización">
          {options.map((option) => (
            <button
              type="button"
              role="menuitemradio"
              aria-checked={displayPreference === option.value}
              className={`theme-option ${displayPreference === option.value ? 'active' : ''}`}
              key={option.value}
              onClick={() => selectPreference(option.value)}
            >
              <span aria-hidden="true">{option.icon}</span>
              <span>{option.label}</span>
              <span className="theme-check" aria-hidden="true">
                {displayPreference === option.value ? '✓' : ''}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
