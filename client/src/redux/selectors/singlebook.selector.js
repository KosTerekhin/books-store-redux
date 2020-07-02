const { createSelector } = require('reselect');

export const selectSinglebookState = (state) => state.singlebook;

export const selectSinglebookData = createSelector([ selectSinglebookState ], (book) => (book ? book.data : null));

export const selectSinglebookImages = createSelector([ selectSinglebookState ], (book) => (book ? book.images : null));
