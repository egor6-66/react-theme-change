# 🎨 react-theme-change

**Description** - 🔎 theme switcher.

## [🚀🚀🚀DEMO🚀🚀🚀](http://egorra0c.beget.tech/main/react-theme-change)

## 💿 Installation

```
npm i react-theme-change
```

## 💻 Example

**tsx**
```jsx
import React from 'react';
import ReactThemeChange from 'react-theme-change';
import './demo.scss';

function Demo() {
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
    //more
  };
  
  const useThemeChange = ReactThemeChange({
    themes,
    defaultTheme: themes.dark,
  });

  const { theme, setTheme } = useThemeChange();

  console.log(theme);
  
  return (
    <div className="demo">
      <div>current theme: {theme.name}</div>
      <div>
        <button onClick={() => setTheme('dark')}>dark</button>
        <button onClick={() => setTheme('light')}>light</button>
        <button onClick={() => setTheme('gray')}>gray</button>
      </div>
    </div>
  );
}
```

**style**

```scss
.demo {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--bg_0);
  color: var(--title);
}
```

## 🔗 Links

* **[github-repo](https://github.com/egor6-66/react-theme-change.git)**
* * **[demo](http://egorra0c.beget.tech/main/react-theme-change)**
