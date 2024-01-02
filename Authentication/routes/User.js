const express = require('express');

const router = express.Router();
const { createUser } = require('../controller/User')

router.post('/' ,createUser );



module.exports = router;