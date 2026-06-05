const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minLength: [3, "Name should be atleast 3 characters"],
      maxLength: 20
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password:{
        type:String,
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    }
  },{ timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;