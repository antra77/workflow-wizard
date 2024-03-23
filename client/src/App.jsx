import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import {Dashboard,Projects,Schedule,Tasks,Profile} from "./pages/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <div className="flex container-fluid gap-1">
        <Sidebar />
        
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/schedule" element={<Schedule />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/tasks" element={<Tasks />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
