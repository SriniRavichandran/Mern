module.exports = (mongoose:any) => {
  const Order_data = mongoose.model(
    "order_data",
    mongoose.Schema({
      email: {
        type: String,
        required: true,
        match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      },
      Address: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
        match: /^[0-9]{10}$/,
      },
      place: {
        type: String,
        require: true,
        match: /^[a-zA-Z ]+$/,
      },
      pincode: {
        type: String,
        required: true,
        match: /^[0-9]{6}$/,
      },
      state: {
        type: String,
        require: true,
      },
      name: {
        type: String,
        require: true,
        match: /^[a-zA-Z ]+$/,
      },
      productid: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      offer: {
        type: Number,
        required: true,
        min: 0,
        max: 100,
      },
      quantity: {
        type: Number,
        required: true,
      },
      value: {
        type: Number,
        required: true,
      },
      discountprice: {
        type: Number,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      orderstatus1: {
        type: String,
        required: true,
      },
      orderdate: {
        type: String,
        required: true,
      },
    })
  );

  return Order_data;
};
