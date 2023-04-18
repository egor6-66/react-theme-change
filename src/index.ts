import { useEffect, useRef, useState } from 'react';

const lsName = 'react_theme_change';

type ReactThemeChangeProps<T, B> = {
    base: B;
    themes: T;
    defaultTheme: keyof T;
};

function ReactThemeChange<B extends Record<keyof B, string>, T extends Record<K, A>, K extends keyof T, A extends T[K]>(init: ReactThemeChangeProps<T, B>) {
    const activeTheme = localStorage.getItem(lsName) || init.defaultTheme;

    if (!activeTheme) {
        localStorage.setItem(lsName, String(init.defaultTheme));
    }

    const addVars = (theme: K) => {
        const { themes } = init;
        Object.entries(init.base).forEach(([key, value]: any) => {
            document.documentElement.style.setProperty(`--${key}`, value);
        });
        Object.entries(themes).forEach(([key, value]: any) => {
            if (key === theme) {
                Object.entries(value).forEach(([key, value]: any) => {
                    document.documentElement.style.setProperty(`--${key}`, value);
                });
            }
        });
    };

    function useThemeChange(): {
        theme: {
            name: keyof T;
            styles: A & B;
        };
        setTheme: (theme: K) => void;
    } {
        const [themeName, setThemeName] = useState<K>(activeTheme as K);

        const once = useRef(false);

        useEffect(() => {
            if (init && !once.current) {
                addVars(themeName);
                once.current = true;
            }
        }, []);

        const setTheme = (theme: K) => {
            if (init) {
                localStorage.setItem(lsName, String(theme));
                addVars(theme);
                setThemeName(theme);
            }
        };

        const getStyles = () => {
            if (activeTheme) {
                const found: any = Object.entries(init.themes).find(([key, value]) => key === activeTheme);
                return found ? { ...found[1], ...init.base } : null;
            }
            return null;
        };

        const theme = {
            name: themeName,
            styles: getStyles() as A & B,
        };

        return { theme, setTheme };
    }

    return useThemeChange;
}

export default ReactThemeChange;
