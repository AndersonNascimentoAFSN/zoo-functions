"use strict";
function createEmployee(personalInfo, associatedWith) {
    return Object.assign(Object.assign({}, personalInfo), associatedWith);
}
function addEmployee(dataEmployee, dataZoo) {
    const { employees } = dataZoo;
    const { id, firstName, lastName, managers, responsibleFor } = dataEmployee;
    const employee = createEmployee({ id, firstName, lastName }, { managers, responsibleFor });
    employees.push(employee);
}
