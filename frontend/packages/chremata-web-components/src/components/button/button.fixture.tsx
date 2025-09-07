import { doNothing } from '@chremata/utils';
import { Icon } from '../icon/icon';

import { Button } from './button';
import { type ButtonProps } from './button.types';

export type ButtonWithIconProps = ButtonProps & {
  iconHidden?: boolean;
};

export function ButtonWithIcon(props: ButtonWithIconProps) {
  const { iconHidden, ...buttonProps } = props;

  const noIcon = doNothing();

  const coinIcon = (
    <Icon name="CoinIconSvg" label="Coin" primaryColor="white" />
  );

  return <Button {...buttonProps}>{iconHidden ? noIcon : coinIcon}</Button>;
}
