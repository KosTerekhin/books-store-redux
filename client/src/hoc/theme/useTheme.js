import { useLocalStorageTheme } from './useLocalStorageTheme';

export const useTheme = () => {
	const [ state, setState ] = useLocalStorageTheme({
		key: 'custom-theme',
		defaultValue: true
	});

	const handleClick = () => {
		setState(!state);
	};

	return { state, handleClick };
};
