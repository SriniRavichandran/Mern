const cartService = require("../service/addtobag.service");

exports.create = (req, res) => {
  cartService.create(req, res);
};

exports.findAll = (req, res) => {
  cartService.findAll(req, res);
};

exports.findOne = (req, res) => {
  cartService.findOne(req, res);
};

exports.update = (req, res) => {
  cartService.update(req, res);
};

exports.delete = (req, res) => {
  cartService.delete(req, res);
};
