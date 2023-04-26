module.exports = mongoose => {
    const Order_data = mongoose.model(
      "order_data",
      mongoose.Schema(
        {
          
    email: String,
    Address: String,
    phone: Number,
    place: String,
    pincode:Number,
    state: String,
    name: String,
    productid: String,
    title:String,
    price: Number,
    offer: Number,
    quantity: Number,
    value: Number,
    discountprice: Number,
    image: String,
    orderstatus1: Number,
    orderdate: String
       
        }
       
      )
    );
  
    return Order_data ;
  };