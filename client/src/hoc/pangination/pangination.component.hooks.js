import React from 'react';
import { Container, Button, Col, Row, Form } from 'react-bootstrap';
import { usePagination } from './usePagination.local';

const withPagination = (WrappedComponent) => (props) => {
	const { history, data, match: { params: { pageNumber } } } = props;
	const { paginatedList, itemsPerPage, handleNextClick, handlePreviousClick, handleChange } = usePagination({
		history: history,
		items: Object.keys(data),
		pageNumber: pageNumber
	});

	return (
		<Container>
			<Form.Group>
				<Form.Label>Books per page</Form.Label>
				<Form.Control
					as="select"
					value={itemsPerPage}
					onChange={(e) => handleChange(e.target.value)}
					style={{ maxWidth: '10%' }}
				>
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
				</Form.Control>
			</Form.Group>
			<WrappedComponent {...props} paginatedList={paginatedList} />
			<Row>
				<Col className="d-flex justify-content-center">
					<Button variant="secondary" className="mr-2" onClick={handlePreviousClick}>
						previous
					</Button>
					<Button variant="primary" className="ml-2" onClick={handleNextClick}>
						next
					</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default withPagination;
