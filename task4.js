const students = [
  { id: 1, name: "Ada", score: 96, subject: "Math" },
  { id: 2, name: "Tunde", score: 84, subject: "Physics" },
  { id: 3, name: "Mina", score: 73, subject: "Chemistry" },
  { id: 4, name: "Chidi", score: 68, subject: "Biology" },
  { id: 5, name: "Zara", score: 55, subject: "Math" },
  { id: 6, name: "Noah", score: 90, subject: "Physics" },
];

function getPassingStudents(students, passMark) {
  return students.filter((student) => student.score >= passMark);
}

function getAverageScore(students) {
  const total = students.reduce((sum, student) => sum + student.score, 0);
  return total / students.length;
}

function getTopStudent(students) {
  return students.reduce((top, student) =>
    student.score > top.score ? student : top,
  );
}

function assignGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

// this section makes a new array and leaves students un unchanged.
const studentsWithGrades = students.map((student) => ({
  ...student,
  grade: assignGrade(student.score),
}));

console.log("Passing students:", getPassingStudents(students, 70));
console.log("Average score:", getAverageScore(students));
console.log("Top student:", getTopStudent(students));
console.log("Students with grades:", studentsWithGrades);
