import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Uoncss from "unocss/vite";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Uoncss()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
