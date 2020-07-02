import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchBooks } from '../../redux/actions/books.actions';

import LandingComponent from './landing.component.jsx';

const LandingContainer = ({ fetchBooks, ...otherProps }) => {
	useEffect(
		() => {
			fetchBooks();
		},
		// eslint-disable-next-line
		[ fetchBooks ]
	);
	return <LandingComponent {...otherProps} />;
};

const dispatchProps = (dispatch) => ({
	fetchBooks: () => dispatch(fetchBooks())
});

export default connect(null, dispatchProps)(LandingContainer);
