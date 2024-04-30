import {FederationHost, loadRemote} from "@module-federation/runtime";

export function CustomLoadRemote<T>(...args: Parameters<FederationHost['loadRemote']>) {
    return loadRemote(...args) as T
}
