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
    roll_number: "A-1",
    name: "Ali Raza",
    email: "ali.raza@example.com",
    password: "fatima.khan@example.com",
    enrolledDate: "2025-01-10",
    quiz: {
      taken: 7,
      passed: 4,
      failed: 3,
      average: '82%',
      status: 'pass',
    },
    remaining_quiz: true,
  },
  {
    roll_number: "A-2",
    name: "Fatima Khan",
    email: "fatima.khan@example.com",
    password: "fatima.khan@example.com",
    enrolledDate: "2025-01-15",
    quiz: {
      taken: 7,
      passed: 6,
      failed: 1,
      average: '91%',
      status: 'pass',
    },
    remaining_quiz: true,
  },
  {
    roll_number: "A-3",
    name: "Usman Tariq",
    email: "usman.tariq@example.com",
    password: "fatima.khan@example.com",
    enrolledDate: "2025-02-01",
    quiz: {
      taken: 7,
      passed: 3,
      failed: 4,
      average: '76%',
      status: 'pass',
    },
    remaining_quiz: true,
  },
  {
    roll_number: "A-4",
    name: "Ayesha Siddiqui",
    email: "ayesha.siddiqui@example.com",
    password: "fatima.khan@example.com",
    enrolledDate: "2025-03-03",
    quiz: {
      taken: 7,
      passed: 5,
      failed: 2,
      average: '88%',
      status: 'pass',
    },
    remaining_quiz: true,
  },
  {
    roll_number: "A-5",
    name: "Zainab Malik",
    email: "zainab.malik@example.com",
    password: "fatima.khan@example.com",
    enrolledDate: "2025-02-20",
    quiz: {
      taken: 0,
      passed: 0,
      failed: 0,
      average: 'N/A',
      status: 'fail',
    },
    remaining_quiz: false,
  },
];
