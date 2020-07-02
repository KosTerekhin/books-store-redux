import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import booksReducer from './reducers/books.reducer';
import notificationsReducer from './reducers/notifications.reducer';
import uiReducer from './reducers/ui.reducer';
import singlebookReducer from './reducers/singlebook.reducer';

export default combineReducers({
	books: booksReducer,
	notifications: notificationsReducer,
	ui: uiReducer,
	singlebook: singlebookReducer,
	form: formReducer
});
