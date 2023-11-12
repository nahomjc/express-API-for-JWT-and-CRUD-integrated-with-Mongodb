//@desc Get all contacts
//@route Get /api/contacts
//@access public

const getContacts = (req, res) =>{
    res.status(200).json({message:"Get all contacts"});
}


//@desc Create New contact
//@route Post /api/contacts
//@access public
const createContact = (req , res)=>{
    res.status(201).json({message:"Create"})
}

//@desc Get contact
//@route Get /api/contact/:id
//@access public
const getContact =(req, res)=>{
    res.status(200).json({message:`Get conact for ${req.params.id}`});
}
//@desc Update contact
//@route Get /api/contact/:id
//@access public
const updateContact=(req , res)=>{
 
    res.status(200).json({message:` Update contact for ${req.params.id}`})
}
//@desc Delete contact
//@route Get /api/contact/:id
//@access public
const deleteContact =(req, res)=>{
    res.status(200).json({message:` Delete contact for ${req.params.id}`})
}
module.exports={getContacts,createContact,updateContact,getContact,deleteContact}