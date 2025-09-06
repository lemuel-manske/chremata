import * as React from 'react';

import { classNames } from '@chremata/utils';

import { type IconWrapperProps } from '../icon.types';

import './index.css';

function IconWrapper(props: React.PropsWithChildren<IconWrapperProps>) {
  const { label, disabled, children, size } = props;

  const classes = classNames({
    'ch-icon-wrapper': true,

    'ch-icon-wrapper__xsmall': size === 'xsmall',
    'ch-icon-wrapper__small': size === 'small',
    'ch-icon-wrapper__medium': size === 'medium',
    'ch-icon-wrapper__large': size === 'large',
    'ch-icon-wrapper__xlarge': size === 'xlarge',
    'ch-icon-wrapper__xxlarge': size === 'xxlarge',
  });

  const role = 'img';

  return (
    <div
      aria-label={label}
      aria-disabled={disabled}
      className={classes}
      role={role}
    >
      {children}
    </div>
  );
}

export { IconWrapper };
