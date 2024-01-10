interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const studentUno: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 17,
    location: "Lagos",
};

const studentDos: Student = {
    firstName: "Jane",
    lastName: "Doe",
    age: 16,
    location: "Abuja",
};

const studentList: Student[] = [studentUno, studentDos];

function renderTable(students: Student[]) {
    const table = document.createElement("table");

    const headerRow = document.createElement("tr");
    const headerFirstName = document.createElement("th");
    const headerLocation = document.createElement("th");

    headerFirstName.textContent = "First Name";
    headerLocation.textContent = "Location";

    headerRow.appendChild(headerFirstName);
    headerRow.appendChild(headerLocation);

    table.appendChild(headerRow);

    students.forEach((student) => {
        const row = document.createElement("tr");
        const cellFirstName = document.createElement("td");
        const cellLocation = document.createElement("td");

        cellFirstName.textContent = student.firstName;
        cellLocation.textContent = student.location;

        row.appendChild(cellFirstName);
        row.appendChild(cellLocation);
        
        table.appendChild(row);
    });

    document.body.appendChild(table);
}

renderTable(studentList);