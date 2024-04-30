import {ModuleFederationPluginOptions} from "@rspack/core/dist/container/ModuleFederationPlugin";
// @ts-ignore
import data from "./package.json"

const {dependencies} = data;
export const ModuleFederationConfig: ModuleFederationPluginOptions = {
    name: 'host',
    remotes: {
        "header": "header@http://localhost:4200/remoteEntry.js",
        "remote":"remote@http://localhost:3000/remoteEntry.js"
    },
    shared: {
        ...dependencies,
        react: {
            singleton: true,
            import: 'react',
            shareKey: 'react',
            shareScope: 'default',
            version: dependencies['react'],
            requiredVersion:dependencies['react']
        },
        'react-dom': {
            singleton: true,
            version: dependencies['react-dom'],
        },
    }

}
