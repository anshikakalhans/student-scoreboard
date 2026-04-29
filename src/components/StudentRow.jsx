import { useState } from "react";

function StudentRow({ student, updateScore }) {
  const [tempScore, setTempScore] = useState(student.score);
  const pass = student.score >= 40;

  return (
    <tr className={`student-row ${pass ? "row-pass" : "row-fail"}`}>
      <td>{student.name}</td>
      <td className="yellow">{student.score}</td>

      <td>
        <span className={pass ? "pass" : "fail"}>
          ● {pass ? "PASS" : "FAIL"}
        </span>
      </td>
      <td>
        <input
          type="text"
          value={tempScore}
          onChange={(e) => setTempScore(e.target.value)}
        />

        <button
          className="save-btn"
          onClick={() => updateScore(student.id, tempScore)}
        >
          SAVE
        </button>
      </td>
    </tr>
  );
}

export default StudentRow;
