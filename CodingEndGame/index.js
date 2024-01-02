const express = require('express');
const app = express();
const Port = 3001;
const userDb = require('./model/user')
const session = require('express-session')


//session
app.use(session({
    resave : false,
    saveUninitialized:false,
    secret:"holabhola"
}));


//ejs file setup
app.set("view engine", "ejs")

//static file steup
app.use(express.static('./public'))


app.get('/', (req, res) => {
    req.session.mag = "Hello";
    res.render('index')
})

app.get('/checkmag' , (req,res ) =>{
    console.log(req.session);
})

app.get('/create',async (req, res) => {
    const createduser = await userDb.create({
        username: "ritik",
        name: "Ritik",
        age: 19,
    });
    res.json(createduser);
});


app.listen(Port, () => {
    console.log('Server Strted at Port ', Port);
})