

module.exports = (validator) => async (req,res,next) => {
    try{
        const validated = await validator.validateAsync(req.body);
        console.log("validated = ", validated)
        req.body = validated;
        return next();
    }catch(err){
        if(err.isJoi) {
            return next({status: 422,message: err.message});
        }
        return next({status: 500, message: err.message});
    }

}