import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

const themes = ['light', 'dark'];

export default function ThemeToggle() {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === 'light' ? 'dark' : 'light');
    }
  };

  return isMounted ? (
    <div className="inline-flex items-center p-[1px] rounded-3xl bg-orange-300 dark:bg-zinc-600">
      {themes.map((t) => {
        const checked = t === theme;
        return (
          <button
            key={t}
            className={`${
              checked ? 'bg-white text-black' : ''
            } cursor-pointer rounded-3xl p-2`}
            onClick={switchTheme}
            aria-label="Toggle theme"
          >
            {t === 'light' ? <>light</> : <>dark</>}
          </button>
        );
      })}
    </div>
  ) : (
    <div />
  );
}
