const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/Midb';
//assert is providing a way of testing an expressions.
MongoClient.connect(url, (err, database) => {
	assert.equal(err,null);
	console.log('Connected correctly to server');
	
	const dbs=database.db("Sumit")
	const collection = dbs.collection("details");
	
	collection.insertOne({"name":"sumit","roll_no":"30"},{"name":"rahul","roll_no":"30"},
	(err,result) => {
		assert.equal(err,null);
		console.log("After Insert:\n");
		console.log(result.ops);
		collection.find({}).toArray((err, docs) => {
			assert.equal(err,null);
			console.log("Found:\n");
			console.log(docs);
			dbs.dropCollection("details", (err, result) => {
				assert.equal(err,null);
				database.close();
			});
		});
	});
});
