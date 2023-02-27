import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import generouted from "@generouted/react-router";
import Inspect from "vite-plugin-inspect";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      exclude: "./src/routes.gen.tsx",
    }),
    generouted(),
    Inspect(),
  ],
  resolve: { alias: { "@": "/src" } },
});
