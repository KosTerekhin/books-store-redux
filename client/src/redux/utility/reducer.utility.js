import { SINGLE_BOOK_TEXT_TOUPDATE } from '../actions/global-variables';

export const updateTextUtility = ({ oldData, newData }) => {
	const keysToRemain = [ '_id', 'images' ];

	var res = SINGLE_BOOK_TEXT_TOUPDATE.reduce((result, key) => {
		result[key] = newData[key];

		return result;
	}, {});

	keysToRemain.forEach((key) => (res[key] = oldData[key]));

	return res;
};
