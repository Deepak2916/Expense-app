const express=require('express')
const bodyParser=require('body-parser')
const sequelize=require('./util/database')

const cors=require('cors')

const app= express()
const SignupRouter=require('./routers/signup')
app.use(cors())
app.use(bodyParser.json())
app.use('/user',SignupRouter)

sequelize
// .sync({force:true})
.sync()
.then(res=>{
    // console.log(res)
    app.listen(3000)
})
