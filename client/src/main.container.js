import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchHeroes } from './redux/actions/hero.actions';
import MainComponent from './main.component';
import { selectLoading } from './redux/selectors/ui.selector';
// import withNotifications from './withNotifications.provider';

const MainContainer = ({ fetchHeroes }) => {
	useEffect(
		() => {
			fetchHeroes();
		},
		[ fetchHeroes ]
	);
	return <MainComponent />;
};

const dispatchProp = (dispatch) => ({
	fetchHeroes: () => dispatch(fetchHeroes())
});

const mapProps = createStructuredSelector({
	loading: selectLoading
});

export default connect(mapProps, dispatchProp)(MainContainer);
