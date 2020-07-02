import {
	SINGLE_BOOK_UPDATE_STORE,
	SINGLE_BOOK_SET_ERROR,
	SINGLE_BOOK_TEXT_UPDATE_STORE,
	SINGLE_BOOK_IMAGES_UPDATE_STORE
} from '../actions/singlebook.actions';
import { updateTextUtility } from '../utility/reducer.utility';

const INITIAL_STATE = {};

const singlebookReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SINGLE_BOOK_UPDATE_STORE:
			return {
				...state,
				...action.payload
			};
		case SINGLE_BOOK_SET_ERROR:
			return {
				...state,
				error: action.payload
			};

		case SINGLE_BOOK_TEXT_UPDATE_STORE:
			return {
				...state,
				data: updateTextUtility({
					oldData: state.data,
					newData: action.payload
				})
			};

		case SINGLE_BOOK_IMAGES_UPDATE_STORE:
			return {
				...state,
				images: action.payload.images,
				data: {
					...state.data,
					images: action.payload.dataImages
				}
			};

		default:
			return state;
	}
};

export default singlebookReducer;
