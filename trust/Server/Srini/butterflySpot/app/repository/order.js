const db = require("../models");
const Order_data = db.order_data;

exports.create = async (order_data) => {
  const datas = await order_data.save(order_data);
  return datas;
};

exports.findAll = async (condition) => {
  const datas = await Order_data.find(condition);
  return datas;
};

exports.findOne = async (id) => {
  const datas = await Order_data.findById(id);
  return datas;
};

exports.update = async (id, req) => {
  const datas = await Order_data.findByIdAndUpdate(id, req.body, {
    useFindAndModify: false,
  });
  return datas;
};

exports.delete = async (id) => {
  const datas = await Order_data.findByIdAndRemove(id);
  return datas;
};
