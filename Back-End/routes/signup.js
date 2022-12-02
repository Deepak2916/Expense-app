
const signupContoller=require('../controllers/singnup')
const express=require('express')
const router=express.Router()

router.post('/signup',signupContoller.PostSignup)
router.get('/',signupContoller.GetSignup)



module.exports=router


