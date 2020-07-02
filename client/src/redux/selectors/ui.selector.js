import { createSelector } from 'reselect';

export const selectUi = (state) => state.ui;

export const selectLoading = createSelector([ selectUi ], (ui) => ui.loading);
export const selectStatus = createSelector([ selectUi ], (ui) => ui.status);
export const selectRoute = createSelector([ selectUi ], (ui) => (ui.route ? ui.route : null));
export const selectReload = createSelector([ selectUi ], (ui) => ui.reload);
