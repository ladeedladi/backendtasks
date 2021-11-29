
const Sequelize=require('sequelize')
const sequelize=require('../database/utils')


const Users=sequelize.define('users',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false,
        
        
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
    }

})
module.exports=Users;