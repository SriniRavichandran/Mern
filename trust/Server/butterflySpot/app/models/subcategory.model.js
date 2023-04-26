module.exports = mongoose => {
    const Subcategory_data = mongoose.model(
      "subcategory_data",
      mongoose.Schema(
        {
          
            category: String,
            subcategory: String,
            image: String
       
        },
        { timestamps: true }
      )
    );
  
    return Subcategory_data ;
  };