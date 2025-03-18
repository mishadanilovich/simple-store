import { MoonIcon, SunIcon, SunMoon } from 'lucide-react';

export const THEME_TITLE = 'Appearance';

export enum ThemeMode {
  DARK = 'dark',
  LIGHT = 'light',
  SYSTEM = 'system',
}

export const THEME_MODE_ICONS = {
  [ThemeMode.DARK]: <MoonIcon />,
  [ThemeMode.LIGHT]: <SunIcon />,
  [ThemeMode.SYSTEM]: <SunMoon />,
};

export const THEME_MODE_TITLES = {
  [ThemeMode.DARK]: 'Dark',
  [ThemeMode.LIGHT]: 'Light',
  [ThemeMode.SYSTEM]: 'System',
};
