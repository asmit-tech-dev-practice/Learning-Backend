function getStudentReport(student) {
  const { name, roll, marks } = student;

  const [math, science, english] = marks;

  const total = math + science + english;
  const average = total / marks.length;

  let grade;
  if (average >= 90) {
    grade = "A";
  } else if (average >= 80) {
    grade = "B";
  } else if (average >= 70) {
    grade = "C";
  } else {
    grade = "D";
  }

  return { name, roll, average, grade };
}

const student1 = {
  name: "Rohan",
  roll: 1,
  marks: [85, 75, 80]
};

const report = getStudentReport(student1);
console.log(report);
