import { type Meta, type StoryObj } from '@storybook/react';

import { Label } from '../label/label';

import { List } from './list';
import { type ListProps } from './list.types';

import { DEFAULT_LIST_PROPS } from './use-list';
import { Orientation, Size } from '@chremata/utils';
import React from 'react';

type ListFixtureProps = Omit<ListProps, 'children'> & {
  items: string[];
};

function ListFixture(props: ListFixtureProps) {
  const { items, orientation, ...rest } = props;

  const listItems = items.map((item, index) => (
    <List.Item
      key={index}
      label={item}>
      <Label>{item}</Label>
    </List.Item>
  ));

  const labelId = 'list-label';

  function ListContainer(props: React.PropsWithChildren) {
    const { children } = props;

    const styles: React.CSSProperties = { display: 'flex', gap: '2rem' };

    if (orientation === 'horizontal') {
      styles.flexDirection = 'row';
    }

    if (orientation === 'vertical') {
      styles.flexDirection = 'column';
    }

    return <div style={styles}>{children}</div>;
  }

  return (
    <ListContainer>
      <Label
        id={labelId}
        variant="emphasis"
        size="large">
        List
      </Label>

      <List
        labelledBy={labelId}
        orientation={orientation}
        {...rest}>
        {listItems}
      </List>
    </ListContainer>
  );
}

export default {
  id: 'List',
  title: 'List',

  component: List,

  argTypes: {
    gap: {
      control: 'select',
      options: [Size.XSMALL, Size.SMALL],
    },
    orientation: {
      control: 'select',
      options: [Orientation.VERTICAL, Orientation.HORIZONTAL],
    },
  },

  args: {
    ...DEFAULT_LIST_PROPS,

    items: ['Item 1', 'Item 2', 'Item 3'],
  },
} satisfies Meta<typeof ListFixture>;

export const Default: StoryObj<typeof ListFixture> = {
  render: (props: ListFixtureProps) => <ListFixture {...props} />,
};
