import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formState, setFormState] = useState(true);

  const API_URL = "https://members-backend-wb5f.onrender.com";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `${API_URL}/${formState ? "register" : "login"}`,
        formData
      );
      localStorage.setItem("token", response.data.token);
      setMessage(`${formState ? "Register" : "Login"} successful`);
      navigate("/members");
    } catch (err) {
      setMessage("Error logging in");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleFormState = () => {
    setFormState(!formState);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-50">
          <div className="text-white text-xl">Loading...</div>
        </div>
      )}
      <div>
        <h1 className="text-3xl sm:text-6xl font-bold italic text-center">
          Welcome to the Community
        </h1>
      </div>
      <div
        className="flex flex-col justify-center items-center w-[300px] px-5 pt-7 pb-10 mt-10 rounded-lg shadow-2xl border-2 border-gray-700"
        style={{
          backgroundImage: "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)",
        }}
      >
        <h2 className="text-4xl font-bold">
          {formState ? "Register" : "Login"}
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-5 pt-7"
        >
          {formState && (
            <input
              type="text"
              className="py-2 px-5 rounded-lg text-xl"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          )}
          <input
            type="email"
            className="py-2 px-5 rounded-lg text-xl"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
          <input
            type="password"
            className="py-2 px-5 rounded-lg text-xl"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
          <button
            type="submit"
            className="bg-blue-600 w-full text-white px-10 py-2 rounded-md hover:bg-blue-700 mt-2"
          >
            {formState ? "Register" : "Login"}
          </button>
          <p className="text-sm">
            {formState ? "already have an account" : "Sign Up"}{" "}
            <span
              className="text-blue-700 font-bold cursor-pointer"
              onClick={handleFormState}
            >
              Click Here
            </span>
          </p>
        </form>
        <p className="text-red-700 font-bold text-xs">{message}</p>
      </div>
    </div>
  );
}

export default Home;
