export const NOTIFICATION = `[notification]`;
export const UPDATE_NOTIFICATION = `UPDATE_NOTIFICATION`;
export const CLEAR_NOTIFICATION = `CLEAR_NOTIFICATION`;

export const updateNotification = ({ message = 'updated', feature, timer = 1000 } = {}) => {
	return {
		type: `${feature} ${UPDATE_NOTIFICATION}`,
		payload: message,
		meta: {
			feature,
			timer
		}
	};
};

export const clearNotification = (feature = NOTIFICATION) => ({
	type: `${feature} ${CLEAR_NOTIFICATION}`,
	payload: feature
});
