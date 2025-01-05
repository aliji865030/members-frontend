
import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  
    return (
      <div>
        <h1>Welcome to the Community Website</h1>
        <nav>
          <Link to="/register">Register</Link> | <Link to="/login">Login</Link> | <Link to="/members">Members</Link>
        </nav>
      </div>
    );
  }
export default Home
