const post1Repository = require("../repository/postOne");

class UserService {
  // async findOne(post1Id) {
  //   const user = await post1Repository.findById(post1Id);
  //   return user;
  // }

  // async create(post1Data) {
  //   const user = await post1Repository.create(post1Data);
  //   return user;
  // }

  // async update(post1Id, post1Data) {
  //   const user = await post1Repository.update(post1Id, post1Data);
  //   return user;
  // }

  // async delete(post1Id) {
  //   await post1Repository.delete(post1Id);
  // }

  async particulardata(postcategory) {
    console.log("service" + postcategory);
    const post1data = await post1Repository.particulardata(postcategory);
    return post1data;
  }
}

module.exports = new UserService();
