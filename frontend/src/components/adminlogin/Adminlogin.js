import React, { useState } from 'react';
import './Adminlogin.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const navigateToHouseAdd = () => {
        // Navigate to houseadd page
        window.location.href = '/houseadd';
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Here you can add your logic for authentication
        // For simplicity, let's assume authentication is successful if username is 'admin' and password is 'admin123'
        if (username === 'admin' && password === 'admin123') {
            console.log('Logged in successfully');
            navigateToHouseAdd(); // Call the function to navigate to houseadd page
        } else {
            console.log('Invalid credentials');
            // You can add error handling logic here, e.g., display error message
        }
    };

    return (
        <div className="login-container">
            <div className="login-form-wrapper">
                <h2>Admin Login</h2>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor="username">Enter your Username:</label>
                        <input type="text" id="username" value={username} onChange={handleUsernameChange} />
                    </div>
                    <div>
                        <label htmlFor="password">Enter your password:</label>
                        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
                    </div>
                    <button type="submit">Login In</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
