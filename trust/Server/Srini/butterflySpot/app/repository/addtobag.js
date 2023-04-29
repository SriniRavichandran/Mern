const db = require("../models");
const Products_data = db.addtobag_data;

exports.create = async (product_data) => {
  const datas = await product_data.save(product_data);
  return datas;
};

exports.findAll = async (condition) => {
  const datas = await Products_data.find(condition);

  return datas;
};

exports.findOne = async (id) => {
  const data = await Products_data.findById(id);

  return data;
};

exports.update = async (id, req) => {
  const data = await Products_data.findByIdAndUpdate(id, req.body, {
    useFindAndModify: false,
  });
  return data;
};

exports.delete = async (id) => {
  return await Products_data.findByIdAndRemove(id);
};
