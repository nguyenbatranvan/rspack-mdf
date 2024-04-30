import {defineConfig} from '@rsbuild/core';
import {pluginReact} from '@rsbuild/plugin-react';
import {rspack} from '@rspack/core';
import {moduleFederationConfig} from "./module-federation.config";

// Remote Config
export default defineConfig({
    server: {
        port: 3000,
    },
    dev: {
        startUrl: false
    },
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
