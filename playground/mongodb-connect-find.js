// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/',
{ useNewUrlParser: true } ,(err, db) => {
	if ( err ) {
		return console.log('Unable to connect to Mongodb server');
	}
	console.log('Connected to Mongodb server');

	 var db1 = db.db('TodoApp');

	 // to fetch all todos collects
	 // db1.collection('Todos').find().toArray().then( (docs) => {
	 // 	console.log('Todos');
	 // 	console.log(JSON.stringify(docs, undefined, 2));
	 // }, (err) => {
	 // 	console.log('Unable to fetch todos', err);
	 // });

	 // fetch the todo having completed false
	 // db1.collection('Todos').find({completed: false}).toArray().then( (docs) => {
	 // 	console.log('Todos');
	 // 	console.log(JSON.stringify(docs, undefined, 2));
	 // }, (err) => {
	 // 	console.log('Unable to fetch todos', err);
	 // });

	 // fetch the todo with _id 
	 // db1.collection('Todos').find({_id : new ObjectID('5b62948876b8fe1e2fc18628')}).toArray().then( (docs) => {
	 // 	console.log('Todos');
	 // 	console.log(JSON.stringify(docs, undefined, 2));
	 // }, (err) => {
	 // 	console.log('Unable to fetch todos', err);
	 // });

	 //count of todos

	 db1.collection('Todos').find().count().then( (count) => {
	 	console.log(`Todos count: ${count}`);
	 }, (err) => {
	 	console.log('Unable to fetch todos', err);
	 });



	// db.close();
});
