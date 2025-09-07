import * as React from 'react';

import { type ButtonSize } from './button.types';
import { DEFAULT_BUTTON_PROPS } from './use-button';

export type ButtonState = {
  disabled: boolean;
};

export type ButtonContextValue = {
  size: ButtonSize;
  state: ButtonState;
};

export const ButtonContext = React.createContext<ButtonContextValue>({
  size: DEFAULT_BUTTON_PROPS.size,
  state: { disabled: DEFAULT_BUTTON_PROPS.disabled },
});

export function useButtonContext() {
  return React.useContext(ButtonContext);
}
