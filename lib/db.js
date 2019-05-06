var MongoClient = require('mongodb').MongoClient;
var constants = require('./constants');
var fs = require('fs');
var memberList = JSON.parse(fs.readFileSync("public/data/members.json"));

module.exports = {
    init: function() {
        console.log('LOG: db->init');
        console.log('LOG: Initializing DB...');
        MongoClient.connect(constants.MONGO_DB_URL, { useNewUrlParser: true }, function(coerr, db) {
            if (coerr) throw coerr;
            console.log('LOG: db has been created!');
            var dbo = db.db(constants.MONGO_DB_NAME);
            dbo.createCollection('members', function (ccmerr, ccmres) {
                if (ccmerr) throw ccmerr;
                console.log('LOG: members collection has been created!');
                dbo.collection("members").insertMany(memberList, function(cimerr, cimres) {
                        db.close();
                    });
                });
            });
    }
}
require('make-runnable');