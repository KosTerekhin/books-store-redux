import { useEffect } from 'react';
import useSpinner from '../../../hooks/spinner/useSpinner';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { selectRoute, selectLoading, selectReload } from '../../../redux/selectors/ui.selector';
import EditComponent from './edit.component';

const EditContainer = ({ loading, route, history }) => {
	const { component } = useSpinner({ loading, WrappedComponent: EditComponent });

	useEffect(
		() => {
			route && history.push(route);
		},
		// eslint-disable-next-line
		[ route ]
	);

	return component;
};

const mapToProps = createStructuredSelector({
	route: selectRoute,
	loading: selectLoading,
	reload: selectReload
});

export default compose(connect(mapToProps), withRouter)(EditContainer);
