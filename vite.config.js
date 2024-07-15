import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // This line has been corrected

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://api.timbu.cloud",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
        configure: (proxy, _options) => {
          proxy.on("proxyReq", (proxyReq, req, _res) => {
            Object.keys(req.headers).forEach(function (key) {
              proxyReq.setHeader(key, req.headers[key]);
            });
          });
        },
      },
    },
  },
});
