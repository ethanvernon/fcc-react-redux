import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { messageReducer } from './reducers/rootReducer';
import rootReducer from './reducers/rootReducer'

//gives error undefined Redux...
//const store = Redux.createStore(messageReducer);

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
