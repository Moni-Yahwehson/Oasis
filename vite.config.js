import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintrc from "./.eslintrc.cjs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslintrc],
});
