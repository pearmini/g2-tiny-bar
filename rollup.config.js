import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/index.js",
  output: {
    file: "dist/g2-tiny-bar.min.js",
    name: "G2",
    format: "umd",
  },
  plugins: [resolve(), commonjs(), terser()],
};
