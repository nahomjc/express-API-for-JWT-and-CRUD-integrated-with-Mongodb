const mongoose=require('mongoose')



const contactSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"please add the Contact name"]
    },
    email:{
        type:String,
        required:[true,"please add the Contact email address"]
    },
    phone:{
        type:String,
        required:[true,"please add the Contact phone number"]
    },
},{
    timestamps:true
})

module.exports = mongoose.model("Contact",contactSchema) 