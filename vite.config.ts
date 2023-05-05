import { defineConfig } from "vite"
import * as path from "path";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "./lib/index.ts"),
      name: "Solid",
      fileName: (format) => `index.${format}.js`,
    }
  }
})
