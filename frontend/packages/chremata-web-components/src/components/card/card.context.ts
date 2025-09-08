import * as React from 'react';

type CardContextValue = {
  title: string;
  subtitle?: string;
};

export const CardContext = React.createContext<CardContextValue>({
  title: '',
  subtitle: '',
});

export function useCardContext() {
  return React.useContext(CardContext);
}
