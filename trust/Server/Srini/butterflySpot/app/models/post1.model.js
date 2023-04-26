module.exports = mongoose => {
    const Post1 = mongoose.model(
      "post1_data",
      mongoose.Schema(
        {
          
    category: String,
    title: String,
    price:Number,
    brand: String,
    image: String,
    offer: Number
       
        },
        { timestamps: true }
      )
    );
  
    return Post1 ;
  };