

const addUser = (req,res,next) => {
    console.log("in add user controller")
    res.status(200).send(req.body);
}



module.exports = {
    addUser,
}