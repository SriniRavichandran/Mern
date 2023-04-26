module.exports = mongoose => {
    const Post2 = mongoose.model(
      "post2_data",
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
  
    return Post2 ;
  };