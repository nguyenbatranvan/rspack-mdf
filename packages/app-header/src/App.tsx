import './App.css';
import {useBearStore} from "./state/useCount";

interface A {
    name: string;
}

const a: A = {
    name: '2o9'
}
const App = () => {
    const {bears, removeAllBears} = useBearStore()
    return (
        <div className="content">
            <h1 onClick={removeAllBears}>This is header app {bears} </h1>
            {/*<button onClick={increasePopulation}>Change bears</button>*/}
        </div>
    );
};

export default App;
