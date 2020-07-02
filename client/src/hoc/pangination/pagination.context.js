import React, { createContext, useState, useEffect } from 'react';

const PaginationContext = createContext();

const ITEMS_PER_PAGE = { value: 3 };

const PanginationWrap = ({ children, history, bookList, match: { params: { pageNumber } } }) => {
	let itemsPerPage = ITEMS_PER_PAGE.value;
	const bookKeys = Object.keys(bookList);
	const [ listToDisplay, setListToDisplay ] = useState(itemsPerPage * (pageNumber - 1), itemsPerPage * pageNumber);

	useEffect(
		() => {
			setListToDisplay(bookKeys.slice(itemsPerPage * (pageNumber - 1), itemsPerPage * pageNumber));
		},
		[ itemsPerPage ]
	);

	const handleNextClick = () => {
		const startIndex = itemsPerPage * pageNumber;
		const lastIndex = itemsPerPage * pageNumber + itemsPerPage;
		setListToDisplay(bookKeys.slice(startIndex, lastIndex));
		history.push(`/page-${+pageNumber + 1}`);
	};

	const handlePreviousClick = () => {
		const startIndex = itemsPerPage * (pageNumber - 2);
		const lastIndex = itemsPerPage * (pageNumber - 1);
		setListToDisplay(bookKeys.slice(startIndex, lastIndex));
		history.push(`/page-${+pageNumber - 1}`);
	};

	const handleChange = (value) => {
		itemsPerPage = +value;
		console.log(itemsPerPage, 'inside function');
	};

	console.log(itemsPerPage, 'outside');

	return (
		<PaginationContext.Provider
			value={{
				listToDisplay,
				handleNextClick,
				handlePreviousClick,
				handleChange
			}}
		>
			{children}
		</PaginationContext.Provider>
	);
};

export { PaginationContext };
export default PanginationWrap;
