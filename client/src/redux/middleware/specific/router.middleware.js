import { redirectClear, redirectSuccess } from '../../actions/router.actions';

export const routerMiddleware = () => (next) => (action) => {
	if (action.type.includes('UPDATE_STORE') && action.meta && action.meta.route) {
		next(
			redirectSuccess({
				payload: action.meta.route,
				meta: action.meta.storeUpdate
			})
		);

		// update store only if needed
		action.meta.storeUpdate && next({ ...action, meta: null });

		setTimeout(() => {
			next(redirectClear());
		}, 0);
	} else {
		next(action);
	}
};
