import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const SinglebookText = ({ data, history }) => {
	return (
		<Container>
			<Button
				className="mt-4"
				onClick={() => {
					history.push(`/book/edit/${data._id}`);
				}}
			>
				EDIT BOOK INFO
			</Button>
			{Object.keys(data).map((item, i) => {
				if (item !== 'images' && item !== '__v' && item !== '_id') {
					return <Row className="mt-3 ml-2" key={item + i}>{`${item}:  ${data[item]}`}</Row>;
				}
				return null;
			})}
		</Container>
	);
};

export default withRouter(SinglebookText);
