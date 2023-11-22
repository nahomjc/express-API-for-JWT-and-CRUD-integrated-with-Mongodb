
const constants=require('../constants');
const errorHandler =(err,req,res,next)=>{

    const statusCode = res.statusCode?res.statusCode:500;

    switch (statusCode) {

    case constants.VALIDATION_ERROR:
    res.json({title:"Validation Failed",message:err.message,stackTrace:err.stack});
    break;
    case constants.NOT_FOUND:
    res.json({title:"Not found",message:err.message,stackTrace})
  
    case constants.UNAUTHORIZED:
    res.json({title:"unautorized",message:err.message,stackTrace})
    case constants.FORBIDDEN:
        res.json({title:"Forbidden",message:err.message,stackTrace})
    
   
    case constants. SERVER_ERROR:
    res.json({title:"Server_error",message:err.message,stackTrace})
    break;
    default: console.log('no Error, ALL fine')
    break;

    }
}

module.exports=errorHandler