const http = require('http');
const fs = require('fs');

function getStudentsData(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.trim().split('\n');

      if (lines.length <= 1) {
        resolve({ totalStudents: 0, details: {} });
        return;
      }

      const students = {};

      lines.slice(1).forEach((line) => {
        const fields = line.split(',');
        const field = fields[fields.length - 1].trim();

        if (!students[field]) {
          students[field] = [];
        }

        students[field].push(fields[0]);
      });

      let totalStudents = 0;

      Object.keys(students).forEach((field) => {
        totalStudents += students[field].length;
      });

      resolve({ totalStudents, details: students });
    });
  });
}

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    getStudentsData(process.argv[2])
      .then(({ totalStudents, details }) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is the list of our students\n');
        res.write(`Number of students: ${totalStudents}\n`);
        Object.keys(details).forEach((field) => {
          const numStudents = details[field].length;
          res.write(`Number of students in ${field}: ${numStudents}. List: ${details[field].join(', ')}\n`);
        });
        res.end();
      })
      .catch((error) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`${error.message}\n`);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found\n');
  }
});

app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/');
});

module.exports = app;