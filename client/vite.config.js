import { defineConfig } from 'vite'
//per tailwindcss.com/docs/installation/using-vite
import tailwindcss from '@tailwindcss/vite'

import react from '@vitejs/plugin-react'

// https://vite.dev/config/ per doc on line 2, add tailwindcss as a plugin
export default defineConfig({
  plugins: [
    react(), tailwindcss(),
  ],
  server: {
    port: 5173
  }

})
