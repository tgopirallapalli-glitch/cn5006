const dateofBirth= "03/08/2008"
const getStudentName =  () =>
{
    return "write your name here"
}
const getCampusName = () =>
{return ("UEL Campus ")
}

/* exporting functions and variable outside the module */
exports.getName=getStudentName
exports.Location=getCampusName
exports.dob=dateofBirth

/* how to export function with parameters */

exports.Studentgrade=(marks)=>
{
    if (marks>50 && marks <70) return ("A grade")
        else
    return ("A grade")
}