import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/protected">Protected</Link></li>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </nav>
            <h1>Welcome to the Home Page</h1>
        </div>
    );
}

export default Home;
