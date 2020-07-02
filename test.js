let inputs = {
	name: 'john',
	name1: '',
	name2: 123
};
let empty = Object.keys(inputs).filter((item) => {
	console.log(inputs[item]);
	return inputs[item] === '';
});

console.log(empty);
let date = Date.now();

console.log(typeof date);

const arr = {
	images: [
		// '1587719177805Supermanflying.png',
		// '1587806218951default.png',
		// '1587806211231238951default1.png',
		// '1587806211232138951default2.png',
		'1587806218953Supermanflying.png'
	],
	_id: '5ea2ac0a63f7cc2970c625a2',
	nickname: 'Joker123',
	real_name: 'Jok',
	origin_description: 'asdad',
	superpowers: 'asdasd',
	catch_phrase: 'aasdasd',
	__v: 0
};

// let keys = [ '1587806218951default.png', '1587806218953Supermanflying.png' ];

// arr.images = arr.images.filter((item) => keys.indexOf(item) == -1);

const newObj = {};

Object.keys(arr).forEach((key) => {
	if (
		key === 'images'
		// || key === '_id' || key === '__v'
	) {
		newObj[key] = [ 'link' + arr[key] ];
	} else {
		newObj[key] = arr[key];
	}
});

// console.log(newObj);

// Object.keys(newObj).forEach((key) => {
// 	arr[key] = newObj[key];
// });

// console.log(newObj);

// const testArr = [
// 	{
// 		fieldname: 'images',
// 		originalname: '71y5ZkGmrCL.jpg',
// 		encoding: '7bit',
// 		mimetype: 'image/jpeg',
// 		destination: './uploads/',
// 		filename: '158814723178271y5ZkGmrCL.jpg',
// 		path: 'uploads\\158814723178271y5ZkGmrCL.jpg',
// 		size: 166037
// 	},
// 	{
// 		fieldname: 'images',
// 		originalname: 'batman.jpg',
// 		encoding: '7bit',
// 		mimetype: 'image/jpeg',
// 		destination: './uploads/',
// 		filename: '1588147231794batman.jpg',
// 		path: 'uploads\\1588147231794batman.jpg',
// 		size: 61946
// 	},
// 	{
// 		fieldname: 'images',
// 		originalname: 'batman.jpg',
// 		encoding: '7bit',
// 		mimetype: 'image/png',
// 		destination: './uploads/',
// 		filename: '1588147231794batman.jpg',
// 		path: 'uploads\\1588147231794batman.jpg',
// 		size: 61946
// 	}
// ];

// console.log(testArr.length);
// const length = testArr.length;
// if (
// 	testArr.filter((file) => {
// 		return file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg';
// 	}).length == length
// ) {
// 	console.log('true');
// 	next();
// } else {
// 	console.log('else');
// }

var imgArr = [
	{
		id: 'eravk4tdk1rphewl1zjv',
		url: 'https://res.cloudinary.com/dkstecshe/image/upload/v1588522736/eravk4tdk1rphewl1zjv.jpg'
	},
	{
		id: 'qlb7lirbahxfpn2blyxt',
		url: 'https://res.cloudinary.com/dkstecshe/image/upload/v1588522808/qlb7lirbahxfpn2blyxt.jpg'
	},
	{
		id: 'k8ytjj9zsylwmihhuwgo',
		url: 'https://res.cloudinary.com/dkstecshe/image/upload/v1588522809/k8ytjj9zsylwmihhuwgo.jpg'
	},
	{
		id: 'nmwh9mxvdvvu1u3fi9df',
		url: 'https://res.cloudinary.com/dkstecshe/image/upload/v1588523317/nmwh9mxvdvvu1u3fi9df.jpg'
	},
	{
		id: 'kksa4obuw4ma4gs2shdo',
		url: 'https://res.cloudinary.com/dkstecshe/image/upload/v1588523318/kksa4obuw4ma4gs2shdo.jpg'
	}
];

let deduct = [
	{
		id: 'nmwh9mxvdvvu1u3fi9df',
		url: 'https://res.cloudinary.com/dkstecshe/image/upload/v1588523317/nmwh9mxvdvvu1u3fi9df.jpg'
	},
	{
		id: 'kksa4obuw4ma4gs2shdo',
		url: 'https://res.cloudinary.com/dkstecshe/image/upload/v1588523318/kksa4obuw4ma4gs2shdo.jpg'
	}
];

let idsArr = deduct.map((item) => item.id);
// console.log(idsArr);

var filteredArr = imgArr.filter((item) => idsArr.indexOf(item.id) === -1);

// console.log(filteredArr);