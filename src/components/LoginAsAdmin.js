import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginAsAdmin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            // Send a POST request to the backend for authentication
            const response = await axios.post('http://localhost:8080/admin/login', {
                username,
                password
            });

            // Check if login was successful
            if (response.status === 200) {
                navigate('/admin-home'); // Navigate to admin home page
            }
        } catch (error) {
            console.error("There was an error logging in!", error);
            alert("Invalid credentials, please try again."); // Inform user of failed login
        }
    };



    return (
        <div>
            <h1>Admin Login</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginAsAdmin;
