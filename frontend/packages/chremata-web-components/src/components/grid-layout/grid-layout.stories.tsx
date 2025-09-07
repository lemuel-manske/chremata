import type { Meta, StoryObj } from '@storybook/react';

import { Label } from '../label/label';

import {
  LayoutGapEnum,
  LayoutPaddingEnum,
  type GridLayoutProps,
} from './grid-layout.types';
import { GridLayout } from './grid-layout';

const innerTemplateArea: GridLayoutProps = {
  columnGap: 'panel',
  rowGap: 'panel',

  areas: [
    ['left', 'highCenter', 'right'],
    ['left', 'lowCenter', 'right'],
  ],

  columns: ['auto', 'auto', 'auto'],
  rows: 'auto 50px',
};

export default {
  id: 'GridLayout',
  title: 'GridLayout',

  component: GridLayout,

  args: {
    columnGap: 'panel',
    rowGap: 'panel',
    padding: 'small',
    areas: '"header header header" "sidebar main main" "footer footer footer"',
    columns: '200px auto 100px',
    rows: '100px auto auto',
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
} as Meta<typeof GridLayout>;

export const Default: StoryObj<typeof GridLayout> = {
  render: function Default(props: GridLayoutProps) {
    return (
      <GridLayout {...props}>
        <GridLayout.Area
          areaName="header"
          padding="small">
          <Label>Fixed Height Header with static background</Label>
        </GridLayout.Area>

        <GridLayout.Area
          areaName="sidebar"
          padding="small">
          <Label>Fixed Width Sidebar</Label>
        </GridLayout.Area>

        <GridLayout.Area areaName="main">
          <GridLayout {...innerTemplateArea}>
            <GridLayout.Area
              areaName="left"
              padding="small">
              <Label>Left with Secondary background</Label>
            </GridLayout.Area>

            <GridLayout.Area
              areaName="highCenter"
              padding="small">
              <Label>Center</Label>
            </GridLayout.Area>

            <GridLayout.Area
              areaName="lowCenter"
              padding="small">
              <Label>Fixed Lower Center</Label>
            </GridLayout.Area>

            <GridLayout.Area
              areaName="right"
              padding="small">
              <Label>Right</Label>
            </GridLayout.Area>
          </GridLayout>
        </GridLayout.Area>

        <GridLayout.Area
          areaName="footer"
          padding="small">
          <Label>Footer</Label>
        </GridLayout.Area>
      </GridLayout>
    );
  },
};
