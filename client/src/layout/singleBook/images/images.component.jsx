import React from 'react';

import { Col } from 'react-bootstrap';

import ImagesSubmit from './images-submit.component';
import ImagesDelete from './images-delete.component';

const ImagesComponent = () => {
	return (
		<Col className="d-flex m-4 justify-content-around">
			<ImagesSubmit />
			<ImagesDelete />
		</Col>
	);
};

export default ImagesComponent;
