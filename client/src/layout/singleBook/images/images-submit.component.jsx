import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Form, Button } from 'react-bootstrap';

import { selectSinglebookData } from '../../../redux/selectors/singlebook.selector';
import { putSinglebookImages } from '../../../redux/actions/singlebook.actions';

const ImagesSubmit = ({ putSinglebookImages, data }) => {
	const fileInput = React.createRef();
	return (
		<Form
			onSubmit={(e) => {
				e.preventDefault();
				putSinglebookImages({ id: data._id, form: [ ...fileInput.current.files ] });
			}}
		>
			<Form.Group>
				<Form.File type="file" multiple label="Upload images" ref={fileInput} className="mt-5" />
				<Button type="submit" variant="info" className="mt-4">
					SUBMIT CHANGES
				</Button>
			</Form.Group>
		</Form>
	);
};

const mapToProps = createStructuredSelector({
	data: selectSinglebookData
});

const dispatchToProps = (dispatch) => ({
	putSinglebookImages: ({ id, form }) => dispatch(putSinglebookImages({ id, form }))
});

export default connect(mapToProps, dispatchToProps)(ImagesSubmit);
