import db from "../models";
const Post1Data = db.post1_data;

// class UserRepository {
  // async findById(post1Id) {
  //   const Post1Data = await Post1Data.findById(post1Id);
  //   return Post1Data;
  // }

  // async create() {
  //   const Post1Data = await Post1Data.save(Post1Data);
  //   return Post1Data;
  // }

  // async update(post1Id, post1Data) {
  //   const Post1Data = await Post1Data.findByIdAndUpdate(post1Id, post1Data, {
  //     new: true,
  //   });
  //   return Post1Data;
  // }

  // async delete(post1Id) {
  //   await Post1Data.findByIdAndDelete(post1Id);
  // }

//   async particulardata(postcategory:any) {
//     console.log(postcategory);
//     const post1Data = await Post1Data.find(postcategory);
//     console.log(post1Data);
//     return post1Data;
//   }
// }

// module.exports = new UserRepository();


const particulardata=async(postcategory:any)=>{
  console.log(postcategory);
  const post1Data = await Post1Data.find(postcategory);
  console.log(post1Data);
  return post1Data;
}

export const postoneRepo={
  particulardata
}