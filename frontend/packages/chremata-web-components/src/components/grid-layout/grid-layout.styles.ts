import { type LayoutPadding, type LayoutGap } from './grid-layout.types';

export const PADDING_MAP: Record<NonNullable<LayoutPadding>, string> = {
  none: '0px',
  small: '8px',
};

export const GAP_MAP: Record<NonNullable<LayoutGap>, string> = {
  none: '0px',
  panel: '16px',
};
