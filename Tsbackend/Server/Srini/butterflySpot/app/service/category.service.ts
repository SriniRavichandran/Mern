// const repoCategory = require("../repository/category");

import { categoryRepo } from "../repository/category";
import {Request,Response} from "express"



const create = async (req:Request, res:Response) => {
  try {
    const datas = await categoryRepo.create(req.body.name);
    if (datas) {
      res.status(200).send(datas);
    } else {
     
        res.status(404).send("data is null");
      
    }
  } catch (err) {
    res.status(404).send("data is null");
  }
};

const findAll = async (req:Request, res:Response) => {
  try {
    const datas = await categoryRepo.findAll();
    if (datas) {
      res.status(200).send(datas);
    } else {
      
        res.status(404).send("data is null");
      
    }
  } catch (err) {
    res.status(404).send("data is null");
  }
};

const findOne = async (req:Request, res:Response) => {
  try {
    const datas = await categoryRepo.findOne(req.params.id);
    if (datas) {
      res.status(200).send(datas);
    } else {
    
        res.status(404).send("data is null");
      
    }
  } catch (err) {
    res.status(404).send("data is null");
  }
};

const update = async (req:Request, res:Response) => {
  try {
    const datas:any = await categoryRepo.update(req.params.id, req);
    if (datas) {
      res.status(200).send(datas);
    } else {
      throw new Error("Something went wrong");
      // res.status(404).send("data is null");
    }
  } catch (err) {
     res.status(404).send("data is null");
  }
};

const deleteOne = async (req:Request, res:Response) => {
  try {
    await categoryRepo
      .deleteOne(req.params.id)
      .then((res) => {
        res.send("okay");
      })
      .catch((err) => {
        res.send("not okay" + err.message);
      });
  } catch (err) {
    res.status(404).send("data is null");
  }
};


export const serviceCaterogy={
  create,update,findAll,findOne,deleteOne
}