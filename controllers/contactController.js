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

module.exports={getContacts,createContact}