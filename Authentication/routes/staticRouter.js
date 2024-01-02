const express = require('express');
const router = express.Router();
const URL = require('../models/url'); 

router.get('/', async (req, res) => {
  try {
    const allurls = await URL.find({});
    return res.render('home', {
      urls: allurls,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal Server Error');
  }
});

router.get('/signup', (req , res) =>{
  return res.render("signup");
} )

module.exports = router;
