import { API_REQUEST, apiError, apiSuccess } from '../../actions/api.actions';
import axios from 'axios';

export const apiMiddleware = ({ dispatch }) => (next) => (action) => {
	next(action);
	let status;

	if (action.type.includes(API_REQUEST)) {
		const { body: data, meta: { url, method, feature, contentType } } = action;
		axios({
			method,
			url,
			data,
			headers: { 'Content-Type': contentType }
		})
			.then(({ data }) => {
				dispatch(apiSuccess({ data, feature, status }));
			})
			.catch((error) => {
				dispatch(apiError({ error, feature, status }));
			});
	}
};
