export default function createIteratorObject(report) {
  let allEmployees = [];

  for (const i of Object.values(report.allEmployees)) {
    allEmployees = [
      ...allEmployees,
      ...i,
    ];
  }

  return allEmployees;
}
