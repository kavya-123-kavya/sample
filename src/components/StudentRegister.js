import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function StudentRegister() {
    const [studentId, setStudentId] = useState('');
    const [fullName, setFullName] = useState('');
    const [collegeEmail, setCollegeEmail] = useState('');
    const [password, setPassword] = useState(''); // New state for password
    const [captcha, setCaptcha] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!termsAccepted) {
            alert("You must agree to the terms and conditions");
            return;
        }
    
        try {
            const response = await axios.post('http://localhost:8080/stus', {
                studentId,
                fullName,
                collegeEmail,
                password // Include password in the request
            });
    
            // Navigate to the login page after successful registration
            navigate('/login-as-student');
        } catch (error) {
            console.error("There was an error registering the student!", error.response ? error.response.data : error.message);
        }
    };
    return (
        
        
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
                <br/>   
            </div>

            <div>
                <label htmlFor="fullName">Full Name:</label>
                <input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                />
            </div>

            <div>
                <br/>   
            </div>
            <div>
                <label htmlFor="collegeEmail">College Email ID:</label>
                <input
                    id="collegeEmail"
                    type="email"
                    value={collegeEmail}
                    onChange={(e) => setCollegeEmail(e.target.value)}
                    required
                />
            </div>

            <div>
                <br/>   
            </div>

            <div>
                <label htmlFor="password">Password:</label>
                <input
                    id="password"
                    type="password" // Use type="password" to hide the password
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>

            <div>
                <br/>   
            </div>

            <div>
                <label htmlFor="captcha">CAPTCHA:</label>
                <input
                    id="captcha"
                    type="text"
                    value={captcha}
                    onChange={(e) => setCaptcha(e.target.value)}
                    required
                />
            </div>

            <div>
                <br/>   
            </div>

            <div>
                <input
                    type="checkbox"
                    id="terms"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    required
                />
                <label htmlFor="terms">I agree to the terms and conditions</label>
            </div>

            <div>
                <br/>   
            </div>
            
            <button type="submit">Register</button>
        </form>
    );
}

export default StudentRegister;
