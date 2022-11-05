import { combineReducers } from 'redux';

// action types
import { ActionTypes } from "../actions/_types";

// reducers
import { login } from "./login";
import { signup } from "./signup";

const notification = (state = {
	show: false,
	message: '',
	timeout: 3000,
	color: 'secondary',
	error: null,
}, action) => {
	switch (action.type) {
		case ActionTypes.SHOW_NOTIFICATION:
			return {
				...state,
				show: true,
				...action.payload,
			};
		case ActionTypes.HIDE_NOTIFICATION:
			return {
				...state,
				show: false,
				...action.payload,
			};
		default:
			return state;
	}
};

const appReducer = combineReducers({
	notification,
	login,
	signup,
});

const rootReducer = (state, action) => {
	if(action.type === 'USER_LOGOUT') {
		state = undefined;
	}
	return appReducer(state, action);
}
export default rootReducer;
