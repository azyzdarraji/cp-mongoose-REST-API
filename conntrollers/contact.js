const Contact =require('../models/Contact')

exports.addContact=async(req,res)=>{
    const {name , email, age}=req.body

    try {
        const contact=new Contact ({
            name ,email,age 
        })
        await contact.save()
        res.status(200).send({msg:'contact added ', contact})
    } catch (error) {
        res.status(500).send({msg:'contact is not aded '})
    }
  
}

exports.getAllContacts=async(req,res)=>{

    try {
        const contacts= await Contact.find()
        res.status(200).send({msg:"list of contacts",contacts})
    } catch (error) {
       res.status(500).send('err') 
    }
}

exports.updateContact=async (req,res)=>{
    
    const {contactId}=req.params
    // const {name,email,age}=req.body
try {
    await Contact.findByIdAndUpdate(contactId,{$set:{...req.body}})
    res.status(200).send("contact updated")
} catch (error) {
    res.status(500).send('contact not updated')
}
}


exports.getOneContact=async(req,res)=>{
    const {contactId}=req.params
    console.log(req.params)
    //const{name,email.age}=req.body
    try {
      const user=  await Contact.findById(contactId)
        res.status(200).send(user)
    } catch (error) {
console.log(error)
    res.status(500).send('verify your ID')   
    }
}