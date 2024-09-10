const asyncHandler = (requestHandller) =>{
    (req,res, next)=>{
        Promise.resolve(requestHandller(req, res, next)).catch((err)=> next(err))
    }
}

export  default asyncHandler;

// const asyncHandler=((fn)=>async ( req,res, next)=>{
//    try {
//      await fn(req,res, next)
//    } catch (error) {
//     res.status(err.code || 500).json({
//         success:false,
//         message: err.message
//     })
//    }
// })


// function banega . async handler is intersting higher order function - higher order function is basicallly are those which takes or accept functions as a parameter or return it basically treating as variable.