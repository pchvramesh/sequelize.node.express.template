"use strict";
const co = require("co").wrap;
const db = require('../../lib/db');

// function* login(req, res, next) {
//     try {

//         passport.authenticate('local-login', function (err, user, info) {
//             if (err) {
//                 return res.status(err.status).send({ message: err.errMsg })
//             }
//             if (!user) {
//                 return res.status(401).send({ message: 'Invalid credentials' });
//             }
//             if (user && !user.isActive) {
//                 return res.status(423).send({ message: 'Please contact customer care' });
//             }
//             req.login(user, function (err) {
//                 if (err) {
//                     return next(err);
//                 }

//                 res.status(200).send({ message: "login Success", data: user });
//             });
//         })(req, res, next);
//         /*const data = yield mongoose.model('UserModal').find(req.body).exec();
//         res.send(data);*/
//     } catch (e) {
//         res.send(e.message);
//     }
// }

const addUser = (req, res) => {
    res.send({data: req.body});
}



module.exports = {
    // login: co(login),
    addUser: co(addUser)
};