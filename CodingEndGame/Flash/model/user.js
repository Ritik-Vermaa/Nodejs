const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/testing");

 const userschema = mongoose.Schema({
    username: String,
    nickname : String,
    description : String,
    categories: {
        type : Array,
        default:[]
    },
    datecreated : {
        type :Date,
        default : Date.now()
    }
});

const usermodel = mongoose.model("user" , userschema);


module.exports = usermodel;