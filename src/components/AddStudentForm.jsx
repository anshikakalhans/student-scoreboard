import { useState } from "react";

function AddStudentForm({ addStudent }) {
  const [name, setname] = useState("");
  const [score, setScore] = useState("");

  const submit = (e) => {
    e.preventDefault();
    addStudent(name, score);
    setname("");
    setScore("");
  };

  return (
    <div className="add-form-wrapper">
      <div className="add-form-header">
        <div className="dot-title">
          <span className="dot"></span>
          REGISTER STUDENT
        </div>
        <span className="new-entry">NEW ENTRY</span>
      </div>

      <form className="add-form" onSubmit={submit}>
        <input
          type="text"
          placeholder="Student name"
          value={name}
          onChangeCapture={(e) => setname(e.target.value)}
        />

        <input
          type="number"
          placeholder="Score (0-100)"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
        <button type="submit">+ ADD</button>
      </form>
    </div>
  );
}

export default AddStudentForm;
