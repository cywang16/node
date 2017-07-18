/*
In this exercise the database name is learnyoumongo.
So, the url would be something like: mongodb://localhost:27017/learnyoumongo

Use the parrots collection to find all documents where age
is greater than the first argument passed to your script.

Using console.log, print the documents to stdout.
*/

var url = 'mongodb://localhost:27017/learnyoumongo'

var mongo = require('mongodb').MongoClient
mongo.connect(url,
    function(err, db)
    {
        var parrots = db.collection('parrots')
    })
