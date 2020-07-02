import { useEffect } from 'react';
import { useLocalStorageState } from './useLocalStorageState';

const ITEMS_PER_PAGE = {
	value: 3
};

export const usePagination = ({ history, items, pageNumber = 1 }) => {
	const [ state, setState ] = useLocalStorageState({
		key: 'itemsPerPage',
		defaultValue: ITEMS_PER_PAGE.value,
		items,
		pageNumber
	});
	const { itemsPerPage, paginatedList } = state;

	useEffect(
		() => {
			if (pageNumber <= 0 || pageNumber > Math.ceil(items.length / itemsPerPage)) {
				history.push(`/page-1`);
			}
			setState({
				...state,
				paginatedList: items.slice(itemsPerPage * (pageNumber - 1), itemsPerPage * pageNumber)
			});
		},
		// eslint-disable-next-line
		[ itemsPerPage, pageNumber ]
	);

	const handleNextClick = () => {
		if (+pageNumber * +itemsPerPage >= items.length) {
			return;
		}
		history.push(`/page-${+pageNumber + 1}`);
	};

	const handlePreviousClick = () => {
		if (+itemsPerPage * (+pageNumber - 1) <= 0) {
			return;
		}
		history.push(`/page-${+pageNumber - 1}`);
	};

	const handleChange = (value) => {
		// history.push(`/page-1`);
		setState({
			...state,
			itemsPerPage: value
		});
	};

	return {
		paginatedList,
		itemsPerPage,
		handleNextClick,
		handlePreviousClick,
		handleChange
	};
};
