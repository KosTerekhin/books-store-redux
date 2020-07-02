import { UI_UPDATE_LOADING, UI_CLEAR_LOADING, UI } from '../actions/ui.actions';
import { SET_REDIRECT, CLEAR_REDIRECT } from '../actions/router.actions';

const INITIAL_STATE = {
	loading: false,
	status: null,
	route: null,
	reload: true
};

const uiReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UI_UPDATE_LOADING:
			return {
				...state,
				loading: true,
				status: null
			};

		case UI_CLEAR_LOADING:
			return {
				...state,
				loading: false
			};

		case `${UI} ${SET_REDIRECT}`:
			return {
				...state,
				route: action.payload,
				reload: !action.storeUpdate
			};

		case `${UI} ${CLEAR_REDIRECT}`:
			return {
				...state,
				route: null,
				reload: true
			};

		default:
			return state;
	}
};

export default uiReducer;
