const db = require("../models");
const Products_data = db.products_data;

exports.create = async (products_data) => {
  const datas = await products_data.save(products_data);
  return datas;
};

exports.findAll = async (condition) => {
  const datas = await Products_data.find(condition);
  return datas;
};

exports.particularData = async (condition) => {
  const datas = await Products_data.find(condition);
  return datas;
};

exports.findOne = async (id) => {
  const datas = await Products_data.findById(id);
  return datas;
};

exports.update = async (id, req) => {
  const datas = await Products_data.findByIdAndUpdate(id, req.body, {
    useFindAndModify: false,
  });
  return datas;
};

exports.delete = async (id) => {
  const datas = await Products_data.findByIdAndRemove(id);
  return datas;
};
