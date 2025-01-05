import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const API_URL = 'https://members-backend-wb5f.onrender.com';
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(`${API_URL}/login`, formData);
        localStorage.setItem('token', response.data.token);
        setMessage('Login successful');
        navigate('/members');
      } catch (err) {
        setMessage('Error logging in');
      }
    };
  
    return (
      <div className='flex flex-col justify-center items-center px-5 py-10 rounded-lg' style={{backgroundImage: "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)"}}>
        <h2 className='text-4xl font-bold'>Login</h2>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-5 pt-10'>
          <input
            type="email"
            className='py-2 px-5 rounded-lg text-xl'
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <input
            type="password"
            className='py-2 px-5 rounded-lg text-xl'
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
          <button type="submit" className='bg-blue-600 text-white px-10 py-2 rounded-md hover:bg-blue-700 mt-5'>Login</button>
        </form>
        <p>{message}</p>
      </div>
    );
  }

export default Login
