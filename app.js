const express = require("express");
const app = express();


const startServer = (db) => {
    //Creating Routes
    require('./lib/routes')(app);

    //Assign Response middlewares
    //middlewares.response(app);

    //Starting server
    app.listen(8089, () => {
        console.log("Server Started", 8089)
    })
};


module.exports = function (emitter) {
    emitter.once("DBCONNECTED", (db) => {
        console.log("DB Connected");
        startServer(db);
    });

    emitter.once("DBERROR", () => {
        console.log("DB Connection failed");
    });

    emitter.once('DBDISCONNECTED', () => {
        console.log("DB Disconnected");
    });

    //passing event emitter for db connection
    require("./lib/db")(emitter);
};
