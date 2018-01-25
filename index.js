/**
 * MON-3 objective:
 *
 * Create a lambda that takes in a new Car object and stores it into the database.
 *
 * The API path should resemble /resource/subject/
 *
 * Since we have a very simple task, we'll pretend the resource is sort of like the project name:
 * carstuff
 *
 * The subject matter that we're dealing with is cars.
 *
 * Any definition beyond "cars" will be inconsistent and different for each method we want to implement.
 *
 * This API path should be /carstuff/cars
 */

exports.handler = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ event, context }, null, 2),
  });
};
