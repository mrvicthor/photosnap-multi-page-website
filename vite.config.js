import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  rollupOptions: {
    // https://rollupjs.org/configuration-options/
  },
  plugins: [react()],
});
