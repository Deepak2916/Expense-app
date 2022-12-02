
const signupContoller=require('../controllers/singnup')
const express=require('express')
const router=express.Router()

router.post('/signup',signupContoller.PostSignup)
router.get('/login/:email',signupContoller.GetLogin)
router.get('/',signupContoller.GetSignup)
router.delete('/delete',signupContoller.DeleteUser)




module.exports=router


