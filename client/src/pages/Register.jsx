import React, { useState } from "react";
import axios from "axios";
import {toast } from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    photo: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password, photo } = data;
    try {
      const { data } = await axios.post("/register", {
        name,
        email,
        password,
        photo,
      });
      if (data.error){
        toast.error(data.error)
      } else {
        setData({})
        toast.success('Registeration successful')
        navigate('/login')

      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Register</h2>

      <form onSubmit={registerUser} className="space-y-4">
        <div>
          <label htmlFor="photo" className="block font-medium">
            Profile Photo
          </label>
          <input
            type="file"
            id="photo"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={data.photo}
            onChange={(e) => setData({ ...data, photo: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="name" className="block font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="password" className="block font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Register
        </button>
        <a  href="/login">Already Registered? Login here</a>
      </form>
    </div>
  );
};

export default Register;
