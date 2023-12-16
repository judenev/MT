const bcrypt =require('bcrypt')
const JWT =require('jsonwebtoken')
module.exports ={
    userReg :async(req,res)=>{
        try{
            console.log(req.body);
            res.send('success')
        }
        catch(err){
         console.log(err);
         res.send('error')
        }
    }
}