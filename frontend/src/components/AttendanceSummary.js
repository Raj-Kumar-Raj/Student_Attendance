const AttendanceSummary = ({ students }) => {
  const total = students.length;
  const present = students.filter((s) => s.isPresent).length;
  const absent = total - present;

  return (
    <div className="summary">
      <p>Total Students: {total}</p>
      <p>Present: {present}</p>
      <p>Absent: {absent}</p>
    </div>
  );
};

export default AttendanceSummary;
