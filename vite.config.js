import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost",      // Apache/XAMPP
        changeOrigin: true,
        secure: false,
        // Sửa md_data_base thành đúng tên thư mục trong htdocs của anh
        rewrite: (path) => path.replace(/^\/api/, "/md_data_base/api"),
      },
    },
  },
});
