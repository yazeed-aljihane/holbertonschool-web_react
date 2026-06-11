interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}



const student1: Student = {firstName: 'yazeed', lastName: 'aljohani', age: 25, location: 'AL-madena'}
const student2: Student = {firstName: 'khaled', lastName: 'al', age: 49, location: 'fjf'}

const studentsList: Student[] = [student1, student2]

const table = document.createElement('table')

studentsList.forEach((student) => {
    const row = document.createElement('tr');
    const firstnameCell = document.createElement('td')
    const locationCell = document.createElement('td')

    firstnameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstnameCell);
    row.appendChild(locationCell)

    table.appendChild(row);


})
    document.body.appendChild(table);
