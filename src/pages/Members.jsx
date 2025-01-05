import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Members() {
    const [members, setMembers] = useState([]);
    const navigate = useNavigate();

    const API_URL = 'https://members-backend-wb5f.onrender.com';

  
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }
  
      const fetchMembers = async () => {
        try {
          const response = await axios.get(`${API_URL}/members`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setMembers(response.data);
        } catch (err) {
          console.error('Error fetching members:', err);
        }
      };
  
      fetchMembers();
    }, [navigate]);
  
    const handleLogout = () => {
      localStorage.removeItem('token');
      navigate('/');
    };
  
    return (
      <div>
        <h2>Members Directory</h2>
        <button onClick={handleLogout}>Logout</button>
        <ul>
          {members.map((member) => (
            <li key={member._id}>{member.name} - {member.email}</li>
          ))}
        </ul>
      </div>
    );
  }
  

export default Members