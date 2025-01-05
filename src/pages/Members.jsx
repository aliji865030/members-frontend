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
        <h2 className='text-5xl font-bold italic pt-20 text-center'>Members Directory</h2>
        <ul className=' pt-10 pl-10'>
          {members.map((member) => (
              <li key={member._id} className='text-xl font-bold pt-1'>{member.name} - {member.email}</li>
            ))}
        </ul>
            <button onClick={handleLogout} className='bg-blue-600 text-white px-10 py-2 rounded-md hover:bg-blue-700 mt-10 ml-10'>Logout</button>
      </div>
    );
  }
  

export default Members