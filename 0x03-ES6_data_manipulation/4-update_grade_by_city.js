const updateStudentGradeByCity = (students, city, newGrades) => {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const changedGrade = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: changedGrade ? changedGrade.grade : 'N/A',
      };
    });
};

export default updateStudentGradeByCity;
