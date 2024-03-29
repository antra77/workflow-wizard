import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col gap-20 justify-center items-center m-10 bg-slate-400 dark:bg-black">
      <Link className=" bg-indigo-700 text-white p-5 rounded-2xl" to="/login">
        Login
      </Link>
      <Link
        className=" bg-indigo-700 text-white p-5 rounded-2xl"
        to="/register"
      >
        Register
      </Link>
    </div>
  );
};

export default Home;
