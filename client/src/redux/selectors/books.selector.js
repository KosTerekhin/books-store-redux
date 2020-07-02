import { createSelector } from 'reselect';

export const selectBooksReducer = (state) => state.books;

export const selectBookList = createSelector(
	[ selectBooksReducer ],
	(books) => (books.entities ? books.entities.bookList : null)
);

export const selectBookImages = createSelector(
	[ selectBooksReducer ],
	(books) => (books.entities ? books.entities.images : null)
);
