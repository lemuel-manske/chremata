import { type LayoutPadding, type LayoutGap } from './grid-layout.types';

export const PADDING_MAP: Record<NonNullable<LayoutPadding>, string> = {
  none: 'var(--grid-layout-padding-none)',
  small: 'var(--grid-layout-padding-small)',
};

export const GAP_MAP: Record<NonNullable<LayoutGap>, string> = {
  none: 'var(--grid-layout-gap-none)',
  panel: 'var(--grid-layout-gap-panel)',
};
