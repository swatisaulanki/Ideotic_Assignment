import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Navbar from './Components/Navbar';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Homepage from './Pages/Homepage';
import RequireAuth from './Components/RequiredAuth';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<RequireAuth><Homepage/></RequireAuth>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
