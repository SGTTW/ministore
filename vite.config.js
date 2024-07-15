


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import https from 'https';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://api.timbu.cloud",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        configure: (proxy, _options) => {
          proxy.on("proxyReq", (proxyReq, req, _res) => {
            Object.keys(req.headers).forEach(function (key) {
              proxyReq.setHeader(key, req.headers[key]);
            });
          });
        },
        secure: false,   
        agent: new https.Agent({ rejectUnauthorized: false })   
      },
    },
  },
});