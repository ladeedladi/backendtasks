const Sequelize=require('sequelize');
const sequelize = new Sequelize('namecollections','root','Ladeed@123',{
    host:'localhost',
    dialect:'mysql'
})
 module.exports=sequelize;