//  const post1Repository = require("../repository/postOne");
import { postoneRepo } from "../repository/postOne";

//import UserRepository from "../repository/postOne";

// class UserService {
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

//   async particulardata(postcategory:any) {
//     console.log("service" + postcategory);
//     const post1data = await postoneRepo.particulardata(postcategory);
//     return post1data;
//   }
// }

const particulardata=async(postcategory:any)=>{
  console.log("service" + postcategory);
  const post1data = await postoneRepo.particulardata(postcategory);
  return post1data;
}

export const servicePostone={
  particulardata
}
