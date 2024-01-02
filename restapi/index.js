const express = require("express");
const port = 8000;
const app = express();
const data = require("./MOCK_DATA.json");
const fs = require("fs");

//Middleware
app.use(express.urlencoded({ extended: false }));

//Custom Middleware
app.use((req, res, next) => {
    fs.appendFile('log.txt', `\n${Date.now()} : ${req.method} : ${req.path}\n `, (err, data) => {
        console.log("Hello From Middleware 1 ");
        req.myUserName = "Ritik Verma";
        next();
    })


});

app.use((req, res, next) => {
    console.log("Hello From Middleware 2", req.myUserName);
    //db query
    // credit card info
    next();
});

//Routes
app.get('/', (req, res) => {
    res.setHeader('X-MyName' , "Ritik Verma");
    return res.end("Home Page");
})

app.get("/users", (req, res) => {
    return res.json(data);
})

app.route("/users/:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = data.find((user) => user.id === id);
        return res.json(user);
    })
    .patch((req, res) => {
        //Update user
        return res.json({ status: 'pending' })
    })

    .delete((req, res) => {
        //Delete User
        return res.json({ status: 'pending' })
    })



app.post("/users", (req, res) => {
    const body = req.body;
    console.log(body);
    return res.status(201).json({ status: 'pending' })

})









app.listen(port, () => {
    console.log(`Server Started at Port : ${port}`);
})