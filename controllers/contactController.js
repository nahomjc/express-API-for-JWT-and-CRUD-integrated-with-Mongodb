
const asyncHandler =require("express-async-handler")
const Contact = require("../model/contactModel")
//@desc Get all contacts
//@route Get /api/contacts
//@access public

const getContacts = asyncHandler( async(req, res) =>{
    const contact= await Contact.find()
    res.status(200).json(contact);
})


//@desc Create New contact
//@route Post /api/contacts
//@access public
const createContact =  asyncHandler(  async(req , res)=>{
    console.log('requested body',req.body)
    const {name ,email,phone}=req.body
    if(!name||!email||!phone){
        res.status(400)
        throw new Error('all Fields are required')

    }
    const contact=await Contact.create({name,email,phone})
    res.status(201).json(contact)
})

//@desc Get contact
//@route Get /api/contact/:id
//@access public
const getContact =asyncHandler(async(req, res)=>{
    res.status(200).json({message:`Get contact for ${req.params.id}`});
})
//@desc Update contact
//@route Get /api/contact/:id
//@access public
const updateContact=asyncHandler(async(req , res)=>{
 
    res.status(200).json({message:` Update contact for ${req.params.id}`})
})
//@desc Delete contact
//@route Get /api/contact/:id
//@access public
const deleteContact =asyncHandler(async(req, res)=>{
    res.status(200).json({message:` Delete contact for ${req.params.id}`})
})
module.exports={getContacts,createContact,updateContact,getContact,deleteContact}