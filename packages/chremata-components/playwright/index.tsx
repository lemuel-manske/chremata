import '@chremata/themes/styles';

import '@chremata/fonts';
import '@chremata/icons';

import { beforeMount } from '@playwright/experimental-ct-react/hooks';
import { ThemeProvider } from '@chremata/themes/provider';

beforeMount(async ({ App }) => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
});
