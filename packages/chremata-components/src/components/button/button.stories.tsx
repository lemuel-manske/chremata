import { type Meta, type StoryObj } from '@storybook/react';

import { fn } from '@storybook/test';

import { Fit, LayoutJustify, Size } from '@chremata/utils';

import { type IconSolidNames } from '../icon/icon.types';

import { DEFAULT_BUTTON_PROPS } from './use-button';
import { ButtonVariantEnum, type ButtonProps } from './button.types';
import { Button } from './button';

type ButtonFixtureProps = ButtonProps & {
  label: string;
  icon: IconSolidNames;
  iconPosition?: 'left' | 'right';
};

function ButtonFixture(props: ButtonFixtureProps) {
  const { label, icon, iconPosition } = props;

  const iconOnLeft = iconPosition === 'left';
  const iconOnRight = iconPosition === 'right';

  if (iconOnLeft) {
    return (
      <Button {...props}>
        <Button.Icon name={icon} />
        <Button.Label>{label}</Button.Label>
      </Button>
    );
  }

  if (iconOnRight) {
    return (
      <Button {...props}>
        <Button.Label>{label}</Button.Label>
        <Button.Icon name={icon} />
      </Button>
    );
  }

  return (
    <Button {...props}>
      <Button.Label>{label}</Button.Label>
    </Button>
  );
}

export default {
  id: 'Button',
  title: 'Button',

  component: ButtonFixture,

  argTypes: {
    label: {
      control: 'text',
    },
    fit: {
      control: 'select',
      options: [Fit.FILL_AVAILABLE, Fit.FIT_CONTENT],
    },
    size: {
      control: 'select',
      options: [Size.SMALL, Size.MEDIUM, Size.LARGE],
    },
    disabled: {
      control: 'boolean',
    },
    onClick: {
      action: 'clicked',
    },
    variant: {
      control: 'select',
      options: [
        ButtonVariantEnum.PRIMARY,
        ButtonVariantEnum.SECONDARY,
        ButtonVariantEnum.SILENT_EMPHASIS,
      ],
    },
    justify: {
      control: 'select',
      options: [LayoutJustify.CENTER, LayoutJustify.SPACE_BETWEEN],
    },
    icon: {
      control: 'select',
    },
    iconPosition: {
      control: 'radio',
      options: ['left', 'right'],
    },
  },

  args: {
    ...DEFAULT_BUTTON_PROPS,

    onClick: fn(),

    label: 'Click me',
    icon: 'CoinIconSvg',
    iconPosition: 'left',
  },
} satisfies Meta<typeof ButtonFixture>;

export const Default: StoryObj<typeof ButtonFixture> = {
  render: (args: ButtonFixtureProps) => <ButtonFixture {...args} />,
};
