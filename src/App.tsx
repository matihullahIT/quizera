// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import { AdminNavbar } from "./constants";
import Students from "./pages/Students";
// import Layout from "./components/Layout";
import {MyProvider} from "./context/usercontext";
// import Home from "./pages/Home";
// import Quizzes from "./pages/Quizzes";
// import Categories from "./pages/Categories";
// import Users from "./pages/Users";
// import Reports from "./pages/Reports";
// import Settings from "./pages/Settings";
import Login from "./pages/Login";

const App = () => { 
  return (
    <MyProvider>
    <Router>
    <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* Reusable Navbar */}
      <Routes>
        <Route path="/students" element={<Students />} />
        {/* <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/users" element={<Users />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} /> */}
      </Routes>
    </Router>
    </MyProvider>
  );
};

export default App;