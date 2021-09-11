import { createStore } from "redux";
import counterReducer from "../reducers/counterReducer";

export const myStore = () => {
    const store = createStore(counterReducer);
    return store;
};
