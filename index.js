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
console.log("chicken");
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

const conn = mongoose
  .connect(uri, options)
  .then(() => {
    console.log("Mongoose connected");
  })
  .catch(arg => {
    console.log("Mongoose didn't connect");
    console.log(arg);
  });

exports.handler = (event, context, callback) => {
  console.log("winner");
  const GroupSchema = new mongoose.Schema(
    {
      groupName: "string",
      groupId: "string",
    },
    { collection: config.mongo.collection }
  );

  const GroupConstructor = mongoose.model("Group", GroupSchema);

  const { groupName, groupId } = event.queryStringParameters;

  GroupConstructor.create({ groupName, groupId }, (err, Group) => {
    console.log("Hello, World!");
    if (err) console.log(err);
    console.log("Hello, World!");

    callback(null, {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ groupId, groupName }, null, 2),
    });
  });
};
