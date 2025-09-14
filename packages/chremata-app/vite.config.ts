import path from 'path'

import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react-swc'

const reactPath = path.resolve(__dirname, '../../node_modules/react')
const reactDomPath = path.resolve(__dirname, '../../node_modules/react-dom')

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      react: reactPath,
      'react-dom': reactDomPath,
    },
  },
})
