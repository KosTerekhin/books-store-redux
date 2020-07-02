import React from 'react';
import { Row } from 'react-bootstrap';

import PanginationWrap, { listToDisplay } from './pagination.context';
import NextButton from './next-button';
import PreviousButton from './previous-button';
import Select from './select';

const withPangination = (WrappedComponent) => (props) => {
	return (
		<PanginationWrap {...props}>
			<Select />
			<WrappedComponent
				{...props}
				// listToDisplay={listToDisplay}
			/>
			<Row>
				<NextButton />
				<PreviousButton />
			</Row>
		</PanginationWrap>
	);
};

export default withPangination;
