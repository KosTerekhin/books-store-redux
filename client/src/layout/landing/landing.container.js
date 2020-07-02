import { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchBooks } from '../../redux/actions/books.actions';

import LandingComponent from './landing.component.jsx';
import { selectLoading } from '../../redux/selectors/ui.selector';
import useSpinner from '../../hooks/spinner/useSpinner';
import { selectBookList } from '../../redux/selectors/books.selector';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

const LandingContainer = ({ fetchBooks, loading }) => {
	useEffect(
		() => {
			fetchBooks();
		},
		// eslint-disable-next-line
		[ fetchBooks ]
	);
	const { component } = useSpinner({
		loading,
		WrappedComponent: LandingComponent
	});

	return component;
};

const mapToProps = createStructuredSelector({
	loading: selectLoading,
	data: selectBookList
});

const dispatchProps = (dispatch) => ({
	fetchBooks: () => dispatch(fetchBooks())
});

export default compose(connect(mapToProps, dispatchProps), withRouter)(LandingContainer);
