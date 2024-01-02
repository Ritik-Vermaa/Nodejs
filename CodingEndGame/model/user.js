const mongoose = require('mongoose');


//setup and databse creation
mongoose.connect("mongodb://localhost:27017/user");


//schema(documnet) creation
const userschema = mongoose.Schema({
    username:String,
    name:String,
    age : Number,
})


// crate model(collection)
 const usermodel = mongoose.model("user" , userschema);

 module.exports= usermodel;


