import { removeNulls, findChild } from '@chremata/utils';

import { type LabelProps, type DefaultLabelProps } from './label.types';
import { LabelIcon } from './label-icon/label-icon';

export const DEFAULT_LABEL_PROPS: DefaultLabelProps = {
  disabled: false,
  size: 'medium',
  variant: 'regular',
};

export function useLabel(props: LabelProps) {
  const {
    id,
    disabled = DEFAULT_LABEL_PROPS.disabled,
    size = DEFAULT_LABEL_PROPS.size,
    variant = DEFAULT_LABEL_PROPS.variant,
    children,
  } = props;

  const childrenArray = removeNulls([children].flat());

  const icon = findChild(childrenArray, LabelIcon);

  const label = (icon ? childrenArray[1] : childrenArray[0]) as string;

  return {
    id,
    disabled,
    size,
    variant,
    label,
    icon,
  };
}
