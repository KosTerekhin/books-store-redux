import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Container, Row } from 'react-bootstrap';

import { selectFirstNotification } from '../../redux/selectors/notifications.selector';
import { selectStatus } from '../../redux/selectors/ui.selector';
import { selectBookList, selectBookImages } from '../../redux/selectors/books.selector';

import withPagination from '../../hoc/pangination/pangination.component.hooks';
import LandingItem from './landing-item.component';
import { withRouter } from 'react-router';

const LandingComponent = ({ data, images, paginatedList: renderList = Object.keys(data) }) => (
	<Container className="mt-5">
		<Row className="d-flex justify-content-around">
			{renderList.map((book) => <LandingItem key={data[book]._id} book={data[book]} imagesURL={images} />)}
		</Row>
	</Container>
);

const mapToProps = createStructuredSelector({
	notification: selectFirstNotification,
	status: selectStatus,
	data: selectBookList,
	images: selectBookImages
});

export default compose(connect(mapToProps), withRouter, withPagination)(LandingComponent);
