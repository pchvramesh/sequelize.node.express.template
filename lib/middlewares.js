'use strict';
const bodyParser = require('body-parser');
const cors = require('cors');
const Morgan = require('morgan');

const requestMiddlewares = (app) => {
    app.use(Morgan('dev'));
    app.use(cors({
        credentials: true,
        origin: true
    }));
    app.use(bodyParser.json({limit: '999mb', parameterLimit: 1000000}));
    app.use(bodyParser.urlencoded({limit: '999mb', extended: true, parameterLimit: 1000000}));
};


const responseMiddlewares = (app) => {
    app.use(function (err, req, res, next) {
        if (err) {
            res.send(err)
        } else {
            //res.end();
        }
    })
};

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(401).send({message: 'Invalid credentials'})
}

const validateRole = (roles) => (req, res, next) => {
    console.log(req.user);
    roles.indexOf(req.user.role) > -1 ? next() : res.status(203).send({message: 'Access denied'});
};

module.exports = {
    request: requestMiddlewares,
    response: responseMiddlewares,
    isLoggedIn: isLoggedIn,
    validateRole: validateRole
};

