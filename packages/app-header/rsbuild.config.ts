import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import {moduleFederationConfig} from "./module-federation.config";
import {rspack} from "@rspack/core";

export default defineConfig({
  server:{
    port:4200
  },
  source: {
    preEntry: false,
  },
  dev: {
    startUrl: false
  },
  performance: {
    chunkSplit: {
      override: {
        chunks: 'async',
        minSize: 30000,
      },
    },
  },
  plugins: [pluginReact()],
  tools: {
    rspack: {
      output: {
        publicPath: 'auto'
      },
      plugins: [new rspack.container.ModuleFederationPlugin(moduleFederationConfig)]
    }
  }
});
