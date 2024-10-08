import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CounselorRegister() {
    const [counselorId, setCounselorId] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const navigate = useNavigate(); // Hook to navigate between pages

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Check if terms are accepted
        if (!termsAccepted) {
            alert("You must agree to the terms and conditions");
            return;
        }

        try {
            // Send a POST request to the backend for registration
            const response = await axios.post('http://localhost:8080/counselors', {
                counselorId,
                fullName,
                email,
                password,
                phone,
                specialization,
            });

            alert("Registration successful!");

            // Navigate to the Counselor Login page after successful registration
            navigate('/login-as-counselor'); // Adjust the route according to your setup
        } catch (error) {
            console.error("There was an error registering the counselor!", error);
            alert("An error occurred during registration. Please try again.");
        }
    };

    return (
        <div>
            <h1>Counselor Registration Page</h1>
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
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                <div>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone Number:</label>
                    <input
                        id="phone"
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="specialization">Specialization:</label>
                    <input
                        id="specialization"
                        type="text"
                        value={specialization}
                        onChange={(e) => setSpecialization(e.target.value)}
                    />
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
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default CounselorRegister;
