import { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';

import { selectLoading } from '../../../redux/selectors/ui.selector';
import { fetchSinglebook } from '../../../redux/actions/singlebook.actions';
import { selectSinglebookData } from '../../../redux/selectors/singlebook.selector';

import ImagesComponent from './images.component';
import useSpinner from '../../../hooks/spinner/useSpinner';

const ImagesContainer = ({ loading, data, history, fetchSinglebook }) => {
	useEffect(
		() => {
			!data && fetchSinglebook(history.location.pathname.replace(/.*[a-z]\//, ''));
		},
		// eslint-disable-next-line
		[ data ]
	);

	const { component } = useSpinner({ loading, WrappedComponent: ImagesComponent });
	return component;
};

const mapToProps = createStructuredSelector({
	loading: selectLoading,
	data: selectSinglebookData
});

const dispatchProps = (dispatch) => ({
	fetchSinglebook: (id) => dispatch(fetchSinglebook(id))
});

export default compose(connect(mapToProps, dispatchProps), withRouter)(ImagesContainer);
