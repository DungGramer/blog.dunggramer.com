import { createContext } from 'react';

export const themes = {
  light: {
    type: 'light',
    fontColor: 'var(--secondary-800)',
    background: 'var(--primary-25)',
  },
  dark: {
    type: 'dark',
    fontColor: '#dcdcdc',
    background: '#2b2c38',
  },
};

export const ThemeContext = createContext({});
