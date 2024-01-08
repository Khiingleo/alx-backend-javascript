const getStudentIdsSum = (students) => {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.reduce((accumulator, current) => accumulator + current.id, 0);
};

export default getStudentIdsSum;
