const db = require("../models");
const Products_data = db.products_data;

const productService = require("../service/product.service");

exports.create = (req, res) => {
  productService.create(req, res);
};

exports.findAll = (req, res) => {
  productService.findAll(req, res);
};

exports.particularData = (req, res) => {
  productService.particularData(req, res);
};

exports.findOne = (req, res) => {
  productService.findOne(req, res);
};

exports.update = (req, res) => {
  productService.update(req, res);
};

exports.delete = (req, res) => {
  productService.delete(req, res);
};
