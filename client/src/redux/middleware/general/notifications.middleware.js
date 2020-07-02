import { clearNotification, UPDATE_NOTIFICATION } from '../../actions/notifications.actions';
import { UI_UPDATE_LOADING } from '../../actions/ui.actions';

export const notificationsMiddleware = ({ dispatch, getState }) => (next) => (action) => {
	// if any notification on start of loading -> clear all
	if (action.type.includes(`${UI_UPDATE_LOADING}`)) {
		if (getState().notifications.length) {
			getState().notifications.forEach((notif) => {
				notif.setTimeoutId && clearTimeout(notif.setTimeoutId);
			});

			next(clearNotification());
		}
	}

	var myTimer;
	if (action.type.includes(`${UPDATE_NOTIFICATION}`)) {
		myTimer = setTimeout(() => {
			dispatch(clearNotification(action.meta.feature));
		}, action.meta.timer);
		next({ ...action, meta: { ...action.meta, setTimeoutId: myTimer } });
	} else {
		next(action);
	}
};
