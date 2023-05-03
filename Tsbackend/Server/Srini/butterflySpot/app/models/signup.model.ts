module.exports = (mongoose:any) => {
  const Register = mongoose.model(
    "signup_data",
    mongoose.Schema(
      {
        email: {
          type: String,
          required: true,
          unique: [true, { message: "Email already exists" }],
          match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address"],
        },
        password: {
          type: String,
          required: true,
          minlength: 3,
          maxlength: 50,
          match: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
        },
        role: {
          type: String,
          required: true,
          match: /^[a-zA-Z ]+$/,
        },
        firstname: {
          type: String,
          required: true,
          minlength: 3,
          maxlength: 50,
          match: /^[a-zA-Z ]+$/,
        },
        lastname: {
          type: String,
          required: true,
          minlength: 3,
          maxlength: 50,
          match: /^[a-zA-Z ]+$/,
        },
        phoneno: {
          type: String,
          required: true,
          match: /^[0-9]{10}$/,
        },
        status: {
          type: String,
          required: true,
        },
        gender: {
          type: String,
          required: true,
        },
        dateofbrith: {
          type: String,
        },
      },
      { timestamps: true }
    )
  );

  return Register;
};
