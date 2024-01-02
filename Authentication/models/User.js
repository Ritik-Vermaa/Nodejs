const monogoose = require("mongoose");

const userSchema = new monogoose.Schema({
    name :{
        type : String,
        required : true,
    },
    email:{
        type: String,
        required : true,
        unique : true,
    },
    password:{
        type : String,
        required : true,
    },

}, {timestamps : true})

const User = monogoose.model('user' , userSchema);

module.exports = User;