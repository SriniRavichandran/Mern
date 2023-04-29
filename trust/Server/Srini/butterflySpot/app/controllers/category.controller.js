const serviceCategory = require("../service/category.service");

exports.create = (req, res) => {
  serviceCategory.create(req, res);
};

exports.findAll = (req, res) => {
  serviceCategory.findAll(req, res);
};

exports.findOne = (req, res) => {
  serviceCategory.findOne(req, res);
};

exports.update = (req, res) => {
  serviceCategory.update(req, res);
};

exports.delete = (req, res) => {
  serviceCategory.delete(req, res);
};
