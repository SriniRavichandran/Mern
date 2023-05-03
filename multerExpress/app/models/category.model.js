module.exports = (mongoose) => {
  const Category_data = mongoose.model(
    "category_data",
    mongoose.Schema(
      {
        name: {
          type: String,
          required: true,
          minlength: 3,
          maxlength: 15,
          match: /^[a-zA-Z ]+$/,
        },
      },
      { timestamps: true }
    )
  );

  return Category_data;
};
