const error = (error,req,res,next) => {
    //console.log("err status = ", error.status)
    console.log("in error handler->", error)
    res.status(error.status || 400).send(error);
}
module.exports = error;