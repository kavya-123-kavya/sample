import React from 'react';
import { Link, useLocation } from 'react-router-dom';
function Welcome() {
    const location = useLocation();
    const { name } = location.state || {}; // Get the name from state

    return (
        <div>
            <h1>Welcome , {name ? name : 'Guest'}!  </h1>
            <div>
                <Link to="/register-student">Register as Student</Link>
            </div>
            <div>
                <Link to="/register-counselor">Register as Counselor</Link>
            </div>
            <div>
                <Link to="/login-admin">Login as Admin</Link> {/* New link added */}
            </div>
        </div>
        
    );
}

export default Welcome;
