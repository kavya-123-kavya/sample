import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginAsStudent() {
    const [studentId, setStudentId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission

        try {
            // Send a POST request to the backend for authentication
            const response = await axios.post('http://localhost:8080/login', {
                studentId,
                password
            });

            // If login is successful, navigate to the Student Home Page
            if (response.data.success) {
                navigate('/student-home'); // Adjust the route according to your setup
            } else {
                alert("Invalid credentials, please try again.");
            }
        } catch (error) {
            console.error("There was an error logging in!", error);
            alert("An error occurred while logging in. Please try again.");
        }
    };

    return (
        <div>
            <h1>Student Login Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="studentId">Student ID:</label>
                    <input
                        id="studentId"
                        type="text"
                        value={studentId}
                        onChange={(e) => setStudentId(e.target.value)}
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

export default LoginAsStudent;
