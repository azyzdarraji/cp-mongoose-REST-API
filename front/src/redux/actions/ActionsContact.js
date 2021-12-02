import axios from 'axios'
import {GETALLCONTACTS, GETONECONTACT,TOGGLEFALSE,TOGGLETRUE} from "../type"

export const getAllContacts=()=>async(dispatch)=>{
    try {
      const res = await axios.get("/api/contacts")
      console.log(res)
      dispatch({
        type:GETALLCONTACTS,
        payload:res.data
      })
    } catch (error) {
         console.log(error)
    }

}

// add contact post
export const addContact=(contact)=>async(dispatch)=>{
  try {
    await axios.post("api/contacts",contact)
    dispatch(getAllContacts())
  } catch (error) {
    console.log (error)
  }
}

//delet contact delete

export const deleteContact=(id)=>async(dispatch)=>{
  try {
    await axios.delete(`api/contacts/${id}`)
    dispatch(getAllContacts())
  } catch (error) {
    console.log(error)
  }
}

// Edit contact put

export const editContact=(id,contact)=>async(dispatch)=>{
  try {
    await axios.put(`api/contacts/${id}`,contact)
    dispatch(getAllContacts())
  } catch (error) {
    console.log(error)
  }
}

// get one contact 

export const getContact=(id)=>async(dispatch)=>{
  try {
    const res=await axios.get(`api/contacts/${id}`)
    dispatch({type:GETONECONTACT,payload:res.data})
    console.log(res.data)
  } catch (error) {
    console.log (error)
  }
}
export const toggleTrue=()=>{
 return {
  type :TOGGLETRUE
 }
  }
  export const toggleFlase=()=>{
    return {
     type :TOGGLEFALSE
    }
     }
   
