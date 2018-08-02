const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/',
{ useNewUrlParser: true } ,(err, db) => {
	if ( err ) {
		return console.log('Unable to connect to Mongodb server');
	}
	console.log('Connected to Mongodb server');

	 var db1 = db.db('TodoApp');

	// db1.collection('Todos')
	// 	.insertOne({
	// 		text : 'Something to do.',
	// 		completed : false

	// 	}, (err, result) => {
	// 		if (err) {
	// 			return console.log('Unable to insert todo.');
	// 		}
	// 		console.log(JSON.stringify(result.ops, undefined, 2))
	// 	});


	db1.collection('Users')
		.insertOne({
			name : 'Chandra Sekhar',
			age : 24,
			location : 'visakhapatnam'
		}, (err, result) => {
			if(err) {
				return console.log('Unable to insert user.');
			}
			console.log(JSON.stringify(result.ops, undefined, 2));
		});

	db.close();
});
