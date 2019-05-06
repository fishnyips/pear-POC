var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');

var constants = require('../lib/constants');
var members = require('../lib/members');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(cookieParser(constants.SECRET));
router.use(session({
    cookie: {
        domain: constants.LOCAL_HOST,
        path: '/',
        signed: true,
        maxAge: 1200000
    },
    resave: false,
    saveUninitialized: false,
    secret: constants.SECRET,
    rolling: false,
    unset: 'destroy'
}));

router.get('/', function(req, res, next) {
    var session  = req.session;
    if(!session.user) {
        res.render('index');
    }
    else {
        res.render('dashboard', { firstName: session.user.firstName, lastName: session.user.lastName, userId: session.user.id });
    }
});

router.post('/', function(req, res, next) {
    var session = req.session;
    var user = req.body;
    var result = members.login(user.email, user.password, function(result) {
        if (result.length === 0) {
            res.render('error', { message: "Authentication failed!" });
        }
        else {
            if(!session.user) {
                session.user = {};
                session.user.id = JSON.stringify(result._id);
                session.user.firstName = result.firstName;
                session.user.lastName = result.lastName;
            }
            res.render('dashboard', { firstName: session.user.firstName, lastName: session.user.lastName, userId: session.user.id });
        }
    });
});

router.get('/help', function(req, res, next) {
    res.render('help');
});

router.get('/sign_out', function(req, res, next) {
    req.session.destroy();
    res.render('index');
});

module.exports = router;
