import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectNotifications, selectFirstNotification } from './redux/selectors/notifications.selector';
import { compose } from 'redux';
import { selectLoading } from './redux/selectors/ui.selector';
import withSpinner from './withSpinner.hoc';
// import withNotifications from './withNotifications.hoc';

const MainComponent = (props) => {
	return (
		<div>
			<h1>Hello Superhero!!!</h1>
			<h1 style={{ color: 'green' }}>Loading over</h1>
			<hr />
			{/* {notifications &&
				notifications.map((item, index) => (
					<p style={{ color: 'green', fontSize: '20px' }} key={item.id + index}>
						{item.message}
					</p>
				))} */}
		</div>
	);
};

const mapProps = createStructuredSelector({
	notifications: selectNotifications,
	message: selectFirstNotification,
	loading: selectLoading
});

export default compose(connect(mapProps), withSpinner)(MainComponent);
