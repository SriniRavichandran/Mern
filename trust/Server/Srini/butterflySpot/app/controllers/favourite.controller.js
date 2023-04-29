const favouriteService = require("../service/favourite.service");

exports.create = (req, res) => {
  favouriteService.create(req, res);
};

exports.findAll = (req, res) => {
  favouriteService.findAll(req, res);
};

exports.findOne = (req, res) => {
  favouriteService.findOne(req, res);
};

exports.update = (req, res) => {
  favouriteService.update(req, res);
};

exports.delete = (req, res) => {
  favouriteService.delete(req, res);
};

exports.particularData = (req, res) => {
  favouriteService.particularData(req, res);
};
