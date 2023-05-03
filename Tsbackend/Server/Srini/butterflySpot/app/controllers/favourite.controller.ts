// const favouriteService = require("../service/favourite.service");

import { serviceFavourite } from "../service/favourite.service";
import { Request,Response } from "express";

const create = (req:Request, res:Response) => {
  serviceFavourite.create(req, res);
};

const findAll = (req:Request, res:Response) => {
  serviceFavourite.findAll(req, res);
};

const findOne = (req:Request, res:Response) => {
  serviceFavourite.findOne(req, res);
};

const update = (req:Request, res:Response) => {
  serviceFavourite.update(req, res);
};

const deleteOne = (req:Request, res:Response) => {
  serviceFavourite.deleteOne(req, res);
};

const particularData = (req:Request, res:Response) => {
  serviceFavourite.particularData(req, res);
};


export const controllerFavourite={
  create,findAll,findOne,update,deleteOne,particularData
}