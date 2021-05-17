const express = require('express');
const router = express.Router()
// login/landingpage
//get/
router.get('/' , (req , res) => {
    res.send('login')
})
// dashboard/landingpage
//get/
router.get('/dashboard' , (req , res) => {
    res.send('dashboard')
})
module.exports =  router;