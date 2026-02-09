import React, { useState, useEffect } from "react";
import axios from "axios";
import AddStudentForm from "./components/AddStudentForm";
import StudentList from "./components/StudentList";
import AttendanceSummary from "./components/AttendanceSummary";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const res = await axios.get("https://student-attendance-smev.onrender.com/api/students");
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Attendance System</h1>
      <AddStudentForm fetchStudents={fetchStudents} />
      <StudentList students={students} fetchStudents={fetchStudents} />
      <AttendanceSummary students={students} />
    </div>
  );
}

export default App;
