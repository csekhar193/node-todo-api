const {SHA256} = require('crypto-js'); // this is for playground purpose only.
const jwt = require('jsonwebtoken');


let data = {
	id: 4
};

let token = jwt.sign(data, 'somesecret');
console.log(token);

let decoded = jwt.verify(token, 'somesecret');
console.log(decoded);

// let message = 'I am user number 3';

// var hash = SHA256(message).toString();

// console.log(message);

// console.log(hash);

// let data = {
// 	id: 4
// };

// let token = {
// 	data,
// 	hash: SHA256(JSON.stringify(data)+'somesecret').toString()
// }

// token.data.id = 5;

// let resultHash = SHA256(JSON.stringify(token.data)+'somesecret').toString();

// if (token.hash === resultHash) {
// 	console.log('same');
// } else {
// 	console.log('not same');
// }

