/**
 * MON-3 objective:
 *
 * Create a lambda that takes in a new Car object and stores it into the database.
 *
 * The API path should resemble /apiVersion/resource/subject/
 *
 * Since we have a very simple task, we'll pretend the resource is sort of like the project name:
 * carstuff
 *
 * The subject matter that we're dealing with is cars.
 *
 * Any definition beyond "cars" will be inconsistent and different for each method we want to implement.
 *
 * This API path should be /v1/carstuff/cars
 */
const mongoose = require("mongoose");
const config = require("./config/config.js");
const DEFAULT_MONGO_PORT = 27017;

const uri =
  "mongodb://" +
  config.mongo.hostname +
  ":" +
  (config.mongo.port || DEFAULT_MONGO_PORT);
const options = {
  user: config.mongo.username,
  pass: config.mongo.password,
};

const DEFAULT_HEADERS = {
  "Access-Control-Allow-Origin": "*",
};

respond = (callback, body, statusCode = 500, headers = DEFAULT_HEADERS) => {
  if (body.constructor === Object) {
    body = JSON.stringify(body);
  }

  callback(null, { body, statusCode, headers });
};

exports.handler = (event, context, callback) => {
  const GroupSchema = new mongoose.Schema(
    {
      groupName: "string",
    },
    { collection: config.mongo.collection }
  );

  const GroupConstructor = mongoose.model("Group", GroupSchema);

  const { groupName } = event.queryStringParameters;

  if (!groupName) {
    respond(callback, {
      error: "You did not provide one of the required fields",
    });

    return;
  }

  const conn = mongoose
    .connect(uri, options)
    .then(() => {
      // On success, no need to do anything
    })
    .catch(arg => {
      console.log("Mongoose didn't connect");
      console.log(arg);
    });

  GroupConstructor.create({ groupName }, (err, Group) => {
    if (err) {
      console.log(err);
      respond(callback, { error: "Internal server error" });
    } else {
      respond(
        callback,
        JSON.stringify({ groupName: Group.groupName, id: Group.id }),
        200
      );
    }

    mongoose.connection.close();
  });
};
