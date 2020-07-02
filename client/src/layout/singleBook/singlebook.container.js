import { useEffect } from 'react';
import SinglebookComponent from './singlebook.component';
import { connect } from 'react-redux';
import { fetchSinglebook } from '../../redux/actions/singlebook.actions';

import { createStructuredSelector } from 'reselect';
import { selectLoading, selectReload } from '../../redux/selectors/ui.selector';
import useSpinner from '../../hooks/spinner/useSpinner';
import { selectSinglebookData } from '../../redux/selectors/singlebook.selector';

const SinglebookContainer = ({ history, loading, reload, fetchSinglebook }) => {
	useEffect(
		() => {
			reload && fetchSinglebook(history.location.pathname.replace(/.*[a-z]\//, ''));
		},
		// eslint-disable-next-line
		[ history ]
	);

	const { component } = useSpinner({
		loading,
		reload,
		WrappedComponent: SinglebookComponent
	});

	return component;
};

const mapToProps = createStructuredSelector({
	loading: selectLoading,
	data: selectSinglebookData,
	reload: selectReload
});

const dispatchProps = (dispatch) => ({
	fetchSinglebook: (id) => dispatch(fetchSinglebook(id))
});

export default connect(mapToProps, dispatchProps)(SinglebookContainer);
