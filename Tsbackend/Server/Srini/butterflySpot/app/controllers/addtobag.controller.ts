import { Service_bag } from "../service/addtobag.service";
import {Request,Response} from "express"

const create = (req: Request, res:Response) => {

  Service_bag.create(req, res);
  
};

const findAll = (req:Request, res:Response) => {
  Service_bag.findAll(req, res);
};

const findOne = (req:Request, res:Response) => {
  Service_bag.findOne(req, res);
};

const update = (req:Request, res:Response) => {
  Service_bag.update(req, res);
};

const deleteOne = (req:Request, res:Response) => {
  Service_bag.deleteOne(req, res);
};

export const bag ={
  create,findAll,findOne,update,deleteOne
}