import * as React from 'react';

export type ThemeOption = 'dark-green';

export type Theme = `t-${ThemeOption}`;

export type ThemeContextValue = {
  theme: Theme;
};

export type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeContext = React.createContext<ThemeContextValue>({
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
