import { Icon } from '../icon/icon';

import { Button } from './button';
import { type ButtonProps } from './button.types';

export type ButtonWithIconProps = ButtonProps & {
  iconHidden?: boolean;
  label: string;
};

export function ButtonWithIcon(props: ButtonWithIconProps) {
  const { label, iconHidden, ...buttonProps } = props;

  return (
    <Button {...buttonProps}>
      {iconHidden ? undefined : (
        <Button.Icon>
          <Icon name="CoinIconSvg" label="Coin" primaryColor="black" />
        </Button.Icon>
      )}

      <Button.Label>{label}</Button.Label>
    </Button>
  );
}
