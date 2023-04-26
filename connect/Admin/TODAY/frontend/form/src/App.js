
import './App.css';
import { Route,Routes ,Link} from 'react-router-dom';

import { Add } from './component/Add';
import { Edit } from './component/Edit';
import { Login } from './component/Login';
import { Home } from './component/Home';
import { Newlogin } from './component/Newlogin';
import { Userpage } from './component/User';
import { Adminpage } from './component/Admin';
function App() {
  return (
    <div className="App">

    {/* <Add/> */}


   <Routes>
    <Route path="/add" element={<Add/>} />
    <Route path='/edit/:id' element={<Edit/>} />
    <Route path="/login" element={<Login/>} />
    <Route path='/home' element={<Home/>} />
    <Route path='/newlogin' element={<Newlogin/>} />
    <Route path='/user' element={<Userpage/>} />
    <Route path='/admin' element={<Adminpage/>} />
   </Routes>

   <Link to='/login'>Login</Link><br/>

   <Link to='/home'>Home</Link>
   <Link to='/add'>Add</Link>
    </div>

  
  );
}

export default App;
