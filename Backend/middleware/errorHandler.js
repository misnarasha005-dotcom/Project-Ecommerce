function errorHandler(err, req, res, next){
    res.status(500).json({
    message: "Internal server error",
    stack: err.stack,
    status: err.status || 500
    }) 
}

module.exports = errorHandler