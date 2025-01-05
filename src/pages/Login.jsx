
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
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p>{message}</p>
      </div>
    );
  }

export default Login
