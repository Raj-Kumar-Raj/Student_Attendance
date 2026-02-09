import React, { useState } from "react";
import axios from "axios";

const AddStudentForm = ({ fetchStudents }) => {
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/students", { name, rollNo });
      setName("");
      setRollNo("");
      fetchStudents();
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Roll No"
        value={rollNo}
        onChange={(e) => setRollNo(e.target.value)}
      />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default AddStudentForm;
