import {
	dataNormalized,
	BOOKS_SCHEMA,
	BOOKS_NEW_SCHEMA,
	SINGLE_BOOK_SCHEMA,
	SINGLE_BOOK_IMAGES_SCHEMA
} from '../../actions/normalize.actions';

import {
	applyBooksSchema,
	applyNewBookSchema,
	applySinglebookSchema,
	applySinglebookImagesSchema
} from '../../utility/normalize-schema.utility';

export const normilizeMiddleware = ({ dispatch }) => (next) => (action) => {
	const normalizerFunction = (fnc) => {
		const normalizedData = fnc(action);
		dispatch(dataNormalized(action.meta.feature));
		next({ ...action, payload: normalizedData, meta: null });
	};

	if (action.type.includes('UPDATE_STORE') && action.meta && action.meta.normalizedId) {
		switch (action.meta.normalizedId) {
			//----BOOKS----
			case BOOKS_SCHEMA:
				normalizerFunction(applyBooksSchema);
				break;
			case BOOKS_NEW_SCHEMA:
				normalizerFunction(applyNewBookSchema);
				break;
			//----SINGLE_BOOK----
			case SINGLE_BOOK_SCHEMA:
				normalizerFunction(applySinglebookSchema);
				break;
			case SINGLE_BOOK_IMAGES_SCHEMA:
				normalizerFunction(applySinglebookImagesSchema);
				break;

			default:
				next(action);
		}
	} else {
		next(action);
	}
};
