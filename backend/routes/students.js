const express = require("express");
const router = express.Router();
const Student = require("../models/student");

// Add student
router.post("/", async (req, res) => {
  try {
    const { name, rollNo } = req.body;
    if (!name || !rollNo) {
      return res.status(400).json({ message: "Name & Roll No required" });
    }

    const existing = await Student.findOne({ rollNo });
    if (existing) {
      return res.status(400).json({ message: "Roll No already exists" });
    }

    const student = new Student({ name, rollNo });
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all students
router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Toggle attendance
router.put("/:id/attendance", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found" });

    // TOGGLE attendance
    student.isPresent = !student.isPresent;

    await student.save();
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete student (optional)
router.delete("/:id", async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
