"use strict";
const Ctrl = require('./auth.controller');

module.exports = [
    {
        url: "/auth/login",
        controller: Ctrl.login,
        type: "POST",
        isPrivate: false
    }
];
