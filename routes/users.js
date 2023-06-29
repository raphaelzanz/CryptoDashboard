const express = require('express');
const router = express.Router();
const inputValidator=require('../middlewares/joiMiddleware');
const db = require('../middlewares/db-connect');
//const dbConnection = require("../data/connect");
const {
    welcome,
    addUserSymbol
} = require('../controllers/userController');

const {
    symbolValidator,
    userValidator
} = require('../controllers/validatorsController');

// router.get('/welcome', (req,res)=>{
//     console.log("/welcome route")
//     res.status(200).send("Welcome")
// })

router.get('/welcome', welcome);

router.get('/dashboard', (req,res)=>{
    console.log("/dashboard route")
    res.status(200).send("Dashboard")
})

router.get('/logout',(req,res)=>{
    console.log("/logout route")
    res.status(200).send("Logout")

})

router.post('/symbol',inputValidator(symbolValidator),db, addUserSymbol)


module.exports = router;



