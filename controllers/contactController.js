
const asyncHandler =require("express-async-handler")
const Contact = require("../model/contactModel")
//@desc Get all contacts
//@route Get /api/contacts
//@access public

const getContacts = asyncHandler( async(req, res) =>{
    const contacts= await Contact.find({user_id:req.user.id})
    res.status(200).json(contacts);
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
   
    const contact=await Contact.create({name,email,phone,user_id:req.user.id})
    res.status(201).json(contact)
})

//@desc Get contact
//@route Get /api/contact/:id
//@access public
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});
//@desc Update contact
//@route Get /api/contact/:id
//@access public  
const updateContact=asyncHandler(async(req , res)=>{
 const contact =await Contact.findById(req.params.id);
 if(!contact){
    res.status(404)
    throw new Error("Contact not found")
 }
if(contact.user_id!==req.user.id){
    res.status(403)
    throw new Error("user don't have permission to update other user contacts")
}
 const updatedContact = await Contact.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json({message:'updated Successfully'})
})
//@desc Delete contact
//@route Get /api/contact/:id
//@access public
const deleteContact =asyncHandler(async(req, res)=>{
    const contact =await Contact.findById(req.params.id);
    if(!contact){
        res.status(404)
        throw new Error('contact not Found')
    }
    if(contact.user_id.toString()!==req.user.id){
        res.status(403)
        throw new Error("user don't have permission to delete other user contacts")
    }
    const deleteContact= await Contact.findByIdAndDelete(req.params.id)
    res.status(200).json({message:` Delete contact for ${req.params.id}`,deleteContact:deleteContact})
})
module.exports={getContacts,createContact,updateContact,getContact,deleteContact}