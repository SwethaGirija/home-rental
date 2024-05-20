import React from 'react';
import './Header.css';
import SearchBar from '../SearchBar/SearchBar';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="navbar">
         
          
           <SearchBar/>
           <br/>
           <br/>
          <li><a href="/contact"> Contact</a></li>
          <li><a href="/login" className="login-button">Login</a></li>
          <li><a href="/adminlogin"> Admin Login</a></li>
          <li><a href="/feedback"> Feedback</a></li>
          {/* Add more list items here */}
        </ul>
      </nav>
    </header>
  );
}


export default Header;
