import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Events from './pages/Events/Events';
import Home from './pages/Home/Home';
import Contactus from './pages/Contact/Contactus';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PublicRoute from './components/routes/PublicRoute';
import PrivateRoute from './components/routes/PrivateRoute';
import DonorPage from './pages/DonorPage/DonorPage';
import NotFound from './pages/NotFound/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import RequestBlood from './pages/RequestBlood/RequestBlood';
// import Dashboard from './Admin/Dashboard/Dashboard';
function App() {
  return (
    <div className="App">
  
      <ToastContainer />
      
      <Routes>
       
       user.role === admin ? <></>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/event" element={<Events />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
       
        <Route path="/donor" element={<PrivateRoute />}>
          <Route index element={<DonorPage />} />
        </Route>
        <Route path="/requestblood" element={<PrivateRoute />}>
          <Route index element={<RequestBlood />} />
        </Route>
        {/* <Route path='/admin/dashboard' element={<Dashboard/>}/> */}
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;