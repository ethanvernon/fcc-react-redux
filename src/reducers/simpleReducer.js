import { ADD } from '../action-creators/simpleAction';

export const messageReducer = (state = [], action) => {
 switch (action.type) {
   case ADD:
     return [
       ...state,
       action.message
     ];
   default:
     return state;
 }
};