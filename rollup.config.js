import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/index.js",
  output: {
    file: "dist/cm.min.js",
    name: "G2",
    format: "umd",
  },
  plugins: [resolve(), terser()],
};
