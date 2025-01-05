import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
    const token = localStorage.getItem('token');
  
    return (
      <div>
        <h1 className='text-6xl font-bold italic pt-40'>Welcome to the Community Website</h1>
        <nav className='flex flex-col justify-center items-center pt-20 gap-3'>
          <Link to="/register" className='bg-blue-600 text-white px-10 py-2 rounded-md hover:bg-blue-700'>Register</Link> 
          <Link to="/login" className='bg-blue-600 text-white px-10 py-2 rounded-md hover:bg-blue-700'>Login</Link>
          {token && <Link to="/members" className='bg-blue-600 text-white px-10 py-2 rounded-md hover:bg-blue-700'>Members</Link>}
        </nav>
      </div>
    );
  }
export default Home
