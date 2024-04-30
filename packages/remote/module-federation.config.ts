import {ModuleFederationPluginOptions} from "@rspack/core/dist/container/ModuleFederationPlugin";
// @ts-ignore
import data from "./package.json"

const {dependencies} = data;
console.log('de', dependencies)
export const moduleFederationConfig: ModuleFederationPluginOptions = {
    name: 'remote',
    exposes: {
        './Button': './src/components/Button'
    },
    filename: 'remoteEntry.js',
    shared: {
        ...dependencies,
        react: {
            import: 'react',
            shareKey: 'react',
            shareScope: 'default',
            singleton: true,
            version: dependencies['react'],
            requiredVersion:dependencies['react'],
        },
        'react-dom': {
            singleton: true,
            version: dependencies['react-dom'],
        },
    }
}
