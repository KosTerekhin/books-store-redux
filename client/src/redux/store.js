import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './root.reducer';

import { booksMiddleware } from './middleware/specific/books.middleware';
import { singlebookMiddleware } from './middleware/specific/singlebook.middleware';

import { apiMiddleware } from './middleware/general/api.middleware';
import { normilizeMiddleware } from './middleware/general/normalize.middleware';
import { notificationsMiddleware } from './middleware/general/notifications.middleware';
import { routerMiddleware } from './middleware/specific/router.middleware';

const specificMiddleware = [ booksMiddleware, singlebookMiddleware ];
const generalMiddleware = [ apiMiddleware, normilizeMiddleware, routerMiddleware, notificationsMiddleware ];

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(...specificMiddleware, ...generalMiddleware))
);

export default store;
