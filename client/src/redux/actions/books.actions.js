import { CLIENT, BASE_URL } from './global-variables';
export const BOOKS_URL = `${BASE_URL}/books`;

export const BOOKS = '[books]';
export const BOOKS_NEW = '[books]:new';

export const BOOKS_FETCH = `${BOOKS} FETCH`;
export const BOOKS_NEW_POST = '[books]:new POST';

export const BOOKS_UPDATE_STORE = `${BOOKS} UPDATE_STORE`;
export const BOOKS_NEW_UPDATE_STORE = `${BOOKS_NEW} UPDATE_STORE`;

export const BOOKS_SET_ERROR = `${BOOKS} SET_ERROR`;

export const fetchBooks = () => ({
	type: `${CLIENT} ${BOOKS_FETCH}`
});

export const updateBooksData = ({ payload, normalizedId, feature }) => ({
	type: BOOKS_UPDATE_STORE,
	payload,
	meta: {
		normalizedId,
		feature
	}
});

// -----------NEW BOOK--------------
export const postNewBook = (form) => ({
	type: `${CLIENT} ${BOOKS_NEW_POST}`,
	payload: form
});

export const newBookUpdateStore = ({ payload, normalizedId, feature }) => ({
	type: BOOKS_NEW_UPDATE_STORE,
	payload,
	meta: {
		normalizedId,
		feature
	}
});

export const setBooksError = ({ error }) => ({
	type: BOOKS_SET_ERROR,
	payload: error
});
