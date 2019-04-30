import {createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from "redux-thunk";
import rootReducer from "../reducers/root-reducer";

const configureStore = preloadedState => {
  const middlewares = applyMiddleware(thunk);
  const storeEnhancers = [middlewares];
  const composedEnhancer = composeWithDevTools(...storeEnhancers);
  const store = createStore(
      rootReducer,
      preloadedState,
      composedEnhancer
  );
  return store;
}

export default configureStore;
