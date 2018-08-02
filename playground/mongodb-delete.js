// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/',
{ useNewUrlParser: true } ,(err, db) => {
	if ( err ) {
		return console.log('Unable to connect to Mongodb server');
	}
	console.log('Connected to Mongodb server');

	 var db1 = db.db('TodoApp');

	 // deleteMany
	 // db1.collection('Todos').deleteMany({text : 'Walk the dog'}).then((result) => {
	 // 	console.log(result);
	 // });

	 //deleteOne
	 // db1.collection('Todos').deleteOne({text : 'Eat lunch'}).then((result) => {
	 // 	console.log(result);
	 // });
	 //findOneAndDelete
	 db1.collection('Todos').findOneAndDelete({completed : false }).then((result) => {
	 	console.log(result);
	 });
	

	// db.close();
});
