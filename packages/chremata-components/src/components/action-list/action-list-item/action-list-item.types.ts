import * as React from 'react';

import { type ButtonProps } from '../../button/button.types';
import type { ButtonIconProps } from '../../button/button-icon/button-icon.types';
import type { ButtonLabelProps } from '../../button/button-label/button-label.types';

type ActionListItemIconProps = Pick<ButtonIconProps, 'name'>;

type ActionListItemLabelProps = Pick<ButtonLabelProps, 'children'>;

type ActionListItemAttributes = Pick<
  ButtonProps,
  'disabled' | 'variant' | 'onClick'
> & {
  children:
    | React.ReactElement<ActionListItemLabelProps>
    | [
        React.ReactElement<ActionListItemIconProps>,
        React.ReactElement<ActionListItemLabelProps>,
      ]
    | [
        React.ReactElement<ActionListItemLabelProps>,
        React.ReactElement<ActionListItemIconProps>,
      ];
};

export type ActionListItemProps = ActionListItemAttributes;
