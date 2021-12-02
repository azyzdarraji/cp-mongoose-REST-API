import './Home.css'
import {useDispatch} from 'react-redux'
import {getAllContacts, toggleFlase} from '../../redux/actions/ActionsContact'
import {useNavigate} from "react-router-dom"

function Home() {
const dispatch= useDispatch()
const navigate=useNavigate()
return (
     <div>
      <button type="button" class="btn btn-warning"
       onClick={()=>{ dispatch(getAllContacts());
       navigate('/contactsList')}}
       >
          Show List </button>
<button type="button" class="btn btn-info" onClick={()=>{dispatch(toggleFlase());navigate('/addEdit')} }>Add Contact</button>
     </div>
 )
}
export default Home