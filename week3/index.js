function EmployeeInfo(name, Salary)
{
    console.log("Welcome " + name + " Your monthly Salary is " + Salary);
}

/* display current date and time */
const currentDateTime = new Date();
console.log("This is my first program");
console.log("Program run on : " + currentDateTime.toLocaleString());

var EmpName = "John";
var EmpSalary = 50000;

/* calling the function */
EmployeeInfo(EmpName, EmpSalary);

/* second exercise */
const EmpSkills= (skills,Name,LabGrp)=> {
    console.log(" Student ID"+ Name+ "Expert in "+ skills)
    console.log("lab Group Name",LabGrp)
}
EmpSkills("Java","3201799 ","19 Lab Grp")

/* third exercise */
const student= require('./Studentinfo')
const person = require('./Person')

console.log("Student Name:" +student.getName())
console.log(student.Location())
console.log(student.dob)

/* because dob is a variable so we don't use */

console.log(student.Studentgrade())
console.log("grade is "+student.Studentgrade(55))
person1= new person("gopi","India","tgopirallapalli@gmail.com")
console.log("using Person Module",person1.getPersonInfo())
console.log("Programe ended")