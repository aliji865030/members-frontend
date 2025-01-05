import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
    const token = localStorage.getItem('token');
  
    return (
      <div>
        <h1>Welcome to the Community Website</h1>
        <nav>
          <Link to="/register">Register</Link> | <Link to="/login">Login</Link>
          {token && <span> | <Link to="/members">Members</Link></span>}
        </nav>
      </div>
    );
  }
export default Home
