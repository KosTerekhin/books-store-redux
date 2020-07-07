import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { Container, Row, Alert } from 'react-bootstrap';

import { selectSinglebookData, selectSinglebookImages } from '../../redux/selectors/singlebook.selector';
import { selectFirstNotification } from '../../redux/selectors/notifications.selector';
import SinglebookImages from './singlebook-images.component';
import SinglebookText from './singlebook-text.component';

const SinglebookComponent = ({ data, images, notification }) => (
	<Container className="d-flex flex-column">
		{/* NOTIFICATIONS */}
		<Row md={1} className="mt-4">
			{notification ? (
				<Alert variant="warning" md={12} className="ml-4">
					{notification}
				</Alert>
			) : null}
		</Row>
		<Row className="d-flex flex-row justify-content-between" md={3}>
			{/* BOOK DATA */}
			<SinglebookText data={data} />
			{/* IMAGES */}
			<SinglebookImages data={data} imagesURL={images} />
		</Row>
	</Container>
);

const stateToProps = createStructuredSelector({
	data: selectSinglebookData,
	images: selectSinglebookImages,
	notification: selectFirstNotification
});

export default compose(connect(stateToProps), withRouter)(SinglebookComponent);
