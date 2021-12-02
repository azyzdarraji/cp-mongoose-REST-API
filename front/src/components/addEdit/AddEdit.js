import './AddEdit.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate  } from 'react-router-dom'
import { addContact ,editContact} from '../../redux/actions/ActionsContact'
function AddEdit()
{
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const contactEdit  =useSelector((state)=>state.reducersContact.contact)  //contact howa object mawjoud fi ficher reducers 
  const edit =useSelector((state)=>state.reducersContact.edit)

  const [contact,setContact]= useState
  ({
    name:"",
    email:"",
    age:0
  })

  const handleChange=(e)=>{
    setContact({...contact,[e.target.name]:e.target.value})
  }

useEffect(()=>
  {
    edit ? 
    setContact({
      name:contactEdit.name ,
      email:contactEdit.email ,
      age : contactEdit.age
    })
   : setContact ({
     name:"",
     email:"",
     age:0,
   })},
  [contactEdit,edit])
    return (
            <div className="wrapper">
        <form className="form"  > 
          <div className="pageTitle title"> Add New Contact </div>
          <div className="secondaryTitle title">Please fill this form to Add contact .</div>
          <input type="text"
           name="name"
           value={contact.name} 
          className="name formEntry"
         onChange={handleChange}/>

          <input type="text"
           name="email"
          value={contact.email} 
          className="email formEntry"
         onChange={handleChange}/>

<input type="Number"
           name="age"
          value={contact.age} 
          className="age formEntry"
         onChange={handleChange}/>
         
     {edit ? (
        <button 
          className="submit"
      onClick={()=>{
        dispatch(editContact(contactEdit._id, contact ));
        navigate("/contactsList")
        }}
        >
   Edit 
   </button> ):(
       <button  className="submit"
       onClick={()=>{
         dispatch(addContact(contact));
         navigate("/contactsList")
         }}
         >

 ADD
</button>

   )}
        </form>
      </div>
    )
}
export default AddEdit 