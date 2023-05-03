import db from "../models";
const Category_data = db.category_data;

import {Request} from "express"

const findAll = async () => {
  const users = await Category_data.find({});
  return users;
};

const create = async (name:String) => {
  const category_data = new Category_data({
    name: name,
  });
  console.log(name);
  const datas = category_data.save(category_data);

  return datas;
};

const findOne = async (id:any) => {
  const datas = await Category_data.findById(id);

  return datas;
};
const update = async (id:any, req:Request) => {
  console.log("datas : "+req.body)
  const datas = await Category_data.findByIdAndUpdate(id,req.body, {
    useFindAndModify: false,
  });
  return datas;
};

const deleteOne = async (id:any) => {
  return await Category_data.findByIdAndRemove(id);
};


export const categoryRepo={
  deleteOne,create,findAll,findOne,update
}