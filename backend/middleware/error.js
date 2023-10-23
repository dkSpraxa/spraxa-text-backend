const ErrorHandler = require("./ErrorHandler");

module.exports = (err,req,res,next) =>{
    err.message = err.message || "Internal Server Error"
    err.statusCode = err.statusCode  || 500;

    if(err.code === 11000){
        const message = `This ${Object.keys(err.keyValue)} is already registered`
        err = new ErrorHandler(message,400)
    }


    res.status(err.statusCode).json({
        success:false,
        message:err.message
    })
}