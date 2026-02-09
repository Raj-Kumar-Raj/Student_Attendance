import React from "react";
import axios from "axios";

const AttendanceToggle = ({ student, fetchStudents }) => {
  const toggleAttendance = async () => {
    try {
      // Toggle attendance on backend
      await axios.put(
        `https://student-attendance-smev.onrender.com/api/students/${student._id}/attendance`,
      );
      fetchStudents(); // Refetch data to update table & summary
    } catch (err) {
      alert(err.response?.data?.message || "Error updating attendance");
    }
  };

  // Show the button as the *action* you want to do
  return (
    <button
      onClick={toggleAttendance}
      className={student.isPresent ? "absent" : "present"}
    >
      {student.isPresent ? "Mark Absent" : "Mark Present"}
    </button>
  );
};

export default AttendanceToggle;
