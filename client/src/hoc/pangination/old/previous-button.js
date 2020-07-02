import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { PaginationContext } from './pagination.context';

const PreviousButton = () => {
	const { handlePreviousClick } = useContext(PaginationContext);

	return (
		<Button variant="secondary" onClick={handlePreviousClick}>
			previous
		</Button>
	);
};

export default PreviousButton;
