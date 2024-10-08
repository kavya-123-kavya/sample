import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GreetingForm from './components/GreetingForm';
import Welcome from './components/Welcome';
import './App.css';
import StudentRegister from './components/StudentRegister';
import CounselorRegister from './components/CounselorRegister';
import LoginAsStudent from './components/LoginAsStudent';
import StudentHome from './components/StudentHome';
import LoginAsCounselor from './components/LoginAsCounselor';
import CounselorHome from './components/CounselorHome';
import LoginAsAdmin from './components/LoginAsAdmin';
import AdminHome from './components/AdminHome';

function App() {
  return (
    <Router>
            <Routes>
                <Route path="/" element={<GreetingForm />} />
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/register-student" element={<StudentRegister/>} /> 
                <Route path="/register-counselor" element={<CounselorRegister/>} />


                <Route path="/login-as-student" element={<LoginAsStudent/>}/>
                <Route path="/login-as-counselor" element={<LoginAsCounselor/>} />
                <Route path="/login-admin" element={<LoginAsAdmin/>} />
                
                <Route path="/student-home" element={<StudentHome/>} />
                <Route path="/counselor-home" element={<CounselorHome/>} />
                <Route path="/admin-home" element={<AdminHome/>} />


            </Routes>
        </Router>
  );
}

export default App;
