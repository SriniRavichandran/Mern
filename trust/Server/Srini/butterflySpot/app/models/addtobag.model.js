module.exports = mongoose => {
    const Addtobag_data = mongoose.model(
      "addtobag_datas",
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
  
    return Addtobag_data ;
  };