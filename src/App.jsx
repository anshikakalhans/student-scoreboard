import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Apoorv", score: 99 },
    { id: 2, name: "Nidhi", score: 33 },
    { id: 3, name: "Jiya", score: 100 },
    { id: 4, name: "Tanya", score: 39 },
  ]);

  const updateScore = (id, score) => {
    setStudents(
      students.map((s) => (s.id === id ? { ...s, score: Number(score) } : s)),
    );
  };

  const addStudent = (name, score) => {
    if (!name || score === "") return;

    const newStudent = {
      id: Date.now(),
      name,
      score: Number(score),
    };

    setStudents([...students, newStudent]);
  };

  const total = students.length;
  const passed = students.filter((s) => s.score >= 40).length;
  const avg = students.reduce((sum, s) => sum + s.score, 0) / students.length;
  return (
    <div className="app">
      <Header />
      <div className="container">
        <AddStudentForm addStudent={addStudent} />

        <div className="stats">
          <div className="card">
            <p>TOTAL</p>
            <h2>{total}</h2>
          </div>

          <div className="card">
            <p>PASSED</p>
            <h2>{passed}</h2>
          </div>

          <div className="card">
            <p>AVG SCORE</p>
            <h2>{avg.toFixed(0)}</h2>
          </div>
        </div>

        <StudentTable students={students} updateScore={updateScore} />
      </div>
    </div>
  );
}

export default App;
