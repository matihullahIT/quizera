import { useEffect, useState } from "react";
import { students, AdminNavbar } from "../constants";
import Layout from "../components/Layout";
import '../index.css'

import {FaPencilAlt,FaTrashAlt, FaFileAlt} from 'react-icons/fa'
interface Student {
  name: string;
  password:string,
  email: string;
  enrolledDate:string,
  remaining_quiz:true|false|null,
  quiz: {
    taken: number;
    passed: number;
    failed: number;
    average: string;
    status: string;
  };
}

const Students = () => {
  const [toggler,settoggler]=useState({
    addStudent:false,
    editStudent:false,
    deleteStudent:false,
    exportStudent:false

  })
  const TogglerHandler = (key: keyof typeof toggler) => {
    settoggler((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
    alert(`Toggled ${key} to ${!toggler[key]}`);
  };
  useEffect(()=>{
    document.title = "Students Details"
  },[])
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredStudents, setFilteredStudents] = useState<Student[]>(students);

  const handleSearch = () => {
    const filtered = students.filter((student: Student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStudents(filtered);
  };
  const Notifiation=()=>
  {
    
  }
  return (
    <Layout
      navbar={AdminNavbar}
      search={
        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onKeyDown={handleSearch}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="py-2 px-4 border border-blue-700 rounded-lg mr-2 bg-white"
          />
        </div>
      }
    >
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Students</h1>
        <div className="flex items-center mb-4">
          <button  onClick={()=>TogglerHandler('addStudent')} className="bg-blue-700 text-white py-2 px-4 rounded-lg mr-2">
            Add Student
          </button>
          <button onClick={()=>TogglerHandler('exportStudent')} className="bg-blue-700 text-white py-2 px-4 rounded-lg mr-2">
            Export
          </button>
        </div>
        <div className="grid gap-4">
          <table className="item-center text-center gap-3 capitalize">
            <tr>
              <th>Name</th>
              <th>Password</th>
              <th>Email</th>
              <th>Date</th>
              <th>Quiz Report</th>
              <th>Action</th>
              </tr>
          {filteredStudents.map((student: Student, index: number) => (
            <tr
              key={index}
              className="border border-blue-700 rounded-md items-center text-center bg-white px-6 py-4 
              even:bg-blue-100 odd:bg-blue-700 transition-all
               odd:text-white 
              shadow-lg gap-4"
              id={`student-${index}`}
            >
              <td className="font-bold px-4 py-2">{student.name}</td>
              <td className="px-4 py-2">{student.email}</td>
              <td className="px-4 py-2">{student.password}</td>
              <td className="px-4 py-2">{student.enrolledDate}</td>
              <td className="px-4 py-2 flex flex-col">
                <span>Quiz taken:{student.quiz.taken}</span>
              <span>Passed:{student.quiz.passed}</span>
              <span>Failed:{student.quiz.failed}</span>
              <span> Avg:{student.quiz.average}</span>
              <span>Status:{student.quiz.status}</span>
              </td>
              <td className="px-4 py-2">
                {student.remaining_quiz ? (
                  <span className="text-green-500 font-semibold">Quizes Completed</span>
                ) : (
                  <span className="text-red-500 font-semibold">Quizes Incomplete</span>
                )}
              </td>
              <td className="px-4 py-2">
                <span className="flex flex-col items-center justify-center text-center">
                <button 
                onClick={()=>TogglerHandler('editStudent')}
                className="flex p-2 border border-green-500 rounded-md transition-all hover:bg-green-700 hover:text-white text-green-500"><FaPencilAlt/> Edit</button>
                <button  className="flex p-2 border border-blue-500 rounded-md transition-all hover:bg-blue-700 hover:text-white text-blue-500"><FaFileAlt/>Results</button>
                <button onClick={()=>TogglerHandler('deleteStudent')} className="flex p-2 border border-red-500 rounded-md transition-all hover:bg-red-700 hover:text-white text-red-500"><FaTrashAlt/>Delete</button>
                </span>
                </td>
            </tr>
          ))}
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Students;
