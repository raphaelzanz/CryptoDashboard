const UserModel = require("../models/user-symbol");


const addUserSymbol = (req,res,next) => {
    //console.log("in add user symbol controller")
    try{
        const addUser = new UserModel(req.db);
        addUser.add({
            userId: "1234",
            symbol:req.body.symbol,
        });
    }catch(e){
        console.log("userController/addUSerSymbol:error ->",e)
    }
    res.status(200).send(req.body);
}

const welcome = (req,res,next) => {
    res.send("Welcome user")

}



module.exports = {
    addUserSymbol,
    welcome,
}