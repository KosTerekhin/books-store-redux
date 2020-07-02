import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { PaginationContext } from './pagination.context';

const Select = () => {
	const { handleChange } = useContext(PaginationContext);

	return (
		<Form.Group controlId="exampleForm.ControlSelect1">
			<Form.Label>Example select</Form.Label>
			<Form.Control as="select" value="2" name="itemsPerPage" onChange={(e) => handleChange(e.target.value)}>
				<option>1</option>
				<option>2</option>
				<option>3</option>
				<option>4</option>
				<option>5</option>
			</Form.Control>
		</Form.Group>
	);
};

export default Select;
