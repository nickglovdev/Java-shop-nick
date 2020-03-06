import { employeeHtml } from "./Employee.js"
import { useEmployee } from "./employeeDataProvider.js"

const targetHtml = document.querySelector(".container")

export const EmployeeList = () => {
    //Array of employees
    const arrayOfEmployees = useEmployee()

    for (const employeeObject of arrayOfEmployees) {
        //HTML representation of Employees
        const htmlRepresentativeEmployee = employeeHtml(employeeObject)
        // Place HTML into the DOM
        targetHtml.innerHTML += htmlRepresentativeEmployee
    }
}