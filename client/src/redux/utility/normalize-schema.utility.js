import { normalize, schema } from 'normalizr';

export const applyBooksSchema = (action) => {
	const images = new schema.Entity('images');
	const book = new schema.Entity(
		'bookList',
		{
			images: [ images ]
		},
		{
			idAttribute: '_id'
		}
	);
	const final = { payload: [ book ] };

	return normalize(action, final).entities;
};

export const applyNewBookSchema = (action) => {
	// const images = new schema.Entity('images');
	// const book = new schema.Entity(
	// 	'bookList',
	// 	{
	// 		images: [ images ]
	// 	},
	// 	{
	// 		idAttribute: '_id'
	// 	}
	// );
	// const final = { payload: [ book ] };

	// return normalize(action, final).entities;
	console.log(action.payload);
	return action;
};

export const applySinglebookSchema = (action) => {
	const image = new schema.Entity('images');
	const singlebook = { images: [ image ] };
	const final = { payload: singlebook };
	const res = normalize(action, final);

	return {
		data: res.result.payload,
		images: res.entities.images
	};
};

export const applySinglebookImagesSchema = (action) => {
	const image = new schema.Entity('images');
	const final = [ image ];
	const res = normalize(action.payload, final);

	return {
		dataImages: res.result,
		images: res.entities.images
	};
};
