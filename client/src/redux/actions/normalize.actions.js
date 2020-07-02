export const DATA_NORMAZILED = 'DATA_NORMAZILED';
export const NORMALIZE_ALL = 'NORMALIZE_ALL';
export const NORMALIZE_SINGLE = 'NORMALIZE_SINGLE';
export const SINGLE_BOOK_SCHEMA = 'SINGLE_BOOK_SCHEMA';
export const SINGLE_BOOK_IMAGES_SCHEMA = 'SINGLE_BOOK_IMAGES_SCHEMA';
export const BOOKS_SCHEMA = 'BOOK_SCHEMA';

export const dataNormalized = (feature) => ({
	type: `${feature} DATA_NORMAZILED`
});
