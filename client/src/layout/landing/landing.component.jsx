import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';
import { Container, Row, Col } from 'react-bootstrap';

import { selectFirstNotification } from '../../redux/selectors/notifications.selector';
import { selectStatus } from '../../redux/selectors/ui.selector';
import { selectBookList, selectBookImages } from '../../redux/selectors/books.selector';

import withPagination from '../../hoc/pangination/withPagination';
import LandingItem from './landing-item.component';

const LandingComponent = ({ data, images, paginatedList: renderList = Object.keys(data) }) => (
	<Container className="my-3 px-2">
		<Col md={12}>
			<Row className="d-flex justify-content-around">
				{renderList.map((book) => <LandingItem key={data[book]._id} book={data[book]} imagesURL={images} />)}
			</Row>
		</Col>
	</Container>
);

const mapToProps = createStructuredSelector({
	notification: selectFirstNotification,
	status: selectStatus,
	data: selectBookList,
	images: selectBookImages
});

export default compose(connect(mapToProps), withRouter, withPagination)(LandingComponent);
