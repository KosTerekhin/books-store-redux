import { normalize, schema } from 'normalizr';

// let response = {
// 	articles: [ { id: 1, someValue: 'test' }, { id: 2, someValue: 'test2' } ]
// };

var response = [
	{ _id: '5eaf0c431eaf563758f88e42', nickname: 'Batman', images: Array(1) },
	{ _id: '5eaf0c431eaf563758f88e43', nickname: 'Superman', images: Array(1) }
];

var items = new schema.Entity(
	'item',
	{},
	{
		idAttribute: '_id'
	}
);

response = normalize(response, [ items ]);

// console.log(response);
// console.log(response.entities.item);

let data = [
	{ _id: '5eaf0c431eaf563758f88e42', nickname: 'Batman', images: Array(1) },
	{ _id: '5eaf0c431eaf563758f88e43', nickname: 'Superman', images: Array(1) },
	{ _id: '5eaf0c431eaf563758f88e4c', nickname: 'SpiderMan', images: Array(1) }
];

var jambo = new schema.Entity(
	'items',
	{},
	{
		idAttribute: '_id'
	}
);

var dataResult = normalize(data, [ jambo ]);

console.log(dataResult);
console.log(dataResult.entities);
console.log(dataResult.result);

var action = {
	payload: [
		{ _id: '5eaf0c431eaf563758f88e42', nickname: 'Batman', images: Array(1) },
		{ _id: '5eaf0c431eaf563758f88e43', nickname: 'Superman', images: Array(1) },
		{ _id: '5eaf0c431eaf563758f88e4c', nickname: 'SpiderMan', images: Array(1) }
	]
};

var items = new schema.Entity(
	'items',
	{},
	{
		idAttribute: '_id'
	}
);
var heroes = new schema.Object({ payload: [ items ] });

var res = normalize(action, heroes);
console.log(res);
console.log(res.entities.items);

// /////////////////////////
// var action = [
// 	[
// 		{ _id: '5eaf0c431eaf563758f88e42', nickname: 'Batman', images: Array(1) },
// 		{ _id: '5eaf0c431eaf563758f88e43', nickname: 'Superman', images: Array(1) },
// 		{ _id: '5eaf0c431eaf563758f88e4c', nickname: 'SpiderMan', images: Array(1) }
// 	]
// ];

// var items = new schema.Entity(
// 	'items',
// 	{},
// 	{
// 		idAttribute: '_id'
// 	}
// );

// var images = new schema.Entity(
// 	'images'
// );

// var heroes = [ [ items ] ];

// var res = normalize(action, heroes);
// console.log(res);
// console.log(res.entities.items);

var action = {
	payload: [
		{
			_id: '5eaf0c431eaf563758f88e42',
			nickname: 'Batman',
			images: [
				{
					id: 'uw8',
					url: 'https:1'
				}
			]
		}
	],
	list: {
		item: {
			url: 11,
			url2: 2,
			url3: 3,
			url4: 4
		},
		item2: {
			url: 55
		},

		item3: {
			url: 6
		},

		item4: {
			url: 7
		}
	}
};

var image = new schema.Entity(
	'images',
	{},
	{
		idAttribute: 'url'
	}
);

var book = new schema.Entity(
	'books',
	{ images: [ image ] },
	{
		idAttribute: '_id'
	}
);

var item = new schema.Entity(
	'items',
	{},
	{
		idAttribute: 'url'
	}
);
var list = {
	item: item,
	item2: item,
	item3: item,
	item4: item
};

// var heroes = new schema.Object({ payload: [ items ] });
var heroes = {
	payload: [ book ]
	// list: list
};

// var res = normalize(action, heroes);

var action = {
	payload: [
		{
			_id: '2',
			nickname: 'Batman',
			images: [
				{
					id: 'uw8',
					url: 'https:2'
				},
				{
					id: 'uw12318',
					url: 'https:3'
				},
				{
					id: 'uw8asf',
					url: 'https:4'
				}
			]
		},
		{
			_id: '3',
			nickname: 'Batman',
			images: [
				{
					id: 'uw8',
					url: 'https:1'
				}
			]
		},
		{
			_id: '4',
			nickname: 'Batman',
			images: [
				{
					id: 'uw8',
					url: 'https:1'
				}
			]
		}
	]
};

var image = new schema.Entity('images');
var book = new schema.Entity(
	'books',
	{
		images: [ image ]
	},
	{
		idAttribute: '_id'
	}
);

var final = { payload: [ book ] };

var res = normalize(action, final);

// console.log(res);
// console.log(res.entities);
// console.log(res.result);
// console.log(res.entities.books);
// console.log(res.entities.images);

var obj = {
	payload: {
		_id: '5',
		nickname: 'Superman',
		real_name: 'Kal-El',
		origin_description: 'Krypton',
		superpowers: 'flight, superhuman strength, x-ray vision, heat vision',
		catch_phrase: 'Up, up, and away!',
		images: [
			{
				id: 'shz3lvi2ldletpe86z6r',
				url: 'https://res.cloudinary.com/dkstecshe/image/upload/v1588531890/shz3lvi2ldletpe86z6r.jpg'
			},
			{
				id: 'iufdhfrugkiguswpyfo9',
				url: 'https://res.cloudinary.com/dkstecshe/image/upload/v1588543818/iufdhfrugkiguswpyfo9.png'
			},
			{
				id: 'ssvm6wok5yzlouyovb0y',
				url: 'https://res.cloudinary.com/dkstecshe/image/upload/v1588687386/ssvm6wok5yzlouyovb0y.jpg'
			}
		],
		__v: 0
	}
};

var image = new schema.Entity('images');
// var singlebook = new schema.Entity('singlebook', { images: [ image ] }, { idAttribute: '_id' });

var singlebook = { images: [ image ] };

var final = { payload: singlebook };

var res = normalize(obj, final);

var datanew = {
	singlebook: res.result.payload,
	images: res.entities.images
};

var res = [
	{
		id: 'dwarc2p0x4u8biigpf2a',
		url: 'https://res.cloudinary.com/dkstecshe/image/upload/v1588574561/dwarc2p0x4u8biigpf2a.jpg'
	},
	{
		id: 'gimrakow8u8rzzhi36op',
		url: 'https://res.cloudinary.com/dkstecshe/image/upload/v1592645226/gimrakow8u8rzzhi36op.png'
	},
	{
		id: 'ksneosuhvbccj0zrda0j',
		url: 'https://res.cloudinary.com/dkstecshe/image/upload/v1593345479/ksneosuhvbccj0zrda0j.png'
	},
	{
		id: 'u4vjol5ffoqjnkrmowcf',
		url: 'https://res.cloudinary.com/dkstecshe/image/upload/v1593345518/u4vjol5ffoqjnkrmowcf.png'
	}
];

var image = new schema.Entity('images');
var final = [ image ];
var res = normalize(res, final);

var payload = {
	dataImages: res.result,
	images: res.entities.images
};

// console.log(res);
// console.log(res.entities.images);
// console.log(res.result);
// console.log(payload);

var form = {
	editDetails: {
		values: {
			_id: '5efc86dbf8c24e35100c2f80',
			title: 'DevOps: WTF!',
			subtitle: 'Hard cover',
			isbn13: '1001592565453',
			price: '$0.00',
			images: [ '5efc86dbf8c24e35100c2f81' ],
			__v: 0
		},
		initial: {
			_id: '5efc86dbf8c24e35100c2f80',
			title: 'DevOps: WTF!',
			subtitle: 'Hard cover',
			isbn13: '1001592565453',
			price: '$0.00',
			images: [ '5efc86dbf8c24e35100c2f81' ],
			__v: 0
		},
		syncErrors: {
			nickname: 'Required',
			real_name: 'Required',
			origin_description: 'Required',
			superpowers: 'Required',
			catch_phrase: 'Required'
		},
		registeredFields: {
			title: {
				name: 'title',
				type: 'Field',
				count: 1
			},
			subtitle: {
				name: 'subtitle',
				type: 'Field',
				count: 1
			},
			isbn13: {
				name: 'isbn13',
				type: 'Field',
				count: 1
			},
			price: {
				name: 'price',
				type: 'Field',
				count: 1
			}
		}
	}
};

const dataToUpdate = [ '_id', 'title', 'subtitle', 'isbn13', 'price' ];
var niceData = {};
var res = dataToUpdate.forEach((item) => {
	console.log(item);
	console.log(form.editDetails.values[item]);
	niceData[item] = form.editDetails.values[item];
});

// console.log(form.editDetails.values.title)
console.log(niceData);
