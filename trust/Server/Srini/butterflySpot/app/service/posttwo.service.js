const postrepo = require("../repository/postTwo");

exports.particulardata = async (req, res) => {
  try {
    const category = req.params.category;
    console.log(category);
    const datas = await postrepo.particulardatas(category);
    if (datas) {
      res.status(200).send(datas);
    } else {
      res.status(404).send("data is not found");
    }
  } catch (err) {
    res.status(404).send("data is not found");
  }
};

// exports.createPost2 = async (req, res) => {
//   try {
//     const post2_data = new Post2Data({
//       category: req.body.category,
//       title: req.body.title,
//       price: req.body.price,
//       brand: req.body.brand,
//       image: req.body.image,
//       offer: req.body.offer,
//     });

//     await post2_data
//       .save(post2_data)
//       .then((data) => {
//         res.send(data);
//       })
//       .catch((err) => {
//         res.status(404).send({
//           message: err.message || "Some error occurred .",
//         });
//       });
//   } catch (error) {
//     res.status(404).send({
//       message: err.message || "Some error occurred .",
//     });
//   }
// };

// exports.deleteAll = async (req, res) => {
//   try {
//     Post2Data.deleteMany({})
//       .then((data) => {
//         res.send({
//           message: `${data.deletedCount} post1 were deleted successfully!`,
//         });
//       })
//       .catch((err) => {
//         res.status(500).send({
//           message: err.message || "Some error occurred ",
//         });
//       });
//   } catch (err) {
//     res.status(404).send({
//       message: err.message || "Some error occurred .",
//     });
//   }
// };

// exports.delete = async (req, res) => {
//   try {
//     const id = req.params.id;

//     await Post2Data.findByIdAndRemove(id)
//       .then((data) => {
//         if (!data) {
//           res.status(404).send({
//             message: `Cannot delete `,
//           });
//         } else {
//           res.send({
//             message: " deleted successfully!",
//           });
//         }
//       })
//       .catch((err) => {
//         res.status(404).send({
//           message: "Could not delete " + id,
//         });
//       });
//   } catch (error) {
//     res.status(404).send({
//       message: "Could not delete " + id,
//     });
//   }
// };

// exports.update = async (req, res) => {
//   try {
//     if (!req.body) {
//       return res.status(400).send({
//         message: "Data to update can not be empty!",
//       });
//     }

//     const id = req.params.id;

//     await Post2Data.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
//       .then((data) => {
//         if (!data) {
//           res.status(404).send({
//             message: `Cannot update data was not found!`,
//           });
//         } else res.send({ message: "Tutorial was updated successfully." });
//       })
//       .catch((err) => {
//         res.status(404).send({
//           message: "Error updating =" + id,
//         });
//       });
//   } catch (err) {
//     res.status(404).send({
//       message: "Error updating =" + id,
//     });
//   }
// };

// exports.findOne = async (req, res) => {
//   try {
//     const id = req.params.id;

//     await Post2Data.findById(id)
//       .then((data) => {
//         if (!data) res.status(404).send({ message: "Not found  " + id });
//         else res.send(data);
//       })
//       .catch((err) => {
//         res.status(404).send({ message: "Error id=" + id });
//       });
//   } catch (error) {
//     res.status(404).send({ message: "Error id=" + id });
//   }
// };

// exports.findAll = async (req, res) => {
//   try {
//     const category = req.query.category;
//     var condition = category ? { category: req.body.category } : {};

//     Post2Data.find(condition)
//       .then((data) => {
//         res.send(data);
//       })
//       .catch((err) => {
//         res.status(404).send({
//           message: err.message || "Some error occurred .",
//         });
//       });
//   } catch (err) {
//     res.status(404).send({
//       message: err.message || "Some error occurred .",
//     });
//   }
// };
