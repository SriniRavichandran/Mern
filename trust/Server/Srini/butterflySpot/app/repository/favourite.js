const db = require("../models");
const Favourite_data = db.favourite_data;

exports.create = async (favourite_data) => {
  const datas = await favourite_data.save(favourite_data);
  return datas;
};

exports.findAll = async (condition) => {
  const datas = await Favourite_data.find(condition);
  return datas;
};

exports.findOne = async (id) => {
  const datas = await Favourite_data.findById(id);
  return datas;
};

exports.update = async (id, req) => {
  const datas = await Favourite_data.findByIdAndUpdate(id, req.body, {
    useFindAndModify: false,
  });
  return datas;
};

exports.delete = async (id) => {
  const datas = await Favourite_data.findByIdAndRemove(id);
  return datas;
};
