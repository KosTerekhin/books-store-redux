import { useState, useEffect } from 'react';

export const useLocalStorageState = ({ key, defaultValue, items, pageNumber }) => {
	const [ state, setState ] = useState(() => {
		let itemsPerPage;

		try {
			itemsPerPage = JSON.parse(window.localStorage.getItem(key) || defaultValue);
		} catch (error) {
			itemsPerPage = defaultValue;
		}

		let paginatedList = items.slice(itemsPerPage * (pageNumber - 1), itemsPerPage * pageNumber);

		return { itemsPerPage, paginatedList };
	});

	useEffect(
		() => {
			window.localStorage.setItem(key, state.itemsPerPage);
		},
		// eslint-disable-next-line
		[ state ]
	);
	return [ state, setState ];
};
