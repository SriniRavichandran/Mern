import db from "../models";
const Subcategory_data = db.subcategory_data;
import { Request } from "express";

const create = async (subcategory:any) => {
  const datas = await subcategory.save(subcategory);
  return datas;
};

const findAll = async (condition:any) => {
  const datas = Subcategory_data.find(condition);
  return datas;
};

const update = async (id:String, req:Request) => {
  const datas = Subcategory_data.findByIdAndUpdate(id, req.body, {
    useFindAndModify: false,
  });

  return datas;
};

const deleteOne = async (id:String) => {
  return await Subcategory_data.findByIdAndRemove(id);
};

const findOne = async (category:String) => {
  const datas = await Subcategory_data.find({ category: category });
  return datas;
};


export const subcategoryRepo={
  create,findAll,update,deleteOne,findOne
}