import '@chremata/themes';
import '@chremata/fonts';
import '@chremata/icons';

import { beforeMount } from '@playwright/experimental-ct-react/hooks';

import { ThemeProvider } from '../src/providers/theme';

beforeMount(async ({ App }) => {
  return (
    <ThemeProvider>
      <main className="preview">
        <App />
      </main>
    </ThemeProvider>
  );
});
