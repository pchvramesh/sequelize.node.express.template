'use strict';
const Routes = require('../controller');
const middlewares = require('../lib/middlewares');

module.exports = function (app) {
    const Router = require('express').Router();
    for (const route in Routes) {
        if (Routes.hasOwnProperty(route)) {
            Routes[route].forEach((element) => {
                let Args = [];
                Args.push(element.url);

                if (element.isPrivate) {
                    Args.push(middlewares.isLoggedIn);
                    Args.push(middlewares.validateRole(element.roles))
                }

                if (element.middlewares && element.middlewares.length > 0) {
                    Args = Args.concat(element.middlewares)
                }

                Args.push(element.controller);

                try {
                    Router[element.type.toLowerCase()](...Args);
                } catch (e) {
                    console.log(e.message, element.type, element.url)
                }
            })
        }
    }

    return app.use('/api', Router)
};
