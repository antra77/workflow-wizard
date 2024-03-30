/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-between items-center container-fluid bg-zinc-50 dark:bg-zinc-800 w-full h-screen drop-shadow-xl">
      <div className="max-w-md mx-auto ml-36 bg-zinc-50 dark:bg-zinc-700 dark:text-zinc-50 rounded-2xl p-10 mt-2 drop-shadow-lg">
        <h2 className="text-2xl font-bold mb-10">Login</h2>

        <form onSubmit={loginUser} className="space-y-10">
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
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
          <div className="text-sm">
            <a href="/register">don't have an account ? register here</a>
          </div>
        </form>
      </div>
      <div className="m-1">
        <img src="/loginbg.png" alt="pic" />
      </div>
    </div>
  );
};

export default Login;
