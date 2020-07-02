import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { Form, Button, Alert } from 'react-bootstrap';

import { selectSinglebookData } from '../../../redux/selectors/singlebook.selector';
import { singlebookTextPut } from '../../../redux/actions/singlebook.actions';
import { validate } from '../validate';

let EditComponent = ({ book, history, singlebookTextPut, handleSubmit }) => {
	!book && history.push('/');
	return book ? (
		<Form className="ml-5" onSubmit={handleSubmit(() => singlebookTextPut(book._id))}>
			{Object.keys(book).map((data, i) => {
				if (data !== 'images' && data !== '__v' && data !== '_id') {
					return (
						<Form.Group key={data + i} className="mt-3">
							<Form.Label>{data}</Form.Label>
							<Field name={data} component={renderInput} type="text" />
							<br />
						</Form.Group>
					);
				}
				return null;
			})}
			<Button type="submit">Submit Form</Button>
		</Form>
	) : (
		<div />
	);
};

const renderInput = ({ input, meta }) => (
	<div className="d-flex">
		<input {...input} style={{ width: '80%' }} />
		{meta.error &&
		meta.touched && (
			<Alert variant="danger" style={{ maxWidth: '15%' }}>
				{meta.error}
			</Alert>
		)}
	</div>
);

// EditComponent = reduxForm({
// 	form: 'editDetails',
// 	enableReinitialize: true,
// 	validate
// })(EditComponent);

const stateToProps = createStructuredSelector({
	book: selectSinglebookData,
	initialValues: selectSinglebookData
});

const mapToProps = (dispatch) => ({
	singlebookTextPut: (id) => dispatch(singlebookTextPut(id))
});

export default compose(
	connect(stateToProps, mapToProps),
	reduxForm({
		form: 'editDetails',
		enableReinitialize: true,
		validate
	}),
	withRouter
)(EditComponent);
