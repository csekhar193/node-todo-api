// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/',
{ useNewUrlParser: true } ,(err, db) => {
	if ( err ) {
		return console.log('Unable to connect to Mongodb server');
	}
	console.log('Connected to Mongodb server');

	 var db1 = db.db('TodoApp');

	 db1.collection('Todos').findOneAndUpdate({
	 	_id: new ObjectID('5b62aaa32f0da7830688a469')
	 },{
	 	$set: {
	 		completed: false
	 	}
	 }, {
	 	returnOriginal: false
	 }).then((result) => {
	 	console.log(result);
	 });

	// db.close();
});
