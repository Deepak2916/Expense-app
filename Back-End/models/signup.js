const Sequelize=require('sequelize')
const sequelize=require('../util/database')

const Signup=sequelize.define('signup',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique: true
    },
    number:{
        type:Sequelize.INTEGER,
        allowNull:false,
        unique: true
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    }
});
module.exports=Signup