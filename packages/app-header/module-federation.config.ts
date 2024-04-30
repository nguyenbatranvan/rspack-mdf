import {ModuleFederationPluginOptions} from "@rspack/core/dist/container/ModuleFederationPlugin";
// @ts-ignore
import {dependencies} from './package.json';
import React from "react";

export const moduleFederationConfig: ModuleFederationPluginOptions = {
    name: 'header',
    exposes: {
        './Header': './src/App',
        './State': './src/state',
    },
    filename: 'remoteEntry.js',
    shared: {
        ...dependencies,
        zustand: {
            singleton: true,
            version: dependencies['zustand'],
            shareConfig: {
                singleton: true,
                requiredVersion: dependencies['zustand']
            },
        },
        react: {
            singleton: true,
            scope: 'default',
            version: dependencies['react'],
            lib: () => React,
            shareConfig: {
                singleton: true,
                requiredVersion: dependencies['react']
            },
        },
        'react-dom': {
            scope: 'default',
            version: dependencies['react-dom'],
            shareConfig: {
                singleton: true,
                requiredVersion: dependencies['react-dom']
            },
        },
    }
}
