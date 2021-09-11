import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { decrease, increase, reset } from "./redux/actions/counterActions";

function App() {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <div className="App">
            <h1 id="cw">Clarusway</h1>
            <h2 id="counter">Counter</h2>
            <div className="main-counter">
                <h1
                    className="counter-number"
                    style={{
                        color:
                            counter > 0
                                ? "green"
                                : counter === 0
                                ? "grey"
                                : "red",
                    }}
                >
                    {counter}
                </h1>
                <button
                    className="decrease"
                    onClick={() => dispatch(decrease())}
                >
                    -
                </button>
                <button className="reset" onClick={() => dispatch(reset())}>
                    0
                </button>
                <button
                    className="increase"
                    onClick={() => dispatch(increase())}
                >
                    +
                </button>
            </div>
        </div>
    );
}

export default App;
