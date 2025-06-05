import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: [
      "e-commerce-app-frontend-ct0q.onrender.com"
    ]
  }
});