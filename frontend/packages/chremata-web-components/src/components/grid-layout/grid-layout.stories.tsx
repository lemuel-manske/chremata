import type { Meta, StoryObj } from '@storybook/react';

import { Label } from '../label/label';

import {
  LayoutGapEnum,
  LayoutPaddingEnum,
  type GridLayoutProps,
} from './grid-layout.types';
import { GridLayout } from './grid-layout';
import { Card } from '../card/card';

const innerTemplateArea: GridLayoutProps = {
  columnGap: 'panel',
  rowGap: 'panel',

  areas: [
    ['left', 'right'],
    ['left', 'right'],
  ],

  columns: ['auto', 'auto'],
  rows: 'auto',
};

export default {
  id: 'GridLayout',
  title: 'GridLayout',

  component: GridLayout,

  args: {
    columnGap: 'panel',
    rowGap: 'panel',
    padding: 'small',
    areas: '"sidebar header header" "sidebar main main" "sidebar main main"',
    columns: ['200px', '1fr', '1fr'],
    rows: ['64px', '1fr', '64px'],
  },

  argTypes: {
    columnGap: {
      control: 'select',
      options: [LayoutGapEnum.NONE, LayoutGapEnum.PANEL],
    },
    rowGap: {
      control: 'select',
      options: [LayoutGapEnum.NONE, LayoutGapEnum.PANEL],
    },
    padding: {
      control: 'select',
      options: [LayoutPaddingEnum.NONE, LayoutPaddingEnum.SMALL],
    },
    areas: {
      control: 'text',
    },
    columns: {
      control: 'text',
    },
    rows: {
      control: 'text',
    },
  },
} satisfies Meta<typeof GridLayout>;

export const Default: StoryObj<typeof GridLayout> = {
  render: function Default(props: GridLayoutProps) {
    return (
      <GridLayout {...props}>
        <GridLayout.Area
          areaName="header"
          padding="small">
          <Label>Header</Label>
        </GridLayout.Area>

        <GridLayout.Area
          areaName="sidebar"
          padding="small">
          <Label>Sidebar</Label>
        </GridLayout.Area>

        <GridLayout.Area areaName="main">
          <GridLayout {...innerTemplateArea}>
            <GridLayout.Area
              areaName="left"
              padding="small">
              <Card title="Left">
                <Card.Header />
                <Card.Body>
                  <Label>Left</Label>
                </Card.Body>
              </Card>
            </GridLayout.Area>

            <GridLayout.Area
              areaName="right"
              padding="small">
              <Card title="Right">
                <Card.Header />
                <Card.Body>
                  <Label>Right</Label>
                </Card.Body>
              </Card>
            </GridLayout.Area>
          </GridLayout>
        </GridLayout.Area>
      </GridLayout>
    );
  },
};
