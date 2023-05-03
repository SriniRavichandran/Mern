module.exports = mongoose => {
    const Favourite_data = mongoose.model(
      "favourite_data",
      mongoose.Schema(
        {
          
            image: String,
            productid: String,
            title: String,
            price: Number,
            offer: Number,
            quantity: Number,
            value: Number,
            discountprice: Number,
            email: String,
            order: String
           
       
        }
       
      )
    );
  
    return Favourite_data ;
  };