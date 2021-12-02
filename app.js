const express=require('express')
const app=express()
const connectDB=require('./config/db')
const contacRoutes=require('./routes/contact')

connectDB()
app.use(express.json())




app.use('/api/contacts',contacRoutes)

const port=5000
app.listen(port,()=>console.log(`server ranning on port ${port}`))