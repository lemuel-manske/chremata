import type { Preview } from '@storybook/react-vite';

import '@chremata-preset/themes';
import '@chremata-preset/fonts';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
