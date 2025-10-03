import * as React from 'react';

import type { ButtonSize, ButtonVariant } from './button.types';

export type ButtonState = {
  disabled?: boolean,
}

export type ButtonContextValue = {
  label: string,
  color: string,
  variant: ButtonVariant,
  size: ButtonSize,
  state: ButtonState,
}

export const ButtonContext = React.createContext<ButtonContextValue>({
  label: '',
  color: 'var(--font-color--light)',
  variant: 'primary',
  size: 'medium',
  state: { disabled: false },
});

export function useButtonContext() {
  return React.useContext(ButtonContext);
}
