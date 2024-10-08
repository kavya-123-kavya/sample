import React from 'react';
import { Link, Outlet } from 'react-router-dom'; // Using Outlet for nested routing
import '../style/styleAdmin.css'; // Importing the CSS file
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

function AdminHome() {
    const navigate = useNavigate();
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get('http://localhost:8080/stus');
                setStudents(response.data);
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };

        fetchStudents();
    }, []);

    const handleHomeClick = () => {
        navigate('/admin-home'); // This will navigate to the home route
    };

    const handleAccept = async (studentId) => {
        try {
            // Assuming you have an endpoint to accept the student registration
            await axios.post(`http://localhost:8080/stus/acc/${studentId}`);
            alert(`Student ${studentId} accepted successfully!`);

            // Optionally, refresh the student list
            const updatedStudents = students.filter(student => student.studentId !== studentId);
            setStudents(updatedStudents);
        } catch (error) {
            console.error('Error accepting student:', error);
            alert('There was an error accepting the student.');
        }
    };

    return (
        <div className="admin-dashboard">
            {/* Sidebar */}
            <div className="sidebar">
                <h2>Admin Dashboard</h2>
                <nav>
                    <ul>
                        <li>
                            <button className="home-button" onClick={handleHomeClick}>
                                Home
                            </button>
                        </li>

                        <li><Link to="/admin/counselors">Counselors</Link></li>
                        <li><Link to="/admin/students">Students</Link></li>
                        <li><Link to="/admin/reports">Reports</Link></li>
                        <li><Link to="/admin/settings">Settings</Link></li>
                        <li><Link to="/admin/logout">Logout</Link></li>
                    </ul>
                </nav>
            </div>

            {/* Main Content Area */}
            <div className="main-content">
                <h1 className="welcome-message">Welcome to the Admin Dashboard</h1>
                <div className="stats-container">
                    <div className="stat-card students-card">
                        <img
                            src="https://img.freepik.com/premium-photo/little-girl-studying-her-desk_1280516-10199.jpg"
                            alt="Total Students"
                            className="stat-image"
                        />
                        <h3>Total Students</h3>
                        <p>100</p> {/* Replace with dynamic data */}
                    </div>


                    <div className="stat-card counselor-card">
                        <img
                            src="https://thumbs.dreamstime.com/b/therapy-kid-teacher-vector-therapy-kid-teacher-vector-psychologist-therapist-school-education-counseling-office-woman-speech-boy-274418029.jpg"
                            alt="Total Counselors"
                            className="stat-image"
                        />
                        <h3>Total Counselors</h3>
                        <p>10</p> {/* Replace with dynamic data */}
                    </div>

                    <div className="stat-card appointments-card">
                        <img
                            src="https://i.pinimg.com/736x/ef/64/8f/ef648fe0c7232614bbdef5870c5d8eab.jpg"
                            alt="Total Appointments"
                            className="stat-image"
                        />
                        <h3>Total Appointments</h3>
                        <p>50</p> {/* Replace with dynamic data */}
                    </div>
                </div>



                {/* Display Registered Students */}
                <h2>Registered Students</h2>
                <table className="students-table">
                    <thead>
                        <tr>
                            <th>Student ID</th>
                            <th>Full Name</th>
                            <th>College Email</th>
                            <th>Action</th> {/* Added Action column */}
                        </tr>
                    </thead>
                    <tbody>
                        {students.map(student => (
                            <tr key={student.studentId}>
                                <td>{student.studentId}</td>
                                <td>{student.fullName}</td>
                                <td>{student.collegeEmail}</td>
                                <td>
                                    <button onClick={() => handleAccept(student.studentId)}>Accept</button> {/* Accept button */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>


                {/* Placeholder for nested routes */}
                <Outlet />
            </div>
        </div>
    );
}

export default AdminHome;
