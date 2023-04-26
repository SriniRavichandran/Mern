module.exports = mongoose => {
    const Register_login = mongoose.model(
      "reg-log",
      mongoose.Schema(
        {
         name:String,
         email:String,
         password:String,
         role:String,
         token:String
        },
        { timestamps: true }
      )
    );
  
    return Register_login ;
  };