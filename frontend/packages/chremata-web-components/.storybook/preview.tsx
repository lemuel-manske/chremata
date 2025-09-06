import '@chremata/themes';
import '@chremata/fonts';
import '@chremata/icons';

import type { Preview } from '@storybook/react';

import './index.css';

type RootProps = {
  children: React.ReactNode;
};

const Root = ({ children }: RootProps) => {
  return <main className="preview">{children}</main>;
};

const preview: Preview = {
  decorators: [(Story) => <Root>{Story()}</Root>],
};

export default preview;
