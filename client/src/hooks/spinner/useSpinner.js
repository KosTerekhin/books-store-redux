import React, { useState, useEffect } from 'react';
import { SpinnerContainer, SpinnerOverlay } from './useSpinner.styles';

const useSpinner = ({ loading, reload = true, WrappedComponent } = {}) => {
	const [ state, setState ] = useState({ loadingLocal: false, reloadLocal: reload });
	const { loadingLocal, reloadLocal } = state;

	useEffect(
		() => {
			setState({
				...state,
				loadingLocal: true
			});

			!reload &&
				setState({
					...state,
					reloadLocal: false
				});
		},
		// eslint-disable-next-line
		[ loading ]
	);

	let component = <WrappedComponent />;

	if (!reloadLocal) {
		return {
			component
		};
	}

	if ((!loading && !loadingLocal) || loading) {
		component = (
			<SpinnerOverlay>
				<SpinnerContainer />
			</SpinnerOverlay>
		);
	}

	return { component };
};

export default useSpinner;
