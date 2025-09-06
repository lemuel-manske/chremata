import * as React from 'react';

import { type ButtonIconProps } from './button-icon/button-icon.types';
import { type ButtonLabelProps } from './button-label/button-label.types';

type ButtonEvents = {
  onClick?: () => void;
};

type ButtonAttributes = {
  disabled?: boolean;

  children:
    | [
        React.ReactElement<ButtonIconProps>,
        React.ReactElement<ButtonLabelProps>
      ]
    | React.ReactElement<ButtonLabelProps>;
};

type ButtonProps = ButtonAttributes & ButtonEvents;

type DefaultButtonProps = Required<Pick<ButtonProps, 'disabled'>>;

export { type ButtonProps, type DefaultButtonProps };
