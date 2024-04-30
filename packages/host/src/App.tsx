import './App.css';
import React, {lazy} from "react";
import {ErrorBoundary} from "react-error-boundary";


import {useBearStore} from "header/State"

const Button = lazy(() => import('remote/Button') as Promise<any>);
const Header = lazy(() => import('header/Header') as Promise<any>);

const App = () => {

    const {bears, increasePopulation} = useBearStore();
    return (
        <div className="content">
            <ErrorBoundary fallbackRender={() => <h1 style={{
                color: 'red'
            }}>Not red</h1>}>
                <Button/>
                <Header/>
                <h1 onClick={increasePopulation}>Host {bears}</h1>
                <p>Start building amazing things with Rsbuild.</p>
                <Button/>
            </ErrorBoundary>

        </div>
    );
};

export default App;
