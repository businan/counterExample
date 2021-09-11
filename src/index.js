import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";


import {myStore} from "./redux/store/store";

const store = myStore();

/* import counterReducer from "./redux/reducers/counterReducer";
import { createStore } from "redux";
const store = createStore(counterReducer); */


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root"),
);
