const db = require("../models");
const Favourite_data = db.favourite_data;

const Favouriterepo = require("../repository/favourite");

exports.create = async (req, res) => {
  try {
    const favourite_data = new Favourite_data({
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

    const datas = await Favouriterepo.create(favourite_data);
    if (datas) {
      res.status(200).send(datas);
    } else {
      res.status(400).send("data not found");
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

    const datas = await Favouriterepo.findAll(condition);
    if (datas) {
      res.status(200).send(datas);
    } else {
      res.status(400).send("data not found");
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
    const datas = await Favouriterepo.findOne(id);
    if (datas) {
      res.status(200).send(datas);
    } else {
      res.status(400).send("data not found");
    }
  } catch (err) {
    res.status(404).send({ message: "Error id=" });
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const datas = await Favouriterepo.update(id, req);
    if (datas) {
      res.status(200).send(datas);
    } else {
      res.status(400).send("data not found");
    }
  } catch (err) {
    res.status(404).send({
      message: "Error updating",
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const id = req.params.id;

    const datas = await Favouriterepo.delete(id);
    if (datas) {
      res.status(200).send(datas);
    } else {
      res.status(400).send("data not found");
    }
  } catch (err) {
    res.status(404).send({
      message: "Could not delete ",
    });
  }
};

exports.particularData = async (req, res) => {
  try {
    const email = req.params.email;
    console.log("SDFGDF" + email);

    var condition = email ? { email: email } : {};

    await Favourite_data.find({ email: email })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred .",
        });
      });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred .",
    });
  }
};
