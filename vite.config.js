import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build:{
        rollupOptions:{
            Input:{
                main: resolve(__dirname, "index.htm"),
                news: resolve(__dirname, "news.html"),
            },
        },
    },
});