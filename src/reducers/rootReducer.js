import { combineReducers } from 'redux';
import { messageReducer, titleReducer } from './messageReducer';

/**
 * Usually when exporting combineReducers you give a key for each reducer,
 * followed by the reducer associated with it.
 */
export const rootReducer = combineReducers({
	messages: messageReducer,
	title: titleReducer
});
