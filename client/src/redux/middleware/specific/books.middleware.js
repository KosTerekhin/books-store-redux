import { CLIENT } from '../../actions/global-variables';
import { updateBooksData, setBooksError, BOOKS_URL, BOOKS_FETCH, BOOKS } from '../../actions/books.actions';
import { apiRequest, API_SUCCESS, API_ERROR } from '../../actions/api.actions';
import { updateLoading, clearLoading } from '../../actions/ui.actions';
import { BOOKS_SCHEMA } from '../../actions/normalize.actions';

export const booksMiddleware = () => (next) => (action) => {
	next(action);
	switch (action.type) {
		case `${CLIENT} ${BOOKS_FETCH}`:
			next(updateLoading());
			next(apiRequest({ body: null, url: BOOKS_URL, method: 'GET', feature: BOOKS }));
			break;
		case `${BOOKS} ${API_SUCCESS}`:
			next(
				updateBooksData({
					payload: action.payload,
					normalizedId: BOOKS_SCHEMA,
					feature: BOOKS
				})
			);
			next(clearLoading({ payload: action.meta }));
			break;

		case `${BOOKS} ${API_ERROR}`:
			next(setBooksError({ error: action.payload }));
			next(clearLoading({ payload: action.meta }));
			break;
		default:
	}
};
