const db = require("../models");
const Products_data = db.products_data;

const productRepo = require("../repository/product");

exports.create = async (req, res) => {
  try {
    const products_data = new Products_data({
      category: req.body.category,
      subcategory: req.body.subcategory,
      title: req.body.title,
      price: req.body.price,
      brand: req.body.brand,
      offer: req.body.offer,
      description: req.body.description,
      image: req.body.image,
    });
    console.log(req.body.name);
    const datas = await productRepo.create(products_data);
    if (datas) {
      res.send(datas);
    } else {
      res.status(404).send({
        message: err.message || "Some error occurred .",
      });
    }
  } catch (err) {
    res.status(404).send({
      message: err.message || "Some error occurred .",
    });
  }
};

exports.findAll = async (req, res) => {
  try {
    const category = req.query.category;
    var condition = category ? { category: category } : {};

    const datas = await productRepo.findAll(condition);
    if (datas) {
      res.send(datas);
    } else {
      res.status(404).send({
        message: err.message || "Some error occurred .",
      });
    }
  } catch (err) {
    res.status(404).send({
      message: err.message || "Some error occurred .",
    });
  }
};

exports.particularData = async (req, res) => {
  try {
    const subcategory = req.params.subcategory;

    var condition = subcategory ? { subcategory: subcategory } : {};

    const datas = await productRepo.particularData(condition);

    if (datas) {
      res.send(datas);
    } else {
      res.status(404).send({
        message: err.message || "Some error occurred .",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred .",
    });
  }
};

exports.findOne = async (req, res) => {
  try {
    const id = req.params.id;

    const datas = await productRepo.findOne(id);
    if (datas) {
      res.send(datas);
    } else {
      res.status(404).send({
        message: err.message || "Some error occurred .",
      });
    }
  } catch (err) {
    res.status(404).send({ message: "Error id=" });
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;

    const datas = await productRepo.update(id, req);
    if (datas) {
      res.send(datas);
    } else {
      res.status(404).send({
        message: err.message || "Some error occurred .",
      });
    }
  } catch (err) {
    res.status(404).send({
      message: "Error updating = id",
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const id = req.params.id;

    const datas = await productRepo.delete(id);
    if (datas) {
      res.send(datas);
    } else {
      res.send({
        message: " deleted successfully!",
      });
    }
  } catch (err) {
    res.status(404).send({
      message: "Could not delete ",
    });
  }
};
