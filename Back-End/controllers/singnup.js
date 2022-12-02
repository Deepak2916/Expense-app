const signupModel=require('../models/signup')

const PostSignup= async (req,res)=>{
    let info={
        name:req.body.name,
        email:req.body.email,
        number:req.body.number,
        password:req.body.password
    }
    try{
    const user=await signupModel.create(info)
    res.status(200).json({
        User:user,
        success:true})
    // if(Error){
    // throw new Error('error accored')
    // }
    }
    catch(err){
        // console.log(err)
        res.status(208).json({
            error:err.errors[0].message.split(" ")[0],
            success:false})
    }
}
const GetSignup=async (req,res)=>{
    const users=await signupModel.findAll()
    res.json(users) 
}

module.exports={PostSignup,GetSignup}