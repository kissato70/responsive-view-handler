import cleaner from "rollup-plugin-cleaner";
import copy from 'rollup-plugin-copy'
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import node_resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import replace from "@rollup/plugin-replace";
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';

export default {
  input: "src/index.ts",
  output: [
    {
      file: "build/index.js",
      format: "es",
      sourcemap: true,
    },
  ],
  plugins: [
    cleaner({
      targets: ["./build/"]
    }),
    peerDepsExternal(),
    node_resolve(),
    copy({
      targets: [
      {
        src: 'public/index.html',
        dest: 'build'
      },
      {
        src: 'public/favicon.ico',
        dest: 'build'
      }
      ]
    }),
    typescript({
      tsconfig: "tsconfig.dev.json"
    }),
    livereload({
      watch: 'src',
      verbose: true,
      delay: 1000
    }),
    serve({
      port: 7709,
      contentBase: 'build'
    })
  ],
};
