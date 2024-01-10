interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number; // optional attribute
    location: string;
    [key: string]: any; // allow additional attribute of any type 
}

// const teacher3: Teacher = {
//     firstName: 'John',
//     fullTimeEmployee: false,
//     lastName: 'Doe',
//     location: 'London',
//     contract: false,
// };

// console.log(teacher3);

interface Directors extends Teacher {
    numberOfReports: number;
}

// const director1: Directors = {
//     firstName: 'John',
//     lastName: 'Doe',
//     fullTimeEmployee: true,
//     location: 'London',
//     numberOfReports: 17,
// };

// console.log(director1);

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// print first letter of firstName and full lastName
const printTeacher: printTeacherFunction = (firstName, lastName) => {
    const firstLetter = firstName.charAt(0).toUpperCase();
    const fullName = `${firstLetter}. ${lastName}`;
    return fullName;
}

// testing the name
const testName = printTeacher("John", "Doe");
console.log(testName);


// interface describing the properties that studentclass should have
interface StudentClassConstructor {
    firstName: string;
    lastName: string;
}

// class studentclass's interface
interface StudentClassInterface {
    workOnHomeWork(): string;
    displayName(): string;
}


// class studentclass implementing studentclassinterface
class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    // constructor using studentclassconstructor parameters
    constructor ({ firstName, lastName }: StudentClassConstructor) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomeWork(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

// testing out the student class
const studentInstance = new StudentClass({ firstName: "John", lastName: "Doe"});
console.log(studentInstance.workOnHomeWork());
console.log(studentInstance.displayName());
