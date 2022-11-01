import { combineReducers } from 'redux';

// action types
import { ActionTypes } from "../actions/_types";

// reducers

const appReducer = combineReducers({});

const rootReducer = (state, action) => {
	if(action.type === 'USER_LOGOUT') {
		state = undefined;
	}
	return appReducer(state, action);
}
export default rootReducer;
