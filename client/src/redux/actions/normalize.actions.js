import { SINGLE_BOOK, SINGLE_BOOK_IMAGES } from './singlebook.actions';
import { BOOKS, BOOKS_NEW } from './books.actions';

export const DATA_NORMAZILED = 'DATA_NORMALIZED';
export const NORMALIZE_ALL = 'NORMALIZE_ALL';
export const NORMALIZE_SINGLE = 'NORMALIZE_SINGLE';
export const BOOKS_SCHEMA = `${BOOKS}_SCHEMA`;
export const BOOKS_NEW_SCHEMA = `${BOOKS_NEW}_SCHEMA`;
export const SINGLE_BOOK_SCHEMA = `${SINGLE_BOOK}_SCHEMA`;
export const SINGLE_BOOK_IMAGES_SCHEMA = `${SINGLE_BOOK_IMAGES}_SCHEMA`;

export const dataNormalized = (feature) => ({
	type: `${feature} DATA_NORMAZILED`
});
