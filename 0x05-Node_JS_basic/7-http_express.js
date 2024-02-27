const express = require('express');
const fs = require('fs').promises;

const app = express();

async function readDatabase(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.trim().split('\n');

    if (lines.length <= 1) {
      return 'Number of students: 0';
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

    let result = '';
    let totalStudents = 0;

    const fieldKeys = Object.keys(students).sort();
    fieldKeys.forEach((field) => {
      const numStudents = students[field].length;
      totalStudents += numStudents;
      result += `Number of students in ${field}: ${numStudents}. List: ${students[field].join(', ')}\n`;
    });

    if (totalStudents > 0) {
      result = `Number of students: ${totalStudents}\n${result}`;
    }

    return result;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const data = await readDatabase(process.argv[2]);
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(1245, () => {
  console.log('Server is running at http://localhost:1245/');
});

module.exports = app;
