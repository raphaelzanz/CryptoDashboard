const express = require('express');
const router = express.Router();

router.get('/welcome', (req,res)=>{
    console.log("/welcome route")
    res.status(200).send("Welcome")
})

router.get('/dashboard', (req,res)=>{
    console.log("/dashboard route")
    res.status(200).send("Dashboard")


})

router.get('/logout', (req,res)=>{
    console.log("/logout route")
    res.status(200).send("Logout")

})

//the symbol will be as req.query? as req.params? in the req.body?
router.post('/symbol', (req,res)=>{
    console.log("/symbol route")
    res.status(200).send("Post symbol")
})

module.exports = router;



