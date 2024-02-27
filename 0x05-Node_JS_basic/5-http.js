const http = require('http');
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
        // eslint-disable-next-line no-unused-vars
        const [firstName, lastName, age, field] = line.split(',');
        if (field) {
          if (!counters[field]) {
            counters[field] = { count: 0, names: [] };
          }
          // eslint-disable-next-line no-plusplus
          counters[field].count++;
          counters[field].names.push(firstName);
        }
      });

      const studentsData = Object.entries(counters).map(([field, data]) => {
        const numbers = data.count;
        const names = data.names.join(', ');
        return `Number of students in ${field}: ${numbers}. List: ${names}`;
      }).join('\n');

      resolve(studentsData);
    }
  });
});

const app = http.createServer((req, res) => {
  const handleError = (error) => {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end(error.message);
  };

  const sendResponse = (statusCode, data) => {
    res.writeHead(statusCode, { 'Content-Type': 'text/plain' });
    res.end(data);
  };

  if (req.url === '/') {
    sendResponse(200, 'Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then((studentData) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is the list of our students\n');
        res.write(studentData);
        res.end();
      })
      .catch((error) => {
        handleError(error);
      });
  } else {
    sendResponse(404, 'Not Found\n');
  }
});

app.listen(1245, () => {
  console.log('Server is running at http://localhost:1245');
});

module.exports = app;
