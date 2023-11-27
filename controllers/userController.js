const asyncHandler =require("express-async-handler")
//@desc Register a user
//@route Post /api/users/Register
//@access public
const registerUser = asyncHandler( async(req,res)=>{
    res.json({message:"Register the user"})
    })
//@desc login a user
//@route Post /api/users/login
//@access public
const loginUser = asyncHandler( async(req,res)=>{ 

    res.json({message:'logged in user'})
})
//@desc current user
//@route get /api/users/current
//@access public
const currentUser=asyncHandler(async(req,res)=>{
    res.json({message:'current user'})
})



    module.exports={registerUser,loginUser,currentUser}