import styled from 'styled-components';

export const SelectedImage = styled.img`
	max-height: 250px;
	max-width: 300px;
	width: auto;
	margin: 0 5px 20px 5px;
	box-sizing: border-box;
	opacity: ${({ customStyle }) => (customStyle ? '0.7' : '1')};
`;
