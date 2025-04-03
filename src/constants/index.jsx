import { FaHome, FaQuestionCircle, FaUsers, FaChartBar, FaCog, FaLayerGroup } from "react-icons/fa";

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
    label: "Users",
    link: "/users",
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
];
