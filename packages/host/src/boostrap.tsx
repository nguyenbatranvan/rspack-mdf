import React, {lazy} from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import {ErrorBoundary} from "react-error-boundary";
import {FederationRuntimePlugin, init} from "@module-federation/runtime";

const App = lazy(() => import("./App"))
const runtimePlugin: () => FederationRuntimePlugin =
    function () {
        return {
            name: 'my-runtime-plugin',
            beforeInit(args) {
                console.log('beforeInit: ', args);
                return args;
            },
            beforeRequest(args) {
                console.log('beforeRequest: ', args);
                return args;
            },
            afterResolve(args) {
                console.log('afterResolve', args);

                return args;
            },
            onLoad(args) {
                console.log('onLoad: ', args);
                return args;
            },
            async loadShare(args) {
                console.log('loadShare:', args);
            },
            async beforeLoadShare(args) {
                console.log('beforeloadShare:', args);
                return args;
            },
        };
    };
init({
    name: 'host',
    remotes: [{
        entryGlobalName: 'remote',
        name: 'remote',
        type: 'global',
        alias: 'remote',
        entry: 'http://localhost:3000/remoteEntry.js'
    }, {
        entryGlobalName: 'header',
        name: 'header',
        type: 'global',
        alias: 'header',
        entry: 'http://localhost:4200/remoteEntry.js'
    }],
    shared: {
        react: {
            version: '18.2.0',
            scope: 'default',
            lib: () => React,
            shareConfig: {
                singleton: true,
                requiredVersion: '^18.2.0'
            }
        },
        'react-dom': {
            version: '18.2.0',
            scope: 'default',
            lib: () => ReactDOM,
            shareConfig: {
                singleton: true,
                requiredVersion: '^18.2.0',
            },
        }

    },
    // plugins:[runtimePlugin()]
})

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <React.StrictMode>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="currentColor"
                  d="M16 11.5a2.5 2.5 0 0 1 5 0a2.5 2.5 0 0 1-5 0M13 3v17h11V3zm9 13c-1.1 0-2 .9-2 2h-3a2 2 0 0 0-2-2V7c1.11 0 2-.89 2-2h3a2 2 0 0 0 2 2zM7 6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0-2C4.79 4 3 5.79 3 8s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 10c-3.87 0-7 1.79-7 4v2h11v-2H2c0-.58 1.75-2 5-2c1.83 0 3.17.45 4 .95v-2.23C9.87 14.27 8.5 14 7 14"></path>
        </svg>
        <ErrorBoundary fallbackRender={() => <h1 style={{
            color: 'red'
        }}>Not red</h1>}>
            <App/>
        </ErrorBoundary>
    </React.StrictMode>,
);

