import React from 'react';
import { Col, Image, Button, Row } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const SinglebookImages = ({ data, imagesURL, history }) => {
	return (
		<Col md={9} className="d-flex flex-column">
			<Button
				className="mt-4 align-self-end"
				style={{ maxWidth: '200px' }}
				onClick={() => {
					history.push(`/book/images/${data._id}`);
				}}
			>
				ADD / DELETE IMAGES
			</Button>
			<Row className="d-flex flex-wrap justify-content-around">
				{data.images.map((image) => (
					<Image
						className="mt-4"
						style={{ maxWidth: '500px' }}
						key={imagesURL[image].id}
						src={imagesURL[image].url}
						alt="/"
					/>
				))}
			</Row>
		</Col>
	);
};

export default withRouter(SinglebookImages);
