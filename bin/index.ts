import { useState, useEffect } from 'react';

const lsName = 'react_theme_change';

type ReactThemeChangeProps<A, T> = {
    defaultTheme: A;
    themes: T;
};

function ReactThemeChange<A, T extends Record<K, A>, K extends keyof T, E extends T[K]>(init: ReactThemeChangeProps<A, T>) {
    const themeInLs: any = localStorage.getItem(lsName);
    const [activeTheme, setActiveTheme] = useState<K>(themeInLs || init?.defaultTheme);

    const setTheme = (theme: K) => {
        localStorage.setItem(lsName, String(theme));
        setActiveTheme(theme);
    };

    useEffect(() => {
        Object.entries(init.themes).forEach(([key, value]: any) => {
            if (key === activeTheme) {
                Object.entries(value).forEach(([key, value]: any) => {
                    document.documentElement.style.setProperty(`--${key}`, value);
                });
            }
        });
    }, [activeTheme]);

    const theme = {
        name: activeTheme,
        styles: init.themes[activeTheme],
    };

    return () => {
        return { theme, setTheme };
    };
}

export default ReactThemeChange;
