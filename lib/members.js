var MongoClient = require('mongodb').MongoClient;
var constants = require('./constants');

var members = [
    { email: "crystal.yip@mail.utoronto.ca", firstName: "Crystal", lastName: "Yip", password: "crystal123", role: "student" }
];

module.exports = {
    login: function(email, password, callback) {
        console.log('LOG: members->login');
        console.log('LOG: login: ' + email);
        var result = [];
        MongoClient.connect(constants.MONGO_DB_URL, { useNewUrlParser: true }, function(err, db) {
            if (err) {
                console.error('ERROR: ' + err);
            }
            else {
                var dbo = db.db(constants.MONGO_DB_NAME);
                var whereStr = { email: email, password: password };
                dbo.collection(constants.MEMBERS_TABLE).find(whereStr).toArray(function(er, res) {
                    if (er) {
                        console.error('ERROR: ' + er);
                    }
                    else if (res.length === 0) {
                        console.warn('WARN: No email record ' + email + ' found!');
                    }
                    else if (res.length > 1) {
                        console.warn('WARN: Multiple records found with email:' + email + ' !');
                    }
                    else {
                        if (password === res[0].password) {
                            console.log('LOG: Login successfully!');
                            result = res[0];
                        }
                        else {
                            console.warn('WARN: Incorrect password!');
                        }
                    }
                    if (typeof callback === 'function') {
                        callback(result);
                    }
                    db.close();
                });
            }
        });
    },
    getMembers: function(callback) {

        console.log('LOG: members->getMembers');
        return members;
    },
    toTitleCase: function (str) {
        console.log('LOG: members->toTitleCase');
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        return splitStr.join(' ');
    }
};