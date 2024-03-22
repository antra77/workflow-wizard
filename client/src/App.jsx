import React from "react";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar, Sidebar } from "./components";

import { Gantt, Kanban, Progress, Schedular, Team, ToDo } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar />
        <Routes>
            <Route path="/" element={<Progress />} />
            <Route path="/gantt" element={<Gantt />} />
            <Route path="/kanban" element={<Kanban />} />
            <Route path="/schedular" element={<Schedular />} />
            <Route path="/team" element={<Team />} />
            <Route path="/todo" element={<ToDo />} />
          </Routes>
      </div>
    </div>
  </BrowserRouter>
  );
};

export default App;
