import db from "../models";
const Products_data = db.products_data;
import { Request } from "express";

const create = async (products_data:any) => {
  const datas = await products_data.save(products_data);
  return datas;
};

const findAll = async (condition:any) => {
  const datas = await Products_data.find(condition);
  return datas;
};

const particularData = async (condition:any) => {
  const datas = await Products_data.find(condition);
  return datas;
};

const findOne = async (id:any) => {
  const datas = await Products_data.findById(id);
  return datas;
};

const update = async (id:any, req:Request) => {
  const datas = await Products_data.findByIdAndUpdate(id, req.body, {
    useFindAndModify: false,
  });
  return datas;
};

const deleteOne = async (id:any) => {
  const datas = await Products_data.findByIdAndRemove(id);
  return datas;
};


export const repo_Product={
deleteOne,update,findAll,findOne,particularData,create
}