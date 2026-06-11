interface DerctorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DerctorInterface{
    workFromHome(): string {
        return "Working from home";
    }

    getCoffeeBreak(): string {
        return "Taking a coffee break";
    }

    workDirectorTasks(): string {
        return "Working on director tasks";
    }
}

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
};


function createEmployee(salary: number | string): Teacher | Director {
    if ( typeof(salary) === "number"){
        if(salary < 500){
            return new Teacher();
        }
    }
    return new Director();
}