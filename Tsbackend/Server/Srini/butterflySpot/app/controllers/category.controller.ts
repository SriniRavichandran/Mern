// const serviceCategory = require("../service/category.service");

import { serviceCaterogy } from "../service/category.service";
import { Request,Response } from "express";


const create = (req:Request, res:Response) => {
  console.log("category datas ",req)
  serviceCaterogy.create(req, res);
};

const findAll = (req:Request, res:Response) => {
  serviceCaterogy.findAll(req, res);
};

const findOne = (req:Request, res:Response) => {
  serviceCaterogy.findOne(req, res);
};

const update = (req:Request, res:Response) => {
  serviceCaterogy.update(req, res);
};

const deleteOne = (req:Request, res:Response) => {
  serviceCaterogy.deleteOne(req, res);
};

export const controllerCategory={
create,findAll,findOne,update,deleteOne
}