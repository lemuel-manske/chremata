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
  children:
    | React.ReactElement<ListItemProps>
    | React.ReactElement<ListItemProps>[];

  gap?: ListGap;

  labelledBy?: string;

  orientation?: ListOrientation;
};

export type ListProps = ListAttributes;

export type DefaultListProps = Required<
  Pick<ListAttributes, 'orientation' | 'gap'>
>;
