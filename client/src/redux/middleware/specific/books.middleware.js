import { CLIENT } from '../../actions/global-variables';
import {
	updateBooksData,
	newBookUpdateStore,
	setBooksError,
	BOOKS_URL,
	BOOKS_FETCH,
	BOOKS,
	BOOKS_NEW,
	BOOKS_NEW_POST
} from '../../actions/books.actions';
import { apiRequest, API_SUCCESS, API_ERROR } from '../../actions/api.actions';
import { updateLoading, clearLoading } from '../../actions/ui.actions';
import { updateNotification } from '../../actions/notifications.actions';
import { BOOKS_SCHEMA, BOOKS_NEW_SCHEMA } from '../../actions/normalize.actions';

export const booksMiddleware = ({ getState }) => (next) => (action) => {
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

		// -----------NEW BOOK--------------
		case `${CLIENT} ${BOOKS_NEW_POST}`:
			next(updateLoading());

			const form = new FormData();
			action.payload.forEach((file) => {
				console.log(file);
				form.append('images', file);
			});
			Object.keys(getState().form.newBook.values).forEach((key) => {
				console.log(key);
				form.append(`${key}`, getState().form.newBook.values[key]);
			});

			next(
				apiRequest({
					body: form,
					url: BOOKS_URL,
					method: 'POST',
					feature: BOOKS_NEW_POST,
					contentType: 'multipart/form-data'
				})
			);
			break;

		case `${BOOKS_NEW_POST} ${API_SUCCESS}`:
			next(
				newBookUpdateStore({
					payload: action.payload,
					normalizedId: BOOKS_NEW_SCHEMA,
					feature: BOOKS_NEW
				})
			);
			next(clearLoading({ payload: action.meta }));
			next(updateNotification({ message: 'book added', feature: BOOKS_NEW, timer: 2000 }));
			break;
		// -----------API ERROR--------------
		case `${BOOKS} ${API_ERROR}`:
			next(setBooksError({ error: action.payload }));
			next(clearLoading({ payload: action.meta }));
			break;
		default:
	}
};
