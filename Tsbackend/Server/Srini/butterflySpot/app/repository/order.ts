import db from "../models";
const Order_data = db.order_data;
import { Request } from "express";

const create = async (order_data:any) => {
  const datas = await order_data.save(order_data);
  return datas;
};

const findAll = async (condition:any) => {
  const datas = await Order_data.find(condition);
  return datas;
};

const findOne = async (id:any) => {
  const datas = await Order_data.findById(id);
  return datas;
};

const update = async (id:any, req:Request) => {
  const datas = await Order_data.findByIdAndUpdate(id, req.body, {
    useFindAndModify: false,
  });
  return datas;
};

const deleteOne = async (id:any) => {
  const datas = await Order_data.findByIdAndRemove(id);
  return datas;
};

export const order_Repo={
  deleteOne,update,findAll,findOne,create
}