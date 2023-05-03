module.exports = mongoose => {
    const Register = mongoose.model(
      "signup_data",
      mongoose.Schema(
        {
            email: String,
            password: String,
            role: String,
            firstname:String,
            lastname: String,
            phoneno: String,
            status: String,
       
        },
        { timestamps: true }
      )
    );
  
    return Register ;
  };