const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users = [{
	'_id': userOneId,
	'email': 'chandu@gmail.com',
	'password': 'admin123',
	'tokens': [{
		'access': 'auth',
		'token': jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString()
	}]
},{
	'_id': userTwoId,
	'email': 'chandrasekhar@gmail.com',
	'password': 'admin123456',
	'tokens': [{
		'access': 'auth',
		'token': jwt.sign({_id: userTwoId, access: 'auth'}, 'abc123').toString()
	}]
}];


const todos = [{
	_id : new ObjectID(),
	text : 'First test todo',
	_creator: userOneId
}, {
	_id : new ObjectID(),
	text : 'Second test todo',
	completed: true,
	completedAt: 123456,
	_creator: userTwoId
}];

const populatedTodos = (done) => {
	Todo.remove({}).then(() => {
		return Todo.insertMany(todos);
	}).then(()=> done());
};

const populatedUsers = (done) => {
	User.remove({}).then(() => {
		let userOne = new User(users[0]).save();
		let userTwo = new User(users[1]).save();
		return Promise.all([userOne, userTwo]);
	}).then(()=> done());
};

module.exports = { todos, populatedTodos, users, populatedUsers };