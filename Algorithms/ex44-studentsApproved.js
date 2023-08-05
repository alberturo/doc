// given an array of students (names and scores) filter those students who are approved and how many aren't

const array_students = [
  ["John", 10],
  ["Albert", 5],
  ["Peter", 4],
  ["Paula", 8],
];

function filterStudent(students) {
  let passed = [];
  let failed = [];
  for (student of students) {
    if (student[1] >= 5) {
      passed.push(student);
    } else {
      failed.push(student);
    }
  }
  return `studenes who are passed: ${passed} and failed: ${failed}`;
}

console.log(filterStudent(array_students));
