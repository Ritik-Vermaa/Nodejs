const express = require('express');
const app = express();
const Port = 7000;
const session = require('express-session');
const flash = require('connect-flash')
const userModel = require('./model/user');
const passport = require('passport');



app.use(session({
    resave : false,
    saveUninitialized:false,
    secret:"hello "
}));

app.use(flash());

app.set("view engine" , "ejs");


app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(userModel.serializeUser);
passport.deserializeUser(userModel.deserializeUser);

app.get('/', (req,res ) => {
    res.render('index');

});

app.get('/failed', (req,res ) => {
    req.flash('age'  , 12)
    req.flash('name'  , 'ritik')
    res.end("bangaya")
});


app.get('/check', (req,res ) => {
   console.log(req.flash('age')); 
   console.log(req.flash('name')); 
   res.end("Ckeck kar lo backend ke terminal pe")
});


app.get('/create' , async (req, res) =>{
  const userdata = await userModel.create({
    username: "ritika",
    nickname : "sarmili",
    description : "I am techer",
    categories: ['hot' , 'maal' , 'top' ,'minded'],
   });
   res.json(userdata);
});

app.get('/find' , async(req, res ) =>{
   let regex =  new RegExp("^riTIk$", 'i');
   const user = await userModel.find({username : regex});
   res.json(user);
})

app.listen(Port , (()=>{
    console.log(`Server Started At ${Port}`);
}))