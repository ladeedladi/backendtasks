const express=require("express")
const app=express()
const sequelize=require('./database/utils')
const usersModel=require("./model/userModel")
app.use(express.json())



app.post("/addName",async(req,res)=>{
    const {name} =req.body
    console.log(name)
   //to convert into smallcase 
    //const smallcase=name.toLowerCase()
    try{
        //const result=await=userModel.create({name:smallcase})
        const result=await usersModel.create({name})
        res.status(200).json({status:"success",result})
    }catch(err){
        res.status(200).json(err)
    }
    
})

app.post("/searchName",async(req,res)=>{
const {name}=req.body

try{
    const result =await usersModel.findOne({where:{name}})
    res.status(200).json({result})
}catch(err){
    console.log(err)
    res.status(400).json({err})
}
})
sequelize.sync()
.then(res=>console.log(res))
.catch(err=>console.log(err))


app.listen(3000)
