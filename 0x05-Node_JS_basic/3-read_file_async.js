const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      const lines = data.trim().split('\n');
      const counters = {};

      lines.forEach((line, idx) => {
        if (idx === 0) {
          return;
        }
        const [firstName, lastName, age, field] = line.split(',');
        if (field) {
          if (!counters[field]) {
            counters[field] = { count: 0, names: [] };
          }
          counters[field].count++;
          counters[field].names.push(firstName);
        }
      });

      console.log(`Number of students: ${lines.length - 1}`);
      for (const field in counters) {
        const number = counters[field].count;
        const names = counters[field].names.join(', ');
        console.log(`Number of students in ${field}: ${number}. List: ${names}`);
      }

      resolve();
    }
  });
});

module.exports = countStudents;
