const mongoose =require('mongoose')
const Userschema= new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    mob: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
   
    password: {
        type: String,
        required: true
    },
   
})
const user = mongoose.model(user,Userschema)
module.exports ={user}