

class Student {
    constructor(studName, surname, paid, pin, gpa) {
        this.firstName = studName;
        this.lastName = surname;
        this.paid = paid;
        this.pin = pin;
        this.gpa = gpa;

        this.getFullName = () => {
            return this.firstName + ' ' + this.lastName;
        }
    }
}

class Group {
    constructor(groupName, degree, currentYear, students = []) {
        this.name = groupName;
        this.degree = degree;
        this.currentYear = currentYear;
        this.students = students;
        this.addStudent = (student) => {
            this.students.push(student);
        };
        this.removeStudent = (pin) => {
            this.students = this.students.filter((student) => student.pin !== pin)
        };
        this.findAllStudents = (point) => {
            this.students = this.students.filter((student) => student.gpa>point)
        };
        
    }
}


class University {
    constructor(uniName, location, groups = []) {
        this.name = uniName;
        this.location = location;
        this.groups = groups;
        this.addGroups = (group) => {
            this.groups.push(group);
        };
        //transfer 
    }
}

const stud1 = new Student("Emilya", "Aghayeva", 2000, "N1", 94);
const stud2 = new Student("Gulchin", "Taghizada", 1500, "N4", 88);
const stud3 = new Student("Fidan", "Mammadova", 1000, "N6", 79);

const group1 = new Group("Bp201", 10, 2022);
const group2 = new Group("Bp202", 7, 2021);

const uni1 = new University("BDU", "National Science Academy");
const uni2 = new University("ADA", "Ganjlik");


//adding students to existing groups
group1.addStudent(stud1);
group1.addStudent(stud2);
group1.addStudent(stud3);
console.log(group1);
//group1den gpasi 90den chox olan studs
group1.findAllStudents(80);
console.log(group1);

//adding groups to universities
uni1.addGroups(group1);
console.log(uni1);

//transfer
//uniye groupu add ele







