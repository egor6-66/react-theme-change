# 🎨 react-theme-change

![version](https://img.shields.io/github/package-json/v/egor6-66/react-theme-change)
![stars](https://img.shields.io/github/stars/egor6-66/react-theme-change?style=social)
![forks](https://img.shields.io/github/forks/egor6-66/react-theme-change?style=social)
![last commit](https://img.shields.io/github/last-commit/egor6-66/react-theme-change/main)
![code size](https://img.shields.io/github/languages/code-size/egor6-66/react-theme-change)
![minzip size](https://img.shields.io/bundlephobia/minzip/react-theme-change)
![download](https://img.shields.io/npm/dt/react-theme-change)

**Description** - 🔎 theme switcher.

## [🚀🚀Codesandbox🚀🚀](https://codesandbox.io/s/react-use-file-uploader-k64526)


## 💿 Installation

```
npm i react-theme-change
```

## 💻 Example

### ts / js

Can be placed along the way: src/configs/themes.ts.

```ts
import ReactThemeChange from 'react-theme-change';

const base = {
    btn_radius: '50%',
};

const themes = {
    dark: {
        bg_0: 'rgba(21, 14, 65, 1)',
        title: 'rgba(255, 255, 255, 1)',
    },
    light: {
        bg_0: 'rgba(239, 242, 247, 1)',
        title: 'rgba(42, 49, 60, 1)',
    },
    gray: {
        bg_0: 'rgba(35, 42, 63, 1)',
        title: 'rgba(255, 255, 255, 1)',
    },
};
const useThemeChange = ReactThemeChange({
    base,
    themes,
    defaultTheme: 'light',
});

export default useThemeChange;
```

### tsx / jsx

```tsx
import React from 'react';

import useThemeChange from './configs/themes';
import './App.scss';

function App() {
    const {theme, setTheme} = useThemeChange();

    return (
        <div className="demo">
            <div className="themeName">current theme: {theme.name}</div>
            <div className="btns">
                <button onClick={() => setTheme('dark')}>dark</button>
                <button onClick={() => setTheme('light')}>light</button>
                <button onClick={() => setTheme('gray')}>gray</button>
            </div>
        </div>
    );
}

export default App;
```

### style

```scss
button {
  width: 50px;
  height: 50px;
  border-radius: var(--btn_radius);
  cursor: pointer;
}

.demo {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  align-items: center;
  background-color: var(--bg_0);
  color: var(--title);
}

.themeName {
  font-size: 40px;
}

.btns {
  display: flex;
  gap: 8px;
}
```

## 🔗 Links

#### current project

* **[Npm](https://www.npmjs.com/package/react-theme-change)**  
* **[Github](https://github.com/egor6-66/react-theme-change.git)**
* **[Codesandbox](https://codesandbox.io/s/react-use-file-uploader-k64526)**  

#### other
* **[react-use-file-uploader](https://www.npmjs.com/package/react-use-file-uploader)**  