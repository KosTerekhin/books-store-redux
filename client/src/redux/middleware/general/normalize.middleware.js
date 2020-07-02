import {
	dataNormalized,
	BOOKS_SCHEMA,
	SINGLE_BOOK_SCHEMA,
	SINGLE_BOOK_IMAGES_SCHEMA
} from '../../actions/normalize.actions';
import {
	applySinglebookSchema,
	applyBooksSchema,
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
			case BOOKS_SCHEMA:
				normalizerFunction(applyBooksSchema);
				break;
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
