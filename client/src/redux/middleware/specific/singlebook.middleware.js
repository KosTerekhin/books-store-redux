import { CLIENT, SINGLE_BOOK_TEXT_TOUPDATE } from '../../actions/global-variables';

import {
	SINGLE_BOOK_FETCH,
	SINGLE_BOOK_URL,
	SINGLE_BOOK_IMAGES_URL,
	SINGLE_BOOK,
	SINGLE_BOOK_TEXT,
	SINGLE_BOOK_IMAGES,
	SINGLE_BOOK_TEXT_PUT,
	SINGLE_BOOK_IMAGES_PUT,
	SINGLE_BOOK_IMAGES_DELETE,
	// SINGLE_BOOK_TEXT_UPDATE_STORE,
	singlebookUpdateStore,
	singlebookTextUpdateStore,
	setSinglebookError,
	singlebookImagesUpdateStore
} from '../../actions/singlebook.actions';

import { SINGLE_BOOK_SCHEMA, SINGLE_BOOK_IMAGES_SCHEMA } from '../../actions/normalize.actions';
import { updateLoading, clearLoading } from '../../actions/ui.actions';
import { apiRequest, API_SUCCESS, API_ERROR } from '../../actions/api.actions';
import { updateNotification } from '../../actions/notifications.actions';

export const singlebookMiddleware = ({ getState }) => (next) => (action) => {
	next(action);
	console.log('middleware');
	switch (action.type) {
		// FETCH ALL DATA
		case `${CLIENT} ${SINGLE_BOOK_FETCH}`:
			next(updateLoading());
			next(
				apiRequest({
					body: null,
					method: 'GET',
					url: `${SINGLE_BOOK_URL}/${action.payload}`,
					feature: SINGLE_BOOK
				})
			);

			break;

		case `${SINGLE_BOOK} ${API_SUCCESS}`:
			next(
				singlebookUpdateStore({
					payload: action.payload,
					normalizedId: SINGLE_BOOK_SCHEMA,
					feature: SINGLE_BOOK
				})
			);
			next(clearLoading({ payload: action.meta }));

			break;

		// ---------SINGLE BOOK TEXT----------------
		case `${CLIENT} ${SINGLE_BOOK_TEXT_PUT}`:
			next(updateLoading());
			let body = {};

			getState().form.editDetails &&
				SINGLE_BOOK_TEXT_TOUPDATE.forEach((item) => (body[item] = getState().form.editDetails.values[item]));
			next(
				apiRequest({
					body: body.hasOwnProperty('_id') ? body : null,
					method: 'PUT',
					url: `${SINGLE_BOOK_URL}/${action.payload}`,
					feature: SINGLE_BOOK_TEXT_PUT
				})
			);
			break;

		case `${SINGLE_BOOK_TEXT_PUT} ${API_SUCCESS}`:
			next(
				singlebookTextUpdateStore({
					payload: action.payload,
					feature: SINGLE_BOOK_TEXT,
					route: `/book/${action.payload._id}`
					// storeUpdate: false
				})
			);
			next(clearLoading({ payload: action.meta }));
			next(updateNotification({ message: 'Book updated!', feature: SINGLE_BOOK, timer: 2000 }));
			break;

		// ------------UPLOAD IMAGES--------------
		case `${CLIENT} ${SINGLE_BOOK_IMAGES_PUT}`:
			next(updateLoading());
			let formData = new FormData();
			action.payload.form.forEach((file) => {
				formData.append('images', file);
			});

			next(
				apiRequest({
					body: formData,
					method: 'PUT',
					url: `${SINGLE_BOOK_IMAGES_URL}/${action.payload.id}`,
					feature: SINGLE_BOOK_IMAGES_PUT,
					contentType: 'multipart/form-data'
				})
			);
			break;

		// ------------DELETE IMAGES--------------
		case `${CLIENT} ${SINGLE_BOOK_IMAGES_DELETE}`:
			next(updateLoading());
			next(
				apiRequest({
					body: action.payload.imagesToDelete,
					method: 'DELETE',
					url: `${SINGLE_BOOK_IMAGES_URL}/${action.payload.id}`,
					feature: SINGLE_BOOK_IMAGES_DELETE
				})
			);
			break;
		// ------UPDATE IMAGES STORE------------
		case `${SINGLE_BOOK_IMAGES_PUT} ${API_SUCCESS}`:
		case `${SINGLE_BOOK_IMAGES_DELETE} ${API_SUCCESS}`:
			next(
				singlebookImagesUpdateStore({
					payload: action.payload,
					feature: SINGLE_BOOK_IMAGES,
					normalizedId: SINGLE_BOOK_IMAGES_SCHEMA
				})
			);
			next(clearLoading({ payload: action.meta }));
			next(updateNotification({ message: 'Images deleted', feature: SINGLE_BOOK, timer: 2000 }));
			break;

		// ------ERROR HANDLING------------
		case `${SINGLE_BOOK} ${API_ERROR}`:
			next(setSinglebookError());
			next(clearLoading({ payload: action.meta }));
			break;
		default:
	}
};
