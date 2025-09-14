import '@chremata/themes';
import '@chremata/fonts';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Layout } from './components/layout/layout.js';

import './index.css';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <StrictMode>
    <Layout />
  </StrictMode>
);
