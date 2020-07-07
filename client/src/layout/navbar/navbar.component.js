import React from 'react';
import { NavbarOverlay, NavRightButtons } from './navbar.styles';
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
			<NavRightButtons>
				<Button variant="info" className="mr-4" onClick={() => history.push('/add-book')}>
					Add Book
				</Button>
				<div onClick={handleClick}>{state ? '🌞' : '🌑'}</div>
			</NavRightButtons>
		</NavbarOverlay>
	);
};

export default withRouter(NavBar);
