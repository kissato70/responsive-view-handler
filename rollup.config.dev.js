import cleaner from "rollup-plugin-cleaner";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import node_resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import livereload from "rollup-plugin-livereload";
import { babel } from '@rollup/plugin-babel';

export default {
  input: "src/responsive.ts",
  output: [
    {
      file: "build/responsive.js",
      format: "umd",
      sourcemap: true,
      name: "responsive"
    },
  ],
  plugins: [
    cleaner({
      targets: ["./build/"]
    }),
    peerDepsExternal({
            includeDependencies: true
        }),
    node_resolve(),
    
    typescript({
      tsconfig: "tsconfig.json"
    }),
    babel({ babelHelpers: 'bundled' }),
    
    livereload({
      watch: 'src',
      verbose: true,
      delay: 1500
    })
  ],
};
