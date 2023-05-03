import db from "../models";

const Products_data = db.addtobag_data;
import { Request } from "express";

const create = async (product_data:any) => {
  const datas = await product_data.save(product_data);
  return datas;
};

const findAll = async (condition:any) => {
  const datas = await Products_data.find(condition);

  return datas;
};

const findOne = async (id:any) => {
  const data = await Products_data.findById(id);

  return data;
};

const update = async (id:any, req:Request) => {
  const data = await Products_data.findByIdAndUpdate(id, req.body, {
    useFindAndModify: false,
  });
  return data;
};

const deleteOne = async (id:any) => {
  return await Products_data.findByIdAndRemove(id);
};


export const repo_bag={
  deleteOne,update,findAll,findOne,create
}