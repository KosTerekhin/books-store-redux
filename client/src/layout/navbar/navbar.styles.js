import styled from 'styled-components';

export const NavbarOverlay = styled.div`
	height: 5vh;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${(props) => (props.state ? 'lightblue' : 'black')};
	cursor: pointer;
	padding: 0 5%;
`;
