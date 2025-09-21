import '@chremata/themes';
import '@chremata/fonts';
import '@chremata/icons';

import type { Preview } from '@storybook/react';

import { ThemeProvider } from '../src/components/theme/theme-provider';

import './index.css';

type RootProps = {
  children: React.ReactNode;
};

const Root = ({ children }: RootProps) => {
  return (
    <ThemeProvider>
      <main className="preview">{children}</main>
    </ThemeProvider>
  );
};

const preview: Preview = {
  decorators: [Story => <Root>{Story()}</Root>],
};

export default preview;
