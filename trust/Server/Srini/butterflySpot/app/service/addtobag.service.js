const db = require("../models");
const Products_data = db.addtobag_data;

const addtobagRepo = require("../repository/addtobag");

exports.create = async (req, res) => {
  try {
    const product_data = new Products_data({
      image: req.body.image,
      productid: req.body.productid,
      title: req.body.title,
      price: req.body.price,
      offer: req.body.offer,
      quantity: req.body.quantity,
      value: req.body.value,
      discountprice: req.body.discountprice,
      email: req.body.email,
      order: req.body.order,
    });
    console.log(req.body.name);

    const datas = await addtobagRepo.create(product_data);
    if (datas) {
      res.status(200).send(datas);
    } else {
      res.status(404).send("data not found");
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

    const datas = await addtobagRepo.findAll(condition);
    if (datas) {
      res.status(200).send(datas);
    } else {
      res.status(404).send("data not found");
    }
  } catch (err) {
    res.status(404).send({
      message: err.message || "Some error occurred .",
    });
  }
};

exports.findOne = async (req, res) => {
  try {
    const id = req.params.id;

    const datas = await addtobagRepo.findOne(id);
    if (datas) {
      res.status(200).send(datas);
    } else {
      res.status(404).send("data not found");
    }
  } catch (err) {
    res.status(404).send({ message: "Error id=" });
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const datas = await addtobagRepo.update(id, req);
    if (datas) {
      res.status(200).send(datas);
    } else {
      res.status(404).send("data not found");
    }
  } catch (err) {
    res.status(404).send({
      message: "Error updating =" + id,
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const id = req.params.id;

    const data = await addtobagRepo.delete(id);
    if (data) {
      res.status(200).send({
        message: "Successfully deleted ",
      });
    }
  } catch (err) {
    res.status(404).send({
      message: "Could not delete ",
    });
  }
};
