'use client';

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import WinterOverlay from '@/components/WinterOverlay/WinterOverlay';

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
  | 'grayscale'
  | 'winter';

type ColorChoice = 'none' | ColorTheme;

type Mode = 'auto' | 'normal' | 'dark' | 'contrast';

type ResolvedMode = Exclude<Mode, 'auto'>;

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
  paletteLight: ColorPalette;
  paletteDark: ColorPalette;
  decorative?: 'snow';
};

const MODE_STORAGE_KEY = 'display-mode-v2';
const COLOR_STORAGE_KEY = 'display-color-v1';

const options: Array<{
  value: Mode;
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
    paletteLight: {
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
    paletteDark: {
      '--background': '#1f1414',
      '--surface': 'rgba(50, 32, 33, 0.96)',
      '--surface-solid': '#322021',
      '--surface-soft': '#42292a',
      '--primary': '#d69a9d',
      '--primary-hover': '#e4b4b6',
      '--primary-light': '#502f31',
      '--accent': '#e4b4b6',
      '--secondary': '#513435',
      '--secondary-hover': '#653e40',
      '--text': '#f3f5f6',
      '--text-light': '#ded3d4',
      '--border': '#8a5154',
      '--focus': '#eec9cb',
      '--shadow': '0 10px 28px rgba(0, 0, 0, 0.3)',
      '--shadow-hover': '0 14px 30px rgba(0, 0, 0, 0.4)',
    },
  },
  {
    value: 'coral',
    label: 'Padparadscha',
    swatch: '#fbe0dc',
    paletteLight: {
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
    paletteDark: {
      '--background': '#1f1514',
      '--surface': 'rgba(50, 33, 32, 0.96)',
      '--surface-solid': '#322120',
      '--surface-soft': '#422b29',
      '--primary': '#d69f9a',
      '--primary-hover': '#e4b8b4',
      '--primary-light': '#50322f',
      '--accent': '#e4b8b4',
      '--secondary': '#513634',
      '--secondary-hover': '#65413e',
      '--text': '#f3f5f6',
      '--text-light': '#ded4d3',
      '--border': '#8a5651',
      '--focus': '#eeccc9',
      '--shadow': '0 10px 28px rgba(0, 0, 0, 0.3)',
      '--shadow-hover': '0 14px 30px rgba(0, 0, 0, 0.4)',
    },
  },
  {
    value: 'orange',
    label: 'Carnelian',
    swatch: '#fbe2d0',
    paletteLight: {
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
    paletteDark: {
      '--background': '#1f1814',
      '--surface': 'rgba(50, 38, 32, 0.96)',
      '--surface-solid': '#322620',
      '--surface-soft': '#423229',
      '--primary': '#d6b09a',
      '--primary-hover': '#e4c5b4',
      '--primary-light': '#503b2f',
      '--accent': '#e4c5b4',
      '--secondary': '#513e34',
      '--secondary-hover': '#654c3e',
      '--text': '#f3f5f6',
      '--text-light': '#ded7d3',
      '--border': '#8a6651',
      '--focus': '#eed6c9',
      '--shadow': '0 10px 28px rgba(0, 0, 0, 0.3)',
      '--shadow-hover': '0 14px 30px rgba(0, 0, 0, 0.4)',
    },
  },
  {
    value: 'yellow',
    label: 'Yellow Diamond',
    swatch: '#f8efbd',
    paletteLight: {
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
    paletteDark: {
      '--background': '#1f1d14',
      '--surface': 'rgba(50, 46, 32, 0.96)',
      '--surface-solid': '#322e20',
      '--surface-soft': '#423d29',
      '--primary': '#d6ca9a',
      '--primary-hover': '#e4dbb4',
      '--primary-light': '#504a2f',
      '--accent': '#e4dbb4',
      '--secondary': '#514b34',
      '--secondary-hover': '#655d3e',
      '--text': '#f3f5f6',
      '--text-light': '#dedcd3',
      '--border': '#8a7f51',
      '--focus': '#eee6c9',
      '--shadow': '0 10px 28px rgba(0, 0, 0, 0.3)',
      '--shadow-hover': '0 14px 30px rgba(0, 0, 0, 0.4)',
    },
  },
  {
    value: 'golden',
    label: 'Topaz',
    swatch: '#f4e5bc',
    paletteLight: {
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
    paletteDark: {
      '--background': '#1f1c14',
      '--surface': 'rgba(50, 45, 32, 0.96)',
      '--surface-solid': '#322d20',
      '--surface-soft': '#423c29',
      '--primary': '#d6c69a',
      '--primary-hover': '#e4d7b4',
      '--primary-light': '#50472f',
      '--accent': '#e4d7b4',
      '--secondary': '#514934',
      '--secondary-hover': '#655b3e',
      '--text': '#f3f5f6',
      '--text-light': '#dedbd3',
      '--border': '#8a7b51',
      '--focus': '#eee4c9',
      '--shadow': '0 10px 28px rgba(0, 0, 0, 0.3)',
      '--shadow-hover': '0 14px 30px rgba(0, 0, 0, 0.4)',
    },
  },
  {
    value: 'cream',
    label: 'Moonstone',
    swatch: '#f7efd9',
    paletteLight: {
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
    paletteDark: {
      '--background': '#1f1a14',
      '--surface': 'rgba(50, 42, 32, 0.96)',
      '--surface-solid': '#322a20',
      '--surface-soft': '#423829',
      '--primary': '#d6bd9a',
      '--primary-hover': '#e4d0b4',
      '--primary-light': '#50432f',
      '--accent': '#e4d0b4',
      '--secondary': '#514534',
      '--secondary-hover': '#65553e',
      '--text': '#f3f5f6',
      '--text-light': '#dedad3',
      '--border': '#8a7251',
      '--focus': '#eedec9',
      '--shadow': '0 10px 28px rgba(0, 0, 0, 0.3)',
      '--shadow-hover': '0 14px 30px rgba(0, 0, 0, 0.4)',
    },
  },
  {
    value: 'lime',
    label: 'Peridot',
    swatch: '#edf4c7',
    paletteLight: {
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
    paletteDark: {
      '--background': '#1d1f14',
      '--surface': 'rgba(46, 50, 32, 0.96)',
      '--surface-solid': '#2e3220',
      '--surface-soft': '#3e4229',
      '--primary': '#cbd69a',
      '--primary-hover': '#dce4b4',
      '--primary-light': '#4a502f',
      '--accent': '#dce4b4',
      '--secondary': '#4c5134',
      '--secondary-hover': '#5e653e',
      '--text': '#f3f5f6',
      '--text-light': '#dcded3',
      '--border': '#808a51',
      '--focus': '#e7eec9',
      '--shadow': '0 10px 28px rgba(0, 0, 0, 0.3)',
      '--shadow-hover': '0 14px 30px rgba(0, 0, 0, 0.4)',
    },
  },
  {
    value: 'green',
    label: 'Emerald',
    swatch: '#deefe2',
    paletteLight: {
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
    paletteDark: {
      '--background': '#141f18',
      '--surface': 'rgba(32, 50, 38, 0.96)',
      '--surface-solid': '#203226',
      '--surface-soft': '#294232',
      '--primary': '#9ad6b0',
      '--primary-hover': '#b4e4c5',
      '--primary-light': '#2f503b',
      '--accent': '#b4e4c5',
      '--secondary': '#34513e',
      '--secondary-hover': '#3e654c',
      '--text': '#f3f5f6',
      '--text-light': '#d3ded7',
      '--border': '#518a66',
      '--focus': '#c9eed6',
      '--shadow': '0 10px 28px rgba(0, 0, 0, 0.3)',
      '--shadow-hover': '0 14px 30px rgba(0, 0, 0, 0.4)',
    },
  },
  {
    value: 'mint',
    label: 'Jade',
    swatch: '#d9f2ea',
    paletteLight: {
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
    paletteDark: {
      '--background': '#141f1c',
      '--surface': 'rgba(32, 50, 46, 0.96)',
      '--surface-solid': '#20322e',
      '--surface-soft': '#29423c',
      '--primary': '#9ad6c8',
      '--primary-hover': '#b4e4d9',
      '--primary-light': '#2f5049',
      '--accent': '#b4e4d9',
      '--secondary': '#34514a',
      '--secondary-hover': '#3e655c',
      '--text': '#f3f5f6',
      '--text-light': '#d3dedc',
      '--border': '#518a7d',
      '--focus': '#c9eee5',
      '--shadow': '0 10px 28px rgba(0, 0, 0, 0.3)',
      '--shadow-hover': '0 14px 30px rgba(0, 0, 0, 0.4)',
    },
  },
  {
    value: 'teal',
    label: 'Aquamarine',
    swatch: '#d6f0ef',
    paletteLight: {
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
    paletteDark: {
      '--background': '#141f1f',
      '--surface': 'rgba(32, 50, 49, 0.96)',
      '--surface-solid': '#203231',
      '--surface-soft': '#294242',
      '--primary': '#9ad6d5',
      '--primary-hover': '#b4e4e4',
      '--primary-light': '#2f5050',
      '--accent': '#b4e4e4',
      '--secondary': '#345150',
      '--secondary-hover': '#3e6565',
      '--text': '#f3f5f6',
      '--text-light': '#d3dede',
      '--border': '#518a89',
      '--focus': '#c9eeed',
      '--shadow': '0 10px 28px rgba(0, 0, 0, 0.3)',
      '--shadow-hover': '0 14px 30px rgba(0, 0, 0, 0.4)',
    },
  },
  {
    value: 'sky-blue',
    label: 'Lapis Lazuli',
    swatch: '#dff3ff',
    paletteLight: {
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
    paletteDark: {
      '--background': '#141b1f',
      '--surface': 'rgba(32, 43, 50, 0.96)',
      '--surface-solid': '#202b32',
      '--surface-soft': '#293842',
      '--primary': '#9abed6',
      '--primary-hover': '#b4d1e4',
      '--primary-light': '#2f4350',
      '--accent': '#b4d1e4',
      '--secondary': '#344551',
      '--secondary-hover': '#3e5665',
      '--text': '#f3f5f6',
      '--text-light': '#d3dade',
      '--border': '#51738a',
      '--focus': '#c9dfee',
      '--shadow': '0 10px 28px rgba(0, 0, 0, 0.3)',
      '--shadow-hover': '0 14px 30px rgba(0, 0, 0, 0.4)',
    },
  },
  {
    value: 'blue-gray',
    label: 'Sapphire',
    swatch: '#dce8f1',
    paletteLight: {
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
    paletteDark: {
      '--background': '#141a1f',
      '--surface': 'rgba(32, 42, 50, 0.96)',
      '--surface-solid': '#202a32',
      '--surface-soft': '#293742',
      '--primary': '#9abbd6',
      '--primary-hover': '#b4cee4',
      '--primary-light': '#2f4150',
      '--accent': '#b4cee4',
      '--secondary': '#344451',
      '--secondary-hover': '#3e5465',
      '--text': '#f3f5f6',
      '--text-light': '#d3d9de',
      '--border': '#51718a',
      '--focus': '#c9ddee',
      '--shadow': '0 10px 28px rgba(0, 0, 0, 0.3)',
      '--shadow-hover': '0 14px 30px rgba(0, 0, 0, 0.4)',
    },
  },
  {
    value: 'purple',
    label: 'Amethyst',
    swatch: '#eadff5',
    paletteLight: {
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
    paletteDark: {
      '--background': '#1a141f',
      '--surface': 'rgba(41, 32, 50, 0.96)',
      '--surface-solid': '#292032',
      '--surface-soft': '#362942',
      '--primary': '#b89ad6',
      '--primary-hover': '#ccb4e4',
      '--primary-light': '#402f50',
      '--accent': '#ccb4e4',
      '--secondary': '#423451',
      '--secondary-hover': '#523e65',
      '--text': '#f3f5f6',
      '--text-light': '#d9d3de',
      '--border': '#6e518a',
      '--focus': '#dbc9ee',
      '--shadow': '0 10px 28px rgba(0, 0, 0, 0.3)',
      '--shadow-hover': '0 14px 30px rgba(0, 0, 0, 0.4)',
    },
  },
  {
    value: 'lilac',
    label: 'Fluorite',
    swatch: '#eee4fb',
    paletteLight: {
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
    paletteDark: {
      '--background': '#19141f',
      '--surface': 'rgba(40, 32, 50, 0.96)',
      '--surface-solid': '#282032',
      '--surface-soft': '#342942',
      '--primary': '#b59ad6',
      '--primary-hover': '#cab4e4',
      '--primary-light': '#3e2f50',
      '--accent': '#cab4e4',
      '--secondary': '#413451',
      '--secondary-hover': '#503e65',
      '--text': '#f3f5f6',
      '--text-light': '#d8d3de',
      '--border': '#6b518a',
      '--focus': '#d9c9ee',
      '--shadow': '0 10px 28px rgba(0, 0, 0, 0.3)',
      '--shadow-hover': '0 14px 30px rgba(0, 0, 0, 0.4)',
    },
  },
  {
    value: 'pink',
    label: 'Rose Quartz',
    swatch: '#f9deec',
    paletteLight: {
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
    paletteDark: {
      '--background': '#1f1419',
      '--surface': 'rgba(50, 32, 40, 0.96)',
      '--surface-solid': '#322028',
      '--surface-soft': '#422934',
      '--primary': '#d69ab5',
      '--primary-hover': '#e4b4ca',
      '--primary-light': '#502f3e',
      '--accent': '#e4b4ca',
      '--secondary': '#513441',
      '--secondary-hover': '#653e50',
      '--text': '#f3f5f6',
      '--text-light': '#ded3d8',
      '--border': '#8a516b',
      '--focus': '#eec9d9',
      '--shadow': '0 10px 28px rgba(0, 0, 0, 0.3)',
      '--shadow-hover': '0 14px 30px rgba(0, 0, 0, 0.4)',
    },
  },
  {
    value: 'fuchsia',
    label: 'Pink Diamond',
    swatch: '#fbe0ef',
    paletteLight: {
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
    paletteDark: {
      '--background': '#1f141a',
      '--surface': 'rgba(50, 32, 42, 0.96)',
      '--surface-solid': '#32202a',
      '--surface-soft': '#422937',
      '--primary': '#d69abb',
      '--primary-hover': '#e4b4ce',
      '--primary-light': '#502f41',
      '--accent': '#e4b4ce',
      '--secondary': '#513444',
      '--secondary-hover': '#653e54',
      '--text': '#f3f5f6',
      '--text-light': '#ded3d9',
      '--border': '#8a5171',
      '--focus': '#eec9dd',
      '--shadow': '0 10px 28px rgba(0, 0, 0, 0.3)',
      '--shadow-hover': '0 14px 30px rgba(0, 0, 0, 0.4)',
    },
  },
  {
    value: 'brown',
    label: 'Smoky Quartz',
    swatch: '#eee0d5',
    paletteLight: {
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
    paletteDark: {
      '--background': '#1f1814',
      '--surface': 'rgba(50, 39, 32, 0.96)',
      '--surface-solid': '#322720',
      '--surface-soft': '#423329',
      '--primary': '#d6b19a',
      '--primary-hover': '#e4c6b4',
      '--primary-light': '#503c2f',
      '--accent': '#e4c6b4',
      '--secondary': '#513f34',
      '--secondary-hover': '#654d3e',
      '--text': '#f3f5f6',
      '--text-light': '#ded8d3',
      '--border': '#8a6751',
      '--focus': '#eed7c9',
      '--shadow': '0 10px 28px rgba(0, 0, 0, 0.3)',
      '--shadow-hover': '0 14px 30px rgba(0, 0, 0, 0.4)',
    },
  },
  {
    value: 'grayscale',
    label: 'Pearl',
    swatch: '#e7e7e8',
    paletteLight: {
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
    paletteDark: {
      '--background': '#1a1a1a',
      '--surface': 'rgba(41, 41, 41, 0.96)',
      '--surface-solid': '#292929',
      '--surface-soft': '#343437',
      '--primary': '#b8b8b8',
      '--primary-hover': '#c9c9cf',
      '--primary-light': '#3d3d42',
      '--accent': '#c9c9cf',
      '--secondary': '#424242',
      '--secondary-hover': '#505053',
      '--text': '#f3f5f6',
      '--text-light': '#d9d9d9',
      '--border': '#696972',
      '--focus': '#d8d8df',
      '--shadow': '0 10px 28px rgba(0, 0, 0, 0.3)',
      '--shadow-hover': '0 14px 30px rgba(0, 0, 0, 0.4)',
    },
  },
  {
    value: 'winter',
    label: 'Winter Wonderland',
    swatch: '#dceef7',
    decorative: 'snow',
    paletteLight: {
      '--background': '#f2fbff',
      '--surface': 'rgb(248 253 255 / 97%)',
      '--surface-solid': '#f8fdff',
      '--surface-soft': '#dceef7',
      '--primary': '#1f6f8b',
      '--primary-hover': '#185670',
      '--primary-light': '#bfe3f0',
      '--accent': '#164f66',
      '--secondary': '#cfe8f2',
      '--secondary-hover': '#b6dbe9',
      '--text': '#1c3440',
      '--text-light': '#4d6b78',
      '--border': '#a8d3e3',
      '--focus': '#0f3f52',
      '--shadow':
        '0 10px 28px rgb(31 111 139 / 11%)',
      '--shadow-hover':
        '0 14px 30px rgb(31 111 139 / 17%)',
    },
    paletteDark: {
      '--background': '#0d1826',
      '--surface': 'rgba(24, 38, 54, 0.96)',
      '--surface-solid': '#182636',
      '--surface-soft': '#223347',
      '--primary': '#a9d9f0',
      '--primary-hover': '#c3e6f7',
      '--primary-light': '#24425a',
      '--accent': '#c3e6f7',
      '--secondary': '#28394d',
      '--secondary-hover': '#32475f',
      '--text': '#f3f8fb',
      '--text-light': '#cfe0ea',
      '--border': '#4d7590',
      '--focus': '#d6f0fb',
      '--shadow': '0 10px 28px rgba(0, 0, 0, 0.35)',
      '--shadow-hover': '0 14px 30px rgba(0, 0, 0, 0.45)',
    },
  },
];

function isMode(value: string | null): value is Mode {
  return (
    value === 'auto' ||
    value === 'normal' ||
    value === 'dark' ||
    value === 'contrast'
  );
}

function isColorTheme(
  value: string | null
): value is ColorTheme {
  return colorOptions.some(
    (option) => option.value === value
  );
}

function getSystemTheme(): 'normal' | 'dark' {
  if (typeof window === 'undefined') {
    // Prerenderizado en el servidor: no hay preferencia de
    // sistema disponible todavía, se ajusta en el cliente.
    return 'normal';
  }

  return window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches
    ? 'dark'
    : 'normal';
}

function resolveMode(mode: Mode): ResolvedMode {
  return mode === 'auto' ? getSystemTheme() : mode;
}

function clearCustomPalette() {
  const rootStyle =
    document.documentElement.style;

  const paletteVariables = Object.keys(
    colorOptions[0].paletteLight
  );

  paletteVariables.forEach((variableName) => {
    rootStyle.removeProperty(variableName);
  });
}

function applyCustomPalette(
  option: ColorOption,
  resolved: ResolvedMode
) {
  const rootStyle =
    document.documentElement.style;

  const palette =
    resolved === 'dark'
      ? option.paletteDark
      : option.paletteLight;

  Object.entries(palette).forEach(
    ([variableName, value]) => {
      rootStyle.setProperty(variableName, value);
    }
  );
}

export default function ThemeControls() {
  const [mode, setMode] = useState<Mode>('auto');
  const [colorChoice, setColorChoice] =
    useState<ColorChoice>('none');

  const [isOpen, setIsOpen] = useState(false);
  const [isColorOpen, setIsColorOpen] =
    useState(false);

  const selectorRef =
    useRef<HTMLDivElement>(null);

  const applyTheme = useCallback(
    (nextMode: Mode, nextColor: ColorChoice) => {
      clearCustomPalette();

      const resolved = resolveMode(nextMode);

      document.documentElement.setAttribute(
        'data-theme',
        resolved
      );

      if (
        resolved !== 'contrast' &&
        nextColor !== 'none'
      ) {
        const selectedColor = colorOptions.find(
          (option) => option.value === nextColor
        );

        if (selectedColor) {
          applyCustomPalette(
            selectedColor,
            resolved
          );
        }
      }

      localStorage.setItem(
        MODE_STORAGE_KEY,
        nextMode
      );

      localStorage.setItem(
        COLOR_STORAGE_KEY,
        nextColor
      );

      setMode(nextMode);
      setColorChoice(nextColor);
    },
    []
  );

  useEffect(() => {
    const storedMode = localStorage.getItem(
      MODE_STORAGE_KEY
    );

    const storedColor = localStorage.getItem(
      COLOR_STORAGE_KEY
    );

    if (isColorTheme(storedColor)) {
      // Ya había un color guardado con el esquema nuevo.
      applyTheme(
        isMode(storedMode) ? storedMode : 'auto',
        storedColor
      );

      return;
    }

    if (isColorTheme(storedMode)) {
      // Esquema viejo: el color se guardaba como si fuera
      // el modo, y siempre se veía en versión clara.
      applyTheme('normal', storedMode);

      return;
    }

    applyTheme(
      isMode(storedMode) ? storedMode : 'auto',
      'none'
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const systemTheme = window.matchMedia(
      '(prefers-color-scheme: dark)'
    );

    function handleSystemThemeChange() {
      if (mode === 'auto') {
        applyTheme('auto', colorChoice);
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
  }, [mode, colorChoice, applyTheme]);

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

  function selectMode(nextMode: Mode) {
    applyTheme(nextMode, colorChoice);
    setIsOpen(false);
    setIsColorOpen(false);
  }

  function selectColorPreference(
    nextColor: ColorChoice
  ) {
    applyTheme(mode, nextColor);

    // Mantiene ambos menús abiertos para
    // comparar los colores inmediatamente.
    setIsOpen(true);
    setIsColorOpen(true);
  }

  const resolvedMode = resolveMode(mode);
  const isContrastActive = resolvedMode === 'contrast';

  const selectedColorOption = colorOptions.find(
    (option) => option.value === colorChoice
  );

  const showWinterDecoration =
    !isContrastActive &&
    selectedColorOption?.decorative === 'snow';

  return (
    <div
      className="theme-selector"
      ref={selectorRef}
    >
      {showWinterDecoration && <WinterOverlay />}

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
              aria-checked={mode === option.value}
              className={`theme-option ${
                mode === option.value ? 'active' : ''
              }`}
              key={option.value}
              onClick={() =>
                selectMode(option.value)
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
                {mode === option.value ? '✓' : ''}
              </span>
            </button>
          ))}

          <div className="theme-color-section">
            <button
              type="button"
              role="menuitem"
              className={`theme-option theme-color-toggle ${
                colorChoice !== 'none' ? 'active' : ''
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
                      colorChoice === option.value
                    }
                    className={`theme-color-option ${
                      colorChoice === option.value
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
                      {colorChoice ===
                      option.value
                        ? '✓'
                        : ''}
                    </span>
                  </button>
                ))}

                {isContrastActive && (
                  <p className="theme-color-note">
                    El color no se aplica en Alto
                    contraste.
                  </p>
                )}

                {colorChoice !== 'none' && (
                  <button
                    type="button"
                    className="theme-color-clear"
                    onClick={() =>
                      selectColorPreference('none')
                    }
                  >
                    Quitar color (usar el
                    predeterminado)
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
