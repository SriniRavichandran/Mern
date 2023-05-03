import db from "../models";
const Favourite_data = db.favourite_data;
import { Request } from "express";

const create = async (favourite_data:any) => {
  const datas = await favourite_data.save(favourite_data);
  return datas;
};

const findAll = async (condition:any) => {
  const datas = await Favourite_data.find(condition);
  return datas;
};

const findOne = async (id:any) => {
  const datas = await Favourite_data.findById(id);
  return datas;
};

const update = async (id:any, req:Request) => {
  const datas = await Favourite_data.findByIdAndUpdate(id, req.body, {
    useFindAndModify: false,
  });
  return datas;
};

const deleteOne = async (id:any) => {
  const datas = await Favourite_data.findByIdAndRemove(id);
  return datas;
};


export const favourite_Repo={
  create,findAll,findOne,update,deleteOne

}