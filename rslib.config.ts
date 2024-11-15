import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rslib/core';
import * as rspack from '@rspack/core';

export default defineConfig({
  source: {
    entry: {
      index: ['./src/**'],
    },
  },
  tools: {
    rspack: {
      plugins: [
        new rspack.CopyRspackPlugin({
          patterns: [{ from: 'theme.config.js' }],
        }),
      ]
    }
  },
  lib: [
    {
      bundle: false,
      dts: true,
      format: 'esm',
    },
  ],
  output: {
    target: 'web',
  },
  plugins: [
    pluginReact({
      swcReactOptions: {
        runtime: 'classic',
      },
    }),
  ],
});
