import { classNames, styleMap } from '@chremata/utils';

import { type BannerProps } from './banner.types';
import tokens from './banner.tokens';

import './index.css';

export function Banner(bannerProps: BannerProps) {
  const { children } = bannerProps;

  const classes = classNames({
    'ch-banner': true,
  });

  const styles = styleMap({
    '--banner-background-color': tokens.background.color,
  });

  return <div className={classes} style={styles}>{children}</div>;
}
