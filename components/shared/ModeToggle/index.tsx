'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  THEME_MODE_ICONS,
  THEME_MODE_TITLES,
  THEME_TITLE,
  ThemeMode,
} from './constants';

export const ModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost'>{THEME_MODE_ICONS[theme as ThemeMode]}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{THEME_TITLE}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {Object.values(ThemeMode).map((themeMode) => (
          <DropdownMenuCheckboxItem
            key={themeMode}
            checked={theme === themeMode}
            onClick={() => setTheme(themeMode)}
          >
            {THEME_MODE_TITLES[themeMode]}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
