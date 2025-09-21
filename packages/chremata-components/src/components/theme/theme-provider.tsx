import * as React from 'react';

type ThemeOption = 'dark-green';

type Theme = `t-${ThemeOption}`;

type ThemeContextValue = {
  theme: Theme;
};

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeContext = React.createContext<ThemeContextValue>({
  theme: 't-dark-green',
});

export function ThemeProvider(props: ThemeProviderProps) {
  const { children } = props;

  const DEFAULT_THEME: Theme = 't-dark-green';

  const stateValue = { theme: DEFAULT_THEME };

  return (
    <ThemeContext.Provider value={stateValue}>
      <div className={DEFAULT_THEME}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return React.useContext(ThemeContext);
}
