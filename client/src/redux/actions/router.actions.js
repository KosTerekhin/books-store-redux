import { UI } from './ui.actions';

export const SET_REDIRECT = 'SET_REDIRECT';
export const CLEAR_REDIRECT = 'CLEAR_REDIRECT';

export const redirectSuccess = ({ payload = null, meta } = {}) => ({
	type: `${UI} ${SET_REDIRECT}`,
	payload,
	storeUpdate: meta
});

export const redirectClear = () => ({
	type: `${UI} ${CLEAR_REDIRECT}`
});
