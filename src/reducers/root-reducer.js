import { combineReducers } from "redux";
import { globalReducer } from './global-reducer';
import { authReducer } from './auth.reducer';
import { partyReducer } from './party.reducers';
import { userReducer } from './user.reducers';
import { officeReducer } from './office.reducers';
import { candidateReducer } from './candidate.reducers';

const Reducer = combineReducers({
    global: globalReducer,
    auth: authReducer,
    party: partyReducer,
    user: userReducer,
    office: officeReducer,
    candidate: candidateReducer
});

export default Reducer;
