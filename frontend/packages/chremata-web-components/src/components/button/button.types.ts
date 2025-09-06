import * as React from 'react';

import { type ButtonIconProps } from './button-icon/button-icon.types';
import { type ButtonLabelProps } from './button-label/button-label.types';

type ButtonEvents = {
  /**
   * Callback fired when the button is clicked.
   */
  onClick?: () => void;
};

type ButtonAttributes = {
  /**
   * Whether the Button is disabled. Default is false.
   */
  disabled?: boolean;

  /**
   * The icon and label icon of the Button.
   */
  children:
    | [
        React.ReactElement<ButtonIconProps>,
        React.ReactElement<ButtonLabelProps>
      ]
    | [undefined, React.ReactElement<ButtonLabelProps>]
    | React.ReactElement<ButtonLabelProps>;
};

type ButtonProps = ButtonAttributes & ButtonEvents;

type DefaultButtonProps = Required<Pick<ButtonProps, 'disabled'>>;

export { type ButtonProps, type DefaultButtonProps };
