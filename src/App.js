import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { decrease, increase, reset } from "./redux/actions/counterActions";

function App() {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <div className="App">
            <h2>Counter</h2>
            <div>
                <h1>{counter}</h1>
                <button onClick={() => dispatch(decrease())}>-</button>
                <button onClick={() => dispatch(reset())}>0</button>
                <button onClick={() => dispatch(increase())}>+</button>
            </div>
        </div>
    );
}

export default App;
