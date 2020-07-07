export const validateReduxFrom = (values) => {
	const errors = {};
	console.log(values);
	if (!values.title) {
		errors.title = 'Required';
	}
	if (!values.subtitle) {
		errors.subtitle = 'Required';
	} else {
		if (values.subtitle.length <= 2) {
			errors.subtitle = 'Must be at least 3 characters';
		}
	}
	if (!values.isbn13) {
		errors.isbn13 = 'Required';
	}
	if (!values.price) {
		errors.price = 'Required';
	}

	return errors;
};
