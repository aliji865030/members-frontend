import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { format } from 'date-fns';

function Members() {
  const [members, setMembers] = useState([]);
  const navigate = useNavigate();

  const API_URL = "https://members-backend-wb5f.onrender.com";

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchMembers = async () => {
      try {
        const response = await axios.get(`${API_URL}/members`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMembers(response.data);
      } catch (err) {
        console.error("Error fetching members:", err);
      }
    };

    fetchMembers();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div
      className=" w-2/3 px-5 sm:px-10 py-10 sm:py-14 rounded-lg "
    >
      <h2 className="text-5xl font-bold italic text-center">
        Members Directory
      </h2>
      <ul className=" pt-10 pl-10 flex flex-col gap-5">
        {members.map((member) => (
          <li key={member._id} className="text-xl font-bold text-gray-800 flex justify-around items-center py-5 rounded-xl border-2 border-gray-500 shadow-xl"
          style={{
            backgroundImage: "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)",
          }}>
            <span>{member.name.toUpperCase()}</span> 
            <span>{member.email}</span>
            <span>{format(new Date(member.joinedDate),'dd/MM/yyyy')}</span>
          </li>
        ))}
      </ul>
      <div className="flex justify-center items-center">
      <button
        onClick={handleLogout}
        className="bg-blue-600 text-white px-10 py-3 rounded-full hover:bg-blue-700 mt-10 ml-10 w-8/12"
      >
        Logout
      </button>
      </div>
    </div>
  );
}

export default Members;
