import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // lets the app fetch "/api/comics" with no CORS setup on the server
      "/api": "http://localhost:5000",
    },
  },
});