const students = [
  { name: "Aman", marks: 85 },
  { name: "Ravi", marks: 40 },
  { name: "Neha", marks: 92 }
];

// map, filter, reduce
const passed = students.filter(s => s.marks >= 50);

const total = students.reduce((sum, s) => sum + s.marks, 0);

const names = students.map(s => s.name);

// Destructuring
students.forEach(({ name, marks }) => {
  console.log(`${name} scored ${marks}`);
});

// Rest parameters
const summary = (...marks) =>
  `Average Marks: ${marks.reduce((a,b)=>a+b)/marks.length}`;

console.log(summary(85,40,92));
