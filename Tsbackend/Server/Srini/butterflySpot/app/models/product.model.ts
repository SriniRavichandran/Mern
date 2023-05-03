module.exports = (mongoose:any) => {
  const Products_data = mongoose.model(
    "products_data",
    mongoose.Schema(
      {
        category: {
          type: String,
          required: true,
          minlength: 3,
          maxlength: 15,
          match: /^[a-zA-Z ]+$/,
        },
        subcategory: {
          type: String,
          required: true,
          minlength: 3,
          maxlength: 15,
          match: /^[a-zA-Z ]+$/,
        },
        title: {
          type: String,
          required: true,
          minlength: 3,
          maxlength: 50,
          match: /^[a-zA-Z ]+$/,
        },
        price: Number,
        brand: {
          type: String,
          required: true,
          minlength: 3,
          maxlength: 15,
          match: /^[a-zA-Z ]+$/,
        },
        offer: {
          type: Number,
          required: true,
          min: 1,
          max: 100,
        },
        description: {
          type: String,
          required: true,
          minlength: 3,
          maxlength: 300,
          match: /^[a-zA-Z ]+$/,
        },
        image: String,
      },
      { timestamps: true }
    )
  );

  return Products_data;
};
