const orderServices = require("../service/order.service");

exports.create = (req, res) => {
  orderServices.create(req, res);
};

exports.findAll = (req, res) => {
  orderServices.findAll(req, res);
};

exports.findOne = (req, res) => {
  orderServices.findOne(req, res);
};

exports.update = (req, res) => {
  orderServices.update(req, res);
};

exports.delete = (req, res) => {
  orderServices.delete(req, res);
};
