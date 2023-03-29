/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import unfonts from "unplugin-fonts/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    unfonts({
      custom: {
        display: "swap",
        families: {
          "SkyFall Done": {
            src: "./assets/fonts/SkyFall-Done.ttf",
          },
        },
      },
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
  },
});
