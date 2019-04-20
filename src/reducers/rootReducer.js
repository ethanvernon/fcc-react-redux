import { combineReducers } from 'redux';
import { messageReducer } from './messageReducer';

/**
 * Usually when exporting combineReducers your give a key for each reducer,
 * followed by the reducer associated with it.
 */
export default combineReducers({
	messages: messageReducer
});
