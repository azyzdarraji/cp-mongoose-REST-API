const express=require("express")
const router=express.Router()
const Contact=require('../models/Contact') 
const {addContact,getAllContacts,updateContact,getOneContact}=require('../conntrollers/contact')

// path : api/contacts/test
router.get('/test',(req,res)=>{
    res.send('this is test')
})
// methode post 
//url /
// req.body 
router.post('/',addContact)

//methode get 
//url /
router.get('/',getAllContacts)

//methode delete 
//url /:contactId
//req.params
router.delete('/:contactId',async(req,res)=>{
const{contactId}=req.params
try {
    await Contact.findByIdAndDelete(contactId)
    res.status(200).send ("contact deleted")
} catch (error) {
    res.status(500).send('not deleted')
    
}
})

// methode put 
//url /:contactId
//req.body
//req.params
router.put('/:contactId',updateContact)
// methode get 
// url /:contactId
//req.params
router.get('/:contactId',getOneContact)
module.exports=router