const User = require("../models/user");

async function handleGetAllUsers(req, res) {
    const allUser = await User.find({});
    return res.json(allUser);
}

async function getUserById(req, res){
    const user = await User.findById(req.params.id);
    return res.json(user);
}

async function updateUser(req, res ){
    await User.findByIdAndUpdate(req.params.id, { lastNmae: 'Changed' });
    return res.json({ Status: "Success" });
}

async function deleteUser(req, res ){
    await User.findByIdAndDelete(req.params.id);
    return res.json({ Status: "Success" });
}

async function createUser(req , res){
    const body = req.body;

    console.log("Request Body:", body); // Log the request body

    if (
        !body ||
        !body.firstName ||
        !body.lastName ||
        !body.email ||
        !body.job ||
        !body.gender
    ) {
        return res.status(400).json({ msg: "All fields are required." });
    }

    const result = await User.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        job: body.job,
        gender: body.gender,
    });

    console.log(result);
    return res.status(201).json({ msg: "Success" , id: result._id });
}
module.exports = {
    handleGetAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    createUser,
};