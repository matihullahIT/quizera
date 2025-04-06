import React from "react";
import { FaHome, FaQuestionCircle, FaUsers, FaChartBar, FaCog, FaLayerGroup ,FaUser} from "react-icons/fa";

export const AdminNavbar = [
  {
    label: "Home",
    link: "/",
    icon: <FaHome />,
  },
  {
    label: "Quizzes",
    link: "/quizzes",
    icon: <FaQuestionCircle />,
  },
  {
    label: "Categories",
    link: "/categories",
    icon: <FaLayerGroup />,
  },
  {
    label: "Students",
    link: "/students",
    icon: <FaUsers />,
  },
  {
    label: "Reports",
    link: "/reports",
    icon: <FaChartBar />,
  },
  {
    label: "Settings",
    link: "/settings",
    icon: <FaCog />,
  },
  {
    label: "login",
    link: "/login",
    icon: <FaUser />,
  },
];

export const students = [
  {
   
    name: "Ali Raza",
    email: "ali.raza@example.com",
    enrolledDate: "2025-01-10",
    quizzesTaken: 3,
    averageScore: '82%',
  },
  {
    name: "Fatima Khan",
    email: "fatima.khan@example.com",
    enrolledDate: "2025-01-15",
    quizzesTaken: 4,
    averageScore: '91%',
  },
  {
   
    name: "Usman Tariq",
    email: "usman.tariq@example.com",
    enrolledDate: "2025-02-01",
    quizzesTaken: 2,
    averageScore: '76%',
  },
  {
   
    name: "Ayesha Siddiqui",
    email: "ayesha.siddiqui@example.com",
    enrolledDate: "2025-03-03",
    quizzesTaken: 1,
    averageScore: '88%',
  },
  {
   
    name: "Zainab Malik",
    email: "zainab.malik@example.com",
    enrolledDate: "2025-02-20",
    quizzesTaken: 0,
    averageScore: 'N/A',
  },
];
