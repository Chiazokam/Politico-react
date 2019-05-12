import { combineReducers } from "redux";
import globalReducer from './global-reducer';
import authReducer from './auth.reducer';
import partyReducer from './party.reducers';

const Reducer = combineReducers({
    global: globalReducer,
    auth: authReducer,
    party: partyReducer
});

export default Reducer;
