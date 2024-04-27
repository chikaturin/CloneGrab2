import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({

      name: "microFE1",
      filename:"remoteEntry.js",
      remotes: {},
      exposes: {
        "./Header":"./src/Header",
        "./Footer":"./src/Footer",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})
