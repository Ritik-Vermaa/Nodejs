const express = require("express");
const app = express();
const port = 8001;

const userRouter = require("./routes/user");
const {connectMongoDb} = require("./Db/connection");

connectMongoDb("mongodb://localhost:27017/mydb").then(()=>{
    console.log("Db Connected");
});

//MiddleWare Plugin
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




//Routes 
app.use("/user" ,userRouter);

app.listen(port, () => {
    console.log(`Server Started at Port : ${port}`);
})