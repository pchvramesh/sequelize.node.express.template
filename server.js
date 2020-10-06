const events = require("events");
const eventEmitter = new events.EventEmitter();

//Loading .env file
require("dotenv").config();

//passing event emitter for app
require("./app")(eventEmitter);