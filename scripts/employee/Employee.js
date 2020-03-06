export const employeeHtml = (employeeObject) => {
    return`
        <aside class="EmployeeAside">
            <section>
                <ul>
                    <li>Id: ${employeeObject.id}</li>
                    <li>First Name: ${employeeObject.firstName}</li>
                    <li>Last Name: ${employeeObject.lastName}</li>
                    <li>Job Title: ${employeeObject.jobTitle}</li>
                    <li>Hours Scheduled: ${employeeObject.hoursScheduled}</li>
                </ul>
            </section> 
        </aside>
    `
}