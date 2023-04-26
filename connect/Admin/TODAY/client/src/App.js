
import './App.css';
import {Route,Routes} from 'react-router-dom'


import { Add } from './Add';
import { Edit } from './Edit';
import { List } from './List';


function App() {
// const Navigate=useNavigate();
//   const user=localStorage.getItem("token");
  
  return (
   
<>



<Routes>
 {/* {user && < Route path='/' element={<Main/>} />} 

  <Route path='/signup' element={<Signup/>} />
  <Route path='/' element={<Navigate replace to='/login' />} /> */}



< Route path='/edit' element={<Edit/>} />

  < Route path='/add' element={<Add/>} />
 
  < Route path='/' element={<List/>} />
</Routes>

</>


  );
}

export default App;
