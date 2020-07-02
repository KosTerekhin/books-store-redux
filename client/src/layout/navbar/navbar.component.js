import React from 'react';
import { NavbarOverlay } from './navbar.styles';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router';

// import { useTheme } from '../../hoc/theme/useTheme';

const NavBar = (props) => {
	const { state, handleClick, history } = props;

	return (
		<NavbarOverlay state={state}>
			<Button variant={state ? 'dark' : 'warning'} onClick={() => history.push('/')}>
				Home
			</Button>
			<div onClick={handleClick}>{state ? '🌞' : '🌑'}</div>
		</NavbarOverlay>
	);
};

export default withRouter(NavBar);
