import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { withRouter } from 'react-router';

const LandingItem = ({ history, book: { title, _id, images }, imagesURL }) => (
	<div>
		<Card style={{ minWidth: '29%' }} className="mb-4">
			<Card.Img
				variant="top"
				src={imagesURL[images[0]].url}
				style={{
					objectFit: 'contain',
					objectPosition: '50% 0%',
					height: '200px',
					maxWidth: '250px'
				}}
			/>
			<Card.Body className="d-flex flex-column justify-content-end">
				<Card.Title style={{ textAlign: 'center' }}>{title}</Card.Title>
				<Button variant="primary" onClick={() => history.push(`book/${_id}`)}>
					View more
				</Button>
			</Card.Body>
		</Card>
	</div>
);

export default withRouter(LandingItem);
