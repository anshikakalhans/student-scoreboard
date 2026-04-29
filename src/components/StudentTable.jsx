import StudentRow from "./StudentRow";

function StudentTable({ students, updateScore }) {
  return (
    <>
      <div className="records">
        <div className="record-head">
          <span className="entries">{students.length}entries</span>
        </div>

        <table className="scoreboard">
          <thead>
            <tr>
              <th>NAME</th>
              <th>SCORE</th>
              <th>STATUS</th>
              <th>UPDATE</th>
            </tr>
          </thead>

          <tbody>
            {students.map((s) => (
              <StudentRow key={s.id} student={s} updateScore={updateScore} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="footer">
        ACADEMIC TERMINAL &nbsp;·&nbsp; SECURE SESSION
      </div>
    </>
  );
}

export default StudentTable;
