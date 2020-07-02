import { CLIENT, BASE_URL } from './global-variables';
export const SINGLE_BOOK_URL = `${BASE_URL}/singlebook`;
export const SINGLE_BOOK_IMAGES_URL = `${BASE_URL}/bookimages`;

export const SINGLE_BOOK = '[single_book]';
export const SINGLE_BOOK_TEXT = `${SINGLE_BOOK}:text`;
export const SINGLE_BOOK_IMAGES = `${SINGLE_BOOK}:images`;

export const SINGLE_BOOK_FETCH = `${SINGLE_BOOK} FETCH`;
export const SINGLE_BOOK_TEXT_PUT = `${SINGLE_BOOK_TEXT} PUT`;
export const SINGLE_BOOK_IMAGES_PUT = `${SINGLE_BOOK_IMAGES} PUT`;
export const SINGLE_BOOK_IMAGES_DELETE = `${SINGLE_BOOK_IMAGES} DELETE`;

export const SINGLE_BOOK_UPDATE_STORE = `${SINGLE_BOOK} UPDATE_STORE`;
export const SINGLE_BOOK_TEXT_UPDATE_STORE = `${SINGLE_BOOK_TEXT} UPDATE_STORE`;
export const SINGLE_BOOK_IMAGES_UPDATE_STORE = `${SINGLE_BOOK_IMAGES} UPDATE_STORE`;

export const SINGLE_BOOK_SET_ERROR = `${SINGLE_BOOK} SET_ERROR`;

export const fetchSinglebook = (id) => ({
	type: `${CLIENT} ${SINGLE_BOOK} FETCH`,
	payload: id
});

export const singlebookUpdateStore = ({ payload, normalizedId, feature }) => ({
	type: SINGLE_BOOK_UPDATE_STORE,
	payload,
	meta: {
		normalizedId,
		feature
	}
});

// ------TEXT------------
export const singlebookTextPut = (id) => ({
	type: `${CLIENT} ${SINGLE_BOOK_TEXT} PUT`,
	payload: id
});

export const singlebookTextUpdateStore = ({ payload, route = null, storeUpdate = true } = {}) => {
	return {
		type: SINGLE_BOOK_TEXT_UPDATE_STORE,
		payload,
		meta: {
			route,
			storeUpdate
		}
	};
};
// ------UPLOAD IMAGES------------
export const putSinglebookImages = ({ id, form }) => ({
	type: `${CLIENT} ${SINGLE_BOOK_IMAGES} PUT`,
	payload: { id, form }
});

// ------DELETE IMAGES------------
export const deleteSinglebookImages = ({ id, imagesToDelete }) => ({
	type: `${CLIENT} ${SINGLE_BOOK_IMAGES} DELETE`,
	payload: { id, imagesToDelete }
});

// ------UPDATE IMAGES STORE------------
export const singlebookImagesUpdateStore = ({ payload, feature, normalizedId } = {}) => {
	return {
		type: SINGLE_BOOK_IMAGES_UPDATE_STORE,
		payload,
		meta: {
			normalizedId,
			feature
		}
	};
};

export const setSinglebookError = ({ payload = 'response error' } = {}) => ({
	type: SINGLE_BOOK_SET_ERROR,
	payload
});
