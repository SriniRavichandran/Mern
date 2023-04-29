function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(400).send("Something broke!");
}
module.exports = errorHandler;
