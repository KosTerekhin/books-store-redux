import React from 'react';
import { Col, Button, Card } from 'react-bootstrap';
import { withRouter } from 'react-router';

const LandingItem = ({ history, book: { title, _id, images }, imagesURL }) => (
	<Col md={5} className="mb-4">
		<Card className="h-100">
			<Card.Img variant="top" src={imagesURL[images[0]].url} />
			<Card.Body className="d-flex flex-column justify-content-end">
				<Card.Title className="mx-4" style={{ textAlign: 'center' }}>
					{title}
				</Card.Title>
				<Button variant="primary" onClick={() => history.push(`book/${_id}`)}>
					View more
				</Button>
			</Card.Body>
		</Card>
	</Col>
);

export default withRouter(LandingItem);
