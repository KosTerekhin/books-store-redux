export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = `API_SUCCESS`;
export const API_ERROR = `API_ERROR`;

export const apiRequest = ({ body, url, method, feature, contentType = 'application/json' }) => ({
	type: `${feature} ${API_REQUEST}`,
	body,
	meta: {
		url,
		method,
		feature,
		contentType
	}
});

export const apiSuccess = ({ data, feature, status }) => ({
	type: `${feature} ${API_SUCCESS}`,
	payload: data,
	meta: status
});

export const apiError = ({ error, feature, status }) => ({
	type: `${feature} ${API_ERROR}`,
	payload: error,
	meta: status
});
