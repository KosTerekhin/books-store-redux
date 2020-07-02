import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Form, Button } from 'react-bootstrap';

import { deleteSinglebookImages } from '../../../redux/actions/singlebook.actions';
import { selectSinglebookData, selectSinglebookImages } from '../../../redux/selectors/singlebook.selector';

import useImageSelect from '../../../hooks/imageSelect/useImageSelect';
import { SelectedImage } from './image-delete.styles';

const ImagesDelete = ({ deleteSinglebookImages, data, images }) => {
	const { handleSelectImage, imagesToDelete, disabled } = useImageSelect();
	return (
		<Form
			className="mr-4 mt-5"
			onSubmit={(e) => {
				e.preventDefault();
				deleteSinglebookImages({ id: data._id, imagesToDelete });
			}}
		>
			<Form.Group className="d-flex flex-column align-items-center">
				<div className="d-flex justify-content-center align-middle flex-wrap">
					{data.images.map((image) => (
						<SelectedImage
							key={images[image].id}
							src={images[image].url}
							customStyle={imagesToDelete.includes(images[image].id)}
							alt="/"
							onClick={() => handleSelectImage(images[image].id)}
						/>
					))}
				</div>
				<Button type="submit" variant="warning" style={{ maxWidth: '50%' }} disabled={disabled}>
					DELETE SELECTED
				</Button>
			</Form.Group>
		</Form>
	);
};

const mapToProps = createStructuredSelector({
	images: selectSinglebookImages,
	data: selectSinglebookData
});

const dispatchToProps = (dispatch) => ({
	deleteSinglebookImages: ({ id, imagesToDelete }) => dispatch(deleteSinglebookImages({ id, imagesToDelete }))
});

export default connect(mapToProps, dispatchToProps)(ImagesDelete);
