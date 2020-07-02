import { BOOKS_UPDATE_STORE, BOOKS_SET_ERROR } from '../actions/books.actions';

const INITIAL_STATE = {
	entities: null,
	error: null
};

const booksReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case BOOKS_UPDATE_STORE:
			return {
				...state,
				entities: action.payload
			};

		case BOOKS_SET_ERROR:
			return {
				...state,
				entities: action.payload
			};

		default:
			return state;
	}
};

export default booksReducer;
