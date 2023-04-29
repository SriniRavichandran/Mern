const userService = require("../service/postone.service");

// exports.findOne = async (req, res) => {
//   const user = await userService.findOne(req.params.userId);
//   res.json(user);
// };

// exports.create = async (req, res) => {
//   const user = await userService.create(req.body);
//   res.json(user);
// };

// exports.update = async (req, res) => {
//   const user = await userService.update(req.params.userId, req.body);
//   res.json(user);
// };

// exports.delete = async (req, res) => {
//   await userService.delete(req.params.userId);
//   res.sendStatus(204);
// };

exports.particulardata = async (req, res) => {
  try {
    console.log(req.params.category);
    const user = await userService.particulardata({
      category: req.params.category,
    });
    console.log(user);
    return user && res.status(200).send(user);
  } catch (error) {
    res.status(404).send("not found");
  }
};
