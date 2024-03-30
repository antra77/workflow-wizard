/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-between items-center container-fluid bg-zinc-50 dark:bg-zinc-800 w-full h-screen drop-shadow-xl">
      <div className="w-1/2">
        <img src="/welcomebg.png" alt="pic" />
      </div>
      <div className="w-1/2 mt-24 flex flex-col items-center pt-5 mr-5 mb-5 bg-zinc-50 dark:bg-zinc-800 rounded-2xl drop-shadow-lg">
        <h1 className="text-2xl font-bold text-blue-900 dark:text-blue-300">
          Welcome to Wizard Workflow
        </h1>
        <div className="flex flex-col gap-5 m-2 p-10 text-zinc-600 dark:text-zinc-100 text-sm">
          <p>
            Welcome to Wizard Workflow, where productivity meets simplicity.
            With intelligent organization, seamless collaboration, and powerful
            insights, Wizard Workflow helps you conquer your to-do list with
            ease.
          </p>
          <p>
            <span className="font-bold text-blue-900 dark:text-blue-200">
              Streamline Your Tasks -{" "}
            </span>
            Effortlessly organize your tasks and prioritize what matters most.
          </p>
          <p>
            <span className="font-bold text-blue-900 dark:text-blue-200">
              Collaborate with Ease -{" "}
            </span>
            Share tasks, assign responsibilities, and communicate seamlessly
            with your team.
          </p>
          <p>
            <span className="font-bold text-blue-900 dark:text-blue-200">
              Stay Connected -{" "}
            </span>
            Sync across devices and platforms, ensuring productivity wherever
            you go.
          </p>
          <p>
            <span className="font-bold text-blue-900 dark:text-blue-200">
              Data-Driven Insights -{" "}
            </span>
            Track progress and optimize your workflow with insightful analytics.
          </p>
          <p className="font-bold text-blue-900 dark:text-blue-200">
            Create an account and let's make productivity magic!
          </p>
          <div className="flex gap-5 mt-8 justify-center items-center">
            <Link
              to="/register"
              className="bg-blue-900 dark:bg-blue-300 text-white dark:text-zinc-700 rounded-xl px-5 py-3 font-bold drop-shadow-lg"
            >
              Register
            </Link>
            <h1 className="text-lg font-bold">or</h1>
            <Link
              to="/login"
              className="bg-blue-900 dark:bg-blue-300 text-white dark:text-zinc-700 rounded-xl px-5 py-3 font-bold drop-shadow-lg"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
