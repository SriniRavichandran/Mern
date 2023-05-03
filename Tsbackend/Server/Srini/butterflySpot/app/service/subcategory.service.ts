// const repoSubcatergory = require("../repository/subcategory");
import db from "../models";
const Subcategory_data = db.subcategory_data;
import { subcategoryRepo } from "../repository/subcategory";
import {Request,Response} from "express"

const create = async (req:Request, res:Response) => {
  try {
    const subcategory_datas = new Subcategory_data({
      category: req.body.category,
      subcategory: req.body.subcategory,
      image: req.body.image,
    });
    const datas = await subcategoryRepo.create(subcategory_datas);
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
    const category = req.query.category;
    var condition:any = category ? { category: category } : { condition };
    const datas = await subcategoryRepo.findAll(condition);
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
    const category = req.params.category;

    const data = await subcategoryRepo.findOne(category);
    console.log(data);
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(404).send("some error occured");
    }
  } catch (err) {
    res.status(404).send({ message: "Error id" });
  }
};

const update = async (req:Request, res:Response) => {
  try {
    const id = req.params.id;

    const datas = subcategoryRepo.update(id, req);
    if (datas) {
      res.status(200).send(datas);
    } else {
      res.status(404).send({ message: "Error id=" });
    }
  } catch (err) {
    res.status(404).send({ message: "Error id=" });
  }
};

const deleteOne = async (req:Request, res:Response) => {
  try {
    const id = req.params.id;

    await subcategoryRepo
      .deleteOne(id)
      .then((resp) => res.send("successfully deleted"))
      .catch((err) => {
        res.send("could not delete");
      });
  } catch (err) {
    res.status(404).send({
      message: "Could not delete ",
    });
  }
};


export const service_Subcategory={
deleteOne,findAll,findOne,create,update
}