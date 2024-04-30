import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import {rspack} from '@rspack/core';
import {ModuleFederationConfig} from "./module-federation.config";

// Host config
export default defineConfig({
  plugins: [pluginReact()],
  source: {
    preEntry: false,
  },
  performance: {
    chunkSplit: {
      override: {
        chunks: 'async',
        minSize: 30000,
      },
    },
  },
  tools:{
    rspack:{
      output:{
        publicPath:'auto'
      },
      plugins:[new rspack.container.ModuleFederationPlugin(ModuleFederationConfig)]
    }
  }
});
