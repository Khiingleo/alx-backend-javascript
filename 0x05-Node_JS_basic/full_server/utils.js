const fs = require('fs');

const readDatabase = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    const lines = data.trim().split('\n');
    const studentsByField = {};

    lines.forEach((line, idx) => {
      if (idx === 0) {
        return;
      }

      // eslint-disable-next-line no-unused-vars
      const [firstName, _, __, field] = line.split(',');
      if (field) {
        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstName);
      }
    });

    resolve(studentsByField);
  });
});

module.exports = readDatabase;
