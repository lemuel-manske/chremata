import { type Meta, type StoryObj } from '@storybook/react';

import { Navbar } from './navbar';

type NavbarFixtureProps = {
  title: string;
};

function NavbarFixture(props: NavbarFixtureProps) {
  const { title } = props;

  return (
    <Navbar>
      <Navbar.Header title={title} />

      <Navbar.Body>
        <Navbar.Item label="Home" />
      </Navbar.Body>

      <Navbar.Footer>
        <Navbar.Item label="Settings" />
      </Navbar.Footer>
    </Navbar>
  );
}

export default {
  id: 'Navbar',
  title: 'Navbar',

  component: Navbar,

  argTypes: {
    title: {
      control: 'text',
    },
  },

  args: {
    title: 'App name',
  },
} satisfies Meta<typeof NavbarFixture>;

export const Default: StoryObj<NavbarFixtureProps> = {
  render: (args: NavbarFixtureProps) => <NavbarFixture {...args} />,
};
