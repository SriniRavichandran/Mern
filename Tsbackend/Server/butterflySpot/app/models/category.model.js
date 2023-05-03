module.exports = mongoose => {
  const Category_data = mongoose.model(
    "category_data",
    mongoose.Schema(
      {
         name:String
     
      }
     
    )
  );

  return Category_data ;
};