// import React from 'react';
import useSpinner from '../../hooks/spinner/useSpinner';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectLoading, selectRoute, selectReload } from '../../redux/selectors/ui.selector';
import NewBookComponent from './newbook.component';

const NewBookContainer = ({ loading }) => {
	const { component } = useSpinner({ loading, WrappedComponent: NewBookComponent });
	return component;
};

const mapToProps = createStructuredSelector({
	route: selectRoute,
	loading: selectLoading,
	reload: selectReload
});

export default connect(mapToProps)(NewBookContainer);
