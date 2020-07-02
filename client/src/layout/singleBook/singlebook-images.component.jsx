import React from 'react';
import { Container, Image, Button, Row } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const SinglebookImages = ({ data, imagesURL, history }) => {
	return (
		<Container className="d-flex flex-column">
			<Button
				className="mt-4"
				onClick={() => {
					history.push(`/book/images/${data._id}`);
				}}
			>
				ADD / DELETE IMAGES
			</Button>
			<Row className="d-flex ">
				{data.images.map((image) => (
					<Image
						style={{ maxWidth: '100%' }}
						className="mt-4"
						key={imagesURL[image].id}
						src={imagesURL[image].url}
						alt="/"
					/>
				))}
			</Row>
		</Container>
	);
};

export default withRouter(SinglebookImages);
