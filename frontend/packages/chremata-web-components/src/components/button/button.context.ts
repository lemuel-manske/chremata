import * as React from 'react';

import { type ButtonSize } from './button.types';

export type ButtonState = {
  disabled: boolean;
};

export type ButtonContextValue = {
  size: ButtonSize;
  state: ButtonState;
};

export const ButtonContext = React.createContext<ButtonContextValue>({
  size: 'medium',
  state: { disabled: false },
});

export function useButtonContext() {
  return React.useContext(ButtonContext);
}
