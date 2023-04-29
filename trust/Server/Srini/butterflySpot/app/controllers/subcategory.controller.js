const subcategoryService = require("../service/subcategory.service");

exports.create = async (req, res) => {
  subcategoryService.create(req, res);
};

exports.findAll = (req, res) => {
  subcategoryService.findAll(req, res);
};

exports.findOne = (req, res) => {
  subcategoryService.findOne(req, res);
};

exports.update = (req, res) => {
  subcategoryService.update(req, res);
};

exports.delete = (req, res) => {
  subcategoryService.delete(req, res);
};
