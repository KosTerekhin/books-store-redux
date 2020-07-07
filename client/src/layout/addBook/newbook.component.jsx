import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Form, Button, Alert, Container } from 'react-bootstrap';
import { postNewBook } from '../../redux/actions/books.actions';

import { validateReduxFrom } from './validate-reduxform';

const FORM_INPUTS = [ 'title', 'subtitle', 'isbn13', 'price', 'images' ];

let NewBookComponent = ({ postNewBook }) => {
	const fileInput = React.createRef();
	return (
		<Container>
			<Form
				className="ml-5"
				onSubmit={(e) => {
					e.preventDefault();
					postNewBook([ ...fileInput.current.files ]);
				}}
			>
				{FORM_INPUTS.map((data, i) => {
					if (data === 'images') {
						return (
							<Form.Group key={data + i} className="mt-3">
								<Form.File type="file" label="Upload images" ref={fileInput} className="mt-3" />
							</Form.Group>
						);
					}

					return (
						<Form.Group key={data + i} className="mt-3">
							<Form.Label>{data}</Form.Label>
							<Field name={data} component={renderInput} type="text" />
						</Form.Group>
					);
				})}
				<Button type="submit">Submit Form</Button>
			</Form>
		</Container>
	);
};

const renderInput = ({ input, meta }) => (
	<div className="d-flex">
		<input {...input} style={{ width: '40%' }} />
		{meta.error &&
		meta.touched && (
			<Alert variant="danger" style={{ maxWidth: '15%' }}>
				{meta.error}
			</Alert>
		)}
	</div>
);

// const mapToProps = createStructuredSelector({});

const dispatchProps = (dispatch) => ({
	postNewBook: (form) => dispatch(postNewBook(form))
});

export default compose(
	connect(null, dispatchProps),
	reduxForm({
		form: 'newBook',
		validateReduxFrom
	})
)(NewBookComponent);
