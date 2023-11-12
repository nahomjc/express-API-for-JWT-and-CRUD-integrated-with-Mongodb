const express=require('express')
const router =express.Router()
const {getContacts,createContact,updateContact,getContact}=require('../controllers/contactController')

router.route("/").get(getContacts)

router.route("/").post(createContact)
router.route("/:id").get(getContact)

router.route("/:id").put(updateContact)

router.route("/:id").delete((req , res)=>{
 
    res.status(200).json({message:` Delete contact for ${req.params.id}`})
})

module.exports= router