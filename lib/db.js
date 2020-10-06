const Sequelize = require('sequelize');
const modals = require('../modals');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './dfwland.sqlite'
});

module.exports = function (emitter) {

    let db = {};

    db.sequelize = sequelize;
    db.datatypes = Sequelize;

    db.modals = {};

    modals.forEach((modal) => {
        console.log(modal);
        db.modals[modal.name] = modal.modal(sequelize, Sequelize)
    });

    if(emitter){
        emitter.emit('DBCONNECTED', db);
    }

    return db;
};
