const db = require("../models");
const Subcategory_data = db.subcategory_data;

exports.create = async (subcategory) => {
  const datas = await subcategory.save(subcategory);
  return datas;
};

exports.findAll = async (condition) => {
  const datas = Subcategory_data.find(condition);
  return datas;
};

exports.update = async (id, req) => {
  const datas = Subcategory_data.findByIdAndUpdate(id, req.body, {
    useFindAndModify: false,
  });

  return datas;
};

exports.delete = async (id) => {
  return await Subcategory_data.findByIdAndRemove(id);
};

exports.findOne = async (category) => {
  const datas = await Subcategory_data.find({ category: category });
  return datas;
};
