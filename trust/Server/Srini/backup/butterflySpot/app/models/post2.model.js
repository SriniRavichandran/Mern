module.exports = (mongoose) => {
  const Post2 = mongoose.model(
    "post2_data",
    mongoose.Schema(
      {
        category: {
          type: String,
          required: true,
          minlength: 3,
          maxlength: 15,
          match: /^[a-zA-Z ]+$/,
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
        brand: {
          type: String,
          required: true,
          minlength: 3,
          maxlength: 15,
        },
        image: {
          type: String,
          required: true,
        },
        offer: {
          type: Number,
          required: true,
          min: 0,
          max: 100,
        },
      },
      { timestamps: true }
    )
  );

  return Post2;
};
