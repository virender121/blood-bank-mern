
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Events from './pages/Events/Events';
import Home from './pages/Home/Home';
import Contactus from './pages/Contact/Contactus';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route  path="/about" element={<About/>}/>
       <Route  path="/event" element={<Events/>}/>
       <Route  path="/contactus" element={<Contactus/>}/>
       <Route  path="/signin" element={<Login/>}/>
       <Route  path="/signup" element={<Register/>}/>
        
     </Routes>
    </div>
  );
}

export default App;
