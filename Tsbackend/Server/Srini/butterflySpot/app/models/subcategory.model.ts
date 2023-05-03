module.exports = (mongoose:any) => {
  const Subcategory_data = mongoose.model(
    "subcategory_data",
    mongoose.Schema(
      {
        category: {
          type: String,
          required: true,
          minlength: 3,
          maxlength: 50,
          match: /^[a-zA-Z ]+$/,
        },
        subcategory: {
          type: String,
          required: true,
          minlength: 3,
          maxlength: 50,
          match: /^[a-zA-Z ]+$/,
        },
        image: {
          type: String,
        },
      },
      { timestamps: true }
    )
  );

  return Subcategory_data;
};
