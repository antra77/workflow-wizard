// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "../context/userContext";
import {
  Login,
  Register,
  Dashboard,
  Home,
  Projects,
  Schedule,
  Tasks,
  Profile,
} from "./pages/index";
import DarkMode from "./DarkMode";
import "./App.css";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
        <div className="absolute right-80 top-3">
          <DarkMode />
        </div>
        <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/schedule" element={<Schedule />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/tasks" element={<Tasks />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
    </UserContextProvider>
  );
}

export default App;
