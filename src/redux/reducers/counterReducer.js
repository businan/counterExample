
import {
    INCREASE_COUNTER,
    DECREASE_COUNTER,
    RESET_COUNTER,
} from "../types/types";

// import { counterState } from "../initialStates/initialState";
const counterState = {
    counter: 0,
};


const counterReducer = (state = counterState, action) => {
    switch (action.type) {
        case INCREASE_COUNTER:
            return { ...state, counter: state.counter + 1 }
        case DECREASE_COUNTER:
            return { ...state, counter: state.counter - 1 }
        case RESET_COUNTER:
            return { ...state, counter: 0 }       
        default:
            return state;
    }
};

export default counterReducer;
