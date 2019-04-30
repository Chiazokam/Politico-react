import { combineReducers } from "redux";
import exampleReducer from "./example-reducer";

const Reducer = combineReducers({
    example : exampleReducer,
});

export default Reducer;
