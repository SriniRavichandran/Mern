module.exports = (mongoose:any) => {
  const Favourite_data = mongoose.model(
    "favourite_data",
    mongoose.Schema({
      image: {
        type: String,
        required: true,
      },
      productid: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 300,
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
      email: {
        type: String,
        required: true,
        match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      },
      order: {
        type: String,
        required: true,
      },
    })
  );

  return Favourite_data;
};
