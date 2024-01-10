// class director's interface
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// class teacher's interface
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// class director implementing directorinterface
class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from Home";
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

// class teacher implementing teacher interface
class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
}

const createEmployee = (salary: number | string): Director | Teacher => {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
};

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));


const isDirector = (employee: Director | Teacher): employee is Director => {
    return 'workDirectorTasks' in employee;
};

const executeWork = (employee: Director | Teacher): string => {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
};

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));


type Subjects = 'Math' | 'History';

const teachClass = (todayClass: Subjects): string => {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else if (todayClass === 'History') {
        return 'Teachin History'
    } 
};

console.log(teachClass('Math'));
console.log(teachClass('History'));