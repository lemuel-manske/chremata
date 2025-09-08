import * as React from 'react';

import { type IconProps } from '../../icon/icon.types';

export type CardHeaderProps = {
  /**
   * Header icon. Not required.
   */
  children?: React.ReactElement<IconProps> | null;
};
