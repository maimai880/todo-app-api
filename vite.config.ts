import vavite from "vavite";
import {defineConfig} from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: './app.ts',
      name: "todo-app-api"
    }
  },
  plugins: [
    vavite({
      serverEntry: "./app.ts",
      reloadOn: "static-deps-change",
      serveClientAssetsInDev: true,
    }),
  ],
});
