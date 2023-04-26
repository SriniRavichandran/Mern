module.exports = mongoose => {
    const Products_data = mongoose.model(
      "products_data",
      mongoose.Schema(
        {
          
            category: String,
            subcategory: String,
            title: String,
            price: Number,
            brand: String,
            offer: Number,
            description: String,
            image: String
       
        },
        { timestamps: true }
      )
    );
  
    return Products_data ;
  };