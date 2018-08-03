const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo');

let id = '5b63e4504d809a17491e7c0611';

if(!ObjectID.isValid(id)) {
	console.log('Id is not Valid.');
}

Todo.find({
	_id : id
}).then((todos) => {
	console.log(`Todos:${todos}`);
})


Todo.findOne({
	_id : id
}).then((todo) => {
	console.log(`Todo: ${todo}`);
}).catch((e) => console.log(e));

Todo.findById(id).then((todo) => {
	console.log(`Todo: ${todo}`);
}).catch((e) => console.log(e));