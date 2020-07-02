const { useState, useEffect } = require('react');

export const useLocalStorageTheme = ({ key, defaultValue }) => {
	const [ state, setState ] = useState(() => {
		let value;
		try {
			value = JSON.parse(window.localStorage.getItem(key) || defaultValue);
		} catch (error) {
			value = defaultValue;
		}

		return value;
	});

	useEffect(
		() => {
			window.localStorage.setItem(key, state);
		},
		// eslint-disable-next-line
		[ state ]
	);

	return [ state, setState ];
};
