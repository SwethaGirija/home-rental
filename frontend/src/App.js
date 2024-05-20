import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Header from './components/Header/Header';
import Feedback from './components/Feedback/Feedback'
import Houseadd from './components/houseadd/Houseadd';
import Adminlogin from './components/adminlogin/Adminlogin'
import Search from './components/Search/Search'

const App = () => {

  
  
  return (
    <Router>
      <Routes>
        <Route path='/header' element={<Header/>}/>
        <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/feedback" element={<Feedback/>}/>
     
      <Route path='/houseadd' element={<Houseadd/>}/>
      <Route path='/adminlogin' element={<Adminlogin/>}/>
      <Route path='/search' element={<Search/>}/>


      </Routes>
    </Router>
  );
}

export default App;
