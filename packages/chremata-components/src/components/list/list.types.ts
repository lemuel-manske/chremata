import {
  type EnumOrStringLiteralTypes,
  type EnumOrStringLiteralTypesInclude,
  Orientation,
  Size,
} from '@chremata/utils';

import { type ListItemProps } from './list-item/list-item.types';

export type ListOrientation = EnumOrStringLiteralTypes<Orientation>;

export type ListGap = EnumOrStringLiteralTypesInclude<Size, 'xsmall' | 'small'>;

type ListAttributes = {
  /**
   * The list items to be displayed within the list.
   */
  children:
    | React.ReactElement<ListItemProps>
    | React.ReactElement<ListItemProps>[];

  /**
   * Defines the gap between list items. Default is 'small'.
   */
  gap?: ListGap;

  /**
   * Provides the ID of an element that labels the list.
   */
  labelledBy?: string;

  /**
   * Defines the orientation of the list. Default is 'horizontal'.
   */
  orientation?: ListOrientation;
};

export type ListProps = ListAttributes;

export type DefaultListProps = Required<
  Pick<ListAttributes, 'orientation' | 'gap'>
>;
