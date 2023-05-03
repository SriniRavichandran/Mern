// const subcategoryService = require("../service/subcategory.service");

import { service_Subcategory } from "../service/subcategory.service";
import {Request,Response} from "express"


const create = async (req:Request, res:Response) => {
  service_Subcategory.create(req, res);
};

const findAll = (req:Request, res:Response) => {
  service_Subcategory.findAll(req, res);
};

const findOne = (req:Request, res:Response) => {
  service_Subcategory.findOne(req, res);
};

const update = (req:Request, res:Response) => {
  service_Subcategory.update(req, res);
};

const deleteOne = (req:Request, res:Response) => {
  service_Subcategory.deleteOne(req, res);
};


export const controller_subcategory={
create,findAll,findOne,update,deleteOne
}