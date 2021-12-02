import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllContacts } from "../../redux/actions/ActionsContact";
import Card from '../card/Card'
import './CardList.css'

function CardList()
{ const dispatch=useDispatch()
    const contacts =useSelector(state=>state.reducersContact.contacts) //mafhmtch alech aamel reducersContact
    useEffect (()=>{
        dispatch(getAllContacts())
    },[dispatch])
    return (
        <div className="list">
            {
            contacts.map( contact=><Card key={contact._id} contact={contact}/>)
            }
        </div>
    )
}
export default CardList