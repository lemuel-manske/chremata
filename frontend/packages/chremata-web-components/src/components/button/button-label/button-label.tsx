import * as React from 'react';

import { type ButtonLabelProps } from './button-label.types';

export const ButtonLabel: React.FC<ButtonLabelProps> = (
  props: ButtonLabelProps
) => {
  const { children: label } = props;

  return <span aria-label={label}>{label}</span>;
};
