const express = require("express");
const router = express.Router();
const {handleGetAllUsers , getUserById , updateUser , deleteUser , createUser} = require("../controllers/user")




// router.get("/", handleGetAllUsers);
// router.post("/", createUser);
// ya

router.route("/")
.get(handleGetAllUsers)
.post(createUser);

// router.get("/:id", getUserById);
// router.patch("/:id", updateUser);
// router.delete("/:id", deleteUser);

// ya
router.route("/:id")
.get(getUserById)
.patch(updateUser)
.delete(deleteUser);


module.exports = router;