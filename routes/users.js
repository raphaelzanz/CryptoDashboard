const express = require('express');
const router = express.Router();
const inputValidator=require('../middlewares/joiMiddleware');
const {
    addUser
} = require('../controllers/userController')
const {
    symbolValidator,
    userValidator
} = require('../controllers/validatorsController');

router.get('/welcome', (req,res)=>{
    console.log("/welcome route")
    res.status(200).send("Welcome")
})

router.get('/dashboard', (req,res)=>{
    console.log("/dashboard route")
    res.status(200).send("Dashboard")
})

router.get('/logout',(req,res)=>{
    console.log("/logout route")
    res.status(200).send("Logout")

})

//the symbol will be as req.query? as req.params? in the req.body?
router.post('/symbol',inputValidator(symbolValidator), (req,res)=>{
    console.log("POST /symbol route", req.body)
    res.status(200).send(req.body)
})

router.post('/user', inputValidator(userValidator), addUser)
// router.post('/user', inputValidator(userValidator), (req,res)=>{
//     //console.log("POST /user route", req.body);
//     //res.status(200).send(req.body)
// })

module.exports = router;



