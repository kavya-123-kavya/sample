import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function LoginAsCounselor(){

    const [counselorId, setCounselorId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post('http://localhost:8080/counselors/login', {
                counselorId,
                password
            });
    
            // Check the response for success
            if (response.data.success) {
                navigate('/counselor-home'); // Adjust the route according to your setup
            } else {
                alert(response.data.message); // Show the error message from the response
            }
        } catch (error) {
            console.error("There was an error logging in!", error);
            alert("An error occurred while logging in. Please try again.");
        }
    };
    
    
    
    return(
        <div>
            <h1>This is the Counselor Login Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="counselorId">Counselor ID:</label>
                    <input
                        id="counselorId"
                        type="text"
                        value={counselorId}
                        onChange={(e) => setCounselorId(e.target.value)}
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

export default LoginAsCounselor;