const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo');

Todo.remove({})
	.then((todos)=> {
		console.log(todos);
	});

Todo.findOneAndRemove({
	_id : '5b63f458faa22b21802f5d31'
}).then((todo) => {
	console.log(todo);
})

Todo.findByIdAndRemove('5b63f458faa22b21802f5d32')
	.then((todo) => {
		console.log(todo);
	})