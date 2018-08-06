require('./config/config.js');

const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const _ = require('lodash');

const {mongoose} = require('./db/mongoose.js');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	let todo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc) => {
		res.status(200).send(doc);
	}, (err) => {
		res.status(400).send(err);
	});

});

app.get('/todos', (req, res) => {
	Todo.find().then((todos) => {
		res.send({todos});
	}, (e) =>  {
		res.status(400).send(e);
	});
});

app.get('/todos/:id', (req, res) => {
	const id = req.params.id;
	if(!ObjectID.isValid(id)) {
		return res.status(404).send();
	}

	Todo.findById(id).then((todo) => {
		if(!todo){
			res.status(404).send();
		} 
		res.send({todo});
	}).catch((e) =>  {
		res.status(400).send();
	});
});

app.delete('/todos/:id', (req, res) => {
	const id = req.params.id;
	if(!ObjectID.isValid(id)) {
		return res.status(404).send();
	}
	
	Todo.findByIdAndRemove(id).then((removedTodo) => {
		if(!removedTodo){
			res.status(404).send();
		} 
		res.send({removedTodo});
	}).catch((e) =>  {
		res.status(400).send();
	});
});

app.patch('/todos/:id', (req, res) => {
	const id = req.params.id;
	const body = _.pick(req.body,['text', 'completed']);

	if(!ObjectID.isValid(id)) {
		return res.status(404).send();
	}

	if(_.isBoolean(body.completed) && body.completed) {
		body.completedAt = new Date().getTime();
	} else {
		body.completed = false;
		body.completedAt = null;
	}

	Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
		if(!todo) {
			res.status(404).send();
		}
		res.send({todo});
	}).catch((e) => res.status(404).send());

});

app.post('/users', (req, res) => {
	const body = _.pick(req.body,['email', 'password']);
	let user = new User(body);

	user.save().then(() => {
		return user.generateAuthToken();
	}).then((token) => {
		res.header('x-auth', token).send(user);
	}).catch((e) => res.status(404).send());

});

app.listen(port, () => {
	console.log(`Started on port ${port}.`);
});

module.exports = {app};