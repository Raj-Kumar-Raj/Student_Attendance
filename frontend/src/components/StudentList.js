import React from "react";
import AttendanceToggle from "./AttendanceToggle";
import axios from "axios";

const StudentList = ({ students, fetchStudents }) => {
  const deleteStudent = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      try {
        await axios.delete(`http://localhost:5000/api/students/${id}`);
        fetchStudents(); // Refresh the list
      } catch (err) {
        alert(err.response?.data?.message || "Error deleting student");
      }
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Roll No</th>
          <th>Attendance</th>
          <th>Action</th> {/* New column */}
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student._id}>
            <td>{student.name}</td>
            <td>{student.rollNo}</td>
            <td>
              <AttendanceToggle
                student={student}
                fetchStudents={fetchStudents}
              />
            </td>
            <td>
              <button
                onClick={() => deleteStudent(student._id)}
                className="delete"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentList;
