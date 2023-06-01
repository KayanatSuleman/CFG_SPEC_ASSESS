// Part 2 - Please refer to CFG_SPEC_ASSESSMENT as uploaded to Slack.
// Part 2.a - Please refer to CFG_SPEC_ASSESSMENT as uploaded to Slack.
// Part 2.b
const classInfo = () => {
    const [studentsCount, setStudentsCount] = useState(0);
    function handleAddStudent() {
    const presentStudents = students.filter((student) => student.present);
    setStudentsCount(presentStudents.length); }
    return ( <div>
    <p>Number of students in the classroom: {studentsCount}</p> <button onClick={handleAddStudent}>Add Student</button>
    </div> );
    }
// Part 2.c - Please refer to CFG_SPEC_ASSESSMENT as uploaded to Slack.