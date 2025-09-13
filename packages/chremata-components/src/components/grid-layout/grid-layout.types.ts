import * as React from 'react';

import {
  type EnumOrStringLiteralTypes,
  type EnumOrStringLiteralTypesInclude,
  Padding,
  Spacing,
} from '@chremata/utils';

export enum LayoutGapEnum {
  NONE = 'none',
  PANEL = 'panel',
}

export type LayoutGap = EnumOrStringLiteralTypes<LayoutGapEnum>;
export type LayoutPadding = EnumOrStringLiteralTypes<Padding>;

export type AreaPadding = EnumOrStringLiteralTypesInclude<
  Spacing,
  'none' | 'small'
>;

export type GridAreaProps = {
  /**
   * The name of the area, needs to match the area name defined in the grid template areas.
   */
  areaName: string;

  /**
   * Defines the padding of the area. Default is `small`.
   */
  padding?: AreaPadding;

  /**
   * The children that will be shown inside the component.
   */
  children?: React.ReactElement<GridLayoutProps> | React.ReactElement[];
};

export type GridLayoutProps = {
  /**
   * An array of children, needs to be of the GridLayout or GridLayoutArea component.
   */
  children?:
    | React.ReactElement<GridAreaProps>
    | React.ReactElement<GridAreaProps>[];

  /**
   * Defines the gap between the grid columns. Default is `panel`.
   */
  columnGap?: LayoutGap;

  /**
   * Defines the gap between the grid rows. Default is `panel`.
   */
  rowGap?: LayoutGap;

  /**
   * Defines the padding of the grid container. Default is `small`.
   */
  padding?: LayoutPadding;

  /**
   * Defines the grid template areas.
   */
  areas: string | string[][];

  /**
   * Defines the grid template columns.
   */
  columns?: string | string[];

  /**
   * Defines the grid template rows.
   */
  rows?: string | string[];
};

export type DefaultGridLayoutProps = Required<
  Pick<GridLayoutProps, 'columnGap' | 'rowGap' | 'padding'>
>;

export type DefaultGridAreaProps = Required<Pick<GridAreaProps, 'padding'>>;
