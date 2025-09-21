import { classNames } from '@chremata/utils';

import { type BannerProps } from './banner.types';

import './index.css';

export function Banner(bannerProps: BannerProps) {
  const { children } = bannerProps;

  const classes = classNames({
    'ch-banner': true,
  });

  return <div className={classes}>{children}</div>;
}
