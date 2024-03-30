import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    photo: "",
    role: "",
    contact: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password, photo, role, contact } = data;
    try {
      const { data } = await axios.post("/register", {
        name,
        email,
        password,
        photo,
        role,
        contact,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Registeration successful");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-between items-center container-fluid bg-zinc-50 dark:bg-zinc-800 w-full h-screen drop-shadow-xl">
      
      <div className="max-w-md mx-auto ml-36 bg-zinc-50 dark:bg-zinc-700 dark:text-zinc-50 rounded-2xl px-20 py-5 mt-5 mb-5 drop-shadow-lg">
        <h2 className="text-2xl font-bold dark:text-zinc-50 mb-5">Register</h2>

        <form onSubmit={registerUser} className="space-y-4">
          <div>
            <label htmlFor="photo" className="block font-medium">
              Profile Photo
            </label>
            <input
              type="file"
              id="photo"
              value={data.photo}
              className="bg-zinc-50 dark:bg-zinc-700"
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
              className="mt-1 p-2 block w-full bg-zinc-50 drop-shadow-md rounded-xl dark:bg-zinc-700"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="role" className="block font-medium">
              Role
            </label>
            <input
              type="text"
              id="role"
              className="mt-1 p-2 block w-full bg-zinc-50 drop-shadow-md rounded-xl dark:bg-zinc-700"
              value={data.role}
              onChange={(e) => setData({ ...data, role: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="contact" className="block font-medium">
              Contact
            </label>
            <input
              type="number"
              id="contact"
              className="mt-1 p-2 block w-full bg-zinc-50 drop-shadow-md rounded-xl dark:bg-zinc-700"
              value={data.contact}
              onChange={(e) => setData({ ...data, contact: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 block w-full bg-zinc-50 drop-shadow-md rounded-xl dark:bg-zinc-700"
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
              className="mt-1 p-2 block w-full bg-zinc-50 drop-shadow-md rounded-xl dark:bg-zinc-700"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="w-full font-bold py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 dark:bg-indigo-400 dark:text-zinc-100 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Register
          </button>
          <div className="text-sm text-center">
            <a href="/login">Already Registered? Login here</a>
          </div>
        </form>
       
      </div>
      <div className="m-10">
        <img src="/loginbg.png" alt="pic" />
      </div>
    </div>
  );
};

export default Register;
