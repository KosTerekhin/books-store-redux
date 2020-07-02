import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './withSpinner.styles';

const withSpinner = (WrappedComponent) => ({ loading, ...otherProps }) => {
	console.log('spinner', loading);
	if (loading) {
		return (
			<SpinnerOverlay>
				<SpinnerContainer />
			</SpinnerOverlay>
		);
	}

	return <WrappedComponent {...otherProps} />;
};

export default withSpinner;
