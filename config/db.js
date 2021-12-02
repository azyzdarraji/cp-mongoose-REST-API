const mongoose=require('mongoose')
require('dotenv').config({path:'./config/.env'}) 
const connecteDB=async()=>{
try {
    await mongoose.connect(process.env.DBCONTACT)
    console.log("db conncted")
} catch (error) {
    console.log("not connected")
    
}
}
module.exports=connecteDB