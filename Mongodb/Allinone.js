// const express = require("express");
// const app = express();
// const port = 8001;
// const mongoose = require("mongoose");


// //MiddleWare
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// //connection
// mongoose.connect("mongodb://localhost:27017/mydb")
//     .then(() => console.log("MongoDb Connected"))
//     .catch(err => console.log("Mongo Error", err));

// //schema 
// const userSchema = new mongoose.Schema({
//     firstName:
//     {
//         type: String,
//         required: true,
//     },
//     lastName: {
//         type: String,
//         required: false,
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     job: {
//         type: String,

//     },
//     gender: {
//         type: String,
//     }



// },
//     { timestamps: true }
//     );



// const User = mongoose.model('user', userSchema);


// app.get("/user", async (req, res) =>{
//     const allUser = await User.find({});
    
//     const html = `
//     <ul>
//     ${allUser
//     .map((user) => `<li>${user.firstName} - ${user.email} </li>`).join("")}
//     </ul>
//     `;
//     res.send(html);
    
// });

// app.get("/all/user" , async (req , res ) =>{
//     const allUser = await User.find({});
//     return res.json(allUser);
// });

// app.get("/user/:id" , async (req , res ) =>{
//     const user = await User.findById(req.params.id);
//     return res.json(user);
// });

// app.patch("/user/:id" , async(req, res ) =>{
//     await User.findByIdAndUpdate(req.params.id , {lastNmae : 'Changed'});
//     return res.json({Status : "Success"});

// });

// app.delete("/user/:id" , async(req, res ) =>{
//     await User.findByIdAndDelete(req.params.id);
//     return res.json({Status : "Success"});

// });






// app.post("/user", async (req, res) => {
//     const body = req.body;

//     console.log("Request Body:", body); // Log the request body

//     if (
//         !body ||
//         !body.firstName ||
//         !body.lastName ||
//         !body.email ||
//         !body.job ||
//         !body.gender
//     ) {
//         return res.status(400).json({ msg: "All fields are required." });
//     }

//     const result = await User.create({
//         firstName: body.firstName,
//         lastName: body.lastName,
//         email: body.email,
//         job: body.job,
//         gender: body.gender,
//     });

//     console.log(result);
//     return res.status(201).json({ msg: "Success" });
// });





// app.listen(port, () => {
//     console.log(`Server Started at Port : ${port}`);
// })