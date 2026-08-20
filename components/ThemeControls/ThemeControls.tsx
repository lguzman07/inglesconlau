'use client';

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

type ColorTheme =
  | 'red'
  | 'coral'
  | 'orange'
  | 'yellow'
  | 'golden'
  | 'lime'
  | 'green'
  | 'mint'
  | 'teal'
  | 'sky-blue'
  | 'blue-gray'
  | 'cream'
  | 'purple'
  | 'lilac'
  | 'pink'
  | 'fuchsia'
  | 'brown'
  | 'grayscale';

type DisplayPreference =
  | 'auto'
  | 'normal'
  | 'dark'
  | 'contrast'
  | ColorTheme;

type AppliedTheme = Exclude<DisplayPreference, 'auto'>;

type ColorPalette = {
  '--background': string;
  '--surface': string;
  '--surface-solid': string;
  '--surface-soft': string;
  '--primary': string;
  '--primary-hover': string;
  '--primary-light': string;
  '--accent': string;
  '--secondary': string;
  '--secondary-hover': string;
  '--text': string;
  '--text-light': string;
  '--border': string;
  '--focus': string;
  '--shadow': string;
  '--shadow-hover': string;
};

type ColorOption = {
  value: ColorTheme;
  label: string;
  swatch: string;
  palette: ColorPalette;
};

const STORAGE_KEY = 'display-mode-v2';

const options: Array<{
  value: Exclude<DisplayPreference, ColorTheme>;
  icon: string;
  label: string;
}> = [
  {
    value: 'auto',
    icon: '◑',
    label: 'Automático',
  },
  {
    value: 'normal',
    icon: '☀️',
    label: 'Claro',
  },
  {
    value: 'dark',
    icon: '🌙',
    label: 'Oscuro',
  },
  {
    value: 'contrast',
    icon: '◐',
    label: 'Alto contraste',
  },
];

const colorOptions: ColorOption[] = [
  {
    value: 'red',
    label: 'Garnet',
    swatch: '#f9dede',
    palette: {
      '--background': '#fff6f6',
      '--surface': 'rgb(255 251 251 / 97%)',
      '--surface-solid': '#fffbfb',
      '--surface-soft': '#f9dede',
      '--primary': '#b3262e',
      '--primary-hover': '#8e1d24',
      '--primary-light': '#efb9bd',
      '--accent': '#9d2028',
      '--secondary': '#f2cbce',
      '--secondary-hover': '#e9b2b6',
      '--text': '#452e30',
      '--text-light': '#76575a',
      '--border': '#e3a8ad',
      '--focus': '#71151c',
      '--shadow':
        '0 10px 28px rgb(179 38 46 / 11%)',
      '--shadow-hover':
        '0 14px 30px rgb(179 38 46 / 17%)',
    },
  },
  {
    value: 'coral',
    label: 'Padparadscha',
    swatch: '#fbe0dc',
    palette: {
      '--background': '#fff7f5',
      '--surface': 'rgb(255 252 251 / 97%)',
      '--surface-solid': '#fffcfb',
      '--surface-soft': '#fbe0dc',
      '--primary': '#ad463d',
      '--primary-hover': '#89362f',
      '--primary-light': '#f1beb8',
      '--accent': '#973d35',
      '--secondary': '#f5cec9',
      '--secondary-hover': '#ebb5ae',
      '--text': '#46312f',
      '--text-light': '#765a57',
      '--border': '#e5aaa3',
      '--focus': '#6d2924',
      '--shadow':
        '0 10px 28px rgb(173 70 61 / 11%)',
      '--shadow-hover':
        '0 14px 30px rgb(173 70 61 / 17%)',
    },
  },
  {
    value: 'orange',
    label: 'Carnelian',
    swatch: '#fbe2d0',
    palette: {
      '--background': '#fff8f2',
      '--surface': 'rgb(255 252 249 / 97%)',
      '--surface-solid': '#fffcf9',
      '--surface-soft': '#fbe2d0',
      '--primary': '#b84f12',
      '--primary-hover': '#913d0c',
      '--primary-light': '#f3c6a7',
      '--accent': '#9d430f',
      '--secondary': '#f5d4bd',
      '--secondary-hover': '#edbd9d',
      '--text': '#453329',
      '--text-light': '#765f52',
      '--border': '#e5b595',
      '--focus': '#743006',
      '--shadow':
        '0 10px 28px rgb(184 79 18 / 11%)',
      '--shadow-hover':
        '0 14px 30px rgb(184 79 18 / 17%)',
    },
  },
  {
    value: 'yellow',
    label: 'Yellow Diamond',
    swatch: '#f8efbd',
    palette: {
      '--background': '#fffdf2',
      '--surface': 'rgb(255 254 249 / 97%)',
      '--surface-solid': '#fffef9',
      '--surface-soft': '#f8efbd',
      '--primary': '#786000',
      '--primary-hover': '#5d4a00',
      '--primary-light': '#eadb8c',
      '--accent': '#685300',
      '--secondary': '#f2e5a7',
      '--secondary-hover': '#e6d482',
      '--text': '#403a27',
      '--text-light': '#70694f',
      '--border': '#dccb76',
      '--focus': '#4d3d00',
      '--shadow':
        '0 10px 28px rgb(120 96 0 / 10%)',
      '--shadow-hover':
        '0 14px 30px rgb(120 96 0 / 16%)',
    },
  },
  {
    value: 'golden',
    label: 'Topaz',
    swatch: '#f4e5bc',
    palette: {
      '--background': '#fffaf0',
      '--surface': 'rgb(255 253 248 / 97%)',
      '--surface-solid': '#fffdf8',
      '--surface-soft': '#f4e5bc',
      '--primary': '#8a6500',
      '--primary-hover': '#6b4e00',
      '--primary-light': '#e5cf8d',
      '--accent': '#765600',
      '--secondary': '#ecdba8',
      '--secondary-hover': '#dfc987',
      '--text': '#403829',
      '--text-light': '#70654f',
      '--border': '#d5bd78',
      '--focus': '#563f00',
      '--shadow':
        '0 10px 28px rgb(138 101 0 / 11%)',
      '--shadow-hover':
        '0 14px 30px rgb(138 101 0 / 17%)',
    },
  },
  {
    value: 'cream',
    label: 'Moonstone',
    swatch: '#f7efd9',
    palette: {
      '--background': '#fffdf7',
      '--surface': 'rgb(255 254 250 / 97%)',
      '--surface-solid': '#fffefa',
      '--surface-soft': '#f7efd9',
      '--primary': '#8b6f47',
      '--primary-hover': '#6e5636',
      '--primary-light': '#eadbb7',
      '--accent': '#7a603e',
      '--secondary': '#f3e8cc',
      '--secondary-hover': '#e8d9b5',
      '--text': '#403a31',
      '--text-light': '#71685a',
      '--border': '#ddcda9',
      '--focus': '#5f482c',
      '--shadow':
        '0 10px 28px rgb(139 111 71 / 10%)',
      '--shadow-hover':
        '0 14px 30px rgb(139 111 71 / 16%)',
    },
  },
  {
    value: 'lime',
    label: 'Peridot',
    swatch: '#edf4c7',
    palette: {
      '--background': '#fafced',
      '--surface': 'rgb(253 255 246 / 97%)',
      '--surface-solid': '#fdfff6',
      '--surface-soft': '#edf4c7',
      '--primary': '#647a00',
      '--primary-hover': '#4d5f00',
      '--primary-light': '#dce9a1',
      '--accent': '#566900',
      '--secondary': '#e5edbd',
      '--secondary-hover': '#d5e199',
      '--text': '#383d24',
      '--text-light': '#676e4d',
      '--border': '#ccd991',
      '--focus': '#3d4d00',
      '--shadow':
        '0 10px 28px rgb(100 122 0 / 11%)',
      '--shadow-hover':
        '0 14px 30px rgb(100 122 0 / 17%)',
    },
  },
  {
    value: 'green',
    label: 'Emerald',
    swatch: '#deefe2',
    palette: {
      '--background': '#f5fbf6',
      '--surface': 'rgb(250 254 250 / 97%)',
      '--surface-solid': '#fafffa',
      '--surface-soft': '#deefe2',
      '--primary': '#2f7a4b',
      '--primary-hover': '#245f3a',
      '--primary-light': '#bfe0c9',
      '--accent': '#286a41',
      '--secondary': '#d1e8d7',
      '--secondary-hover': '#b9dcc3',
      '--text': '#293d31',
      '--text-light': '#587062',
      '--border': '#afd2b9',
      '--focus': '#174f2d',
      '--shadow':
        '0 10px 28px rgb(47 122 75 / 11%)',
      '--shadow-hover':
        '0 14px 30px rgb(47 122 75 / 17%)',
    },
  },
  {
    value: 'mint',
    label: 'Jade',
    swatch: '#d9f2ea',
    palette: {
      '--background': '#f3fcf9',
      '--surface': 'rgb(249 255 253 / 97%)',
      '--surface-solid': '#f9fffd',
      '--surface-soft': '#d9f2ea',
      '--primary': '#287a67',
      '--primary-hover': '#1e5f50',
      '--primary-light': '#b9e3d7',
      '--accent': '#226b5b',
      '--secondary': '#cdebe2',
      '--secondary-hover': '#b2dfd2',
      '--text': '#293d38',
      '--text-light': '#58716a',
      '--border': '#a8d5c8',
      '--focus': '#164e41',
      '--shadow':
        '0 10px 28px rgb(40 122 103 / 11%)',
      '--shadow-hover':
        '0 14px 30px rgb(40 122 103 / 17%)',
    },
  },
  {
    value: 'teal',
    label: 'Aquamarine',
    swatch: '#d6f0ef',
    palette: {
      '--background': '#f2fbfb',
      '--surface': 'rgb(249 255 255 / 97%)',
      '--surface-solid': '#f9ffff',
      '--surface-soft': '#d6f0ef',
      '--primary': '#197a78',
      '--primary-hover': '#125f5d',
      '--primary-light': '#aee0dd',
      '--accent': '#156b69',
      '--secondary': '#c7e9e7',
      '--secondary-hover': '#a9ddda',
      '--text': '#273e3e',
      '--text-light': '#557171',
      '--border': '#9fd3d0',
      '--focus': '#0d4f4d',
      '--shadow':
        '0 10px 28px rgb(25 122 120 / 11%)',
      '--shadow-hover':
        '0 14px 30px rgb(25 122 120 / 17%)',
    },
  },
  {
    value: 'sky-blue',
    label: 'Lapis Lazuli',
    swatch: '#dff3ff',
    palette: {
      '--background': '#f3fbff',
      '--surface': 'rgb(249 253 255 / 97%)',
      '--surface-solid': '#f9fdff',
      '--surface-soft': '#dff3ff',
      '--primary': '#2b74a5',
      '--primary-hover': '#215c84',
      '--primary-light': '#bee4f8',
      '--accent': '#24658f',
      '--secondary': '#d2edf9',
      '--secondary-hover': '#b9e1f3',
      '--text': '#253b48',
      '--text-light': '#536d7c',
      '--border': '#acd6ea',
      '--focus': '#17567e',
      '--shadow':
        '0 10px 28px rgb(37 108 157 / 11%)',
      '--shadow-hover':
        '0 14px 30px rgb(37 108 157 / 17%)',
    },
  },
  {
    value: 'blue-gray',
    label: 'Sapphire',
    swatch: '#dce8f1',
    palette: {
      '--background': '#f4f8fb',
      '--surface': 'rgb(250 253 255 / 97%)',
      '--surface-solid': '#fafdff',
      '--surface-soft': '#dce8f1',
      '--primary': '#557a99',
      '--primary-hover': '#405f79',
      '--primary-light': '#c3d7e6',
      '--accent': '#496c89',
      '--secondary': '#d3e2ed',
      '--secondary-hover': '#bbd1e1',
      '--text': '#2f3d49',
      '--text-light': '#5c7080',
      '--border': '#adc6d8',
      '--focus': '#365873',
      '--shadow':
        '0 10px 28px rgb(85 122 153 / 11%)',
      '--shadow-hover':
        '0 14px 30px rgb(85 122 153 / 17%)',
    },
  },
  {
    value: 'purple',
    label: 'Amethyst',
    swatch: '#eadff5',
    palette: {
      '--background': '#faf6ff',
      '--surface': 'rgb(253 250 255 / 97%)',
      '--surface-solid': '#fdfaff',
      '--surface-soft': '#eadff5',
      '--primary': '#7040a0',
      '--primary-hover': '#58317f',
      '--primary-light': '#d8c0eb',
      '--accent': '#61378b',
      '--secondary': '#e1d1ee',
      '--secondary-hover': '#cfb8e2',
      '--text': '#3b3044',
      '--text-light': '#695a75',
      '--border': '#c8afe0',
      '--focus': '#47246d',
      '--shadow':
        '0 10px 28px rgb(112 64 160 / 11%)',
      '--shadow-hover':
        '0 14px 30px rgb(112 64 160 / 17%)',
    },
  },
  {
    value: 'lilac',
    label: 'Fluorite',
    swatch: '#eee4fb',
    palette: {
      '--background': '#fbf8ff',
      '--surface': 'rgb(254 252 255 / 97%)',
      '--surface-solid': '#fefcff',
      '--surface-soft': '#eee4fb',
      '--primary': '#6f4d98',
      '--primary-hover': '#573a79',
      '--primary-light': '#dac7ee',
      '--accent': '#604186',
      '--secondary': '#e4d5f3',
      '--secondary-hover': '#d2bce8',
      '--text': '#3d3347',
      '--text-light': '#6d5f79',
      '--border': '#cab3df',
      '--focus': '#472c68',
      '--shadow':
        '0 10px 28px rgb(111 77 152 / 11%)',
      '--shadow-hover':
        '0 14px 30px rgb(111 77 152 / 17%)',
    },
  },
  {
    value: 'pink',
    label: 'Rose Quartz',
    swatch: '#f9deec',
    palette: {
      '--background': '#fff7fb',
      '--surface': 'rgb(255 251 253 / 97%)',
      '--surface-solid': '#fffbfd',
      '--surface-soft': '#f9deec',
      '--primary': '#b23c72',
      '--primary-hover': '#8e2e5a',
      '--primary-light': '#efbbd3',
      '--accent': '#9c3464',
      '--secondary': '#f3cade',
      '--secondary-hover': '#eab1cd',
      '--text': '#472f3b',
      '--text-light': '#765766',
      '--border': '#e3a6c3',
      '--focus': '#702047',
      '--shadow':
        '0 10px 28px rgb(178 60 114 / 11%)',
      '--shadow-hover':
        '0 14px 30px rgb(178 60 114 / 17%)',
    },
  },
  {
    value: 'fuchsia',
    label: 'Pink Diamond',
    swatch: '#fbe0ef',
    palette: {
      '--background': '#fff5fb',
      '--surface': 'rgb(255 250 253 / 97%)',
      '--surface-solid': '#fffafd',
      '--surface-soft': '#fbe0ef',
      '--primary': '#c21875',
      '--primary-hover': '#9e125f',
      '--primary-light': '#f5bfdc',
      '--accent': '#a81466',
      '--secondary': '#f2cee1',
      '--secondary-hover': '#eab4d0',
      '--text': '#482b3b',
      '--text-light': '#765469',
      '--border': '#e9accb',
      '--focus': '#78104a',
      '--shadow':
        '0 10px 28px rgb(139 28 85 / 12%)',
      '--shadow-hover':
        '0 14px 30px rgb(139 28 85 / 18%)',
    },
  },
  {
    value: 'brown',
    label: 'Smoky Quartz',
    swatch: '#eee0d5',
    palette: {
      '--background': '#faf6f2',
      '--surface': 'rgb(254 251 248 / 97%)',
      '--surface-solid': '#fefbf8',
      '--surface-soft': '#eee0d5',
      '--primary': '#79523a',
      '--primary-hover': '#5f3f2c',
      '--primary-light': '#dbc2b1',
      '--accent': '#684732',
      '--secondary': '#e5d3c6',
      '--secondary-hover': '#d8bdab',
      '--text': '#41352e',
      '--text-light': '#706159',
      '--border': '#cfb5a3',
      '--focus': '#4f321f',
      '--shadow':
        '0 10px 28px rgb(121 82 58 / 11%)',
      '--shadow-hover':
        '0 14px 30px rgb(121 82 58 / 17%)',
    },
  },
  {
    value: 'grayscale',
    label: 'Pearl',
    swatch: '#e7e7e8',
    palette: {
      '--background': '#f5f5f5',
      '--surface': 'rgb(252 252 252 / 97%)',
      '--surface-solid': '#fcfcfc',
      '--surface-soft': '#e7e7e8',
      '--primary': '#4b4b52',
      '--primary-hover': '#343439',
      '--primary-light': '#d2d2d5',
      '--accent': '#3e3e44',
      '--secondary': '#dddddf',
      '--secondary-hover': '#c9c9cc',
      '--text': '#29292d',
      '--text-light': '#626268',
      '--border': '#bfc0c4',
      '--focus': '#111113',
      '--shadow':
        '0 10px 28px rgb(35 35 39 / 10%)',
      '--shadow-hover':
        '0 14px 30px rgb(35 35 39 / 16%)',
    },
  },
];

function isColorTheme(
  value: DisplayPreference
): value is ColorTheme {
  return colorOptions.some(
    (option) => option.value === value
  );
}

function isDisplayPreference(
  value: string | null
): value is DisplayPreference {
  return (
    options.some(
      (option) => option.value === value
    ) ||
    colorOptions.some(
      (option) => option.value === value
    )
  );
}

function getSystemTheme(): AppliedTheme {
  return window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches
    ? 'dark'
    : 'normal';
}

function clearCustomPalette() {
  const rootStyle =
    document.documentElement.style;

  const paletteVariables = Object.keys(
    colorOptions[0].palette
  );

  paletteVariables.forEach((variableName) => {
    rootStyle.removeProperty(variableName);
  });
}

function applyCustomPalette(option: ColorOption) {
  const rootStyle =
    document.documentElement.style;

  Object.entries(option.palette).forEach(
    ([variableName, value]) => {
      rootStyle.setProperty(variableName, value);
    }
  );
}

export default function ThemeControls() {
  const [displayPreference, setDisplayPreference] =
    useState<DisplayPreference>('auto');

  const [isOpen, setIsOpen] = useState(false);
  const [isColorOpen, setIsColorOpen] =
    useState(false);

  const selectorRef =
    useRef<HTMLDivElement>(null);

  const applyDisplayPreference = useCallback(
    (preference: DisplayPreference) => {
      clearCustomPalette();

      const selectedColor = colorOptions.find(
        (option) => option.value === preference
      );

      if (selectedColor) {
        document.documentElement.setAttribute(
          'data-theme',
          selectedColor.value
        );

        applyCustomPalette(selectedColor);
      } else {
        const theme =
          preference === 'auto'
            ? getSystemTheme()
            : preference;

        document.documentElement.setAttribute(
          'data-theme',
          theme
        );
      }

      localStorage.setItem(
        STORAGE_KEY,
        preference
      );

      setDisplayPreference(preference);
    },
    []
  );

  useEffect(() => {
    const savedPreference =
      localStorage.getItem(STORAGE_KEY);

    applyDisplayPreference(
      isDisplayPreference(savedPreference)
        ? savedPreference
        : 'auto'
    );
  }, [applyDisplayPreference]);

  useEffect(() => {
    const systemTheme = window.matchMedia(
      '(prefers-color-scheme: dark)'
    );

    function handleSystemThemeChange() {
      if (displayPreference === 'auto') {
        clearCustomPalette();

        document.documentElement.setAttribute(
          'data-theme',
          systemTheme.matches
            ? 'dark'
            : 'normal'
        );
      }
    }

    systemTheme.addEventListener(
      'change',
      handleSystemThemeChange
    );

    return () => {
      systemTheme.removeEventListener(
        'change',
        handleSystemThemeChange
      );
    };
  }, [displayPreference]);

  useEffect(() => {
    function closeMenus() {
      setIsOpen(false);
      setIsColorOpen(false);
    }

    function handlePointerDown(event: MouseEvent) {
      if (
        !selectorRef.current?.contains(
          event.target as Node
        )
      ) {
        closeMenus();
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== 'Escape') {
        return;
      }

      if (isColorOpen) {
        setIsColorOpen(false);
        return;
      }

      closeMenus();
    }

    document.addEventListener(
      'mousedown',
      handlePointerDown
    );

    document.addEventListener(
      'keydown',
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        'mousedown',
        handlePointerDown
      );

      document.removeEventListener(
        'keydown',
        handleKeyDown
      );
    };
  }, [isColorOpen]);

  function selectPreference(
    preference: DisplayPreference
  ) {
    applyDisplayPreference(preference);
    setIsOpen(false);
    setIsColorOpen(false);
  }

  function selectColorPreference(
    preference: ColorTheme
  ) {
    applyDisplayPreference(preference);

    // Mantiene ambos menús abiertos para
    // comparar los colores inmediatamente.
    setIsOpen(true);
    setIsColorOpen(true);
  }

  return (
    <div
      className="theme-selector"
      ref={selectorRef}
    >
      <button
        type="button"
        className="theme-trigger"
        aria-label="Cambiar modo de visualización"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        onClick={() => {
          setIsOpen((current) => !current);
          setIsColorOpen(false);
        }}
      >
        <span aria-hidden="true">◐</span>

        <span className="theme-trigger-label">
          Visualización
        </span>
      </button>

      {isOpen && (
        <div
          className="theme-menu"
          role="menu"
          aria-label="Visualización"
        >
          {options.map((option) => (
            <button
              type="button"
              role="menuitemradio"
              aria-checked={
                displayPreference === option.value
              }
              className={`theme-option ${
                displayPreference === option.value
                  ? 'active'
                  : ''
              }`}
              key={option.value}
              onClick={() =>
                selectPreference(option.value)
              }
            >
              <span aria-hidden="true">
                {option.icon}
              </span>

              <span>{option.label}</span>

              <span
                className="theme-check"
                aria-hidden="true"
              >
                {displayPreference === option.value
                  ? '✓'
                  : ''}
              </span>
            </button>
          ))}

          <div className="theme-color-section">
            <button
              type="button"
              role="menuitem"
              className={`theme-option theme-color-toggle ${
                isColorTheme(displayPreference)
                  ? 'active'
                  : ''
              }`}
              aria-expanded={isColorOpen}
              aria-controls="theme-color-options"
              onClick={() =>
                setIsColorOpen(
                  (current) => !current
                )
              }
            >
              <span aria-hidden="true">🎨</span>

              <span>Escoge tu color</span>

              <span
                className="theme-color-arrow"
                aria-hidden="true"
              >
                {isColorOpen ? '⌃' : '⌄'}
              </span>
            </button>

            {isColorOpen && (
              <div
                id="theme-color-options"
                className="theme-color-options"
                role="group"
                aria-label="Colores disponibles"
              >
                {colorOptions.map((option) => (
                  <button
                    type="button"
                    role="menuitemradio"
                    aria-checked={
                      displayPreference ===
                      option.value
                    }
                    className={`theme-color-option ${
                      displayPreference ===
                      option.value
                        ? 'active'
                        : ''
                    }`}
                    key={option.value}
                    onClick={() =>
                      selectColorPreference(
                        option.value
                      )
                    }
                  >
                    <span
                      className="theme-color-swatch"
                      style={{
                        backgroundColor:
                          option.swatch,
                      }}
                      aria-hidden="true"
                    />

                    <span>{option.label}</span>

                    <span
                      className="theme-check"
                      aria-hidden="true"
                    >
                      {displayPreference ===
                      option.value
                        ? '✓'
                        : ''}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
