import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";

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
    <div className="w-full lg:w-2/3 px-5 sm:px-10 py-10 sm:py-14 rounded-lg">
      <h2 className="text-5xl font-bold italic text-center mb-8">
        Members Directory
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 shadow-md rounded-lg cursor-pointer">
          <thead>
            <tr className="bg-gray-200 text-left text-lg font-bold">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Join Date</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr
                key={member._id}
                className="hover:bg-gray-100 text-base font-medium"
              >
                <td className="border border-gray-300 px-4 py-2">
                  {member.name.toUpperCase()}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {member.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {format(new Date(member.joinedDate), "dd/MM/yyyy")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={handleLogout}
          className="bg-blue-600 text-white px-10 py-3 rounded-full hover:bg-blue-700 mt-10 w-8/12"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Members;
