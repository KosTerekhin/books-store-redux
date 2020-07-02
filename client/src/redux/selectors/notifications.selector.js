import { createSelector } from 'reselect';

export const selectNotifications = (state) => state.notifications;

export const selectFirstNotification = createSelector(
	[ selectNotifications ],
	(state) => (state[0] ? state[0].message : null)
);
