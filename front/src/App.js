
import './App.css'
import Home from './components/home/Home';
import AddEdit from './components/addEdit/AddEdit'
import CardList from './components/cardList/CardList'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>  
  
    <div className="App">
     <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route path='/addEdit' element={<AddEdit/>}/>
    <Route path='/contactsList' element={<CardList/>}/>
    </Routes>
   </div>
   </BrowserRouter>
  
  );
}

export default App;
