const fs = require("fs");

const countStudents = (path) => {
    // check if the path exists synchronously
    if (!fs.existsSync(path)) {
        throw new Error("Cannot load the database");
    }
    // check if it is file
    if (!fs.statSync(path).isFile) {
        throw new Error("Cannot load the database");
    }

    // read the file synchronously
    const data = fs.readFileSync(path, "utf-8");
    // remove whitespaces and split lines
    const lines = data.trim().split("\n");

    // counters for each field
    const counters = {};

    // iterate through each line in the file excluding the first liine
    lines.forEach((line, idx) => {
        // exclude the first line
        if (idx === 0) {
            return;
        }
        // get the data info
        const [firstName, lastName, age, field] = line.split(',');
        // check if field is empty or undefined
        if (field) {
            // increment the counter
            if (!counters[field]) {
                counters[field] = { count: 0, names: [] };
            }
            counters[field].count++;
            counters[field].names.push(firstName);
        }
    });
    // log the number of students in each field after processing all lines
    console.log(`Number of students: ${lines.length - 1}`);
    for (const field in counters) {
        const numbers = counters[field].count;
        const names = counters[field].names.join(', ');
        console.log(`Number of students in ${field}: ${numbers}. List: ${names}`);
    }
};

module.exports = countStudents;
