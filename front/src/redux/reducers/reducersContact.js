import { GETALLCONTACTS, GETONECONTACT ,TOGGLEFALSE,TOGGLETRUE} from "../type"
const initialState={
    contacts:[] ,
    contact :{},
    edit :false 
}
const reducersContact=(state=initialState,action)=>{
 switch(action.type){
 case  GETALLCONTACTS :
   return {
     ...state,contacts:action.payload.contacts
    }
    case GETONECONTACT :
      return{
        ...state,contact:action.payload
      }
      case TOGGLETRUE :
      return {
        ...state,edit:true
      }
      case TOGGLEFALSE:
        return{
          ...state,edit:false 
        }
    default : return state
 }
}
 // add contact 

 

export default reducersContact