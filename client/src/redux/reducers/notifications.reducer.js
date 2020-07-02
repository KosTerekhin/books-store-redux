import { UPDATE_NOTIFICATION, CLEAR_NOTIFICATION, NOTIFICATION } from '../actions/notifications.actions';

const INITIAL_STATE = [];

const notificationsReducer = (state = INITIAL_STATE, action) => {
	if (action.type.includes(`${UPDATE_NOTIFICATION}`)) {
		return [
			...state,
			{
				id: action.meta.feature,
				message: action.payload,
				setTimeoutId: action.meta.setTimeoutId
			}
		];
	}

	if (action.type.includes(`${CLEAR_NOTIFICATION}`)) {
		return action.payload !== NOTIFICATION ? state.filter((notif) => notif.id !== action.payload) : [];
	}
	return state;
};

export default notificationsReducer;
