import * as React from 'react';

import type { LabelSize, LabelVariant } from './label.types';

export type LabelState = {
  disabled?: boolean;
};

export type LabelContextValue = {
  label: string;
  variant: LabelVariant;
  size: LabelSize;
  state: LabelState;
};

export const LabelContext = React.createContext<LabelContextValue>({
  label: '',
  size: 'medium',
  variant: 'regular',
  state: { disabled: false },
});

export function useLabelContext() {
  return React.useContext(LabelContext);
}
