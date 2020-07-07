import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const SinglebookText = ({ data, history }) => (
	<Col md={3}>
		<Button
			className="mt-4"
			style={{ maxWidth: '150px' }}
			onClick={() => {
				history.push(`/book/edit/${data._id}`);
			}}
		>
			EDIT BOOK INFO
		</Button>
		{Object.keys(data).map((item, i) => {
			if (item !== 'images' && item !== '__v' && item !== '_id') {
				return (
					<Row className="my-2" style={{ borderBottom: '0.1px solid lightgray' }} key={item + i}>
						<Col className="px-0 py-2 font-weight-bold" md={3}>{`${item}: `}</Col>
						<Col className="py-2">{`${data[item]}`}</Col>
					</Row>
				);
			}
			return null;
		})}
	</Col>
);

export default withRouter(SinglebookText);
