const Sequelize=require('sequelize')
const sequelize=new Sequelize('expense-app','root','Deepak@123',{
    dialect:'mysql'
})

module.exports=sequelize